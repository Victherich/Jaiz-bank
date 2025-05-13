
import React from "react";
import styled from "styled-components";
import { FaDollarSign, FaChartLine, FaUsers, FaPiggyBank, FaWallet } from "react-icons/fa";

const features = [
  {
    icon: <FaDollarSign size={24} color="#000050" />,
    title: "High Value",
    text: "Payouts from investments are quickly sent to investors’ provided wallet address.",
  },
  {
    icon: <FaPiggyBank size={24} color="#000050" />,
    title: "Multiple Investment Options",
    text: "Investors can choose from a variety of investment products or build a full portfolio of assets.",
  },
  {
    icon: <FaChartLine size={24} color="#000050" />,
    title: "Competitive High ROI",
    text: "Compared to most options out there, we offer very high returns on your investments.",
  },
  {
    icon: <FaUsers size={24} color="#000050" />,
    title: "Referral Program",
    text: "Earn extra income by referring others through our referral program.",
  },
  {
    icon: <FaWallet size={24} color="#000050" />,
    title: "$0 Commission Investment",
    text: "We charge zero commission on all our digital assets while others still do.",
  },
];

const WhyChooseUs2 = () => {
  return (
    <Section>
      <ContentWrapper>
        <TitleSection>
          <MainTitle>Why Choose Us<br/>
          <span style={{fontSize:"2rem"}}>
            Discover the reason why people choose us.
          </span>
          </MainTitle>
          
        </TitleSection>
        <div>

        
        <CardsWrapper>
          {features.slice(0,3).map((item, index) => (
            <Card key={index}>
              <IconWrapper>{item.icon}</IconWrapper>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.text}</CardText>
            </Card>
          ))}
        </CardsWrapper>

        <CardsWrapper>
          {features.slice(3,6).map((item, index) => (
            <Card key={index}>
              <IconWrapper>{item.icon}</IconWrapper>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.text}</CardText>
            </Card>
          ))}
        </CardsWrapper>

        </div>
      </ContentWrapper>
    </Section>
  );
};

export default WhyChooseUs2;

// Styled Components

const Section = styled.div`
  background-color: #0a1a2f;
  color: #fff;
  padding: 80px 20px;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const MainTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #dfe8ff;
  text-align:center;
`;

// const CardsWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
//   gap: 20px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const Card = styled.div`
//   background: #ffffff;
//   color: #000050;
//   border-radius: 10px;
//   padding: 20px;
//   box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

const CardsWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
  margin-bottom: 50px;

  @media (max-width: 884px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
`;

const Card = styled.div`
  background: #ffffff;
  color: #000050;
  padding: 20px;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: space-between;



  @media (max-width: 480px) {
    padding: 15px;
  }
`;



const IconWrapper = styled.div`
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 1.1rem;
  color: #333;
`;
