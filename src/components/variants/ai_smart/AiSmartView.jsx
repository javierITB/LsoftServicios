import React, { useState } from 'react';
import {
  Sparkles,
  Bot,
  Zap,
  Cpu,
  Clock,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Send,
  MessageSquare,
  Radio,
} from 'lucide-react';
import AiChatDemo from './AiChatDemo';
import AutomationFlowDemo from './AutomationFlowDemo';
import HardwareDemo from './HardwareDemo';

export default function AiSmartView() {
  const [activeTab, setActiveTab] = useState('chat');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactCompany, setContactCompany] = useState('');
  const [contactArea, setContactArea] = useState('Todas');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setContactName('');
      setContactEmail('');
      setContactCompany('');
    }, 4500);
  };

  return (
    <div className="variant-ai-page">
      {/* Top Header */}
      <header className="ai-nav-header">
        <div className="ai-header-inner">
          <a href="#inicio" className="ai-brand-logo">
            <img src="/images/lsoft-modern-logo.svg" alt="LSOFT Servicios" width="180" height="50" />
            <span className="brand-badge-ai">AI &amp; Hardware</span>
          </a>

          <nav className="ai-nav-links">
            <a href="#soluciones">Soluciones</a>
            <a href="#demos">Demos</a>
            <a href="#metodologia">Servicio Integral</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a
            href="https://wa.me/56995377845?text=Estimados%20LSOFT,%20deseo%20conocer%20las%20soluciones%20de%20IA%20y%20automatizacion%20para%20mi%20empresa"
            className="ai-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Conversar con un Consultor</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════
          IMMERSIVE HERO — Neural Network + Floating Particle Field
         ═══════════════════════════════════════════════════════════════ */}
      <section className="ai-hero-section" id="inicio">
        {/* Animated background layers */}
        <div className="ai-hero-bg-layer">
          <div className="ai-hero-glow"></div>
          <div className="ai-hero-glow glow-secondary"></div>

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="ai-particle"
              style={{
                left: `${5 + Math.random() * 90}%`,
                top: `${5 + Math.random() * 90}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
              }}
            />
          ))}
        </div>

        {/* Central SVG Neural Visualization */}
        <div className="ai-hero-visual">
          <svg className="neural-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#0284c7" stopOpacity="0.1" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
              <filter id="softGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Orbiting rings */}
            <circle className="orbit-ring ring-1" cx="300" cy="300" r="130" />
            <circle className="orbit-ring ring-2" cx="300" cy="300" r="200" />
            <circle className="orbit-ring ring-3" cx="300" cy="300" r="265" />

            {/* Neural connections */}
            <line className="neural-link link-1" x1="300" y1="300" x2="430" y2="240" />
            <line className="neural-link link-2" x1="300" y1="300" x2="170" y2="230" />
            <line className="neural-link link-3" x1="300" y1="300" x2="210" y2="430" />
            <line className="neural-link link-4" x1="300" y1="300" x2="420" y2="400" />
            <line className="neural-link link-5" x1="300" y1="300" x2="300" y2="140" />
            <line className="neural-link link-6" x1="300" y1="300" x2="140" y2="340" />
            <line className="neural-link link-7" x1="300" y1="300" x2="460" y2="330" />

            {/* Outer connections */}
            <line className="neural-link-secondary" x1="430" y1="240" x2="500" y2="170" />
            <line className="neural-link-secondary" x1="170" y1="230" x2="100" y2="160" />
            <line className="neural-link-secondary" x1="210" y1="430" x2="140" y2="490" />
            <line className="neural-link-secondary" x1="420" y1="400" x2="500" y2="450" />
            <line className="neural-link-secondary" x1="300" y1="140" x2="340" y2="60" />
            <line className="neural-link-secondary" x1="140" y1="340" x2="65" y2="370" />
            <line className="neural-link-secondary" x1="460" y1="330" x2="540" y2="310" />

            {/* Core glow */}
            <circle cx="300" cy="300" r="60" fill="url(#coreGlow)" className="core-pulse" />

            {/* Central node */}
            <circle className="neural-node core-node" cx="300" cy="300" r="14" filter="url(#softGlow)" />

            {/* Primary nodes */}
            <circle className="neural-node node-primary n1" cx="430" cy="240" r="8" filter="url(#softGlow)" />
            <circle className="neural-node node-primary n2" cx="170" cy="230" r="8" filter="url(#softGlow)" />
            <circle className="neural-node node-primary n3" cx="210" cy="430" r="8" filter="url(#softGlow)" />
            <circle className="neural-node node-primary n4" cx="420" cy="400" r="8" filter="url(#softGlow)" />
            <circle className="neural-node node-primary n5" cx="300" cy="140" r="8" filter="url(#softGlow)" />
            <circle className="neural-node node-primary n6" cx="140" cy="340" r="8" filter="url(#softGlow)" />
            <circle className="neural-node node-primary n7" cx="460" cy="330" r="8" filter="url(#softGlow)" />

            {/* Secondary nodes */}
            <circle className="neural-node node-secondary" cx="500" cy="170" r="5" />
            <circle className="neural-node node-secondary" cx="100" cy="160" r="5" />
            <circle className="neural-node node-secondary" cx="140" cy="490" r="5" />
            <circle className="neural-node node-secondary" cx="500" cy="450" r="5" />
            <circle className="neural-node node-secondary" cx="340" cy="60" r="5" />
            <circle className="neural-node node-secondary" cx="65" cy="370" r="5" />
            <circle className="neural-node node-secondary" cx="540" cy="310" r="5" />

            {/* Orbiting dots */}
            <circle className="orbit-dot od-1" cx="0" cy="0" r="4" />
            <circle className="orbit-dot od-2" cx="0" cy="0" r="3.5" />
            <circle className="orbit-dot od-3" cx="0" cy="0" r="3" />
          </svg>
        </div>

        {/* Hero copy — minimal, bold, Apple-like */}
        <div className="ai-hero-content">
          <h1 className="ai-hero-title">
            <span className="gradient-text">Entregamos tiempo.</span>
            <br />
            Su empresa opera. Nosotros resolvemos.
          </h1>

          <p className="ai-hero-subtitle">
            IA, automatización y hardware integrado.
            <strong> Servicio 100% resuelto de inicio a fin.</strong>
          </p>

          <div className="ai-hero-actions">
            <a href="#demos" className="primary-pill-btn">
              <Sparkles size={18} />
              <span>Explorar Demos en Vivo</span>
            </a>
            <a href="#contacto" className="secondary-pill-btn">
              <span>Solicitar Diagnóstico</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Floating impact metrics */}
        <div className="ai-hero-metrics">
          <div className="metric-glass">
            <span className="metric-val">&minus;70%</span>
            <span className="metric-lbl">Carga operativa</span>
          </div>
          <div className="metric-glass">
            <span className="metric-val">24/7</span>
            <span className="metric-lbl">Gestión autónoma</span>
          </div>
          <div className="metric-glass">
            <span className="metric-val">0</span>
            <span className="metric-lbl">Fricción técnica</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Demos Sandbox Zone */}
      <section className="ai-demos-section" id="demos">
        <div className="ai-demos-container">
          <div className="section-head-center">
            <span className="subhead-pill">Zona de Soluciones en Acción</span>
            <h2>Experimente en tiempo real las capacidades disponibles para su empresa</h2>
            <p>
              Interactúe con estas demostraciones operativas diseñadas para resolver cuellos de botella reales en empresas consolidadas.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="demo-tabs-bar">
            <button
              className={`demo-tab-btn ${activeTab === 'chat' ? 'active' : ''}`}
              onClick={() => setActiveTab('chat')}
            >
              <Bot size={18} />
              <span>1. Asistentes IA &amp; Sistemas</span>
            </button>
            <button
              className={`demo-tab-btn ${activeTab === 'flow' ? 'active' : ''}`}
              onClick={() => setActiveTab('flow')}
            >
              <Zap size={18} />
              <span>2. Automatización de Flujos</span>
            </button>
            <button
              className={`demo-tab-btn ${activeTab === 'hw' ? 'active' : ''}`}
              onClick={() => setActiveTab('hw')}
            >
              <Radio size={18} />
              <span>3. Hardware &amp; Conectividad</span>
            </button>
          </div>

          {/* Active Demo Canvas */}
          <div className="demo-canvas-wrapper">
            {activeTab === 'chat' && <AiChatDemo />}
            {activeTab === 'flow' && <AutomationFlowDemo />}
            {activeTab === 'hw' && <HardwareDemo />}
          </div>
        </div>
      </section>

      {/* Soluciones de Alto Impacto */}
      <section className="ai-solutions-section" id="soluciones">
        <div className="ai-solutions-container">
          <div className="section-head-center">
            <span className="subhead-pill">Catálogo de Soluciones</span>
            <h2>Herramientas integradas para optimizar la gestión de su negocio</h2>
            <p>Soluciones adaptadas a la operación de su organización, permitiendo que su equipo humano se enfoque en decisiones de alto valor.</p>
          </div>

          <div className="solutions-cards-grid">
            <div className="solution-feature-card">
              <div className="feature-icon-bubble blue">
                <Bot size={28} />
              </div>
              <h3>Asistentes de IA &amp; Chatbots Operativos</h3>
              <p>
                Asistentes entrenados con los catálogos, políticas y datos específicos de su empresa para atender de manera fluida y precisa a clientes y colaboradores, integrándose a WhatsApp y plataformas web.
              </p>
              <ul className="feature-checklist">
                <li><CheckCircle size={16} /> Respuestas contextualizadas basadas en la información corporativa</li>
                <li><CheckCircle size={16} /> Conexión directa a bases de datos y sistemas de gestión</li>
                <li><CheckCircle size={16} /> Derivación fluida a ejecutivos cuando el caso lo amerita</li>
              </ul>
            </div>

            <div className="solution-feature-card">
              <div className="feature-icon-bubble emerald">
                <Zap size={28} />
              </div>
              <h3>Automatización de Procesos Administrativos</h3>
              <p>
                Eliminación sistemática de la digitación manual y reprocesos. Conectamos los canales de entrada con sus sistemas contables y ERPs para validar información de forma autónoma.
              </p>
              <ul className="feature-checklist">
                <li><CheckCircle size={16} /> Procesamiento estructurado de registros sin errores de tipeo</li>
                <li><CheckCircle size={16} /> Cuadraturas automáticas entre órdenes, transacciones y cobros</li>
                <li><CheckCircle size={16} /> Alertas de gestión en tiempo real dirigidas a los supervisores</li>
              </ul>
            </div>

            <div className="solution-feature-card">
              <div className="feature-icon-bubble purple">
                <Cpu size={28} />
              </div>
              <h3>Hardware Inteligente para Locales y Terreno</h3>
              <p>
                Integración de equipamiento físico con los sistemas de la empresa. Suministro, configuración e instalación de terminales de acceso, puntos de venta y sensores de campo.
              </p>
              <ul className="feature-checklist">
                <li><CheckCircle size={16} /> Control de asistencia y accesos sincronizado directamente con RRHH</li>
                <li><CheckCircle size={16} /> Supervisión de bodegas, frío y variables operacionales críticas</li>
                <li><CheckCircle size={16} /> Continuidad garantizada ante caídas temporales de red</li>
              </ul>
            </div>

            <div className="solution-feature-card">
              <div className="feature-icon-bubble cyan">
                <ShieldCheck size={28} />
              </div>
              <h3>Integración entre Sistemas a la Medida</h3>
              <p>
                Si su empresa opera con herramientas desarticuladas que no dialogan entre sí, construimos la integración necesaria para unificar el flujo de información en un solo canal.
              </p>
              <ul className="feature-checklist">
                <li><CheckCircle size={16} /> Conexión con SAP, Softland, Defontana, Salesforce y sistemas legados</li>
                <li><CheckCircle size={16} /> Paneles gerenciales consolidados con métricas en tiempo real</li>
                <li><CheckCircle size={16} /> Altos estándares de seguridad y respaldo continuo de datos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Servicio Llave en Mano */}
      <section className="ai-method-section" id="metodologia">
        <div className="ai-method-container">
          <div className="method-banner">
            <div className="method-copy">
              <span className="subhead-pill">Servicio Integral</span>
              <h2>Acompañamiento completo de inicio a fin. Cero necesidad de aprender tecnología.</h2>
              <p>
                Muchas empresas dudan ante nuevas tecnologías por temor a proyectos inconclusos o capacitaciones complejas. En LSOFT asumimos la responsabilidad global del resultado.
              </p>

              <div className="method-steps-list">
                <div className="m-step">
                  <div className="m-step-num">1</div>
                  <div>
                    <h5>Análisis y Diagnóstico de Operaciones</h5>
                    <p>Revisamos conjuntamente los procesos diarios para identificar los cuellos de botella que consumen mayor tiempo.</p>
                  </div>
                </div>

                <div className="m-step">
                  <div className="m-step-num">2</div>
                  <div>
                    <h5>Implementación Llave en Mano</h5>
                    <p>Configuramos el software, conectamos los dispositivos y dejamos la solución plenamente operativa.</p>
                  </div>
                </div>

                <div className="m-step">
                  <div className="m-step-num">3</div>
                  <div>
                    <h5>Capacitación y Puesta en Marcha</h5>
                    <p>Instruimos a su equipo de forma didáctica para asegurar una transición fluida y sin fricciones.</p>
                  </div>
                </div>

                <div className="m-step">
                  <div className="m-step-num">4</div>
                  <div>
                    <h5>Soporte Continuo y Evolución</h5>
                    <p>Acompañamos su crecimiento con monitoreo constante y mejoras periódicas según la necesidad del negocio.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="method-card-highlight">
              <div className="badge-highlight">Compromiso de Calidad</div>
              <h3>"Si la solución implementada no libera tiempo verificable para su equipo, optimizamos hasta garantizar el resultado."</h3>
              <div className="highlight-points">
                <div>✔ Más de 18 años de trayectoria en el mercado nacional</div>
                <div>✔ Soporte técnico directo y personalizado</div>
                <div>✔ Resultados tangibles desde el primer mes de operación</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="ai-contact-section" id="contacto">
        <div className="ai-contact-container">
          <div className="ai-contact-box">
            <div className="contact-info-col">
              <span className="subhead-pill">Sin Compromiso</span>
              <h2>Solicite un Diagnóstico Operativo de Tiempo y Procesos</h2>
              <p>
                Coordinemos una breve sesión de trabajo. Evaluaremos de manera precisa cuántas horas de trabajo manual puede recuperar su empresa cada mes.
              </p>

              <div className="direct-channels">
                <a
                  href="https://wa.me/56995377845?text=Estimados%20LSOFT,%20deseo%20agendar%20un%20diagnostico%20operativo%20para%20mi%20empresa"
                  className="whatsapp-big-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare size={22} />
                  <div>
                    <strong>Agendar vía WhatsApp Directo</strong>
                    <span>Atención profesional y respuesta ágil</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact-form-col">
              <form onSubmit={handleSubmit} className="modern-ai-form">
                <h4>Información de Contacto</h4>

                <div className="field-group">
                  <label>Nombre y Apellido</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Rodrigo Fuentes"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                  />
                </div>

                <div className="field-group">
                  <label>Correo Electrónico Corporativo</label>
                  <input
                    type="email"
                    required
                    placeholder="r.fuentes@empresa.cl"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                  />
                </div>

                <div className="field-group">
                  <label>Nombre de la Empresa</label>
                  <input
                    type="text"
                    placeholder="Ej. Comercializadora del Pacífico"
                    value={contactCompany}
                    onChange={(e) => setContactCompany(e.target.value)}
                  />
                </div>

                <div className="field-group">
                  <label>¿Qué área operativa requiere optimizar primero?</label>
                  <select value={contactArea} onChange={(e) => setContactArea(e.target.value)}>
                    <option value="Todas">Evaluación Global de Operaciones</option>
                    <option value="Atención al cliente">Atención al Cliente y Canales Digitales</option>
                    <option value="Administración y Procesos">Administración, Control y Cuadraturas</option>
                    <option value="Bodega y Terreno">Bodega, Control de Asistencia y Hardware</option>
                    <option value="Integración de Sistemas">Integración entre Sistemas o ERP Actual</option>
                  </select>
                </div>

                <button type="submit" className="form-submit-btn">
                  <span>Solicitar Diagnóstico Operativo</span>
                  <Send size={16} />
                </button>

                {isSent && (
                  <div className="form-success-banner">
                    ✅ Solicitud recibida. Un consultor se comunicará para coordinar la sesión a la brevedad.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ai-footer">
        <div className="ai-footer-inner">
          <div>
            <img src="/images/lsoft-modern-logo.svg" alt="LSOFT" width="160" height="45" />
            <p>Soluciones integradas de IA, automatización y hardware para optimizar la operación de empresas en Chile.</p>
          </div>
          <div className="footer-links">
            <a href="#soluciones">Soluciones</a>
            <a href="#demos">Demos Interactivas</a>
            <a href="#metodologia">Servicio Integral</a>
            <a href="#contacto">Diagnóstico</a>
          </div>
        </div>
        <div className="ai-footer-bottom">
          <p>© {new Date().getFullYear()} LSOFT Servicios Informáticos. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
