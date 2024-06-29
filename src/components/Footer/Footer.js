import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className='main-footer'>
      &copy;{new Date().getFullYear()} QuickTowing Ltd
    </div>
  );
}
