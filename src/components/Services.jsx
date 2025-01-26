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
              <li>CNC Dik İşleme</li>
              <li>CNC Yatay Torna</li>
              <li>Manuel Torna</li>
              <li>Çelik Konstrüksiyon İmalatı</li>
              <li>CAD ve CAM ile Bilgisayar Destekli 3D Tasarım</li>
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
