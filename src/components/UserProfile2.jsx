

import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaUserCircle, FaMoneyCheckAlt, FaSignOutAlt, FaExchangeAlt, FaWallet, FaRegChartBar, FaLifeRing, FaCog, FaLock, FaPaperPlane } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TransferModal from './TransferModal';
import { Context } from './Context';
import SubscriptionModal from './SubscriptionModal';
import SubscriptionHistory from './SubscriptionHistory';
import Swal from 'sweetalert2';
import RechargeAndEarnComponent from './RechargeAndEarnComponent';

const Container = styled.div`
  display: flex;
  height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f4f9f4;
`;

const Sidebar = styled.div`
  width: 270px;
  background-color: #004d00;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
`;

const SidebarTitle = styled.div`
  font-size: 1.1rem;
  margin-bottom: 30px;
`;

const ProfileImage = styled(FaUserCircle)`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 15px 0;
  cursor: pointer;
  font-size: 0.95rem;

  &:hover {
    color: #b2fab4;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
`;

const Greeting = styled.h2`
  margin-bottom: 8px;
  color: #004d00;
`;

const InfoBox = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin-bottom: 30px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const StatCard = styled.div`
  background-color: #e9f8ec;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  color: #004d00;
  font-weight: 600;
`;

const AccountDetails = styled.div`
  margin-top: 20px;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const Footer = styled.footer`
  margin-top: 40px;
  text-align: center;
  font-size: 0.85rem;
  color: gray;
`;

const Button = styled.button`
  padding:10px;
  border:none;
  cursor:pointer;
  background-color:green;
  color:white;
  border-radius:5px;
  margin-top:30px;
  margin-bottom:30px;
  margin-right:10px;

  &:hover{
    background:gray;
  }
`

const UserProfile2 = ({userId, handleMenuClick}) => {

// const [openTransferModal, setOpenTransferModal]= useState(false);
const [transferType, setTransferType]=useState('');
 const [user, setUser] = useState(null);
 console.log(user)
 const [txns, setTxns] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState('');

   const {plans} = useContext(Context);
   const [showSubscriptionModal, setShowSubscriptionModal]=useState(false)
   


const fetchUser = async () => {
  try {
    const res = await axios.get(`https://jizbankplc.com/api/get_user_by_id.php?id=${userId}`);
    if (res.data.success) {
      setUser(res.data.user);
      // console.log(res.data)
    } else {
      console.error(res.data.error);
    }
  } catch (err) {
    console.error('Failed to fetch user:', err);
  }
};

