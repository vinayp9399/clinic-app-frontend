import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
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
import Patientdetailspage from './pages/doctor/patientdetailspage.js';
import Revenuepage from './pages/doctor/revenuepage.js';
import Docprofilepage from './pages/doctor/docprofilepage.js';
import Reviewspage from './pages/doctor/reviewspage.js';
import Doctorlistpage from './pages/home/doctorlistpage.js';
import Contactuspage from './pages/home/contactuspage.js';
import Mybookingspage from './pages/patient/mybookingspage.js';
import ReviewDoctorpage from './pages/patient/reviewdoctorpage.js';
import Patientprofilepage from './pages/patient/patientprofilepage.js';


function App() {
  const usertype = localStorage.getItem('usertype');
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landingpage/>}></Route>
      <Route path="/aboutus" element={<Aboutuspage/>}></Route>
      <Route path="/contactus" element={<Contactuspage/>}></Route>
      <Route path="/services" element={<Servicespage/>}></Route>
      <Route path="/login" element={<Loginpage/>}></Route>
      <Route path="/doctorlist" element={<Doctorlistpage/>}></Route>
      <Route path="/doctorregistration" element={<Doctorregistrationpage/>}></Route>
      <Route path="/doctorprofile" element={<Doctorprofilepage/>}></Route>
      
      <Route path="/doctordashboard" element={<DoctorDashboard/>}></Route>
      <Route path="/appointmentmanager" element={<Appointmentmanagerpage/>}></Route>
      <Route path="/prescriptionform" element={<Prescriptionformpage/>}></Route>
      <Route path='/editappointment/:id' element={<Prescriptionformpage/>}/>
      <Route path="/patientdetails" element={<Patientdetailspage/>}></Route>
      <Route path="/docprofile" element={<Docprofilepage/>}></Route>
      <Route path="/revenue" element={<Revenuepage/>}></Route>
      <Route path="/reviews" element={<Reviewspage/>}></Route>

      <Route path="/patientdashboard" element={<PatientDashboard/>}></Route>
      <Route path="/doctors" element={<Doctorspage/>}></Route>
      <Route path="/mybookings" element={<Mybookingspage/>}></Route>
      <Route path="/reviewdoctor" element={<ReviewDoctorpage/>}></Route>
      <Route path="/patientprofile" element={<Patientprofilepage/>}></Route>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
