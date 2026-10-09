import React, { useState, useEffect, useRef } from 'react';
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
  RotateCcw,
} from 'lucide-react';
import { useScrollStory } from '../../../hooks/useScrollStory';
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

  // Pinned Scrollytelling & 3D Isometric Architecture Teardown
  const heroTrackRef = useRef(null);
  const { scrollProgress, mousePos, mouseHandlers } = useScrollStory(heroTrackRef, { isPinnedTrack: true });

  // Effective progress: 0 = Monolito Opaco Acoplado, 1 = Arquitectura Desacoplada Resiliente 100%
  // First 75% runs separation animation, remaining 25% holds before unpinning
  const effectiveArchProgress = Math.min(1, Math.max(0, scrollProgress / 0.75));
  const isExploded = effectiveArchProgress >= 0.65;

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

  // Isometric Layer Positions (centerY coordinates based on separation)
  // Layer 4 (Cloud Top): lifts from 320 to 140
  const yLayer4 = 320 - effectiveArchProgress * 180;
  // Layer 3 (AI Engine): lifts from 335 to 270
  const yLayer3 = 335 - effectiveArchProgress * 65;
  // Layer 2 (ERP Bus): drops from 350 to 405
  const yLayer2 = 350 + effectiveArchProgress * 55;
  // Layer 1 (Edge Bottom): drops from 365 to 540
  const yLayer1 = 365 + effectiveArchProgress * 175;

  // Helper for drawing isometric diamond polygon
  const isoDiamond = (cy, rx = 190, ry = 58) => {
    return `${350},${cy - ry} ${350 + rx},${cy} ${350},${cy + ry} ${350 - rx},${cy}`;
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
          IMMERSIVE PINNED HERO — 3D Isometric Architecture Teardown
         ═══════════════════════════════════════════════════════════════ */}
      <div className="tech-hero-scroll-track" ref={heroTrackRef}>
        <section className="tech-hero-sticky-stage" id="inicio">
        {/* Animated grid background */}
        <div className="grid-overlay-bg"></div>

        <div className="tech-hero-container">
          <div className="tech-hero-split">
            {/* Left Column: Hero copy & Telemetry */}
            <div className="tech-hero-content">
              <div className="tech-kicker-badge">
                <Activity size={14} className="neon-pulse" />
                <span>SYS: ONLINE • 99.99% SLA • KERNEL V4</span>
              </div>

              <h1 className="tech-hero-title">
                Integración.
                <br />
                <span className="neon-text-cyan">Resiliencia.</span>
                <br />
                Continuidad.
              </h1>

              <p className="tech-hero-subcopy">
                Arquitecturas que se integran a sus sistemas actuales (ERP, BD, hardware)
                y soportan picos de alta demanda sin caídas operativas.
              </p>

              <div className="tech-hero-actions">
                <a href="#arquitectura" className="tech-btn-primary">
                  <Layers size={17} />
                  <span>Ver Arquitectura</span>
                </a>
                <a href="#telemetria" className="tech-btn-terminal">
                  <Terminal size={17} />
                  <span>$ lsoft --telemetria</span>
                </a>
              </div>

              {/* Live telemetry strip */}
              <div className="tech-telemetry-strip">
                <div className="telemetry-stat-card live">
                  <div className="stat-card-head">
                    <Activity size={13} className="neon-pulse" />
                    <span className="stat-code">{uptime.toFixed(2)}% SLA</span>
                  </div>
                  <span className="stat-lbl">Disponibilidad en picos</span>
                </div>
                <div className="telemetry-stat-card">
                  <span className="stat-code">100%</span>
                  <span className="stat-lbl">Integrable a su ERP</span>
                </div>
                <div className="telemetry-stat-card">
                  <span className="stat-code">{isExploded ? '12.4k' : '1.8k'}</span>
                  <span className="stat-lbl">Req/seg sin degradación</span>
                </div>
                <div className="telemetry-stat-card">
                  <span className="stat-code">18+ Años</span>
                  <span className="stat-lbl">Continuidad demostrada</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Isometric Exploded Layer Stack & Interactive Scrubber */}
            <div
              className="tech-hero-visual"
              {...mouseHandlers}
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y * -8}deg) rotateY(${mousePos.x * 10}deg)`,
              }}
            >
              {/* Architecture Ambient Status Pill (Scroll Driven) */}
              <div className="tech-status-pill">
                <div className="tech-status-head">
                  <span className={`tech-status-led ${isExploded ? 'cyan' : 'amber'}`}></span>
                  <span className="tech-status-title">
                    {isExploded
                      ? 'ARQUITECTURA DESACOPLADA: 0 PUNTOS ÚNICOS DE FALLA'
                      : 'DIAGNÓSTICO INICIAL: MONOLITO CON RIESGO DE SATURACIÓN'}
                  </span>
                </div>
                <div className="tech-progress-indicator">
                  <div className="tech-progress-bar">
                    <div
                      className="tech-progress-fill"
                      style={{ width: `${Math.min(100, effectiveArchProgress * 100)}%` }}
                    ></div>
                  </div>
                  <span className="tech-assist-hint">
                    {effectiveArchProgress < 0.95 ? '⇣ Scrollee para desacoplar capas' : '✔ Capas Resilientes'}
                  </span>
                </div>
              </div>

              {/* Floating cyber pills */}
              <div className="floating-cyber-pill cyber-top">
                <span className="cyber-led green"></span>
                <span>ERP Conexión Nativa</span>
              </div>
              <div className="floating-cyber-pill cyber-bottom">
                <span className="cyber-led cyan"></span>
                <span>Hardware Offline Sync</span>
              </div>
              <div className="floating-cyber-pill cyber-side">
                <span className="cyber-led violet"></span>
                <span>Respaldo Autónomo</span>
              </div>

              {/* 3D Isometric Exploded Canvas */}
              <svg className="arch-hero-svg" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.25" />
                  </linearGradient>

                  <linearGradient id="violetPlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.1" />
                  </linearGradient>

                  <linearGradient id="cyanPlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.32" />
                    <stop offset="100%" stopColor="#0369a1" stopOpacity="0.08" />
                  </linearGradient>

                  <linearGradient id="emeraldPlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#047857" stopOpacity="0.08" />
                  </linearGradient>

                  <linearGradient id="amberPlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#b45309" stopOpacity="0.08" />
                  </linearGradient>

                  <filter id="neonGlow">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Vertical Laser Elevator Columns (Beaming between Layer 4 and Layer 1) */}
                {effectiveArchProgress > 0.05 && (
                  <g className="elevator-columns">
                    {/* Left vertex column */}
                    <line
                      x1="160"
                      y1={yLayer4}
                      x2="160"
                      y2={yLayer1}
                      stroke="#00f0ff"
                      strokeWidth="1.5"
                      strokeDasharray="4 6"
                      strokeOpacity="0.55"
                    />
                    {/* Right vertex column */}
                    <line
                      x1="540"
                      y1={yLayer4}
                      x2="540"
                      y2={yLayer1}
                      stroke="#00f0ff"
                      strokeWidth="1.5"
                      strokeDasharray="4 6"
                      strokeOpacity="0.55"
                    />
                    {/* Top vertex column */}
                    <line
                      x1="350"
                      y1={yLayer4 - 58}
                      x2="350"
                      y2={yLayer1 - 58}
                      stroke="#8b5cf6"
                      strokeWidth="1.5"
                      strokeDasharray="4 6"
                      strokeOpacity="0.45"
                    />
                    {/* Bottom vertex column */}
                    <line
                      x1="350"
                      y1={yLayer4 + 58}
                      x2="350"
                      y2={yLayer1 + 58}
                      stroke="#8b5cf6"
                      strokeWidth="1.5"
                      strokeDasharray="4 6"
                      strokeOpacity="0.45"
                    />
                    {/* Central High-Speed Data Spine */}
                    <line
                      x1="350"
                      y1={yLayer4}
                      x2="350"
                      y2={yLayer1}
                      stroke="#00f0ff"
                      strokeWidth="2.5"
                      strokeDasharray="8 6"
                      filter="url(#neonGlow)"
                      className="data-spine-pulse"
                    />

                    {/* Traveling Vertical Pulse Beads */}
                    <circle cx="350" cy={yLayer1 - (yLayer1 - yLayer4) * 0.3} r="5" fill="#00f0ff" filter="url(#neonGlow)" />
                    <circle cx="350" cy={yLayer1 - (yLayer1 - yLayer4) * 0.7} r="5" fill="#a855f7" filter="url(#neonGlow)" />
                    <circle cx="160" cy={yLayer1 - (yLayer1 - yLayer4) * 0.5} r="4" fill="#00f0ff" />
                    <circle cx="540" cy={yLayer1 - (yLayer1 - yLayer4) * 0.5} r="4" fill="#10b981" />
                  </g>
                )}

                {/* ══ LAYER 1: BASE — HARDWARE DE TERRENO & EDGE POS ══ */}
                <g className="iso-layer layer-1">
                  {/* Plate side thickness */}
                  <polygon
                    points={`160,${yLayer1} 350,${yLayer1 + 58} 350,${yLayer1 + 70} 160,${yLayer1 + 12}`}
                    fill="rgba(16, 185, 129, 0.4)"
                  />
                  <polygon
                    points={`540,${yLayer1} 350,${yLayer1 + 58} 350,${yLayer1 + 70} 540,${yLayer1 + 12}`}
                    fill="rgba(5, 150, 105, 0.6)"
                  />
                  {/* Plate face */}
                  <polygon
                    points={isoDiamond(yLayer1)}
                    fill="url(#emeraldPlateGrad)"
                    stroke="#10b981"
                    strokeWidth="1.8"
                  />
                  {/* Circuit traces on plate */}
                  <line x1="280" y1={yLayer1} x2="420" y2={yLayer1} stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.6" />
                  <circle cx="350" cy={yLayer1} r="7" fill="#10b981" filter="url(#neonGlow)" />

                  {/* Layer Label Tag */}
                  <text x="140" y={yLayer1 + 15} fill="#34d399" fontSize="10.5" fontWeight="800" textAnchor="end">
                    01. EDGE &amp; POS
                  </text>
                  <text x="140" y={yLayer1 + 30} fill="#94a3b8" fontSize="9" textAnchor="end">
                    Offline Sync 100%
                  </text>
                </g>

                {/* ══ LAYER 2: ERP CONNECTORS & MIDDLEWARE BUS ══ */}
                <g className="iso-layer layer-2">
                  {/* Plate side thickness */}
                  <polygon
                    points={`160,${yLayer2} 350,${yLayer2 + 58} 350,${yLayer2 + 70} 160,${yLayer2 + 12}`}
                    fill="rgba(245, 158, 11, 0.35)"
                  />
                  <polygon
                    points={`540,${yLayer2} 350,${yLayer2 + 58} 350,${yLayer2 + 70} 540,${yLayer2 + 12}`}
                    fill="rgba(180, 83, 9, 0.55)"
                  />
                  {/* Plate face */}
                  <polygon
                    points={isoDiamond(yLayer2)}
                    fill="url(#amberPlateGrad)"
                    stroke="#f59e0b"
                    strokeWidth="1.8"
                  />
                  {/* Circuit traces */}
                  <line x1="260" y1={yLayer2 - 15} x2="440" y2={yLayer2 + 15} stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.6" />
                  <circle cx="350" cy={yLayer2} r="7" fill="#f59e0b" filter="url(#neonGlow)" />

                  {/* Layer Label Tag */}
                  <text x="560" y={yLayer2 + 15} fill="#fbbf24" fontSize="10.5" fontWeight="800" textAnchor="start">
                    02. BUS ERP
                  </text>
                  <text x="560" y={yLayer2 + 30} fill="#94a3b8" fontSize="9" textAnchor="start">
                    SAP • Softland • REST
                  </text>
                </g>

                {/* ══ LAYER 3: MOTOR DE IA & ORQUESTACIÓN ══ */}
                <g className="iso-layer layer-3">
                  {/* Plate side thickness */}
                  <polygon
                    points={`160,${yLayer3} 350,${yLayer3 + 58} 350,${yLayer3 + 70} 160,${yLayer3 + 12}`}
                    fill="rgba(139, 92, 246, 0.4)"
                  />
                  <polygon
                    points={`540,${yLayer3} 350,${yLayer3 + 58} 350,${yLayer3 + 70} 540,${yLayer3 + 12}`}
                    fill="rgba(109, 40, 217, 0.6)"
                  />
                  {/* Plate face */}
                  <polygon
                    points={isoDiamond(yLayer3)}
                    fill="url(#violetPlateGrad)"
                    stroke="#8b5cf6"
                    strokeWidth="1.8"
                  />
                  {/* Circuit traces */}
                  <line x1="300" y1={yLayer3 - 25} x2="400" y2={yLayer3 + 25} stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.7" />
                  <circle cx="350" cy={yLayer3} r="8" fill="#8b5cf6" filter="url(#neonGlow)" />

                  {/* Layer Label Tag */}
                  <text x="140" y={yLayer3 + 15} fill="#c084fc" fontSize="10.5" fontWeight="800" textAnchor="end">
                    03. MOTOR IA
                  </text>
                  <text x="140" y={yLayer3 + 30} fill="#94a3b8" fontSize="9" textAnchor="end">
                    Local RAG &amp; Agentes
                  </text>
                </g>

                {/* ══ LAYER 4: TOP — RESILIENCIA CLOUD & ALTA DISPONIBILIDAD ══ */}
                <g className="iso-layer layer-4">
                  {/* Plate side thickness */}
                  <polygon
                    points={`160,${yLayer4} 350,${yLayer4 + 58} 350,${yLayer4 + 70} 160,${yLayer4 + 12}`}
                    fill="rgba(0, 240, 255, 0.4)"
                  />
                  <polygon
                    points={`540,${yLayer4} 350,${yLayer4 + 58} 350,${yLayer4 + 70} 540,${yLayer4 + 12}`}
                    fill="rgba(2, 132, 199, 0.65)"
                  />
                  {/* Plate face */}
                  <polygon
                    points={isoDiamond(yLayer4)}
                    fill="url(#cyanPlateGrad)"
                    stroke="#00f0ff"
                    strokeWidth="2.2"
                  />
                  {/* Glowing center beacon */}
                  <circle cx="350" cy={yLayer4} r="14" fill="#00f0ff" filter="url(#neonGlow)" />
                  <circle cx="350" cy={yLayer4} r="6" fill="#ffffff" />

                  {/* High Availability Outer Rings */}
                  <circle
                    cx="350"
                    cy={yLayer4}
                    r="40"
                    fill="none"
                    stroke="#00f0ff"
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                    strokeOpacity="0.7"
                  />

                  {/* Layer Label Tag */}
                  <text x="560" y={yLayer4 + 15} fill="#00f0ff" fontSize="10.5" fontWeight="800" textAnchor="start">
                    04. CLOUD RESILIENCIA
                  </text>
                  <text x="560" y={yLayer4 + 30} fill="#94a3b8" fontSize="9" textAnchor="start">
                    SLA 99.99% • Auto-Failover
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator-tech">
          <span className="scroll-text-t">
            {effectiveArchProgress < 0.95 ? 'Baje con el scroll para separar e inspeccionar capas' : 'Arquitectura desacoplada y redundante'}
          </span>
          <div className="scroll-line-t"></div>
        </div>
      </section>
    </div>

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
                <span>Respaldo Offline</span>
                <span>Hardware Agnostic</span>
                <span>Protocolos Estándar</span>
                <span>Supervisión Central</span>
              </div>
            </div>

            <div className="deep-card">
              <div className="deep-card-icon emerald">
                <Cpu size={26} />
              </div>
              <h3>Inteligencia Artificial y Reglas de Negocio Adaptables</h3>
              <p>
                Asistentes y algoritmos que procesan documentos, resuelven consultas frecuentes de clientes o colaboradores y automatizan decisiones repetitivas respetando las políticas internas de su organización.
              </p>
              <div className="stack-tags">
                <span>Modelos Privados</span>
                <span>Automatización de Flujos</span>
                <span>Cero Disrupción</span>
                <span>Protección de Datos</span>
              </div>
            </div>

            <div className="deep-card">
              <div className="deep-card-icon cyan">
                <Server size={26} />
              </div>
              <h3>Capacidad para Picos de Alta Demanda</h3>
              <p>
                Servicios diseñados para absorber incrementos repentinos en transacciones comerciales o consultas operativas sin degradar la velocidad de respuesta ni generar caídas de sistema.
              </p>
              <div className="stack-tags">
                <span>Alta Disponibilidad</span>
                <span>Balanceo de Carga</span>
                <span>Monitoreo Proactivo</span>
                <span>99.99% Continuidad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles & Standards */}
      <section className="tech-section-standards" id="estandares">
        <div className="tech-content-container">
          <div className="tech-head-center">
            <span className="tech-pill-tag">Compromiso Técnico LSOFT</span>
            <h2>Tres principios que rigen cada solución que implementamos</h2>
            <p>La tecnología sólo es valiosa si aporta estabilidad, respeta la inversión previa de su empresa y es fácil de operar en el día a día.</p>
          </div>

          <div className="principles-grid">
            <div className="principle-card">
              <div className="p-num">01</div>
              <h4>No reinventar la rueda innecesariamente</h4>
              <p>
                Si su empresa ya utiliza un software que funciona para la facturación o la logística, construimos sobre él. Integramos y mejoramos en vez de obligar a realizar migraciones traumáticas o costosas.
              </p>
            </div>

            <div className="principle-card">
              <div className="p-num">02</div>
              <h4>Diseñado para tolerar fallas de red o terreno</h4>
              <p>
                En Chile la conectividad en faenas o sucursales puede fluctuar. Toda solución de hardware o captura de datos que entregamos incluye persistencia local y sincronización diferida automática.
              </p>
            </div>

            <div className="principle-card">
              <div className="p-num">03</div>
              <h4>Acompañamiento técnico directo y cercano</h4>
              <p>
                No dejamos a su equipo con un manual técnico de 400 páginas y nos retiramos. Asumimos la entrega llave en mano, capacitamos a sus personas y respaldamos la continuidad de la solución en el tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Contact / Technical Consultation */}
      <section className="tech-section-contact" id="contacto">
        <div className="tech-content-container">
          <div className="tech-contact-box">
            <div className="contact-box-left">
              <span className="tech-pill-tag">Consulta Técnica</span>
              <h2>¿Desea revisar la arquitectura de sus sistemas con un especialista?</h2>
              <p>
                Conversemos sobre cómo interconectar sus sistemas actuales, incorporar hardware o preparar su infraestructura para mayor volumen transaccional sin fricciones.
              </p>

              <div className="contact-features-list">
                <div className="cf-item">
                  <CheckCircle size={16} className="cf-icon" />
                  <span>Sesión con consultor técnico senior (no vendedor comercial)</span>
                </div>
                <div className="cf-item">
                  <CheckCircle size={16} className="cf-icon" />
                  <span>Evaluación preliminar de compatibilidad con sus sistemas actuales</span>
                </div>
                <div className="cf-item">
                  <CheckCircle size={16} className="cf-icon" />
                  <span>Propuesta de arquitectura y alcance 100% llave en mano</span>
                </div>
              </div>

              <a
                href="https://wa.me/56995377845?text=Estimados%20LSOFT,%20deseamos%20coordinar%20una%20sesion%20tecnica%20de%20arquitectura%20e%20integracion."
                target="_blank"
                rel="noopener noreferrer"
                className="tech-whatsapp-cta"
              >
                <span>Coordinar Sesión Técnica vía WhatsApp</span>
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="contact-box-right">
              <form onSubmit={handleSubmit} className="cyber-form">
                <div className="form-head">
                  <span className="form-head-title">$ lsoft consultoria --agendar</span>
                </div>

                <div className="cyber-field">
                  <label>Nombre y Cargo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Christian Morales - Jefe de TI / Operaciones"
                    value={techStackForm.name}
                    onChange={(e) => setTechStackForm({ ...techStackForm, name: e.target.value })}
                  />
                </div>

                <div className="cyber-field">
                  <label>Correo Electrónico Corporativo</label>
                  <input
                    type="email"
                    required
                    placeholder="c.morales@empresa.cl"
                    value={techStackForm.email}
                    onChange={(e) => setTechStackForm({ ...techStackForm, email: e.target.value })}
                  />
                </div>

                <div className="cyber-field">
                  <label>Sistemas o ERP que utiliza su empresa actualmente</label>
                  <input
                    type="text"
                    placeholder="Ej. Softland, base SQL Server y terminales POS en sucursales"
                    value={techStackForm.techStack}
                    onChange={(e) => setTechStackForm({ ...techStackForm, techStack: e.target.value })}
                  />
                </div>

                <div className="cyber-field">
                  <label>Desafío o requerimiento a resolver</label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Ej. Necesitamos conectar las ventas de terreno con el inventario central sin demoras ni caídas..."
                    value={techStackForm.problem}
                    onChange={(e) => setTechStackForm({ ...techStackForm, problem: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="cyber-submit-btn">
                  <span>Solicitar Sesión Técnica</span>
                  <ArrowRight size={16} />
                </button>

                {isSubmitted && (
                  <div className="cyber-success-msg">
                    ✔ Solicitud registrada en el sistema. Un consultor técnico se pondrá en contacto a la brevedad.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Footer */}
      <footer className="tech-footer">
        <div className="tech-content-container footer-flex">
          <div>
            <img src="/images/lsoft-modern-logo.svg" alt="LSOFT" width="150" height="42" />
            <p>18+ años construyendo soluciones de integración, resiliencia de sistemas y continuidad operacional en Chile.</p>
          </div>
          <div className="tech-footer-nav">
            <a href="#arquitectura">Arquitectura</a>
            <a href="#telemetria">Monitor en Vivo</a>
            <a href="#capacidades">Capacidades</a>
            <a href="#estandares">Principios</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
        <div className="tech-copyright-bar">
          <p>© {new Date().getFullYear()} LSOFT Servicios Informáticos. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
