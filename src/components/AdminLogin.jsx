import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import { adminLogin } from '../Features/Slice';
import { UseDispatch, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
  color:#3C9E37;
`;

const Form = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  // box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color:#3C9E37;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  
  &:hover {
    background-color: gray;
  }
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  
`;

const Title = styled.h2`
  text-align: center;
  
`;

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  // Handle login
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

    // Show loading
    Swal.fire({
      title: 'Loading...',
      text: 'Please wait while we log you in...',
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await axios.post('https://jizbankplc.com/api/admin_login.php', { email, password });

      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: response.data.message,
        });
        console.log(response.data)
        
        const adminInfo = response.data.user;
        const adminToken = response.data.token;

        // Dispatch login action with a single object containing both adminInfo and adminToken
        dispatch(adminLogin({ adminInfo, adminToken }));

        navigate('/admin');

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: response.data.error,
        });
      }
    } catch (error) {

      console.error(error)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'There was an error connecting to the server.',
      });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Title>Admin Login</Title>
        
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
       
        
        <Button type="submit">Login</Button>
        {/* <p 
        style={{marginTop:"10px", cursor:"pointer"}}
        onClick={()=>navigate('/adminsignup')}>Don't have an account? Sign Up</p> */}
        <p 
        style={{marginTop:"10px", cursor:"pointer"}}
        onClick={()=>navigate('/adminforgotpassword')}>Forgot Password</p>
      </Form>
    </Container>
  );
};

export default AdminLogin;
