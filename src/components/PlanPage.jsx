
import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';



// ========== Styled Components ==========
const PageWrapper = styled.div`
  background-color: #000;
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h1`
  color: gold;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const glow = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.9);
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
  }
`;

const PlanCard = styled.div`
  background: linear-gradient(145deg, #111 40%, #000 100%);
  border: 2px solid gold;
  border-radius: 20px;
  padding: 2rem;
  color: #fff;
  text-align: center;
  animation: ${glow} 3s ease-in-out infinite;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px) scale(1.03);
  }
`;

const PlanName = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: gold;
`;

const PlanDetails = styled.p`
  font-size: 1rem;
  margin-bottom: 0.6rem;
  color: #ccc;
`;

const InvestButton = styled.button`
  background-color: gold;
  color: #000;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  margin-top: 1.5rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease;
  
  &:hover {
    background: #fff8dc;
  }
`;

// ========== Main Component ==========
const PlanPage = () => {
  const navigate = useNavigate();
  const {plans} =useContext(Context);

  return (
    <PageWrapper>
      <PageTitle>🌌 Our Investment Plans 🌌</PageTitle>
      <CardsGrid>
        {plans.slice(0,3).map((plan) => (
          <PlanCard key={plan.id}>
            <PlanName>{plan.name}</PlanName>
            <PlanDetails><strong>ROI:</strong> {plan.roi}</PlanDetails>
            <PlanDetails><strong>Investment Range:</strong> {plan.range}</PlanDetails>
            {/* <PlanDetails><strong>Duration:</strong> {plan.duration} intervals</PlanDetails> */}
            {/* <PlanDetails><strong>Payout Interval:</strong> Every {plan.interval_minutes} mins</PlanDetails> */}
            <InvestButton onClick={() => navigate('/investments')}>Invest Now 🚀</InvestButton>
          </PlanCard>
        ))}
      </CardsGrid>
    </PageWrapper>
  );
};

export default PlanPage;
