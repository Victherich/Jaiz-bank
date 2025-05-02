
// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import { Context } from './Context';


// // Styled Components
// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// //   height: 100vh;
//   background-color: white;
//   color: #000050;
//   padding:50px 0px;
// `;

// const Form = styled.form`
//   background-color: white;
//   padding: 20px;
//   border-radius: 10px;
//   width: 100%;
//   max-width: 400px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px;
//   margin: 10px 0;
//   border-radius: 5px;
//   border: 1px solid #ddd;
//   font-size: 16px;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 12px;
//   background-color: #000050;
//   color: white;
//   border-radius: 5px;
//   font-size: 16px;
//   cursor: pointer;
//   border: none;
//   &:hover {
//     background-color: gray;
//   }
// `;

// const Label = styled.label`
//   font-size: 18px;
//   font-weight: bold;
//   margin-bottom: 5px;
// `;

// const Title = styled.h2`
//   text-align: center;
// `;

// const UserSignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [confirmEmail, setConfirmEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();
//   const {color1}=useContext(Context);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !confirmEmail || !phone || !password || !confirmPassword) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Missing fields',
//         text: 'All fields are required.',
//       });
//       return;
//     }

//     if (email !== confirmEmail) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Email mismatch',
//         text: 'The emails do not match.',
//       });
//       return;
//     }

//     if (password !== confirmPassword) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Password mismatch',
//         text: 'The passwords do not match.',
//       });
//       return;
//     }

//     Swal.fire({text:"Please wait..."});
//     Swal.showLoading();

//     try {
//       const res = await axios.post('https://elitewealthglobal.com/api/user_signup.php', {
//         name,
//         email,
//         phone,
//         password,
//       });

//       if (res.data.success) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Registration Successful',
//           text: 'You have successfully registered.',
//         });
//         navigate('/investments');
//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Registration Failed',
//           text: res.data.error,
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Could not connect to server.',
//       });
//     }
//   };

//   return (
//     <Container color1={color1}>
//       <Form onSubmit={handleSubmit}>
//         <Title>User Sign Up</Title>
//         <div>
//           <Label>Name</Label>
//           <Input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your fullname"
//             required
//           />
//         </div>
//         <div>
//           <Label>Email</Label>
//           <Input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//         <div>
//           <Label>Confirm Email</Label>
//           <Input
//             type="email"
//             value={confirmEmail}
//             onChange={(e) => setConfirmEmail(e.target.value)}
//             placeholder="Confirm your email"
//             required
//           />
//         </div>
//         <div>
//           <Label>Phone</Label>
//           <Input
//             type="text"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             placeholder="Enter your phone number"
//             required
//           />
//         </div>
//         <div>
//           <Label>Password</Label>
//           <Input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             required
//           />
//         </div>
//         <div>
//           <Label>Confirm Password</Label>
//           <Input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="Confirm your password"
//             required
//           />
//         </div>
//         <Button type="submit">Sign Up</Button>
//         <p style={{ color: '#000050', cursor: 'pointer' }} onClick={() => navigate('/investments')}>
//           Already have an acount? Login
//         </p>
//       </Form>
    
//     </Container>
//   );
// };

// export default UserSignUp;






import React, { useContext, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';

// Styled Components
const Page = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f2f4f8;
  color: #000050;
  font-family: 'Segoe UI', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #000050, #1b1f78);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
    align-items: center;
  }
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Form = styled.form`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #000050;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  margin-top: 10px;

  &:hover {
    background-color: #1b1f78;
  }
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const MotivationalHeading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const MotivationalText = styled.p`
  font-size: 18px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AuthPrompt = styled.p`
  color: #000050;
  cursor: pointer;
  text-align: center;
  margin-top: 12px;
  font-size: 14px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const UserSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { color1 } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !confirmEmail || !phone || !password || !confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Missing fields',
        text: 'All fields are required.',
      });
      return;
    }

    if (email !== confirmEmail) {
      Swal.fire({
        icon: 'error',
        title: 'Email mismatch',
        text: 'The emails do not match.',
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Password mismatch',
        text: 'The passwords do not match.',
      });
      return;
    }

    Swal.fire({ text: "Please wait..." });
    Swal.showLoading();

    try {
      const res = await axios.post('https://elitewealthglobal.com/api/user_signup.php', {
        name,
        email,
        phone,
        password,
      });

      if (res.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'You have successfully registered.',
        });
        navigate('/investments');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: res.data.error,
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Could not connect to server.',
      });
    }
  };

  return (
    <Page>
      <LeftPanel>
        <MotivationalHeading>Start Growing Your Wealth</MotivationalHeading>
        <MotivationalText>
          Sign up today and take the first step toward financial freedom. 
          Our tools and experts will guide you every step of the way.
        </MotivationalText>
      </LeftPanel>

      <RightPanel>
        <Form onSubmit={handleSubmit}>
          <Title>Create Your Account</Title>

          <Label>Name</Label>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" required />

          <Label>Email</Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />

          <Label>Confirm Email</Label>
          <Input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} placeholder="Confirm your email" required />

          <Label>Phone</Label>
          <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" required />

          <Label>Password</Label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />

          <Label>Confirm Password</Label>
          <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password" required />

          <Button type="submit">Sign Up</Button>

          <AuthPrompt onClick={() => navigate('/investments')}>
            Already have an account? <strong>Login</strong>
          </AuthPrompt>
        </Form>
      </RightPanel>
    </Page>
  );
};

export default UserSignUp;

