// src/components/common/Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, type = 'button' }) => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

export default Button;
