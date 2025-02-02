import React from 'react';

import HeaderDe from '../components/HeaderDe';
import SliderDe from '../components/SliderDe';
import AboutDe from '../components/AboutDe';
import ServicesDe from '../components/ServicesDe';
import CertificatesDe from '../components/CertificatesDe';
import GalleryDe from '../components/GalleryDe';
import FooterDe from '../components/FooterDe';
import ScroolToTopDe from '../components/ScroolToTopDe';

function De() {
  return (
    <>
      <div className="De">
        <HeaderDe />
        <SliderDe />
        <AboutDe />
        <ServicesDe />
        <CertificatesDe />
        <GalleryDe />
        <FooterDe />
        <ScroolToTopDe/>
      </div>
    </>
  );
}

export default De;
