import { useState, useEffect } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Appointments = ()=>{
    const doctorid = localStorage.getItem('id');
    const [data, setdata] = useState('');
    const [IsLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

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
            console.log(response);
            getallpatientData();
        })
    }
    
    const handleDetails = (phoneno)=>{
    localStorage.setItem('phoneno',phoneno);
        navigate('/search');
    }
    return(
        <>
        <div style={{display:"flex", justifyContent:"center",height:"498px",  marginTop:"50px", textAlign:"center"}}>
        {
                    IsLoading===true ?
                    <div className="loader">
                    </div>
                    :
        <><table border={1} width={800} height={200} align="center">
                <tr>
                    <th>Patient name </th><th>Age </th><th>Gender</th><th>Phone no.</th><th>Actions</th>
                </tr>
                { data && data.map((data1)=>(
                    <tr>
                        <td>{data1.name}</td>
                        <td>{data1.age}</td>
                        <td>{data1.gender}</td>
                        <td>{data1.phoneno}</td>
                        <td>
                            <input type='button' value="Delete" onClick={()=>{handleDelete(data1._id)}}/>
                            <input type='button' value="Edit" />
                            <input type='button' value="Details" onClick={()=>{handleDetails(data1.phoneno)}} />
                        </td>
                    </tr>
                ))}
            
         </table></>}
         </div>
        </>
    )
}

export default Appointments