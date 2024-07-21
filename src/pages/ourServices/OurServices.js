import React from 'react';
import Footer from '../../components/Footer/Footer';

// Style
import './OurServices.css';

export default function OurServices() {
  return (
    <div className='main-ourServices'>
      <div className='ourServicesContainer'>
        <h1>Our Services</h1>
        <p>We offer a wide range of services such as:</p>
        <ul className='ulOurServices'>
          <li>Boosting dead car battery</li>
          <li>Towing light-weight vehicles</li>
          <li>Towing heavy trucks and commercial vehicles</li>
          <li>Inflating flat tires</li>
          <li>Patching certain small leaks in tires</li>
          <li>
            Vehicle recovery if your vehicle was towed away. <br />
            If we cannot recover your vehicle in situations such as being
            impounded,
            <br />
            we can assist in directing as to what steps to take to find your
            vehicle.
          </li>
          <li>
            Transporting an insured vehicle with an appropriate insurance for
            transportation (e.g. A stored vehicle)
          </li>
          <li>
            Offering our affiliated mechanics for service if the vehicle needs
            to be serviced or repaired
          </li>
        </ul>
      </div>
    </div>
  );
}
