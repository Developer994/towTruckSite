import React, { useState } from 'react';
import './Nav.css';

export default function Nav() {
  const [navMenu, setNavMenu] = useState(false);

  return (
    <div className='mainNavContainer'>
      <div
        className='hamburgerContainer'
        onClick={() => {
          setNavMenu((state) => !state);
        }}
      >
        <div
          className={`burger-bar ${navMenu ? 'clicked' : 'unclicked'}`}
        ></div>
        <div
          className={`burger-bar ${navMenu ? 'clicked' : 'unclicked'}`}
        ></div>
        <div
          className={`burger-bar ${navMenu ? 'clicked' : 'unclicked'}`}
        ></div>
      </div>
      <div className='navContainer'>
        <span className='navItem'>about us</span>
        <span className='navItem'>services</span>
        <span className='navItem'>rates</span>
        <span className='navItem'>contact us</span>
      </div>
    </div>
  );
}
