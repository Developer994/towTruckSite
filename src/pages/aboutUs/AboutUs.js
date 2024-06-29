import React from 'react';
import Footer from '../../components/Footer/Footer';

// Style
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className='main-abtUs'>
      <div className='gradientAbtUs'></div>
      <img
        className='bckgImage'
        src={require('../../assets/towing.jpg')}
        alt=''
      />
      <div className='abtUsContainer'>
        <h1 className='abtUsH1'>Let us introduce ourselves!</h1>
        <p className='abtUsPara'>
          We at Quick Towing Ltd. are a family-owned business that started in
          early 2024. We are located in (address goes here). Our goal was to
          provide services to those around the GTA locations, mainly in
          Brampton, Mississauga and Oakville.
        </p>
      </div>
      <Footer />
    </div>
  );
}
