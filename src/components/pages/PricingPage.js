// src/components/pages/PricingPage.jsx
import React from 'react';
import PricingCard from '../common/PricingCard';
import './PricingPage.css';

const PricingPage = () => {
  const features = [
    { name: "Lorem ipsum dolor sit amet", available: true },
    { name: "Consectetur adipiscing elit", available: true },
    { name: "Integer molestie lorem at massa", available: true },
    { name: "Facilisis in pretium nisl aliquet", available: false },
    { name: "Nulla volutpat aliquam velit", available: false },
  ];

  return (
      <div className="pricing-container">
        <PricingCard title="Básico" subtitle="Para pequeños locales" price="$49/mo" features={features} buttonText="Adquirir" />
        <PricingCard title="Profesional" subtitle="Para grandes locales" price="$79/mo" features={features} buttonText="Adquirir" isProfessional />
        <PricingCard title="Empresarial" subtitle="Para varios locales" price="$189/mo" features={features} buttonText="Adquirir" />
      </div>
  );
};

export default PricingPage;
