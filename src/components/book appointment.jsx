import '../css/home.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Bookappointment = ()=>{
  
    const location = useLocation();
    const navigate = useNavigate();
    const doctorid = localStorage.getItem('id');
    const usertype = localStorage.getItem('usertype');

    //console.log(params.id);
    const [name,getname] = useState('');
    const [age,getage] = useState('');
    const [gender,getgender] = useState('');
    const [phoneno,getphoneno] = useState('');
    const [prescription,getprescription]= useState('');
    const [symptoms,getsymptoms]= useState('');
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
    const prescriptionHandler = (event)=>{
        getprescription(event.target.value)
    }
    const symptomsHandler = (event)=>{
      getsymptoms(event.target.value)
  }
    const submitHandler= (event)=>{
        event.preventDefault();
            
            let appointmentData ={doctorid:doctorid,name:name,age:age,phoneno:phoneno,gender:gender,symptoms:symptoms,prescription:prescription}
            axios.post(`http://clinic-app-backend.vercel.app/appointments/addappointment`,appointmentData).then((response)=>{
                //console.log(response)
                if(usertype==="doctor"){
                navigate('/appointments')}
                else if(usertype==="patient"){
                  navigate('/home')}

        })
    }
    return(
        <>
        <div id="contentarea"><div id="form-main-container">
            <div id="form-container">
    <form class="form">
      <div class="column">
        <div class="input-box">
            <label style={{fontSize:"20px", color:"rgb(14, 37, 86)"}} for="name">Name </label>
            <input type="text" placeholder="Name" value={name} onChange={nameHandler}/>
        </div>
        <div class="input-box">
          <label style={{fontSize:"20px", color:"rgb(14, 37, 86)"}} for="age">Age </label>
          <input type="text" placeholder="Age" value={age} onChange={ageHandler}/>
        </div>
      </div>
      <div class="column">
        <div class="input-box">
            <label style={{fontSize:"20px", color:"rgb(14, 37, 86)"}} for="gender">Gender </label>
            <input type="text-area" placeholder="Gender" value={gender} onChange={genderHandler}/>
        </div>
        <div class="input-box">
          <label style={{fontSize:"20px", color:"rgb(14, 37, 86)"}} for="phoneno">Phone no.</label>
          <input type="text" placeholder="Phone no." value={phoneno} onChange={phonenoHandler}/>
        </div>
      </div>
    <>
      <div class="input-box">
        <label style={{fontSize:"20px", color:"rgb(14, 37, 86)"}} for="symptoms">Symptoms </label>
        <input style={{width: "751px"}} type="text" rows="4" cols="50" placeholder="Symptoms" value={symptoms} onChange={symptomsHandler}/>
      </div>
      <div class="input-box">
        <label style={{fontSize:"20px", color:"rgb(14, 37, 86)"}} for="prescription">Prescription </label>
        <input style={{width: "751px"}} type="text" rows="4" cols="50" placeholder="Prescription" value={prescription} onChange={prescriptionHandler}/>
      </div>
    </>
    { usertype==="patient" &&
      <input type="submit" value="Book Appointment" onClick={submitHandler}/>
    }
    { usertype==="doctor" &&
      <input type="submit" value="Book Appointment" onClick={submitHandler}/>
    }
    </form>
  </div>
  </div></div>
        </>
    )
}

export default Bookappointment