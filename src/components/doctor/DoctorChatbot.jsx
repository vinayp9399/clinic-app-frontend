import { useState, useEffect, useRef } from "react";
import axios from "axios";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;
const MODEL = "llama3-8b-8192";
const BASE_URL = "https://clinic-app-backend.vercel.app";

// ─────────────────────────────────────────────
// What Groq AI receives:
//   ✅ symptoms, prescriptions, dates, times, status, slot numbers, symptom frequency
//   ❌ patient names, phone numbers, ages, genders, patient IDs
// ─────────────────────────────────────────────

const DoctorChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Hi Doctor! 👨‍⚕️\n\nI can help you with:\n• Today's schedule & follow-ups\n• Patient case summaries\n• Appointment stats\n• App navigation\n\nWhat do you need?"
        }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [chatData, setChatData] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    const messagesEndRef = useRef(null);

    const doctorId = localStorage.getItem("id");
    const doctorName = localStorage.getItem("name");

    useEffect(() => {
        if (isOpen && !dataLoaded) fetchSafeData();
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const fetchSafeData = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/chatbot/doctor-chat-data/${doctorId}`);
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
        const isToday = q.includes("today") || q.includes("schedule") || q.includes("now");
        const isFollowup = q.includes("follow");
        const isStats = q.includes("how many") || q.includes("total") || q.includes("count") || q.includes("month") || q.includes("week");
        const isPrescription = q.includes("prescription") || q.includes("prescribed") || q.includes("medicine") || q.includes("case");
        const isSymptom = q.includes("symptom") || q.includes("common") || q.includes("frequent");
        const isPending = q.includes("pending") || q.includes("not visited") || q.includes("waiting");

        let relevantContext = "";

        if (chatData) {
            if (isToday) {
                relevantContext = `TODAY'S SCHEDULE (${chatData.todaysAppointments.length} appointments):\n${
                    chatData.todaysAppointments.length > 0
                        ? chatData.todaysAppointments.map(a =>
                            `- Slot ${a.slotNumber}: ${a.time}, Symptoms: ${a.symptoms}, Status: ${a.status}`
                          ).join("\n")
                        : "No appointments today."
                }`;
            } else if (isFollowup) {
                relevantContext = `TODAY'S FOLLOW-UPS (${chatData.todaysFollowups.length}):\n${
                    chatData.todaysFollowups.length > 0
                        ? chatData.todaysFollowups.map(a =>
                            `- Slot ${a.slotNumber}: Follow-up date: ${a.followupdate}, Original symptoms: ${a.symptoms}`
                          ).join("\n")
                        : "No follow-ups today."
                }`;
            } else if (isStats || isPending) {
                relevantContext = `STATS:\nTotal patients: ${chatData.totalPatients}\nVisited: ${chatData.visitedPatients}\nPending: ${chatData.pendingPatients}\nToday's appointments: ${chatData.todaysAppointments.length}\nToday's follow-ups: ${chatData.todaysFollowups.length}`;
            } else if (isPrescription) {
                relevantContext = `RECENT CASES (anonymised — no patient names):\n${
                    chatData.recentCases
                        .filter(a => a.prescription)
                        .map(a => `- Case ${a.caseNumber}, Date: ${a.date}, Symptoms: ${a.symptoms}, Prescribed: ${a.prescription}, Status: ${a.status}`)
                        .join("\n") || "No recent cases with prescriptions."
                }`;
            } else if (isSymptom) {
                const freq = chatData.symptomFrequency;
                const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 5);
                relevantContext = `MOST COMMON SYMPTOMS:\n${sorted.map(([s, c]) => `- ${s}: ${c} cases`).join("\n")}`;
            } else {
                relevantContext = `SUMMARY:\nTotal patients: ${chatData.totalPatients}, Pending: ${chatData.pendingPatients}, Today: ${chatData.todaysAppointments.length}, Follow-ups today: ${chatData.todaysFollowups.length}`;
            }
        }

        return `You are a clinical assistant for Dr. ${doctorName || "the Doctor"} at an online clinic.

PRIVACY RULES — STRICTLY FOLLOW:
- Patient data has been anonymised — you have NO patient names, phone numbers, ages, or genders
- Refer to patients only by slot number or case number
- Never ask for or reference patient personal identifiers
- Only use the data provided below — do not make up records

