import React from 'react';
import './PricingCard.css';

const PricingCard = ({ title, subtitle, price, features, buttonText, isProfessional, onSelect }) => {
  return (
    <div className={`pricing-card ${isProfessional ? 'professional' : ''}`}>
      <h2 className="pricing-card-title">{title}</h2>
      <p className="pricing-card-subtitle">{subtitle}</p>
      <div className="pricing-card-price">{price}</div>
      <button className="pricing-card-button" onClick={onSelect}>{buttonText}</button>
      <ul className="pricing-card-features">
        {features.map((feature, index) => (
          <li key={index} className="pricing-card-feature">
            <i className={`fas fa-check-circle feature-icon ${feature.available ? 'available' : 'feature-icon'}`}></i>
            {feature.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
