import Docprofile from "../../components/doctor/docprofile";
import Doctorheader from "../../components/doctor/doctorheader";
import DoctorMenu from "../../components/doctor/doctormenu"

import '../../css/admin.css';



const Docprofilepage=()=>{
    return(
        <>
        <div class="container">
        {<DoctorMenu nav={"profile"}/>}
        <div class="dash-body">
        {<Doctorheader nav={"Profile"}/>}
        {<Docprofile/>}</div>
        </div>
        </>
    )
}

export default Docprofilepage