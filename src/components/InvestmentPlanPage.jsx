
// import React from 'react';
// import styled from 'styled-components';
// import { FaCoins, FaChartLine, FaRocket } from 'react-icons/fa';

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
//     duration: 20,
//   },
//   {
//     id: 2,
//     name: '🚀 Platinum Plan',
//     roi: '15% every hour for 10 hours',
//     range: '$10,000 - $19,999',
//     min: 10000,
//     max: 19999,
//     roi_percent: 15,
//     interval_minutes: 60,
//     duration: 10,
//   },
//   {
//     id: 3,
//     name: '🔥 Gold Plan',
//     roi: '20% every 2 hours for 5 cycles',
//     range: '$20,000 - $50,000',
//     min: 20000,
//     max: 50000,
//     roi_percent: 20,
//     interval_minutes: 120,
//     duration: 5,
//   },
// ];

// const InvestmentPlans = () => {
//   return (
//     <Container>
//       <Hero>
//         <h1>Choose Your Path to Wealth</h1>
//         <p>
//           "The best investment you can make is in yourself." – Warren Buffett<br />
//           Empower your future with plans tailored to grow your wealth, one smart move at a time.
//         </p>
//         <HeroIcons>
//           <FaCoins />
//           <FaChartLine />
//           <FaRocket />
//         </HeroIcons>
//       </Hero>

//       <PlanGrid>
//         {plans.map(plan => (
//           <PlanCard key={plan.id}>
//             <PlanTitle>{plan.name}</PlanTitle>
//             <PlanDetail><strong>Return:</strong> {plan.roi}</PlanDetail>
//             <PlanDetail><strong>Range:</strong> {plan.range}</PlanDetail>
//             <PlanDetail><strong>Min Invest:</strong> ${plan.min}</PlanDetail>
//             <PlanDetail><strong>Max Invest:</strong> ${plan.max}</PlanDetail>
//             <PlanDetail><strong>Interval:</strong> {plan.interval_minutes} mins</PlanDetail>
//             <PlanDetail><strong>Cycles:</strong> {plan.duration}</PlanDetail>
//             <InvestButton>Invest Now</InvestButton>
//           </PlanCard>
//         ))}
//       </PlanGrid>
//     </Container>
//   );
// };

// export default InvestmentPlans;

// // Styled Components
// const Container = styled.div`
//   padding: 2rem;
//   background: #f0f4f8;
//   font-family: 'Segoe UI', sans-serif;
// `;

// const Hero = styled.div`
//   text-align: center;
//   padding: 3rem 1rem;
//   background: linear-gradient(135deg, #1d3557, #457b9d);
//   color: white;
//   border-radius: 1rem;
//   margin-bottom: 2rem;

//   h1 {
//     font-size: 2.5rem;
//     margin-bottom: 1rem;
//   }

//   p {
//     font-size: 1.2rem;
//     line-height: 1.8;
//     max-width: 700px;
//     margin: auto;
//   }
// `;

// const HeroIcons = styled.div`
//   margin-top: 1.5rem;
//   font-size: 2rem;
//   display: flex;
//   justify-content: center;
//   gap: 1.5rem;
// `;

// const PlanGrid = styled.div`
//   display: grid;
//   gap: 2rem;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
// `;

// const PlanCard = styled.div`
//   background: white;
//   padding: 1.5rem;
//   border-radius: 1rem;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

// const PlanTitle = styled.h2`
//   font-size: 1.4rem;
//   color: #1d3557;
//   margin-bottom: 1rem;
// `;

// const PlanDetail = styled.p`
//   font-size: 1rem;
//   margin: 0.3rem 0;
// `;

// const InvestButton = styled.button`
//   margin-top: 1rem;
//   width: 100%;
//   padding: 0.75rem;
//   border: none;
//   background: #1d3557;
//   color: white;
//   font-size: 1rem;
//   border-radius: 0.5rem;
//   cursor: pointer;
//   transition: background 0.3s;

