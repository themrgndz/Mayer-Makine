import React from 'react';

import Header from '../components/Header';
import Slider from '../components/Slider';
import About from '../components/About';
import Services from '../components/Services';
import Certificates from '../components/Certificates';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import ScroolToTop from '../components/ScroolToTop';

function Tr() {
  return (
    <>
      <div className="Tr">
        <Header />
        <Slider />
        <About />
        <Services />
        <Certificates />
        <Gallery />
        <Footer />
        <ScroolToTop/>
      </div>
      
    </>
  );
}

export default Tr;
