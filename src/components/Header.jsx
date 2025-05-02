
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
import logo from "../Images/logo2.png";
import 'animate.css';  
import '../CSS/Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
      <div className="logo" onClick={() => navigate('/')}>
        <h3 style={{cursor:"pointer"}}>🌐 ELITE WEALTH GLOBAL </h3>
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
          {['ABOUT US','SERVICES','APPLY_FOR_LOAN','INVESTMENTS',  'CONTACT US'].map((text, index) => {
            const path = `/${text.toLowerCase().replace(' ', '')}`;
            return (
              <li key={index}>
                <a
                  onClick={() => {
                    navigate(path);
                    closeMenus();
                  }}
                  className={location.pathname === path ? "active" : ""}
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
