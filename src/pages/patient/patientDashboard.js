import PatientDash from "../../components/patient/patientDash"
import PatientMenu from "../../components/patient/patientMenu"
import '../../css/admin.css';

const PatientDashboard=()=>{
    return(
        <>
        <div class="container" style={{height:"157vh"}}>
        {<PatientMenu nav={"home"}/>}
        {<PatientDash/>}
        </div>
        </>
    )
}

export default PatientDashboard