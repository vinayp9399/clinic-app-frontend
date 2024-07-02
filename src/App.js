import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/homepage.js"
import Registrationpage from './pages/registrationpage.js';
import Loginpage from './pages/loginpage.js';
import Appointmentspage from './pages/appointmentspage.js';
import Searchpage from './pages/searchpage.js';
import Doctorregistrationpage from './pages/doctorregistrationpage.js';
import Patientappointmentbooking from './pages/patientappointmentbooking.js';
import Doctorprofilepage from './pages/doctorprofilepage.js';


function App() {
  const usertype = localStorage.getItem('usertype');
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Homepage/>}></Route>
      <Route path="/" element={<Loginpage/>}></Route>
      <Route path="/registration" element={<Registrationpage/>}></Route>
      {usertype==="doctor" && <>
      <Route path="/doctorregistration" element={<Doctorregistrationpage/>}></Route>
      <Route path="/appointments" element={<Appointmentspage/>}></Route>
      <Route path="/search" element={<Searchpage/>}></Route>
      <Route path="/doctorprofile" element={<Doctorprofilepage/>}></Route></>}
      {usertype==="patient" && <>
      <Route path="/patientappointmentbooking" element={<Patientappointmentbooking/>}></Route></>}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
