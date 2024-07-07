import React from 'react';
import logo from '../../assets/images/logo.png'; // Ajusta la ruta según tu estructura de archivos

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="PointHub Logo" className="header-logo" />
    </header>
  );
};

export default Header;
