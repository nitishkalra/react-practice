import Header from './components/Header';
import Footer from './components/Footer';
import Distributors from './components/Distributors';
import DistributorSheet from './components/DistributorSheet';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import './css/App.css';
function App() {
  return (
    <React.Fragment>
      <Header />
      <div id="hireMe">Hire Me!!</div>
        <BrowserRouter>
            <Routes> 
                <Route path='/' element={<Distributors />} />
                <Route path='/:distributorId' element={<DistributorSheet />} />
                <Route path="*" element={<h2>You are at the wrong door!</h2>} />
            </Routes>
        </BrowserRouter>
      <Footer />
    </React.Fragment>
    
  );
}
// https://mockapi.io/projects/623b558c8e9af5878941b35c
// https://623b558c8e9af5878941b35b.mockapi.io/distributers
export default App;
