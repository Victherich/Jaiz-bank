
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 20px;
  color: #006400;
`;

const Card = styled.div`
  background: #fff;
  border: 2px solid #006400;
  border-left: 10px solid ${(props) => (props.expired ? "red" : "green")};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 0 10px rgba(0,100,0,0.1);
`;

const Row = styled.p`
  margin: 5px 0;
  font-size: 0.95rem;

  strong {
    color: #333;
  }
`;

const StatusTag = styled.span`
  background: ${(props) => (props.expired ? "#ff4d4d" : "#32cd32")};
  color: white;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: bold;
`;

export default function SubscriptionHistory({ userId }) {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    if (!userId) return;
    fetch(`https://jizbankplc.com/api/get_user_subscriptions.php?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSubscriptions(data.subscriptions);
          console.log(data.subscriptions)
        } else {
          console.error("Error:", data.error);
        }
      })
      .catch(() => console.error("Network issue while loading subscriptions"));
  }, [userId]);

//   const isExpired = (endDate) => new Date(endDate) < new Date();

const isExpired = (endDateString) => {
  const endDate = new Date(endDateString.replace(/-/g, "/"));
  const now = new Date();
  return endDate.getTime() < now.getTime();
};


  return (
    <Container>
      <Title>Your Current Transfer Subscription</Title>
      {subscriptions.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>No subscription found.</p>
      ) : (
        subscriptions
          .sort((a, b) => b.id - a.id)
          .slice(0, 3)
          .map((sub, idx) => {
            // const expired = isExpired(sub.end_date);
            return (
              <Card key={idx}>
                <Row><strong>Plan:</strong> {sub.plan_name}</Row>
                <Row><strong>Amount Paid:</strong> {sub.currency} {sub.amount_paid}</Row>
                <Row><strong>Duration:</strong> {sub.duration} </Row>


                {/* displays date and time to user */}
                {/* <Row><strong>Start:</strong> {new Date(sub.start_date).toLocaleString()}</Row>
                <Row><strong>End:</strong> {new Date(sub.end_date).toLocaleString()}</Row> */}



                {/* displays only date to user */}
                <Row><strong>Start:</strong> {sub.start_date}</Row> 
<Row><strong>End:</strong> {sub.end_date}</Row>
                {/* <Row> 
                  <strong>Status:</strong>{" "}
                  <StatusTag expired={expired}>{expired ? "Expired" : "Active"}</StatusTag>
                </Row> */}
                <Row><strong>Transaction Ref:</strong> {sub.transaction_id}</Row>
              </Card>
            );
          })
      )}
    </Container>
  );
}
