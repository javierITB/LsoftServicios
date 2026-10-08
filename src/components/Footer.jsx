import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div>
        <img
          src="/images/lsoft-modern-logo.svg"
          alt="LSOFT Servicios Informáticos"
          width="292"
          height="82"
        />
        <p>Desarrollo de software a medida, integraciones y soporte tecnológico.</p>
      </div>

      <nav aria-label="Navegacion secundaria">
        <a href="#servicios">Servicios</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#tecnologias">Tecnologías</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <p className="rights">
        &copy; {currentYear} LSOFT Servicios Informáticos. Todos los derechos reservados.
      </p>
    </footer>
  );
}
