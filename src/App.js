import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Registrationpage from './pages/registrationpage.js';
import Loginpage from './pages/loginpage.js';
import Doctorregistrationpage from './pages/doctorregistrationpage.js';
import Doctorprofilepage from './pages/doctorprofilepage.js';

import DoctorDashboard from './pages/doctor/doctorDashboard.js';
import PatientDashboard from './pages/patient/patientDashboard.js';
import Appointmentmanagerpage from './pages/doctor/appointmentmanagerpage.js';
import Doctorspage from './pages/patient/doctorspage.js';
import Prescriptionformpage from './pages/doctor/prescriptionformpage.js';
import Landingpage from './pages/home/landingpage.js';
import Servicespage from './pages/home/servicespage.js';
import Aboutuspage from './pages/home/aboutuspage.js';


function App() {
  const usertype = localStorage.getItem('usertype');
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landingpage/>}></Route>
      <Route path="/aboutus" element={<Aboutuspage/>}></Route>
      <Route path="/services" element={<Servicespage/>}></Route>
      <Route path="/registration" element={<Registrationpage/>}></Route>
      <Route path="/doctorregistration" element={<Doctorregistrationpage/>}></Route>
      <Route path="/doctorprofile" element={<Doctorprofilepage/>}></Route>

      <Route path="/doctordashboard" element={<DoctorDashboard/>}></Route>
      <Route path="/appointmentmanager" element={<Appointmentmanagerpage/>}></Route>
      <Route path="/prescriptionform" element={<Prescriptionformpage/>}></Route>


      <Route path="/patientdashboard" element={<PatientDashboard/>}></Route>
      <Route path="/doctors" element={<Doctorspage/>}></Route>

      <Route path="/login" element={<Loginpage/>}></Route>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
