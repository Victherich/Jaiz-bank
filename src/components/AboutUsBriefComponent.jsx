import React, { useEffect, useRef } from 'react';
import '../CSS/AboutUsBriefComponent.css';
import { useNavigate } from 'react-router-dom';
import { FaRecycle, FaLeaf, FaFlask } from 'react-icons/fa';
import briefImage from '../Images/whoweare2.png'; // replace with actual image path
import 'animate.css'; // Import animate.css for animations
import Swal from 'sweetalert2';

const AboutUsBrief = () => {
  const navigate = useNavigate();
  const observer = useRef(null);

  const handleMoreClick = () => {
    navigate('/aboutus'); // Now properly navigates to About Us page
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          if (element.tagName === 'H2') {
            element.classList.add('animate__animated', 'animate__slideInRight', 'animate__slower');
          } else if (element.tagName === 'P') {
            element.classList.add('animate__animated', 'animate__slideInRight', 'animate__slow');
          } else if (element.tagName === 'BUTTON') {
            element.classList.add('animate__animated', 'animate__slideInRight', 'animate__slow');
          }
          observer.current.unobserve(element);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    const heading = document.querySelector('.about-us-brief-text h2');
    const paragraphs = document.querySelectorAll('.about-us-brief-text p');
    const button = document.querySelector('.more-about-btn');

    if (heading) observer.current.observe(heading);
    paragraphs.forEach(paragraph => {
      if (paragraph) observer.current.observe(paragraph);
    });
    if (button) observer.current.observe(button);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="about-us-brief-section">
      <div className="about-us-brief-content">
        <div className="about-us-brief-text">
          <h2>🚀 About ELITE WEALTH GLOBAL</h2>
          <p><strong>Our Vision:</strong> To outperform our peers and become the leading global investment platform for both individual and institutional organizations. We provide more account protection tools than most other platforms, aiming to be recognized for profitability, reliability, and high-quality investment services.</p>
          <p><strong>Our Mission:</strong> To deliver excellent, quality, and prompt services, ensuring maximum customer satisfaction while fostering transparency and long-term client relationships that expand our legacy internationally.</p>
          <p><strong>Committed to Giving You True Value:</strong> With over 15 years of excellence, ELITE WEALTH GLOBAL is known for providing first-class service and a friendly, transparent approach that continues to grow our client base and global presence.</p>
          {/* <div className="about-brief-icons">
            <FaRecycle className="about-brief-icon" />
            <FaLeaf className="about-brief-icon" />
            <FaFlask className="about-brief-icon" />
          </div> */}
          <button className="more-about-btn" onClick={handleMoreClick}>
            Learn More About Us
          </button>
        </div>

        <div className="about-us-brief-image">
          {/* Uncomment and use an image if needed */}
          {/* <img src={briefImage} alt="About Us" /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUsBrief;
