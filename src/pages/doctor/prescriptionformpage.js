import DoctorMenu from "../../components/doctor/doctormenu"
import Prescriptionform from "../../components/doctor/prescriptionform";

import '../../css/admin.css';



const Prescriptionformpage=()=>{
    return(
        <>
        <div class="container">
        {<DoctorMenu/>}
        {<Prescriptionform/>}
        </div>
        </>
    )
}

export default Prescriptionformpage