import { useNavigate } from 'react-router-dom';
import '../../css/home.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

const Doctorlist=()=>{
    
    const navigate = useNavigate();
    const [doctordata,setdoctordata]=useState('')
    const [imageurl, setImageurl]= useState("https://clinic-app-backend.vercel.app/");

    const [doctorid,setdoctorid]=useState('');
    const [enquiry,setenquiry]=useState(false);

    //console.log(params.id);
    const [name,getname] = useState('');
    const [doctorname,setdoctorname] = useState('');
    const [age,getage] = useState('');
    const [gender,getgender] = useState('');
    const [phoneno,getphoneno] = useState('');

    const nameHandler = (event)=>{
        getname(event.target.value)
    }
    const ageHandler = (event)=>{
        getage(event.target.value)
    }
    const phonenoHandler = (event)=>{
        getphoneno(event.target.value)
    }
    const genderHandler = (event)=>{
        getgender(event.target.value)
    }

    const getDoctorid = (id,name)=>{
        setdoctorid(id);
        setdoctorname(`Dr. ${name}`);
        setenquiry(true);
    }

    const submitHandler= (event)=>{
        event.preventDefault();
        let date1 = new Date();
        let time = `${date1.getHours()}:${date1.getMinutes()}`
        let date = `${date1.getDate()}/${date1.getMonth()+1}/${date1.getFullYear()}`
        let appointmentData ={doctorid:doctorid,name:name,age:age,phoneno:phoneno,gender:gender,symptoms:"",prescription:"",time:time,date:date,status:"not visited"}
        axios.post(`https://clinic-app-backend.vercel.app/appointments/addappointment`,appointmentData).then((response)=>{
           setenquiry(false);
        })
    }

    const getalldoctorData = ()=>{
        axios.get('https://clinic-app-backend.vercel.app/users/finddoctors/').then((response)=>{
            setdoctordata(response.data.message)
        })
    }


    useEffect(()=>{
        getalldoctorData();
    })


    return(
        <>
        <section id="doctors">
        <div class="container_12">
            <h2 style={{marginBottom:"55px"}}>Book Our Doctors</h2>
            <div class="doctors-grid">
                { doctordata && doctordata.map((doctor)=>(
                <div class="doctor" onClick={()=>{getDoctorid(doctor._id,doctor.name)}}><a style={{textDecoration:"none",color:"black",textAlign:"left"}} href="#enquiry">
                    <img src={imageurl + doctor.image}/>
                    <h3 style={{marginLeft:"25px",marginBottom:"0px",color:"rgb(25, 119, 204)"}}>Dr. {doctor.name}</h3>
                    <p style={{marginLeft:"25px",marginTop:"10px",color:"rgb(25, 119, 204)"}}>{doctor.details}</p>
                    <p style={{margin:"25px",marginTop:"0px",fontSize:"14px"}}>Vice Chairman - Medical Oncology Breast, Gynaecology, Thoracic
                    Cancer Care / Oncology, Gynecologic Oncology, Thoracic Oncology, Medical Oncology, Breast Cancer</p></a>
                </div>
                ))} 
                
            </div>
        </div>
    </section>
    {enquiry==true &&
    <section id="enquiry" style={{textAlign:"center"}}>
            
    <h2 style={{marginBottom:"55px"}}>Booking Form</h2>         
                    
                        <div style={{display:"flex",justifyContent:"center"}}>
                        
                        <table width="50%" style={{border:"2px solid grey"}} class="sub-table add-doc-form-container" border="0">
                            <tr>
                                <td class="label-td">
                                    <input type="text" name="title" class="input-text" placeholder="Doctor Name" value={doctorname} required/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td">
                                    <input type="text" name="title" class="input-text" placeholder="Patient Name" value={name} onChange={nameHandler} required/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td">
                                    <input type="number" name="nop" class="input-text" min="0" placeholder="Age" value={age} onChange={ageHandler} required/><br/>
                                </td>
                            </tr>
                            
                            {/* <tr>
                                <td class="label-td" colspan="1">
                                    <label for="nop" class="form-label">Phone No.: </label>
                                </td>
                                <td class="label-td" colspan="1">
                                    <label for="nop" class="form-label">Gender: </label>
                                </td>
                                
                            </tr> */}
                            <tr>
                                <td class="label-td">
                                    <input type="number" name="nop" class="input-text" min="0" placeholder="Phone No." value={phoneno} onChange={phonenoHandler} required/><br/>
                                </td>
                                </tr>
                                <tr>
                                <td style={{padding:"0px"}} class="label-td">
                                    <div style={{display:"flex",gap:"32px"}}>
                                    <div><input type="radio" id="male" name="gender" value="Male" onChange={genderHandler}/>
                                    <label for="Male">Male</label></div>
                                    <div><input type="radio" id="female" name="gender" value="Female" onChange={genderHandler}/>
                                    <label for="Female">Female</label></div>
                                    </div>

                                </td>
                            </tr>
                           
                            <tr>
                                <td>
                                
                                    <input type="reset" onClick={submitHandler} value="Submit" style={{marginTop:"20px"}} class="login-btn btn-primary-soft btn" name="shedulesubmit"/>
                                    
                                </td>
                
                            </tr>
                        </table>
                        
                        </div>
                    
                    <br/><br/>

    </section>}
        </>
    )
}

export default Doctorlist