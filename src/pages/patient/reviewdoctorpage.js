import Doctors from "../../components/patient/doctors"
import PatientMenu from "../../components/patient/patientMenu"
import Reviewdoctor from "../../components/patient/reviewDoctor"

const ReviewDoctorpage=()=>{
    return(
        <>
        <div class="container" style={{height:"157vh"}}>
        {<PatientMenu nav={"reviewdoctor"}/>}
        {<Reviewdoctor/>}
        </div>
        </>
    )
}

export default ReviewDoctorpage