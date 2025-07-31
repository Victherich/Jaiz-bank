// Import background image
import bgImg from '../Images4/signupbg.png';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Page = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f9fff9;
  font-family: 'Segoe UI', sans-serif;

  @media (max-width: 884px) {
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
  max-width: 700px;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 6px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Select = styled.select`
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

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Label = styled.label`
  font-weight: 500;
  color: green;
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

const UserSignUp = () => {
  const [form, setForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    accountType: 'savings',
    address: '',
    postalCode: '0000',
    state: 'default',
    country: 'default',
    currency: 'NGN',
    password: '',
    confirmPassword: '',
    pin: '',
    agree: false,
  });
  const [confirmEmail, setConfirmEmail]=useState('')
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
        const countryNames = res.data.map(c => c.name.common).sort();
        setCountries(countryNames);
      })
      .catch(() => {
        setCountries(['United States', 'Canada', 'Nigeria', 'India']);
      });
  }, []);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async e => {
  e.preventDefault();

  if (!form.agree) {
    Swal.fire('Error', 'You must agree to the terms and conditions.', 'error');
    return;
  }


  if (form.email !== confirmEmail) {
    Swal.fire('Error', 'Emails do not match', 'error');
    return;
  }
  

  Swal.fire({
    title: 'Creating your account...',
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading()
  });

  try {
    const response = await axios.post('https://jizbankplc.com/api/user_signup.php', form); // 🔁 Replace with your actual backend URL

    if (response.data.success) {
console.log(response.data);

const data = response.data;

      sendWelcomeEmail({
  name: data.name,
  email: data.email,
  accountNumber: data.account_number
});

    } else {
      Swal.fire('Error', response.data.error || 'Something went wrong', 'error');
      console.log(response.data)
    }
  } catch (error) {
    console.error(error);
    Swal.fire('Error', 'Network or server error. Please try again.', 'error');
  }
};




const sendWelcomeEmail = async ({ name, email, accountNumber }) => {
  if (!name || !email || !accountNumber) {
    Swal.fire('Missing Info', 'Name, email, and account number are required.', 'warning');
    return;
  }

  Swal.fire({
    title: 'Sending Welcome Email...',
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading()
  });

  try {
    const response = await fetch('https://elexdonhost.com.ng/api_elexdonhost/jiz_welcome.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, accountNumber })
    });

    const result = await response.json();

    if (result.success) {
      Swal.fire('Success', result.message, 'success');
      navigate('/login')
    } else {
      Swal.fire('Error', result.error || 'Something went wrong.', 'error');
    }
  } catch (err) {
    Swal.fire('Network Error', 'Could not connect to the server.', 'error');
  }
};

 

  return (
    <Page>
      <LeftPanel>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)' }}>Enroll with Jiz Bank Plc</h1>
        <p>Your journey to smarter banking begins now.</p>
      </LeftPanel>

      <RightPanel>
        <Form onSubmit={handleSubmit}>
          <Title>Create Account</Title>

          <FormGrid>
            <FormGroup>
              <Label>First Name*</Label>
              <Input name="firstName" onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label>Middle Name</Label>
              <Input name="middleName" onChange={handleChange} />
            </FormGroup>

            <FormGroup>
              <Label>Last Name*</Label>
              <Input name="lastName" onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label>Email*</Label>
              <Input name="email" type="email" onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label>Confirm Email*</Label>
              <Input name="confirmEmail" type="email" onChange={(e)=>setConfirmEmail(e.target.value)} required />
            </FormGroup>

            <FormGroup>
              <Label>Phone Number*</Label>
              <Input name="phone" onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label>Gender*</Label>
              <Select name="gender" onChange={handleChange} required>
                <option value="">Select an option</option>
                <option>Male</option>
                <option>Female</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Date of Birth*</Label>
              <Input name="dob" type="date" onChange={handleChange} required />
            </FormGroup>

            {/* <FormGroup>
              <Label>Account Type*</Label>
              <Select name="accountType" onChange={handleChange} required>
                <option value="">Select an option</option>
                <option>Checking Account</option>
                <option>Saving Account</option>
                <option>Fixed Deposit Account</option>
                <option>Current Account</option>
                <option>Business Account</option>
                <option>Non Resident Account</option>
                <option>Cooperate Business Account</option>
                <option>Investment Account</option>
              </Select>
            </FormGroup> */}

            <FormGroup>
              <Label>Complete Residential Address*</Label>
              <Input name="address" onChange={handleChange} required />
            </FormGroup>

            {/* <FormGroup>
              <Label>Postal Code*</Label>
              <Input name="postalCode" onChange={handleChange} required />
            </FormGroup> */}

            {/* <FormGroup>
              <Label>State*</Label>
              <Input name="state" onChange={handleChange} required />
            </FormGroup> */}

            {/* <FormGroup>
              <Label>Country*</Label>
              <Select name="country" onChange={handleChange} required>
                <option value="">Select a country</option>
                {countries.map((c, idx) => (
                  <option key={idx} value={c}>{c}</option>
                ))}
              </Select>
            </FormGroup> */}

            {/* <FormGroup>
              <Label>Currency*</Label>
              <Select name="currency" onChange={handleChange} required>
                <option value="">Select a currency</option>
                <option>($) Dollar</option>
                <option>(€) Euros</option>
                <option>(£) Pounds</option>
                <option>(元) Yuan</option>
                <option>(¥) Yen</option>
                <option>(₩) Won</option>
                <option>(₦) Naira</option>
                <option>(₹) Indian Rupee</option>
                <option>(₱) Pesos</option>
              </Select>
            </FormGroup> */}

            <FormGroup>
              <Label>Password*</Label>
              <Input name="password" type="password" onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label>Confirm Password*</Label>
              <Input name="confirmPassword" type="password" onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label>Account PIN*</Label>
              <Input name="pin" type="password" onChange={handleChange} maxLength={6} required />
            </FormGroup>

            <FormGroup style={{ gridColumn: '1 / -1' }}>
              <Label>
                <Checkbox type="checkbox" name="agree" onChange={handleChange} required />
                I agree with the Terms & Conditions
              </Label>
            </FormGroup>
          </FormGrid>

          <Button type="submit">Create Account</Button>

          <AuthPrompt onClick={() => navigate('/login')}>
            Have an account? <strong>Sign In</strong>
          </AuthPrompt>
        </Form>
      </RightPanel>
    </Page>
  );
};

export default UserSignUp;
