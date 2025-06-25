
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import loanImage from '../Images2/loan.jpg'; // You need to add your own image here
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const Container = styled.div`
//   font-family: 'Segoe UI', sans-serif;
//   padding: 2rem;
//   max-width: 1200px;
//   margin: auto;
// `;

// const HeroSection = styled.section`
//   background: url(${loanImage}) center/cover no-repeat;
//   height: 300px;
//   border-radius: 12px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   text-shadow: 1px 1px 3px black;
//   font-size: 2rem;
//   font-weight: bold;
//   text-align:center;
// `;

// const Section = styled.section`
//   margin-top: 2rem;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 2rem;
// `;

// const Left = styled.div`
//   flex: 1;
// `;

// const Right = styled.div`
//   flex: 1;
//   background: #f7f7f7;
//   padding: 2rem;
//   border-radius: 12px;
//   box-shadow: 0 4px 12px rgba(0,0,0,0.1);
// `;

// const Heading = styled.h2`
//   font-size: 1.8rem;
//   margin-bottom: 1rem;
//   color:#000050;
// `;

// const Paragraph = styled.p`
//   font-size: 1.1rem;
//   margin-bottom: 1rem;
//   color: #555;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   padding: 12px;
//   margin-bottom: 1rem;
//   border-radius: 8px;
//   border: 1px solid #ccc;
//   font-size: 1rem;
// `;

// const TextArea = styled.textarea`
//   padding: 12px;
//   border-radius: 8px;
//   border: 1px solid #ccc;
//   font-size: 1rem;
//   margin-bottom: 1rem;
// `;

// const Button = styled.button`
//   background-color: #000050;
//   color: white;
//   border: none;
//   padding: 12px;
//   font-size: 1rem;
//   border-radius: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: gray;
//   }
// `;

// const LoanApplication = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     amount: '',
//     reason: '',
//   });

//   const handleChange = e => {
//     setFormData({...formData, [e.target.name]: e.target.value });
//   };



// const handleSubmit = async (e) => {
//   e.preventDefault();

//   // Show loading alert
//   Swal.fire({
//     title: 'Submitting...',
//     text: 'Please wait while we process your loan application.',
//     allowOutsideClick: false,
//     didOpen: () => {
//       Swal.showLoading();
//     }
//   });

//   try {
//     const res = await axios.post('https://jizbankplc.com/api/apply_loan.php', formData);

//     if (res.data.success) {
//       Swal.fire({
//         icon: 'success',
//         title: 'Application Submitted',
//         text: 'Your loan application was sent successfully!',
//       });

//       setFormData({
//         fullName: '',
//         email: '',
//         amount: '',
//         reason: ''
//       });
//     } else {
//       Swal.fire({
//         icon: 'error',
//         title: 'Submission Failed',
//         text: res.data.error || 'An error occurred while submitting your application.'
//       });
//     }
//   } catch (error) {
//     Swal.fire({
//       icon: 'error',
//       title: 'Network Error',
//       text: 'Failed to connect to the server. Please try again later.'
//     });
//   }
// };


//   return (
//     <Container>
//       <HeroSection>
//         Empowering Your Dreams Through Smart Loans
//       </HeroSection>
//       <Section>
//         <Left>
//           <Heading>Why Choose Us?</Heading>
//           <Paragraph>We believe in helping people achieve their dreams. Whether it's for your education, business, or personal use — our loan solutions are flexible and affordable.</Paragraph>
//           <Paragraph>Our process is fast, secure, and 100% online. Apply with confidence and let us support your goals.</Paragraph>
//         </Left>
//         <Right>
//           <Heading>Loan Application</Heading>
//           <Form onSubmit={handleSubmit}>
//             <Input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
//             <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//             <Input name="amount" type="number" placeholder="Amount Requested in USD" value={formData.amount} onChange={handleChange} required />
//             <TextArea name="reason" placeholder="Reason for loan..." rows={4} value={formData.reason} onChange={handleChange} required />
//             <Button type="submit">Apply Now</Button>
//           </Form>
//         </Right>
//       </Section>
//     </Container>
//   );
// };

// export default LoanApplication;





import React, { useState } from 'react';
import styled from 'styled-components';
import loanImage from '../Images2/loan.jpg'; // Add your own image here
import axios from 'axios';
import Swal from 'sweetalert2';
import commit from '../Images2/commit.jpg'

const Container = styled.div`
  font-family: 'Segoe UI', sans-serif;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
`;

const HeroSection = styled.section`
  background: url(${loanImage}) center/cover no-repeat;
  height: 300px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 1px 1px 3px black;
  font-size: 2rem;
  font-weight: bold;
  text-align:center;
`;

const HeroSection2 = styled.section`
  background: url(${commit}) center/cover no-repeat;
  height: 300px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 1px 1px 3px black;
  font-size: 2rem;
  font-weight: bold;
  text-align:center;
`;

const Section = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  background: #f7f7f7;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #000050;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #555;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #000050;
  color: white;
  border: none;
  padding: 12px;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const InfoSection = styled.div`
  // margin-bottom: 20px;
`;

const InfoHeading = styled.h3`
  font-size: 1.8rem;
  color: #000050;

`;

const InfoParagraph = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom:20px;
`;


const HighlightContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom:30px;
`;

