
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

const EmailVerification = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();

    // Show loading
    Swal.fire({
      title: "Verifying...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch("https://elitewealthglobal.com/api/verify_email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, code }),
      });

      const result = await response.json();
      Swal.close(); // Close loading

      if (result.success) {
        navigate('/login')
        Swal.fire({
          icon: "success",
          title: "Verified!",
          text: `${result.message}. You can now login`,
          confirmButtonColor: "#003366",
        });
        setEmail("");
        setCode("");
      } else {
        Swal.fire({
          icon: "error",
          title: "Verification Failed",
          text: result.error,
          confirmButtonColor: "#cc0000",
        });
      }
    } catch (err) {
        console.error(err)
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#cc0000",
      });
    }
  };

  return (
    <Container>
      <Card>
        <Title>Email Verification</Title>
        <h3 style={{color:"#000050"}}>
            Please enter your email and the 6 digit code sent to your email.
        </h3>
        <Form onSubmit={handleVerify}>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Enter 6-digit code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            maxLength={6}
            required
          />
          <Button type="submit">Verify Email</Button>
        </Form>
      </Card>
    </Container>
  );
};


export default EmailVerification;


 const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background: #f0f4f8;
  min-height: 100vh;
`;

const Card = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  max-width: 420px;
  width: 100%;
  text-align: center;
`;

 const Title = styled.h2`
  margin-bottom: 25px;
  color: #003366;
  font-size: 1.8rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

 const Input = styled.input`
  padding: 12px 16px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: border 0.2s ease;

  &:focus {
    border-color: #003366;
    outline: none;
  }
`;

 const Button = styled.button`
  background: #003366;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #001f4d;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;


