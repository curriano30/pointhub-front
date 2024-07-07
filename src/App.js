import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import RegisterButtonPage from './components/pages/RegisterButtonPage';
import HeaderLayout from './components/layout/HeaderLayout'; // Ajusta la ruta según tu estructura de archivos

function App() {
  return (
    <Router>
      <HeaderLayout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register-company" element={<RegisterButtonPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </HeaderLayout>
    </Router>
  );
}

export default App;
