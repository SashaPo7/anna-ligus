import React from 'react';

import AboutMe from "../сomponents/AboutMe";
import Header from "../сomponents/Header";
import Hero from "../сomponents/Hero";
import Portfolio from "../сomponents/portfolio/Portfolio";
import Services from "../сomponents/Services";
import Footer from "../сomponents/Footer";
import Awards from '../сomponents/Awards';

function Main() {
  return (
    <div className="bg-[#212121]">
      <Header />
      <Hero/>
      <Portfolio/>
      <Services/>
      <AboutMe/>
      <Awards/>
      <Footer/>
    </div>
  );
}

export default Main; 