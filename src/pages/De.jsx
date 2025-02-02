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
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700%7cPoppins:400,600,700&display=swap"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
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
