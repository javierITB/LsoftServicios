import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true"></div>
      <div className="hero-motion" aria-hidden="true"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="eyebrow">Software, integraciones y soporte tecnológico</p>
        <h1>Desarrollo de software a medida para empresas que necesitan avanzar.</h1>
        <p className="hero-copy">
          En LSOFT diseñamos, construimos y mantenemos soluciones informáticas adaptadas a la operación real de cada cliente, con foco en calidad, continuidad y resultados medibles.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contacto">
            Conversemos
          </a>
          <a className="button button-secondary" href="#servicios">
            Ver servicios
          </a>
        </div>
        <dl className="hero-metrics" aria-label="Indicadores de LSOFT">
          <div>
            <dt>18+</dt>
            <dd>años de experiencia</dd>
          </div>
          <div>
            <dt>Web</dt>
            <dd>frontend y backend</dd>
          </div>
          <div>
            <dt>Cloud</dt>
            <dd>Azure y DevOps</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
