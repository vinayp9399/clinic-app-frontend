import Docprofile from "../../components/doctor/docprofile";
import Doctorheader from "../../components/doctor/doctorheader";
import DoctorMenu from "../../components/doctor/doctormenu"
import Revenue from "../../components/doctor/revenue";

import '../../css/admin.css';



const Revenuepage=()=>{
    return(
        <>
        <div class="container">
        {<DoctorMenu nav={"revenue"}/>}
        <div class="dash-body">
        {<Doctorheader nav={"Revenue"}/>}
        {<Revenue/>}</div>
        </div>
        </>
    )
}

export default Revenuepage