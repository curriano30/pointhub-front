// src/components/common/Tabs.jsx
import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('monthly');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="tabs-container">
      <button
        className={`tab-button ${activeTab === 'monthly' ? 'active' : ''}`}
        onClick={() => handleTabChange('monthly')}
      >
        Mensual
      </button>
      <button
        className={`tab-button ${activeTab === 'yearly' ? 'active' : ''}`}
        onClick={() => handleTabChange('yearly')}
      >
        Anual
      </button>
    </div>
  );
};

export default Tabs;
