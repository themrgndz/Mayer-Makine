import React from 'react';

const Services = () => (
  <section id="hizmetlerimiz" className="banner banner-1 p-0">
    <div className="container-fluid col-padding-0">
      <div className="row">
        <div className="col-lg-6 bg-theme">
          <div className="inner-padding">
            <div className="heading heading- heading-white mb-40">
              <h2 className="heading__title">Unsere Dienstleistungen</h2>
            </div>
            <ul className="list list-items list-items-white">
              <li>CNC Brückenfräsen</li>
              <li>CNC Borwerk</li>
              <li>CNC Vertikal-Drehmaschine</li>
              <li>CNC Vertikalfräsen</li>
              <li>CNC Horizontal-Drehmaschine</li>
              <li>Manuelle Drehmaschine</li>
              <li>Schweißfertigung</li>
              <li>Spezialmaschinenbau</li>
              <li>Engineering und Beratung</li>
              <li>CAD und CAM mit computergestütztem 3D-Design</li>
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
