import React from 'react';

import HeaderEn from '../components/HeaderEn';
import SliderEn from '../components/SliderEn';
import AboutEn from '../components/AboutEn';
import ServicesEn from '../components/ServicesEn';
import CertificatesEn from '../components/CertificatesEn';
import GalleryEn from '../components/GalleryEn';
import FooterEn from '../components/FooterEn';
import ScroolToTopEn from '../components/ScroolToTopEn';

function En() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700%7cPoppins:400,600,700&display=swap"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      <div className="En">
        <HeaderEn />
        <SliderEn />
        <AboutEn />
        <ServicesEn />
        <CertificatesEn />
        <GalleryEn />
        <FooterEn />
        <ScroolToTopEn/>
      </div>
      
    </>
  );
}

export default En;
