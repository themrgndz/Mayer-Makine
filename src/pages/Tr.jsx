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
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700%7cPoppins:400,600,700&display=swap"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
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
