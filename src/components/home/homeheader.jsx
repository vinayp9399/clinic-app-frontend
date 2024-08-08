import { useNavigate } from 'react-router-dom';
import '../../css/home.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

const Homeheader=()=>{
    const navigate=useNavigate();
    const [doctordata,setdoctordata]=useState('')
    const [imageurl, setImageurl]= useState("https://clinic-app-backend.vercel.app/");

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
        <header>
        <div class="container_12">
            <div class="logo" style={{display:"flex", gap:"10px",top:"4px",position: "relative"}}>
                <img style={{width:"9%"}} src="../images/blue-plus-icon-12.png" alt=""/>                
                <h1 style={{color:"rgb(40 176 226)"}}>E-Clinic</h1>
                
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#doctors">Doctors</a></li>
                    <li style={{cursor:"pointer"}}><a onClick={()=>navigate("/login")}>Login</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="home" class="hero">
        <div class="container_13">
            <h2>Welcome to E-Clinic</h2>
            <p>Your health is our priority. Book an appointment with our <br/>experienced doctors today.</p>
            <a href="#services" class="btn">Our Services</a>
        </div>
    </section>

    <section style={{top: "-100px", position:"relative", zIndex: 1}} className="why-us mt-5 mt-md-0">
            <div className="container_14">

                <div style={{display:"flex", justifyContent:"space-around"}} className="row">
                    <div style={{width:"400px"}} className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h3>Why Choose Us?</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                            </p>
                            <div className="text-center">
                                <button>Learn More</button> 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div style={{display:"flex", justifyContent:"space-around", width:"740px"}} className="row">
                                <div style={{width:"200px"}} className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        
                                        <h4>Appointment</h4>
                                        <small className='text-secondary'>24 Hours Service</small>
                                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                    </div>
                                </div>
                                <div style={{width:"200px"}} className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        
                                        <h4>Emegency Cases</h4>
                                        <h6 className='text-secondary'>+88 01751 040425</h6>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facilis perferendis quia maxime. Laborum excepturi pariatur laboriosam nihil, dolor molestias.</p>
                                    </div>
                                </div>
                                <div style={{width:"200px"}} className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        
                                        <h4>Working Hours</h4>
                                        <small className='text-secondary'>Timing schedule</small>
                                        <ul className='list-group list-group-flush'>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap" ><p>Sun - Wed : </p> <p>8:00 - 17: 00</p></li>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap" ><p>Thus - Fri : </p> <p>9:00 - 17: 00</p></li>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap" ><p>Sat - Sun : </p> <p>10:00 - 17: 00</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    <section style={{position:"relative",top:"-84px"}} id="services">
        <div class="container_12">
            <h2>Our Doctors Specializations</h2>
            <div class="services-grid">
                <div class="service">
                    <i class="fas fa-stethoscope"></i>
                    <h3>General Check-up</h3>
                    <p>Comprehensive health check-ups for all ages.</p>
                </div>
                <div class="service">
                    <i class="fas fa-heartbeat"></i>
                    <h3>Cardiology</h3>
                    <p>Specialized heart care and treatments.</p>
                </div>
                <div class="service">
                    <i class="fas fa-tooth"></i>
                    <h3>Dentistry</h3>
                    <p>Complete dental care for a healthy smile.</p>
                </div>
                <div class="service">
                    <i class="fas fa-child"></i>
                    <h3>Pediatrics</h3>
                    <p>Quality care for your little ones.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="about">
        <div class="container_12">
            <h2>About Us</h2>
            <p>Professional Clinic has been providing top-notch healthcare services for over 20 years. Our team of experienced doctors and medical staff are dedicated to ensuring the best possible care for our patients.</p>
        </div>
    </section>

    <section id="doctors">
        <div class="container_12">
            <h2>Our Doctors</h2>
            <div class="doctors-grid">
                { doctordata && doctordata.map((doctor)=>(
                <div class="doctor">
                    <img src={imageurl + doctor.image}/>
                    <h3>Dr. {doctor.name}</h3>
                    <p>Cardiologist</p>
                </div>
                ))} 
                
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="container_12">
            <h2>Contact Us</h2>
            <p>Have questions or need to book an appointment? Get in touch with us today.</p>
            <ul>
                <li><i class="fas fa-phone-alt"></i> (123) 456-7890</li>
                <li><i class="fas fa-envelope"></i> info@professionalclinic.com</li>
                <li><i class="fas fa-map-marker-alt"></i> 123 Health St., Wellness City, HC 12345</li>
            </ul>
        </div>
    </section>

    <footer>
        <div class="container_12">
            <p>&copy; 2024 Professional Clinic. All rights reserved.</p>
            <p><a href="#privacy-policy">Privacy Policy</a> | <a href="#terms-of-service">Terms of Service</a> | <a href="#contact">Contact Us</a></p>
        </div>
    </footer>
        </>
    )
}

export default Homeheader