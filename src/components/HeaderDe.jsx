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
              <a href="#hakkimizda" className="nav__item-link" style={{ textDecoration: 'none' }}>Über uns</a>
            </li>
            <li className="nav__item">
              <a href="#hizmetlerimiz" className="nav__item-link" style={{ textDecoration: 'none' }}>Unsere Dienstleistungen</a>
            </li>
            <li className="nav__item">
              <a href="#sertifikalarimiz" className="nav__item-link" style={{ textDecoration: 'none' }}>Unsere Zertifikate</a>
            </li>
            <li className="nav__item">
              <a href="#Katalog" className="nav__item-link" style={{ textDecoration: 'none' }}>Katalog</a>
            </li>
            <li className="nav__item">
              <a href="#galeri" className="nav__item-link" style={{ textDecoration: 'none' }}>Galerie</a>
            </li>
            <li className="nav__item">
              <a href="#iletisim" className="nav__item-link" style={{ textDecoration: 'none' }}>Kontakt</a>
            </li>
            <li className="nav__item">
              <a href="/en" className="nav__item-link" style={{ textDecoration: 'none' }}>EN</a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__item-link" style={{ textDecoration: 'none' }}>TR</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
