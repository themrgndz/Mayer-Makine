import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <header id="header" className="header header-white header-full fixed-top">
      <nav className="navbar navbar-expand-lg sticky-navbar">
        <div className="container">
          <a className="navbar-brand" href="/" style={{ textDecoration: 'none' }}>
            <img src="/assets/img/logo/logo-light.png" className="logo-light" alt="logo" />
            <img src="/assets/img/logo/logo-dark.svg" className="logo-dark" alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavigation" aria-controls="mainNavigation" aria-expanded="false" aria-label="Toggle navigation">
            <span className="menu-lines"><span></span></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="mainNavigation">
            <ul className="navbar-nav">
              <li className="nav__item">
                <a href="#hakkimizda" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>About Us</a>
              </li>
              <li className="nav__item">
                <a href="#hizmetlerimiz" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Our Services</a>
              </li>
              <li className="nav__item">
                <a href="#sertifikalarimiz" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Our Certificates</a>
              </li>
              <li className="nav__item">
                <a href="#Katalog" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Catalog</a>
              </li>
              <li className="nav__item">
                <a href="#galeri" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Gallery</a>
              </li>
              <li className="nav__item">
                <a href="#iletisim" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Contact</a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__item-link" style={{ textDecoration: 'none' }}>Tr</a>
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
};

export default Header;
