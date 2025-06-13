import bgImg from '../Images4/signupbg.png';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../Features/Slice';
import { useDispatch } from 'react-redux';

const Page = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f9fff9;
  font-family: 'Segoe UI', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
   
  }
`;

const LeftPanel = styled.div`
  flex: 0.8;
  background: url(${bgImg}) no-repeat center center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  text-align: center;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Adjust transparency here */
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 20px;
    width: 100%;
    padding-top: 100px;
  }
`;


const RightPanel = styled.div`
  flex: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: green;
  background:rgba(0,255,0,0.1);
  padding-top:100px;

  @media (max-width: 768px) {
    padding: 20px;
    padding-top:20px;
    width: 100%;
  }
`;

const Form = styled.form`
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 6px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: green;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  margin-top: 20px;

  &:hover {
    background-color: darkgreen;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const AuthPrompt = styled.p`
  color: green;
  cursor: pointer;
  text-align: center;
  margin-top: 12px;
`;

const UserLogin = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accountNumber || !password) {
      Swal.fire('Error', 'Please enter both account number and password.', 'error');
      return;
    }

    Swal.fire({
      title: 'Logging in...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    try {
      const response = await axios.post('https://skylinkteamb.com/api2/user_login.php', {
        accountNumber,
        password
      });

      if (response.data.success) {
        Swal.fire({
          title: 'Welcome!',
          text: response.data.message,
          icon: 'success',
          confirmButtonText: 'Continue'
        }).then(() => {
          // Store user data/token as needed
        });
console.log(response.data)
          const userInfo = response.data.user;
        const userToken = response.data.token;

        dispatch(userLogin({ userInfo, userToken }));
        navigate('/userdashboard');
      } else {
        Swal.fire('Error', response.data.error || 'Invalid credentials', 'error');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Network or server error. Please try again.', 'error');
    }
  };

  return (
    <Page>
     <LeftPanel>
  <h1
    style={{
      fontSize: '2rem',
      fontWeight: 'bold',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)',
    }}
  >
    Welcome Back to Skylink Bank
  </h1>
  <p>Log in to access your account.</p>
</LeftPanel>


      <RightPanel>
        <Form onSubmit={handleSubmit}>
          <Title>Login to Your Account</Title>

          <FormGroup>
            <label>Account Number*</label>
            <Input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <label>Password*</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>

          <Button type="submit">Sign In</Button>

          <AuthPrompt onClick={() => navigate('/signup')}>
            Don't have an account? <strong>Register</strong>
          </AuthPrompt>
        </Form>
      </RightPanel>
    </Page>
  );
};

export default UserLogin;
