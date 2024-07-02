import '../css/doctorlist.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Doctorlist = ()=>{
    const params = useParams();
    const navigate = useNavigate();
    const [doctordata, setdoctordata] = useState('');
    const [imageurl, setImageurl]= useState("http://localhost:8080/");

    const userid = localStorage.getItem('id');
    const getalldoctorData = ()=>{
        axios.get('http://localhost:8080/users/finddoctors/').then((response)=>{
            setdoctordata(response.data.message)
        })
    }
    // if(location.pathname===`/products/${params.category}`){
    //     path
    // }

    const bookAppointment = (id)=>{
        localStorage.setItem('id',id)
        navigate('/patientappointmentbooking')
    }

    useEffect(()=>{
        getalldoctorData();
    })
    // const handleDelete = (userId)=>{
    //     axios.delete(`http://localhost:8080/users/deleteuser/${userId})`).then((response)=>{
    //         console.log(response)
    //         getalluserData();
    //     })
    // }
    return(
        <>
        <div style={{height:"500px"}}>
        <div style={{backgroundColor:"rgb(14, 37, 86)", height:"53px",width:"1267px", display:"flex", alignItems:"center",justifyContent:"center", margin:"-4px"}}><h1 style={{color:"white"}}>Meet Our Experienced Doctors</h1></div>
                { doctordata && doctordata.map((doctor)=>(
                    <>
                    <div class="card2">
                    {doctor.image && <>
                    <img class="img1" src={imageurl + doctor.image} alt=""/></>}
                    {!doctor.image &&
                    <img class="img1" src="../images/userimage.jpg" alt=""/>}
                    <h3>Dr. {doctor.name}</h3>
                    <div style={{display:"flex", justifyContent:"space-between"}}><button class="button1" onClick={()=>{bookAppointment(doctor._id)}}>Book Appointment</button></div>
                    </div></>
                ))}  
        </div> 
            
        </>
    )
}
export default Doctorlist