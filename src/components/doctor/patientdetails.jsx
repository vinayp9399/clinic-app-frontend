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
                        
                        <table width="95%" style={{border:"2px solid grey"}} class="sub-table add-doc-form-container" border="0">
                        {/* <tr>
                                <td class="label-td" colspan="2">
                                  </td>
                            </tr> */}
                            
                            <tr>
                                <td style={{paddingTop:"0px",width:"30%"}} class="label-td" colspan="1">
                                    <b>Patient Name :</b> 
                                </td>
                                <td style={{paddingTop:"0px"}} class="label-td" colspan="1">
                                    <span style={{fontWeight:"bold",color:"var(--btnnicetext)"}}>{patientdata.name}</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="1">
                                    <b>Age:</b>
                                </td>
                                <td class="label-td" colspan="1">
                                    {patientdata.age}
                                </td>
                            </tr>
                            
                            <tr>
                                <td class="label-td" colspan="1">
                                    <b>Phone No:</b>
                                </td>
                                <td class="label-td" colspan="1">
                                    {patientdata.phoneno}
                                </td>
                                
                            </tr>
                            <tr>
                                <td class="label-td" colspan="1">
                                    <b>Gender:</b>
                                </td>
                                <td class="label-td" colspan="1">
                                    {patientdata.gender}
                                </td>
                            </tr>
                            
                            <tr>
                                <td class="label-td" colspan="1">
                                    <b>Symptoms:</b> 
                                </td>
                                <td class="label-td" colspan="1">
                                    {patientdata.symptoms}
                                </td>
                            </tr>
                            <tr>
                                <td class="label-td" colspan="1">
                                    <b>Prescription:</b> 
                                </td>
                                <td class="label-td" colspan="1">
                                    {patientdata.prescription} 
                                </td>
                            </tr> 
                        </table>
                        
                        </div>
                    
                    <br/>
                        </td>
                        </tr>
                        </table>

                        <a style={{display:"flex",marginLeft:"30px"}} onClick={()=>{navigate("/appointmentmanager")}} class="non-style-link"><button class="login-btn btn-primary-soft btn">Back</button>
                               </a>

        </>
    )
}

export default Patientdetails