//   &:hover {
//     background: #457b9d;
//   }
// `;




import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaCoins, FaChartLine, FaRocket, FaBullseye, FaPiggyBank, FaFire } from 'react-icons/fa';
import { Context } from './Context';
import PlanPage from './PlanPage';
import mi33 from '../Images3/mi33.jpg'
import mi34 from '../Images3/mi34.jpg'
import mi36 from '../Images3/mi36.jpg'



const InvestmentPlans = () => {
    const {plans} =useContext(Context);

  return (
    <Container>
      <Hero>
        <h1>Choose Your Path to Wealth</h1>
        <p>
          "The best investment you can make is in yourself." – Warren Buffett<br />
          Empower your future with plans tailored to grow your wealth, one smart move at a time.
        </p>
        <HeroIcons>
          <FaCoins />
          <FaChartLine />
          <FaRocket />
        </HeroIcons>
      </Hero>

      <ImagesRow>
        <img src={mi33} alt="success" />
        <img src={mi34} alt="investment" />
        <img src={mi36} alt="wealth" />
      </ImagesRow>

      <Section>
        <h2>Build Your Legacy</h2>
        <p>
          Whether you're starting small or going big, each plan is crafted to help you scale steadily. These are not just investments; they are stepping stones to financial freedom.
        </p>
      </Section>
<PlanPage/>
      {/* <PlanGrid>
        {plans.map(plan => (
          <PlanCard key={plan.id}>
            <PlanTitle>{plan.name}</PlanTitle>
            <PlanDetail><strong>Return:</strong> {plan.roi}</PlanDetail>
            <PlanDetail><strong>Range:</strong> {plan.range}</PlanDetail>
            <PlanDetail><strong>Min Invest:</strong> ${plan.min}</PlanDetail>
            <PlanDetail><strong>Max Invest:</strong> ${plan.max}</PlanDetail>
            <PlanDetail><strong>Interval:</strong> {plan.interval_minutes} mins</PlanDetail>
            <PlanDetail><strong>Cycles:</strong> {plan.duration}</PlanDetail>
            <InvestButton>Invest Now</InvestButton>
          </PlanCard>
        ))}
      </PlanGrid> */}

      <Motivation>
        <h3>📌 Keep This In Mind</h3>
        <ul>
          <li>💡 Every dollar invested today is a step closer to your dream life.</li>
          <li>⏳ Time in the market beats timing the market.</li>
          <li>🚀 Compounding is the 8th wonder of the world — use it wisely.</li>
        </ul>
      </Motivation>
    </Container>
  );
};

export default InvestmentPlans;




const Container = styled.div`
  padding: 50px 5px;
  background: #f0f4f8;
  font-family: 'Segoe UI', sans-serif;
`;

const Hero = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #1d3557, #457b9d);
  color: white;
  border-radius: 1rem;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    max-width: 700px;
    margin: auto;
  }
`;

const HeroIcons = styled.div`
  margin-top: 1.5rem;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const ImagesRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;

  img {
    width: 100%;
    max-width: 380px;
    border-radius: 1rem;
    object-fit: cover;
  }
`;

const Section = styled.div`
  text-align: center;
  margin: 2rem auto;
  max-width: 800px;

  h2 {
    font-size: 2rem;
    color: #1d3557;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #333;
  }
`;

const PlanGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const PlanCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PlanTitle = styled.h2`
  font-size: 1.4rem;
  color: #1d3557;
  margin-bottom: 1rem;
`;

const PlanDetail = styled.p`
  font-size: 1rem;
  margin: 0.3rem 0;
`;

const InvestButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 0.75rem;
  border: none;
  background: #1d3557;
  color: white;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #457b9d;
  }
`;

const Motivation = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: #ffffff;
  border-left: 5px solid #1d3557;
  border-radius: 0.5rem;

  h3 {
    font-size: 1.5rem;
    color: #1d3557;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    font-size: 1rem;

    li {
      margin-bottom: 0.75rem;
    }
  }
`;

