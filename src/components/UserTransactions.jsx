
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ReceiptModal from './ReceiptModal';

const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h2`
  color: #004d00;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const TH = styled.th`
  background-color: #e9f8ec;
  color: #004d00;
  padding: 12px;
  text-align: left;
`;

const TD = styled.td`
  padding: 12px;
  border-bottom: 1px solid #f0f0f0;
`;

const StatusBadge = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
  color: white;
  background-color: ${props => props.status === 'success' ? '#28a745' : '#ffc107'};
`;


const Button = styled.button`
  padding:5px 10px;
  border:none;
  cursor:pointer;
  background-color:green;
  color:white;
  border-radius:5px;


  &:hover{
    background:gray;
  }
`

const UserTransactions = () => {
  const user = useSelector(state => state.userInfo);
  const [txns, setTxns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
    const [receiptData, setReceiptData] = useState(null);

    // console.log(receiptData)

  useEffect(() => {
    if (!user?.id) {
      setError('User ID not available.');
      setLoading(false);
      return;
    }

    axios.get(`https://skylinkteamb.com/api2/get_user_transactions.php?user_id=${user.id}`)
      .then(res => {
        if (res.data.success) {
          setTxns(res.data.transactions);
        } else {
          setError(res.data.error || 'Failed to fetch transactions.');
        }
      })
      .catch(err => {
        setError('Network error.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user]);

  return (
    <Container>
      <Title>Your Transaction History</Title>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <>
          {txns.length === 0 ? (
            <p>No transactions found.</p>
          ) : (
            <Table>
              <thead>
                <tr>
                  <TH>Date</TH>
                  <TH>ID</TH>
                  <TH>Recipient</TH>
                  <TH>Bank</TH>
                  <TH>Amount</TH>
                  <TH>Status</TH>
                   <TH>Action</TH>
                </tr>
              </thead>
              <tbody>
                {txns.map(tx => (
                  <tr key={tx.transaction_id}>
                    <TD>{new Date(tx.created_at).toLocaleString()}</TD>
                    <TD>{tx.transaction_id}</TD>
                    <TD>{tx.recipient_name}</TD>
                    <TD>{tx.bank}</TD>
                    <TD>₦{Number(tx.amount).toFixed(2)}</TD>
                    <TD><StatusBadge status={tx.status}>{tx.status}</StatusBadge></TD>
                    <TD><Button onClick={()=>setReceiptData(tx)}>View</Button></TD>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </>
      )}
      {receiptData&&<ReceiptModal data={receiptData} onClose={()=>setReceiptData(null)} onClose2={()=>setReceiptData(null)}/>}
    </Container>
  );
};

export default UserTransactions;
