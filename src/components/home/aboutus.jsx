import { useNavigate } from 'react-router-dom';
import '../../css/home.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

const Aboutus=()=>{
    const navigate=useNavigate();
    

    return(
        <>
        <section id="about">
        <div class="container24">
            
            <h2 style={{color:"black"}}>About Us</h2>
            <p>Welcome to Online Clinic, where your health and well-being are our top priorities. Our clinic is dedicated to providing comprehensive healthcare services from the comfort of your home.</p>

        <div style={{marginTop:"30px",width:"810px",paddingTop:"1px",paddingBottom:"5px",textAlign:"center",marginLeft:"auto", marginRight:"auto"}} class="service-item">
            <h3>Our Mission</h3>
            <p style={{margin:"25px"}}>Our mission is to offer accessible and high-quality medical care to all individuals, regardless of their location. We believe in the power of technology to bridge the gap between patients and healthcare providers, ensuring that everyone has the opportunity to receive the care they need.</p>
        </div>
        <div style={{marginTop:"30px",width:"810px",paddingTop:"1px",paddingBottom:"5px",textAlign:"center",marginLeft:"auto", marginRight:"auto"}} class="service-item">
            <h3>Our Vision</h3>
            <p style={{margin:"25px"}}>We envision a world where healthcare is not limited by geography. By leveraging the latest in telemedicine and digital health solutions, we aim to make healthcare more inclusive, efficient, and patient-centered.</p>
        </div>
        <div style={{marginTop:"30px",width:"810px",paddingTop:"1px",paddingBottom:"5px",textAlign:"center",marginLeft:"auto", marginRight:"auto"}} class="service-item">
            <h3>Our Values</h3>
            <ul style={{margin:"25px"}}>
                <li><strong>Compassion:</strong> We treat every patient with empathy and understanding, ensuring that they feel heard and respected.</li>
                <li><strong>Excellence:</strong> We are committed to delivering the highest standard of care through continuous improvement and innovation.</li>
                <li><strong>Integrity:</strong> We uphold the highest ethical standards in all our interactions, maintaining transparency and honesty.</li>
                <li><strong>Accessibility:</strong> We strive to make healthcare services available to everyone, regardless of their circumstances.</li>
            </ul>
        </div>
            
        </div>
    </section>

        </>
    )
}

export default Aboutus