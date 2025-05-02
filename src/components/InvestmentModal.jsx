
import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import styled from 'styled-components';
import { Context } from './Context';

// const plans = [
//     {
//       id: 1,
//       name: 'Plan A',
//       roi: '10% every hour for 20 hours',
//       range: '$1,000 - $9,999',
//       min: 1000,
//       max: 9999,
//       roi_percent: 10,
//       interval_minutes: 60,
//       duration: 20
//     },
//     {
//       id: 2,
//       name: 'Plan B',
//       roi: '15% every hour for 24 hours',
//       range: '$10,000 - $49,999',
//       min: 10000,
//       max: 49999,
//       roi_percent: 15,
//       interval_minutes: 60,
//       duration: 24
//     },
//     {
//       id: 3,
//       name: 'Plan C',
//       roi: '20% every hour for 30 hours',
//       range: '$50,000 and above',
//       min: 50000,
//       max: Infinity,
//       roi_percent: 20,
//       interval_minutes: 60,
//       duration: 30
//     },
//     {
//       id: 4,
//       name: 'Plan D',
//       roi: '5% every 5 minutes for 30 minutes',
//       range: '$100 - $999',
//       min: 100,
//       max: 999,
//       roi_percent: 5,
//       interval_minutes: 5,
//       duration: 6
//     }
//   ];
  

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
`;

const PlanCard = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#000050' : 'white')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  background: #000050;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #333383;
  }
`;

const InvestmentModal = ({ isOpen, onClose, userInfo }) => {
  const {plans}=useContext(Context);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [amount, setAmount] = useState('');

  const handleSubmit = async () => {
    const enteredAmount = parseFloat(amount);

    if (!selectedPlan || !enteredAmount) {
      Swal.fire('Missing Info', 'Please select a plan and enter a valid amount.', 'error');
      return;
    }

    if (enteredAmount < selectedPlan.min || enteredAmount > selectedPlan.max) {
      Swal.fire(
        'Invalid Amount',
        `Amount must be between $${selectedPlan.min.toLocaleString()} and ${selectedPlan.max === Infinity ? 'above' : `$${selectedPlan.max.toLocaleString()}`}.`,
        'error'
      );
      return;
    }

    const userBalance = parseFloat(userInfo.balance);
    if (enteredAmount > userBalance) {
      Swal.fire('Insufficient Balance', 'You do not have enough funds for this investment.', 'error');
      return;
    }

    const data = {
        user_id: userInfo.id,
        plan_id: selectedPlan.id,
        plan_name: selectedPlan.name,
        roi: selectedPlan.roi,
        roi_percent: selectedPlan.roi_percent,
        interval_minutes: selectedPlan.interval_minutes,
        duration: selectedPlan.duration,
        amount: enteredAmount,
        user_name: userInfo.name,
        user_email: userInfo.email,
        user_phone: userInfo.phone
      };
      

    try {
      Swal.fire({ title: 'Submitting...', didOpen: () => Swal.showLoading() });

      const res = await axios.post('https://elitewealthglobal.com/api/submit_investment.php', data);
      if (res.data.success) {
        Swal.fire('Success', 'Your investment has been submitted for approval.', 'success');
        onClose();
        setSelectedPlan(null);
        setAmount('');
        notifyAdminOfInvestment();
window.location.reload();
      } else {
        Swal.fire('Error', res.data.error || 'Something went wrong.', 'error');
      }
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'Could not connect to server.', 'error');
    }
  };




 

const notifyAdminOfInvestment = async () => {
  try {
    const response = await fetch('https://elitewealthglobal.com/api/notify_admin_investment.php', {
      method: 'POST'
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire('Notified', 'Admin has been notified to approve your investment.', 'success');
    } else {
      // Swal.fire('Error', data.error || 'Failed to notify admin.', 'error');
    }
  } catch (err) {
    // Swal.fire('Error', 'Could not contact server.', 'error');
  }
};




  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <h2 style={{color:"#000050"}}>Click to select an Investment Plan</h2>
        {plans.slice(0,4).map((plan) => (
          <PlanCard
            key={plan.id}
            selected={selectedPlan && selectedPlan.id === plan.id}
            onClick={() => setSelectedPlan(plan)}
          >
            <h3>{plan.name}</h3>
            <p>{plan.roi}</p>
            <p>Range: {plan.range}</p>
          </PlanCard>
        ))}
        <Input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button onClick={handleSubmit}>Proceed</Button>
        <Button onClick={onClose} style={{ marginLeft: '10px', background: '#ccc', color: '#000' }}>
          Cancel
        </Button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default InvestmentModal;
