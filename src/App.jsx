import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from './components/Header';
import HeaderEn from './components/HeaderEn';
import HeaderDe from './components/HeaderDe';

import Slider from './components/Slider';
import SliderEn from './components/SliderEn';
import SliderDe from './components/SliderDe';

import About from './components/About';
import AboutEn from './components/AboutEn';
import AboutDe from './components/AboutDe';

import Services from './components/Services';
import ServicesEn from './components/ServicesEn';
import ServicesDe from './components/ServicesDe';

import Certificates from './components/Certificates';
import CertificatesEn from './components/CertificatesEn';
import CertificatesDe from './components/CertificatesDe';

import Gallery from './components/Gallery';
import GalleryEn from './components/GalleryEn';
import GalleryDe from './components/GalleryDe';

import Footer from './components/Footer';
import FooterEn from './components/FooterEn';
import FooterDe from './components/FooterDe';

import ScroolToTop from './components/ScroolToTop';
import ScroolToTopEn from './components/ScroolToTopEn';
import ScroolToTopDe from './components/ScroolToTopDe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/en" element={<div className="App">
            <HeaderEn />
            <SliderEn />
            <AboutEn />
            <ServicesEn />
            <CertificatesEn />
            <GalleryEn />
            <FooterEn />
            <ScroolToTopEn />
          </div>} />
        <Route path="/" element={<div className="App">
            <Header />
            <Slider />
            <About />
            <Services />
            <Certificates />
            <Gallery />
            <Footer />
            <ScroolToTop />
          </div>} />
        <Route path="/de" element={<div className="App">
            <HeaderDe />
            <SliderDe />
            <AboutDe />
            <ServicesDe />
            <CertificatesDe />
            <GalleryDe />
            <FooterDe />
            <ScroolToTopDe />
          </div>} />
      </Routes>
    </Router>
  );
}

export default App;
