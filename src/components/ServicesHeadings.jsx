
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBuilding, FaHome, FaCity } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const services = [
  { id: 1, title: 'REAL ESTATE', icon: <FaBuilding /> },
  { id: 2, title: 'RESIDENTIAL PROPERTIES', icon: <FaHome /> },
  { id: 3, title: 'COMMERCIAL PROPERTIES', icon: <FaCity /> },
  { id: 4, title: 'PROPERTY MANAGEMENT', icon: <FaBuilding /> },
];

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  padding: 80px 20px;
  background: linear-gradient(to right, #f1f5f9, #e2e8f0);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #0f172a;
  margin-bottom: 40px;
  font-weight: bold;
  position: relative;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const Card = styled.div`
  background: #ffffff;
  padding: 30px 20px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  animation: ${fadeIn} 0.8s ease forwards;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    background-color: #f8fafc;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #2563eb;
  margin-bottom: 15px;
`;

const Heading = styled.h3`
  font-size: 1.4rem;
  color: #1e293b;
  font-weight: 600;
`;

const Button = styled.button`
padding:10px 30px;
background:#000050;
color:white;
margin-top:20px;
border-radius:20px;
cursor:pointer;
border:none;


&:hover{
background:gray;
}
`

const ServicesHeadings = () => {
    const navigate = useNavigate();

  return (
    <Section>
      <Title>👉 Our Services</Title>
      <ServicesGrid>
        {services.map(service => (
          <Card key={service.id}>
            <IconWrapper>{service.icon}</IconWrapper>
            <Heading>{service.title}</Heading>
          </Card>
        ))}
      </ServicesGrid>
      <Button onClick={()=>navigate('/services')}>Explore</Button>
    </Section>
  );
};

export default ServicesHeadings;
