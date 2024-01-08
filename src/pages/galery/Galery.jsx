import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PortfolioHeader from "../../сomponents/PortfolioHeader";
import PortfolioFooter from "../../сomponents/PortfolioFooter";
import Light from './gal-pages/Light';
import Magazines from './gal-pages/Magazines';
import Nude from './gal-pages/Nude';
import Interior from './gal-pages/Interior';
import Best from './gal-pages/Best';

function Galery() {
  return(
    <div id="Home" className='bg-[#FFFFFF]'>
      <PortfolioHeader/>
      <Routes>
        <Route path="/" element={<Best/>} />
        <Route path="nude" element={<Nude/>} />
        <Route path="light" element={<Light/>} />
        <Route path="magazines" element={<Magazines/>} />
        <Route path="interior" element={<Interior/>} />
      </Routes>
      <PortfolioFooter />
    </div>
  );
}

export default Galery;