import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className='homeContainer'>
      <div className='gradient'></div>
      <img
        className='towTruck1'
        src={require('../../assets/homeImage.jpg')}
        alt=''
      />

      <h2 className='text1'>We will tow your car whenever you need too!</h2>
      <h1 className='text2'>Affordable prices for whatever the distance</h1>

      <div className='serviceExamplesContainer'>
        <h2 className='ourServicesTitle'>Our Top Services</h2>
        <div className='example'>
          <img
            className='jumperCable'
            src={require('../../assets/jumpers.jpg')}
            alt=''
          />
          <h3 className='exampleText exampleText1'>
            We can jump your car if you ever run into a dead battery!
          </h3>
        </div>
        <div className='example'>
          <h3 className='exampleText exampleText2'>
            Need towing? Not a problem! We have a wide range of drivers across
            the GTA!
          </h3>
          <img
            className='jumperCable'
            src={require('../../assets/towing.jpg')}
            alt=''
          />
        </div>
        <div className='example'>
          <img
            className='jumperCable'
            src={require('../../assets/tire.jpg')}
            alt=''
          />
          <h3 className='exampleText exampleText3'>
            Our service men can repair or replace your tires on the spot!
          </h3>
        </div>
      </div>
    </div>
  );
}
