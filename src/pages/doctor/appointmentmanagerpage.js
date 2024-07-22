import Appointmentmanager from "../../components/doctor/appointmentmanager"
import DoctorMenu from "../../components/doctor/doctormenu"
import '../../css/admin.css';

const Appointmentmanagerpage=()=>{
    return(
        <>
        <div class="container">
        {<DoctorMenu nav={"Appointmentmanager"}/>}
        {<Appointmentmanager/>}
        </div>
        </>
    )
}

export default Appointmentmanagerpage