useEffect(() => {
  fetchUser();
}, [userId]);



  useEffect(() => {
    if (!user?.id) {
      setError('User ID not available.');
      setLoading(false);
      return;
    }

    axios.get(`https://jizbankplc.com/api2/get_user_transactions.php?user_id=${user.id}`)
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





const checkSubscriptionStatus = async () => {

 
  // Show loading spinner
  Swal.fire({
    title: "Checking Subscription...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    const response = await fetch(`https://jizbankplc.com/api/check_active_subscription.php?user_id=${userId}`);
    const data = await response.json();

    Swal.close(); // Close the loading modal

    if (data.success) {
      if (data.status === "allnotexpired") {
        console.log("✅ User has an active subscription.");
        Swal.fire({text:"You still have an active subscription"})
       
      } else if (data.status === "allexpired") {
        console.warn("⚠️ All subscriptions have expired.");
        setShowSubscriptionModal(true)
      } else {
        console.warn("ℹ️ Unknown status:", data.status);
        
      }
    } else {
      Swal.fire("Error", data.error || "Failed to check subscription.", "error");
      
    }
  } catch (error) {
    Swal.close();
    Swal.fire("Error", `Something went wrong: ${error.message}`, "error");
   
  }
};



const deleteExpiredSubscriptions = async () => {
  if (!userId) {
    console.error("Missing user ID. Cannot delete subscriptions.");
    return;
  }

  try {
    // const response = await fetch(`https://jizbankplc.com/api/delete_user_expired_subscriptions.php?user_id=${userId}`);
    const response = await fetch("https://jizbankplc.com/api/delete_user_expired_subscriptions.php");

    const data = await response.json();

    if (data.success) {
      console.log("Deleted:", data.message);
    
    } else {
      console.error("Error:", data.error || "Could not delete subscriptions.");
    }
  } catch (error) {
    console.error("Request failed:", error.message || error);
  }
};


useEffect(()=>{
  deleteExpiredSubscriptions();
},[])


useEffect(()=>{
 const id = setInterval(()=>{
 deleteExpiredSubscriptions();
 },5*60*1000);

 return ()=>clearInterval(id);
},[])



const checkSubscriptionStatus2 = async () => {
  // Show loading spinner
  Swal.fire({
    title: "Checking Subscription...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    const response = await fetch(`https://jizbankplc.com/api/check_active_subscription.php?user_id=${userId}`);
    const data = await response.json();

    Swal.close(); // Close the loading modal

    if (data.success) {
      if (data.status === "allnotexpired") {
        console.log("✅ User has an active subscription.");
        
       setTransferType('local transfer')
      } else if (data.status === "allexpired") {
        console.warn("⚠️ All subscriptions have expired.");
        Swal.fire({text:"You do not have an active subscription"})
      } else {
        console.warn("ℹ️ Unknown status:", data.status);
        
      }
    } else {
      Swal.fire("Error", data.error || "Failed to check subscription.", "error");
      
    }
  } catch (error) {
    Swal.close();
    Swal.fire("Error", `Something went wrong: ${error.message}`, "error");
   
  }
};




  return (
    <Container>
 

      <Content>
        <Greeting style={{color:"green"}}>Hello, {user?.first_name}</Greeting>

        <InfoBox>
          <h3 style={{color:"rgba(0,0,0,0.7"}}><strong style={{color:"green"}}>Account Number:</strong> {user?.account_number}</h3>
          {/* <h3 style={{color:"rgba(0,0,0,0.7"}} ><strong style={{color:"green"}}>Available Balance:</strong> Unlimited Transfer </h3> */}
        </InfoBox>

        <StatsGrid>
  
          <StatCard>
            <div style={{ fontSize: '1.5rem' }}>{txns.length}</div>
            Completed Transactions
          </StatCard>
        </StatsGrid>

        <SubscriptionHistory userId={userId}/>

        <Button onClick={checkSubscriptionStatus} >Subscribe for Transfer</Button>

        <Button onClick={checkSubscriptionStatus2}>Make Transfer</Button>
        <Button onClick={()=>handleMenuClick('transactions')}>Your Transfer History</Button>

<RechargeAndEarnComponent/>

        <InfoBox>
          <h3 style={{color:"green"}}>Account Holder</h3>
          <AccountDetails>
            <p><strong>Name:</strong> {user?.first_name}</p>
            <p><strong>Account Number:</strong> {user?.account_number}</p>
            <p><strong>Account Type:</strong> {user?.account_type}</p>
          </AccountDetails>
        </InfoBox>

        <InfoBox>
          <p>Financial guidance to help with navigating the new normal. | Better Money Habits® has resources to help you navigate a changing world.</p>
          <p>Introducing Jiz Bank Life Plan® —an easy way to set and track short- and long‑term financial goals, get personalized advice when you need it most and more.</p>
        </InfoBox>

        <Footer>
          © 2025 Jaiz Bank™ | All Rights Reserved.
        </Footer>
      </Content>
      {transferType==='local transfer'&&<TransferModal transferType={transferType} onClose={()=>setTransferType('')}/>}
    {showSubscriptionModal&&<SubscriptionModal  onClose={()=>setShowSubscriptionModal(false)} userEmail={user.email} userId={userId} />}
    </Container>
    
  );
};

export default UserProfile2;

