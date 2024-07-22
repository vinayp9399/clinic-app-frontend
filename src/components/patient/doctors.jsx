import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Doctors=()=>{
    const navigate = useNavigate();
    const [doctordata, setdoctordata] = useState('');
    const [IsLoading, setIsLoading] = useState(true);
    const [register1,setregister1]=useState(false);

    const [doctorid, setdoctorid] = useState("");
    const [doctorname, setdoctorname] = useState("");

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

    const bookAppointment = (id,name)=>{
        setdoctorname(name)
        setdoctorid(id)
        setregister1(true)
    }

    const submitHandler= (event)=>{
        event.preventDefault();
        let appointmentData ={doctorid:doctorid,name:name,age:age,phoneno:phoneno,gender:gender,symptoms:symptoms,prescription:prescription}
        axios.post(`https://clinic-app-backend.vercel.app/appointments/addappointment`,appointmentData).then((response)=>{
            console.log(response);
            setregister1(false)
        })
    }

    const getalldoctorData = ()=>{
        axios.get('https://clinic-app-backend.vercel.app/users/finddoctors/').then((response)=>{
            setdoctordata(response.data.message)
            setIsLoading(false);
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
                    <td width="15%">
                        <p style={{fontSize:"14px",color:"rgb(119, 119, 119)",padding:"0",margin:"0",textAlign:" right"}}>
                            Today's Date
                        </p>
                        <p class="heading-sub12" style={{padding:"0",margin:"0"}}>
                            12/12/2024
                        </p>
                    </td>
                    <td width="10%">
                        <button  class="btn-label"  style={{display:"flex",justifyContent:"center",alignItems:"center"}}><img src="../images/calendar.svg" width="100%"/></button>
                    </td>
                </tr>
               
                
                <tr>
                    <td colspan="4" style={{paddingTop:"10px"}}>
                        <p class="heading-main12" style={{marginLeft:"45px",fontSize:"18px",color:"rgb(49, 49, 49)"}}>All Doctors</p>
                    </td>
                    
                </tr>
                
                  
                <tr>
                   <td colspan="4">
                       <center>
                        <div class="abc scroll">
                        <table width="93%" class="sub-table scrolldown" border="0">
                        <thead>
                        <tr>
                                <th class="table-headin">
                                    
                                
                                Doctor Name
                                
                                </th>
                                <th class="table-headin">
                                    Email
                                </th>
                                <th class="table-headin">
                                    
                                    Specialties
                                    
                                </th>
                                <th class="table-headin">
                                    
                                    Events
                                 </th>   
                                </tr>
                        </thead>
                        <tbody>
                        
                            {/* <tr>
                                    <td colspan="4">
                                    <br/><br/><br/><br/>
                                    <center>
                                    <img src="../images/notfound.svg" width="25%"/>
                                    
                                    <br/>
                                    <p class="heading-main12" style={{marginLeft:"45px",fontSize:"20px",color:"rgb(49, 49, 49)"}}>We  couldnt find anything related to your keywords !</p>
                                    <a class="non-style-link"><button  class="login-btn btn-primary-soft btn" style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"20px"}}>&nbsp; Show all Doctors &nbsp;</button>
                                    </a>
                                    </center>
                                    <br/><br/><br/><br/>
                                    </td>
                                    </tr> */}
                                
                                {
                    IsLoading===true ?
                    <tr>
                    <td colSpan={4}>
                        <div className="loader" style={{display:"flex", justifyContent:"space-around"}}></div>
                    </td>
                    </tr>
                    :
                <>{ doctordata && doctordata.map((doctor)=>(
                    <>
                    <tr>
                        <td style={{fontSize:"18px", textAlign:"center",color:"var(--btnnicetext)"}}>Dr. {doctor.name}</td>
                        <td style={{textAlign:"center"}}>{doctor.email}</td>
                        <td style={{textAlign:"center"}}>{doctor._id}</td>
                        <td style={{textAlign:"center"}}><input onClick={()=>{bookAppointment(doctor._id,doctor.name)}} class="btn-primary-soft btn button-icon btn-book1" style={{marginRight:"10px",marginTop:"5px"}} type='button' value="Book Appointment"/>
                        </td>
                    </tr>
                    </>
                ))}</>}  

                                
                                        {/* <td>
                                        <div style={{display:"flex",justifyContent:"center"}}>
                                        <a href="?action=edit&id='.$docid.'&error=0" class="non-style-link"><button  class="btn-primary-soft btn button-icon btn-edit"  style={{paddingLeft:"40px",paddingTop:"12px",paddingBottom:"12px",marginTop:"10px"}}><font class="tn-in-text">Edit</font></button></a>
                                        &nbsp;&nbsp;&nbsp;
                                        <a href="?action=view&id='.$docid.'" class="non-style-link"><button  class="btn-primary-soft btn button-icon btn-view"  style={{paddingLeft:"40px",paddingTop:"12px",paddingBottom:"12px",marginTop:"10px"}}><font class="tn-in-text">View</font></button></a>
                                       &nbsp;&nbsp;&nbsp;
                                       <a href="?action=drop&id='.$docid.'&name='.$name.'" class="non-style-link"><button  class="btn-primary-soft btn button-icon btn-delete"  style={{paddingLeft:"40px",paddingTop:"12px",paddingBottom:"12px",marginTop:"10px"}}><font class="tn-in-text">Remove</font></button></a>
                                        </div>
                                        </td> */}
                                    
                            </tbody>

                        </table>
                        </div>
                        </center>
                        </td>
                        </tr>
                        </table>

                    {register1==true &&
                        <div id="popup1" class="overlay">
                    <div class="popup">
                    <center>
                    
                        <a class="close" onClick={()=>setregister1(false)}>&times;</a> 
                        <div style={{display:"flex",justifyContent:"center"}}>
                        <div class="abc">
                        <table width="80%" class="sub-table scrolldown add-doc-form-container" border="0">
                        <tr>
                                <td class="label-td" colspan="2"></td>
                            </tr>
                            <tr>
                                <td>
                                    <p style={{padding:"0",margin:"0",textAlign:"left",fontSize:"25px",fontWeight:"500"}}>Book Appointment</p><br/><br/>
                                </td>
                            </tr>
                            
                            <tr>
                                
                                <td class="label-td" colspan="2">
                                    <label for="name" class="form-label">Doctor Name: {doctorname}</label>
                                    <br/>
                                    <br/>
                                </td>
                            </tr>
                            <tr>
                                
                                <td class="label-td" colspan="2">
                                    <label for="name" class="form-label">Name: </label>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="2">
                                    <input value={name} onChange={nameHandler} type="text" name="name" class="input-text" placeholder="Name" required/><br/>
                                </td>
                                
                            </tr>
                            <tr>
                                
                                <td class="label-td" colspan="2">
                                    <label for="name" class="form-label">Age: </label>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="2">
                                    <input value={age} onChange={ageHandler} type="text" name="name" class="input-text" placeholder="Age" required/><br/>
                                </td>
                                
                            </tr>
                            <tr>
                                
                                <td class="label-td" colspan="2">
                                    <label for="name" class="form-label">Gender: </label>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="2">
                                    <input value={gender} onChange={genderHandler} type="text" name="name" class="input-text" placeholder="Gender" required/><br/>
                                </td>
                                
                            </tr>
                            <tr>
                                
                                <td class="label-td" colspan="2">
                                    <label for="name" class="form-label">Phone No.: </label>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="2">
                                    <input value={phoneno} onChange={phonenoHandler} type="text" name="name" class="input-text" placeholder="Phone No." required/><br/>
                                </td>
                                
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <input type="reset" value="Reset" class="login-btn btn-primary-soft btn"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                
                                    <button onClick={submitHandler} value="Add" class="login-btn btn-primary-soft btn">Book Appointment</button>
                                </td>
                
                            </tr>
                           
                            
                            
                        </table>
                        </div>
                        </div>
                    </center>
                    <br/><br/>
            </div>
            </div>}
                        </div>
                        
        </>
    )
}

export default Doctors