import React from 'react';

const Header = () => (
  <header id="header" className="header header-white header-full fixed-top">
    <nav className="navbar navbar-expand-lg sticky-navbar">
      <div className="container">
        <a className="navbar-brand" href="/" style={{ textDecoration: 'none' }}>
          <img src="./src/assets/img/logo/1.svg" className="logo-light" alt="logo" />
          <img src="./src/assets/img/logo/1.svg" className="logo-dark" alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavigation" aria-controls="mainNavigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="menu-lines"><span></span></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="mainNavigation">
          <ul className="navbar-nav">
            <li className="nav__item">
              <a href="#hakkimizda" className="nav__item-link" style={{ textDecoration: 'none' }}>About Us</a>
            </li>
            <li className="nav__item">
              <a href="#hizmetlerimiz" className="nav__item-link" style={{ textDecoration: 'none' }}>Our Services</a>
            </li>
            <li className="nav__item">
              <a href="#our-certificates" className="nav__item-link" style={{ textDecoration: 'none' }}>Our Certificates</a>
            </li>
            <li className="nav__item">
              <a href="#gallery" className="nav__item-link" style={{ textDecoration: 'none' }}>Gallery</a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__item-link" style={{ textDecoration: 'none' }}>Contact</a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__item-link" style={{ textDecoration: 'none' }}>TR</a>
            </li>
            <li className="nav__item">
              <a href="/de" className="nav__item-link" style={{ textDecoration: 'none' }}>DE</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
