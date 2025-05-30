


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import DepositModal from './DepositeModal';

// // Styled Components
// const DashboardContainer = styled.div`
//   display: flex;
//   width:100%;

//   font-family: 'Segoe UI', sans-serif;
//   background-color: #f4f6f8;
// `;



// const Main = styled.div`
//   // flex: 1;
//   padding: 30px;
//   width:100%;

//   @media(max-width:428px){
//   padding:0px;
//   padding-top:50px;
//   }

// `;

// const Card = styled.div`
// display:flex;
// flex-direction:column;
//   background: white;
//   width:100%;
//   padding: 20px;
//   border-radius: 12px;
//   box-shadow: 0 5px 15px rgba(0,0,0,0.05);
//   margin-bottom: 20px;

//   @media(max-width:428px){
//   padding:20px 5px;
//   }
// `;

// const Balance = styled.h2`
//   font-size: 32px;
//   color: #28a745;
// `;

// const Label = styled.p`
//   font-size: 16px;
//   color: #333;
// `;

// const NavItem = styled.div`
//   margin-bottom: 15px;
//   cursor: pointer;
//   font-size: 16px;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Button = styled.button`
//   padding: 10px 16px;
//   margin: 10px 5px 0 0;
//   border: none;
//   background: #000050;
//   color: white;
//   border-radius: 6px;
//   cursor: pointer;
//   font-weight: bold;
//   &:hover {
//     background: #333383;
//   }
// `;

// const TransactionTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   background: white;
//   border-radius: 8px;
//   overflow: hidden;

//   th, td {
//     padding: 12px 16px;
//     border-bottom: 1px solid #eee;
//   }

//   th {
//     background: #000050;
//     color: white;
//     text-align: left;
//   }
// `;

// const UserProfile2 = ({userId}) => {
//   const [user, setUser] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);



//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get(`https://elitewealthglobal.com/api/get_user_by_id.php?id=${userId}`);
//         if (res.data.success) {
//           setUser(res.data.user);
       
        
//         } else {
//           console.error(res.data.error);
//         }
//       } catch (err) {
//         console.error('Failed to fetch user:', err);
//       }
//     };

//     fetchUser();
//   }, [userId]);




//   // get user transactions
//   const fetchTransactions = async () => {
//     try {
//       const response = await axios.get(`https://elitewealthglobal.com/api/get_user_transactions.php?user_id=${userId}`);
//       if (response.data.success) {
//         console.log('Transactions:', response.data.transactions);
       
//       } else {
//         console.error('Error:', response.data.error);
//       }
//     } catch (error) {
//       console.error('Server error:', error);
//     }
//   };
  
  
//   useEffect(()=>{
//     fetchTransactions();
//   },[])




//   if (!user) return <div>Loading...</div>;

//   return (
//     <DashboardContainer>
  

//       <Main>
//         <Card>
//           <Label>Welcome back, {user.name}</Label>
//           <Balance>Balance: ${parseFloat(user.balance).toFixed(2)}</Balance>
//           <p>Email: {user.email}</p>
//           <p>Phone: {user.phone}</p>
//         </Card>

//         <Card>
//           <h3>Actions</h3>
//           <Button onClick={()=>setModalOpen(true)}>Deposit Funds</Button>
//           <Button>Invest </Button>
   
//         </Card>

//         <Card>
//           <h3>Investment Summary</h3>
//           <p>(Coming soon: Show active investments, returns, maturity date, etc.)</p>
//         </Card>

//         <Card>
//           <h3>Recent Transactions</h3>
//           <TransactionTable>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Type</th>
//                 <th>Amount</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>2025-04-01</td>
//                 <td>Deposit</td>
//                 <td>$500.00</td>
//                 <td>Completed</td>
//               </tr>
//               <tr>
//                 <td>2025-03-28</td>
//                 <td>Investment</td>
//                 <td>$200.00</td>
//                 <td>Ongoing</td>
//               </tr>
//             </tbody>
//           </TransactionTable>
//         </Card>
//       </Main>
//       <DepositModal isOpen={modalOpen} fetchTransactions={fetchTransactions} onClose={() => setModalOpen(false)} userId={userId} />
    
//     </DashboardContainer>
//   );
// };

