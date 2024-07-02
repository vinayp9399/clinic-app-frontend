import Bookappointment from "../components/book appointment";
import Doctorlist from "../components/doctorlist";
import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Slider from "../components/slider";

const Homepage=()=>{
    const usertype = localStorage.getItem('usertype');
    return(
        <>
        
        {<Header/>}
        { usertype==="doctor" && <>
        <div style={{height:"548px"}}>
        {<Sidebar/>}
        {<Bookappointment/>}
        </div>
        </>}

        { usertype==="patient" && <>
        <div style={{height:"100%"}}>
        {<Slider/>}
        {<Doctorlist/>}
        </div>
        </>}
        {<Footer/>}
        </>
    )
}

export default Homepage