import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div className='burgerBars'>
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

        <div className={`burgerItems ${navMenu ? 'active' : 'inactive'}`}>
          <span className='burgerItem'>about us</span>
          <span className='burgerItem'>services</span>
          <span className='burgerItem'>rates</span>
          <span className='burgerItem'>contact us</span>
        </div>
      </div>
      <div className='navContainer'>
        <Link to='/AboutUs' className='navItem'>
          about us
        </Link>
        <Link to='/OurServices' className='navItem'>
          services
        </Link>
        <Link to='/Rates' className='navItem'>
          rates
        </Link>
        <Link to='/ContactUs' className='navItem'>
          contact us
        </Link>
      </div>
    </div>
  );
}
