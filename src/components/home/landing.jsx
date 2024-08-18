import { useNavigate } from 'react-router-dom';
import '../../css/home.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

const Landing=()=>{
    const navigate = useNavigate();
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
    <section id="home" class="hero">
        <div class="container_13">
            <h2>Welcome to E-Clinic</h2>
            <p>Your health is our priority. Book an appointment with our <br/>experienced doctors today.</p>
            <a onClick={()=>{navigate("/services")}} class="btn">Our Services</a>
        </div>
    </section>

    <section style={{top:"-198px", position:"relative", zIndex: 1,height:"200px"}} className="why-us mt-5 mt-md-0">
            <div className="container_14">

                <div style={{display:"flex", justifyContent:"space-evenly"}} className="row">
                    <div style={{width:"400px"}} className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h3>Why Choose Us?</h3>
                            <p>
                                We connect you with our best doctors available. The patients can browse the doctor's appointment system website to find a doctor that has the specialty of their needs. Patients can review the doctor's weekly schedule, enabling them to select a suitable day and time for their appointment. 
                            </p>
                            
                                <button class="btn-primary-soft1 btn1">Learn More</button> 
                            
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

    <section>
        <div id="services1" class="container_12">
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
            <button onClick={()=>navigate('/services')} style={{cursor:"pointer",marginBottom:"50px"}} class="btnp">Our Services</button>
        </div>
    </section>

    <section id="about1">
        <div class="container_12">
            <h2>About Us</h2>
            <p>E-Clinic has been provides top-notch healthcare services through easy appouintment booking. Our team of experienced doctors are dedicated to ensuring the best possible care for our patients.</p>
        </div>
        <button onClick={()=>navigate('/aboutus')} style={{cursor:"pointer",marginTop:"50px"}} class="btnp">Know More</button>
    </section>

    <section id="doctors">
        <div class="container_12">
            <h2>Our Doctors</h2>
            <div class="doctors-grid">
                { doctordata && doctordata.map((doctor)=>(
                <div class="doctor">
                    <img src={imageurl + doctor.image}/>
                    <h3>Dr. {doctor.name}</h3>
                    <p>{doctor.details}</p>
                </div>
                ))} 
                
            </div>
        </div>
    </section>
        </>
    )
}

export default Landing