import Doctorheader from "../../components/doctor/doctorheader";
import DoctorMenu from "../../components/doctor/doctormenu"
import Reviews from "../../components/doctor/reviews";

import '../../css/admin.css';



const Reviewspage=()=>{
    return(
        <>
        <div class="container">
        {<DoctorMenu nav={"total reviews"}/>}
        <div class="dash-body">
        {<Doctorheader nav={"Total Reviews"}/>}
        {<Reviews/>}</div>
        </div>
        </>
    )
}

export default Reviewspage