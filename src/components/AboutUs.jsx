
// import React, { useEffect } from 'react';
// import styled from 'styled-components';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { FaGlobe, FaUsers, FaChartLine } from 'react-icons/fa';
// import it from '../Images2/it.jpg'
// import CompanyAbout2 from './CompanyAbout2';
// import ActiveOwners from './ActiveOwners';
// import Team from './Team';
// import mi1 from '../Images3/mi1.jpg';
// import mi2 from '../Images3/mi2.jpg';
// import mi3 from '../Images3/mi3.jpg';
// import mi4 from '../Images3/mi4.jpg';
// import mi5 from '../Images3/mi5.jpg';
// import mi6 from '../Images3/mi6.jpg';
// import mi7 from '../Images3/mi7.jpg';
// import mi8 from '../Images3/mi8.jpg';
// import mi9 from '../Images3/mi9.jpg';
// import mi10 from '../Images3/mi10.jpg';


// const Container = styled.div`
//   background: #f4f7f9;
//   padding: 60px 5px;
//   font-family: 'Segoe UI', sans-serif;
//   color: #222;
// `;

// const Wrapper = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const Heading = styled.h1`
//   font-size: 2.8rem;
//   text-align: center;
//   margin-bottom: 20px;
//   color: #2b3d51;
// `;

// const SubHeading = styled.h2`
//   font-size: 1.6rem;
//   text-align: center;
//   margin-bottom: 50px;
//   color: #5a6d85;
// `;

// const FlexSection = styled.section`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 40px;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 60px;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const Image = styled.img`
//   width: 50%;
//   border-radius: 12px;
//   box-shadow: 0 4px 12px rgba(0,0,0,0.1);


//   @media(max-width:768px){
//   width:100%;
//   }
// `;

// const TextBlock = styled.div`
//   flex: 1;
//   font-size: 1.1rem;
//   line-height: 1.7;
// `;

// const IconSection = styled.div`
//   display: flex;
//   justify-content: space-around;
//   margin-top: 50px;
//   flex-wrap: wrap;
// `;

// const IconCard = styled.div`
//   width: 280px;
//   margin: 15px;
//   padding: 25px;
//   background: white;
//   border-radius: 12px;
//   text-align: center;
//   box-shadow: 0 2px 12px rgba(0,0,0,0.05);
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: translateY(-8px);
//   }
// `;

// const Icon = styled.div`
//   font-size: 3rem;
//   color: #2d98da;
//   margin-bottom: 15px;
// `;

// const Footer = styled.footer`
//   text-align: center;
//   margin-top: 50px;
//   font-size: 1rem;
//   color: #888;
// `;

// const AboutUs = () => {


//   return (
//     <Container>
//       <Wrapper>
//         <Heading>Welcome to Elite Wealth Global</Heading>
//         <SubHeading>
//           Your Trusted Investment Partner Since 1991 🌍💼
//         </SubHeading>

//         <FlexSection>
//           <Image
//             src={it}
//             alt="Investment Team"
            
//           />
//           <TextBlock>
//           Our vision is to be a professional, responsible, profitable, reliable and return Guaranteed investment company!.<br/>
//           <br/>
//           <Image
//             src={mi1}
//             alt="Investment Team"
            
//           /><br/>
//           Our company brings you an opportunity to diversify your portfolio with successful business projects and investments. We are a Finland based investment company founded in 1991 with an original purpose to manage properties but in 2008 the purpose of our operation was changed to manage the listed minority shareholdings of the Finnish Government. 
//           <br/><br/>
//           <Image
//             src={mi2}
//             alt="Investment Team"
            
//           /><br/>
//           The company operations are market-based, and investment decisions are only made when the financial prerequisites are met. We work and manager investors investment and finance as a team. Team is a diverse network of consultants and industry professionals with a global mindset and a collaborative culture. We work to understand your issues and are driven to ask better questions.
//           </TextBlock>
//         </FlexSection>
//         <Image
//             src={mi3}
//             alt="Investment Team"
            
//           /><br/>
//         <FlexSection>
//           <TextBlock>
//             ✅ We accept investors in the long term, short term and in a manner that increases and add value to their invested money.<br /><br/>
           
//             <Image
//             src={mi4}
//             alt="Investment Team"
            
//           /><br/>
//             💸 Our company is a minority owner in nationally important listed companies.<br /><br/>
//             <Image
//             src={mi5}
//             alt="Investment Team"
            
//           /><br/>
//             🌐 We generate growth for the benefit of the future generations of it's partners, investors, shareholders, and trusted people from around the Globe.
//           </TextBlock>
//           <Image
//             src={mi6}
//             alt="Global Investment"
            
//           />
          
//         </FlexSection>

