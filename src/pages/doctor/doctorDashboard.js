import DoctorDash from "../../components/doctor/doctorDash"
import DoctorMenu from "../../components/doctor/doctormenu"

import '../../css/admin.css';



const DoctorDashboard=()=>{
    return(
        <>
        <div class="container">
        {<DoctorMenu nav={"DoctorDash"}/>}
        {<DoctorDash/>}
        </div>
        </>
    )
}

export default DoctorDashboard