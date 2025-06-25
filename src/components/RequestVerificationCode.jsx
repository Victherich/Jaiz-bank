
// import React, { useState } from "react";
// import styled from "styled-components";
// import Swal from "sweetalert2";

// const RequestVerificationCode = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSendCode = async (e) => {
//     e.preventDefault();

//     Swal.fire({
//       title: "Sending code...",
//       allowOutsideClick: false,
//       didOpen: () => {
//         Swal.showLoading();
//       },
//     });

//     setLoading(true);

//     try {
//       const response = await fetch("https://jizbankplc.com/api/send_verification_code.php", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const result = await response.json();
//       Swal.close();
//       setLoading(false);

//       if (result.success) {
//         Swal.fire({
//           icon: "success",
//           title: "Verification Code Sent",
//           text: result.message,
//           confirmButtonColor: "#003366",
//         });
//         setEmail("");
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Failed",
//           text: result.error,
//           confirmButtonColor: "#cc0000",
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       Swal.close();
//       setLoading(false);
//       Swal.fire({
//         icon: "error",
//         title: "Network Error",
//         text: "Something went wrong. Please try again.",
//         confirmButtonColor: "#cc0000",
//       });
//     }
//   };

//   return (
//     <Container>
//       <Card>
//         <Title>Request Verification Code</Title>
//         <Form onSubmit={handleSendCode}>
//           <Input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <Button type="submit" disabled={loading}>
//             {loading ? "Sending..." : "Send Code"}
//           </Button>
//         </Form>
//       </Card>
//     </Container>
//   );
// };

// export default RequestVerificationCode;

// // Styled Components
// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 40px 20px;
//   min-height: 100vh;
//   background-color: #f0f4f8;
// `;

// const Card = styled.div`
//   background: white;
//   padding: 40px 30px;
//   border-radius: 12px;
//   box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
//   max-width: 400px;
//   width: 100%;
//   text-align: center;
// `;

// const Title = styled.h2`
//   margin-bottom: 25px;
//   color: #003366;
//   font-size: 1.8rem;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

// const Input = styled.input`
//   padding: 12px 16px;
//   font-size: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   transition: 0.2s ease;

//   &:focus {
//     border-color: #003366;
//     outline: none;
//   }
// `;

// const Button = styled.button`
//   background: #003366;
//   color: white;
//   padding: 12px;
//   border: none;
//   border-radius: 8px;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: 0.3s ease;

//   &:hover {
//     background: #001f4d;
//   }

//   &:disabled {
//     background: #ccc;
//     cursor: not-allowed;
//   }
// `;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

const EmailVerificationRequest = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendCode = async (e) => {
    e.preventDefault();
  
    Swal.fire({
      title: "Sending code...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  
    setLoading(true);
  
    try {
      const response = await fetch("https://jizbankplc.com/api/send_verification_code.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
  
      const text = await response.text(); // Get raw text response
  
      // Check if the response is JSON
      let result;
      try {
        result = JSON.parse(text); // Try to parse it as JSON
      } catch (jsonErr) {
        console.error("JSON parse error:", jsonErr);
        throw new Error("Invalid server response. Please contact support.");
      }
  
      Swal.close();
      setLoading(false);
      
      if (result.success) {
        navigate('/verifyEmail')
        Swal.fire({
          icon: "success",
          title: "Verification Code Sent",
          text: `${result.message}. Check your email inbox or spam folder.`,
          confirmButtonColor: "#003366",
        });
        setEmail(""); // Reset email field
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: result.error,
          confirmButtonColor: "#cc0000",
        });
      }
    } catch (error) {
      console.error("Request failed:", error);
      Swal.close();
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: error.message || "Something went wrong. Please try again.",
        confirmButtonColor: "#cc0000",
      });
    }
  };
  
  return (
    <Container>
      <Card>
        <Title>Request Email Verification</Title>
        <Form onSubmit={handleSendCode}>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Verification Code"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default EmailVerificationRequest;

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f4f8;
  min-height: 100vh;
  padding: 40px 20px;
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
