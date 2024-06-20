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
        <div className={`burgerItems ${navMenu ? 'active' : 'inactive'}`}>
          <span className='burgerItem'>about us</span>
          <span className='burgerItem'>services</span>
          <span className='burgerItem'>rates</span>
          <span className='burgerItem'>contact us</span>
        </div>
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
