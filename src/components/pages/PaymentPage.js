import React from 'react';
import { useLocation } from 'react-router-dom';
import StripeWrapper from './PaymentForm'; // Importa el wrapper de Stripe
import './PaymentPage.css';

const PaymentPage = () => {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan || {};

  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      <div className="payment-form">
        <StripeWrapper selectedPlan={selectedPlan} />
      </div>
    </div>
  );
};

export default PaymentPage;
