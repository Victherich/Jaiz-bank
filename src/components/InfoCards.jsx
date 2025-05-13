import React from "react";
import styled from "styled-components";

const features = [
  {
    title: "Legal Company",
    text: "The performance and risk protection of the managed portfolios makes us one of the world's leading asset managers. Our company conducts absolutely legal activities in the legal field and is certified to operate investment business.",
  },
  {
    title: "Service",
    text: "Our comprehensive real estate services include property buying and selling assistance, market analysis and valuation, leasing and rental management, investment consulting, property maintenance and management.",
  },
  {
    title: "Listing",
    text: "Browse our up-to-date property listings. Use advanced filters to find your perfect match—whether it's a cozy apartment, a luxury villa, or a commercial property.",
  },
  {
    title: "Blogs / Insights",
    text: "Stay informed with expert tips, market trends and real estate news. Our blog covers everything from first-time buyer guides to strategic investment planning.",
  },
  {
    title: "Mission",
    text: "Our mission is to create long-term value for our investors through careful stewardship of capital and to increase the value of our holdings over time.",
  },
  {
    title: "Our Vision",
    text: "Our vision is to be the leading global investment platform for individuals and institutions, recognized for profitability, reliability and premium services.",
  },
  {
    title: "24/7 Support",
    text: "We'd love to hear from you. Get in touch for inquiries, property viewings, or consultations. Fill out the contact form or call us anytime.",
  },
];

const InfoCards = () => {
  return (
    <Section>
      <CardsWrapper>
        {features.slice(0,3).map((item, index) => (
          <Card key={index}>
            <CardTitle>{item.title}</CardTitle>
            <CardText>{item.text}</CardText>
          </Card>
        ))}
      </CardsWrapper>

      <CardsWrapper>
        {features.slice(3,6).map((item, index) => (
          <Card key={index}>
            <CardTitle>{item.title}</CardTitle>
            <CardText>{item.text}</CardText>
          </Card>
        ))}
      </CardsWrapper>

      <CardsWrapper>
        {features.slice(6,7).map((item, index) => (
          <Card key={index}>
            <CardTitle>{item.title}</CardTitle>
            <CardText>{item.text}</CardText>
          </Card>
        ))}
      </CardsWrapper>
    </Section>
  );
};

export default InfoCards;

// Styled Components

const Section = styled.section`
//   background-color: #0a1a2f;
  padding: 80px 20px;
`;

// const CardsWrapper = styled.div`
//   max-width: 1200px;
//   margin: auto;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//   gap: 20px;
// `;

// const Card = styled.div`
//   background: #ffffff;
//   color: #000050;
 
  
//   padding: 20px;
//   transition: all 0.3s ease-in-out;
//   box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);

//   &:hover {
//     background-color: #000050;
//     color: #ffffff;
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

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
`;

const Card = styled.div`
  background: #ffffff;
  color: #000050;
  padding: 20px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);


  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background-color: #000050;
    color: #ffffff;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;


const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 12px;
`;

const CardText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

