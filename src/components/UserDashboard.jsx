

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaMoneyBill, FaSignOutAlt, FaTimes, FaUser, FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2';
import { userLogout } from '../Features/Slice';



import { useLocation } from 'react-router-dom';
import axios from 'axios';
import UserProfile2 from './UserProfile2';
import UserTransactions from './UserTransactions';



// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  padding-top:80px;
`;

const Sidebar = styled.div`

  background:#e6ffe6;
  color: white;
  width: ${(props) => (props.isOpen ? '250px' : '0')};
  overflow: hidden;
  transition: width 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  min-height:100vh;
  z-index:7;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (min-width: 768px) {
    width: 250px;
    position: static;
    transition: none;
  }
`;

const SidebarHeader = styled.div`
  padding: 20px;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color:green;

`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SidebarMenuItem = styled.li`
  padding: 15px 20px;
  cursor: pointer;
  background: ${(props) => (props.active ? 'green;' : 'transparent')};
  color: ${(props)=>(props.active ? 'white':"#000050")};


  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  transition: all 0.3s ease-in-out;

  &:hover {
 
    background:green;
  }
`;

const ContentArea = styled.div`
width:100%;
  flex-grow: 1;
  margin-left: ${(props) => (props.isOpen ? '250px' : '0')};
  transition: margin-left 0.3s ease-in-out;
  // padding: 20px;

  @media (min-width: 768px) {
    // margin-left: 250px;
  }
`;

const Hamburger = styled.div`
  position: fixed;
  top: 70px;
  left: 20px;
  background: green;
  color: white;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 9;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 6;
`;

// Content Components
const HomeContent = () => <h1 style={{color:"purple"}}>Home Content</h1>;
const ProfileContent = () => <h1>Profile Content</h1>;
const SettingsContent = () => <h1>Settings Content</h1>;
const HelpContent = () => <h1>Help Content</h1>;

// Main Component
const UserDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('profile');
  const userInfo = useSelector(state=>state.userInfo)
  const location = useLocation();
  const [user, setUser]=useState({});
  const userId = userInfo.id
  const [error, setError]=useState('')


  console.log(user)
  
  
  console.log(userInfo.id)

  const dispatch = useDispatch();


  
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      text: "You will need to log in again to access your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the logout actions
        dispatch(userLogout());
        Swal.fire({
          title: "Logged Out",
          text: "You have been logged out successfully.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
  
      
      }
    });
  };
  



  const handleMenuClick = (menu) => {
    window.scroll(0,0);
    setActiveMenu(menu);
    setMenuOpen(false); // Close menu on mobile when a menu item is clicked
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenuOnOutsideClick = () => setMenuOpen(false);

  // Map menu options to content
  const renderContent = () => {
    switch (activeMenu) {
      case 'profile':
        return <UserProfile2 userId={userInfo.id} handleMenuClick={handleMenuClick}/>;
      
 case 'transactions':
        return <UserTransactions/>;
    
  
      default:
        return <h1 style={{color:"green",textAlign:"center",width:"100%"}}>Welcome to your Dashboard</h1>;
    }
  };

// get studen info


const getUserInfo = ()=>{
    if (!userId) return;

    axios.get(`https://jizbankplc.com/api/get_user_by_id.php?id=${userId}`)
      .then(res => {
        if (res.data.success) {
          setUser(res.data.user);
  
        suspendUI();
        
        } else {
          setError(res.data.error);
        }
      })
      .catch(() => {
        setError('Failed to fetch admin details.');
      });

    }

    useEffect(() => {
      const id = setInterval(() => {
        getUserInfo();
      }, 10000);

      return ()=>clearInterval(id)
  }, []);

  useEffect(()=>{
    getUserInfo();
  },[userId])



  // useEffect(()=>{
  //   if(user?.suspended){
  //     Swal.fire({
  //       icon:"info",
  //       text:"Your account has been suspended, Kindly Contact our support.",
  //       allowOutsideClick:false,
  //       showConfirmButton:false,
  //     })
  //   }
  // },[user])


// run suspended ui
  const suspendUI = ()=>{
    if(location.pathname==='/userdashboard'&&user?.suspended==="1"){
        Swal.fire({
            icon:"warning",
            title:"Suspended",
            text:"You have been suspended, kindly contact the admin.",
            allowOutsideClick:false,
            confirmButtonText:"Logout",
        }).then((result)=>{if(result.isConfirmed){
            dispatch(userLogout());
        }})
    }

  }




if(user?.suspended){
  return <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"300px", flexDirection:"column"}}><h2>Your Account has been suspended. Please Contact our support team</h2>
  <button onClick={()=>dispatch(userLogout())} style={{padding:"10px", cursor:"pointer", border:"none", backgroundColor:"#000050", color:"white"}}>Logout</button></div>
  
}
  



  return (
    <DashboardContainer>
      <Hamburger onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Overlay isOpen={menuOpen} onClick={closeMenuOnOutsideClick} />
      <Sidebar isOpen={menuOpen}>
        <SidebarHeader>User Dashboard</SidebarHeader>
        <SidebarMenu>
       
          <SidebarMenuItem
          style={{fontSize:"0.9rem"}}
            active={activeMenu === 'profile'}
            onClick={() => handleMenuClick('profile')}
          >
          <FaUserCircle/>  Hi, {userInfo?.name.toUpperCase().slice(0,3)}
          </SidebarMenuItem>

<SidebarMenuItem
          style={{fontSize:"0.9rem"}}
            active={activeMenu === 'transactions'}
            onClick={() => handleMenuClick('transactions')}
          >
          <FaMoneyBill/>  Transfers
          </SidebarMenuItem>
        

          
          <SidebarMenuItem
            onClick={handleLogout}
          >
            <FaSignOutAlt/>
            Logout
          </SidebarMenuItem>
        </SidebarMenu>
      </Sidebar>
      <ContentArea isOpen={menuOpen}>{renderContent()}</ContentArea>
    </DashboardContainer>
  );
};

export default UserDashboard;

