// StudentResetPassword.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const Container = styled.div`
  min-height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const FormWrapper = styled.div`
  padding: 2.5rem;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: green;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

// const Input = styled.input`
//   padding: 0.75rem;
//   margin-bottom: 1rem;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   font-size: 1rem;
//   &:focus {
//     border-color: #000050;
//     outline: none;
//   }
// `;


const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: green;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: gray;
  }
`;

const UserResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);



  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Passwords do not match',
      });
      return;
    }

    Swal.fire({
      title: 'Please wait...',
      text: 'Resetting your password...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const res = await fetch('https://jizbankplc.com/api2/user_reset_password.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();
      Swal.close();

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: data.message || 'Password reset successfully!',
        }).then(() => {
          navigate('/login');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: data.message || 'Failed to reset password.',
        });
      }
    } catch (err) {
      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Reset Your Password</Title>
        <Form onSubmit={handleSubmit}>
        <div style={{ position: 'relative' }}>
          <Input
            type={passwordVisible ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            {passwordVisible ? '🙈' : '👁️'}
          </button>
        </div>
      
          {/* <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required /> */}

      
          {/* <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password" required /> */}
          <div style={{ position: 'relative' }}>
          <Input
            type={confirmPasswordVisible ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            required
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            {confirmPasswordVisible ? '🙈' : '👁️'}
          </button>
        </div>
          <Button type="submit">Reset Password</Button>
        </Form>
        <p onClick={() => navigate("/login")} style={{ color: "#000050", cursor: "pointer" }}>Back to Login</p>
      </FormWrapper>
    </Container>
  );
};

export default UserResetPassword;

