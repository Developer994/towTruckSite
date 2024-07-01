import React from 'react';
import Footer from '../../components/Footer/Footer';

// Style
import './Rates.css';

export default function Rates() {
  return (
    <div className='main-rates'>
      <div className='ratesContainer'>
        <div className='ratesSubContainer'>
          <h1>Rates</h1>
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
                  <li>$4/km</li>
                  <li>$10/km</li>
                  <br />
                  <li>$4/km</li>
                  <br />
                  <li>$2.5/tire</li>
                  <li>$7/tire</li>
                  <li>$5/km</li>
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
