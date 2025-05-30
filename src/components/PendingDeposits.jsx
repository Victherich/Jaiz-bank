
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Swal from 'sweetalert2';

// Styled-components for responsive design
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  display:flex;
  flex-direction:column;
`;

const Card = styled.div`
  flex: 1 1 300px;
  background: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  background: #28a745;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;

  &:hover {
    background: #218838;
  }
`;

const PendingDeposits = () => {
  const [deposits, setDeposits] = useState([]);
  console.log(deposits)

  useEffect(() => {
    fetchDeposits();
  }, []);

  const fetchDeposits = async () => {
    try {
      const response = await axios.get('https://elitewealthglobal.com/api/get_pending_deposites.php');
      if (response.data.success) {
        setDeposits(response.data.deposits);
      } else {
        // Swal.fire({text:response.data.error});
      }
    } catch (error) {
      Swal.fire('Error', 'Failed to fetch deposits.', 'error');
    }
  };




const approveDeposit = async (id, userId, amount) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to approve this deposit?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, approve it!',
  });

  if (result.isConfirmed) {
    try {
      const response = await axios.post('https://elitewealthglobal.com/api/approve_deposites.php', { id });
      if (response.data.success) {
        
        Swal.fire('Success', 'Deposit approved.', 'success');
        fetchDeposits();
        notifyUserDepositApproved(userId, amount);
        setDeposits(prev => prev.filter(w => w.id !== id));
      } else {
        Swal.fire('Error', response.data.error, 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'Failed to approve deposit.', 'error');
    }
  }
};







const notifyUserDepositApproved = async (userId, amount) => {
  try {
    // Sending POST request to notify the user
    const response = await fetch('https://elitewealthglobal.com/api/notify_user_deposit_approved.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: userId, amount:amount })  // Send the user_id to the backend
    });

    const data = await response.json();

    if (data.success) {
      // Show success notification using SweetAlert
      // fetchDeposits();
      Swal.fire('Success', 'Deposit approved and user has been notified via email.', 'success');
    } else {
      // Show error notification using SweetAlert
      Swal.fire('Error', data.error || 'Failed to notify the user.', 'error');
    }
  } catch (error) {
    // Show generic error notification using SweetAlert
    Swal.fire('Error', 'Something went wrong while notifying the user.', 'error');
  }
};







 const deleteTransaction = async (transactionId, userId, amount) => {
      if (!transactionId) {
        Swal.fire('Error', 'Transaction ID is required', 'error');
        return;
      }
    
      // Ask for confirmation first
      const confirm = await Swal.fire({
        title: 'Are you sure?',
        text: 'This transaction will be permanently deleted.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
      });
    
      if (!confirm.isConfirmed) return;
    
      // Show loading spinner
      Swal.fire({
        title: 'Please wait...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });
    
      try {
        const response = await fetch('https://elitewealthglobal.com/api/delete_transaction.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ transaction_id: transactionId }),
        });
    
        const result = await response.json();
    
        if (result.success) {
          Swal.fire('Declined and Deleted!', result.message, 'success');
          setDeposits(prev => prev.filter(w => w.id !== transactionId));
          fetchDeposits();
          handleNotify(userId, amount);
          
        } else {
          Swal.fire('Error', result.error || 'Failed to delete transaction.', 'error');
        }
      } catch (error) {
        Swal.fire('Error', 'An unexpected error occurred.', 'error');
      }
    };




    const handleNotify = async (userId, amount) => {
      if (!userId) {
        Swal.fire('Error', 'Please enter a valid user ID', 'error');
        return;
      }
  

 


      try {

        Swal.fire({
          title: 'Processing...',
          text: 'Sending deposit request decline notification...',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          }
        });

        const response = await fetch('https://elitewealthglobal.com/api/notify_user_deposit_declined.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id: parseInt(userId) , amount:amount}),
        });
  
        const result = await response.json();
  
        if (result.success) {
          Swal.fire('Success', result.message, 'success');
        } else {
          Swal.fire('Error', result.error || 'Something went wrong.', 'error');
        }
      } catch (error) {
        Swal.fire('Error', 'Network error. Please try again.', 'error');
      }
    };
    





if(deposits.length==0){
  return <h2 style={{textAlign:"center", color:"#000050"}}>No pending deposits</h2>
}


  return (
    <Container>
      <h2 style={{textAlign:"center", color:"#000050"}}>Pending Deposits</h2>
      {deposits.map((deposit) => (
        <Card key={deposit.id}>
          <h3 style={{color:"#000050"}}>Reference: {deposit.reference}</h3>
          {/* <p><strong style={{color:"#000050"}}>User ID:</strong> {deposit.user_id}</p> */}
          <p><strong style={{color:"#000050"}}>Username:</strong> {deposit.username}</p>
          <p><strong style={{color:"#000050"}}>Email:</strong> {deposit.email}</p>
          <p><strong style={{color:"#000050"}}>phone:</strong> {deposit.phone}</p>
          <p><strong style={{color:"#000050"}}>Amount:</strong> ${parseFloat(deposit.amount).toFixed(2)}</p>
          {/* <p><strong style={{color:"#000050"}}>Description:</strong> {deposit.description}</p> */}
          <p><strong style={{color:"#000050"}}>Date:</strong> {new Date(deposit.created_at).toLocaleString()}</p>
          <p 
          onClick={()=>window.open(`https://elitewealthglobal.com/api/${deposit.screenshot_path}`, '_blank')}
          style={{color:"#000050", fontWeight:"bold", cursor:"pointer", textDecoration:"underline", marginTop:"10px", marginBottom:"10px"}}
          >View Payment Screenshot</p>
          <Button onClick={() => approveDeposit(deposit.id, deposit.user_id, deposit.amount)}>Approve</Button>
          <button style={{
                               marginTop: '12px',
                               padding: '10px',
                               backgroundColor: 'gray',
                               color: '#fff',
                               border: 'none',
                               borderRadius: '5px',
                               cursor: 'pointer',
                               fontWeight: 'bold',
                               margin:"5px"
                            }}  onClick={() => deleteTransaction(deposit.id, deposit.user_id, deposit.amount)}>
                                Decline
                            </button>
        </Card>
      ))}
    </Container>
  );
};

export default PendingDeposits;
