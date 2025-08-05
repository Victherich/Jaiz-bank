
// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import p37 from '../Images4/p37.png'

// // Color Palette
// const colors = {
//   darkGreen: '#2C4B2F',
//   gold: '#C4A207',
//   white: '#FFFFFF',
//   lightGray: '#F0F0F0',
//   darkGray: '#333333',
// };

// // Keyframes for card entry animation
// const cardFadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// // Container for the entire slider component
// const SliderContainer = styled.div`
//   background-color: ${colors.lightGray};
//   padding: 60px 0;
//   overflow: hidden; /* Hides cards outside the view */
//   position: relative;
//   text-align: center;

//   @media (max-width: 768px) {
//     padding: 40px 0;
//   }
// `;

// // Title for the slider section
// const SliderTitle = styled.h2`
//   font-size: 2.8rem;
//   color: ${colors.darkGreen};
//   margin-bottom: 20px;
//   animation: ${cardFadeIn} 1s ease-out;

//   @media (max-width: 768px) {
//     font-size: 2.2rem;
//   }
// `;

// // Subtitle for the slider section
// const SliderSubtitle = styled.p`
//   font-size: 1.1rem;
//   color: ${colors.darkGray};
//   margin-bottom: 40px;
//   animation: ${cardFadeIn} 1s ease-out 0.2s backwards;
// `;

// // Wrapper for the actual sliding track
// const SliderWrapper = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   overflow: hidden; /* Ensures only visible cards are shown */
//   position: relative;
// `;

// // The track containing all the cards
// const SliderTrack = styled.div`
//   display: flex;
//   transition: transform 0.5s ease-in-out; /* Smooth sliding transition */
//   padding: 20px 0; /* Padding for card shadows */
//   justify-content: center; /* Center cards if not enough to fill */

//   /* Media queries for responsive card display */
//   @media (min-width: 1024px) {
//     /* Show 3 cards on large screens */
//     padding: 20px;
//   }
//   @media (max-width: 1023px) and (min-width: 768px) {
//     /* Show 2 cards on medium screens */
//     padding: 20px;
//   }
//   @media (max-width: 767px) {
//     /* Show 1 card on small screens */
//     padding: 10px;
//   }
// `;

// // Individual Recharge Card styling
// const RechargeCard = styled.div`
//   background-color: ${colors.white};
//   border-radius: 15px;
//   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
//   padding: 30px;
//   margin: 0 15px; /* Spacing between cards */
//   text-align: center;
//   flex-shrink: 0; /* Prevents cards from shrinking */
//   width: 300px; /* Fixed width for each card */
//   animation: ${cardFadeIn} 1s ease-out forwards;
//   transition: transform 0.3s ease; /* Hover effect */

//   &:hover {
//     transform: translateY(-10px);
//   }

//   /* Responsive sizing for cards */
//   @media (min-width: 1024px) {
//     width: calc((100% / 3) - 30px); /* 3 cards per row, accounting for margin */
//   }
//   @media (max-width: 1023px) and (min-width: 768px) {
//     width: calc((100% / 2) - 30px); /* 2 cards per row */
//   }
//   @media (max-width: 767px) {
//     width: calc(100% - 30px); /* 1 card per row */
//   }
// `;

// // Network logo on the card
// const NetworkLogo = styled.img`
//   width: 80px;
//   height: 80px;
//   margin-bottom: 20px;
//   border-radius: 50%;
//   object-fit: contain;
//   border: 2px solid ${colors.gold};
//   padding: 5px;
// `;

// // Recharge value text
// const RechargeValue = styled.h3`
//   font-size: 2.5rem;
//   color: ${colors.darkGreen};
//   margin-bottom: 10px;
// `;

// // Description text
// const CardDescription = styled.p`
//   font-size: 1rem;
//   color: #666;
//   margin-bottom: 20px;
// `;

// // Call to action button on the card
// const CardButton = styled.button`
//   background-color: ${colors.gold};
//   color: ${colors.white};
//   padding: 12px 25px;
//   font-size: 0.95rem;
//   font-weight: bold;
//   border: none;
//   border-radius: 30px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #A28A06;
//   }
// `;

// // Navigation buttons (conceptual, requires JS logic for actual sliding)
// const NavButton = styled.button`
//   background-color: rgba(0, 0, 0, 0.5);
//   color: ${colors.white};
//   border: none;
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   font-size: 1.5rem;
//   cursor: pointer;
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   z-index: 10;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.7);
//   }

