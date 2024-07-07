import React from 'react';
import './RegisterButtonPage.css'; // Importa tus estilos personalizados
import logo from '../../assets/images/logo.png'; // Ajusta la ruta según tu estructura de archivos
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate


const RegisterButtonPage = () => {
  const navigate = useNavigate(); // Usa el hook useNavigate para la navegación programática
  return (
    <div className="register-container">
      <div className="card">
        <img src={logo} alt="PointHub Logo" className="logo" />
        <button className="btn btn-warning rounded-pill" onClick={() => alert('Soy consumidor seleccionado')}>
          Soy consumidor
        </button>
        <button className="btn btn-warning rounded-pill" onClick={() => alert('Soy empresa seleccionada')}>
          Soy empresa
        </button>
        <a href="/login" className="already-registered"  onClick={() => navigate('/login')}>Ya estoy registrado</a>
      </div>
    </div>
  );
};

export default RegisterButtonPage;
