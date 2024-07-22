import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Registrationpage from './pages/registrationpage.js';
import Loginpage from './pages/loginpage.js';
import Searchpage from './pages/searchpage.js';
import Doctorregistrationpage from './pages/doctorregistrationpage.js';
import Doctorprofilepage from './pages/doctorprofilepage.js';

import DoctorDashboard from './pages/doctor/doctorDashboard.js';
import PatientDashboard from './pages/patient/patientDashboard.js';
import Appointmentmanagerpage from './pages/doctor/appointmentmanagerpage.js';
import Doctorspage from './pages/patient/doctorspage.js';


function App() {
  const usertype = localStorage.getItem('usertype');
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpage/>}></Route>
      <Route path="/registration" element={<Registrationpage/>}></Route>
      <Route path="/doctorregistration" element={<Doctorregistrationpage/>}></Route>
      <Route path="/search" element={<Searchpage/>}></Route>
      <Route path="/doctorprofile" element={<Doctorprofilepage/>}></Route>

      <Route path="/doctordashboard" element={<DoctorDashboard/>}></Route>
      <Route path="/appointmentmanager" element={<Appointmentmanagerpage/>}></Route>


      <Route path="/patientdashboard" element={<PatientDashboard/>}></Route>
      <Route path="/doctors" element={<Doctorspage/>}></Route>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