// export default UserProfile2;





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DepositModal from './DepositeModal';
import InvestmentModal from './InvestmentModal';
import { useSelector } from 'react-redux';
import WithdrawalModal from './WidrawalModal';
import UserInvestments from './UserInvestments';
import Swal from 'sweetalert2'

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f4f6f8;
  padding: 5px;
  padding-top:50px;

  @media (min-width: 768px) {
    padding: 40px;
  }


`;

const Main = styled.div`
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 100%;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  margin-bottom: 20px;
  // overflow-y:scroll;

  @media(max-width: 428px){
    padding: 15px 10px;
  }
`;

const Balance = styled.h2`
  font-size: 28px;
  color: #28a745;

  @media(max-width: 428px){
    font-size: 22px;
  }
`;

const Label = styled.p`
  font-size: 16px;
  color: #333;

  @media(max-width: 428px){
    font-size: 14px;
  }
`;

const Button = styled.button`
  padding: 10px 16px;
  margin: 10px 10px 0 0;
  border: none;
  background: rgba(0,0,255,0.5);
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #333383;
  }

  @media(max-width: 428px){
    padding: 8px 12px;
    font-size: 14px;
  }
`;

const TransactionTableWrapper = styled.div`
  overflow-x: auto;
`;

const TransactionTable = styled.table`
  width: 100%;
  min-width: 500px;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow-x: scroll;

  th, td {
    padding: 12px 16px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
  }

  th {
    background: #000050;
    color: white;
    text-align: left;
  }
`;








// coipy link

const Card2 = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 20px;
`;

const Button2 = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

const ReferralLink = styled.span`
  font-weight: bold;
   word-break: break-all;
  display: inline-block;
`;

const UserProfile2 = ({userId}) => {
  const [user, setUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [isInvestmentModalOpen, setInvestmentModalOpen] = useState(false);
  const [withdrawModalOpen, setWithdrawModalOpen]=useState(false);
  const [referees, setReferees] = useState([]);
console.log(referees)

  console.log(user)

  

 
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://elitewealthglobal.com/api/get_user_by_id.php?id=${userId}`);
        if (res.data.success) {
          setUser(res.data.user);
          console.log(res.data.user)
        } else {
          console.error(res.data.error);
        }
      } catch (err) {
        console.error('Failed to fetch user:', err);
      }
    };


    useEffect(()=>{
      fetchUser();
    },[userId]);


    useEffect(() => {
    const id = setInterval(()=>{
      fetchUser();
      fetchTransactions();
    },10000)
return ()=>clearInterval(id);
  }, []);



  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`https://elitewealthglobal.com/api/get_user_transactions.php?user_id=${userId}`);
      if (response.data.success) {
        setTransactions(response.data.transactions);
      } else {
        console.error('Error:', response.data.error);
      }
    } catch (error) {
      console.error('Server error:', error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);






  // chek an dupddat paypout


    // const checkPayouts = async () => {
    //   try {
    //     const res = await axios.post('https://elitewealthglobal.com/api/check_and_update_payouts.php', {
    //       user_id: userId
    //     });
        
    //     if (res.data.success && res.data.updated.length > 0) {
    //       console.log('Updated payouts:', res.data.updated);
    //       // Optionally refresh balance from backend
          
    //     }
    //   } catch (err) {
    //     console.error('Payout update failed:', err);
    //   }
    // };

  //   useEffect(() => {
  //   checkPayouts();
  // }, []);


  // useEffect(()=>{
  //   const id = setInterval(() => {
  //     checkPayouts();
  //   }, 60000);
  // },[])

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     checkPayouts();
  //   }, 60000);
  //   return () => clearInterval(id);
  // }, []);






  // copy link logic

  const [buttonText, setButtonText] = useState('Copy Link');

  const copyReferralLink = () => {
    const referralLink = `https://elitewealthglobal.com/signup2/${user.username}`;

    // Create a temporary textarea element to copy the link
    const tempInput = document.createElement('textarea');
    tempInput.value = referralLink;
    document.body.appendChild(tempInput);

    // Select and copy the text
    tempInput.select();
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Change the button text to indicate the link was copied
    setButtonText('Link Copied!');

    // Reset button text after 2 seconds
    setTimeout(() => {
      setButtonText('Copy Link');
    }, 2000);
  };
  





  const runPayoutProcessor = async () => {
    try {
      const response = await fetch('https://elitewealthglobal.com/api/execute_due_payouts2.php');
      const data = await response.json();
  
      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: data.message,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: data.error || 'Something went wrong',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Request failed. Please check your connection.',
      });
    }
  };










