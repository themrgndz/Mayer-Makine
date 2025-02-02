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
          <Link className="navbar-brand" to="/" style={{ textDecoration: 'none' }}>
            <img src="/assets/img/logo/1.svg" className="logo-light" alt="logo" />
            <img src="/assets/img/logo/1.svg" className="logo-dark" alt="logo" />
          </Link>
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
                <a href="#our-certificates" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Our Certificates</a>
              </li>
              <li className="nav__item">
                <a href="#Katalog" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Catalog</a>
              </li>
              <li className="nav__item">
                <a href="#galeri" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Gallery</a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__item-link" onClick={handleScroll} style={{ textDecoration: 'none' }}>Contact</a>
              </li>
              <li className="nav__item">
                <button onClick={() => navigate("/")} className="nav__item-link btn-link">TR</button>
              </li>
              <li className="nav__item">
                <button onClick={() => navigate("/de")} className="nav__item-link btn-link">DE</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
