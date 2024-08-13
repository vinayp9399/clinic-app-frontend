import { useState, useEffect } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Appointmentmanager=()=>{

    const doctorid = localStorage.getItem('id');
    const phoneno = localStorage.getItem('phoneno');
    const [patientdata, setpatientdata] = useState('');
    const [notfound, setnotfound] = useState(false);
    const [searchIt, setsearchIt] = useState(false);
    const [patientphone,setpatientphone]=useState('')
    const [IsLoading, setIsLoading] = useState(true);
    const [data, setdata] = useState('');
    const [showpatients, setshowpatients] = useState(false);
    const navigate = useNavigate();

    const setPatient=(e)=>{
        setpatientphone(e.target.value);
    }

    
    const searchPatient=()=>{
        setIsLoading(true);
        setshowpatients(false);
        if(patientphone==""){
            setIsLoading(false);
            setshowpatients(true);
            alert("Please enter phone no.")
        }
        else{axios.get(`https://clinic-app-backend.vercel.app/appointments/findpatient/${doctorid}/${patientphone}`).then((response)=>{
            if(response.data.message == 'no record found'){
                setnotfound(true);
                setIsLoading(false);
                setsearchIt(false);
            }
            else{setsearchIt(true);
            setpatientdata(response.data.message);
            setnotfound(false);
            setIsLoading(false);}
        })
    }}

    const getallpatientData =()=>{

        
        axios.get(`https://clinic-app-backend.vercel.app/appointments/findappointments/${doctorid}`).then((response)=>{
            setdata(response.data.message)
            setIsLoading(false);
            setshowpatients(true);
        })
    }

    useEffect(()=>{
        getallpatientData();
    },[])

    const handleDelete = (patientId)=>{
        axios.delete(`https://clinic-app-backend.vercel.app/appointments/deleteappointment/${patientId}`).then((response)=>{
            getallpatientData();
        })
    }

    return(
        <>
            <table border="0" width="100%" style={{borderSpacing:"0",margin:"0",padding:"0"}}>
               
                <tr>
                    <td colspan="4" >
                        {/* <div style={{display:"flex",marginTop:"40px"}}>
                        <div class="heading-main12" style={{marginLeft:"45px",fontSize:"20px",color:"rgb(49, 49, 49)",marginTop:"5px"}}>Add Appointment</div>
                        <a onClick={()=>{setregister1(true)}} class="non-style-link"><button class="login-btn btn-primary btn button-icon"  style={{marginLeft:"25px",backgroundImage:" url('../images/icons/add.svg')"}}>Appointment</button>
                        </a>
                        </div> */}
                    </td>
                </tr>
                <tr>
                    <td colspan="4" style={{width:"100%"}}>
                    
                        <p class="heading-main12" style={{marginLeft:"45px",fontSize:"18px",color:"rgb(49, 49, 49)"}}>My Appointments </p>
                    </td>
                    
                </tr>
                <tr>
                    <td colspan="4" style={{paddingTop:"0px",width:"100%"}}>
                        <center>
                        <table class="filter-container" border="0" >
                        <tr>
                           <td width="5%">

                           </td> 
                        <td width="12%" style={{textAlign:"center"}}>
                        Patient Phone No:
                        </td>
                        <td width="30%">
                        <form action="" method="post">
                            <input onChange={setPatient} type="text" name="sheduledate" id="date" placeholder="Enter phone no." class="input-text filter-container-items" value={patientphone} style={{margin:"0",width:"95%"}}/>
                        </form>
                        </td>
                        
                    <td width="12%">
                        
                        {/* <input type="submit" name="filter" value=" Filter" class=" btn-primary-soft btn button-icon btn-filter"  style={{padding:"15px",margin:"0",width:"100%"}}/> */}
                        <input onClick={searchPatient} class="login-btn btn-primary btn" style={{marginTop:"10px",marginBottom:"10px"}} type='button' value="Search"/>
                        
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
                                 
                                 {IsLoading===true &&
                    <tr>
                    <td colSpan={7}>
                        <div className="loader1" style={{display:"flex", justifyContent:"space-around"}}></div>
                    </td>
                    </tr>
                    }
                        
                        {showpatients===true &&
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
                                        {data1.date}
                                        </td>
                                        <td style={{textAlign:"center"}}>
                                        {data1.time}
                                        </td>
                                        <td style={{textAlign:"center"}}>
                                        {/* <input class="btn-primary-soft btn button-icon btn-delete" style={{marginRight:"10px",marginTop:"5px"}} type='button' value="Delete" onClick={()=>{handleDelete(data1._id)}}/> */}
                                        {/* <input class="btn-primary-soft btn button-icon btn-edit" style={{marginTop:"5px"}} type='button' value="Edit" /> */}
                    
                                        <input class="btn-primary-soft btn button-icon btn-view" style={{marginTop:"5px",marginLeft:"10px"}} onClick={()=>navigate("/patientdetails")} type='button' value="Details" />
                                        </td>
                                    </tr>
                                     ))}</>}
                               
                               {searchIt===true &&
                               <>
                               {patientdata && <>
                                <tr>
                                
                                        <td style={{textAlign:"center",color:"var(--btnnicetext)"}}>
                                        {patientdata.name}
                                        
                                        </td>
                                        <td style={{textAlign:"center"}}>
                                        {patientdata.age}
                                        </td>
                                        <td style={{textAlign:"center"}}>
                                        {patientdata.gender}
                                        </td>
                                        
                                        <td style={{textAlign:"center"}}>
                                        {patientdata.phoneno}
                                        </td>

                                        <td style={{textAlign:"center"}}>
                                        {patientdata.date}
                                        </td>
                                        <td style={{textAlign:"center"}}>
                                        {patientdata.time}
                                        </td>
                                        <td style={{textAlign:"center"}}>
                                        {/* <input class="btn-primary-soft btn button-icon btn-delete" style={{marginRight:"10px",marginTop:"5px"}} type='button' value="Delete" onClick={()=>{handleDelete(data1._id)}}/> */}
                                        <input class="btn-primary-soft btn button-icon btn-edit" style={{marginTop:"5px"}} type='button' value="Edit" />
                    
                                        <input class="btn-primary-soft btn button-icon btn-view" style={{marginTop:"5px",marginLeft:"10px"}} type='button' value="Details" />
                                        </td>
                                    </tr></>
                                    
                               }
                               <tr></tr>
                               <tr></tr>
                               <td colSpan={7}>
                    
                               <a style={{display:"flex", justifyContent:"space-around",marginBottom:"10px"}} onClick={()=>{setshowpatients(true); setsearchIt(false); setpatientphone('');setnotfound(false);}} class="non-style-link"><button class="login-btn btn-primary-soft btn">Back</button>
                               </a></td>
                               </>
                               }
                               
                               {notfound===true &&
                               
                               <tr>
                               <td colspan="7">
                               <br/><br/>
                               <center>
                               <img src="../images/notfound.svg" width="25%"/>
                               <br/>
                               <p class="heading-main12" style={{fontSize:"20px",color:"rgb(49, 49, 49)"}}>Patient not found!</p>
                               <a style={{display:"flex", justifyContent:"space-around",marginBottom:"10px"}} onClick={()=>{setshowpatients(true); setsearchIt(false); setpatientphone('');setnotfound(false);}} class="non-style-link"><button class="login-btn btn-primary-soft btn">Back</button>
                               </a>
                               </center>
                               <br/><br/>
                               </td>
                               </tr>
                               
                               }


                            </tbody>

                        </table>
                        </div>
                        </center>
                        </td>
                        </tr>
                        </table>
    
        </>
    )
}

export default Appointmentmanager