//         <IconSection>
//           <IconCard>
//             <Icon><FaGlobe /></Icon>
//             <h3>Global Reach</h3>
//             <p>We partner with investors and companies from every continent 🌍.</p>
//           </IconCard>
//           <IconCard>
//             <Icon><FaUsers /></Icon>
//             <h3>Team Driven</h3>
//             <p>A professional team dedicated to building your financial future 👥.</p>
//           </IconCard>
//           <IconCard>
//             <Icon><FaChartLine /></Icon>
//             <h3>Guaranteed Growth</h3>
//             <p>Market-based investments that promise value and returns 📈.</p>
//           </IconCard>
//         </IconSection>

//       </Wrapper>
//       <CompanyAbout2/>
//       <ActiveOwners/>
//       <Team/>
//     </Container>
//   );
// };

// export default AboutUs;




import React from 'react';
import styled from 'styled-components';
import { FaGlobe, FaUsers, FaChartLine } from 'react-icons/fa';
import it from '../Images2/it.jpg';
import CompanyAbout2 from './CompanyAbout2';
import ActiveOwners from './ActiveOwners';
import Team from './Team';
import mi1 from '../Images3/mi1.jpg';
import mi2 from '../Images3/mi2.jpg';
import mi3 from '../Images3/mi3.jpg';
import mi4 from '../Images3/mi4.jpg';
import mi5 from '../Images3/mi5.jpg';
import mi6 from '../Images3/mi6.jpg';
import mi7 from '../Images3/mi7.jpg';
import mi8 from '../Images3/mi8.jpg';
import mi9 from '../Images3/mi9.jpg';
import mi10 from '../Images3/mi10.jpg';

const Container = styled.div`
  background: #f4f7f9;
  padding: 60px 5px;
  font-family: 'Segoe UI', sans-serif;
  color: #222;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Heading = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 20px;
  color: #2b3d51;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SubHeading = styled.h2`
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 50px;
  color: #5a6d85;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const FlexSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 50%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const IconSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  flex-wrap: wrap;
`;

const IconCard = styled.div`
  width: 280px;
  margin: 15px;
  padding: 25px;
  background: white;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  color: #2d98da;
  margin-bottom: 15px;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 50px;
  font-size: 1rem;
  color: #888;
`;

const AboutUs = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Welcome to Elite Wealth Global</Heading>
        <SubHeading>Your Trusted Investment Partner Since 1991 🌍💼</SubHeading>

        <FlexSection>
          <Image src={it} alt="Investment Team" />
          <TextBlock>
            Our vision is to be a professional, responsible, profitable, reliable, and return-guaranteed investment company!<br />
            <br />
            <Image src={mi1} alt="Investment Team" /><br />
            Our company brings you an opportunity to diversify your portfolio with successful business projects and investments. We are a Finland-based investment company founded in 1991 with an original purpose to manage properties, but in 2008 the purpose of our operation was changed to manage the listed minority shareholdings of the Finnish Government.<br />
            <br />
            <Image src={mi2} alt="Investment Team" /><br />
            The company operations are market-based, and investment decisions are only made when the financial prerequisites are met. We work and manage investors' investments and finances as a team. The team is a diverse network of consultants and industry professionals with a global mindset and a collaborative culture. We work to understand your issues and are driven to ask better questions.
          </TextBlock>
        </FlexSection>

        

        <FlexSection>
          <TextBlock>
          <Image src={mi3} alt="Investment Team" /><br />
            ✅ We accept investors in the long term, short term, and in a manner that increases and adds value to their invested money.<br /><br />
            <Image src={mi4} alt="Investment Team" /><br />
            💸 Our company is a minority owner in nationally important listed companies.<br /><br />
            <Image src={mi5} alt="Investment Team" /><br />
            🌐 We generate growth for the benefit of future generations of its partners, investors, shareholders, and trusted people from around the globe.
          </TextBlock>
          <Image src={mi6} alt="Global Investment" />
        </FlexSection>

        <IconSection>
          <IconCard>
            <Icon><FaGlobe /></Icon>
            <h3>Global Reach</h3>
            <p>We partner with investors and companies from every continent 🌍.</p>
          </IconCard>
          <IconCard>
            <Icon><FaUsers /></Icon>
            <h3>Team Driven</h3>
            <p>A professional team dedicated to building your financial future 👥.</p>
          </IconCard>
          <IconCard>
            <Icon><FaChartLine /></Icon>
            <h3>Guaranteed Growth</h3>
            <p>Market-based investments that promise value and returns 📈.</p>
          </IconCard>
        </IconSection>
      </Wrapper>

      <CompanyAbout2 />
      <ActiveOwners />
      <Team />
    </Container>
  );
};

export default AboutUs;

