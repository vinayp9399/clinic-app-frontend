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
import ProtectedRoute, { PublicOnlyRoute } from './components/ProtectedRoute.js';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Public only routes — logged in users get redirected to their dashboard */}
      <Route path="/" element={<PublicOnlyRoute element={<Landingpage/>}/>}></Route>
      <Route path="/aboutus" element={<PublicOnlyRoute element={<Aboutuspage/>}/>}></Route>
      <Route path="/contactus" element={<PublicOnlyRoute element={<Contactuspage/>}/>}></Route>
      <Route path="/services" element={<PublicOnlyRoute element={<Servicespage/>}/>}></Route>
      <Route path="/login" element={<PublicOnlyRoute element={<Loginpage/>}/>}></Route>
      <Route path="/doctorlist" element={<PublicOnlyRoute element={<Doctorlistpage/>}/>}></Route>
      <Route path="/doctorregistration" element={<PublicOnlyRoute element={<Doctorregistrationpage/>}/>}></Route>
      <Route path="/doctorprofile" element={<PublicOnlyRoute element={<Doctorprofilepage/>}/>}></Route>

      {/* Doctor only routes */}
      <Route path="/doctordashboard" element={<ProtectedRoute role="doctor" element={<DoctorDashboard/>}/>}></Route>
      <Route path="/appointmentmanager" element={<ProtectedRoute role="doctor" element={<Appointmentmanagerpage/>}/>}></Route>
      <Route path="/prescriptionform" element={<ProtectedRoute role="doctor" element={<Prescriptionformpage/>}/>}></Route>
      <Route path='/editappointment/:id' element={<ProtectedRoute role="doctor" element={<Prescriptionformpage/>}/>}/>
      <Route path="/patientdetails" element={<ProtectedRoute role="doctor" element={<Patientdetailspage/>}/>}></Route>
      <Route path="/docprofile" element={<ProtectedRoute role="doctor" element={<Docprofilepage/>}/>}></Route>
      <Route path="/revenue" element={<ProtectedRoute role="doctor" element={<Revenuepage/>}/>}></Route>
      <Route path="/reviews" element={<ProtectedRoute role="doctor" element={<Reviewspage/>}/>}></Route>

      {/* Patient only routes */}
      <Route path="/patientdashboard" element={<ProtectedRoute role="patient" element={<PatientDashboard/>}/>}></Route>
      <Route path="/doctors" element={<ProtectedRoute role="patient" element={<Doctorspage/>}/>}></Route>
      <Route path="/mybookings" element={<ProtectedRoute role="patient" element={<Mybookingspage/>}/>}></Route>
      <Route path="/reviewdoctor" element={<ProtectedRoute role="patient" element={<ReviewDoctorpage/>}/>}></Route>
      <Route path="/patientprofile" element={<ProtectedRoute role="patient" element={<Patientprofilepage/>}/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
