
import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Swal from 'sweetalert2';
import p30 from '../Images4/p30.jpg'
import p31 from '../Images4/p31.png'
import p32 from '../Images4/p32.png'
import p33 from '../Images4/p33.jpg'
import p34 from '../Images4/p34.png'
import p35 from '../Images4/p35.png'
import p36 from '../Images4/p36.png'

// Global styles for the entire page
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
`;

// Color Palette
const colors = {
  darkGreen: '#2C4B2F',
  gold: '#C4A207',
  white: '#FFFFFF',
};

// Keyframes for scroll animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Shared Styled Components
const Section = styled.section`
  padding: 80px 0;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: ${colors.darkGreen};
  margin-bottom: 20px;
  opacity: 0;
  &.animate {
    animation: ${fadeIn} 1s ease-out forwards;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 40px;
  opacity: 0;
  &.animate {
    animation: ${fadeIn} 1s ease-out forwards 0.2s;
  }
`;

const Button = styled.button`
  background-color: ${colors.darkGreen};
  color: ${colors.white};
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #A28A06;
  }
`;

// Hero Section
const HeroImage = styled.div`
  background: url(${p30}) no-repeat center center/cover;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(44, 75, 47, 0.6);
  }
`;

const HeroContent = styled.div`
  z-index: 1;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  opacity: 0;
  &.animate {
    animation: ${fadeIn} 1s ease-out forwards;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
  opacity: 0;
  &.animate {
    animation: ${fadeIn} 1s ease-out forwards 0.2s;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Rewards Section (Replaces Prizes Section)
const RewardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const RewardCard = styled.div`
  background-color: #F9F9F9;
  border: 1px solid #EAEAEA;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-align: left;
  transition: transform 0.3s ease;
  opacity: 0;

  &:hover {
    transform: translateY(-10px);
  }

  &.animate-left {
    animation: ${slideInFromLeft} 1s ease-out forwards;
  }
  &.animate-center {
    animation: ${fadeIn} 1s ease-out forwards;
  }
  &.animate-right {
    animation: ${slideInFromRight} 1s ease-out forwards;
  }
`;

const RewardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const RewardContent = styled.div`
  padding: 25px;
`;

const RewardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${colors.darkGreen};
  margin-bottom: 10px;
`;

const RewardDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

// Features Section
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const FeatureCard = styled.div`
  background-color: ${colors.darkGreen};
  color: ${colors.white};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  opacity: 0;

  &:hover {
    transform: translateY(-10px);
  }

  &.animate-left {
    animation: ${slideInFromLeft} 1s ease-out forwards;
  }
  &.animate-center {
    animation: ${fadeIn} 1s ease-out forwards;
  }
  &.animate-right {
    animation: ${slideInFromRight} 1s ease-out forwards;
  }
`;

const FeatureIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  border-radius:50%;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

// How It Works Section
const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
  margin-top: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const StepCard = styled.div`
  position: relative;
  text-align: center;
  padding: 40px 20px;
  background-color: #F8F8F8;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.5);
  opacity: 0;

  &.animate {
    animation: ${fadeIn} 1s ease-out forwards;
  }
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${colors.gold};
  color: ${colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 auto 20px;
`;

const StepImage = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 20px;
`;

// Testimonials Section
const TestimonialCard = styled.div`
  background-color: ${colors.white};
  border: 1px solid #EAEAEA;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  opacity: 0;

  &.animate-left {
    animation: ${slideInFromLeft} 1s ease-out forwards;
  }
  &.animate-right {
    animation: ${slideInFromRight} 1s ease-out forwards;
  }
`;

const TestimonialImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
`;

const TestimonialText = styled.p`
  font-style: italic;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 20px;
`;

const TestimonialName = styled.h4`
  color: ${colors.darkGreen};
  margin: 0;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

// Call to Action Section
const CTAContent = styled.div`
  background-color: ${colors.gold};
  color: ${colors.white};
  padding: 60px 20px;
  border-radius: 10px;
  text-align: center;
  opacity: 0;

  &.animate {
    animation: ${fadeIn} 1s ease-out forwards;
  }
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTASubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Component Functions
const HeroSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <Section id="hero" style={{padding:"0px 0px"}}>
      <HeroImage>
        <HeroContent ref={ref}>
          <HeroTitle className={inView ? 'animate' : ''}>Recharge and Earn with Us!</HeroTitle>
          <HeroSubtitle className={inView ? 'animate' : ''}>Get incredible rewards and cashback every time you recharge.</HeroSubtitle>
          {/* <Button>Start Earning Now</Button> */}
        </HeroContent>
      </HeroImage>
    </Section>
  );
};

const FeaturesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <Section id="features">
      <Container ref={ref}>
        <Title className={inView ? 'animate' : ''}>Why Recharge with Us?</Title>
        <Subtitle className={inView ? 'animate' : ''}>It's more than just a top-up; it's a way to get rewarded for your transactions.</Subtitle>
        <FeaturesGrid>
          <FeatureCard className={inView ? 'animate-left' : ''}>
            <FeatureIcon src={p33} alt="Rewards Icon" />
            <FeatureTitle>Earn Instant Rewards</FeatureTitle>
            <FeatureDescription>Receive cashback, bonus airtime, or loyalty points with every recharge.</FeatureDescription>
          </FeatureCard>
          <FeatureCard className={inView ? 'animate-center' : ''}>
            <FeatureIcon src={p32} alt="Easy Icon" />
            <FeatureTitle>Simple & Seamless</FeatureTitle>
            <FeatureDescription>The rewards are automatically credited to your account. No extra steps needed.</FeatureDescription>
          </FeatureCard>
          <FeatureCard className={inView ? 'animate-right' : ''}>
            <FeatureIcon src={p31} alt="Bank Icon" />
            <FeatureTitle>Secure & Trusted</FeatureTitle>
            <FeatureDescription>All transactions are secure.</FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
    </Section>
  );
};

const HowItWorksSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <Section id="how-it-works">
      <Container ref={ref}>
        <Title className={inView ? 'animate' : ''}>How It Works</Title>
        <Subtitle className={inView ? 'animate' : ''}>Earning rewards is as easy as 1-2-3.</Subtitle>
        <StepsGrid>
          <StepCard className={inView ? 'animate' : ''} style={{ animationDelay: '0.1s' }}>
            <StepNumber>1</StepNumber>
            {/* <StepImage src="https://via.placeholder.com/100?text=Recharge" alt="Step 1 Icon" /> */}
            <h3>Recharge Your Account</h3>
            <p>Recharge using the mobile app, USSD, or web portal.</p>
          </StepCard>
          <StepCard className={inView ? 'animate' : ''} style={{ animationDelay: '0.3s' }}>
            <StepNumber>2</StepNumber>
            {/* <StepImage src="https://via.placeholder.com/100?text=Earn" alt="Step 2 Icon" /> */}
            <h3>Meet the Threshold</h3>
            <p>Recharge a cumulative amount of ₦10,000 within a month to qualify for rewards.</p>
          </StepCard>
          <StepCard className={inView ? 'animate' : ''} style={{ animationDelay: '0.5s' }}>
            <StepNumber>3</StepNumber>
            {/* <StepImage src="https://via.placeholder.com/100?text=Reward" alt="Step 3 Icon" /> */}
            <h3>Enjoy Your Rewards</h3>
            <p>Your earned rewards will be instantly credited to your account.</p>
          </StepCard>
        </StepsGrid>
      </Container>
    </Section>
  );
};

const RewardsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <Section id="rewards">
      <Container ref={ref}>
        <Title className={inView ? 'animate' : ''}>Choose Your Rewards</Title>
        <Subtitle className={inView ? 'animate' : ''}>From cashback to exclusive offers, you can earn rewards that matter to you.</Subtitle>
        <RewardsGrid>
          <RewardCard className={inView ? 'animate-left' : ''}>
            <RewardImage src={p34} alt="Cashback Reward" />
            <RewardContent>
              <RewardTitle>Cashback on Recharges</RewardTitle>
              <RewardDescription>Get a percentage of your recharge amount credited back to your account.</RewardDescription>
            </RewardContent>
          </RewardCard>
          <RewardCard className={inView ? 'animate-center' : ''}>
            <RewardImage src={p35} alt="Bonus Airtime" />
            <RewardContent>
              <RewardTitle>Bonus Airtime & Data</RewardTitle>
              <RewardDescription>Enjoy free airtime and data bundles from your favorite network providers.</RewardDescription>
            </RewardContent>
          </RewardCard>
          <RewardCard className={inView ? 'animate-right' : ''}>
            <RewardImage src={p36} alt="Loyalty Points" />
            <RewardContent>
              <RewardTitle>Redeemable Loyalty Points</RewardTitle>
              <RewardDescription>Accumulate points that you can redeem for various products and services.</RewardDescription>
            </RewardContent>
          </RewardCard>
        </RewardsGrid>
      </Container>
    </Section>
  );
};

// const TestimonialsSection = () => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
//   return (
//     <Section id="testimonials" style={{ backgroundColor: '#F8F8F8' }}>
//       <Container ref={ref}>
//         <Title className={inView ? 'animate' : ''}>Hear from Our Customers</Title>
//         <Subtitle className={inView ? 'animate' : ''}>See how Jiz Bank is making everyday transactions more rewarding.</Subtitle>
//         <TestimonialGrid>
//           <TestimonialCard className={inView ? 'animate-left' : ''}>
//             <TestimonialImage src="https://via.placeholder.com/80?text=Customer+1" alt="Customer 1" />
//             <TestimonialText>"The cashback on my weekly airtime purchases is a fantastic bonus. It really adds up!"</TestimonialText>
//             <TestimonialName>Adebayo S., Lagos</TestimonialName>
//           </TestimonialCard>
//           <TestimonialCard className={inView ? 'animate-right' : ''}>
//             <TestimonialImage src="https://via.placeholder.com/80?text=Customer+2" alt="Customer 2" />
//             <TestimonialText>"I love earning points on my recharges. I'm saving them to get a new gadget!"</TestimonialText>
//             <TestimonialName>Chidinma O., Abuja</TestimonialName>
//           </TestimonialCard>
//         </TestimonialGrid>
//       </Container>
//     </Section>
//   );
// };

const CallToActionSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

const comingSoon = ()=>{
    Swal.fire({
        icon:"info",
        title:"Coming Soon",
        timer:2000,
        showConfirmButton:false
    })
}

  return (
    <Section id="cta">
      <Container>
        <CTAContent ref={ref} className={inView ? 'animate' : ''}>
          <CTATitle>Ready to Start Earning?</CTATitle>
          <CTASubtitle>Recharge today and unlock a world of rewards!</CTASubtitle>
          <Button onClick={comingSoon}>Recharge Now</Button>
        </CTAContent>
      </Container>
    </Section>
  );
};


// Main App Component
function RechargeAndEarn() {
  return (
    <>
      <GlobalStyle />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <RewardsSection />
      {/* <TestimonialsSection /> */}
      <CallToActionSection />
    </>
  );
}

export default RechargeAndEarn;