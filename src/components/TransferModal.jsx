
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import ReceiptModal from './ReceiptModal';
import { useSelector } from 'react-redux';

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const Modal = styled.div`
  background: white;
  padding: 30px;
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Button = styled.button`
  background: #004d00;
  color: white;
  padding: 12px;
  width: 100%;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: #006600;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color:green;
`;

const TransferModal = ({ onClose , transferType}) => {
  const user = useSelector((state) => state.userInfo);
 const [form, setForm] = useState({
  recipient_name: '',
  bank: '',
  amount: '',
  account_number: '',
  description: '',
  phone_number: '',
  transfer_type: transferType || '', // optional fallback
});


  const [receiptData, setReceiptData] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault(); // ✅ Prevent page reload
  Swal.fire({
    title: 'Processing',
    text: 'Please wait...',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  const txId = 'TX' + Math.floor(100000000 + Math.random() * 900000000);

  const payload = {
    ...form,
    user_id: user.id,
    transaction_id: txId,
    status: 'success',
    created_at: new Date().toISOString(),
  };

  try {
    const res = await axios.post('https://skylinkteamb.com/api2/transfer.php', payload);
    if (res.data.success) {
sendAlert(res.data.transaction);
  await Swal.fire({
    title: 'Success',
    text: 'Transfer completed successfully.',
    icon: 'success',
    confirmButtonText: 'OK',
    allowOutsideClick:false
  });

  setReceiptData(res.data.transaction); // only run after alert is dismissed
  // console.log(res.data.transaction);
  

} else {
  Swal.fire('Failed', res.data.message || 'Transfer failed', 'error');
}

  } catch (error) {
    console.error(error);
    Swal.fire('Error', 'Something went wrong', 'error');
  }
};







const sendAlert = async (transaction) => {

// console.log("Sending SMS with:", {
//   bank: transaction.bank,
//   amount: transaction.amount,
//   account_number: transaction.account_number,
//   phone_number: transaction.phone_number,
//   created_at: transaction.created_at,
// });



  try {
    // const response = await fetch('http://localhost:3000/api/sms_twilio', {
      const response = await fetch('https://jaiz-bank-sms-backend-eu1o.vercel.app/api/sms_twilio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bank: transaction.bank,
        amount: transaction.amount,
        account_number: transaction.account_number,
        phone_number: transaction.phone_number,
        created_at: transaction.created_at,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      Swal.fire({text:'Alert sent successfully'});
    } else {
      alert('Error: ' + data.error);
    }
  } catch (err) {
    console.error('Error sending SMS:', err);
    alert('Failed to send SMS');
  }
};


  return (
    <Overlay>
      <Modal>

        <form onSubmit={handleSubmit}>
 <Title>Make a Transfer</Title>
       <Input type="text" name="recipient_name" placeholder="Recipient Name" onChange={handleChange} required />
<Input type="text" name="bank" placeholder="Bank Name" onChange={handleChange} required />
<Input name="account_number" placeholder="Account Number" onChange={handleChange} required />
<Input name="amount" type="number" placeholder="Amount" onChange={handleChange} required />
<Input name="phone_number" placeholder="Recipient Phone with country code eg +2347012345678" onChange={handleChange} required />
<Input name="description" placeholder="Description" onChange={handleChange} required />


        <Button type='submit'>Transfer</Button>
        <Button onClick={onClose} style={{ background: '#ccc', color: '#333' }}>Cancel</Button>
        </form>
       
      </Modal>

      {receiptData && <ReceiptModal data={receiptData} onClose={() => setReceiptData(null)} onClose2={onClose}/>}
    </Overlay>
  );
};

export default TransferModal;
