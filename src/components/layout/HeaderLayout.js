import React from 'react';
import Header from '../common/Header'; // Ajusta la ruta según tu estructura de archivos
import './HeaderLayout.css'; // Importa tus estilos personalizados

const HeaderLayout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default HeaderLayout;
