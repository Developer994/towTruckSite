import React from 'react';
import Nav from './Nav/Nav';
import { Link } from 'react-router-dom';

// Styles
import './Header.css';

export default function Header() {
  return (
    <div className='mainHeaderContainer'>
      <div className='headerContainer'>
        <Link to='/' className='homeLink'>
          <h1 className='siteName'>Quick Towing</h1>
        </Link>
        <div className='contactContainer'>
          <h3 className='contactUs'>Contact us</h3>
          <h5 className='phoneNumber'>(xxx) xxx-xxxx</h5>
        </div>
      </div>
      <div className='navContainer'>
        <Nav />
      </div>
    </div>
  );
}
