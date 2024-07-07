// src/components/pages/LoginPage.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './LoginPage.css'; // Importa tus estilos personalizados
import { FaUser, FaLock } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md'; // Importa un ícono de usuario

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="login-container container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="icon-container">
              <MdPerson className="icon-person" />
            </div>
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="form-group position-relative">
                  <FaUser className="input-icon" />
                  <input
                    type="email"
                    className="form-control rounded-pill pl-5"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group position-relative">
                  <FaLock className="input-icon" />
                  <input
                    type="password"
                    className="form-control rounded-pill pl-5"
                    id="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-dark rounded-pill">Iniciar sesión</button>
                </div>
                <div className="text-center mt-3">
                  <a href="/forgot-password" className="forgot-password">Forgot your password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 text-center">
          <button className="btn btn-dark rounded-pill create-account-btn" onClick={() => window.location.href='/register-company'}>
            Crear cuenta
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
