


import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import 'animate.css';  
import '../CSS/Header.css'
import { useSelector } from 'react-redux';
import logo from '../Images4/jaizlogo.png'
import styled from 'styled-components';
import Swal from 'sweetalert2';





const Button = styled.button`
  padding:10px 20px;
  border:none;
  background-color:#C4A207;
  cursor:pointer;
  font-weight:500;
  font-size:0.9rem;
  color:white;
  margin-top:20px;
  border-radius:50px;

  &:hover{
  background-color:#2C4B2F;
  }
`


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const userToken = useSelector(state=>state.userToken);
  const userInfo = useSelector(state=>state.userInfo)

 

  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const closeMenus = () => {
    setMenuOpen(false);
    setAboutDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);



  const alertComingSoon = ()=>{

Swal.fire({text:"Coming soon..."});
  }

  return (
    <header className="header">
     <div
  className="logo"
  onClick={() => navigate('/')}
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: 'green',
    width: '50px',
    height: '50px', /* Add this line */
  }}
>
  <img src={logo} alt="logo" style={{ width: '130%' }} />
  {/* <h3 style={{cursor:"pointer"}}>ELITE WEALTH GLOBAL </h3> */}
</div>

      <nav ref={navRef} className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <ul>
          <li>
            <a
              onClick={() => {
                navigate('/');
                closeMenus();
              }}
              className={location.pathname === "/" ? "active" : ""}
            >
              HOME
            </a>
          </li>


          {/* Regular nav items */}
          <li>
  <a
    onClick={() => {
      navigate('/aboutus');
      closeMenus();
    }}
    className={location.pathname === '/aboutus' ? 'active' : ''}
  >
    ABOUT
  </a>
</li>

<li>
  <a
    onClick={() => {
      // navigate('/services');
      alertComingSoon();
      closeMenus();
    }}
    className={location.pathname === '/services' ? 'active' : ''}
  >
    E-BUSINESS
  </a>
</li>



{/* <li>
  <a
    onClick={() => {
      navigate('/investments');
      closeMenus();
    }}
    className={location.pathname === '/investments' ? 'active' : ''}
  >
    INVESTMENTS
  </a>
</li> */}

{/* {!userToken && (
  <li>
    <a
      onClick={() => {
        navigate('/signup');
        closeMenus();
      }}
      className={location.pathname === '/signup' ? 'active' : ''}
    >
      SIGNUP
    </a>
  </li>
)} */}

{/* <li>
  <a
    onClick={() => {
      navigate(userToken ? `/userdashboard` : '/login');
      closeMenus();
    }}
    className={
      location.pathname === (userToken ? `/hi${userInfo?.name?.slice(0,3)}` : '/login')
        ? 'active'
        : ''
    }
  >
    {userToken ? `👤 Hi ${userInfo?.username?.toUpperCase()}` : 'ACCOUNT'}
  </a>
</li> */}

<li>
  <a
    onClick={() => {
      navigate('/contactus');
      closeMenus();
    }}
    className={location.pathname === '/contactus' ? 'active' : ''}
  >
    CONTACT US
  </a>
</li>

        </ul>
      </nav>




      <nav>
        <ul>
          <Button>

          
  <a
    onClick={() => {
      navigate(userToken ? `/userdashboard` : '/login');
      closeMenus();
    }}
    // className={
    //   location.pathname === (userToken ? `/hi${userInfo?.name?.slice(0,3)}` : '/login')
    //     ? 'active'
    //     : ''
    // }
  >
    {userToken ? `👤 Hi ${userInfo?.name?.toUpperCase().slice(0,3)}` : 'iBanking'}
  </a>
  </Button>

</ul>
      </nav>





      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
