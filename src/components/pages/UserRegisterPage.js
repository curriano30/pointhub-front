// src/components/pages/RegisterPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './UserRegisterPage.css'; // Importa tus estilos personalizados

const UserRegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [type, setType] = useState('consumer'); // Por defecto, consumer
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const typeParam = params.get('type');
    if (typeParam) {
      setType(typeParam);
    }
  }, [location]);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    if (!termsAccepted) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }
    // Lógica de registro aquí
    // Puedes usar el estado `type` para determinar el tipo de usuario al registrarse
  };

  return (
    <div className="register-container">
      <div className="card-user-register">
        <div className="card-body">
          <h2 className="card-title card-title-user-register text-center mb-4">Registro de Usuario</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group form-group-user-register">
              <label htmlFor="username">Nombre de Usuario</label>
              <input
                type="text"
                className="form-control form-control-user-register"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group form-group-user-register">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control form-control-user-register"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group form-group-user-register">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                className="form-control form-control-user-register"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group form-group-user-register">
              <label htmlFor="confirmPassword">Repetir Contraseña</label>
              <input
                type="password"
                className="form-control form-control-user-register"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group form-group-user-register form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                required
              />
              <label className="form-check-label" htmlFor="terms">
                Acepto la Política de Privacidad, Términos y Condiciones
              </label>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-dark rounded-pill">Crear</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegisterPage;
