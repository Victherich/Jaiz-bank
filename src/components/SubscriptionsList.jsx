import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Styled Components
const Container = styled.div`
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

const Title = styled.h3`
  color: #3C9E37;
  margin-bottom: 0.5rem;
`;

const Detail = styled.p`
  margin: 0.25rem 0;
`;

const Label = styled.span`
  font-weight: bold;
`;

const SubscriptionList = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [searchEmail, setSearchEmail] = useState('');

  useEffect(() => {
    axios.get('https://jizbankplc.com/api2/get_all_current_subscriptions.php')
      .then(response => {
        if (response.data.success) {
          setSubscriptions(response.data.subscriptions);
        } else {
          console.error(response.data.error);
        }
      })
      .catch(error => {
        console.error('Error fetching subscriptions:', error);
      });
  }, []);

  const filtered = subscriptions.filter(sub =>
    sub.email.toLowerCase().includes(searchEmail.toLowerCase())
  );

  return (
    <Container>
      <h2 style={{ color: "#3C9E37" }}>User Subscriptions</h2>
      <SearchInput
        type="text"
        placeholder="Search by email..."
        value={searchEmail}
        onChange={(e) => setSearchEmail(e.target.value)}
      />

      <CardGrid>
        {filtered.length > 0 ? (
          filtered.map(sub => (
            <Card key={sub.subscription_id}>
              <Title>{sub.plan_name}</Title>
              <Detail><Label>User:</Label> {`${sub.first_name} ${sub.middle_name || ''} ${sub.last_name}`}</Detail>
              <Detail><Label>Email:</Label> {sub.email}</Detail>
              <Detail><Label>Phone:</Label> {sub.phone}</Detail>
              <Detail><Label>Amount Paid:</Label> {sub.amount_paid} {sub.sub_currency}</Detail>
              <Detail><Label>Duration:</Label> {sub.duration}</Detail>
              <Detail><Label>Start:</Label> {new Date(sub.start_date).toLocaleString()}</Detail>
              <Detail><Label>End:</Label> {new Date(sub.end_date).toLocaleString()}</Detail>
              <Detail><Label>Transaction ID:</Label> {sub.transaction_id}</Detail>
              {/* <Detail><Label>Balance:</Label> ${parseFloat(sub.balance).toFixed(2)}</Detail> */}
            </Card>
          ))
        ) : (
          <p>No subscriptions found.</p>
        )}
      </CardGrid>
    </Container>
  );
};

export default SubscriptionList;
