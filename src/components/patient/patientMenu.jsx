import { useNavigate } from 'react-router-dom';
import '../../css/dashboard.css';

const PatientMenu=(props)=>{
    const navigate = useNavigate();
    const firstname = localStorage.getItem('name');

    return(
        <>
        <div class="menu">
            <table class="menu-container" border="0">
            <tr><td style={{paddingLeft:"10px", paddingRight:"10px",borderBottom: "2px solid white",backgroundColor: "rgb(6 14 35)"}}><div style={{paddingBottom:"3px", display:"flex", gap:"10px"}}>
                                <img style={{width:"33%"}} src="../images/blue-plus-icon-12.png" alt=""/>
                                
                                <h1 style={{color:"rgb(40 176 226)"}}>E-Clinic</h1></div></td>
                            </tr>
                <tr>
                    <td style={{padding:"10px"}} colspan="2">
                        <table border="0" class="profile-container">
                            <tr>
                                <td width="30%" style={{paddingLeft:"20px"}}>
                                    <img src="https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg" alt="" width="100%" style={{borderRadius:"50%"}}/>
                                </td>
                                <td style={{padding:"0px", margin:"0px"}}>
                                    <p class="profile-title">{firstname}</p>
                                    <p class="profile-subtitle">Xyz</p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <a onClick={()=>{navigate("/")}}><input type="button" value="Log out" class="logout-btn btn-primary-soft btn"/></a>
                                </td>
                            </tr>
                    </table>
                    </td>
                </tr>
                <tr class="menu-row" >
                    {props.nav=="home" &&
                    <td class="menu-btn menu-icon-home menu-active menu-icon-home-active" >
                        <a style={{cursor:"pointer"}} class="non-style-link-menu non-style-link-menu-active"><p class="menu-text">Home</p></a>
                    </td>}
                    {props.nav!="home" &&
                    <td class="menu-btn menu-icon-home" >
                        <a style={{cursor:"pointer"}} onClick={()=>{navigate("/patientdashboard")}} class="non-style-link-menu"><p class="menu-text">Home</p></a>
                    </td>}
                </tr>
                <tr class="menu-row">
                    {props.nav=="Doctors" &&
                    <td class="menu-btn menu-icon-doctor menu-active menu-icon-doctor-active">
                        <a style={{cursor:"pointer"}} class="non-style-link-menu non-style-link-menu-active"><p class="menu-text">All Doctors</p></a>
                    </td>}
                    {props.nav!="Doctors" &&
                    <td class="menu-btn menu-icon-doctor">
                        <a style={{cursor:"pointer"}} onClick={()=>{navigate("/doctors")}} class="non-style-link-menu"><p class="menu-text">All Doctors</p></a>
                    </td>}
                </tr>
                
                <tr class="menu-row" >
                    <td class="menu-btn menu-icon-session">
                        <a class="non-style-link-menu"><div><p class="menu-text">Scheduled Sessions</p></div></a>
                    </td>
                </tr>
                <tr class="menu-row" >
                    <td class="menu-btn menu-icon-appoinment">
                        <a class="non-style-link-menu"><p class="menu-text">My Bookings</p></a>
                    </td>
                </tr>
                <tr class="menu-row" >
                    <td class="menu-btn menu-icon-settings">
                        <a href="" class="non-style-link-menu"><p class="menu-text">Review Doctor</p></a>
                    </td>
                </tr>
                <tr class="menu-row" >
                    <td class="menu-btn menu-icon-settings">
                        <a href="" class="non-style-link-menu"><p class="menu-text">Profile</p></a>
                    </td>
                </tr>
                <tr class="menu-row" >
                    <td class="menu-btn menu-icon-settings">
                        <a href="" class="non-style-link-menu"><p class="menu-text">Settings</p></a>
                    </td>
                </tr>
                
                
            </table>
        </div>
        
        </>
    )
}

export default PatientMenu