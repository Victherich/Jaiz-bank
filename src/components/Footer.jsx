// import React, { useEffect, useRef } from 'react';
// import '../CSS/Footer.css';  // Importing the CSS file
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
// import logo from "../Images/logo.png";
// import { useNavigate } from 'react-router-dom';
// import 'animate.css'; // Import animate.css for animations

// const Footer = () => {
//   const navigate = useNavigate();
//   const observer = useRef(null);

//   useEffect(() => {
//     const handleIntersection = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const element = entry.target;
//           if (element.classList.contains('P')) {
//             element.classList.add('animate__animated', 'animate__slideInUp', 'animate__slower');
//           } else if (element.classList.contains('li')) {
//             element.classList.add('animate__animated', 'animate__slideInUp', 'animate__slow');
//           } else if (element.classList.contains('H2')) {
//             element.classList.add('animate__animated', 'animate__slideInUp', 'animate__slow');
//           } else if (element.classList.contains('social')) {
//             element.classList.add('animate__animated', 'animate__slideInUp', 'animate__slow');
//           }
//           // Unobserve the element after animation to avoid re-triggering
//           observer.current.unobserve(element);
//         }
//       });
//     };

//     observer.current = new IntersectionObserver(handleIntersection, {
//       threshold: 0.3, // Trigger when 30% of the element is visible
//     });

//     // Observe the footer sections
//     const sections = document.querySelectorAll('.footer-section');

//     sections.forEach(section => {
//       if (section) observer.current.observe(section);
//     });

//     // Cleanup observer on component unmount
//     return () => {
//       if (observer.current) {
//         observer.current.disconnect();
//       }
//     };
//   }, []);

//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section about">
//           <img src={logo} alt="logo"/>
//           <h2>Vinrichard's Clearing Agents Limited</h2>
//           <p>We are dedicated to providing top-notch cargo and logistics services, ensuring that your shipments reach their destination safely and efficiently.</p>
//           <p><strong>Our Motto:</strong> Sincerity in Service</p>
//           <p><strong>Our Goal:</strong> Customer Satisfaction</p>
//           <p><strong>Our Dream:</strong> Global Partnerships</p>
//         </div>
        
//         <div className="footer-section links">
//           <h4>Quick Links</h4>
//           <ul>
//             <li><a onClick={() => navigate("/")}>Home</a></li>
//             <li><a onClick={() => navigate("/services")}>Services</a></li>
//             <li><a onClick={() => navigate("/aboutus")}>About us</a></li>
//             <li><a onClick={() => navigate("/trackshipment")}>Track Shipment</a></li>
//             <li><a onClick={() => navigate("/pricing")}>Pricing</a></li>
//             <li><a onClick={() => navigate("/contactus")}>Contact Us</a></li>
//           </ul>
//         </div>

//         <div className="footer-section contact">
//           <h4>Contact Information</h4>
//           <p><FaMapMarkerAlt /> ROOM 101 NPA COMMERCIAL BUILDING NATIONAL B/STOP TIN CAN ISLAND PORT APAPA LAGOS.</p>
//           <p><FaMapMarkerAlt /> AMERICA 🇺🇸 120-33 195TH STREET SAINT ALBANS QUEENS NY 11412.</p>
//           <p><FaPhoneAlt /> +234 803 306 2743</p>
//           <p><FaPhoneAlt /> +1 929 631 9254</p>
//           <p><FaEnvelope/> info@vinrichards.com</p>
//           <p><FaEnvelope /> vvpassmak@gmail.com</p>
//           <p><FaEnvelope /> vinrichardsca@gmail.com</p>
          
//         </div>

//         <div className="footer-section social">
//           <h4>Follow Us</h4>
//           <div className="social-icons">
//             <a ><FaFacebook /></a>
//             <a ><FaTwitter /></a>
//             <a ><FaInstagram /></a>
//             <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} Vinrichard's Clearing Agents Limited. All Rights Reserved.</p>
        
//         <p style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.6)",marginTop:"10px"}}><span style={{color:"rgba(0,255,0,0.7)"}}>POWERED BY</span> ELEXDON DIGITAL TECHNOLOGIES LIMITED</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// ========== Styled Components ==========

const FooterContainer = styled.footer`
   background: rgba(0,0,0,0.1);
  color: #dcdcdc;
  padding-top:80px;
  font-family: 'Segoe UI', sans-serif;
`;

const FooterGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 220px;
`;

const LogoText = styled.h2`
  color: #C4A207;
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #222;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.6rem;
  font-size: 0.95rem;

  a {
    color: #222;
    text-decoration: none;

    &:hover {
      color: #C4A207;
    }
  }
`;

const ContactItem = styled.p`
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: #222;
`;

const SectionHeading = styled.h3`
  color: #C4A207;
  margin-bottom: 1rem;
`;

const SocialIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;

  a {
    color:#C4A207;
    font-size: 1.2rem;

    &:hover {
      color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid #444;
  margin-top: 3rem;
  padding: 40px 0px;
  text-align: center;
  font-size: 0.85rem;
  color: white;
  background:#2C4B2F;

  a {
    color: #ffd700;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }
`;

// ========== Footer Component ==========

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <LogoText>About Jiz Bank Plc</LogoText>
          <Description>
          Jiz Bank PLC is a national bank and a quoted public company owned by over 26,000 shareholders spread over the six geo-political zones of Nigeria. The Bank's balance sheet has grown from N12bn in 2012 to about N379bn (as of December 31st 2022). Financing and Investment assets also grew from over N30bn in 2012 to N249bn as of December 31, 2022. </Description>
          <SocialIcons>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </SocialIcons>
        </FooterColumn>

        <FooterColumn>
          <SectionHeading>Quick Links</SectionHeading>
          <LinkList>
            <LinkItem><a href="/">Home</a></LinkItem>
            <LinkItem><a href="/aboutus">About Us</a></LinkItem>
            <LinkItem><a href="">Transfer Plans</a></LinkItem>
            {/* <LinkItem><a href="/apply_for_loan">Apply for Loan</a></LinkItem> */}
            {/* <LinkItem><a href="/investments">Investments</a></LinkItem> */}
            <LinkItem><a href="/contactus">Contact Us</a></LinkItem>
          </LinkList>
        </FooterColumn>


        <FooterColumn>
          <SectionHeading>Resources</SectionHeading>
          <LinkList>
            <LinkItem><a href="/">Contact Us</a></LinkItem>
            <LinkItem><a href="/aboutus">FAQ</a></LinkItem>
            <LinkItem><a href="">Terms and Conditions</a></LinkItem>
            <LinkItem><a href="">Privacy Policy</a></LinkItem>
    
          </LinkList>
        </FooterColumn>

        <FooterColumn>
          <SectionHeading>Contact Info</SectionHeading>
          <ContactItem>📍 Plot 734, Ahmadu Bello Way, Central Business District, Abuja, Nigeria.</ContactItem>
          <ContactItem>📞 +234 (0) 700 JIZ BANK (+234 700 5249 2265)</ContactItem>
          <ContactItem>✉️ customercare@jizbankplc.com</ContactItem>

        </FooterColumn>
      </FooterGrid>

      <BottomBar>
        © {new Date().getFullYear()}  Jiz Bank . All Rights Reserved By Jiz Bank™. 
        {/* <a href="/terms"> Terms</a> |  */}
        {/* <a href="/privacy"> Privacy Policy</a> */}
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
