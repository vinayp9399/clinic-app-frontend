import { useState, useEffect } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Prescriptionform=()=>{
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

    const prescriptionHandler = (event)=>{
        getprescription(event.target.value)
    }
    const symptomsHandler = (event)=>{
        getsymptoms(event.target.value)
    }

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
        let date1 = new Date();
        let time = `${date1.getHours()}:${date1.getMinutes()}`
        let date = `${date1.getDate()}/${date1.getMonth()+1}/${date1.getFullYear()}`
        let appointmentData ={doctorid:doctorid,name:name,age:age,phoneno:phoneno,gender:gender,symptoms:symptoms,prescription:prescription,time:time,date:date}
        axios.post(`https://clinic-app-backend.vercel.app/appointments/addappointment`,appointmentData).then((response)=>{
            getallpatientData();
        })

            let newpassword= phoneno.slice(-3,);
            let registrationData ={phoneno:phoneno,name:name,email:"",password:newpassword,usertype:"patient"}
        axios.post('https://clinic-app-backend.vercel.app/users/registration',registrationData).then((response)=>{
                console.log(response);
                alert("Registration Done");
                navigate("/doctordashboard")

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

    // const handleDelete = (patientId)=>{
    //     axios.delete(`https://clinic-app-backend.vercel.app/appointments/deleteappointment/${patientId}`).then((response)=>{
    //         getallpatientData();
    //     })
    // }

    return(
        <>
        <div class="dash-body">
            <table border="0" width="100%" style={{borderSpacing:"0",margin:"0",padding:"0"}}>
                <tr >
                    
                    <td>
                        <p style={{fontSize:"23px",paddingLeft:"48px",fontWeight:"600"}}>Prescription Form</p>
                                           
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
                   <td colspan="4">
            
                   
                    
                        <div style={{display:"flex",justifyContent:"center"}}>
                        
                        <table width="80%" style={{border:"2px solid grey"}} class="sub-table add-doc-form-container" border="0">
                        <tr>
                                <td class="label-td" colspan="2">
                                  </td>
                            </tr>
                            
                            <tr>
                                <td class="label-td" colspan="1">
                                <form method="POST" class="add-new-form">
                                    <label for="title" class="form-label">Patient Name : </label></form>
                                </td>
                                <td class="label-td" colspan="1">
                                    <label for="nop" class="form-label">Age: </label>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="1">
                                    <input type="text" name="title" class="input-text" placeholder="Patient Name" value={name} onChange={nameHandler} required/><br/>
                                </td>
                                <td class="label-td" colspan="1">
                                    <input type="number" name="nop" class="input-text" min="0" placeholder="Age" value={age} onChange={ageHandler} required/><br/>
                                </td>
                            </tr>
                            
                            <tr>
                                <td class="label-td" colspan="1">
                                    <label for="nop" class="form-label">Phone No.: </label>
                                </td>
                                <td class="label-td" colspan="1">
                                    <label for="nop" class="form-label">Gender: </label>
                                </td>
                                
                            </tr>
                            <tr>
                                <td class="label-td" colspan="1">
                                    <input type="number" name="nop" class="input-text" min="0" placeholder="Phone No." value={phoneno} onChange={phonenoHandler} required/><br/>
                                </td>
                                <td style={{padding:"0px"}} class="label-td" colspan="1">
                                    {/* <input type="text" name="nop" class="input-text" min="0" placeholder="Gender" value={gender} onChange={genderHandler} required/><br/> */}
                                    <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                                    <div><input type="radio" id="male" name="gender" value="Male" onChange={genderHandler}/>
                                    <label for="Male">Male</label></div>
                                    <div><input type="radio" id="female" name="gender" value="Female" onChange={genderHandler}/>
                                    <label for="Female">Female</label></div>
                                    </div>

                                </td>
                            </tr>
                            
                            <tr>
                                <td class="label-td" colspan="2">
                                    <label for="nop" class="form-label">Symptoms: </label>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="3">
                                    <textarea rows="4" type="text" name="nop" class="input-text" placeholder="Symptoms" value={symptoms} onChange={symptomsHandler} required/><br/>
                                </td>
                            </tr> <tr>
                                <td class="label-td" colspan="2">
                                    <label for="nop" class="form-label">Prescription: </label>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="3">
                                    <textarea rows="4" type="text" name="nop" class="input-text" placeholder="Prescription" value={prescription} onChange={prescriptionHandler} required/><br/>
                                </td>
                            </tr>
                           
                            <tr>
                                <td colspan="2">
                                    <input type="reset" value="Download PDF" class="login-btn btn-primary-soft btn"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                
                                    <input type="reset" onClick={submitHandler} value="Register Patient" class="login-btn btn-primary-soft btn" name="shedulesubmit"/>
                                    
                                </td>
                
                            </tr>
                        </table>
                        
                        </div>
                    
                    <br/><br/>
                        </td>
                        </tr>
                        </table>

                        
    </div>
        </>
    )
}

export default Prescriptionform