import React from 'react';
import logo from '../assets/images/logo.png';

const Logo = ({ modifier = '' }) => (
  <img src={logo} className={`logo ${modifier}`} alt='iag logo' />
);

export default Logo;