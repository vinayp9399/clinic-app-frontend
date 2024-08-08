import { useNavigate } from 'react-router-dom';
import '../../css/dashboard.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorMenu=(props)=>{
    const navigate = useNavigate();
    const id = localStorage.getItem('id');
    const firstname = localStorage.getItem('name');
    const profileImage1 = localStorage.getItem('image');
    const [imageurl, setImageurl]= useState("https://clinic-app-backend.vercel.app/");
    const [image1, setImage1] = useState("");

    
    
    const profileImage =()=>{
        axios.get(`https://clinic-app-backend.vercel.app/users/singleuser/${id}`).then((response)=>{
          setImage1(response.data.message.image);
        })
      }

    const handleLogout = ()=>{
        localStorage.clear();
        navigate('/')
    }

    useEffect(()=>{
        profileImage();
    },[])

    return(
        <>
        <div class="menu">
            <table class="menu-container" border="0">
                <tr><td style={{paddingLeft:"10px", paddingRight:"10px",borderBottom: "2px solid white",backgroundColor: "rgb(6 14 35)"}}><div style={{paddingBottom:"3px", display:"flex", gap:"10px"}}>
                                <img style={{width:"33%"}} src="../images/blue-plus-icon-12.png" alt=""/>
                                
                                <h1 style={{color:"rgb(40 176 226)"}}>E-Clinic</h1></div></td>
                            </tr>
                <tr>
                    <td style={{paddingLeft:"10px", paddingRight:"10px"}} colspan="2">
                        <table border="0" class="profile-container">
                            <tr>
                                <td width="30%" style={{paddingLeft:"20px"}}>
                                    <img src={imageurl + profileImage1} alt="" width='70' height='70' style={{borderRadius:"50%"}}/>
                                </td>
                                <td style={{padding:"0px", margin:"0px"}}>
                                    <p class="profile-title">Dr. {firstname}</p>
                                    <p class="profile-subtitle">MBBS. Surgery</p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <a onClick={handleLogout}><input type="button" value="Log out" class="logout-btn btn-primary-soft btn"/></a>
                                </td>
                            </tr>
                    </table>
                    </td>
                </tr>
                <tr class="menu-row" >
                    {props.nav=="DoctorDash" &&
                    <td class="menu-btn menu-icon-dashbord menu-active menu-icon-dashbord-active" >
                        <a style={{cursor:"pointer"}} class="non-style-link-menu non-style-link-menu-active"><p class="menu-text">Dashboard</p></a>
                    </td>}
                    {props.nav!="DoctorDash" &&
                    <td class="menu-btn menu-icon-dashbord" >
                        <a style={{cursor:"pointer"}} onClick={()=>{navigate("/doctordashboard")}} class="non-style-link-menu"><p class="menu-text">Dashboard</p></a>
                    </td>}

                </tr>
                <tr class="menu-row">
                {props.nav=="Appointmentmanager" &&
                    <td class="menu-btn menu-icon-appoinment menu-active menu-icon-dashbord-active">
                        <a style={{cursor:"pointer"}} class="non-style-link-menu non-style-link-menu-active"><p class="menu-text">Appointment Manager</p></a>
                    </td>}
                {props.nav!="Appointmentmanager" &&
                    <td class="menu-btn menu-icon-appoinment">
                        <a style={{cursor:"pointer"}} onClick={()=>{navigate("/appointmentmanager")}} class="non-style-link-menu"><p class="menu-text">Appointment Manager</p></a>
                    </td>}
                </tr>
                {/* <tr class="menu-row" >
                    <td class="menu-btn menu-icon-patient">
                        <a style={{cursor:"pointer"}} href="" class="non-style-link-menu"><p class="menu-text">My Patients</p></a>
                    </td>
                </tr> */}
                <tr class="menu-row" >
                    <td class="menu-btn menu-icon-session">
                        <a style={{cursor:"pointer"}} href="" class="non-style-link-menu"><p class="menu-text">Total Reviews</p></a>
                    </td>
                </tr>
                <tr class="menu-row" >
                    <td class="menu-btn menu-icon-settings">
                        <a style={{cursor:"pointer"}} href="" class="non-style-link-menu"><p class="menu-text">Revenue</p></a>
                    </td>
                </tr>
                <tr class="menu-row" >
                    <td class="menu-btn menu-icon-settings">
                        <a style={{cursor:"pointer"}} href="" class="non-style-link-menu"><p class="menu-text">Profile</p></a>
                    </td>
                </tr>
                <tr class="menu-row" >
                    <td class="menu-btn menu-icon-settings">
                        <a style={{cursor:"pointer"}} href="" class="non-style-link-menu"><p class="menu-text">Settings</p></a>
                    </td>
                </tr>
                
                
            </table>
            
            
            
        </div>
        </>
    )
}

export default DoctorMenu