import { useState, useEffect, useRef } from "react";
import axios from "axios";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;
const MODEL = "llama-3.3-70b-versatile";
const BASE_URL = "https://clinic-app-backend.vercel.app";

// ─────────────────────────────────────────────
// What Groq AI receives:
//   ✅ symptoms, prescriptions, dates, status, followup dates, doctor names
//   ❌ patient name, phone number, age, gender, IDs
// ─────────────────────────────────────────────

const PatientChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Hi! I'm your clinic assistant 👋\n\nI can help you with:\n• Your appointments & follow-ups\n• Understanding your prescriptions\n• Finding the right doctor\n• Using this app\n\nWhat do you need help with?"
        }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [chatData, setChatData] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    const messagesEndRef = useRef(null);

    const patientPhone = localStorage.getItem("phoneno");

    useEffect(() => {
        if (isOpen && !dataLoaded) fetchSafeData();
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const fetchSafeData = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/chatbot/patient-chat-data/${patientPhone}`);
            if (res.data.message) {
                setChatData(res.data.message);
            }
        } catch {
            setChatData(null);
        } finally {
            setDataLoaded(true);
        }
    };

    const buildPrompt = (userQuestion) => {
        const q = userQuestion.toLowerCase();
        const isFollowup = q.includes("follow");
        const isPrescription = q.includes("prescription") || q.includes("medicine") || q.includes("prescribed");
        const isAppointment = q.includes("appointment") || q.includes("visit") || q.includes("book");
        const isStats = q.includes("how many") || q.includes("total") || q.includes("last");

        let relevantContext = "";

        if (chatData) {
            if (isFollowup) {
                relevantContext = `FOLLOW-UP DATA:\n${
                    chatData.upcomingFollowups.length > 0
                        ? chatData.upcomingFollowups.map(f =>
                            `- Doctor: ${f.doctorname}, Date: ${f.followupdate}, For: ${f.symptoms}`
                          ).join("\n")
                        : "No upcoming follow-ups."
                }`;
            } else if (isPrescription) {
                relevantContext = `RECENT PRESCRIPTIONS:\n${
                    chatData.recentAppointments
                        .filter(a => a.prescription).slice(-3)
                        .map(a => `- Date: ${a.date}, Doctor: ${a.doctorname}, Symptoms: ${a.symptoms}, Prescribed: ${a.prescription}`)
                        .join("\n") || "No prescription records found."
                }`;
            } else if (isAppointment) {
                relevantContext = `APPOINTMENTS:\nTotal: ${chatData.totalAppointments}, Visited: ${chatData.visited}, Pending: ${chatData.pending}\nRecent:\n${
                    chatData.recentAppointments.slice(-3)
                        .map(a => `- Date: ${a.date}, Doctor: ${a.doctorname}, Status: ${a.status}`)
                        .join("\n")
                }`;
            } else if (isStats) {
                relevantContext = `STATS: Total: ${chatData.totalAppointments}, Visited: ${chatData.visited}, Pending: ${chatData.pending}, Follow-ups due: ${chatData.hasFollowups}`;
            } else {
                relevantContext = `SUMMARY: Total appointments: ${chatData.totalAppointments}, Pending: ${chatData.pending}, Follow-ups due: ${chatData.hasFollowups}`;
            }
        }

        return `You are a helpful clinic assistant for a patient using an online clinic app.

PRIVACY RULES — STRICTLY FOLLOW:
- You do NOT know and must NEVER ask for the patient's name, phone number, age, or gender
- Never reference or request any personal identifiers
- Only refer to the patient as "you"
- Only use the data provided below — do not make up records

${relevantContext ? `RELEVANT DATA (anonymised):\n${relevantContext}` : "No database context needed for this question."}

APP GUIDE:
- Book appointment: Doctors section → choose doctor → Book
- View bookings: My Bookings in menu
- Update profile: My Profile in menu
- Login: phone number, password is last 3 digits of phone

RULES:
- Answer only about appointments, prescriptions, follow-ups, app usage, general health
- For medical emergencies advise calling emergency services
- Be friendly and concise`;
    };

    const sendMessage = async (messageText) => {
        const text = (messageText || input).trim();
        if (!text || isLoading) return;

        const userMessage = { role: "user", content: text };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput("");
        setIsLoading(true);

        try {
            const response = await axios.post(
                GROQ_API_URL,
                {
                    model: MODEL,
                    messages: [
                        { role: "system", content: buildPrompt(text) },
                        // Filter out leading assistant messages — Groq requires conversation to start with user
                        ...updatedMessages.slice(-6).filter((m, i, arr) => {
                            const firstUserIndex = arr.findIndex(x => x.role === "user");
                            return arr.indexOf(m) >= firstUserIndex;
                        })
                    ],
                    max_tokens: 400,
                    temperature: 0.6
                },
                { headers: { Authorization: `Bearer ${GROQ_API_KEY}`, "Content-Type": "application/json" } }
            );
            setMessages(prev => [...prev, { role: "assistant", content: response.data.choices[0].message.content }]);
        } catch {
            setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I'm having trouble connecting. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const quickQuestions = ["Any follow-ups due?", "What was my last prescription?", "How do I book an appointment?", "How many visits so far?"];

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} style={{
                position: "fixed", bottom: "24px", right: "24px",
                width: "56px", height: "56px", borderRadius: "50%",
                background: "var(--primarycolor, #0A76D8)", color: "#fff",
                border: "none", cursor: "pointer", fontSize: "22px",
                boxShadow: "0 4px 16px rgba(10,118,216,0.4)", zIndex: 1000,
                display: "flex", alignItems: "center", justifyContent: "center"
            }} title="Patient Assistant">
                {isOpen ? "✕" : "💬"}
            </button>

            {isOpen && (
                <div style={{
                    position: "fixed", bottom: "92px", right: "24px",
                    width: "355px", height: "420px", background: "#fff",
                    borderRadius: "16px", boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                    display: "flex", flexDirection: "column", zIndex: 999,
                    overflow: "hidden", border: "1px solid #e2e8f0"
                }}>
                    <div style={{ background: "var(--primarycolor, #0A76D8)", color: "#fff", padding: "14px 16px", display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>🩺</div>
                        <div>
                            <div style={{ fontWeight: "600", fontSize: "14px" }}>Patient Assistant</div>
                            <div style={{ fontSize: "11px", opacity: 0.8 }}>
                                {dataLoaded ? "✓ Records loaded · No personal data shared" : "Loading records..."}
                            </div>
                        </div>
                    </div>

                    <div style={{ flex: 1, overflowY: "auto", padding: "12px", display: "flex", flexDirection: "column", gap: "10px", background: "#f8fafc" }}>
                        {messages.map((msg, i) => (
                            <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                                <div style={{
                                    maxWidth: "82%", padding: "10px 12px",
                                    borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                                    background: msg.role === "user" ? "var(--primarycolor, #0A76D8)" : "#fff",
                                    color: msg.role === "user" ? "#fff" : "#1a202c",
                                    fontSize: "13px", lineHeight: "1.5",
                                    boxShadow: "0 1px 4px rgba(0,0,0,0.07)", whiteSpace: "pre-wrap"
                                }}>{msg.content}</div>
                            </div>
                        ))}

                        {isLoading && (
                            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                                <div style={{ background: "#fff", padding: "10px 14px", borderRadius: "16px 16px 16px 4px", fontSize: "13px", color: "#94a3b8", boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}>Thinking...</div>
                            </div>
                        )}

                        {messages.length === 1 && (
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                                {quickQuestions.map((q, i) => (
                                    <button key={i} onClick={() => sendMessage(q)} style={{ background: "#e8f4ff", color: "#1b62b3", border: "1px solid #bee3f8", borderRadius: "20px", padding: "5px 10px", fontSize: "11px", cursor: "pointer" }}>{q}</button>
                                ))}
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div style={{ padding: "10px 12px", background: "#fff", borderTop: "1px solid #e2e8f0", display: "flex", gap: "8px", alignItems: "flex-end" }}>
                        <textarea rows={1} value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                            placeholder="Ask about your appointments..."
                            style={{ flex: 1, border: "1.5px solid #e2e8f0", borderRadius: "10px", padding: "8px 10px", fontSize: "13px", resize: "none", outline: "none", fontFamily: "inherit", lineHeight: "1.4" }}
                        />
                        <button onClick={() => sendMessage()} disabled={isLoading || !input.trim()}
                            style={{ background: isLoading || !input.trim() ? "#cbd5e0" : "var(--primarycolor, #0A76D8)", color: "#fff", border: "none", borderRadius: "10px", padding: "8px 14px", fontSize: "16px", cursor: isLoading || !input.trim() ? "not-allowed" : "pointer" }}>➤</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PatientChatbot;
