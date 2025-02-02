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
            <img src="/assets/img/logo/logo-dark.svg" className="logo-dark" alt="logo" />
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
                <a href="#aboutus" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>About Us</a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Our Services</a>
              </li>
              <li className="nav__item">
                <a href="#certificates" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Our Certificates</a>
              </li>
              <li className="nav__item">
                <a href="#catalog" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Catalog</a>
              </li>
              <li className="nav__item">
                <a href="#gallery" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Gallery</a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Contact</a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__item-link" style={{ textDecoration: 'none' }}>TR</a>
              </li>
              <li className="nav__item">
                <a href="#/de" className="nav__item-link" style={{ textDecoration: 'none' }}>DE</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
