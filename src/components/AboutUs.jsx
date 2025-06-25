


// import React from 'react';
// import styled from 'styled-components';
// import { FaGlobe, FaUsers, FaChartLine } from 'react-icons/fa';
// import it from '../Images2/it.jpg';
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
//   padding: 0 15px;
// `;

// const Heading = styled.h1`
//   font-size: 2.8rem;
//   text-align: center;
//   margin-bottom: 20px;
//   color: #2b3d51;

//   @media (max-width: 768px) {
//     font-size: 2.2rem;
//   }
// `;

// const SubHeading = styled.h2`
//   font-size: 1.6rem;
//   text-align: center;
//   margin-bottom: 50px;
//   color: #5a6d85;

//   @media (max-width: 768px) {
//     font-size: 1.4rem;
//   }
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
//     text-align: center;
//   }
// `;

// const Image = styled.img`
//   width: 50%;
//   border-radius: 12px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   margin-bottom: 20px;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const TextBlock = styled.div`
//   flex: 1;
//   font-size: 1.1rem;
//   line-height: 1.7;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
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
//   box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: translateY(-8px);
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     margin: 10px 0;
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
//         <SubHeading>Your Trusted Investment Partner Since 1991 🌍💼</SubHeading>

//         <FlexSection>
//           <Image src={it} alt="Investment Team" />
//           <TextBlock>
//             Our vision is to be a professional, responsible, profitable, reliable, and return-guaranteed investment company!<br />
//             <br />
//             <Image src={mi1} alt="Investment Team" /><br />
//             Our company brings you an opportunity to diversify your portfolio with successful business projects and investments. We are a Finland-based investment company founded in 1991 with an original purpose to manage properties, but in 2008 the purpose of our operation was changed to manage the listed minority shareholdings of the Finnish Government.<br />
//             <br />
//             <Image src={mi2} alt="Investment Team" /><br />
//             The company operations are market-based, and investment decisions are only made when the financial prerequisites are met. We work and manage investors' investments and finances as a team. The team is a diverse network of consultants and industry professionals with a global mindset and a collaborative culture. We work to understand your issues and are driven to ask better questions.
//           </TextBlock>
//         </FlexSection>

        

//         <FlexSection>
//           <TextBlock>
//           <Image src={mi3} alt="Investment Team" /><br />
//             ✅ We accept investors in the long term, short term, and in a manner that increases and adds value to their invested money.<br /><br />
//             <Image src={mi4} alt="Investment Team" /><br />
//             💸 Our company is a minority owner in nationally important listed companies.<br /><br />
//             <Image src={mi5} alt="Investment Team" /><br />
//             🌐 We generate growth for the benefit of future generations of its partners, investors, shareholders, and trusted people from around the globe.
//           </TextBlock>
//           <Image src={mi6} alt="Global Investment" />
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

//       <CompanyAbout2 />
//       <ActiveOwners />
//       <Team />
//     </Container>
//   );
// };

// export default AboutUs;




import React from 'react';
// import {
//   PageContainer,
//   HeroSection,
//   Section,
//   SectionTitle,
//   Paragraph,
//   ContentGrid,
//   GridItem,
//   VisionMissionValues,
//   VMVItem,
//   ManagementTeamContainer,
//   TeamMemberCard,
//   AchievementsList,
//   HistoryTimeline,
//   TimelineItem,
//   TimelineDot,
//   TimelineContent,
// } from '../styles/AboutUsStyles'; // Adjust path as needed

// Placeholder images - replace with actual JIZ Bank management photos
// import ceoPlaceholder from '../Images/ceo_placeholder.jpg'; // Create or use actual paths
// import cfoPlaceholder from '../Images/cfo_placeholder.jpg';
// import cooPlaceholder from '../Images/coo_placeholder.jpg';


// const managementTeam = [
//   { id: 1, name: 'Dr. Hassan Usman', title: 'Managing Director/CEO', image: ceoPlaceholder },
//   { id: 2, name: 'Mallam Mahe Abubakar', title: 'Executive Director, Business Development', image: cfoPlaceholder }, // Fictional, update with real ED
//   { id: 3, name: 'Hajiya Amina Bello', title: 'Executive Director, Operations', image: cooPlaceholder }, // Fictional, update with real ED
//   // Add more team members as needed
// ];


