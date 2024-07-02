import Bookappointment from "../components/book appointment";
import Footer from "../components/footer";
import Header from "../components/header";

const Patientappointmentbooking=()=>{
    return(
        <>
        
        {<Header/>}
        <div style={{height:"551px"}}>
        {<Bookappointment/>}</div>
        {<Footer/>}
        </>
    )
}

export default Patientappointmentbooking