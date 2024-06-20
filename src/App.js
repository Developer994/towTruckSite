import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>{/* <Route path='/' element={<Home />}></Route> */}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
