import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import ContactUs from './pages/contactUs/ContactUs';
import OurServices from './pages/ourServices/OurServices';
import Rates from './pages/rates/Rates';
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
            <Route path='/' element={<Home />}></Route>
            <Route path='/AboutUs' element={<AboutUs />}>
              AboutUs
            </Route>
            <Route path='/ContactUs' element={<ContactUs />}>
              ContactUs
            </Route>
            <Route path='/OurServices' element={<OurServices />}>
              OurServices
            </Route>
            <Route path='/Rates' element={<Rates />}>
              Rates
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
