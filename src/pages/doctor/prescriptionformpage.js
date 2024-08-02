import Doctorheader from "../../components/doctor/doctorheader";
import DoctorMenu from "../../components/doctor/doctormenu"
import Prescriptionform from "../../components/doctor/prescriptionform";

import '../../css/admin.css';



const Prescriptionformpage=()=>{
    return(
        <>
        <div class="container">
        {<DoctorMenu/>}
        <div class="dash-body">
        {<Doctorheader nav={"Prescription Form"}/>}
        {<Prescriptionform/>}
        </div>
        </div>
        </>
    )
}

export default Prescriptionformpage