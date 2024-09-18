import { useNavigate } from 'react-router-dom';
import '../../css/home.css';
import axios from 'axios'
import { useEffect, useState } from 'react'


const Doctors=()=>{
    const navigate = useNavigate();
    const [doctordata,setdoctordata]=useState('')
    const [imageurl, setImageurl]= useState("https://clinic-app-backend.vercel.app/");

    const [doctorid,setdoctorid]=useState('');
    const [enquiry,setenquiry]=useState(false);

    //console.log(params.id);
    const [name,getname] = useState('');
    const [doctorname,setdoctorname] = useState('');
    const [age,getage] = useState('');
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
        let appointmentData ={doctorid:doctorid,name:name,age:age,phoneno:phoneno,symptoms:"",prescription:"",time:time,date:date,status:"not visited"}
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
        <div class="dash-body">
            <table border="0" width="100%" style={{borderSpacing:"0", margin:"0", padding:"0", marginTop:"20px"}}>
                <tr>
                    
                    <td>
                        
                        <form action="" method="post" class="header-search">

                            <input type="search" name="search" class="input-text header-searchbar" placeholder="Search Doctor name or Email" list="doctors"/>&nbsp;&nbsp;
                            
                            
                            
                       
                            <button class="login-btn btn-primary btn" style={{paddingLeft:"25px",paddingRight:"25px",paddingTop:"10px",paddingBottom:"10px"}}>Search</button>
                        
                        </form>
                        
                    </td>
                </tr>
               
                
                <tr>
                    <td colspan="4" style={{paddingTop:"10px"}}>
                        <p class="heading-main12" style={{fontSize:"23px", paddingLeft:"12px", fontWeight:"600", marginLeft:"20px"}}>All Doctors</p>
                    </td>
                    
                </tr>
                
                  
                <tr>
                   <td colspan="4">
                   <div class="doctors-grid abc1 scroll">
                { doctordata && doctordata.map((doctor)=>(
                <div style={{display:"flex"}} class="doctor" onClick={()=>{getDoctorid(doctor._id,doctor.name)}}>
                    <img style={{width:"143px"}} src={imageurl + doctor.image}/>
                    <div style={{textDecoration:"none",color:"black",textAlign:"left"}}><h3 style={{marginLeft:"25px",marginBottom:"0px",color:"rgb(25, 119, 204)"}}>Dr. {doctor.name}</h3>
                    <p style={{marginLeft:"25px",marginTop:"10px",color:"rgb(25, 119, 204)"}}>{doctor.details}</p>
                    <p style={{margin:"25px",marginTop:"0px",marginBottom:"0px",fontSize:"14px"}}>Vice Chairman - Medical Oncology Breast, Gynaecology, Thoracic
                    Cancer Care / Oncology, Gynecologic Oncology.</p>
                    <button style={{margin:"25px"}} class="btnp"><a style={{color:"white",textDecoration:"none",fontSize:"16px"}} href="#enquiry">Book an appointment</a></button></div>
                </div>
                ))} 
                
                </div>
                        </td>
                        </tr>
                        </table>

                    
                        </div>
                        
        </>
    )
}

export default Doctors