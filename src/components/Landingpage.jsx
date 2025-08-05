

import React, { useContext, useEffect, useState } from 'react';
import Hero from './Hero';

import AboutUsBrief from './AboutUsBriefComponent';
import ServicesBrief from './ServicesBrief';
import { useLocation, useNavigate } from 'react-router-dom';

import '../CSS/LandingPage.css';
import Academics from './MajorServices';
import FacultyLecturers from './FacultyLecturers';
import GalleryComponent from './GalleryComponent';
import OnlineCourses from './OnlineCourses';
import CommunityImpact from './CommunityImpact';
import ChampionsDay from './ChampionsDay';
import ServicesHeadings from './ServicesHeadings';
import WhyChooseUs from './WhyChooseUs';
import PlanPage from './PlanPage';
import ServicesPage from './ServicesPage';
import ThierAbout from './ThierAbout';
import Hero2 from './Hero2';
import YouTubeShowcase from './YouTubeShowcase';
import TestimonialCarousel from './TestimonialCarousel';
import Testimonial2 from './TestimonialCarousel2';
import WhyChooseUs2 from './WhyChooseUs2';
import InfoCards from './InfoCards';
import AutoPlayVideo from './AutoPlayVideo'
import AccountFeatures from './AccountFeatures';
import RechargeAndEarn from './RechargeAndEarn';
import RechargeCardSlider from './RechargeCardSlider';

const Landingpage = () => {

  const location = useLocation();

  const [reRender, setRerender] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setRerender(false);
    }, 300);

    const id2 = setTimeout(() => {
      setRerender(true);
    }, 600);

    return () => {
      clearTimeout(id);
      clearTimeout(id2);
    };
  }, [location.pathname]);

  return (
    reRender && (
      <div className='LandingPage'>
     <Hero/>
     <AccountFeatures/>
     <RechargeCardSlider/>
        <AboutUsBrief />
        {/* <ThierAbout/> */}
        {/* <TestimonialCarousel/> */}
        {/* <ServicesPage/> */}
        {/* <ServicesHeadings/> */}
        <PlanPage/>
        {/* <WhyChooseUs/> */}
        <WhyChooseUs2/>
        <InfoCards/>
        {/* <Hero2/> */}
        {/* <Academics/> */}
        {/* <FacultyLecturers/> */}
        
        {/* <ServicesBrief /> */}
        {/* <CommunityImpact/> */}
        {/* <GalleryComponent/> */}
        {/* <ChampionsDay/> */}
        {/* <OnlineCourses/> */}
        <Testimonial2/>
        <RechargeAndEarn/>
  {/* <YouTubeShowcase/> */}
  {/* <AutoPlayVideo/> */}
      </div>
    )
  );
};

export default Landingpage;

