// import './App.css';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Landingpage from './components/Landingpage';
// import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import TrackShipment from './components/TrackShipment';
// import Pricing from './components/Pricing';
// import Contact from './components/ContactUs';
// import AboutUs from './components/About';
// import ScrollToTop from './components/ScrollToTop';
// import Services from './components/Services';
// import AdminDashborad from './components/AdminDashborad';
// import PrivateAdminDashboard from './components/PrivateAdminDashboard';
// import AdminLogin from './components/AdminLogin';
// import AdminForgotPassword from './components/AdminForgotPassword';
// import AdminResetPassword from './components/AdminResetPassword';


// function App() {




//   return (
//     <BrowserRouter>
//     <ScrollToTop/>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Landingpage />} />
//         <Route path="/trackshipment" element={<TrackShipment/>}/>
//         <Route path="/pricing" element={<Pricing/>}/>
//         <Route path="/contactus" element={<Contact/>}/>
//         <Route path="/aboutus" element={<AboutUs/>}/>
//         <Route path="/services" element={<Services/>}/>
//         <Route path="/adminlogin" element={<AdminLogin/>}/>
//         <Route path="/adminforgotpassword" element={<AdminForgotPassword/>}/>
//         <Route path="/adminresetpassword" element={<AdminResetPassword/>}/>
//         {/* <Route path="/admin" element={<AdminDashborad/>}/> */}
//         <Route path="/admin" element={<PrivateAdminDashboard/>}>
//             <Route path="" element={<AdminDashborad/>}/>
//         </Route>
//       </Routes>
//       <Footer/>
//     </BrowserRouter>
//   );
// }

// export default App;




// src/App.js
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Landingpage from './components/Landingpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Contact from './components/ContactUs';

import ScrollToTop from './components/ScrollToTop';

import AdminDashborad from './components/AdminDashborad';
import PrivateAdminDashboard from './components/PrivateAdminDashboard';
import AdminLogin from './components/AdminLogin';
import AdminForgotPassword from './components/AdminForgotPassword';
import AdminResetPassword from './components/AdminResetPassword';

import { useState, useEffect } from 'react';
import wp1 from "./Images/logo.png"
import wp2 from './Images/logo3.png'
import wp3 from './Images/Iwere.jpeg'
import AdminSignup from './components/AdminSignUp';


import Partners from './components/Partners';




import StudentProfile from './components/StudentProfile';



import UserForgotPassword from './components/UserForgotPassword';
import UserResetPassword from './components/UserResetPassword';

import UserSignUp from './components/UserSignUp';
import UserLogin from './components/UserLogin';
import UserDashboard from './components/UserDashboard';
import PrivateUserDashboard from './components/PrivateUserDashboard';
import LoanApplication from './components/ApplyForLoan';
import AboutUs from './components/AboutUs';
import ServicesPage from './components/ServicesPage';


function App() {

  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Set a timer to hide the overlay after 2 seconds
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 4000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  


  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* {showOverlay&& <ChristmasOverlay/>} */}
      <Header />

      <Routes>
        
    
        <Route path="/" element={<Landingpage />} />
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path="/contactus" element={<Contact />} />
        <Route path='/apply_for_loan' element={<LoanApplication/>}/>
        <Route path='/services' element={<ServicesPage/>}/>


        <Route path='/userforgotpassword' element={<UserForgotPassword/>}/>
        <Route path='/userresetpassword/:token' element={<UserResetPassword/>}/>
       

        <Route path='/investments' element={<UserLogin/>}/>
        <Route path='/usersignup' element={<UserSignUp/>}/>

        <Route path='/userdashboard' element={<PrivateUserDashboard/>}>
          <Route path='' element={<UserDashboard/>}/>
        </Route>




        <Route path="/adminlogin" element={<AdminLogin />} />
        {/* <Route path="/adminsignup" element={<AdminSignup/>}/> */}
        <Route path="/adminforgotpassword" element={<AdminForgotPassword />} />
        <Route path="/adminresetpassword/:token" element={<AdminResetPassword />} />
        <Route path="/admin" element={<PrivateAdminDashboard />}>
          <Route path="" element={<AdminDashborad />} />
        </Route>
  
      
      </Routes>
      <Partners/>
      <Footer />

      {/* <a><img src={wp1} alt="logo" className="WhatsAppIcon" /></a> 
    
      <a><img src={wp2} alt="logo" className="WhatsAppIcon2" /></a> 
  */}

      
    </BrowserRouter>
  );
}

export default App;


//User “elexdond_vca” was added to the database “elexdond_vca”.
//database password
//vca123vca123vca123vca