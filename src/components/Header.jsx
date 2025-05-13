
// import React, { useState, useEffect, useRef } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from "../Images/logo2.png";
// import 'animate.css';  
// import '../CSS/Header.css'

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const navRef = useRef(null);
//   const logoRef = useRef(null);
//   const navItemsRef = useRef([]);
//   const hamburgerRef = useRef(null);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [menuOpen]);

//   return (
//     <header className="header">
//       <div className="logo" ref={logoRef}>
//         <img src={logo} alt="logo" onClick={()=>navigate('/')}/>
//       </div>

//       <nav ref={navRef} className={menuOpen ? "nav-menu active" : "nav-menu"}>
//         <ul>
//           {['Home','About Us', 'Academics','Admissions', 'Gallery','Application', 'Portal', 'Contact Us'].map((text, index) => {
//             const path = text === "Home" ? "/" : `/${text.toLowerCase().replace(' ', '')}`;
//             return (
//               <li key={index} ref={el => navItemsRef.current[index] = el}>
//                 <a 
//                   onClick={() => {
//                     navigate(path);
//                     setMenuOpen(false);
//                   }} 
//                   className={location.pathname === path ? "active" : ""}
//                 >
//                   {text}
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>

//       <div className="hamburger" onClick={toggleMenu} ref={hamburgerRef}>
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </div>
//     </header>
//   );
// };

// export default Header;




import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from "../Images/logo2.png";
import 'animate.css';  
import '../CSS/Header.css'
import { useSelector } from 'react-redux';
import logo from '../Images2/logo3.jpeg'

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

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')} style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>
        <img src={logo} alt='logo' style={{width:"50px", borderRadius:"50%"}}/>
        <h3 style={{cursor:"pointer"}}>ELITE WEALTH GLOBAL </h3>
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
    ABOUT US
  </a>
</li>

<li>
  <a
    onClick={() => {
      navigate('/services');
      closeMenus();
    }}
    className={location.pathname === '/services' ? 'active' : ''}
  >
    SERVICES
  </a>
</li>

<li>
  <a
    onClick={() => {
      navigate('/apply_for_loan');
      closeMenus();
    }}
    className={location.pathname === '/apply_for_loan' ? 'active' : ''}
  >
    APPLY_FOR_LOAN
  </a>
</li>

<li>
  <a
    onClick={() => {
      navigate('/investments');
      closeMenus();
    }}
    className={location.pathname === '/investments' ? 'active' : ''}
  >
    INVESTMENTS
  </a>
</li>

{!userToken && (
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
)}

<li>
  <a
    onClick={() => {
      navigate(userToken ? `/userdashboard` : '/login');
      closeMenus();
    }}
    className={
      location.pathname === (userToken ? `/hi${userInfo?.username}` : '/login')
        ? 'active'
        : ''
    }
  >
    {userToken ? `👤 Hi ${userInfo?.username?.toUpperCase()}` : 'LOGIN'}
  </a>
</li>

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

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
