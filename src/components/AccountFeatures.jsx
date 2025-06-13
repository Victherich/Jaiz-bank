
import React from 'react';
import styled from 'styled-components';
import { FaPiggyBank, FaMoneyCheckAlt, FaMobileAlt, FaBuilding, FaChartLine } from 'react-icons/fa';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  transform: translate(0%, -30%);
  padding:0px 50px;

  @media(max-width:768px){
   transform: translate(0%, 0%);
   padding:0px 0px;
  }
 
`;

const Card = styled.div`
  flex: 1;
//   min-width: 250px;
  padding: 30px 20px;
  background:#2C4B2F;
  border: 1px solid #e0e0e0;
  text-align: center;
  transition: box-shadow 0.3s ease;
  color:white;

 

  &:hover {
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
     background:#C4A207;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: ${props => props.color || '#000'};
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 0.95rem;

`;


const features = [
  {
    title: 'INSTANT TRANSFERS',
    description:
      'Send money locally or internationally in seconds with Jaiz’s fast and secure transfer system—accessible 24/7.',
    icon: <FaMoneyCheckAlt />,
    color: '#3C9E37',
  },
  {
    title: 'DIGITAL BANKING',
    description:
      'Manage your finances from anywhere with Jaiz Mobile—transfer money, pay bills, and monitor accounts with full security and speed.',
    icon: <FaMobileAlt />,
    color: '#3C9E37',
  },
  {
    title: 'BUSINESS ACCOUNTS',
    description:
      'Open a Jaiz Business Account to streamline bulk payments, manage payroll, and monitor real-time transaction flows.',
    icon: <FaBuilding />,
    color: '#C4A207',
  },
  {
    title: 'FUND MANAGEMENT',
    description:
      'Access flexible transfer packages and investment options that fit your financial goals—powered by real-time insights and tools.',
    icon: <FaChartLine />,
    color: '#3C9E37',
  },
];


// Component
const AccountFeatures = () => {
  return (
    <Container>
      {features.map((feature, index) => (
        <Card key={index}>
          <IconWrapper color={feature.color}>{feature.icon}</IconWrapper>
          <Title>{feature.title}</Title>
          <Description>{feature.description}</Description>
        </Card>
      ))}
    </Container>
  );
};

export default AccountFeatures;
