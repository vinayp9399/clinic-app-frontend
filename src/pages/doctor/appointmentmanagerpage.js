import Appointmentmanager from "../../components/doctor/appointmentmanager"
import Doctorheader from "../../components/doctor/doctorheader";
import DoctorMenu from "../../components/doctor/doctormenu"
import '../../css/admin.css';

const Appointmentmanagerpage=()=>{
    return(
        <>
        <div class="container">
        {<DoctorMenu nav={"Appointmentmanager"}/>}
        <div class="dash-body">
        {<Doctorheader nav={"Appointment Manager"}/>}
        {<Appointmentmanager/>}</div>
        </div>
        </>
    )
}

export default Appointmentmanagerpage