${relevantContext ? `RELEVANT DATA (anonymised):\n${relevantContext}` : "No database context needed for this question."}

APP GUIDE FOR DOCTOR:
- View all patients: Appointment Manager
- Add new patient: Add Patient button on dashboard
- Edit prescription: Click patient in Appointment Manager
- Revenue: Revenue section in menu
- Reviews: Reviews section in menu
- Profile: My Profile in menu

RULES:
- Be professional and concise
- For unusual clinical decisions advise consulting clinical references
- If asked about a specific named patient say: patient identity is not available for privacy
- Only answer clinic-related questions`;
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
                        ...updatedMessages.slice(-6)
                    ],
                    max_tokens: 450,
                    temperature: 0.5
                },
                { headers: { Authorization: `Bearer ${GROQ_API_KEY}`, "Content-Type": "application/json" } }
            );
            setMessages(prev => [...prev, { role: "assistant", content: response.data.choices[0].message.content }]);
        } catch (err){
            setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I'm having trouble connecting. Please try again. "+ err }]);
        } finally {
            setIsLoading(false);
        }
    };

    const quickQuestions = ["What's my schedule today?", "Any follow-ups today?", "How many patients pending?", "Most common symptoms?"];

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} style={{
                position: "fixed", bottom: "24px", right: "24px",
                width: "56px", height: "56px", borderRadius: "50%",
                background: "#0f766e", color: "#fff",
                border: "none", cursor: "pointer", fontSize: "22px",
                boxShadow: "0 4px 16px rgba(15,118,110,0.4)", zIndex: 1000,
                display: "flex", alignItems: "center", justifyContent: "center"
            }} title="Clinical Assistant">
                {isOpen ? "✕" : "🩺"}
            </button>

            {isOpen && (
                <div style={{
                    position: "fixed", bottom: "92px", right: "24px",
                    width: "370px", height: "530px", background: "#fff",
                    borderRadius: "16px", boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                    display: "flex", flexDirection: "column", zIndex: 999,
                    overflow: "hidden", border: "1px solid #e2e8f0"
                }}>
                    <div style={{ background: "#0f766e", color: "#fff", padding: "14px 16px", display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>👨‍⚕️</div>
                        <div>
                            <div style={{ fontWeight: "600", fontSize: "14px" }}>Clinical Assistant</div>
                            <div style={{ fontSize: "11px", opacity: 0.8 }}>
                                {dataLoaded ? "✓ Records loaded · Patient data anonymised" : "Loading records..."}
                            </div>
                        </div>
                        {chatData && (
                            <div style={{ marginLeft: "auto", textAlign: "right", fontSize: "11px", opacity: 0.85 }}>
                                <div>{chatData.todaysAppointments.length} today</div>
                                <div>{chatData.pendingPatients} pending</div>
                            </div>
                        )}
                    </div>

                    <div style={{ flex: 1, overflowY: "auto", padding: "12px", display: "flex", flexDirection: "column", gap: "10px", background: "#f8fafc" }}>
                        {messages.map((msg, i) => (
                            <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                                <div style={{
                                    maxWidth: "82%", padding: "10px 12px",
                                    borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                                    background: msg.role === "user" ? "#0f766e" : "#fff",
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
                                    <button key={i} onClick={() => sendMessage(q)} style={{ background: "#f0fdf9", color: "#0f766e", border: "1px solid #99f6e4", borderRadius: "20px", padding: "5px 10px", fontSize: "11px", cursor: "pointer" }}>{q}</button>
                                ))}
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div style={{ padding: "10px 12px", background: "#fff", borderTop: "1px solid #e2e8f0", display: "flex", gap: "8px", alignItems: "flex-end" }}>
                        <textarea rows={1} value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                            placeholder="Ask about schedule, cases, stats..."
                            style={{ flex: 1, border: "1.5px solid #e2e8f0", borderRadius: "10px", padding: "8px 10px", fontSize: "13px", resize: "none", outline: "none", fontFamily: "inherit", lineHeight: "1.4" }}
                        />
                        <button onClick={() => sendMessage()} disabled={isLoading || !input.trim()}
                            style={{ background: isLoading || !input.trim() ? "#cbd5e0" : "#0f766e", color: "#fff", border: "none", borderRadius: "10px", padding: "8px 14px", fontSize: "16px", cursor: isLoading || !input.trim() ? "not-allowed" : "pointer" }}>➤</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default DoctorChatbot;
