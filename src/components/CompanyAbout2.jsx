
import React from 'react';
import styled from 'styled-components';
import holdingImage from '../Images2/holding.jpg'; // Replace with actual image path
import missionImage from '../Images2/mission.jpg'; // Replace with actual image path
import goalImage from '../Images2/goal.jpg'; // Replace with actual image path

const AboutContainer = styled.div`
  background-color: #000050;
  color: #f1f1f1;
  padding: 4rem 2rem;
  font-family: 'Segoe UI', sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: gold;
  text-align: center;
`;

const FlexGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const Card = styled.div`
  background-color: #101064;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  max-height: 220px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h3`
  font-size: 1.6rem;
  color: #ffd700;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  font-size: 0.9rem;
  color: #e0e0ff;
  line-height: 1.6;
`;

const CompanyAbout2 = () => {
  return (
    <AboutContainer>
      <SectionTitle>🏢 Our Company</SectionTitle>
      <FlexGrid>
        <Card>
          <Image src={holdingImage} alt="Holding Company" />
          <SubTitle>Our Company</SubTitle>
          <Text>
          Our company is a holding company wholly owned by the government. Its mission is to strengthen, profit, and increase investors invested capital through the diversified means from where profits are duely geberated. Our company ensure that every investor, shareholder and partner are considered owners in this company.We work to increase the value of its holdings in the long run.
          </Text>
        </Card>

        <Card>
          <Image src={missionImage} alt="Company Work" />
          <SubTitle>Our Work</SubTitle>
          <Text>
            We work to increase the value of its holdings in the long run.
            Our operations are market-based, and investment decisions are only made when the financial prerequisites are met.
            Our objective is to maintain and develop its operating model of responsible ownership, to increase the awareness of responsible ownership, primarily through its own operations.
          </Text>
        </Card>

        <Card>
          <Image src={goalImage} alt="Company Goal" />
          <SubTitle>The Goal</SubTitle>
          <Text>
            Our aim is to grow shareholder value in its portfolio companies by means of short-term, long-term, active ownership,
            with the aim of the companies outperforming their peers.
          </Text>
        </Card>
      </FlexGrid>
    </AboutContainer>
  );
};

export default CompanyAbout2;
