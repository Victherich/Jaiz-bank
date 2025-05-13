
import React from 'react';
import styled from 'styled-components';
import activeImg from '../Images2/act.jpg'; // Replace with your actual image path

const SectionWrapper = styled.section`
  background-color: #ffffff;
  padding: 4rem 2rem;
  font-family: 'Segoe UI', sans-serif;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #000050;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media(min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  padding-right: 1rem;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
`;

const Text = styled.p`
  color: #333;
  font-size: 1.1rem;
  line-height: 1.7;
`;

const SubSection = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-left: 6px solid gold;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.05);
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  color: #000050;
  margin-bottom: 0.5rem;
`;

const ActiveOwners = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Active Owners</SectionTitle>
      <Layout>
        <LeftSide>
          <Image src={activeImg} alt="Active Ownership" />
        </LeftSide>

        <RightSide>
          <Text>
            As an active owner, we want to be involved in influencing matters which have a significant impact on the company’s performance and shareholder value.
            Our company’s long-term objective is to have a seat in the board of each portfolio company.
          </Text>
          <SubSection>
            <SubTitle>🌟 Our Values</SubTitle>
            <Text>
              We value transparency, trust, impactfulness, renewal, and integrity.
            </Text>
          </SubSection>

          <SubSection>
            <SubTitle>🧠 Our Approach</SubTitle>
            <Text>
            Our operations as an active minority shareholder require considerable efforts to understand the portfolio companies and their industries. Our investment team assigned to the company in question

carries out an analysis of the company
frequently meets company management, investors, regional representatives and other large shareholders
visits production plants, attends capital market days and industry seminars
studies the company’s competitors.
<br/><br/>
The in-depth information and views accumulated in this way will be the basis for the investment team’s value creation plan for the company and for the team’s efforts to help, through active dialogue, the company outperform its peers.
            </Text>
          </SubSection>

          {/* <SubSection>
            <SubTitle>💼 Who We Help</SubTitle>
            <Text>
              We don’t just help one kind of person. Or one kind of business. Or one kind of nonprofit, family, or trustee.
              We have a variety of plans for many different investors or traders, and we may just have an account for you.
            </Text>
          </SubSection> */}
        </RightSide>
      </Layout>
    </SectionWrapper>
  );
};

export default ActiveOwners;
