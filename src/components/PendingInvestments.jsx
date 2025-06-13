
import React, { useEffect, useState } from 'react';
import axios from 'axios'


import Swal from 'sweetalert2';

const PendingInvestments = () => {
    const [investments, setInvestments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPendingInvestments();
    }, []);

    const fetchPendingInvestments = async () => {
        try {
            const response = await fetch('https://skylinkteamb.com/api/get_pending_investments.php');
            const data = await response.json();
            if (data.success) {
                setInvestments(data.investments);
            } else {
                // alert(data.error || 'Failed to fetch investments.');
            }
        } catch (error) {
            console.error('Error fetching investments:', error);
            // alert('Error fetching investments.');
        } finally {
            setLoading(false);
        }
    };






    const approveInvestment = async (id, userId, amount) => {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to approve this investment?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, approve it!',
      });
    
      if (!result.isConfirmed) return;
    
      try {
        const res = await fetch('https://skylinkteamb.com/api/approve_investment.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id })
        });
    
        const data = await res.json();
        if (data.success) {
          Swal.fire('Approved!', 'Investment approved.', 'success');
          // Optionally refresh list
          fetchPendingInvestments();
          notifyUserInvestmentApproved(id, userId, amount)
          setInvestments(prev => prev.filter(w => w.id !== id));
          
        } else {
          Swal.fire('Error', data.error || 'Approval failed.', 'error');
        }
      } catch (err) {
        Swal.fire('Error', 'Error approving investment.', 'error');
      }
    };
    





    const notifyUserInvestmentApproved = async (id, userId, amount) => {
      try {
        // Sending POST request to notify the user
        const response = await fetch('https://skylinkteamb.com/api/notify_user_investment_approved.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id: userId, amount:amount })  // Send the user_id to the backend
        });
    
        const data = await response.json();
    
        if (data.success) {
          // Show success notification using SweetAlert
          Swal.fire('Success', 'Investment approved and user has been notified via email.', 'success');
          handlePayCommission(id);
        } else {
          // Show error notification using SweetAlert
          Swal.fire('Error', data.error || 'Failed to notify the user.', 'error');
        }
      } catch (error) {
        // Show generic error notification using SweetAlert
        Swal.fire('Error', 'Something went wrong while notifying the user.', 'error');
      }
    };
    



    const handlePayCommission = async (investmentId) => {
      if (!investmentId) {
        // setError('Investment ID is required');
        return;
      }
  
      try {
        const response = await axios.post('https://skylinkteamb.com/api/pay_commission.php', {
          id: investmentId
        });
  
        if (response.data.success) {
          // setMessage('Investment approved successfully and payouts scheduled!');
        } else {
          console.log(response.data.error || 'An error occurred');
        }
      } catch (err) {
        console.error('Error:', err);
        // setError('Failed to approve investment. Please try again.');
      } finally {
        // setLoading(false);
      }
    };
  







    const deleteInvestment = async (investmentId, userId, amount) => {
      if (!investmentId) {
        Swal.fire('Error', 'Investment ID is required.', 'error');
        return;
      }
    
      // Confirm with the user
      const confirm = await Swal.fire({
        title: 'Delete Investment?',
        text: 'This will permanently remove the investment record.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel'
      });
    
      if (!confirm.isConfirmed) return;
    
      // Loading state
      Swal.fire({
        title: 'Deleting...',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
      });
    
      try {
        const response = await fetch('https://skylinkteamb.com/api/delete_investment.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ investment_id: investmentId })
        });
    
        const result = await response.json();
    
        if (result.success) {
          Swal.fire('Deleted!', result.message, 'success');
          setInvestments(prev => prev.filter(w => w.id !== investmentId));
          fetchPendingInvestments();
          // Optionally refresh data or update UI here
          handleNotify(userId, amount);
        } else {
          Swal.fire('Error', result.error || 'Failed to delete investment.', 'error');
        }
      } catch (error) {
        Swal.fire('Error', 'An unexpected error occurred.', 'error');
      }
    };
    





    const handleNotify = async (userId, amount) => {
      if (!userId) {
        Swal.fire('Missing Info', 'Please enter a valid user ID.', 'warning');
        return;
      }
  
      try {
        Swal.fire({
          title: 'Processing...',
          text: 'Sending investment request decline notification...',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          }
        });
  
        const response = await fetch('https://skylinkteamb.com/api/notify_user_investment_declined.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id: parseInt(userId) , amount:amount}),
        });
  
        const result = await response.json();
        Swal.close();
  
        if (result.success) {
          Swal.fire('Success', result.message, 'success');
        } else {
          Swal.fire('Error', result.error || 'Something went wrong.', 'error');
        }
      } catch (error) {
        Swal.close();
        Swal.fire('Network Error', 'Could not connect to the server.', 'error');
      }
    };




    if (loading) return <p>Loading...</p>;

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Pending Investments</h2>
            <div style={styles.cardWrapper}>
                {investments.length === 0 ? (
                    <p>No pending investments.</p>
                ) : (
                    investments.map((investment) => (
                        <div key={investment.id} style={styles.card}>
                            <p><strong style={{color:"#000050"}}>Investment ID:</strong> {investment.id}</p>
                            {/* <p><strong style={{color:"#000050"}}>User ID:</strong> {investment.user_id}</p> */}
                            <p><strong style={{color:"#000050"}}>Username:</strong> {investment.username}</p>
                            <p><strong style={{color:"#000050"}}>Amount:</strong> ${parseFloat(investment.amount).toFixed(2)}</p>
                            <p><strong style={{color:"#000050"}}>Status:</strong> {investment.status}</p>
                            <p><strong style={{color:"#000050"}}>Date:</strong> {new Date(investment.created_at).toLocaleString()}</p>
                            <button onClick={() => approveInvestment(investment.id, investment.user_id, investment.amount)} 
                            style={{ marginTop: '10px',
                                 marginTop: '12px',
                                 padding: '10px',
                                 backgroundColor: '#28a745',
                                 color: '#fff',
                                 border: 'none',
                                 borderRadius: '5px',
                                 cursor: 'pointer',
                                 fontWeight: 'bold',
                             }}>
    Approve
</button>

<button onClick={() => deleteInvestment(investment.id, investment.user_id, investment.amount)} 
                            style={{ marginTop: '10px',
                                 marginTop: '12px',
                                 padding: '10px',
                                 backgroundColor: 'gray',
                                 color: '#fff',
                                 border: 'none',
                                 borderRadius: '5px',
                                 cursor: 'pointer',
                                 fontWeight: 'bold',
                             }}>
    Decline
</button>

                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
 
        maxWidth: '1000px',
        margin: '0 auto',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        color:"#000050"
    },
    cardWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
    },
    card: {
        background: '#fff',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        minWidth: '250px',
        maxWidth: '100%',
        flex: '1 1 300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
};

export default PendingInvestments;
