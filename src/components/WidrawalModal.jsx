
import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import axios from 'axios';

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
  margin: 5% auto;
  padding: 20px;
  border-radius: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 16px;
  margin-right: 10px;
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



const WithdrawalModal = ({ isOpen, onClose, userInfo, fetchTransactions }) => {
    const [amount, setAmount] = useState('');
    const [wallet, setWallet] = useState('');
  
    const handleWithdraw = async () => {
      const enteredAmount = parseFloat(amount);
  
      if (!wallet.trim()) {
        Swal.fire('Missing Wallet', 'Please enter your crypto wallet address.', 'error');
        return;
      }
  
      if (!enteredAmount || enteredAmount <= 0) {
        Swal.fire('Invalid Amount', 'Please enter a valid withdrawal amount.', 'error');
        return;
      }
  
      if (enteredAmount > parseFloat(userInfo.balance)) {
        Swal.fire('Insufficient Balance', 'You do not have enough balance for this withdrawal.', 'error');
        return;
      }
  
      try {
        Swal.fire({ title: 'Processing...', didOpen: () => Swal.showLoading() });
  
        const response = await axios.post('https://elitewealthglobal.com/api/submit_withdrawal.php', {
          user_id: userInfo.id,
          name: userInfo.name,
          email: userInfo.email,
          phone: userInfo.phone,
          amount: enteredAmount,
          wallet
        });
  
        if (response.data.success) {
          Swal.fire('Request Sent', 'Your withdrawal request has been submitted.', 'success');
          fetchTransactions();
          setAmount('');
          setWallet('');
          onClose();
          notifyAdminWithdrawalRequest();
        } else {
          Swal.fire('Error', response.data.error || 'Something went wrong.', 'error');
        }
      } catch (err) {
        console.error(err);
        Swal.fire('Error', 'Could not connect to server.', 'error');
      }
    };






    const notifyAdminWithdrawalRequest = async () => {
      try {
        // Send POST request to notify admin
        const response = await fetch('https://elitewealthglobal.com/api/notify_admin_withdrawal.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        const data = await response.json();
    
        if (data.success) {
          // Show success notification using SweetAlert
          Swal.fire('Success', 'Withdrawal request has been submitted and the admin has been notified.', 'success');
        } else {
          // Show error message using SweetAlert
          // Swal.fire('Error', data.error || 'Failed to notify the admin.', 'error');
        }
      } catch (error) {
        // Handle any errors during the request
        // Swal.fire('Error', 'Something went wrong while notifying the admin.', 'error');
      }
    };
    



  
    return (
      <ModalOverlay isOpen={isOpen}>
        <ModalContent>
          <h2>Request Withdrawal</h2>
          <p>Available Balance: <strong>${parseFloat(userInfo.balance).toFixed(2)}</strong></p>
          <Input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Enter your crypto wallet address"
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
          />
          <Button onClick={handleWithdraw}>Submit</Button>
          <Button onClick={onClose} style={{ background: '#ccc', color: '#000' }}>Cancel</Button>
        </ModalContent>
      </ModalOverlay>
    );
  };
  
export default WithdrawalModal;
