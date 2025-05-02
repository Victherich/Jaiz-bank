

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
        <AboutUsBrief />
        <ServicesHeadings/>
        <PlanPage/>
        <WhyChooseUs/>
        {/* <Academics/> */}
        {/* <FacultyLecturers/> */}
        
        {/* <ServicesBrief /> */}
        {/* <CommunityImpact/> */}
        {/* <GalleryComponent/> */}
        {/* <ChampionsDay/> */}
        {/* <OnlineCourses/> */}
  
      </div>
    )
  );
};

export default Landingpage;