const HighlightCard = styled.div`
  background: linear-gradient(135deg, #f0f4ff, #e2e6f8);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease;
  border-left: 6px solid #000050;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 42px rgba(0, 0, 0, 0.2);
  }
`;

const HighlightTitle = styled.h3`
  font-size: 1.7rem;
  color: #000050;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const HighlightText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #333;
`;



const LoanApplication = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    amount: '',
    reason: '',
  });

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loading alert
    Swal.fire({
      title: 'Submitting...',
      text: 'Please wait while we process your loan application.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const res = await axios.post('https://jizbankplc.com/api/apply_loan.php', formData);

      if (res.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Application Submitted',
          text: 'Your loan application was sent successfully!',
        });

        setFormData({
          fullName: '',
          email: '',
          amount: '',
          reason: ''
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: res.data.error || 'An error occurred while submitting your application.'
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Failed to connect to the server. Please try again later.'
      });
    }
  };

  return (
    <Container>
      <HeroSection>
        Empowering Your Dreams Through Smart Loans
      </HeroSection>
      
      <Section>
        <Left>
          <Heading>Why Choose Us?</Heading>
          <Paragraph>
            We believe in helping people achieve their dreams. Whether it's for your education, business, or personal use, our loan solutions are flexible, affordable, and tailored to your needs.
          </Paragraph>
          <Paragraph>
            Our process is fast, secure, and 100% online. Apply confidently and let us support your financial goals.
          </Paragraph>
        </Left>
        
        <Right>
          <Heading>Loan Application</Heading>
          <Form onSubmit={handleSubmit}>
            <Input 
              name="fullName" 
              placeholder="Full Name" 
              value={formData.fullName} 
              onChange={handleChange} 
              required 
            />
            <Input 
              name="email" 
              type="email" 
              placeholder="Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <Input 
              name="amount" 
              type="number" 
              placeholder="Amount Requested in USD" 
              value={formData.amount} 
              onChange={handleChange} 
              required 
            />
            <TextArea 
              name="reason" 
              placeholder="Reason for loan..." 
              rows={4} 
              value={formData.reason} 
              onChange={handleChange} 
              required 
            />
            <Button type="submit">Apply Now</Button>
          </Form>
        </Right>
      </Section>

      <InfoSection>
        <InfoHeading>Our Commitment to You</InfoHeading>
        <InfoParagraph>
          We understand the importance of sound financial support. As part of the World Banking Group, we offer various financial guarantees to protect investments, helping businesses secure funding with better terms.
        </InfoParagraph>
        <InfoParagraph>
          With us, your financial growth is a priority. We add value through extensive knowledge of emerging markets and global best practices in environmental and social management.
        </InfoParagraph>
      </InfoSection>

      <HeroSection2>
      "Empowering futures through smart finance and trusted partnerships." 💼✨
      </HeroSection2>

      <HighlightContainer>
      <HighlightCard>
        <HighlightTitle>🛡️ Payables & Fraud Protection</HighlightTitle>
        <HighlightText>
          Need fast and accurate information to make better treasury management decisions? Our corporate cash flow management tools can help.
        </HighlightText>
      </HighlightCard>

      <HighlightCard>
        <HighlightTitle>💳 Receivables and Cash Concentration</HighlightTitle>
        <HighlightText>
          Access receivables solutions for every type of business receipt whether paid by check, credit card, online bill pay, electronic transaction, or in cash.
        </HighlightText>
      </HighlightCard>

      <HighlightCard>
        <HighlightTitle>📊 Reporting Solutions</HighlightTitle>
        <HighlightText>
          Make informed treasury management decisions on a daily basis with our suite of integrated information tools.
        </HighlightText>
      </HighlightCard>

      <HighlightCard>
        <HighlightTitle>💼 INVESTORS</HighlightTitle>
        <HighlightText>
          We accept investors and add value to their money.We strengthen profits and increase investors invested capital.
        </HighlightText>
      </HighlightCard>

      <HighlightCard>
        <HighlightTitle>🤝 Dedicated Management Team</HighlightTitle>
        <HighlightText>
          We truly value the relationships we have with our partners. We believe a partnership should benefit everyone involved.
        </HighlightText>
      </HighlightCard>
    </HighlightContainer>

      <InfoSection>
       
        <InfoHeading>We Care About Your Financial Growth</InfoHeading>
        <InfoParagraph>
          Our company is a member of the World Banking Group. Our mandate is to promote cross-border investment in developing businesses, projects, and establishments by providing guarantees (political risk insurance and credit enhancement) to investors.
        </InfoParagraph>

        <InfoParagraph>
          Our guarantees protect investments against noncommercial risks and can help investors obtain access to funding sources with improved financial terms and conditions.
        </InfoParagraph>

        <InfoParagraph>
          The Agency derives its unique strength from its Banking Group and from its structure as an international organization whose shareholders include most countries of the world. This enables us to provide an umbrella of deterrence against government actions that could disrupt projects, and assist in the resolution of disputes between investors and governments.
        </InfoParagraph>

        <InfoParagraph>
          We also add value through our ability to offer clients extensive knowledge of emerging markets and of international best practices in environmental and social management.
        </InfoParagraph>
      </InfoSection>
    </Container>
  );
};

export default LoanApplication;
