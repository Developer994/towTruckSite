import React from 'react';
import Footer from '../../components/Footer/Footer';

// Styles
import './Home.css';

export default function Home() {
  return (
    <div className='main-container-home'>
      <div className='homeContainer'>
        <div className='subContainer1'>
          <img
            className='towTruck1'
            src={require('../../assets/homeImage.jpg')}
            alt=''
          />
          <h2 className='subContainer1Text1'>
            We will tow your car whenever you need too!
          </h2>
          <h1 className='subContainer1Text2'>
            Affordable prices for whatever the distance
          </h1>
          <h1 className='subContainer1Text3'>
            Call us and we will be there in minutes!
          </h1>
        </div>

        <div className='subContainer2'>
          <div className='serviceExamplesContainer'>
            <h2 className='ourServicesTitle'>Our Top Services</h2>
            <div className='example'>
              <img
                className='ourServicesImage'
                src={require('../../assets/jumpers.jpg')}
                alt=''
              />
              <h3 className='exampleText exampleText1'>
                We can jump your car if you ever run into a dead battery!
              </h3>
            </div>
            <div className='example'>
              <h3 className='exampleText exampleText2'>
                Need towing? Not a problem! We have a wide range of drivers
                across the GTA!
              </h3>
              <img
                className='ourServicesImage'
                src={require('../../assets/towing.jpg')}
                alt=''
              />
            </div>
            <div className='example'>
              <img
                className='ourServicesImage'
                src={require('../../assets/tire.jpg')}
                alt=''
              />
              <h3 className='exampleText exampleText3'>
                Our service men can repair or replace your tires on the spot!
              </h3>
            </div>
          </div>
        </div>

        <div className='subContainer3'>
          <h1 className='subContainer3Content1'>
            <p>If we can't fix it, we know great mechanics who can!</p>
          </h1>
          <h3 className='subContainer3Content2'>
            <img
              src={require('../../assets/mechanics/mechanic1.jpg')}
              alt=''
              className='mechanicImage'
            />
            <img
              src={require('../../assets/mechanics/mechanic2.jpg')}
              alt=''
              className='mechanicImage'
            />
            <img
              src={require('../../assets/mechanics/mechanic3.jpg')}
              alt=''
              className='mechanicImage'
            />
            <img
              src={require('../../assets/mechanics/mechanic4.jpg')}
              alt=''
              className='mechanicImage'
            />
          </h3>
        </div>

        <div className='subContainer4'>
          <div className='subContainer4Content1'>
            <h1>OUR HOURS:</h1>
            <h2>24/7, holidays included</h2>
            <h1>OFFICE HOURS:</h1>
            <h2>
              monday to friday, <br /> 9am - 7pm
            </h2>
          </div>
          <div className='subContainer4Content2'>
            <h1>WE ACCEPT:</h1>
            <h2>- Debit</h2>
            <h2>- Interac</h2>
            <h2>- E-transfer</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
