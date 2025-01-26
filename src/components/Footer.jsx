import React from 'react';

const Footer = () => (
  <footer id="iletisim" className="footer">
    <div className="footer-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="footer__copyright">
              <span><b>MAYER</b> METAL MAKİNA İNŞAAT SANAYİ VE TİCARET LİMİTED ŞİRKETİ</span>
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
              <li><i className="fa fa-location-arrow"></i><span>Karadenizliler Mah. Akkol Sk. Kapı No: 24 /1 Başiskele KOCAELİ</span></li>
              <li><i className="fa fa-phone"></i><span><a href="tel:0532 367 65 41">0532 367 65 41</a></span></li>
              <li><i className="fa fa-envelope"></i><span><a href="mailto:info@mayermakina.com">info@mayermakina.com</a></span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
