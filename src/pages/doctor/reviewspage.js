import Docprofile from "../../components/doctor/docprofile";
import Doctorheader from "../../components/doctor/doctorheader";
import DoctorMenu from "../../components/doctor/doctormenu"

import '../../css/admin.css';



const Reviewspage=()=>{
    return(
        <>
        <div class="container">
        {<DoctorMenu nav={"total reviews"}/>}
        <div class="dash-body">
        {<Doctorheader nav={"Total Reviews"}/>}
        {<Docprofile/>}</div>
        </div>
        </>
    )
}

export default Reviewspage