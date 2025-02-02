import React from 'react';

const Services = () => (
  <section id="services" className="banner banner-1 p-0">
    <div className="container-fluid col-padding-0">
      <div className="row">
        <div className="col-lg-6 bg-theme">
          <div className="inner-padding">
            <div className="heading heading- heading-white mb-40">
              <h2 className="heading__title">Our Services</h2>
            </div>
            <ul className="list list-items list-items-white">
              <li>CNC Bridge Milling</li>
              <li>CNC Boring</li>
              <li>CNC Vertical Lathe</li>
              <li>CNC Vertical Milling</li>
              <li>CNC Horizontal Lathe</li>
              <li>Manual Lathe</li>
              <li>Welded Manufacturing</li>
              <li>Custom Machine Manufacturing</li>
              <li>Engineering and Consulting</li>
              <li>CAD and CAM with computer-aided 3D design</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 d-none d-sm-block background-banner bg-overlay">
          <div className="bg-img"><img src="/assets/img/banners/5.jpg" alt="background" style={{pointerEvents: 'none'}} /></div>
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
