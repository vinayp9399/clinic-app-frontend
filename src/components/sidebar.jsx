import { useNavigate } from "react-router-dom"

const Sidebar=()=>{
    const navigate = useNavigate();
    return(
        <>
        <div id="menu">
            <nav style={{lineHeight:"93px", height:"100px", paddingTop:"42px", fontSize:"19px"}}>
                <ul class="list1"><li class="a2" onClick={()=>{navigate('/home')}}><a>First Appointment</a></li>
                <li class="a2" onClick={()=>{navigate('/appointments')}}><a>Appointments</a></li>
                <li class="a2"><a>Followups</a></li></ul>
             </nav>
        </div>
        </>
    )
}

export default Sidebar