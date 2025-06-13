
// import React from 'react';
// import styled from 'styled-components';

// const Overlay = styled.div`
//   position: fixed;
//   top: 0; left: 0; width: 100%; height: 100%;
//   background: rgba(0,0,0,0.1);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 100;
// `;

// const Modal = styled.div`
//   background: white;
//   padding: 30px;
//   border-radius: 20px;
//   width: 100%;
//   max-width: 500px;
//   text-align: center;
// `;

// const Info = styled.div`
//   margin: 10px 0;
//   font-size: 0.95rem;
// `;

// const Button = styled.button`
//   margin-top: 20px;
//   padding: 12px;
//   background: #004d00;
//   color: white;
//   border: none;
//   border-radius: 10px;
//   width: 100%;
//   cursor: pointer;
// `;

// const ReceiptModal = ({ data, onClose, onClose2 }) => {
//   return (
//     <Overlay>
//       <Modal>
//         <h2 style={{color:"green"}}>Transaction Receipt</h2>
//         <Info><strong>Transaction ID:</strong> {data.transaction_id}</Info>
//         <Info><strong>Status:</strong> {data.status}</Info>
//         <Info><strong>Recipient:</strong> {data.recipient_name}</Info>
//         <Info><strong>Bank:</strong> {data.bank}</Info>
//         <Info><strong>Account:</strong> {data.account_number}</Info>
//         <Info><strong>Amount:</strong> ₦{data.amount}</Info>
//         <Info><strong>Description:</strong> {data.description}</Info>
//         <Info><strong>Phone:</strong> {data.phone_number}</Info>
//         <Info><strong>Type:</strong> {data.transfer_type}</Info>
//         <Info><strong>Date:</strong> {new Date(data.created_at).toLocaleString()}</Info>
//         <Button onClick={()=>{onClose();onClose2()}}>Close</Button>
//       </Modal>
//     </Overlay>
//   );
// };

// export default ReceiptModal;




import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Modal = styled.div`
  background: white;
  padding: 30px 25px;
  border-radius: 16px;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  color: green;
  margin-bottom: 25px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0f0f0;
`;

const Label = styled.div`
  font-weight: 500;
  color: #555;
`;

const Value = styled.div`
  font-weight: 600;
  color: #222;
  text-align: right;
`;

const Button = styled.button`
  margin-top: 25px;
  padding: 12px;
  background: #004d00;
  color: white;
  border: none;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #006600;
  }
`;

const ReceiptModal = ({ data, onClose, onClose2 }) => {

    console.log(data)

    
  return (
    <Overlay>
      <Modal>
        <Title>Transaction Receipt</Title>

        <Row><Label>Transaction ID:</Label><Value>{data?.transaction_id}</Value></Row>
        <Row><Label>Status:</Label><Value>{data?.status}</Value></Row>
        <Row><Label>Recipient:</Label><Value>{data?.recipient_name}</Value></Row>
        <Row><Label>Bank:</Label><Value>{data?.bank}</Value></Row>
        <Row><Label>Account:</Label><Value>{data?.account_number}</Value></Row>
        <Row><Label>Amount:</Label><Value>₦{data?.amount}</Value></Row>
        <Row><Label>Description:</Label><Value>{data?.description}</Value></Row>
        <Row><Label>Phone:</Label><Value>{data?.phone_number}</Value></Row>
        <Row><Label>Type:</Label><Value>{data?.transfer_type}</Value></Row>
        <Row><Label>Date:</Label><Value>{new Date(data?.created_at).toLocaleString()}</Value></Row>

        <Button onClick={() => { onClose(); onClose2(); }}>Close</Button>
      </Modal>
    </Overlay>
  );
};

export default ReceiptModal;

