import DoctorDash from "../../components/doctor/doctorDash"
import Doctorheader from "../../components/doctor/doctorheader";
import DoctorMenu from "../../components/doctor/doctormenu"

import '../../css/admin.css';



const DoctorDashboard=()=>{
    return(
        <>
        <div class="container">
        {<DoctorMenu nav={"DoctorDash"}/>}
        <div class="dash-body">
        {<Doctorheader nav={"Dashboard"}/>}
        {<DoctorDash/>}</div>
        </div>
        </>
    )
}

export default DoctorDashboard