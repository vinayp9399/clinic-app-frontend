import Docprofile from "../../components/doctor/docprofile";
import Doctorheader from "../../components/doctor/doctorheader";
import DoctorMenu from "../../components/doctor/doctormenu"

import '../../css/admin.css';



const Revenuepage=()=>{
    return(
        <>
        <div class="container">
        {<DoctorMenu nav={"revenue"}/>}
        <div class="dash-body">
        {<Doctorheader nav={"Revenue"}/>}
        {<Docprofile/>}</div>
        </div>
        </>
    )
}

export default Revenuepage