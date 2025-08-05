
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Swal from 'sweetalert2';

// Color Palette
const colors = {
  darkGreen: '#2C4B2F',
  gold: '#C4A207',
  white: '#FFFFFF',
  lightGray: '#F8F8F8',
};

// Keyframes for subtle animations
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

// Main container for the component
const DashboardCard = styled.div`
  background-color: ${colors.white};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 40px auto;
  text-align: center;
  border-left: 5px solid ${colors.gold};

  @media (max-width: 768px) {
    margin: 20px auto;
  }
`;

// Header for the card
const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const CardTitle = styled.h2`
  font-size: 1.8rem;
  color: ${colors.darkGreen};
  margin: 0;
  font-weight: bold;
`;

// Progress bar container
const ProgressBarContainer = styled.div`
  background-color: ${colors.lightGray};
  border-radius: 10px;
  height: 25px;
  width: 100%;
  margin: 10px 0;
  overflow: hidden;
`;

// The actual progress bar that fills up
const ProgressBar = styled.div`
  background-color: ${colors.gold};
  height: 100%;
  border-radius: 10px;
  width: ${({ progress }) => progress}%;
  transition: width 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-weight: bold;
  font-size: 0.9rem;
`;

// Text and status updates
const StatusText = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
  span {
    color: ${colors.darkGreen};
    font-weight: bold;
  }
`;

const RewardText = styled.p`
  font-size: 1.1rem;
  color: ${colors.darkGreen};
  font-weight: bold;
  margin: 0;
`;

// Button for the call to action
const RechargeButton = styled.button`
  background-color: ${colors.darkGreen};
  color: ${colors.white};
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  animation: ${pulse} 2s infinite;

  &:hover {
    background-color: #1A301E;
    transform: scale(1.02);
  }
`;

// Main Component
const RechargeAndEarnComponent = ({ currentRechargeAmount, targetRechargeAmount }) => {
  const progress = Math.min((currentRechargeAmount / targetRechargeAmount) * 100, 100);



const comingSoon = ()=>{
    Swal.fire({
        icon:"info",
        title:"Coming Soon",
        timer:2000,
        showConfirmButton:false
    })
}



  return (
    <DashboardCard>
      <CardHeader>
        {/* <Icon src="https://via.placeholder.com/40?text=$$" alt="Rewards Icon" /> */}
        <CardTitle>Your Recharge & Earn Progress</CardTitle>
      </CardHeader>
      
      {/* <StatusText>
        You have recharged <span>₦{currentRechargeAmount?.toLocaleString()}</span> this month.
      </StatusText> */}

         <StatusText>
        You have recharged <span>₦ 0</span> this month.
      </StatusText>
      
      <ProgressBarContainer>
        <ProgressBar progress={progress}>
          {progress > 5 ? `${Math.round(progress)}%` : ''}
        </ProgressBar>
      </ProgressBarContainer>
      
      {/* <RewardText>
        Recharge ₦{(targetRechargeAmount - currentRechargeAmount)?.toLocaleString()} more to unlock your reward!
      </RewardText> */}
      
      <RechargeButton onClick={comingSoon}>
        Recharge Now
      </RechargeButton>
    </DashboardCard>
  );
};

export default RechargeAndEarnComponent;