import { useState, useEffect } from "react"
import axios from 'axios';

const Search = ()=>{
    const doctorid = localStorage.getItem('id');
    const phoneno = localStorage.getItem('phoneno');
    const [data1, setdata1] = useState('');
    const [IsLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        axios.get(`https://clinic-app-backend.vercel.app/appointments/findpatient/${doctorid}/${phoneno}`).then((response)=>{
            if(response.data.message == 'no record found'){
                setIsLoading(false);
            }
            else{setdata1(response.data.message);
            setIsLoading(false);}
        })
    })
    return(
        <>
        <div style={{display:"flex", justifyContent:"center", height:"498px", marginTop:"50px", textAlign:"center"}}>
                    {
                    IsLoading===true ?
                    <div className="loader">
                    </div>
                    :<>
                    {!data1 && <><h3>No Record Found!</h3></>}
                    {data1 && <><table border={1} width={800} height={300} align="center"><tbody>
                    <tr><td><b>Patient Name</b></td><td>{data1.name}</td></tr>
                    <tr><td><b>Age</b></td><td>{data1.age}</td></tr>
                    <tr><td><b>Gender</b></td><td>{data1.gender}</td></tr>
                    <tr><td><b>Phone no.</b></td><td>{data1.phoneno}</td></tr>
                    <tr><td><b>Symptoms</b></td><td>{data1.symptoms}</td></tr>
                    <tr><td><b>Prescription</b></td><td>{data1.prescription}</td></tr>
                    </tbody></table></>}</>}
                    </div>
        </>
    )
}

export default Search