//   &.left {
//     left: 20px;
//   }

//   &.right {
//     right: 20px;
//   }

//   @media (max-width: 768px) {
//     width: 40px;
//     height: 40px;
//     font-size: 1.2rem;
//     &.left {
//       left: 10px;
//     }
//     &.right {
//       right: 10px;
//     }
//   }
// `;

// // Main RechargeCardSlider Component
// const RechargeCardSlider = () => {
//   // In a real slider, you'd manage `currentSlide` state and update `transform` on SliderTrack
//   // For this example, we're just displaying the cards.

//   const rechargeCards = [
//     {
//       id: 1,
//       network: 'MTN',
//       logo: 'https://via.placeholder.com/80?text=MTN',
//       value: '₦500',
//       description: 'Get bonus data on this recharge!',
//     },
//     {
//       id: 2,
//       network: 'Glo',
//       logo: 'https://via.placeholder.com/80?text=Glo',
//       value: '₦1,000',
//       description: 'Enjoy extra airtime for calls.',
//     },
//     {
//       id: 3,
//       network: 'Airtel',
//       logo: 'https://via.placeholder.com/80?text=Airtel',
//       value: '₦2,000',
//       description: 'Unlock exclusive loyalty points.',
//     },
//     {
//       id: 4,
//       network: '9mobile',
//       logo: 'https://via.placeholder.com/80?text=9Mobile',
//       value: '₦5,000',
//       description: 'Premium cashback offer.',
//     },
//     {
//       id: 5,
//       network: 'MTN',
//       logo: 'https://via.placeholder.com/80?text=MTN',
//       value: '₦10,000',
//       description: 'Mega data and airtime bundle.',
//     },
//   ];

//   return (
//     <SliderContainer>
//       <SliderTitle>Available Recharge Cards</SliderTitle>
//       <SliderSubtitle>Choose your preferred network and value to start earning rewards!</SliderSubtitle>
      
//       <SliderWrapper>
//         {/* These buttons are visual only. You'd add onClick handlers to change `transform` on SliderTrack */}
//         <NavButton className="left">{'<'}</NavButton>
//         <NavButton className="right">{'>'}</NavButton>

//         <SliderTrack>
//           {rechargeCards.map((card) => (
//             <RechargeCard key={card.id}>
//               <NetworkLogo src={card.logo} alt={`${card.network} Logo`} />
//               <RechargeValue>{card.value}</RechargeValue>
//               <CardDescription>{card.description}</CardDescription>
//               <CardButton>Recharge {card.value}</CardButton>
//             </RechargeCard>
//           ))}
//         </SliderTrack>
//       </SliderWrapper>
//     </SliderContainer>
//   );
// };

// export default RechargeCardSlider;



// import React from 'react';
// import styled, { keyframes } from 'styled-components';

// // Color Palette
// const colors = {
//   darkGreen: '#2C4B2F',
//   gold: '#C4A207',
//   white: '#FFFFFF',
//   lightGray: '#F0F0F0',
//   darkGray: '#333333',
// };

// // Keyframes for card entry animation
// const cardFadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// // Keyframes for the continuous sliding animation
// const slide = keyframes`
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// `;

// // Container for the entire slider component
// const SliderContainer = styled.div`
//   background-color: ${colors.lightGray};
//   padding: 60px 0;
//   overflow: hidden; /* Hides cards outside the view */
//   position: relative;
//   text-align: center;

//   @media (max-width: 768px) {
//     padding: 40px 0;
//   }
// `;

// // Title for the slider section
// const SliderTitle = styled.h2`
//   font-size: 2.8rem;
//   color: ${colors.darkGreen};
//   margin-bottom: 20px;
//   animation: ${cardFadeIn} 1s ease-out;

//   @media (max-width: 768px) {
//     font-size: 2.2rem;
//   }
// `;

// // Subtitle for the slider section
// const SliderSubtitle = styled.p`
//   font-size: 1.1rem;
//   color: ${colors.darkGray};
//   margin-bottom: 40px;
//   animation: ${cardFadeIn} 1s ease-out 0.2s backwards;
// `;

// // Wrapper for the actual sliding track
// const SliderWrapper = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   overflow: hidden; /* Ensures only visible cards are shown */
//   position: relative;
  
//   /* Add a subtle pause on hover */
//   &:hover > div {
//     animation-play-state: paused;
//   }
// `;

