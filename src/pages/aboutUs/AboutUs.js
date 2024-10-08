import React from 'react';
import { Link } from 'react-router-dom';

// Style
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className='main-abtUs'>
      <img
        className='bckgImage'
        src={require('../../assets/abtUs/abtUsBkg.jpg')}
        alt=''
      />

      <div className='abtUsContainer'>
        <div className='abtUsSubContainer'>
          <h1 className='abtUsTitle'>Let us introduce ourselves!</h1>
          <p className='abtUsPara'>
            <h3>
              We at Quick Towing Ltd. are a family-owned business that started
              in early 2024. We are located in (address goes here). Our goal was
              to provide services to those around the GTA locations, mainly in
              Brampton, Mississauga and Oakville.{' '}
            </h3>
          </p>
        </div>
        <div className='topServicesContainer'>
          <p className='topServicesTitle'>Top Services</p>
          <div className='topServicesList'>
            <p>TOWING SMALL VEHICLES - $x/km</p>
            <p>TIRE INFLATION - $x/tire</p>
            <p>JUMPING DEAD BATTERY - $x</p>
          </div>
        </div>
        <div className='otherServicesContainer'>
          <p className='otherServicesTitle'>Other Services</p>
          <div className='otherServicesImages'>
            <img
              className='otherServicesImage'
              src={require('../../assets/abtUs/abtUsJumper.jpg')}
              alt=''
            />
            <img
              className='otherServicesImage'
              src={require('../../assets/abtUs/abtUsTire.jpg')}
              alt=''
            />
            <img
              className='otherServicesImage'
              src={require('../../assets/abtUs/abtUsTools.jpg')}
              alt=''
            />
          </div>
          <p className='otherServicesPara'>
            There are several more services that we provide at Quick Towing!
          </p>

          <Link to='/OurServices' className='moreServicesBtn'>
            More Services
          </Link>
        </div>
      </div>
    </div>
  );
}
