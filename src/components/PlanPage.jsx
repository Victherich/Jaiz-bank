
// import React, { useContext } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import { Context } from './Context';



// // ========== Styled Components ==========
// const PageWrapper = styled.div`
//   background-color: #000;
//   min-height: 100vh;
//   padding: 4rem 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;


//   @media(max-width:320px){
//     padding:4rem 1rem;
//   }
// `;

// const PageTitle = styled.h1`
//   color: gold;
//   font-size: 2.5rem;
//   margin-bottom: 3rem;
//   text-align: center;
//   font-family: 'Segoe UI', sans-serif;
// `;

// const CardsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 2rem;
//   width: 100%;
//   max-width: 1200px;
// `;

// const glow = keyframes`
//   0% {
//     box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
//   }
//   50% {
//     box-shadow: 0 0 20px rgba(255, 215, 0, 0.9);
//   }
//   100% {
//     box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
//   }
// `;

// const PlanCard = styled.div`
//   background: linear-gradient(145deg, #111 40%, #000 100%);
//   border: 2px solid gold;
//   border-radius: 20px;
//   padding: 2rem;
//   color: #fff;
//   text-align: center;
//   animation: ${glow} 3s ease-in-out infinite;
//   transition: transform 0.3s ease;
  
//   &:hover {
//     transform: translateY(-10px) scale(1.03);
//   }
// `;

// const PlanName = styled.h2`
//   font-size: 1.8rem;
//   margin-bottom: 1rem;
//   color: gold;
// `;

// const PlanDetails = styled.p`
//   font-size: 1rem;
//   margin-bottom: 0.6rem;
//   color: #ccc;
// `;

// const InvestButton = styled.button`
//   background-color: gold;
//   color: #000;
//   border: none;
//   padding: 12px 24px;
//   border-radius: 30px;
//   margin-top: 1.5rem;
//   font-weight: bold;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: 0.3s ease;
  
//   &:hover {
//     background: #fff8dc;
//   }
// `;

// // ========== Main Component ==========
// const PlanPage = () => {
//   const navigate = useNavigate();
//   const {plans} =useContext(Context);

//   return (
//     <PageWrapper>
//       <PageTitle>🌌 Our Investment Plans 🌌</PageTitle>
//       <CardsGrid>
//         {plans.map((plan) => (
//           <PlanCard key={plan.id}>
//             <PlanName>{plan.name}</PlanName>
//             <PlanDetails><strong>ROI:</strong> {plan.roi}</PlanDetails>
//             <PlanDetails><strong>Investment Range:</strong> {plan.range}</PlanDetails>
//             {/* <PlanDetails><strong>Duration:</strong> {plan.duration} intervals</PlanDetails> */}
//             {/* <PlanDetails><strong>Payout Interval:</strong> Every {plan.interval_minutes} mins</PlanDetails> */}
//             <InvestButton onClick={() => navigate('/userdashboard')}>Invest Now 🚀</InvestButton>
//           </PlanCard>
//         ))}
//       </CardsGrid>
//     </PageWrapper>
//   );
// };

// export default PlanPage;



import React, { useContext } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context";



const PlanPage = () => {
  const navigate = useNavigate();
  const {plans} = useContext(Context)

  return (
    <Section>
      <Header>
        <Title>Choose Your Transfer Plan</Title>
        <Subtitle>Flexible options to suit your transfer needs</Subtitle>
      </Header>
      <PlansGrid>
        {plans.map((plan, index) => (
          <PlanCard key={index}>
            <PlanName>{plan.name}</PlanName>
            <PlanPrice>{plan.currency}{plan.price}</PlanPrice>
            <PlanDuration>for {plan.duration}</PlanDuration>
            <FeaturesList>
              {plan.features.map((feature, i) => (
                <Feature key={i}>
                  <FaCheckCircle color="#3C9E37" style={{ marginRight: 8 }} />
                  {feature}
                </Feature>
              ))}
            </FeaturesList>
            <SubscribeBtn onClick={()=>navigate('/userdashboard')}>Select Plan</SubscribeBtn>
          </PlanCard>
        ))}
      </PlansGrid>
    </Section>
  );
};

export default PlanPage;

// Styled Components
const Section = styled.section`
  background-color: #f6f6f6;
  padding: 80px 20px;
  border-top:4px solid green;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  color: #2c4b2f;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #3c9e37;
`;

const PlansGrid = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const PlanCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 16px;
  border-top: 5px solid #c4a207;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }
`;

const PlanName = styled.h3`
  font-size: 1.6rem;
  color: #2c4b2f;
  margin-bottom: 10px;
`;

const PlanPrice = styled.div`
  font-size: 2rem;
  color: #c4a207;
  font-weight: bold;
`;

const PlanDuration = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  margin-bottom: 30px;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 10px;
  color: #2c4b2f;
`;

const SubscribeBtn = styled.button`
  background-color: #3c9e37;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #2c4b2f;
  }
`;
