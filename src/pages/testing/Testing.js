import React from 'react';

// Styles
import './Testing.css';

export default function Testing() {
  return (
    <div className='testingContainer'>
      <div className='gradient'></div>
      <img src={require('../../assets/homeImage.jpg')} alt='' />
    </div>
  );
}
