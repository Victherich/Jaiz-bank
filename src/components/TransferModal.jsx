
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
  await Swal.fire({
    title: 'Success',
    text: 'Transfer completed successfully.',
    icon: 'success',
    confirmButtonText: 'OK',
    allowOutsideClick:false
  });

  setReceiptData(res.data.transaction); // only run after alert is dismissed
  console.log(res.data.transaction);
  sendAlert(res.data.transaction);

} else {
  Swal.fire('Failed', res.data.message || 'Transfer failed', 'error');
}

  } catch (error) {
    console.error(error);
    Swal.fire('Error', 'Something went wrong', 'error');
  }
};



  // <Row><Label>Transaction ID:</Label><Value>{data?.transaction_id}</Value></Row>
  //       <Row><Label>Status:</Label><Value>{data?.status}</Value></Row>
  //       <Row><Label>Recipient:</Label><Value>{data?.recipient_name}</Value></Row>
  //       <Row><Label>Bank:</Label><Value>{data?.bank}</Value></Row>
  //       <Row><Label>Account:</Label><Value>{data?.account_number}</Value></Row>
  //       <Row><Label>Amount:</Label><Value>₦{data?.amount}</Value></Row>
  //       <Row><Label>Description:</Label><Value>{data?.description}</Value></Row>
  //       <Row><Label>Phone:</Label><Value>{data?.phone_number}</Value></Row>
  //       <Row><Label>Type:</Label><Value>{data?.transfer_type}</Value></Row>
  //       <Row><Label>Date:</Label><Value>{new Date(data?.created_at).toLocaleString()}</Value></Row>



const sendAlert = (transaction)=>{

  const message =`${transaction.bank}:₦${transaction.amount} has been credited to your A/c Last 4 digits ${transaction.account_number.slice(-4)} on ${new Date(transaction.created_at).toLocaleString()}.`
  const phone = transaction.phone_number
  console.log('message', message, phone);

}




  return (
    <Overlay>
      <Modal>

        <form onSubmit={handleSubmit}>
 <Title>Make a Transfer</Title>
       <Input type="text" name="recipient_name" placeholder="Recipient Name" onChange={handleChange} required />
<Input type="text" name="bank" placeholder="Bank Name" onChange={handleChange} required />
<Input name="account_number" placeholder="Account Number" onChange={handleChange} required />
<Input name="amount" type="number" placeholder="Amount" onChange={handleChange} required />
<Input name="phone_number" placeholder="Recipient Phone" onChange={handleChange} required />
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
