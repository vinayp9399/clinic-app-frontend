import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from 'axios';
import { PieChart } from "react-minimal-pie-chart";

const DoctorDash=()=>{
    const firstname = localStorage.getItem('name');

    const [data, setdata] = useState('');
    const [bookingdata, setbookingdata] = useState('');

    const [register1,setregister1]=useState(false);
    const doctorid = localStorage.getItem('id');
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
    const prescriptionHandler = (event)=>{
        getprescription(event.target.value)
    }
    const symptomsHandler = (event)=>{
        getsymptoms(event.target.value)
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
                alert("Password of the patient is the last 3 digits of the phone number.");
                setregister1(false);

        })


    }

    const getbookingData =()=>{
        axios.get(`https://clinic-app-backend.vercel.app/appointments/findstatus/${doctorid}`).then((response)=>{
            setbookingdata(response.data.message)
            setIsLoading(false);
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
        getbookingData();
    })

    return(
        <>
        
            <table border="0" width="100%" style={{borderSpacing: "0", margin:"0", marginTop:"25px", padding:"0"}}>
                        
                        
                <tr>
                    <td colspan="4">
                        
                    <center>
                    <table class="filter-container doctor-header" style={{border: "none", width:"95%",marginBottom:"0px"}} border="0">
                    <tr>
                        <td rowSpan={2}>
                            <h3 style={{marginBottom:"0px"}}>Welcome!</h3>
                            <h1 style={{margin:"0px"}}>Dr. {firstname}</h1>
                            <p >Thanks for joining with us. We are always trying to get <br /> you a complete service.
                            You can view your dailly <br /> schedule, Reach Patients Appointment at home!<br/>
                            </p>
                            <a onClick={()=>{navigate("/prescriptionform")}} class="non-style-link"><button class="btn-primary btn" style={{width:"50%"}}>Patient Prescription</button></a>
                            
                            
                            
                        </td>
                        
                                            
                                                <td style={{width: "20%"}}>
                                                    <div  class="dashboard-items"  style={{padding:"20px",margin:"auto",width:"95%",display: "flex"}}>
                                                        <div>
                                                                <div class="h1-dashboard">
                                                                 {data.length}
                                                                </div><br/>
                                                                <div class="h3-dashboard">
                                                                Total Patients 
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
                                                                Today's Followups 
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
                                                                {bookingdata.length}   
                                                                </div><br/>
                                                                <div class="h3-dashboard">
                                                                    Patient Bookings 
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
                                                                    Revenue Generated
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
                                        <table style={{border:"none",position:"relative",top:"-21px"}} class="filter-container" border="0">
                                            {/* <tr>
                                                <td colspan="4">
                                                    <p style={{fontSize: "20px",fontWeight:"600",paddingLeft: "12px",paddingTop: "0px"}}>Summary</p>
                                                </td>
                                            </tr> */}
                                            <tr>
                                                <td style={{width: "25%"}}>
                                                    <div class="dashboard-items"  style={{padding:"20px",paddingBottom:"0px",paddingTop:"0px",margin:"auto",width:"95%",display: "flex",backgroundColor:"#D8EBFA"}}>
                                                        
                                                    <PieChart style={{height:"248px"}} animation animationDuration={500} animationEasing="ease-out"
   center={[50, 50]}
//    label={({ dataEntry }) => dataEntry.title}
//     labelStyle={
//         {
//             fill: "white",
//             fontSize: "3px",
//             fontFamily: "Helvetica Neue,sans-serif",
//             textShadow: "1px 1px 5px #000"
//         }
//     }
   data={[
     {
     color: "#0a76d8",
     title: "Total patients",
     value: data.length,
     },
     {
     color: "green",
     title: "Patient bookings",
     value: bookingdata.length,
     },
     {
     color: "#6A2135",
     title: "Today's Followups",
     value: 3,
     },
     {
     color: "orange",
     title: "Today's Followups",
     value: 1,
     },
   ]}
//    labelPosition={70}
   lengthAngle={360}
   lineWidth={65}
   paddingAngle={0}
   radius={50}
   startAngle={0}
   viewBoxSize={[104, 110]}
      />
      <ul style={{listStyleType:"none", marginTop:"48px",width:"420px",lineHeight:"33px",color:"black"}}>
      <li style={{display:"flex",gap:"5px",alignItems:"center"}}><div style={{width:"20px", height:"20px",backgroundColor:"#0a76d8"}}></div> Total patients</li>
      <li style={{display:"flex",gap:"5px",alignItems:"center"}}><div style={{width:"20px", height:"20px",backgroundColor:"green"}}></div> Patient bookings</li>
      <li style={{display:"flex",gap:"5px",alignItems:"center"}}><div style={{width:"20px", height:"20px",backgroundColor:"#6A2135"}}></div> Today's Followups</li>
      <li style={{display:"flex",gap:"5px",alignItems:"center"}}><div style={{width:"20px", height:"20px",backgroundColor:"orange"}}></div> Revenue Generated</li>
      </ul>
                                                                
                                                    </div>
                                                </td>
                                                
                                                </tr>
                                                
                                        </table>
                                    </center>








                                </td>
                                <td width="50%">


                            
                                    
                                    <center>
                                    <table class="filter-container" style={{border: "none"}} border="0">
                                    <tr>
                                                <td colspan="4"><p id="anim" style={{fontSize: "20px",fontWeight:"600"}}>Patient Bookings</p></td>
                                    </tr>
                                    <tr><td>
                                        <div class="abc scroll" style={{height: "250px",padding: "0",margin: "0"}}>
                                        <table width="100%" class="sub-table scrolldown" border="0" >
                                        <thead>
                                            
                                        <tr>
                                                <th class="table-headin">
                                                Patient Name
                                                </th>
                                                
                                                <th class="table-headin">
                                                Booking Date
                                                </th>
                                                <th class="table-headin">
                                                    
                                                Action
                                                    
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
                                                    <p class="heading-main12" style={{marginLeft: "45px",fontSize:"20px",color:"rgb(49, 49, 49)"}}>We  couldnt find anything related to your keywords !</p>
                                                    <a class="non-style-link"><button  class="login-btn btn-primary-soft btn"  style={{display:"flex",justifyContent:"center",alignItems: "center",marginLeft:"20px"}}>&nbsp; Show all Sessions &nbsp;</button>
                                                    </a>
                                                    </center>
                                                    <br/><br/><br/><br/>
                                                    </td>
                                                    </tr> */}
                                            { bookingdata && bookingdata.map((booking)=>( 
                                               <tr>
                                                        <td style={{padding:"15px",textAlign:"center"}}> {booking.name}
                                                        </td>
                                                        
                                                        <td style={{padding:"15px",textAlign:"center"}}>{booking.date}
                                                        </td>
                                                        
                                                        <td style={{textAlign:"center"}}><button class="btn-primary-soft1 btn1" onClick={()=>{navigate(`/editappointment/${booking._id}`)}}>Details</button> 
                                                        </td>
                                                        

                
                                                       
                                                    </tr>))} 
                                                
                 
                                            </tbody>
                
                                        </table>
                                        </div></td></tr></table>
                                        </center>







                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

        
        </>
    )
}

export default DoctorDash