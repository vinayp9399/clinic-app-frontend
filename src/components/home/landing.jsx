import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../../css/home.css';

const Landing=()=>{
    const navigate = useNavigate();

    let images =['../images/healthcare-banner-portrait-doctors-consultation-260nw-2260731979.png',
        'https://img.freepik.com/premium-photo/doctors-looking-documents-against-grey-background_1134-17207.jpg','https://www.shutterstock.com/image-photo/group-doctors-medicine-talking-600nw-517855210.jpg']
        let [imageno, setimageno] = useState(0);
        const [image, setimage]=useState('../images/healthcare-banner-portrait-doctors-consultation-260nw-2260731979.png');
    
        function changeSlide(){
            setimage(images[imageno]);
            if(imageno >= images.length-1){ 
                imageno = 0;
            }else{
                imageno = imageno + 1;
            }
            
        }
        
        useEffect(()=>{
            setInterval(changeSlide,5000);
        },[])

    return(
        <>
    <section id="home" class="hero" style={{backgroundImage: `url('${image}')`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
        <div class="container_13">
            <h2>Welcome to E-Clinic</h2>
            <p>Your health is our priority. Book an appointment with our <br/>experienced doctors today.</p>
            <a onClick={()=>navigate('/doctorlist')} class="btn">Book Appointment</a>
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
                                        
                                        <h4>Emergency Cases</h4>
                                        <h6 className='text-secondary'>+88 01751 040425</h6>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facilis perferendis quia maxime. Laborum excepturi pariatur laboriosam nihil, dolor molestias.</p>
                                    </div>
                                </div>
                                <div style={{width:"200px"}} className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        
                                        <h4>Working Hours</h4>
                                        <small className='text-secondary'>Timing schedule</small>
                                        <ul className='list-group list-group-flush'>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap" ><p>Sun - Wed : </p> <p>8:00 - 17:00</p></li>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap" ><p>Thus - Fri : </p> <p>9:00 - 17:00</p></li>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap" ><p>Sat - Sun : </p> <p>10:00 - 17:00</p></li>
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
        <div style={{backgroundColor:"transparent"}} id="services1" class="container_12">
            <h2>Our Doctors Specializations</h2>
            <div style={{marginBottom:"50px"}} class="services-grid">
                <div class="service">
                    <i class="fas fa-stethoscope"></i>
                    <h3 style={{color:"#1977cc"}}>General Check-up</h3>
                    <p>Comprehensive health check-ups for all ages.</p>
                </div>
                <div class="service">
                    <i class="fas fa-heartbeat"></i>
                    <h3 style={{color:"#1977cc"}}>Cardiology</h3>
                    <p>Specialized heart care and treatments.</p>
                </div>
                <div class="service">
                    <i class="fas fa-tooth"></i>
                    <h3 style={{color:"#1977cc"}}>Dentistry</h3>
                    <p>Complete dental care for a healthy smile.</p>
                </div>
                <div class="service">
                    <i class="fas fa-child"></i>
                    <h3 style={{color:"#1977cc"}}>Pediatrics</h3>
                    <p>Quality care for your little ones.</p>
                </div>
            </div>
            {/* <button onClick={()=>navigate('/services')} style={{cursor:"pointer",marginBottom:"50px",marginTop:"40px"}} class="btnp">Our Services</button> */}
        </div>
    </section>

    <section style={{display:"flex",padding:"63px",gap:"100px"}} id="about1">
        <div><img style={{borderRadius:"10px"}} src="https://lh5.googleusercontent.com/proxy/D9U14usXzmBtcFV5EAMM4RuvPeVhPc5zaIXoV2ahGY_RDWNyzgbSwr0EIoqM93DLUcEia4u4YJQfjYZQI4yQK6VzA12lMZfA_0C6mN-wxH_gsVukHPbCOMraqlE" alt="" /></div>
        <div style={{textAlign:"left"}} class="container_12">
            <h2>About Us</h2>
            <p>E-Clinic has been provides top-notch healthcare services through easy appouintment booking. Our team of experienced doctors are dedicated to ensuring the best possible care for our patients. We provide best leading medicle service. <br /><br />
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
        
        <button onClick={()=>navigate('/aboutus')} style={{cursor:"pointer",marginTop:"30px"}} class="btnp">Know More</button></div>
    </section>
    <section style={{backgroundColor:"white",display:"flex",padding:"63px",gap:"150px"}} id="doctors1">
        <div style={{textAlign:"left"}}>
            <h2>Our Doctors</h2>
            <p>Our team of experienced doctors are dedicated to ensuring the best possible care for our patients. Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover Various versions have evolved over the years, sometimes. <br/><br />
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
            <button onClick={()=>navigate('/doctorlist')} style={{cursor:"pointer",marginTop:"20px"}} class="btnp">Book Appointment</button>
        </div>        
        <div><img style={{borderRadius:"10px"}} width="500px" height="330px" src="https://longislandneuro.com/wp-content/uploads/2023/01/handsome-male-doctor-explaining-medical-treatment-2022-12-15-18-17-30-utc.webp" alt="" /></div>
    </section>

    
        </>
    )
}

export default Landing