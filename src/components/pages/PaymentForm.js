import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key-here');

const PaymentForm = ({ selectedPlan }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phoneNumber: '',
    billingAddress: '',
  });
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: formData.companyName,
        email: formData.email,
        phone: formData.phoneNumber,
        address: {
          line1: formData.billingAddress,
        },
      },
    });

    if (error) {
      console.error(error);
    } else {
      console.log('PaymentMethod:', paymentMethod);
      // Lógica para procesar el pago con el paymentMethod.id
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre de Empresa</label>
        <input 
          type="text" 
          name="companyName" 
          value={formData.companyName} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Numero de teléfono</label>
        <input 
          type="tel" 
          name="phoneNumber" 
          value={formData.phoneNumber} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Billing Address (Optional)</label>
        <input 
          type="text" 
          name="billingAddress" 
          value={formData.billingAddress} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Payment Details</label>
        <CardElement />
      </div>
      <button type="submit" disabled={!stripe}>Confirm and Pay</button>
    </form>
  );
};

const StripeWrapper = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm {...props} />
    </Elements>
  );
};

export default StripeWrapper;
