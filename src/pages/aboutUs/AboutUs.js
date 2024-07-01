import React from 'react';

// Style
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className='main-abtUs'>
      <img
        className='bckgImage'
        src={require('../../assets/towing.jpg')}
        alt=''
      />

      <div className='abtUsContainer'>
        <div className='abtUsSubContainer'>
          <h1 className='abtUsH1'>Let us introduce ourselves!</h1>
          <p className='abtUsPara'>
            We at Quick Towing Ltd. are a family-owned business that started in
            early 2024. We are located in (address goes here). Our goal was to
            provide services to those around the GTA locations, mainly in
            Brampton, Mississauga and Oakville.
          </p>
        </div>
      </div>
    </div>
  );
}
