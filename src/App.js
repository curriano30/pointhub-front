import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import PricingPage from './components/pages/PricingPage';
import HeaderLayout from './components/layout/HeaderLayout'; // Ajusta la ruta según tu estructura de archivos
import PaymentPage from './components/pages/PaymentPage';
import UserRegisterPage from './components/pages/UserRegisterPage';
import './assets/styles/general.css'

function App() {
  return (
    <Router>
      <HeaderLayout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/user-register" element={<UserRegisterPage />} />
        </Routes>
      </HeaderLayout>
    </Router>
  );
}

export default App;
