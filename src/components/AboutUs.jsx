
import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGlobe, FaUsers, FaChartLine } from 'react-icons/fa';
import it from '../Images2/it.jpg'
import CompanyAbout2 from './CompanyAbout2';
import ActiveOwners from './ActiveOwners';
import Team from './Team';

const Container = styled.div`
  background: #f4f7f9;
  padding: 60px 5px;
  font-family: 'Segoe UI', sans-serif;
  color: #222;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 20px;
  color: #2b3d51;
`;

const SubHeading = styled.h2`
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 50px;
  color: #5a6d85;
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
  }
`;

const Image = styled.img`
  max-width: 50%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const TextBlock = styled.div`
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.7;
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
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
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
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container>
      <Wrapper>
        <Heading data-aos="fade-up">🤚 Welcome to Elite Wealth Global</Heading>
        <SubHeading data-aos="fade-up">
          Your Trusted Investment Partner Since 1991 🌍💼
        </SubHeading>

        <FlexSection>
          <Image
            src={it}
            alt="Investment Team"
            data-aos="fade-right"
          />
          <TextBlock data-aos="fade-left">
          Our vision is to be a professional, responsible, profitable, reliable and return Guaranteed investment company!.<br/>
          <br/>
          Our company brings you an opportunity to diversify your portfolio with successful business projects and investments. We are a Finland based investment company founded in 1991 with an original purpose to manage properties but in 2008 the purpose of our operation was changed to manage the listed minority shareholdings of the Finnish Government. 
          <br/><br/>
          The company operations are market-based, and investment decisions are only made when the financial prerequisites are met. We work and manager investors investment and finance as a team. Team is a diverse network of consultants and industry professionals with a global mindset and a collaborative culture. We work to understand your issues and are driven to ask better questions.
          </TextBlock>
        </FlexSection>

        <FlexSection>
          <TextBlock data-aos="fade-right">
            ✅ We accept investors in the long term, short term and in a manner that increases and add value to their invested money.<br /><br/>
            💸 Our company is a minority owner in nationally important listed companies.<br /><br/>
            🌐 We generate growth for the benefit of the future generations of it's partners, investors, shareholders, and trusted people from around the Globe.
          </TextBlock>
          <Image
            src="https://images.unsplash.com/photo-1573164713712-03790a178651?auto=format&fit=crop&w=1200&q=80"
            alt="Global Investment"
            data-aos="fade-left"
          />
        </FlexSection>

        <IconSection data-aos="zoom-in-up">
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

        {/* <Footer>
          &copy; {new Date().getFullYear()} Elite Wealth Global — Empowering Your Financial Journey 🌟
        </Footer> */}
      </Wrapper>
      <CompanyAbout2/>
      <ActiveOwners/>
      <Team/>
    </Container>
  );
};

export default AboutUs;
