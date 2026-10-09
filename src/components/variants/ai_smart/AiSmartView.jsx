import React, { useState, useRef } from 'react';
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
  Sliders,
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';
import { useScrollStory } from '../../../hooks/useScrollStory';
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

  // Pinned Scrollytelling & 3D Interactive Convergence
  const heroTrackRef = useRef(null);
  const { scrollProgress, mousePos, mouseHandlers } = useScrollStory(heroTrackRef, { isPinnedTrack: true });
  const [activeNodeHover, setActiveNodeHover] = useState(null);

  // Progress: 0 = Caos de Silos Manuales, 1 = Sincronización Total LSOFT
  // The first 75% of the scroll track runs the convergence animation.
  // The remaining 25% holds the synchronized state before smoothly unpinning the page.
  const effectiveProgress = Math.min(1, Math.max(0, scrollProgress / 0.75));
  const isSynchronized = effectiveProgress >= 0.65;

  // 6 Operational Nodes with Chaos vs Order coordinates and descriptions
  const nodes = [
    {
      id: 0,
      chaos: { x: 530, y: 160 },
      order: { x: 475, y: 300 },
      chaosTitle: 'Planillas Manuales',
      orderTitle: 'Automatización 24/7',
      desc: isSynchronized ? 'Flujos procesados en 1.2 segundos sin tocar Excel' : 'Carga duplicada y lentitud de respuesta',
    },
    {
      id: 1,
      chaos: { x: 470, y: 510 },
      order: { x: 388, y: 452 },
      chaosTitle: 'Correos sin Responder',
      orderTitle: 'Agente IA Conectado',
      desc: isSynchronized ? 'Respuestas automáticas con stock real de bodega' : 'Horas de espera para cotizar clientes',
    },
    {
      id: 2,
      chaos: { x: 120, y: 520 },
      order: { x: 212, y: 452 },
      chaosTitle: 'Descuadre de Stock',
      orderTitle: 'Hardware de Terreno',
      desc: isSynchronized ? 'Sensores y terminales POS en línea con respaldo' : 'Pérdidas y conteos físicos desfasados',
    },
    {
      id: 3,
      chaos: { x: 70, y: 280 },
      order: { x: 125, y: 300 },
      chaosTitle: 'ERP Desactualizado',
      orderTitle: 'Conexión Nativa ERP',
      desc: isSynchronized ? 'Integración limpia a SAP, Softland o Defontana' : 'Silos de información no reconciliados',
    },
    {
      id: 4,
      chaos: { x: 150, y: 80 },
      order: { x: 212, y: 148 },
      chaosTitle: 'Validaciones Lentas',
      orderTitle: 'Reglas de Negocio',
      desc: isSynchronized ? 'Validaciones automáticas y cero fricción' : 'Burocracia que frena la venta',
    },
    {
      id: 5,
      chaos: { x: 440, y: 60 },
      order: { x: 388, y: 148 },
      chaosTitle: 'Sobrecarga de Equipo',
      orderTitle: 'Equipo Liberado',
      desc: isSynchronized ? 'Colaboradores enfocados en tareas estratégicas' : 'Horas extras apagando incendios operativos',
    },
  ];

  const interpolatedNodes = nodes.map((node) => ({
    ...node,
    x: node.chaos.x + (node.order.x - node.chaos.x) * effectiveProgress,
    y: node.chaos.y + (node.order.y - node.chaos.y) * effectiveProgress,
  }));

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
          IMMERSIVE PINNED HERO & SCROLL-DRIVEN CONVERGENCE ENGINE
         ═══════════════════════════════════════════════════════════════ */}
      <div className="ai-hero-scroll-track" ref={heroTrackRef}>
        <section className="ai-hero-sticky-stage" id="inicio">
        {/* Animated background layers */}
        <div className="ai-hero-bg-layer">
          <div className="ai-hero-glow glow-primary"></div>
          <div className="ai-hero-glow glow-secondary"></div>
          <div className="ai-hero-glow glow-accent"></div>

          {/* Floating particles */}
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className="ai-particle"
              style={{
                left: `${4 + ((i * 17) % 92)}%`,
                top: `${6 + ((i * 23) % 86)}%`,
                animationDelay: `${(i * 0.3) % 5}s`,
                animationDuration: `${5 + (i % 4)}s`,
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
              }}
            />
          ))}
        </div>

        <div className="ai-hero-container">
          <div className="ai-hero-split">
            {/* Left Column: Hero copy & CTAs */}
            <div className="ai-hero-content">
              <div className="ai-hero-badge">
                <Sparkles size={14} className="badge-sparkle-icon" />
                <span>Automatización con IA &amp; Conectividad de Hardware</span>
              </div>

              <h1 className="ai-hero-title">
                <span className="gradient-text">Entregamos tiempo.</span>
                <br />
                Su empresa opera. Nosotros resolvemos.
              </h1>

              <p className="ai-hero-subtitle">
                Asistentes de IA conectados a sus bases de datos y dispositivos de terreno en tiempo real.
                <strong> Servicio 100% llave en mano de inicio a fin.</strong>
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

              {/* Impact metrics glass cards */}
              <div className="ai-hero-metrics">
                <div className="metric-glass">
                  <span className="metric-val">&minus;70%</span>
                  <span className="metric-lbl">Carga operativa rutinaria</span>
                </div>
                <div className="metric-glass">
                  <span className="metric-val">24/7</span>
                  <span className="metric-lbl">Gestión autónoma continua</span>
                </div>
                <div className="metric-glass">
                  <span className="metric-val">0</span>
                  <span className="metric-lbl">Fricción de adopción</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Holographic Convergence Engine */}
            <div
              className="ai-hero-visual"
              {...mouseHandlers}
              style={{
                transform: `perspective(900px) rotateX(${mousePos.y * -8}deg) rotateY(${mousePos.x * 10}deg)`,
              }}
            >
              {/* Convergence Ambient Status Pill (Driven purely by scroll) */}
              <div className="convergence-status-pill">
                <div className="controller-meta">
                  <span className={`status-indicator-dot ${isSynchronized ? 'green' : 'amber'}`}></span>
                  <span className="controller-status-text">
                    {isSynchronized
                      ? 'SINERGIA OPERATIVA: 100% INTEGRADO'
                      : 'ESTADO INICIAL: SILOS Y FRICCIÓN MANUAL'}
                  </span>
                </div>
                <div className="scroll-progress-indicator">
                  <div className="scroll-progress-bar">
                    <div
                      className="scroll-progress-fill"
                      style={{ width: `${Math.min(100, effectiveProgress * 100)}%` }}
                    ></div>
                  </div>
                  <span className="scroll-assist-hint">
                    {effectiveProgress < 0.95 ? '⇣ Scrollee para conectar la solución' : '✔ Estructura Sincronizada'}
                  </span>
                </div>
              </div>

              {/* Central SVG Interactive Canvas */}
              <svg className="neural-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="aiCoreGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity={0.4 + effectiveProgress * 0.5} />
                    <stop offset="60%" stopColor="#0284c7" stopOpacity={0.15 + effectiveProgress * 0.25} />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                  <filter id="softGlow">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="laserBeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Concentric orbital rings — expand and clarify as progress increases */}
                <circle
                  className="orbit-ring ring-1"
                  cx="300"
                  cy="300"
                  r={120 + effectiveProgress * 20}
                  style={{ opacity: 0.2 + effectiveProgress * 0.6 }}
                />
                <circle
                  className="orbit-ring ring-2"
                  cx="300"
                  cy="300"
                  r={180 + effectiveProgress * 25}
                  style={{ opacity: 0.15 + effectiveProgress * 0.5 }}
                />
                <circle
                  className="orbit-ring ring-3"
                  cx="300"
                  cy="300"
                  r={250 + effectiveProgress * 20}
                  style={{ opacity: 0.1 + effectiveProgress * 0.4 }}
                />

                {/* Hexagonal perimeter shield connections (appear when order is reached) */}
                {interpolatedNodes.map((n, idx) => {
                  const nextNode = interpolatedNodes[(idx + 1) % interpolatedNodes.length];
                  return (
                    <line
                      key={`perimeter-${idx}`}
                      x1={n.x}
                      y1={n.y}
                      x2={nextNode.x}
                      y2={nextNode.y}
                      stroke="#00f0ff"
                      strokeWidth={1.5}
                      strokeOpacity={Math.max(0, (effectiveProgress - 0.35) * 1.5)}
                      strokeDasharray={effectiveProgress > 0.8 ? 'none' : '4 6'}
                    />
                  );
                })}

                {/* Radial Synapse Beams from Center (300, 300) to each dynamic node */}
                {interpolatedNodes.map((n) => {
                  const isAmber = effectiveProgress < 0.5;
                  return (
                    <g key={`beam-${n.id}`}>
                      <line
                        x1="300"
                        y1="300"
                        x2={n.x}
                        y2={n.y}
                        stroke={isAmber ? '#f59e0b' : 'url(#laserBeamGrad)'}
                        strokeWidth={isAmber ? 1.2 : 2.2}
                        strokeOpacity={isAmber ? 0.25 : 0.4 + effectiveProgress * 0.5}
                        strokeDasharray={isAmber ? '6 6' : 'none'}
                        className={!isAmber ? 'active-laser-beam' : ''}
                      />
                      {/* Energy pulse travelling along the beam when synced */}
                      {effectiveProgress > 0.6 && (
                        <circle
                          cx={300 + (n.x - 300) * ((0.3 + effectiveProgress * 0.5) % 1)}
                          cy={300 + (n.y - 300) * ((0.3 + effectiveProgress * 0.5) % 1)}
                          r={3.5}
                          fill="#00f0ff"
                          filter="url(#softGlow)"
                        />
                      )}
                    </g>
                  );
                })}

                {/* Central LSOFT Core (Grows radiant and magnetic with progress) */}
                <circle
                  cx="300"
                  cy="300"
                  r={50 + effectiveProgress * 35}
                  fill="url(#aiCoreGlow)"
                  className="core-pulse"
                />
                <circle
                  className="neural-node core-node"
                  cx="300"
                  cy="300"
                  r={14 + effectiveProgress * 4}
                  filter="url(#softGlow)"
                  fill={isSynchronized ? '#00f0ff' : '#0284c7'}
                />

                {/* Operational Nodes with dynamic positions & labels */}
                {interpolatedNodes.map((n) => {
                  const isHoveredNode = activeNodeHover === n.id;
                  const nodeColor = isSynchronized ? '#00f0ff' : '#f59e0b';
                  const labelText = isSynchronized ? n.orderTitle : n.chaosTitle;

                  return (
                    <g
                      key={`node-${n.id}`}
                      onMouseEnter={() => setActiveNodeHover(n.id)}
                      onMouseLeave={() => setActiveNodeHover(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Outer target ring */}
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r={isHoveredNode ? 14 : 9}
                        fill="none"
                        stroke={nodeColor}
                        strokeWidth={1.5}
                        strokeOpacity={isHoveredNode ? 0.9 : 0.4}
                      />
                      {/* Node core dot */}
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r={isHoveredNode ? 7 : 5}
                        fill={nodeColor}
                        filter="url(#softGlow)"
                      />

                      {/* Interactive text badge next to node */}
                      <rect
                        x={n.x > 300 ? n.x + 12 : n.x - 130}
                        y={n.y - 12}
                        width={120}
                        height={24}
                        rx={6}
                        fill={isSynchronized ? 'rgba(5, 14, 30, 0.88)' : 'rgba(25, 18, 5, 0.88)'}
                        stroke={nodeColor}
                        strokeWidth={1}
                        strokeOpacity={isHoveredNode ? 0.9 : 0.45}
                      />
                      <text
                        x={n.x > 300 ? n.x + 18 : n.x - 124}
                        y={n.y + 4}
                        fill={isSynchronized ? '#e2e8f0' : '#fed7aa'}
                        fontSize={9.5}
                        fontWeight={700}
                        fontFamily="sans-serif"
                      >
                        {labelText}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Tooltip on node hover */}
              {activeNodeHover !== null && (
                <div className="node-detail-tooltip">
                  <strong>{isSynchronized ? nodes[activeNodeHover].orderTitle : nodes[activeNodeHover].chaosTitle}</strong>
                  <p>{nodes[activeNodeHover].desc}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span className="scroll-text">
            {effectiveProgress < 0.95 ? 'Baje con el scroll para sincronizar la estructura' : 'Explore las capacidades en acción'}
          </span>
          <div className="scroll-line"></div>
        </div>
      </section>
    </div>

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
