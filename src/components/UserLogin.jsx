
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../Features/Slice';

// Styled Components
const Page = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
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
  background: linear-gradient(135deg, #000050);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
    align-items: center;
    text-align: center;
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

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userToken = useSelector(state=>state.userToken)

  useEffect(()=>{
    if(userToken){
      navigate('/userdashboard')
    }
  },[userToken])

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Missing fields',
        text: 'Email and password are required.',
      });
      return;
    }

    Swal.fire({
      title: 'Logging in...',
      text: 'Please wait...',
      didOpen: () => Swal.showLoading(),
    });

    try {
      const res = await axios.post('https://elitewealthglobal.com/api/user_login.php', {
        email,
        password,
      });

      if (res.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Welcome Back!',
          text: res.data.message,
        });

        const userInfo = res.data.user;
        const userToken = res.data.token;

        dispatch(userLogin({ userInfo, userToken }));
        navigate('/userdashboard');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: res.data.error,
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Connection Error',
        text: 'Could not connect to the server.',
      });
    }
  };

  return (
    <Page>
      <LeftPanel>
        <MotivationalHeading>Build Wealth with Confidence</MotivationalHeading>
        <MotivationalText>
          Start your journey toward financial freedom. Invest with experts, track your assets, and watch your future grow.
          Your portfolio awaits — let’s make it thrive.
        </MotivationalText>
      </LeftPanel>

      <RightPanel>
        <Form onSubmit={handleLogin}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign In to Continue</h2>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <Button type="submit">Continue</Button>
          <AuthPrompt onClick={() => navigate('/userforgotpassword')}>
            Forgot Password?
          </AuthPrompt>
          <AuthPrompt onClick={() => navigate('/usersignup')}>
            Don't have an account? <strong>Sign Up</strong>
          </AuthPrompt>
        </Form>
      </RightPanel>
    </Page>
  );
};

export default UserLogin;
