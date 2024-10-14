import Header from './components/Header/Header';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import ContactUs from './pages/contactUs/ContactUs';
import OurServices from './pages/ourServices/OurServices';
import Rates from './pages/rates/Rates';
import Testing from './pages/testing/Testing';
import Footer from './components/Footer/Footer';

// Styles
import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/towTruckSite' element={<Home />}>
              Home
            </Route>
            <Route path='/towTruckSite/AboutUs' element={<AboutUs />}>
              AboutUs
            </Route>
            <Route path='/towTruckSite/ContactUs' element={<ContactUs />}>
              ContactUs
            </Route>
            <Route path='/towTruckSite/OurServices' element={<OurServices />}>
              OurServices
            </Route>
            <Route path='/towTruckSite/Rates' element={<Rates />}>
              Rates
            </Route>
            <Route path='/towTruckSite/Testing' element={<Testing />}></Route>
          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
    </>
  );
}

export default App;
