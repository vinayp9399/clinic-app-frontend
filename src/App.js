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
import ProtectedRoute from './components/ProtectedRoute.js';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Landingpage/>}></Route>
      <Route path="/aboutus" element={<Aboutuspage/>}></Route>
      <Route path="/contactus" element={<Contactuspage/>}></Route>
      <Route path="/services" element={<Servicespage/>}></Route>
      <Route path="/login" element={<Loginpage/>}></Route>
      <Route path="/doctorlist" element={<Doctorlistpage/>}></Route>
      <Route path="/doctorregistration" element={<Doctorregistrationpage/>}></Route>
      <Route path="/doctorprofile" element={<Doctorprofilepage/>}></Route>

      {/* Protected routes */}
      <Route path="/doctordashboard" element={<ProtectedRoute element={<DoctorDashboard/>}/>}></Route>
      <Route path="/appointmentmanager" element={<ProtectedRoute element={<Appointmentmanagerpage/>}/>}></Route>
      <Route path="/prescriptionform" element={<ProtectedRoute element={<Prescriptionformpage/>}/>}></Route>
      <Route path='/editappointment/:id' element={<ProtectedRoute element={<Prescriptionformpage/>}/>}/>
      <Route path="/patientdetails" element={<ProtectedRoute element={<Patientdetailspage/>}/>}></Route>
      <Route path="/docprofile" element={<ProtectedRoute element={<Docprofilepage/>}/>}></Route>
      <Route path="/revenue" element={<ProtectedRoute element={<Revenuepage/>}/>}></Route>
      <Route path="/reviews" element={<ProtectedRoute element={<Reviewspage/>}/>}></Route>

      <Route path="/patientdashboard" element={<ProtectedRoute element={<PatientDashboard/>}/>}></Route>
      <Route path="/doctors" element={<ProtectedRoute element={<Doctorspage/>}/>}></Route>
      <Route path="/mybookings" element={<ProtectedRoute element={<Mybookingspage/>}/>}></Route>
      <Route path="/reviewdoctor" element={<ProtectedRoute element={<ReviewDoctorpage/>}/>}></Route>
      <Route path="/patientprofile" element={<ProtectedRoute element={<Patientprofilepage/>}/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
