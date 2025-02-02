import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);  // Track the menu open/close state
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

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <header id="header" className="header header-white header-full fixed-top">
      <nav className="navbar navbar-expand-lg sticky-navbar">
        <div className="container">
          <a className="navbar-brand" href="/" style={{ textDecoration: 'none' }}>
            <img src="/assets/img/logo/logo-dark.svg" className="logo" alt="logo" />
          </a>
          <button
            className={`navbar-toggler ${menuOpen ? 'actived' : ''}`}
            type="button"
            onClick={toggleMenu}
            aria-controls="mainNavigation"
            aria-expanded={menuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="menu-lines"><span></span></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-end ${menuOpen ? 'menu-opened' : ''}`} id="mainNavigation">
            <ul className="navbar-nav">
              <li className="nav__item">
                <a href="#hakkimizda" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Über uns</a>
              </li>
              <li className="nav__item">
                <a href="#hizmetlerimiz" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Unsere Dienstleistungen</a>
              </li>
              <li className="nav__item">
                <a href="#sertifikalarimiz" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Unsere Zertifikate</a>
              </li>
              <li className="nav__item">
                <a href="#Katalog" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Katalog</a>
              </li>
              <li className="nav__item">
                <a href="#galeri" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Galerie</a>
              </li>
              <li className="nav__item">
                <a href="#iletisim" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Kontakt</a>
              </li>
              <li className="nav__item">
                <a href="#/en" className="nav__item-link" style={{ textDecoration: 'none' }}>EN</a>
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
};

export default Header;
