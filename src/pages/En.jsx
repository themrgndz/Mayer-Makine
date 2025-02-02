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
