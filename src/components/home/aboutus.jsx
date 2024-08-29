import { useNavigate } from 'react-router-dom';
import '../../css/home.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

const Aboutus=()=>{
    const navigate=useNavigate();
    

    return(
        <>
        <section id="about">

        <div class="about_banner"><h2 style={{margin:"0px",position:"relative",top:"182px",fontSize:"41px",color:"black",zIndex:3}}>About Us</h2>
        <div style={{position:"relative",textAlign:"center",top:"212px",left:"107px",height:"109px",width: "1031px",fontSize:"21px",backgroundColor:"white",padding: "8px",opacity:"0.5",borderRadius:"20px"}}></div>
        <p style={{position:"relative",textAlign:"center",top:"99px",left:"-8px",height:"109px",width: "771px",fontSize:"19px",padding: "18px"}}>Welcome to Online Clinic, where your health and well-being are our top priorities. Our clinic is dedicated to providing comprehensive healthcare services from the comfort of your home.</p>
        </div>
        <div class="container24" style={{display:"flex"}}>

        <div style={{marginTop:"30px",width:"810px",paddingTop:"1px",paddingBottom:"5px",textAlign:"center",marginLeft:"auto", marginRight:"auto"}} class="service-item">
            <h3 style={{color:"rgb(25, 119, 204)"}}>Our Mission</h3>
            <p style={{margin:"25px", color:"black"}}>Our mission is to offer accessible and high-quality medical care to all individuals, regardless of their location. We believe in the power of technology to bridge the gap between patients and healthcare providers, ensuring that everyone has the opportunity to receive the care they need.</p>
        </div>
        <div style={{marginTop:"30px",width:"810px",paddingTop:"1px",paddingBottom:"5px",textAlign:"center",marginLeft:"auto", marginRight:"auto"}} class="service-item">
            <h3 style={{color:"rgb(25, 119, 204)"}}>Our Vision</h3>
            <p style={{margin:"25px", color:"black"}}>We envision a world where healthcare is not limited by geography. By leveraging the latest in telemedicine and digital health solutions, we aim to make healthcare more inclusive, efficient, and patient-centered.</p>
        </div>
        <div style={{marginTop:"30px",width:"810px",paddingTop:"1px",paddingBottom:"5px",textAlign:"center",marginLeft:"auto", marginRight:"auto"}} class="service-item">
            <h3 style={{color:"rgb(25, 119, 204)"}}>Our Values</h3>
            <ul style={{margin:"25px", color:"black"}}>
                <li><strong style={{color:"black"}}>Compassion:</strong> We treat every patient with empathy and understanding, ensuring that they feel heard and respected.</li>
                <li><strong style={{color:"black"}}>Excellence:</strong> We are committed to delivering the highest standard of care through continuous improvement and innovation.</li>
                <li><strong style={{color:"black"}}>Accessibility:</strong> We strive to make healthcare services available to everyone, regardless of their circumstances.</li>
            </ul>
        </div>
            
        </div>
    </section>

        </>
    )
}

export default Aboutus