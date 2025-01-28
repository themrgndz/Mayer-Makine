import React from 'react';

const Footer = () => (
  <footer id="iletisim" className="footer">
    <div className="footer-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="footer__copyright">
              <span><b>TESAN</b> TESAN GLOBAL MÜHENDİSLİK ANONİM ŞİRKETİ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header__topbar d-xl-block">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <ul className="contact__list list-unstyled">
              <li><i className="fa fa-location-arrow"></i><span>Karadenizliler Mah. Kahraman Sk. Kapı No: 13 /1 Başiskele KOCAELİ</span></li>
              <li><i className="fa fa-phone"></i><span><a href="tel:0507 706 33 50">0507 706 33 50</a></span></li>
              <li><i className="fa fa-envelope"></i><span><a href="mailto:info@tesanmuhendislik.com">info@tesanmuhendislik.com</a></span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
