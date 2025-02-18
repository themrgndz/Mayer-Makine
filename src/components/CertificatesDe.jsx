import React from 'react';

const Certificates = () => (
  <section id="sertifikalarimiz" className="banner banner-2 p-0">
    <div className="container-fluid col-padding-0">
      <div className="row">
        <div className="col-lg-6 d-none d-sm-block background-banner bg-overlay">
          <div className="bg-img"><img src="/assets/img/banners/6.png" alt="background" style={{pointerEvents: 'none'}} /></div>
        </div>
        <div className="col-lg-6 bg-theme">
          <div className="inner-padding">
            <div className="heading heading-3 heading-white mb-40">
              <h2 className="heading__title">Unsere Zertifikate</h2>
            </div>
            <ul className="list-unstyled list-items list-items-white">
              <li><a href="/assets/Certificate/Tesan9001.pdf" target="_blank" class="text-white">ISO-9001</a></li>
              <li><a href="/assets/Certificate/Tesan10002.pdf" target="_blank" class="text-white">ISO-10002</a></li>
              <li><a href="/assets/Certificate/Tesan14001.pdf" target="_blank" class="text-white">ISO-14001</a></li>
              <li><a href="/assets/Certificate/Tesan31000.pdf" target="_blank" class="text-white">ISO-31000</a></li>
              <li><a href="/assets/Certificate/Tesan3834.pdf" target="_blank" class="text-white">ISO-3834</a></li>
              <li><a href="/assets/Certificate/Tesan45001.pdf" target="_blank" class="text-white">ISO-45001</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Certificates;
