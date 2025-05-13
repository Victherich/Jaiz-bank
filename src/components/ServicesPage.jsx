
// ServicesPage.js

import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import AOS from 'aos';
import sbg from '../Images2/sbg.jpg'

import r1 from '../Images2/r1.jpg'
import r2 from '../Images2/r2.jpg'
import r3 from '../Images2/r3.jpg'
import r4 from '../Images2/r4.jpg'
import r5 from '../Images3/mi4.jpg'
import r6 from '../Images3/mi5.jpg'
import r7 from '../Images3/mi6.jpg'



const services = [
  {
    id: 1,
    title: 'REAL ESTATE',
    description:
      'We provide access to investing in the Real Estate industry through the offering of small real estate units which investors can include into their portfolios and benefit hugely.',
    image: r1,
  },
  {
    id: 2,
    title: 'RESIDENTIAL PROPERTIES',
    description:
      "Discover our curated selection of residential properties, including homes, apartments, and condos. Whether you're looking to buy, rent, or invest, we offer personalized solutions to fit your lifestyle and budget.",
    image: r2,
  },
  {
    id: 3,
    title: 'COMMERCIAL PROPERTIES',
    description:
      'Explore prime commercial spaces ideal for offices, retail, and industrial use. Our listings include strategic locations and flexible options to meet your business needs.',
    image: r3,
  },
  {
    id: 4,
    title: 'PROPERTY MANAGEMENT',
    description:
      'Streamline your property management with our expert services. From tenant screening to maintenance and rent collection, we handle every aspect of your investment with care and professionalism.',
    image: r4,
  },
  {
    id: 5,
    title: 'REAL ESTATE INVESTMENT',
    description:
      'Maximize your returns with our tailored real estate investment opportunities. We guide you through every step, from market analysis to property aquisition, ensuring smart and profitable decisions.',
    image: r5,
  },
  {
    id: 6,
    title: 'CURRENCY EXCHANGE AND SMART TRADING',
    description:
      'Owning a digital assets is the smartest way to own a part of the future. Our investors are really smart because not only do they yeild high returns, but their investments also grant them ownership of the future and we trade in cryptocurrencies and offer its investment opportunities to our investors, so they can benefit from this highly profitable industry.',
    image: r6,
  },
  {
    id: 7,
    title: 'NFTs',
    description:
      'Non-fungible tokens (NFTs) are cryptographic assets on a blockchain with unique identification codes and metadata that distinguish them from each other. Unlike cryptocurrencies, they cannot be traded or exchanged at equivalency. This differs from fungible tokens like cryptocurrencies which areidentical to each other and therefore can serve as a medium for commercial transactions.',
    image: r7,
  },
];

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageContainer = styled.div`
  font-family: 'Segoe UI', sans-serif;
  color: #1f2937;
  background-color: #f9fafb;
`;

const HeroSection = styled.section`
  width: 100%;
  color: white;
  padding: 100px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
`;


const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  animation: ${fadeInUp} 1s ease-out forwards;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  animation: ${fadeInUp} 1.2s ease-out forwards;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
`;

// const ServicesGrid = styled.section`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 40px;
//   padding: 60px 20px;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const ServiceCard = styled.div`
//   background: white;
//   border-radius: 12px;
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
//   overflow: hidden;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   animation: ${fadeInUp} 1s ease-out forwards;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
//   }
// `;



const ServicesGrid = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
  margin-bottom: 50px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
`;

const ServiceCard = styled.div`
  background: #ffffff;
  color: #000050;
  padding: 20px;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  

  @media (max-width: 480px) {
    padding: 15px;
  }
`;




const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ServiceContent = styled.div`
  padding: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #111827;
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  color: #4b5563;
`;

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <PageContainer>
      <HeroSection bg={sbg}>
        <HeroTitle>Our Services</HeroTitle>
        <HeroSubtitle>
          Explore our comprehensive range of real estate services tailored to meet your investment needs.
        </HeroSubtitle>
      </HeroSection>
      <ServicesGrid>
        {services.slice(0,3).map((service) => (
          <ServiceCard key={service.id} data-aos="fade-up">
            <ServiceImage src={service.image} alt={service.title} />
            <ServiceContent>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
      <ServicesGrid>
        {services.slice(3,6).map((service) => (
          <ServiceCard key={service.id} data-aos="fade-up">
            <ServiceImage src={service.image} alt={service.title} />
            <ServiceContent>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
      <ServicesGrid>
        {services.slice(6,7).map((service) => (
          <ServiceCard key={service.id} data-aos="fade-up">
            <ServiceImage src={service.image} alt={service.title} />
            <ServiceContent>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </PageContainer>
  );
};

export default ServicesPage;
