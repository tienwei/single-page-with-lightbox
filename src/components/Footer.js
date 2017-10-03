import React from 'react';
import Logo from './Logo';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <Logo modifier='logo--footer' />
      <div className='footer__content'>
        <ul className='footer__links'>
          <li><a className='footer__link' href='#'>Home</a></li>
          <li><a className='footer__link' href='#'>About IAG</a></li>
          <li><a className='footer__link' href='#'>Results & Reports</a></li>
        </ul>
        <ul className='footer__links'>
          <li><a className='footer__link' href='#'>Shareholder Centre</a></li>
          <li><a className='footer__link' href='#'>Shared Value</a></li>
          <li><a className='footer__link' href='#'>News & Events</a></li>
        </ul>
        <ul className='footer__links'>
          <li><a className='footer__link' href='#'>Careers</a></li>
        </ul>
      </div>
    </footer>
  )
};

export default Footer;