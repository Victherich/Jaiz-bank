import React, { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext();

const ContextProvider = ({children}) => {
    const [adminToken,setAdminToken]=useState(null)
    const [admin,setAdmin]=useState(null)
    const [adminMenu,setAdminMenu]=useState(0) 
    const [trackingID, setTrackingID] = useState('');
    const check = ''




    







const color1 = "#000050"



// const plans = [
//   {
//     id: 1,
//     name: '💎 Diamond Plan',
//     roi: '10% every hour for 20 hours',
//     range: '$5,000 - $9,999',
//     min: 5000,
//     max: 9999,
//     roi_percent: 10,
//     interval_minutes: 60,
//     duration: 20
//   },
  
//   {
//     id: 2,
//     name: '🎓 Master Plan',
//     roi: '30% every hour for 20 hours',
//     range: '$10,000 - $19,999',
//     min: 10000,
//     max: 19999,
//     roi_percent: 30,         // Corrected from 15
//     interval_minutes: 60,
//     duration: 20             // Corrected from 24
//   },  
//   {
//     id: 3,
//     name: '🛡️ Metal Plan',
//     roi: '50% every hour for 20 hours',
//     range: '$20,000 and above',
//     min: 20000,
//     max: Infinity,
//     roi_percent: 50,
//     interval_minutes: 60,
//     duration: 20
//   },  
//   {
//     id: 4,
//     name: '🚀 Development plan',
//     roi: '5% every 2 minutes for 10 minutes',
//     range: '$100 - $999',
//     min: 100,
//     max: 999,
//     roi_percent: 5,
//     interval_minutes: 2,
//     duration: 5
//   }
  
// ];



const plans = [

  //   {
  //   name: "test Plan",
  //   price: 42,
  //   currency:"$",
  //   duration: "10mins",
  //   features: [
  //     "Unlimited Local Transfers",
  //     "Priority Support",
  //     "Secure Encryption",
  //   ],
  // },
  {
    name: "Starter Transfer",
    price: 42,
    currency:"$",
    duration: "3 Months",
    features: [
      "Unlimited Local Transfers",
      "Priority Support",
      "Secure Encryption",
    ],
  },
  {
    name: "Pro Connect",
    price: 250,
    currency:"$",
    duration: "6 Months",
    features: [
      "Unlimited Global & Local Transfers",
      "Instant Processing",
      "Transfer History Archive",
      "Dedicated Support Line",
    ],
  },
  {
    name: "Elite Access",
    price: 500,
    currency:"$",
    duration: "1 Year",
    features: [
      "All Pro Connect Features",
      "Discounted FX Rates",
      "Early Access to New Features",
      "Annual Financial Summary Report",
    ],
  },
];

  return (
    <Context.Provider value={{adminToken,setAdminToken,admin,setAdmin,adminMenu,
    setAdminMenu,trackingID,setTrackingID,
       color1, plans}}>

        {children}
    </Context.Provider>
      

  )
}

export default ContextProvider




// this poirject is making use of 2 databases


// database for testing
// pw: Efe@package9
// User “skylinkteamb_db1” was added to the database “skylinkteamb_db1”.

//database 2 for testing
//User “skylinkteamb_db2” was added to the database “skylinkteamb_db2”.
// pw: Efe@package9





// main database 1
// pw: Dave@jiz2025
// User “bhtzcsxd_bhtzcsxd” was added to the database “bhtzcsxd_db1”..

// main database 2
// pw: Dave@jiz2025
// User “bhtzcsxd_bhtzcsxd” was added to the database “bhtzcsxd_db2”.


// testing email
// contact@elexdonhost.com.ng 
// website@ehost