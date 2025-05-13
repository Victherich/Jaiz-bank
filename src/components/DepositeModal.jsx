
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 9;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
`;

const Title = styled.h2`
  color: #000050;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 15px 0;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #000050;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 15px;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

const WalletBox = styled.div`
  background-color: #f9f9f9;
  border: 1px dashed #000050;
  padding: 20px;
  margin-top: 15px;
  text-align: center;
  border-radius: 10px;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;
`;

const PreviewImage = styled.img`
  margin-top: 10px;
  max-width: 100%;
  max-height: 200px;
  border-radius: 8px;
`;

const DepositModal = ({ isOpen, onClose, fetchTransactions }) => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const [preview, setPreview] = useState(null);
  const userInfo = useSelector(state=>state.userInfo);
  console.log(userInfo)


  const walletAddress = 'TNq237vbZZqAyYuE1ksuEQphf6HqUb9E81'; 

  const handleProceed = () => {
    if (!amount || parseFloat(amount) <= 0) {
      Swal.fire('Invalid amount', 'Please enter a valid deposit amount.', 'error');
      return;
    }
    setStep(2);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setScreenshot(file);
      setPreview(URL.createObjectURL(file));
    }
  };




  const handleSubmit = async () => {
    if (!screenshot) {
      Swal.fire('No screenshot', 'Please upload your payment screenshot.', 'error');
      return;
    }

    const formData = new FormData();
    formData.append('user_id', userInfo.id);
    formData.append('amount', amount);
    formData.append('screenshot', screenshot);
    formData.append('name', userInfo.name);
    formData.append('email', userInfo.email);
    formData.append('phone', userInfo.phone);
    formData.append('username', userInfo.username);

    Swal.fire({text:"Please wait..."});
    Swal.showLoading();


    try {
      const response = await axios.post('https://elitewealthglobal.com/api/submit_deposit.php', formData);
      if (response.data.success) {
        fetchTransactions();
        Swal.fire('Deposit Submitted', 'We will verify and credit your wallet shortly.', 'success');
        setStep(1);
        setAmount('');
        setScreenshot(null);
        setPreview(null);
        onClose();
        handleNotify();
      } else {
        Swal.fire('Error', response.data.error || 'Something went wrong.', 'error');
      }
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'Could not connect to the server.', 'error');
    }
  };

  const resetModal = () => {
    setStep(1);
    setAmount('');
    setScreenshot(null);
    setPreview(null);
    onClose();
  };


  
    const handleNotify = async () => {
      try {
        Swal.fire({
          title: 'Notifying Admin...',
          text: 'Please wait while we notify the admin about the deposit request.',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });
  
        const response = await fetch('https://elitewealthglobal.com/api/notify_admin_deposit.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        const result = await response.json();
        Swal.close();
  
        if (result.success) {
          Swal.fire('Success', result.message, 'success');
        } else {
          Swal.fire('Error', result.error || 'Notification failed.', 'error');
        }
      } catch (error) {
        Swal.close();
        Swal.fire('Network Error', 'Could not connect to the server.', 'error');
      }
    };





  return (
    <Overlay isOpen={isOpen}>
      <ModalContainer>
        <CloseBtn onClick={resetModal}>✖</CloseBtn>
        <Title>Deposit Funds</Title>

        {step === 1 && (
          <>
            <label>Enter amount to deposit:</label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. 100"
            />
            <Button onClick={handleProceed}>Proceed</Button>
            <Button onClick={resetModal} style={{backgroundColor:"gray"}}>Cancel</Button>
          </>
        )}

        {step === 2 && (
          <>
            <WalletBox>
              <strong>Send the exact amount to:</strong>
              <p style={{ wordBreak: 'break-word' }}>{walletAddress}</p>
              <p style={{ marginTop: '10px' }}><strong>Network:</strong> USDT (TRC20)</p>
            </WalletBox>

            <label style={{ marginTop: '20px', fontWeight:"bold" }}>Upload Screenshot of Payment:</label>
            <Input type="file" accept="image/*" onChange={handleImageChange} />
            {preview && <PreviewImage src={preview} alt="Screenshot Preview" />}

            <Button onClick={handleSubmit}>Submit Proof</Button>
            <Button onClick={resetModal} style={{backgroundColor:"gray"}}>Cancel</Button>
          </>
        )}
      </ModalContainer>
    </Overlay>
  );
};

export default DepositModal;
