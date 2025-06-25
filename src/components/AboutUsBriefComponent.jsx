// import React, { useEffect, useRef } from 'react';
// import '../CSS/AboutUsBriefComponent.css';
// import { useNavigate } from 'react-router-dom';
// import { FaRecycle, FaLeaf, FaFlask } from 'react-icons/fa';
// import briefImage from '../Images2/logo3.jpeg'; // replace with actual image path
// import 'animate.css'; // Import animate.css for animations
// import Swal from 'sweetalert2';
// import mi8 from '../Images3/mi8.jpg'
// import mi12 from '../Images3/mi12.jpg'
// import mi13 from '../Images3/mi13.jpg'


// const AboutUsBrief = () => {
//   const navigate = useNavigate();
//   const observer = useRef(null);

//   const handleMoreClick = () => {
//     navigate('/aboutus'); // Now properly navigates to About Us page
//   };

//   useEffect(() => {
//     const handleIntersection = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const element = entry.target;
//           if (element.tagName === 'H2') {
//             element.classList.add('animate__animated', 'animate__slideInRight', 'animate__slower');
//           } else if (element.tagName === 'P') {
//             element.classList.add('animate__animated', 'animate__slideInRight', 'animate__slow');
//           } else if (element.tagName === 'BUTTON') {
//             element.classList.add('animate__animated', 'animate__slideInRight', 'animate__slow');
//           }
//           observer.current.unobserve(element);
//         }
//       });
//     };

//     observer.current = new IntersectionObserver(handleIntersection, {
//       threshold: 0.3,
//     });

//     const heading = document.querySelector('.about-us-brief-text h2');
//     const paragraphs = document.querySelectorAll('.about-us-brief-text p');
//     const button = document.querySelector('.more-about-btn');

//     if (heading) observer.current.observe(heading);
//     paragraphs.forEach(paragraph => {
//       if (paragraph) observer.current.observe(paragraph);
//     });
//     if (button) observer.current.observe(button);

//     return () => {
//       if (observer.current) {
//         observer.current.disconnect();
//       }
//     };
//   }, []);

//   return (
//     <div className="about-us-brief-section">
//       <div className="about-us-brief-content">
//         <div className="about-us-brief-text">
//           <h2>🚀 About ELITE WEALTH GLOBAL</h2>
//           <p><strong>Our Vision:</strong> To outperform our peers and become the leading global investment platform for both individual and institutional organizations. We provide more account protection tools than most other platforms, aiming to be recognized for profitability, reliability, and high-quality investment services.</p>
//           <div className="about-us-brief-image" style={{height:'250px', width:"100%", backgroundImage:`url(${mi8})` }}>
//           {/* Uncomment and use an image if needed */}
//           {/* <img src={briefImage} alt="About Us" /> */}
//         </div>
//           <p><strong>Our Mission:</strong> To deliver excellent, quality, and prompt services, ensuring maximum customer satisfaction while fostering transparency and long-term client relationships that expand our legacy internationally.</p>
//           <div className="about-us-brief-image" style={{height:'250px',width:'100%',backgroundImage:`url(${mi12})`}}>
//           {/* Uncomment and use an image if needed */}
//           {/* <img src={briefImage} alt="About Us" /> */}
//         </div>
//           <p><strong>Committed to Giving You True Value:</strong> With over 15 years of excellence, ELITE WEALTH GLOBAL is known for providing first-class service and a friendly, transparent approach that continues to grow our client base and global presence.</p>
//           <div className="about-us-brief-image" style={{height:'250px', width:"100%",backgroundImage:`url(${mi13})`}}>
//           {/* Uncomment and use an image if needed */}
//           {/* <img src={briefImage} alt="About Us" /> */}
//         </div>
//           {/* <div className="about-brief-icons">
//             <FaRecycle className="about-brief-icon" />
//             <FaLeaf className="about-brief-icon" />
//             <FaFlask className="about-brief-icon" />
//           </div> */}
//           <button className="more-about-btn" onClick={handleMoreClick}>
//             Learn More About Us
//           </button>
//         </div>

//         <div className="about-us-brief-image"  style={ {display:"flex",textAlign:"center", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
//           {/* Uncomment and use an image if needed */}
//           <img src={briefImage} alt="About Us" style={{width:'200px', borderRadius:'50%'}}/>
//          <div style={{padding:"20px", borderRadius:"20px", backgroundColor:"rgba(0,0,0,0.3", margin:"10px"}}>
//          <h1 style={{color:"white"}}>
//             ELITE WEALTH GLOBAL
//           </h1>
//           <p style={{color:"white", fontWeight:"500"}}>Empowering financial futures through innovative investment solutions.</p>
        
            
//          </div>
//          </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsBrief;




import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import aboutImage from '../Images4/h4.jpg'; // Replace with your actual image

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f8f9fa;
  padding: 40px;
  gap: 20px;
`;

const ImageContainer = styled.div`
  flex: 1;
  min-width: 300px;
  background: url(${aboutImage}) no-repeat center center;
  background-size: cover;
  border-radius: 10px;
  height: 400px;
`;

const ContentContainer = styled.div`
  flex: 2;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const AccordionItem = styled.div`
  background: #fff;
  border-radius: 8px;
  border: 1px solid #ddd;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const AccordionHeader = styled.div`
  padding: 15px 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  color:#C4A207;
`;

const AccordionContent = styled.div`
  padding: 15px 20px;
  font-size: 0.95rem;
  color: #555;
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};
`;

const AboutUsBrief = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const items = [
    {
      title: 'Our Vision',
      content: 'To be the leading non-interest financial institution in Africa.',
    },
    {
      title: 'Our Mission',
      content: 'To provide innovative, value-added non-interest financial services to our clientele.',
    },
    {
      title: 'Why Choose Us?',
      content:
        'Because we combine ethical banking with modern financial solutions to serve customers better and build a better society.',
    },
    {
      title: 'Business Philosophy',
      content:
        'At Jiz Bank Plc, we believe in delivering innovative, inclusive, and customer-centric financial services that empower individuals and businesses to thrive. Our philosophy centers on trust, transparency, and making a lasting impact in the communities we serve — helping to build a stronger, more connected financial future for all.',
    },
  ];



  const toggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Wrapper>
      <ImageContainer />
      <ContentContainer>
        {items.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionHeader onClick={() => toggle(index)}>
              {item.title}
              {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </AccordionHeader>
            <AccordionContent expanded={expandedIndex === index}>
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </ContentContainer>
    </Wrapper>
  );
};

export default AboutUsBrief;

