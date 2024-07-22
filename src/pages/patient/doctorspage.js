import Doctors from "../../components/patient/doctors"
import PatientMenu from "../../components/patient/patientMenu"

const Doctorspage=()=>{
    return(
        <>
        <div class="container" style={{height:"157vh"}}>
        {<PatientMenu nav={"Doctors"}/>}
        {<Doctors/>}
        </div>
        </>
    )
}

export default Doctorspage