import styled from 'styled-components';

 const PageContainer = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.8;
  padding: 40px 20px;
  padding-top:100px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9fbfd; /* Very light blue/grey background */
`;

 const Section = styled.section`
  margin-bottom: 60px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  &:last-child {
    margin-bottom: 0;
  }
`;

 const HeroSection = styled(Section)`
  text-align: center;
  background-color: rgba(0,255,0,0.1); /* Lighter blue */
  padding: 60px 20px;

  h1 {
    color:#2C4B2F; /* jizBlue */
    font-size: 3.5em;
    margin-bottom: 20px;
    font-weight: 700;
  }

  p {
    color: #444;
    font-size: 1.3em;
    max-width: 900px;
    margin: 0 auto;
    font-weight: 300;
  }
`;

 const SectionTitle = styled.h2`
  color: #2C4B2F; /* jizBlue */
  font-size: 2.5em;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 80px;
    height: 4px;
    background-color: #2C4B2F; /* A brighter blue for emphasis */
    border-radius: 2px;
  }
`;

 const Paragraph = styled.p`
  margin-bottom: 20px;
  font-size: 1.1em;
  color: #555;
  text-align: justify;
`;

 const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

 const GridItem = styled.div`
  background-color: #f7fcfd; /* Slightly lighter than section for items */
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: #2C4B2F;
    font-size: 1.5em;
    margin-bottom: 15px;
  }

  p {
    font-size: 1em;
    color: #666;
  }
`;

 const VisionMissionValues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

 const VMVItem = styled.div`
  flex: 1;
  padding: 25px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.6em;
    margin-bottom: 15px;
    color: #2C4B2F;
  }

  p {
    font-size: 1.05em;
    color: #555;
  }

  &:nth-child(1) { /* Vision */
    background-color: #e6f7ff;
    border-left: 5px solid #2C4B2F;
  }
  &:nth-child(2) { /* Mission */
    background-color: #f0faff;
    border-left: 5px solid #2C4B2F;
  }
  &:nth-child(3) { /* Values */
    background-color: #e6fff2;
    border-left: 5px solid #28a745;
  }
`;

 const ManagementTeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

 const TeamMemberCard = styled.div`
  text-align: center;
  background-color: #fefefe;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
    border: 3px solid #2C4B2F;
  }

  h4 {
    color: #2C4B2F;
    font-size: 1.4em;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.95em;
    color: #777;
  }
`;

 const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;

  li {
    background-color: #e9f7ff; /* Light blue for list items */
    margin-bottom: 10px;
    padding: 15px 20px;
    border-radius: 5px;
    border-left: 5px solid #2C4B2F;
    font-size: 1.1em;
    color: #333;
    display: flex;
    align-items: center;

    &::before {
      content: '✔'; /* Checkmark icon */
      color: #28a745; /* Green check */
      font-weight: bold;
      margin-right: 10px;
    }
  }
`;

 const HistoryTimeline = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    background: #2C4B2F;
    transform: translateX(-50%);
    top: 0;
  }

  @media (max-width: 768px) {
    &::before {
      left: 20px;
    }
  }
`;

 const TimelineItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  position: relative;
  width: 100%;

  &:nth-child(even) {
    flex-direction: row-reverse; /* Alternate sides */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 40px; /* Space for line */
    &:nth-child(even) {
      flex-direction: column; /* Keep it consistent on small screens */
    }
  }
`;

 const TimelineDot = styled.div`
  position: absolute;
  top: 15px; /* Adjust based on content padding */
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: #007bff;
  border-radius: 50%;
  border: 3px solid #fff;
  z-index: 1;

  ${TimelineItem}:nth-child(even) & {
    /* No change needed for alternating items, dot stays in middle */
  }
  
  @media (max-width: 768px) {
    left: 20px; /* Align dot with the vertical line */
    transform: translateX(-50%);
  }
`;


 const TimelineContent = styled.div`
  width: calc(50% - 40px); /* Half width minus space for line/dot */
  padding: 20px;
  background-color: #f0faff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: relative;

  ${TimelineItem}:nth-child(even) & {
    margin-left: 40px; /* Push to the right */
  }

  ${TimelineItem}:nth-child(odd) & {
    margin-right: 40px; /* Push to the left */
  }

  h3 {
    color: #2C4B2F;
    font-size: 1.4em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1em;
    color: #555;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 !important; /* Reset margin for small screens */
    padding: 15px;
  }
`;


