import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className='homeContainer'>
      <img
        className='towTruck1'
        src={require('../../assets/homeImage.jpg')}
        alt=''
      />
    </div>
  );
}
