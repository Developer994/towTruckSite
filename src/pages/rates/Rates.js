import React from 'react';
import Footer from '../../components/Footer/Footer';

// Style
import './Rates.css';

export default function Rates() {
  return (
    <div className='main-rates'>
      <div className='ratesContainer'>
        <div className='ourRatesIntroContainer'>
          <img
            className='ourRatesImg'
            src={require('../../assets/ourRatesIntro.jpg')}
            alt=''
          />
          <div className='ourRatesIntro'>
            <h1>Our Rates</h1>
            <h2>We've got outstanding rates for our services!</h2>
          </div>
        </div>
        <div className='ratesSubContainer'>
          <div className='servicesAndRates'>
            <div className='service'>
              <h2>
                <ul className='ulRates'>
                  <li>TOWING A CAR</li>
                  <li>TOWING A HEAVY VEHICLE</li>
                  <li>TRANSFER SMALL STORED VEHICLE</li>
                  <li>INFLATING A TIRE</li>
                  <li>PATCHING A TIRE</li>
                  <li>BOOSTING/JUMPING BATTERY</li>
                </ul>
              </h2>
            </div>
            <div className='rate'>
              <h2>
                <ul className='ulRates'>
                  <li>$x/km</li>
                  <li>$x/km</li>
                  <br />
                  <li>$x/km</li>
                  <br />
                  <li>$x/tire</li>
                  <li>$x/tire</li>
                  <li>$x</li>
                </ul>
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
