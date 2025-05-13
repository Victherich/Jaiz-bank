import React, { useEffect, useState } from "react";
import "../CSS/Partners.css"; // Import the CSS file

// Import partner logos
import partner1 from "../Images2/pt1.jpeg"; // Replace with actual paths
import partner2 from "../Images2/pt2.jpeg";
import partner3 from "../Images2/pt3.jpeg";
import partner4 from '../Images2/pt4.jpeg'
import { useLocation, useNavigate } from "react-router-dom";
// import partner5 from "../Images2/pt5.jpeg";
import partner6 from "../Images2/pt6.jpeg";
import partner7 from "../Images2/pt7.jpeg";
import partner8 from "../Images2/pt8.jpeg";
import partner9 from "../Images2/pt9.jpeg";
import partner10 from "../Images2/pt10.jpeg";


const Partners = () => {
  const partners = [
    { name: "Roli Mabo foundation", logo: partner1 },
    { name: "Green Future Tech", logo: partner2 },
    { name: "Waste Innovations", logo: partner3 },
    {name:"Royal Iwere Foundation", logo: partner4},
    // { name: "Sustainable Energy Inc.", logo: partner5 },
    { name: "Eco-Friendly Materials", logo: partner6 },
    { name: "Recycling Experts", logo: partner7 },
    { name: "Sustainable Energy Inc.", logo: partner8 },
    { name: "Eco-Friendly Materials", logo: partner9 },
    { name: "Recycling Experts", logo: partner10 },
  ];

  const [showApply, setShowApply]=useState(false)
  const location = useLocation()
  const navigate = useNavigate()

//   useEffect(()=>{
//     if(location.pathname==='/'||
//       location.pathname==='/aboutus'||
//       location.pathname==='/admission'||
//     location.pathname==='/academics'||
//   location.pathname==='/gallery'||
// location.pathname==='/contactus'){
//   setShowApply(true)
// }
//   },[])

  return (
    <>
    {/* {(
  location.pathname === '/' ||
  location.pathname === '/aboutus' ||
  location.pathname === '/admissions' ||
  location.pathname === '/academics' ||
  location.pathname === '/gallery' ||
  location.pathname === '/contactus'
) && (
  <section className="apply-section" id="apply">
    <h2>🚀 Ready to Apply?</h2>
    <p>Take the next step toward a career in environmental sustainability.</p>
    <a onClick={()=>navigate('/application')} className="apply-btn">Apply Now</a>
  </section>
)} */}

      <div className="partners-section">
      
      <h2 className="partners-title">Our Collaborators / Stakeholders</h2>
      <div className="partners-slider">
        <div className="partners-track">
          {partners.concat(partners).map((partner, index) => (
            <div key={index} className="partner-card">
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
              {/* <p className="partner-name">{partner.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
 
  );
};

export default Partners;
