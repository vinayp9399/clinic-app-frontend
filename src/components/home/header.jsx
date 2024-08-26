import { useLocation, useNavigate } from "react-router-dom"

const Header=()=>{
    const navigate = useNavigate();
    const location=useLocation();

    return(
        <>
        <header>
        <div class="container_12">
            <div class="logo" style={{display:"flex", gap:"10px",top:"4px",position: "relative"}}>
                <img style={{width:"9%"}} src="../images/blue-plus-icon-12.png" alt=""/>                
                <h1 style={{color:"rgb(40 176 226)"}}>E-Clinic</h1>
                
            </div>
            <nav>
                <ul>
                    <li>
                    {location.pathname=="/" &&
                    <a style={{cursor:"pointer",color:"rgb(40, 176, 226)"}} onClick={()=>navigate("/")}>Home</a>}
                    {location.pathname!="/" &&
                    <a style={{cursor:"pointer"}} onClick={()=>navigate("/")}>Home</a>}
                    </li>
                    <li>
                    {location.pathname=="/doctorlist" &&
                        <a style={{cursor:"pointer",color:"rgb(40, 176, 226)"}} onClick={()=>navigate("/doctorlist")}>Doctors</a>}
                    {location.pathname!="/doctorlist" &&
                        <a style={{cursor:"pointer"}} onClick={()=>navigate("/doctorlist")}>Doctors</a>}   
                    </li>
                    <li>
                    {location.pathname=="/services" &&
                    <a style={{cursor:"pointer",color:"rgb(40, 176, 226)"}} onClick={()=>navigate("/services")}>Services</a>}
                    {location.pathname!="/services" &&
                    <a style={{cursor:"pointer"}} onClick={()=>navigate("/services")}>Services</a>}
                    </li>
                    <li>
                    {location.pathname=="/aboutus" &&
                    <a style={{cursor:"pointer",color:"rgb(40, 176, 226)"}} onClick={()=>navigate("/aboutus")}>About Us</a>}
                    {location.pathname!="/aboutus" &&
                    <a style={{cursor:"pointer"}} onClick={()=>navigate("/aboutus")}>About Us</a>}
                    </li>
                    <li><a style={{cursor:"pointer"}} href="#contact">Contact Us</a></li>
                    <li style={{cursor:"pointer"}}><a onClick={()=>navigate("/login")}>Login</a></li>
                </ul>
            </nav>
        </div>
        </header>
        </>
    )
}

export default Header