const AboutUs = () => {
  return (
    <PageContainer>
      <HeroSection>
        <h1>About JIZ Bank Plc</h1>
        <p>
          As Nigeria's premier Non-Interest Bank, JIZ Bank is committed to ethical and sustainable financial practices. We offer a comprehensive range of banking services and efficient fund transfer solutions, empowering individuals and businesses to thrive in alignment with their values.
        </p>
      </HeroSection>

      <Section>
        <SectionTitle>Our Story</SectionTitle>
        <Paragraph>
          JIZ Bank Plc commenced operations as the first Non-Interest Bank in Nigeria on January 6, 2012, after obtaining its operating license from the Central Bank of Nigeria on November 11, 2011. This marked a significant milestone in Nigeria's financial landscape, introducing a unique banking model based on ethical principles and social responsibility.
        </Paragraph>
        <Paragraph>
          Since our inception, we have been at the forefront of providing Sharia'ah-compliant financial services, focusing on equitable partnerships, transparent transactions, and community development. Our commitment extends beyond traditional banking to foster economic growth and contribute positively to society.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Vision, Mission & Values</SectionTitle>
        <VisionMissionValues>
          <VMVItem>
            <h3>Our Vision</h3>
            <p>
              To be the leading ethical and sustainable financial institution in Africa, delivering superior value to all stakeholders.
            </p>
          </VMVItem>
          <VMVItem>
            <h3>Our Mission</h3>
            <p>
              To provide innovative, ethical, and customer-centric financial solutions that foster wealth creation, sustainable development, and socio-economic wellbeing for all.
            </p>
          </VMVItem>
          <VMVItem>
            <h3>Our Values</h3>
            <p>
              **Ethics & Integrity:** Upholding the highest standards of honesty and transparency.<br/>
              **Customer-Centricity:** Placing our customers at the heart of everything we do.<br/>
              **Innovation:** Continuously developing new and improved solutions.<br/>
              **Social Responsibility:** Contributing positively to the communities we serve.<br/>
              **Professionalism:** Delivering excellence through expertise and dedication.
            </p>
          </VMVItem>
        </VisionMissionValues>
      </Section>

      <Section>
        <SectionTitle>What We Offer</SectionTitle>
        <Paragraph>
          JIZBank provides a wide array of banking services and fund transfer solutions tailored to meet the diverse needs of individuals, corporate entities, and government parastatals.
        </Paragraph>
        <ContentGrid>
          <GridItem>
            <h3>Personal Banking</h3>
            <p>Savings accounts, current accounts, investment products, consumer financing, and digital banking solutions.</p>
          </GridItem>
          <GridItem>
            <h3>Business Banking</h3>
            <p>Corporate accounts, trade finance, project financing, working capital solutions, and advisory services for SMEs and large corporations.</p>
          </GridItem>
          <GridItem>
            <h3>Fund Transfer Services</h3>
            <p>Seamless local and international money transfers, remittances, and secure payment solutions for individuals and businesses.</p>
          </GridItem>
          <GridItem>
            <h3>Digital Solutions</h3>
            <p>Mobile banking, internet banking, USSD services, and other innovative platforms for convenient and secure transactions.</p>
          </GridItem>
        </ContentGrid>
      </Section>

      <Section>
        <SectionTitle>Our Commitment to Sustainability</SectionTitle>
        <Paragraph>
          At JIZBank, sustainability is ingrained in our operations. We are committed to fostering environmental protection, social equity, and good governance, aligning our practices with global best standards. Our non-interest banking model inherently supports sustainable development by avoiding speculative transactions and focusing on real economic activities.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Key Achievements & Milestones</SectionTitle>
        <AchievementsList>
          <li>Pioneering Non-Interest Banking in Nigeria since 2012.</li>
          <li>Successful listing on the Nigerian Exchange Group (NGX).</li>
          <li>Consistent growth in customer base and branch network across Nigeria.</li>
          <li>Introduction of innovative digital banking platforms for enhanced customer experience.</li>
          <li>Recognition for our commitment to ethical finance and community development.</li>
          <li>Achieved profitability consistently over the past X years (Placeholder: Fill with actual number).</li>
          {/* Add more specific achievements here */}
        </AchievementsList>
      </Section>

      <Section>
        <SectionTitle>Our History in Review</SectionTitle>
        <HistoryTimeline>
          <TimelineItem>
            <TimelineDot />
            <TimelineContent>
              <h3>2003</h3>
              <p>Initial efforts to establish a non-interest bank in Nigeria began with the formation of a steering committee.</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDot />
            <TimelineContent>
              <h3>2011</h3>
              <p>Jiz Bank Plc obtains its operating license from the Central Bank of Nigeria on November 11, 2011.</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDot />
            <TimelineContent>
              <h3>2012</h3>
              <p>Commencement of full banking operations on January 6, 2012, as the first Non-Interest Bank in Nigeria.</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDot />
            <TimelineContent>
              <h3>2017</h3>
              <p>JIZ Bank successfully lists its shares on the Nigerian Stock Exchange (now NGX), making it accessible to public investors.</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDot />
            <TimelineContent>
              <h3>2020s</h3>
              <p>Significant expansion of digital banking services and growth in customer base, strengthening our position in the market.</p>
            </TimelineContent>
          </TimelineItem>
          {/* Add more specific historical milestones here */}
        </HistoryTimeline>
      </Section>
{/* 
      <Section>
        <SectionTitle>Our Management Team</SectionTitle>
        <Paragraph>
          Our leadership team comprises seasoned professionals with extensive experience in banking, finance, and ethical business practices, dedicated to steering JIZ Bank towards its strategic objectives.
        </Paragraph>
        <ManagementTeamContainer>
          {managementTeam.map(member => (
            <TeamMemberCard key={member.id}>
              {member.image ? <img src={member.image} alt={member.name} /> : <img src="https://via.placeholder.com/150" alt="Placeholder" />}
              <h4>{member.name}</h4>
              <p>{member.title}</p>
            </TeamMemberCard>
          ))}
        </ManagementTeamContainer>
        <Paragraph style={{ textAlign: 'center', marginTop: '30px' }}>
          For a full list of our board of directors and management team, please visit our Investor Relations page.
        </Paragraph>
      </Section> */}

      <Section>
        <SectionTitle>Careers at JIZ Bank Plc</SectionTitle>
        <Paragraph>
          Join a dynamic team committed to ethical finance and innovation. At JIZ Bank, we believe in nurturing talent, fostering a supportive work environment, and promoting professional growth. Explore opportunities to build a rewarding career with us.
        </Paragraph>
        {/* <Paragraph style={{ textAlign: 'center' }}>
          <a href="/careers" style={{ textDecoration: 'none', backgroundColor: '#007bff', color: 'white', padding: '12px 25px', borderRadius: '5px', display: 'inline-block', marginTop: '15px', fontWeight: 'bold' }}>
            Explore Career Opportunities
          </a>
        </Paragraph> */}
      </Section>

      <Section>
        <SectionTitle>Contact Us</SectionTitle>
        <Paragraph>
          We are here to serve you. For inquiries, support, or feedback, please reach out to us through our various channels.
        </Paragraph>
        <ContentGrid>
          <GridItem>
            <h3>Customer Service</h3>
            <p>+234 (0) 700 JIZ BANK (+234 700 5249 2265)</p>
            <p>customercare@jizbankplc.com</p>
          </GridItem>
          <GridItem>
            <h3>Head Office</h3>
            <p>Plot 734, Ahmadu Bello Way, Central Business District, Abuja, Nigeria.</p>
          </GridItem>
          <GridItem>
            <h3>Find a Branch</h3>
            <p>Locate the nearest JIZ Bank Plc branch or ATM near you.</p>
            {/* <p><a href="/branches" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Branch Locator</a></p> */}
          </GridItem>
        </ContentGrid>
      </Section>
    </PageContainer>
  );
};

export default AboutUs;