// // The track containing all the cards
// const SliderTrack = styled.div`
//   display: flex;
//   padding: 20px 0;
//   animation: ${slide} 20s linear infinite; /* Apply the continuous slide animation here */
//   width: calc(200% + 60px); /* Double the width to accommodate duplicated cards */
// `;

// // Individual Recharge Card styling
// const RechargeCard = styled.div`
//   background-color: ${colors.white};
//   border-radius: 15px;
//   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
//   padding: 30px;
//   margin: 0 15px;
//   text-align: center;
// //   flex-shrink: 0;
//   width: 200px;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: translateY(-10px);
//   }

//   @media (min-width: 1024px) {
//     width: calc((100% / 3) - 30px);
//   }
//   @media (max-width: 1023px) and (min-width: 768px) {
//     width: calc((100% / 2) - 30px);
//   }
//   @media (max-width: 767px) {
//     width: calc(100% - 30px);
//   }
// `;

// // Network logo on the card
// const NetworkLogo = styled.img`
//   width: 80px;
//   height: 80px;
//   margin-bottom: 20px;
//   border-radius: 50%;
//   object-fit: contain;
//   border: 2px solid ${colors.gold};
//   padding: 5px;
// `;

// // Recharge value text
// const RechargeValue = styled.h3`
//   font-size: 2.5rem;
//   color: ${colors.darkGreen};
//   margin-bottom: 10px;
// `;

// // Description text
// const CardDescription = styled.p`
//   font-size: 1rem;
//   color: #666;
//   margin-bottom: 20px;
// `;

// // Call to action button on the card
// const CardButton = styled.button`
//   background-color: ${colors.gold};
//   color: ${colors.white};
//   padding: 12px 25px;
//   font-size: 0.95rem;
//   font-weight: bold;
//   border: none;
//   border-radius: 30px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #A28A06;
//   }
// `;

// const RechargeCardSlider = () => {
//   const rechargeCards = [
//     {
//       id: 1,
//       network: 'MTN',
//       logo: 'https://via.placeholder.com/80?text=MTN',
//       value: '₦500',
//       description: 'Get bonus data on this recharge!',
//     },
//     {
//       id: 2,
//       network: 'Glo',
//       logo: 'https://via.placeholder.com/80?text=Glo',
//       value: '₦1,000',
//       description: 'Enjoy extra airtime for calls.',
//     },
//     {
//       id: 3,
//       network: 'Airtel',
//       logo: 'https://via.placeholder.com/80?text=Airtel',
//       description: 'Unlock exclusive loyalty points.',
//     },
//     {
//       id: 4,
//       network: '9mobile',
//       logo: 'https://via.placeholder.com/80?text=9Mobile',
//       value: '₦5,000',
//       description: 'Premium cashback offer.',
//     },
//     {
//       id: 5,
//       network: 'MTN',
//       logo: 'https://via.placeholder.com/80?text=MTN',
//       value: '₦10,000',
//       description: 'Mega data and airtime bundle.',
//     },
//   ];

//   // We duplicate the cards to create a seamless loop
//   const duplicatedCards = [...rechargeCards, ...rechargeCards];

//   return (
//     <SliderContainer>
//       <SliderTitle>Available Recharge Cards</SliderTitle>
//       <SliderSubtitle>Choose your preferred network and value to start earning rewards!</SliderSubtitle>
      
//       <SliderWrapper>
//         <SliderTrack>
//           {duplicatedCards.map((card, index) => (
//             <RechargeCard key={index}>
//               <NetworkLogo src={card.logo} alt={`${card.network} Logo`} />
//               <RechargeValue>{card.value}</RechargeValue>
//               <CardDescription>{card.description}</CardDescription>
//               <CardButton>Recharge {card.value}</CardButton>
//             </RechargeCard>
//           ))}
//         </SliderTrack>
//       </SliderWrapper>
//     </SliderContainer>
//   );
// };

// export default RechargeCardSlider;





import React from 'react';
import styled, { keyframes } from 'styled-components';
import p37 from '../Images4/p37.png'
import p39 from '../Images4/p39.png'
import p40 from '../Images4/p40.png'
import p41 from '../Images4/p41.png'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// Color Palette
const colors = {
  darkGreen: '#2C4B2F',
  gold: '#C4A207',
  white: '#FFFFFF',
  lightGray: '#F0F0F0',
  darkGray: '#333333',
};

