import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const [navMenu, setNavMenu] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!ref.current.contains(e.target)) {
        setNavMenu(false);
      }
    };
    document.body.addEventListener('click', closeDropdown);

    return () => document.body.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <div className='mainNavContainer'>
      <div
        className='hamburgerContainer'
        onClick={() => {
          setNavMenu((state) => !state);
        }}
        ref={ref}
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
          <Link to='/towTruckSite/AboutUs' className='burgerItem'>
            about us
          </Link>
          <Link to='/towTruckSite/OurServices' className='burgerItem'>
            services
          </Link>
          <Link to='/towTruckSite/Rates' className='burgerItem'>
            rates
          </Link>
          <Link to='/towTruckSite/ContactUs' className='burgerItem'>
            contact us
          </Link>
        </div>
      </div>
      <div className='navContainer'>
        <Link to='/towTruckSite/AboutUs' className='navItem'>
          about us
        </Link>
        <Link to='/towTruckSite/OurServices' className='navItem'>
          services
        </Link>
        <Link to='/towTruckSite/Rates' className='navItem'>
          rates
        </Link>
        <Link to='/towTruckSite/ContactUs' className='navItem'>
          contact us
        </Link>
      </div>
    </div>
  );
}
