import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    const handleResize = () => {
      if (window.innerWidth > 860) {
        setIsNavOpen(false);
        document.body.classList.remove('nav-open');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add('nav-open');
      } else {
        document.body.classList.remove('nav-open');
      }
      return next;
    });
  };

  const handleLinkClick = () => {
    setIsNavOpen(false);
    document.body.classList.remove('nav-open');
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} data-header>
      <a className="brand" href="#inicio" aria-label="LSOFT Servicios Informáticos">
        <img
          src="/images/lsoft-modern-logo.svg"
          alt="LSOFT Servicios Informáticos"
          width="292"
          height="82"
        />
      </a>

      <button
        className="nav-toggle"
        type="button"
        data-nav-toggle
        aria-label="Abrir menu"
        aria-expanded={isNavOpen}
        onClick={toggleNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`site-nav ${isNavOpen ? 'is-open' : ''}`} data-nav>
        <a href="#servicios" onClick={handleLinkClick}>Servicios</a>
        <a href="#experiencia" onClick={handleLinkClick}>Experiencia</a>
        <a href="#tecnologias" onClick={handleLinkClick}>Tecnologías</a>
        <a href="#contacto" onClick={handleLinkClick}>Contacto</a>
      </nav>

      <a
        className="header-cta"
        href="https://wa.me/56995377845?text=Hola%20LSOFT,%20necesito%20informacion%20sobre%20sus%20servicios"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    </header>
  );
}
