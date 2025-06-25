
import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import axios from 'axios';

const Overlay = styled.div`
  position: fixed; top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex; justify-content: center; align-items: center;
`;

const Content = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 100%; max-width: 400px;
`;

const Title = styled.h3`
  margin: 0 0 1rem;
  color: #000050;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-size: 1rem;
`;

const Actions = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  background: ${props => props.primary ? '#000050' : 'lightgray'};
  color: ${props => props.primary ? 'white' : '#000050'};
  border: 1px solid #000050;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${props => props.primary ? '#202070' : '#ccc'};
  }
`;

const DebitUserModal = ({ onClose, user,  getUsers}) => {
  const [amount, setAmount] = useState('');



const handleDebit = async () => {
  if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
    Swal.fire('Invalid Amount', 'Please enter a valid amount.', 'warning');
    return;
  }

  const confirm = await Swal.fire({
    title: `Debit $${parseFloat(amount).toFixed(2)} from ${user.username}?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, debit',
  });

  if (!confirm.isConfirmed) return;

  Swal.fire({
    title: 'Processing...',
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading(),
  });

  try {
    const response = await axios.post('https://jizbankplc.com/api/debit_user.php', {
      user_id: user.id,
      amount: parseFloat(amount),
    });

    if (response.data.success) {
      Swal.fire('Success', response.data.message, 'success');
      onClose();
      getUsers();
    } else {
      Swal.fire('Error', response.data.error || 'Failed to debit user.', 'error');
    }
  } catch (err) {
    console.error(err);
    Swal.fire('Error', 'Something went wrong. Try again.', 'error');
  }
};




  return (
    <Overlay>
      <Content>
        <Title>Debit Balance</Title>
        <p>Enter amount(USD) to debit <strong>{user.username}</strong>:</p>
        <Input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        <Actions>
          <Button onClick={onClose}>Cancel</Button>
          <Button primary onClick={handleDebit}>Debit</Button>
        </Actions>
      </Content>
    </Overlay>
  );
};

export default DebitUserModal;
