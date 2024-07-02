import { useState, useEffect } from "react"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import axios from 'axios';
import Footer from "../components/footer";

const Searchpage = ()=>{
    const doctorid = localStorage.getItem('id');
    const phoneno = localStorage.getItem('phoneno');
    const [data1, setdata1] = useState('');
    useEffect(()=>{
        axios.get(`http://clinic-app-backend.vercel.app/appointments/findpatient/${doctorid}/${phoneno}`).then((response)=>{
            setdata1(response.data.message);
        })
    })

    return(
        <>
        {<Header/>}
        {<Sidebar/>}
                    <div style={{display:"flex", justifyContent:"center", height:"498px", marginTop:"50px", textAlign:"center"}}>
                    <table border={1} width={800} height={300} align="center"><tbody>
                    <tr><td><b>Patient Name</b></td><td>{data1.name}</td></tr>
                    <tr><td><b>Age</b></td><td>{data1.age}</td></tr>
                    <tr><td><b>Gender</b></td><td>{data1.gender}</td></tr>
                    <tr><td><b>Phone no.</b></td><td>{data1.phoneno}</td></tr>
                    <tr><td><b>Symptoms</b></td><td>{data1.symptoms}</td></tr>
                    <tr><td><b>Prescription</b></td><td>{data1.prescription}</td></tr>
                    </tbody></table>
                    </div>
        {<Footer/>}
        </>
    )
}

export default Searchpage