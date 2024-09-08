import { useNavigate } from 'react-router-dom';
import '../../css/home.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

const Contact=()=>{
    const navigate=useNavigate();
    const [doctordata,setdoctordata]=useState('')
    const [imageurl, setImageurl]= useState("https://clinic-app-backend.vercel.app/");

    const [doctorid,setdoctorid]=useState('');
    const [enquiry,setenquiry]=useState(false);

    //console.log(params.id);
    const [name,getname] = useState('');
    const [email,getemail] = useState('');
    const [phoneno,getphoneno] = useState('');
    const [message,getmessage] = useState('');

    const nameHandler = (event)=>{
        getname(event.target.value)
    }
    const phonenoHandler = (event)=>{
        getphoneno(event.target.value)
    }
    const emailHandler = (event)=>{
        getemail(event.target.value)
    }
    const messageHandler = (event)=>{
        getmessage(event.target.value)
    }

    const getDoctorid = (id,name)=>{
        setdoctorid(id);
        // setdoctorname(`Dr. ${name}`);
        setenquiry(true);
    }

    const submitHandler= (event)=>{
        // event.preventDefault();
        // let date1 = new Date();
        // let time = `${date1.getHours()}:${date1.getMinutes()}`
        // let date = `${date1.getDate()}/${date1.getMonth()+1}/${date1.getFullYear()}`
        // let appointmentData ={doctorid:doctorid,name:name,age:age,phoneno:phoneno,symptoms:"",prescription:"",time:time,date:date,status:"not visited"}
        // axios.post(`https://clinic-app-backend.vercel.app/appointments/addappointment`,appointmentData).then((response)=>{
        //    setenquiry(false);
        // })
    }
    

    return(
        <>
        <section id="about">

        <div class="contact_banner"><div class="abbancont"><h2 style={{margin:"0px",position:"relative",top:"182px",fontSize:"41px",color:"black",zIndex:3}}>Contact Us</h2>
        <div style={{position:"relative",textAlign:"center",top:"212px",left:"107px",height:"109px",width: "1031px",fontSize:"21px",backgroundColor:"white",padding: "8px",opacity:"0.8",borderRadius:"20px"}}></div>
        <p style={{position:"relative",textAlign:"center",top:"99px",left:"-8px",height:"109px",width: "771px",fontSize:"19px",padding: "18px"}}>Have questions or need to book an appointment? Get in touch with us today. <br />

        <i class="fas fa-phone-alt"></i> (123) 456-7890 <br />
        <i class="fas fa-envelope"></i> info@e-clinic.com</p></div>
        </div>
    </section>
    <section id="enquiry" style={{textAlign:"center"}}>
            
    <h2 style={{marginBottom:"55px"}}>Enquiry Form</h2>         
                    
                        <div style={{display:"flex",justifyContent:"center"}}>
                        
                        <table width="50%" style={{border:"2px solid grey"}} class="sub-table add-doc-form-container" border="0">
                            <tr>
                                <td class="label-td">
                                    <input type="text" name="title" class="input-text" placeholder="Name" value={name} onChange={nameHandler} required/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td">
                                    <input type="text" name="title" class="input-text" placeholder="Email" value={email} onChange={emailHandler} required/><br/>
                                </td>
                            </tr>
                            
                            <tr>
                                <td class="label-td">
                                    <input type="number" name="nop" class="input-text" min="0" placeholder="Phone No." value={phoneno} onChange={phonenoHandler} required/><br/>
                                </td>
                            </tr>

                            <tr>
                                <td class="label-td">
                                    <textarea type="number" name="nop" class="input-text" min="0" placeholder="Message" value={message} onChange={messageHandler} required/><br/>
                                </td>
                            </tr>
                                
                           
                            <tr>
                                <td>
                                
                                    <input type="reset" onClick={submitHandler} value="Submit" style={{marginTop:"20px",width:"600px"}} class="login-btn btn-primary-soft btn" name="shedulesubmit"/>
                                    
                                </td>
                
                            </tr>
                        </table>
                        
                        </div>
                    
                    <br/><br/>

    </section>

        </>
    )
}

export default Contact