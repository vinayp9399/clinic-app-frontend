import Mybookings from "../../components/patient/myBookings"
import PatientMenu from "../../components/patient/patientMenu"

const Mybookingspage=()=>{
    return(
        <>
        <div class="container" style={{height:"157vh"}}>
        {<PatientMenu nav={"mybookings"}/>}
        {<Mybookings/>}
        </div>
        </>
    )
}

export default Mybookingspage