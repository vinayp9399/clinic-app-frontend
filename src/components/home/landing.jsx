import { useNavigate } from 'react-router-dom';
import '../../css/home.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

const Landing=()=>{
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
        <div style={{backgroundColor:"transparent"}} id="services1" class="container_12">
            <h2>Our Doctors Specializations</h2>
            <div class="services-grid">
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
            <button onClick={()=>navigate('/services')} style={{cursor:"pointer",marginBottom:"50px",marginTop:"40px"}} class="btnp">Our Services</button>
        </div>
    </section>

    <section style={{backgroundColor:""}} id="about1">
        <div class="container_12">
            <h2>About Us</h2>
            <p>E-Clinic has been provides top-notch healthcare services through easy appouintment booking. Our team of experienced doctors are dedicated to ensuring the best possible care for our patients.</p>
        </div>
        <button onClick={()=>navigate('/aboutus')} style={{cursor:"pointer",marginTop:"50px"}} class="btnp">Know More</button>
    </section>

    <section id="doctors">
        <div class="container_12">
            <h2 style={{marginBottom:"55px"}}>Book Our Doctors</h2>
            <div class="doctors-grid">
                { doctordata && doctordata.map((doctor)=>(
                <div class="doctor" onClick={()=>{getDoctorid(doctor._id,doctor.name)}}><a style={{textDecoration:"none",color:"black"}} href="#enquiry">
                    <img src={imageurl + doctor.image}/>
                    <h3 style={{color:"#1977cc"}}>Dr. {doctor.name}</h3>
                    <p style={{marginBottom:"25px"}}>{doctor.details}</p></a>
                </div>
                ))} 
                
            </div>
        </div>
    </section>
    {enquiry==true &&
    <section id="enquiry" style={{textAlign:"center"}}>
            
    <h2 style={{marginBottom:"55px"}}>Enquiry Form</h2>         
                    
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

export default Landing