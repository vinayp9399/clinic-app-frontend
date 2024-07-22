import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from 'axios';

const DoctorDash=()=>{
    const firstname = localStorage.getItem('name');
    const navigate = useNavigate();

    const doctorid = localStorage.getItem('id');
    const [data, setdata] = useState('');
    const [IsLoading, setIsLoading] = useState(true);

    const getallpatientData =()=>{
        axios.get(`https://clinic-app-backend.vercel.app/appointments/findappointments/${doctorid}`).then((response)=>{
            setdata(response.data.message)
            setIsLoading(false);
        })
    }

    useEffect(()=>{
        getallpatientData();
    })

    return(
        <>
        <div class="dash-body">
            <table border="0" width="100%" style={{borderSpacing: "0", margin:"0", padding:"0"}}>
                        
                        <tr >
                            
                            <td colspan="1" class="nav-bar" >
                            <p style={{fontSize: "23px", paddingLeft:"12px", fontWeight:"600", marginLeft:"20px"}}>Dashboard</p>
                          
                            </td>
                            <td width="25%">

                            </td>
                            <td width="15%">
                                <p style={{fontSize: "14px",color: "rgb(119, 119, 119)",padding: "0",margin: "0",textAlign: "right"}}>
                                    Today's Date
                                </p>
                                <p class="heading-sub12" style={{padding: "0",margin: "0"}}>
                            12/3/2024
                                </p>
                            </td>
                            <td width="10%">
                                <button  class="btn-label"  style={{display: "flex", justifyContent:"center",alignItems: "center"}}><img src="../images/calendar.svg" width="100%"/></button>
                            </td>
        
        
                        </tr>
                <tr>
                    <td colspan="4">
                        
                    <center>
                    <table class="filter-container doctor-header" style={{border: "none", width:"95%"}} border="0">
                    <tr>
                        <td rowSpan={2}>
                            <h3>Welcome!</h3>
                            <h1>Dr. {firstname}</h1>
                            <p >Thanks for joining with us. We are always trying to get <br /> you a complete service.
                            You can view your dailly <br /> schedule, Reach Patients Appointment at home!<br/><br/>
                            </p>
                            <a onClick={()=>{navigate("/appointmentmanager")}} class="non-style-link"><button class="btn-primary btn" style={{width:"50%"}}>View My Appointments</button></a>
                            <br/>
                            <br/>
                            <br />
                            
                        </td>
                        
                                            
                                                <td style={{width: "20%"}}>
                                                    <div  class="dashboard-items"  style={{padding:"20px",margin:"auto",width:"95%",display: "flex"}}>
                                                        <div>
                                                                <div class="h1-dashboard">
                                                                 {data.length}
                                                                </div><br/>
                                                                <div class="h3-dashboard">
                                                                Total Patients &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                </div>
                                                        </div>
                                                                <div class="btn-icon-back dashboard-icons" style={{backgroundImage: "url('../images/icons/doctors-hover.svg')"}}></div>
                                                    </div>
                                                </td>
                                                <td style={{width: "20%"}}>
                                                    <div class="dashboard-items" style={{padding:"20px", margin:"auto",width:"95%",display: "flex"}}>
                                                        <div>
                                                                <div class="h1-dashboard">
                                                                  0  
                                                                </div><br/>
                                                                <div class="h3-dashboard">
                                                                Today's Followups &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                </div>
                                                        </div>
                                                                <div class="btn-icon-back dashboard-icons" style={{backgroundImage: "url('../images/icons/patients-hover.svg')"}}></div>
                                                    </div>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td style={{width: "20%"}}>
                                                    <div  class="dashboard-items"  style={{padding:"20px",margin:"auto",width:"95%",display:"flex"}}>
                                                        <div>
                                                                <div class="h1-dashboard" >
                                                                 0   
                                                                </div><br/>
                                                                <div class="h3-dashboard">
                                                                    New Booking &nbsp;&nbsp;
                                                                </div>
                                                        </div>
                                                                <div class="btn-icon-back dashboard-icons" style={{marginLeft: "0px",backgroundImage: "url('../images/icons/book-hover.svg')"}}></div>
                                                    </div>
                                                    
                                                </td>

                                                <td style={{width: "20%"}}>
                                                    <div  class="dashboard-items"  style={{padding:"20px",margin:"auto",width:"95%",display:"flex",paddingTop:"21px",paddingBottom:"21px"}}>
                                                        <div>
                                                                <div class="h1-dashboard">
                                                                  0  
                                                                </div><br/>
                                                                <div class="h3-dashboard">
                                                                    Today Sessions
                                                                </div>
                                                        </div>
                                                                <div class="btn-icon-back dashboard-icons" style={{backgroundImage: "url('../images/icons/session-iceblue.svg')"}}></div>
                                                    </div>
                                                </td>
                                                
                                                </tr>
                                        
                    
                    </table>
                    </center>
                    
                </td>
                </tr>
                <tr>
                    <td colspan="4">
                        <table border="0" width="100%">
                            <tr>
                                <td width="50%">
                                    <center>
                                        <table class="filter-container" style={{border: "none"}} border="0">
                                            <tr>
                                                <td colspan="4">
                                                    <p style={{fontSize: "20px",fontWeight:"600",paddingLeft: "12px"}}>Summary</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{width: "25%"}}>
                                                    <div  class="dashboard-items"  style={{padding:"20px",margin:"auto",width:"95%",display: "flex"}}>
                                                        <div class="piechartsum">
                                                                
                                                        </div>
                                                                
                                                    </div>
                                                </td>
                                                </tr>
                                                
                                        </table>
                                    </center>








                                </td>
                                <td>


                            
                                    <p id="anim" style={{fontSize: "20px",fontWeight:"600",paddingLeft: "40px"}}>Your Up Coming Sessions until Next week</p>
                                    <center>
                                        <div class="abc scroll" style={{height: "250px",padding: "0",margin: "0"}}>
                                        <table width="85%" class="sub-table scrolldown" border="0" >
                                        <thead>
                                            
                                        <tr>
                                                <th class="table-headin">
                                                    
                                                
                                                Session Title
                                                
                                                </th>
                                                
                                                <th class="table-headin">
                                                Sheduled Date
                                                </th>
                                                <th class="table-headin">
                                                    
                                                     Time
                                                    
                                                </th>
                                                    
                                                </tr>
                                        </thead>
                                        <tbody>
                                        
                                            <tr>
                                                    <td colspan="4">
                                                    <br/><br/><br/><br/>
                                                    <center>
                                                    <img src="../images/notfound.svg" width="25%"/>
                                                    
                                                    <br/>
                                                    <p class="heading-main12" style={{marginLeft: "45px",fontSize:"20px",color:"rgb(49, 49, 49)"}}>We  couldnt find anything related to your keywords !</p>
                                                    <a class="non-style-link"><button  class="login-btn btn-primary-soft btn"  style={{display:"flex",justifyContent:"center",alignItems: "center",marginLeft:"20px"}}>&nbsp; Show all Sessions &nbsp;</button>
                                                    </a>
                                                    </center>
                                                    <br/><br/><br/><br/>
                                                    </td>
                                                    </tr>
                                                 
                                               <tr>
                                                        <td style={{padding:"20px"}}> &nbsp;
                                                        </td>
                                                        
                                                        <td style={{padding:"20px",fontSize:"13px"}}>
                                                        </td>
                                                        
                                                        <td style={{textAlign:"center"}}>
                                                        </td>
                                                        

                
                                                       
                                                    </tr>
                                                
                 
                                            </tbody>
                
                                        </table>
                                        </div>
                                        </center>







                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
        </>
    )
}

export default DoctorDash