
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const PendingWithdrawals = () => {
    const [withdrawals, setWithdrawals] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(withdrawals)

    useEffect(() => {
        fetchPendingWithdrawals();
    }, []);

    const fetchPendingWithdrawals = async () => {
        try {
            const response = await fetch('https://elitewealthglobal.com/api/get_pending_withdrawals.php');
            const data = await response.json();
            if (data.success) {
                setWithdrawals(data.withdrawals);
            } else {
                // alert(data.error || 'Failed to fetch withdrawals.');
            }
        } catch (error) {
            console.error('Error fetching withdrawals:', error);
            // alert('Error fetching withdrawals.');
        } finally {
            setLoading(false);
        }
    };

 



    const approveWithdrawal = async (id, userId) => {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to approve this withdrawal?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, approve it!',
      });
    
      if (!result.isConfirmed) return;
    
      try {
        const response = await fetch('https://elitewealthglobal.com/api/approve_withdrawal.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        });
    
        const data = await response.json();
        if (data.success) {
          Swal.fire('Approved!', data.message || 'Withdrawal approved.', 'success');
          setWithdrawals(prev => prev.filter(w => w.id !== id));
          fetchPendingWithdrawals();
          notifyUserWithdrawalApproved(userId)
        } else {
          Swal.fire('Error', data.error || 'Approval failed.', 'error');
        }
      } catch (error) {
        console.error('Error approving withdrawal:', error);
        Swal.fire('Error', 'Error approving withdrawal.', 'error');
      }
    };
    




    const notifyUserWithdrawalApproved = async (userId) => {
      try {
        // Sending POST request to notify the user
        const response = await fetch('https://elitewealthglobal.com/api/notify_user_withdrawal_approved.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id: userId })  // Send the user_id to the backend
        });
    
        const data = await response.json();
    
        if (data.success) {
          // Show success notification using SweetAlert
          Swal.fire('Success', 'Withdrawal approved and user has been notified via email.', 'success');
        } else {
          // Show error notification using SweetAlert
          Swal.fire('Error', data.error || 'Failed to notify the user.', 'error');
        }
      } catch (error) {
        // Show generic error notification using SweetAlert
        Swal.fire('Error', 'Something went wrong while notifying the user.', 'error');
      }
    };
    




    if (loading) return <p>Loading...</p>;

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Pending Withdrawals</h2>
            <div style={styles.cardWrapper}>
                {withdrawals.length === 0 ? (
                    <p>No pending withdrawals.</p>
                ) : (
                    withdrawals.map((w) => (
                        <div key={w.id} style={styles.card}>
                            <p><strong style={{color:"#000050"}}>Ref:</strong> {w.reference}</p>
                            <p><strong style={{color:"#000050"}}>User ID:</strong> {w.user_id}</p>
                            <p><strong style={{color:"#000050"}}>Amount:</strong> ₦{parseFloat(w.amount).toFixed(2)}</p>
                            <p><strong style={{color:"#000050"}}>Description:</strong> {w.description}</p>
                            <p><strong style={{color:"#000050"}}>Reference:</strong> {w.reference}</p>
                            <p><strong style={{color:"#000050"}}>User wallet:</strong> {w.wallet}</p>
                            <p><strong style={{color:"#000050"}}>Date:</strong> {new Date(w.created_at).toLocaleString()}</p>
                            <button style={styles.button} onClick={() => approveWithdrawal(w.id, w.user_id)}>
                                Approve
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
        // fontFamily: 'Arial, sans-serif',
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
    },
    button: {
        marginTop: '12px',
        padding: '10px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
    }
};

export default PendingWithdrawals;