// Keyframes for card entry animation
const cardFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Keyframes for the continuous sliding animation
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    /* Translate by the width of all the original cards and their margins */
    transform: translateX(calc(-205px * 5)); /* 205px is the card width + margin */
  }
`;

// Container for the entire slider component
const SliderContainer = styled.div`
  background-color: ${colors.lightGray};
  padding: 60px 0;
  overflow: hidden;
//   position: relative;
  text-align: center;
//   width:100%;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

// Title for the slider section
const SliderTitle = styled.h2`
  font-size: 2.8rem;
  color: ${colors.darkGreen};
  margin-bottom: 20px;
  animation: ${cardFadeIn} 1s ease-out;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

// Subtitle for the slider section
const SliderSubtitle = styled.p`
  font-size: 1.1rem;
  color: ${colors.darkGray};
  margin-bottom: 40px;
  animation: ${cardFadeIn} 1s ease-out 0.2s backwards;
`;

// Wrapper for the actual sliding track
const SliderWrapper = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  
  /* Add a subtle pause on hover */
//   &:hover > div {
//     animation-play-state: paused;
//   }
`;

// The track containing all the cards
const SliderTrack = styled.div`
  display: flex;
  padding: 20px 20px;
//   width: fit-content;
  animation: ${scroll} 25s linear infinite; /* Apply the continuous slide animation */
`;

// Individual Recharge Card styling
const RechargeCard = styled.div`
  background-color: ${colors.white};
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 0 15px;
  text-align: center;
//   width: 200px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  /* Responsive sizing for cards, ensures they all fit correctly */
  @media (max-width: 767px) {
    width: 250px; /* Adjust card size for mobile */
  }
`;

// Network logo on the card
const NetworkLogo = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  border-radius: 50%;
  object-fit: contain;
  border: 2px solid ${colors.gold};
  padding: 5px;
`;

// Recharge value text
const RechargeValue = styled.h3`
  font-size: 2.5rem;
  color: ${colors.darkGreen};
  margin-bottom: 10px;
`;

// Description text
const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
`;

// Call to action button on the card
const CardButton = styled.button`
  background-color: ${colors.gold};
  color: ${colors.white};
  padding: 12px 25px;
  font-size: 0.95rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #A28A06;
  }
`;

const RechargeCardSlider = () => {

const navigate = useNavigate();
const location = useLocation();


const handleClick = ()=>{
    if(location.pathname==='/userdashboard'){
        Swal.fire({title:"coming soon...", icon:"info", timer:2000, showConfirmButton:false});
    }else{
 navigate('/login')
    }
   
}


  const rechargeCards = [
    {
      id: 1,
      network: 'MTN',
      logo: p37,
      value: '₦500',
      description: 'Get bonus data on this recharge!',
    },
    {
      id: 2,
      network: 'Glo',
      logo: p39,
      value: '₦1,000',
      description: 'Enjoy extra airtime for calls.',
    },
    {
      id: 3,
      network: 'Airtel',
      logo: p40,
      value: '₦2,000',
      description: 'Unlock exclusive loyalty points.',
    },
    {
      id: 4,
      network: '9mobile',
      logo: p41,
      value: '₦5,000',
      description: 'Premium cashback offer.',
    },
    {
      id: 5,
      network: 'MTN',
      logo: p37,
      value: '₦10,000',
      description: 'Mega data and airtime bundle.',
    },
  ];

  // We duplicate the cards multiple times to create a seamless, non-stopping loop
  const duplicatedCards = [...rechargeCards, ...rechargeCards, ...rechargeCards, ...rechargeCards];

  return (
    <SliderContainer>
      <SliderTitle>Available Recharge Cards</SliderTitle>
      <SliderSubtitle>Choose your preferred network and value to start earning rewards!</SliderSubtitle>
      
      <SliderWrapper>
        <SliderTrack>
          {duplicatedCards.map((card, index) => (
            <RechargeCard key={index}>
              <NetworkLogo src={card.logo} alt={`${card.network} Logo`} />
              <RechargeValue>{card.value}</RechargeValue>
              <CardDescription>{card.description}</CardDescription>
              <CardButton onClick={handleClick}>Recharge {card.value}</CardButton>
            </RechargeCard>
          ))}
        </SliderTrack>
      </SliderWrapper>
    </SliderContainer>
  );
};

export default RechargeCardSlider;
