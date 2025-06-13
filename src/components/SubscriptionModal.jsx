import React, { useState, useContext } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import PaystackPop from "@paystack/inline-js";
import { Context } from "./Context"; // Adjust path as needed

const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 128, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  max-width: 600px;
  width: 90%;
  padding: 24px;
  box-shadow: 0 0 20px rgba(0, 128, 0, 0.2);
`;

const PlanCard = styled.div`
  border: 2px solid green;
  border-radius: 12px;
  margin-bottom: 16px;
  padding: 5px;
  cursor: pointer;
  background: ${(props) => (props.selected ? "green" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};

  h3 {
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
  }

  &:hover {
    background: green;
    color: white;
  }
`;

const SubscribeButton = styled.button`
  background: green;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
  width: 100%;
`;

const parseDuration = (duration) => {
  const start = new Date();
  const end = new Date(start);
  if (duration.includes("min")) end.setMinutes(end.getMinutes() + parseInt(duration));
  else if (duration.includes("Month")) end.setMonth(end.getMonth() + parseInt(duration));
  else if (duration.includes("Year")) end.setFullYear(end.getFullYear() + parseInt(duration));
  return { start, end };
};

export default function SubscriptionModal({ onClose, userEmail, userId }) {
  const { plans } = useContext(Context);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const rate = 1500;

  const subscribe = () => {
    if (!selectedPlan) return Swal.fire("Select a plan first!");

    Swal.fire({
      title: "Are you sure?",
      text: `You are about to subscribe to "${selectedPlan.name}" for ${selectedPlan.currency}${selectedPlan.price} (NGN ${selectedPlan.price * rate}).`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        payWithPaystack();
      }
    });
  };

  // ✅ Main Paystack handler
  const payWithPaystack = () => {
    const paystack = new PaystackPop();
    const priceInNGN = selectedPlan.price * rate;
    const { start, end } = parseDuration(selectedPlan.duration);

    paystack.newTransaction({
      key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
      amount: priceInNGN * 100, // Paystack expects amount in kobo
      email: userEmail,
      firstname: "User", // Replace with dynamic user name if available
      onSuccess: (transaction) => {
        Swal.fire({ icon: "success", text: "Payment successful!" });
        saveSubscription(transaction.reference, priceInNGN, start, end);
      },
      onCancel: () => {
        Swal.fire({ icon: "error", text: "Payment cancelled.", showConfirmButton: true });
      },
      onError: (error) => {
        Swal.fire({ icon: "error", text: `Payment failed: ${error.message}`, showConfirmButton: true });
      },
    });
  };

  // ✅ Save subscription to backend
  const saveSubscription = async (transactionRef, priceInNGN, start, end) => {
    const payload = {
      user_id: userId,
      plan_name: selectedPlan.name,
      amount_paid: priceInNGN,
      currency: "NGN",
      duration: selectedPlan.duration,
      start_date: start.toISOString(),
      end_date: end.toISOString(),
      transaction_id: transactionRef,
    };

    Swal.fire({ icon: "info", title: "Saving subscription...", didOpen: () => Swal.showLoading() });

    try {
      const response = await fetch("https://skylinkteamb.com/api2/save-subscription.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        Swal.fire("Saved!", "Subscription successfully recorded!", "success");
        onClose();
        window.location.reload();
      } else {
        throw new Error(result.error || "Could not save subscription");
      }
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <h2>Select a Plan</h2>
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            selected={selectedPlan === plan}
            onClick={() => setSelectedPlan(plan)}
          >
            <h4>{plan.name}</h4>
            <p>
              <strong>Price: </strong> {plan.currency}
              {plan.price}
            </p>
            <p>
              <strong>Duration:</strong> {plan.duration}
            </p>
          </PlanCard>
        ))}
        <SubscribeButton onClick={subscribe}>Subscribe</SubscribeButton>
        <SubscribeButton onClick={onClose} style={{ backgroundColor: "#ccc", color: "#333" }}>
          Cancel
        </SubscribeButton>
      </ModalContent>
    </ModalWrapper>
  );
}
