import DoctorDash from "../../components/doctor/doctorDash"
import Doctorheader from "../../components/doctor/doctorheader";
import DoctorMenu from "../../components/doctor/doctormenu"
import Patientdetails from "../../components/doctor/patientdetails";

import '../../css/admin.css';



const Patientdetailspage=()=>{
    return(
        <>
        <div class="container">
        {<DoctorMenu nav={"Patient details"}/>}
        <div class="dash-body">
        {<Patientdetails/>}</div>
        </div>
        </>
    )
}

export default Patientdetailspage