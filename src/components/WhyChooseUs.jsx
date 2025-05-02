
import React from 'react';
import styled from 'styled-components';
import { FaGavel, FaListAlt, FaTools } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Content data
const features = [
  {
    icon: <FaGavel />,
    title: "Legal Company",
    description:
      "Our portfolios offer top-tier performance and risk protection. ELITE WEALTH GLOBAL is legally certified to operate in the global investment space."
  },
  {
    icon: <FaListAlt />,
    title: "Listings",
    description:
      "Browse our up-to-date property listings. Use filters to find your perfect match – from cozy apartments to commercial properties."
  },
  {
    icon: <FaTools />,
    title: "Services",
    description:
      "We offer buying/selling help, market analysis, leasing, investment advice, and full property management solutions."
  }
];

// Styled components
const Section = styled.section`
  background: linear-gradient(135deg, #001f3f, #003366, #005580);
  padding: 80px 20px;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 10px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  color: #d1d5db;
  font-size: 1.1rem;
  margin-bottom: 50px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 30px 20px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  svg {
    font-size: 2.5rem;
    background-color: #4f46e5;
    color: white;
    padding: 12px;
    border-radius: 50%;
    margin-bottom: 15px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  color: #e5e7eb;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const ContactSection = styled.div`
  margin-top: 80px;
`;

const ContactTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ContactText = styled.p`
  color: #d1d5db;
  font-size: 1rem;
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

const WhyChooseUs = () => {

const navigate = useNavigate();


  return (
    <Section>
      <Container>
        <Title>Why Choose Us</Title>
        <Subtitle>
          Discover why ELITE WEALTH GLOBAL is the go-to choice for investment and real estate services worldwide.
        </Subtitle>

        <CardGrid>
          {features.map((feature, index) => (
            <Card key={index}>
              {feature.icon}
              <CardTitle>{feature.title}</CardTitle>
              <CardText>{feature.description}</CardText>
            </Card>
          ))}
        </CardGrid>

        <ContactSection>
          <ContactTitle>We’d love to hear from you!</ContactTitle>
          <ContactText>
            Reach out for inquiries, property viewings, or consultations. Fill out the contact form or call us.
          </ContactText>
          <Button onClick={()=>navigate('/contactus')}>Contact us</Button>
        </ContactSection>
      </Container>
    </Section>
  );
};

export default WhyChooseUs;
