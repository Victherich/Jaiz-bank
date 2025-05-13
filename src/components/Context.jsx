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
  {
    id: 1,
    name: 'Starter Plan',
    roi: '10% every day for 3 days',
    range: '$100 - $999',
    min: 100,
    max: 999,
    roi_percent: 10,
    interval_minutes: 1440,
    duration: 3
  }, 

  
{
  id: 2,
  name: 'Gold Plan',
  roi: '15% every day for 7 days',
  range: '$1000 - $4999',
  min: 1000,
  max: 4999,
  roi_percent: 15,
  interval_minutes: 1440,
  duration: 7
},

{
  id: 3,
  name: 'Diamond Plan',
  roi: '20% every day for 14 days',
  range: '$5000 - $9999',
  min: 5000,
  max: 9999,
  roi_percent: 20,
  interval_minutes: 1440,
  duration: 14
},

{
  id: 4,
  name: 'Master Plan',
  roi: '30% every day for 20 days',
  range: '$10000 - $19999',
  min: 10000,
  max: 19999,
  roi_percent: 30,
  interval_minutes: 1440,
  duration: 20
},

{
  id: 5,
  name: 'Metal Plan',
  roi: '50% every day for 30 days',
  range: '$20000 - $49999',
  min: 20000,
  max: 49999,
  roi_percent: 50,
  interval_minutes: 1440,
  duration: 30
},


{
  id: 6,
  name: 'Unlimited Plan',
  roi: '80% every 12 hours for 14 days',
  range: '$50000 - $1000000',
  min: 50000,
  max: 1000000,
  roi_percent: 80,
  interval_minutes: 720,  // 12 hours
  duration: 28             // 2 times/day × 14 days
},

// {
//       id: 7,
//       name: '🚀 Development plan',
//       roi: '5% every 2 minutes for 10 minutes',
//       range: '$100 - $999',
//       min: 100,
//       max: 999,
//       roi_percent: 5,
//       interval_minutes: 2,
//       duration: 5
//     }

  
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



// lie chat credentials

// email : contact@elitewealthglobal.com

// database 
// pw: elite@global
// User: “elitewealthgloba_db1     ”
// database: elitewealthgloba_db1



// TAWK CHAT CREDENTIALS
// PW: #Elite@global987
// EMAIL : contact@elitewealthglobal.com




