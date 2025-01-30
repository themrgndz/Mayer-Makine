import React from 'react';

const Services = () => (
  <section id="hizmetlerimiz" className="banner banner-1 p-0">
    <div className="container-fluid col-padding-0">
      <div className="row">
        <div className="col-lg-6 bg-theme">
          <div className="inner-padding">
            <div className="heading heading- heading-white mb-40">
              <h2 className="heading__title">Hizmetlerimiz</h2>
            </div>
            <ul className="list list-items list-items-white">
              <li>CNC Köprülü Dik İşleme</li>
              <li>CNC Borwerk</li>
              <li>CNC Dik Torna</li>
              <li>CNC Dik İşleme</li>
              <li>CNC Yatay Torna</li>
              <li>Manuel Torna</li>
              <li>Kaynaklı İmalat</li>
              <li>Özel Makine İmalatı</li>
              <li>Mühendislik ve Danışmanlık</li>
              <li>CAD ve CAM le bilgisayar destekli 3D tasarım</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 d-none d-sm-block background-banner bg-overlay">
          <div className="bg-img"><img src="./src/assets/img/banners/5.jpg" alt="background" style={{pointerEvents: 'none'}} /></div>
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
