import Doctors from "../../components/patient/doctors"
import PatientMenu from "../../components/patient/patientMenu"
import Patientprofile from "../../components/patient/patientprofile"

const Patientprofilepage=()=>{
    return(
        <>
        <div class="container" style={{height:"157vh"}}>
        {<PatientMenu nav={"patientprofile"}/>}
        {<Patientprofile/>}
        </div>
        </>
    )
}

export default Patientprofilepage