const getUserReferrees = async () => {
  if (!user?.referees) return;

  try {
    const response = await axios.get(`https://elitewealthglobal.com/api/get_referees.php?ids=${user?.referees}`);
    if (response.data.success) {
      setReferees(response.data.referees);
      
    
    } else {
      console.warn("No referees found.");
    }
  } catch (error) {
    console.error("Error fetching referees:", error);
  }
};

useEffect(() => {
  getUserReferrees();
}, [user?.referees]);

  





  

  if (!user) return <div>Loading...</div>;

  return (
    <DashboardContainer>
      <Main>
        <Card>
          <Label>Welcome back, {user?.username.toUpperCase()}</Label>
          <Balance>Balance: ${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(parseFloat(user.balance))}
          </Balance>
          {/* <p>
            From Commission: ${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(parseFloat(user.commissions))}
          </p> */}
          {/* <p>Email: {user.email}</p> */}
          {/* <p>Phone: {user.phone}</p> */}
        </Card>
        {/* <button onClick={runPayoutProcessor}>Test</button> */}

        <Card>
          <h3>Actions</h3>
          <Button onClick={() => setModalOpen(true)}>Deposit Funds</Button>
          <Button onClick={()=>setInvestmentModalOpen(true)}>Invest</Button>
          <Button onClick={()=>setWithdrawModalOpen(true)}>Withdraw Funds</Button>
        </Card>


      

     
         <Card2>
      <h3 style={{color:"#000050"}}>
        Referral Link: <ReferralLink>{`https://elitewealthglobal.com/signup2/${user.username}`}</ReferralLink>
      </h3>
      <Button2 onClick={copyReferralLink}>{buttonText}</Button2>
    </Card2>

        <UserInvestments userId={userId}/>

        <Card style={{height:"300px"}}>
          <h3>Recent Transactions</h3>
          <TransactionTableWrapper>
            <TransactionTable>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Reference</th>
                </tr>
              </thead>
              <tbody>
                {transactions.length > 0 ? (
                  transactions.sort((a,b)=>a.created_at - b.created_at).map((tx, index) => (
                    <tr key={index}>
                      <td>{tx.created_at}</td>
                      <td>{tx.type}</td>
                      <td>${parseFloat(tx.amount).toFixed(2)}</td>
                      <td>{tx.status}</td>
                      <td>{tx.reference}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No transactions yet.</td>
                  </tr>
                )}
              </tbody>
            </TransactionTable>
          </TransactionTableWrapper>
        </Card>

         <Card style={{height:"300px"}}>
          <h3>Your Referrals</h3>
          <TransactionTableWrapper>
            <TransactionTable>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  {/* <th>Reference</th> */}
                </tr>
              </thead>
              <tbody>
                {referees.length > 0 ? (
                  referees.sort((a,b)=>a.created_at - b.created_at).map((rf, index) => (
                    <tr key={index}>
                      <td>{rf.username}</td>
                      <td>{rf.name}</td>
                      <td>{rf.email}</td>
                      <td>{rf.phone}</td>
                      {/* <td>{tx.reference}</td> */}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No Referrals yet.</td>
                  </tr>
                )}
              </tbody>
            </TransactionTable>
          </TransactionTableWrapper>
        </Card>

      </Main>
      <DepositModal isOpen={modalOpen} fetchTransactions={fetchTransactions} onClose={() => setModalOpen(false)} userId={userId} />
      <InvestmentModal
        isOpen={isInvestmentModalOpen}
        onClose={() => setInvestmentModalOpen(false)}
        userInfo={user}
        
      />
      <WithdrawalModal 
      isOpen={withdrawModalOpen} 
      onClose={() => setWithdrawModalOpen(false)} 
      userInfo={user} 
      fetchTransactions={fetchTransactions}
      />

    </DashboardContainer>
  );
};

export default UserProfile2;
