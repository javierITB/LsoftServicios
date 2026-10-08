import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Cpu,
  Layers,
  Network,
  ShieldCheck,
  Zap,
  Activity,
  ArrowRight,
  Database,
  Lock,
  GitBranch,
  Server,
  FileCode,
  CheckCircle,
} from 'lucide-react';
import ArchitectureViewer from './ArchitectureViewer';
import TerminalDemo from './TerminalDemo';

export default function DeepTechView() {
  const [techStackForm, setTechStackForm] = useState({
    name: '',
    email: '',
    techStack: '',
    problem: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uptime, setUptime] = useState(99.97);

  // Simulate live uptime ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setUptime((prev) => {
        const newVal = prev + (Math.random() * 0.006 - 0.002);
        return Math.min(99.99, Math.max(99.95, newVal));
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setTechStackForm({ name: '', email: '', techStack: '', problem: '' });
    }, 4000);
  };

  return (
    <div className="variant-deeptech-page">
      {/* Cyber Nav Header */}
      <header className="tech-nav-header">
        <div className="tech-header-container">
          <a href="#inicio" className="tech-brand-logo">
            <img src="/images/lsoft-modern-logo.svg" alt="LSOFT Enterprise" width="160" height="45" />
            <span className="brand-badge-tech">Sistemas &amp; Arquitectura</span>
          </a>

          <nav className="tech-nav-links">
            <a href="#arquitectura">Arquitectura</a>
            <a href="#telemetria">Monitor</a>
            <a href="#capacidades">Capacidades</a>
            <a href="#estandares">Principios</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a
            href="https://wa.me/56995377845?text=Estimados%20LSOFT,%20deseamos%20coordinar%20una%20sesion%20tecnica%20de%20arquitectura%20e%20integracion%20de%20sistemas."
            className="tech-cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Sesión de Arquitectura</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════
          IMMERSIVE HERO — Cybernetic Architecture Visualization
         ═══════════════════════════════════════════════════════════════ */}
      <section className="tech-hero" id="inicio">
        {/* Animated grid background */}
        <div className="grid-overlay-bg"></div>

        {/* Floating hexagonal architecture visualization */}
        <div className="tech-hero-visual">
          <svg className="arch-hero-svg" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="violetLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.15" />
              </linearGradient>
              <filter id="neonGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <radialGradient id="techCoreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Hexagonal rings */}
            <polygon className="hex-ring hex-1" points="350,80 570,207 570,462 350,590 130,462 130,207" />
            <polygon className="hex-ring hex-2" points="350,140 510,242 510,447 350,550 190,447 190,242" />
            <polygon className="hex-ring hex-3" points="350,200 450,278 450,432 350,510 250,432 250,278" />

            {/* Data flow lines */}
            <line className="data-flow df-1" x1="350" y1="80" x2="350" y2="200" />
            <line className="data-flow df-2" x1="570" y1="207" x2="450" y2="278" />
            <line className="data-flow df-3" x1="570" y1="462" x2="450" y2="432" />
            <line className="data-flow df-4" x1="350" y1="590" x2="350" y2="510" />
            <line className="data-flow df-5" x1="130" y1="462" x2="250" y2="432" />
            <line className="data-flow df-6" x1="130" y1="207" x2="250" y2="278" />

            {/* Core glow */}
            <circle cx="350" cy="345" r="80" fill="url(#techCoreGlow)" className="tech-core-pulse" />

            {/* Architecture layer nodes */}
            <circle className="arch-node node-outer" cx="350" cy="80" r="10" filter="url(#neonGlow)" />
            <circle className="arch-node node-outer" cx="570" cy="207" r="10" filter="url(#neonGlow)" />
            <circle className="arch-node node-outer" cx="570" cy="462" r="10" filter="url(#neonGlow)" />
            <circle className="arch-node node-outer" cx="350" cy="590" r="10" filter="url(#neonGlow)" />
            <circle className="arch-node node-outer" cx="130" cy="462" r="10" filter="url(#neonGlow)" />
            <circle className="arch-node node-outer" cx="130" cy="207" r="10" filter="url(#neonGlow)" />

            {/* Mid-ring nodes */}
            <circle className="arch-node node-mid" cx="350" cy="140" r="7" />
            <circle className="arch-node node-mid" cx="510" cy="242" r="7" />
            <circle className="arch-node node-mid" cx="510" cy="447" r="7" />
            <circle className="arch-node node-mid" cx="350" cy="550" r="7" />
            <circle className="arch-node node-mid" cx="190" cy="447" r="7" />
            <circle className="arch-node node-mid" cx="190" cy="242" r="7" />

            {/* Inner core nodes */}
            <circle className="arch-node node-core" cx="350" cy="200" r="6" />
            <circle className="arch-node node-core" cx="450" cy="278" r="6" />
            <circle className="arch-node node-core" cx="450" cy="432" r="6" />
            <circle className="arch-node node-core" cx="350" cy="510" r="6" />
            <circle className="arch-node node-core" cx="250" cy="432" r="6" />
            <circle className="arch-node node-core" cx="250" cy="278" r="6" />

            {/* Center node */}
            <circle className="arch-node center-node" cx="350" cy="345" r="16" filter="url(#neonGlow)" />

            {/* Data pulse dots traveling along lines */}
            <circle className="pulse-dot pd-1" cx="0" cy="0" r="4" />
            <circle className="pulse-dot pd-2" cx="0" cy="0" r="4" />
            <circle className="pulse-dot pd-3" cx="0" cy="0" r="3.5" />
            <circle className="pulse-dot pd-4" cx="0" cy="0" r="3.5" />

            {/* Layer labels */}
            <text className="layer-label" x="350" y="50" textAnchor="middle">NUBE</text>
            <text className="layer-label" x="610" y="207" textAnchor="start">ERP</text>
            <text className="layer-label" x="610" y="462" textAnchor="start">IoT</text>
            <text className="layer-label" x="350" y="625" textAnchor="middle">DATOS</text>
            <text className="layer-label" x="90" y="462" textAnchor="end">IA</text>
            <text className="layer-label" x="90" y="207" textAnchor="end">API</text>
          </svg>
        </div>

        {/* Hero content — dramatic, minimal */}
        <div className="tech-hero-content">
          <h1 className="tech-hero-title">
            Integración.
            <br />
            <span className="neon-text-cyan">Resiliencia.</span>
            <br />
            Continuidad.
          </h1>

          <p className="tech-hero-subcopy">
            Arquitecturas que se adaptan a sus sistemas actuales
            <br />
            y soportan picos de alta carga sin caídas.
          </p>

          <div className="tech-hero-actions">
            <a href="#arquitectura" className="tech-btn-primary">
              <Layers size={17} />
              <span>Ver Arquitectura</span>
            </a>
            <a href="#telemetria" className="tech-btn-terminal">
              <Terminal size={17} />
              <span>Abrir Monitor</span>
            </a>
          </div>
        </div>

        {/* Live telemetry strip */}
        <div className="tech-telemetry-strip">
          <div className="telemetry-stat-card live">
            <Activity size={14} className="neon-pulse" />
            <span className="stat-code">{uptime.toFixed(2)}% SLA</span>
          </div>
          <div className="telemetry-stat-card">
            <span className="stat-code">100% Integrable</span>
          </div>
          <div className="telemetry-stat-card">
            <span className="stat-code">Alta Carga</span>
          </div>
          <div className="telemetry-stat-card">
            <span className="stat-code">18+ Años</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator-tech">
          <div className="scroll-line-t"></div>
        </div>
      </section>

      {/* Architecture Blueprint Section */}
      <section className="tech-section-blueprint" id="arquitectura">
        <div className="tech-content-container">
          <ArchitectureViewer />
        </div>
      </section>

      {/* Terminal Sandbox Section */}
      <section className="tech-section-terminal" id="telemetria">
        <div className="tech-content-container">
          <div className="tech-head-center">
            <span className="tech-pill-tag">Monitoreo y Diagnóstico</span>
            <h2>Visibilidad en Tiempo Real del Estado de sus Operaciones</h2>
            <p>Compruebe cómo supervisamos la salud de los servicios, la conectividad con dispositivos y la capacidad de respuesta ante picos de demanda.</p>
          </div>
          <TerminalDemo />
        </div>
      </section>

      {/* Grounded Capabilities */}
      <section className="tech-section-capabilities" id="capacidades">
        <div className="tech-content-container">
          <div className="tech-head-center">
            <span className="tech-pill-tag">Capacidades Principales</span>
            <h2>Tecnología avanzada puesta al servicio de la continuidad operacional</h2>
            <p>Herramientas sólidas construidas para simplificar la gestión diaria de las áreas técnicas y operativas de su empresa.</p>
          </div>

          <div className="tech-cards-grid">
            <div className="deep-card">
              <div className="deep-card-icon cyan">
                <Database size={26} />
              </div>
              <h3>Integración Sin Fricciones con Sistemas Existentes</h3>
              <p>
                Conectamos sus bases de datos, sistemas contables y ERPs (SAP, Softland, Defontana, Microsoft Dynamics) mediante interfaces limpias y estables. La información fluye automáticamente entre áreas sin duplicar digitaciones.
              </p>
              <div className="stack-tags">
                <span>APIs Seguras</span>
                <span>Webhooks</span>
                <span>Sincronización en Tiempo Real</span>
                <span>Validación de Datos</span>
              </div>
            </div>

            <div className="deep-card">
              <div className="deep-card-icon violet">
                <Network size={26} />
              </div>
              <h3>Conexión con Dispositivos de Terreno y Hardware</h3>
              <p>
                Enlace directo con terminales biométricos de acceso, sistemas POS de mostrador, balanzas o sensores de planta. Incluye almacenamiento local para que los equipos sigan funcionando incluso si falla la conexión a internet.
              </p>
              <div className="stack-tags">
                <span>Control de Acceso</span>
                <span>Puntos de Venta</span>
                <span>Respaldo Offline</span>
                <span>Telemetría de Bodega</span>
              </div>
            </div>

            <div className="deep-card">
              <div className="deep-card-icon emerald">
                <Zap size={26} />
              </div>
              <h3>Soporte de Alta Carga y Concurrencia</h3>
              <p>
                Arquitecturas preparadas para temporadas altas y picos de demanda comercial. Diseñadas para que miles de usuarios o transacciones interactúen simultáneamente sin degradar la velocidad de respuesta.
              </p>
              <div className="stack-tags">
                <span>Balanceo de Carga</span>
                <span>Microservicios</span>
                <span>Resiliencia Operativa</span>
                <span>Tiempos de Respuesta Ágiles</span>
              </div>
            </div>

            <div className="deep-card">
              <div className="deep-card-icon blue">
                <Cpu size={26} />
              </div>
              <h3>Modelos de IA Seguros y Adaptados a sus Procesos</h3>
              <p>
                Automatizaciones inteligentes y asistentes entrenados exclusivamente con la información y reglas de su empresa. Resguardo total de la privacidad y confidencialidad de sus datos comerciales.
              </p>
              <div className="stack-tags">
                <span>Confidencialidad Total</span>
                <span>Asistentes de Gestión</span>
                <span>Reglas de Negocio</span>
                <span>Automatización de Tareas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Standards */}
      <section className="tech-section-standards" id="estandares">
        <div className="tech-content-container">
          <div className="standards-banner-box">
            <div className="standards-left">
              <span className="tech-pill-tag">Filosofía de Implementación</span>
              <h2>Adaptación a la Cultura y Procesos de su Organización</h2>
              <p>
                El éxito de un proyecto no radica únicamente en su calidad técnica, sino en cómo se integra con las personas que lo operan día a día. Construimos soluciones que su equipo adopta con agrado y confianza.
              </p>
            </div>

            <div className="standards-list">
              <div className="std-item">
                <CheckCircle size={20} className="std-icon" />
                <div>
                  <strong>Respeto por la dinámica actual de trabajo</strong>
                  <span>Potenciamos los procesos que ya funcionan bien y eliminamos únicamente las etapas lentas y manuales.</span>
                </div>
              </div>

              <div className="std-item">
                <Lock size={20} className="std-icon" />
                <div>
                  <strong>Seguridad y Respaldo Continuo de la Información</strong>
                  <span>Canales de comunicación cifrados, permisos por rol y respaldos periódicos para total tranquilidad gerencial.</span>
                </div>
              </div>

              <div className="std-item">
                <Activity size={20} className="std-icon" />
                <div>
                  <strong>Acompañamiento Técnico Directo y de Par a Par</strong>
                  <span>Soporte fluido entre nuestros ingenieros y los responsables de su empresa, sin intermediarios impersonales.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Assessment Form */}
      <section className="tech-section-contact" id="contacto">
        <div className="tech-content-container">
          <div className="tech-contact-terminal-box">
            <div className="contact-meta-col">
              <span className="tech-pill-tag">Evaluación Técnica</span>
              <h2>Coordine una Sesión de Arquitectura e Integración</h2>
              <p>
                Conversemos con el liderazgo técnico o de operaciones de su empresa para evaluar la factibilidad de integración, requerimientos de carga y el mejor camino de modernización sin riesgos.
              </p>

              <div className="tech-direct-badge">
                <FileCode size={20} />
                <div>
                  <strong>Objetivo de la Sesión:</strong>
                  <span>Mapear la integración con sus sistemas actuales y presentar una propuesta de solución clara y de alta resiliencia.</span>
                </div>
              </div>
            </div>

            <div className="contact-form-col">
              <form onSubmit={handleSubmit} className="tech-assessment-form">
                <div className="form-line">
                  <label>Nombre y Cargo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Martín Vega - Gerente de TI / Operaciones"
                    value={techStackForm.name}
                    onChange={(e) => setTechStackForm({ ...techStackForm, name: e.target.value })}
                  />
                </div>

                <div className="form-line">
                  <label>Correo Electrónico Corporativo</label>
                  <input
                    type="email"
                    required
                    placeholder="m.vega@empresa.cl"
                    value={techStackForm.email}
                    onChange={(e) => setTechStackForm({ ...techStackForm, email: e.target.value })}
                  />
                </div>

                <div className="form-line">
                  <label>Sistemas o Tecnologías que su Empresa Utiliza Actualmente</label>
                  <input
                    type="text"
                    placeholder="Ej. SAP, Softland, SQL Server, plataformas web propias..."
                    value={techStackForm.techStack}
                    onChange={(e) => setTechStackForm({ ...techStackForm, techStack: e.target.value })}
                  />
                </div>

                <div className="form-line">
                  <label>¿Qué desafío o integración requiere resolver?</label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Ej. Necesitamos conectar sucursales con la base de datos central y soportar alto volumen de transacciones sin demoras..."
                    value={techStackForm.problem}
                    onChange={(e) => setTechStackForm({ ...techStackForm, problem: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="submit-tech-btn">
                  <span>Solicitar Sesión Técnica con LSOFT</span>
                  <ArrowRight size={16} />
                </button>

                {isSubmitted && (
                  <div className="tech-success-feedback">
                    <code>STATUS: Solicitud registrada exitosamente. Un ingeniero de LSOFT se comunicará a la brevedad.</code>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Footer */}
      <footer className="tech-footer">
        <div className="tech-content-container tech-footer-grid">
          <div>
            <img src="/images/lsoft-modern-logo.svg" alt="LSOFT Enterprise" width="150" height="42" />
            <p>Soluciones de ingeniería de software, integración de sistemas y conectividad de hardware con alto soporte de carga.</p>
          </div>
          <div className="tech-footer-nav">
            <a href="#arquitectura">Arquitectura</a>
            <a href="#telemetria">Monitor</a>
            <a href="#capacidades">Capacidades</a>
            <a href="#estandares">Principios</a>
          </div>
        </div>
        <div className="tech-footer-bottom">
          <p>© {new Date().getFullYear()} LSOFT Servicios Informáticos SpA. Arquitectura Integrable &amp; Alta Continuidad Operativa.</p>
        </div>
      </footer>
    </div>
  );
}
