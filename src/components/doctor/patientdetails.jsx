import { useState, useEffect } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Patientdetails=()=>{
    const doctorid = localStorage.getItem('id');
    const patientphone = localStorage.getItem('patientdetphone');
    const [patientdata, setpatientdata] = useState('');
    const navigate=useNavigate();

    const searchPatient=()=>{
        axios.get(`https://clinic-app-backend.vercel.app/appointments/findpatient/${doctorid}/${patientphone}`).then((response)=>{
            setpatientdata(response.data.message)
        })
    }

    useEffect(()=>{
        searchPatient();
    },[])

    return(
        <>
        <table border="0" width="100%" style={{borderSpacing:"0",margin:"0",padding:"0"}}>
                <tr>
                   <td colspan="4">
            
                   
                    
                        <div style={{display:"flex",marginLeft:"30px"}}>
                        
                        <table width="80%" style={{border:"2px solid grey"}} class="sub-table add-doc-form-container" border="0">
                        {/* <tr>
                                <td class="label-td" colspan="2">
                                  </td>
                            </tr> */}
                            
                            <tr>
                                <td class="label-td" colspan="1">
                                <form method="POST" class="add-new-form">
                                    <label for="title" class="form-label">Patient Name : </label></form>
                                </td>
                                <td class="label-td" colspan="1">
                                    <label for="nop" class="form-label">{patientdata.name} </label>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="1">
                                    <label for="nop" class="form-label">Age: </label>
                                </td>
                                <td class="label-td" colspan="1">
                                    <label for="nop" class="form-label">{patientdata.age} </label>
                                </td>
                            </tr>
                            
                            <tr>
                                <td class="label-td" colspan="1">
                                    <label for="nop" class="form-label">Phone No.: </label>
                                </td>
                                <td class="label-td" colspan="1">
                                    <label for="nop" class="form-label">{patientdata.phoneno} </label>
                                </td>
                                
                            </tr>
                            <tr>
                                <td class="label-td" colspan="1">
                                    <label for="nop" class="form-label">Gender: </label>
                                </td>
                                <td class="label-td" colspan="1">
                                    <label for="nop" class="form-label">{patientdata.gender} </label>
                                </td>
                            </tr>
                            
                            <tr>
                                <td class="label-td" colspan="1">
                                    <label for="nop" class="form-label">Symptoms: </label>
                                </td>
                                <td class="label-td" colspan="1">
                                    <label for="nop" class="form-label">{patientdata.symptoms}</label>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="1">
                                    <label for="nop" class="form-label">Prescription: </label>
                                </td>
                                <td class="label-td" colspan="1">
                                    <label for="nop" class="form-label">{patientdata.prescription} </label>
                                </td>
                            </tr> 
                        </table>
                        
                        </div>
                    
                    <br/><br/>
                        </td>
                        </tr>
                        </table>

                        <a style={{display:"flex",marginLeft:"30px"}} onClick={()=>{navigate("/appointmentmanager")}} class="non-style-link"><button class="login-btn btn-primary-soft btn">Back</button>
                               </a>

        </>
    )
}

export default Patientdetails