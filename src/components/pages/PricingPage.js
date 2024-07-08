// src/components/pages/PricingPage.jsx
import React, { useState } from 'react';
import PricingCard from '../common/PricingCard';
import Tabs from '../common/Tabs';
import './PricingPage.css';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleTabChange = (tab) => {
    setBillingCycle(tab);
  };

  const features = [
    { name: "Lorem ipsum dolor sit amet", available: true },
    { name: "Consectetur adipiscing elit", available: true },
    { name: "Integer molestie lorem at massa", available: true },
    { name: "Facilisis in pretium nisl aliquet", available: false },
    { name: "Nulla volutpat aliquam velit", available: false },
  ];

  return (
    <div>
      <Tabs onTabChange={handleTabChange} />
      <div className="pricing-container">
        <PricingCard 
          title="Básico" 
          subtitle="Para pequeños locales" 
          price={billingCycle === 'monthly' ? "$49/mo" : "$529/yr"} 
          features={features} 
          buttonText="Adquirir" 
        />
        <PricingCard 
          title="Profesional" 
          subtitle="Para grandes locales" 
          price={billingCycle === 'monthly' ? "$79/mo" : "$849/yr"} 
          features={features} 
          buttonText="Adquirir" 
          isProfessional 
        />
        <PricingCard 
          title="Empresarial" 
          subtitle="Para varios locales" 
          price={billingCycle === 'monthly' ? "$189/mo" : "$1999/yr"} 
          features={features} 
          buttonText="Adquirir" 
        />
      </div>
    </div>
  );
};

export default PricingPage;
