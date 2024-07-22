import { useState, useEffect } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Appointmentmanager=()=>{
    const [register1,setregister1]=useState(false);
    const doctorid = localStorage.getItem('id');
    const [data, setdata] = useState('');
    const [IsLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

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
    const submitHandler= (event)=>{
        event.preventDefault();
        let appointmentData ={doctorid:doctorid,name:name,age:age,phoneno:phoneno,gender:gender,symptoms:symptoms,prescription:prescription}
        axios.post(`https://clinic-app-backend.vercel.app/appointments/addappointment`,appointmentData).then((response)=>{
            getallpatientData();
        })

            let newpassword= phoneno.slice(-3,);
            let registrationData ={phoneno:phoneno,name:name,email:"",password:newpassword,usertype:"patient"}
        axios.post('https://clinic-app-backend.vercel.app/users/registration',registrationData).then((response)=>{
                console.log(response);
                alert("Your password is the last 3 digits of your phone number.");
                setregister1(false);

        })


    }

    const getallpatientData =()=>{
        axios.get(`https://clinic-app-backend.vercel.app/appointments/findappointments/${doctorid}`).then((response)=>{
            setdata(response.data.message)
            setIsLoading(false);
        })
    }

    useEffect(()=>{
        getallpatientData();
    })

    const handleDelete = (patientId)=>{
        axios.delete(`https://clinic-app-backend.vercel.app/appointments/deleteappointment/${patientId}`).then((response)=>{
            getallpatientData();
        })
    }

    return(
        <>
        <div class="dash-body">
            <table border="0" width="100%" style={{borderSpacing:"0",margin:"0",padding:"0"}}>
                <tr >
                    
                    <td>
                        <p style={{fontSize:"23px",paddingLeft:"48px",fontWeight:"600"}}>Appointment Manager</p>
                                           
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
                        <button  class="btn-label"  style={{display:"flex",justifyContent:"center",alignItems:" center"}}><img src="../images/calendar.svg" width="100%"/></button>
                    </td>


                </tr>
               
                <tr>
                    <td colspan="4" >
                        <div style={{display:"flex",marginTop:"40px"}}>
                        <div class="heading-main12" style={{marginLeft:"45px",fontSize:"20px",color:"rgb(49, 49, 49)",marginTop:"5px"}}>Schedule a Session</div>
                        <a onClick={()=>{setregister1(true)}} class="non-style-link"><button  class="login-btn btn-primary btn button-icon"  style={{marginLeft:"25px",backgroundImage:" url('../images/icons/add.svg')"}}>Add a Session</button>
                        </a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="4" style={{paddingTop:"10px",width:"100%"}}>
                    
                        <p class="heading-main12" style={{marginLeft:"45px",fontSize:"18px",color:"rgb(49, 49, 49)"}}>My Appointments </p>
                    </td>
                    
                </tr>
                <tr>
                    <td colspan="4" style={{paddingTop:"0px",width:"100%"}}>
                        <center>
                        <table class="filter-container" border="0" >
                        <tr>
                           <td width="10%">

                           </td> 
                        <td width="5%" style={{textAlign:"center"}}>
                        Date:
                        </td>
                        <td width="30%">
                        <form action="" method="post">
                            <input type="date" name="sheduledate" id="date" class="input-text filter-container-items" style={{margin:"0",width:"95%"}}/>
                        </form>
                        </td>
                        
                    <td width="12%">
                        <form action="" method="post">
                        {/* <input type="submit" name="filter" value=" Filter" class=" btn-primary-soft btn button-icon btn-filter"  style={{padding:"15px",margin:"0",width:"100%"}}/> */}
                        <input class="btn-primary-soft btn button-icon btn-filter" style={{marginTop:"10px",marginBottom:"10px"}} type='button' value="Filter"/>
                        </form>
                    </td>

                    </tr>
                    </table>

                        </center>
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
                                    Patient name
                                </th>
                                <th class="table-headin">
                                    
                                    Age
                                    
                                </th>
                               
                                <th class="table-headin">
                                    
                                
                                    Gender
                                    
                                    </th>
                                
                                <th class="table-headin" >
                                    
                                    Phone No.
                                    
                                </th>
                                
                                <th class="table-headin">
                                    
                                    Date
                                    
                                </th>
                                <th class="table-headin">
                                    
                                    Time
                                    </th>
                                <th class="table-headin">
                                    
                                    Actions
                                    </th>
                                </tr>
                        </thead>
                        <tbody>
                        
                            {/* <tr>
                                    <td colspan="7">
                                    <br/><br/><br/><br/>
                                    <center>
                                    <img src="../images/notfound.svg" width="25%"/>
                                    
                                    <br/>
                                    <p class="heading-main12" style={{marginLeft:"45px",fontSize:"20px",color:"rgb(49, 49, 49)"}}>We  couldnt find anything related to your keywords !</p>
                                    <a class="non-style-link"><button  class="login-btn btn-primary-soft btn"  style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"20px"}}>&nbsp; Show all Appointments &nbsp;</button>
                                    </a>
                                    </center>
                                    <br/><br/><br/><br/>
                                    </td>
                                    </tr> */}
                                 
                                 {
                    IsLoading===true ?
                    <tr>
                    <td colSpan={7}>
                        <div className="loader" style={{display:"flex", justifyContent:"space-around"}}></div>
                    </td>
                    </tr>
                    :
                                 <>
                                 { data && data.map((data1)=>(   
                                 <tr>
                                
                                        <td style={{textAlign:"center",color:"var(--btnnicetext)"}}>
                                        {data1.name}
                                        
                                        </td>
                                        <td style={{textAlign:"center"}}>
                                        {data1.age}
                                        </td>
                                        <td style={{textAlign:"center"}}>
                                        {data1.gender}
                                        </td>
                                        
                                        <td style={{textAlign:"center"}}>
                                        {data1.phoneno}
                                        </td>

                                        <td style={{textAlign:"center"}}>
                                        
                                        </td>
                                        <td style={{textAlign:"center"}}>
                                        
                                        </td>
                                        <td style={{textAlign:"center"}}>
                                        <input class="btn-primary-soft btn button-icon btn-delete" style={{marginRight:"10px",marginTop:"5px"}} type='button' value="Delete" onClick={()=>{handleDelete(data1._id)}}/>
                                        <input class="btn-primary-soft btn button-icon btn-edit" style={{marginTop:"5px"}} type='button' value="Edit" />
                    
                                        <input class="btn-primary-soft btn button-icon btn-view" style={{marginTop:"5px",marginLeft:"10px"}} type='button' value="Details" />
                                        </td>
                                    </tr>
                                     ))}</>}
                               
 
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
                    
                    
                        <a style={{cursor:"pointer"}} class="close" onClick={()=>{setregister1(false)}}>&times;</a> 
                        <div style={{display:"flex",justifyContent:"center"}}>
                        <div class="abc">
                        <table width="80%" class="sub-table scrolldown add-doc-form-container" border="0">
                        <tr>
                                <td class="label-td" colspan="2">
                                  </td>
                            </tr>

                            <tr>
                                <td>
                                    <p style={{padding:"0",margin:"0",textAlign:"left",fontSize:"25px",fontWeight:"500"}}>Add New Session.</p><br/>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="2">
                                <form method="POST" class="add-new-form">
                                    <label for="title" class="form-label">Patient Name : </label></form>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="2">
                                    <input type="text" name="title" class="input-text" placeholder="Patient Name" value={name} onChange={nameHandler} required/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="2">
                                    <label for="nop" class="form-label">Age: </label>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="2">
                                    <input type="number" name="nop" class="input-text" min="0" placeholder="Age" value={age} onChange={ageHandler} required/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="2">
                                    <label for="nop" class="form-label">Gender: </label>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="2">
                                    <input type="text" name="nop" class="input-text" min="0" placeholder="Gender" value={gender} onChange={genderHandler} required/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="2">
                                    <label for="nop" class="form-label">Phone No.: </label>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="2">
                                    <input type="number" name="nop" class="input-text" min="0" placeholder="Phone No." value={phoneno} onChange={phonenoHandler} required/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="2">
                                    <label for="date" class="form-label">Session Date: </label>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="2">
                                    <input type="date" name="date" class="input-text" min="'.date('Y-m-d').'"/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="2">
                                    <label for="time" class="form-label">Schedule Time: </label>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="2">
                                    <input type="time" name="time" class="input-text" placeholder="Time"/><br/>
                                </td>
                            </tr>
                           
                            <tr>
                                <td colspan="2">
                                    <input type="reset" value="Reset" class="login-btn btn-primary-soft btn"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                
                                    <input type="reset" onClick={submitHandler} value="Place this Session" class="login-btn btn-primary-soft btn" name="shedulesubmit"/>
                                    
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

export default Appointmentmanager