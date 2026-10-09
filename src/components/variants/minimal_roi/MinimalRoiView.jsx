import React, { useState, useEffect, useRef } from 'react';
import {
  Clock,
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  XCircle,
  ArrowRight,
  Sparkles,
  HeartHandshake,
  Award,
  Layers,
  LineChart,
  RotateCcw,
  Zap,
} from 'lucide-react';
import { useScrollStory } from '../../../hooks/useScrollStory';
import RoiCalculator from './RoiCalculator';
import BottleneckConduit from './BottleneckConduit';

export default function MinimalRoiView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bottleneck: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Pinned Scrollytelling & 3D Interactive Time-to-ROI Engine
  const heroTrackRef = useRef(null);
  const { scrollProgress, mousePos, mouseHandlers } = useScrollStory(heroTrackRef, { isPinnedTrack: true });

  // Effective progress: 0 = Fuga de tiempo severa, 1 = Retorno consolidado (+3.8x)
  // First 75% runs transformation, remaining 25% holds before unpinning
  const effectiveHeroProgress = Math.min(1, Math.max(0, scrollProgress / 0.75));
  const isElevated = effectiveHeroProgress >= 0.65;

  // Dynamic values responding to scroll
  const dynamicHours = Math.round(effectiveHeroProgress * 14850);
  const dynamicGainCLP = Math.round(effectiveHeroProgress * 44550000);
  const dynamicROI = (1.0 + effectiveHeroProgress * 2.8).toFixed(1);

  // Leaking operational nodes that converge into the center vortex
  const leakNodes = [
    { id: 1, labelLoss: '-24h Planillas', labelGain: '+Planillas Auto', angle: 35, chaosDist: 235, orderDist: 70, color: '#f59e0b' },
    { id: 2, labelLoss: '-18h Cuadraturas', labelGain: '+Cuadraturas ERP', angle: 95, chaosDist: 250, orderDist: 85, color: '#ef4444' },
    { id: 3, labelLoss: '-28h Correos', labelGain: '+Respuestas 24/7', angle: 165, chaosDist: 230, orderDist: 65, color: '#f59e0b' },
    { id: 4, labelLoss: '-14h Reprocesos', labelGain: '+Cero Fricción', angle: 230, chaosDist: 245, orderDist: 75, color: '#ef4444' },
    { id: 5, labelLoss: '-16h Esperas ERP', labelGain: '+Conexión Nativa', angle: 290, chaosDist: 255, orderDist: 70, color: '#f59e0b' },
    { id: 6, labelLoss: '-12h Archivos', labelGain: '+Datos Seguros', angle: 350, chaosDist: 220, orderDist: 85, color: '#10b981' },
  ];

  const interpolatedLeakNodes = leakNodes.map((n) => {
    const currentDist = n.chaosDist - (n.chaosDist - n.orderDist) * effectiveHeroProgress;
    const rad = (n.angle * Math.PI) / 180;
    return {
      ...n,
      x: 300 + Math.cos(rad) * currentDist,
      y: 300 + Math.sin(rad) * currentDist,
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', bottleneck: '' });
    }, 4000);
  };

  return (
    <div className="variant-minimal-page">
      {/* Minimal Header */}
      <header className="minimal-header">
        <div className="minimal-header-container">
          <a href="#inicio" className="minimal-brand">
            <img src="/images/lsoft-modern-logo.svg" alt="LSOFT Servicios" width="160" height="45" />
            <span className="minimal-brand-tag">Eficiencia &amp; Retorno</span>
          </a>

          <nav className="minimal-nav">
            <a href="#metodologia">Metodología</a>
            <a href="#calculadora">Calculadora</a>
            <a href="#ventaja">Ventaja</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a
            href="https://wa.me/56995377845?text=Estimados%20LSOFT,%20deseo%20evaluar%20el%20ahorro%20de%20tiempo%20y%20la%20optimizacion%20operativa%20de%20mi%20empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="minimal-cta-pill"
          >
            <span>Evaluar Operación</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════
          IMMERSIVE PINNED HERO — Chrono-Recovery & ROI Elevation Engine
         ═══════════════════════════════════════════════════════════════ */}
      <div className="minimal-hero-scroll-track" ref={heroTrackRef}>
        <section className="minimal-hero-sticky-stage" id="inicio">
        <div className="minimal-hero-ambient"></div>
        <div className="minimal-hero-container">
          <div className="minimal-hero-split">
            {/* Left Column: Hero copy & CTAs */}
            <div className="minimal-hero-content">
              <div className="hero-counter-display">
                <span className="counter-pulse-dot"></span>
                <span className="counter-number">
                  +{dynamicHours > 0 ? dynamicHours.toLocaleString('es-CL') : '14.850'}
                </span>
                <span className="counter-label">horas recuperadas para empresas este año</span>
              </div>

              <h1 className="minimal-hero-headline">
                No Gaste en software.
                <br />
                <span className="text-gain">Invierta en su tiempo.</span>
              </h1>

              <p className="minimal-hero-subcopy">
                Transformamos los cuellos de botella de su empresa en ventajas competitivas cuantificables.
                Menor carga operativa, mayor capacidad de escala con la misma dotación.
              </p>

              <div className="minimal-hero-ctas">
                <a href="#calculadora" className="btn-gain-primary">
                  <TrendingUp size={18} />
                  <span>Calcular Retorno Operativo</span>
                </a>
                <a href="#metodologia" className="btn-gain-outline">
                  <span>Nuestra Metodología</span>
                </a>
              </div>

              {/* Trust indicators — floating glass chips */}
              <div className="trust-chips">
                <div className="trust-chip">
                  <Award size={16} />
                  <span>18+ años en Chile</span>
                </div>
                <div className="trust-chip">
                  <HeartHandshake size={16} />
                  <span>Llave en mano</span>
                </div>
                <div className="trust-chip">
                  <ShieldCheck size={16} />
                  <span>Continuidad asegurada</span>
                </div>
              </div>
            </div>

            {/* Right Column: Time Visual Engine + Interactive Scrubber */}
            <div
              className="minimal-hero-visual"
              {...mouseHandlers}
              style={{
                transform: `perspective(900px) rotateX(${mousePos.y * -7}deg) rotateY(${mousePos.x * 9}deg)`,
              }}
            >
              {/* ROI Ambient Status Pill (Scroll Driven) */}
              <div className="roi-status-pill">
                <div className="roi-status-head">
                  <span className={`roi-status-led ${isElevated ? 'green' : 'amber'}`}></span>
                  <span className="roi-status-title">
                    {isElevated
                      ? `RETORNO CONSOLIDADO: +${dynamicROI}x ROI OPERATIVO`
                      : 'ESTADO INICIAL: FUGA DE HORAS DETECTADA (-84h/mes)'}
                  </span>
                </div>
                <div className="roi-progress-indicator">
                  <div className="roi-progress-bar">
                    <div
                      className="roi-progress-fill"
                      style={{ width: `${Math.min(100, effectiveHeroProgress * 100)}%` }}
                    ></div>
                  </div>
                  <span className="roi-assist-hint">
                    {effectiveHeroProgress < 0.95 ? '⇣ Scrollee para ver la recuperación' : '✔ Retorno Maximizado'}
                  </span>
                </div>
              </div>

              {/* Floating milestone pills around the time engine */}
              <div
                className="floating-roi-pill pill-top"
                style={{
                  borderColor: isElevated ? '#059669' : '#cbd5e1',
                  boxShadow: isElevated ? '0 10px 25px rgba(5,150,105,0.2)' : 'none',
                }}
              >
                <Clock size={14} className="pill-icon" />
                <span>
                  <strong>{isElevated ? '+84 hrs/mes' : '84 hrs en riesgo'}</strong> {isElevated ? 'liberadas por colaborador' : 'en tareas manuales'}
                </span>
              </div>

              <div
                className="floating-roi-pill pill-bottom"
                style={{
                  borderColor: isElevated ? '#059669' : '#cbd5e1',
                  boxShadow: isElevated ? '0 10px 25px rgba(5,150,105,0.2)' : 'none',
                }}
              >
                <TrendingUp size={14} className="pill-icon" />
                <span>
                  <strong>+{dynamicROI}x ROI</strong> sobre costo operativo
                </span>
              </div>

              <div className="floating-roi-pill pill-side">
                <Sparkles size={14} className="pill-icon" />
                <span><strong>0 resistencia</strong> de adopción en equipo</span>
              </div>

              {/* Chrono-Recovery SVG Canvas */}
              <svg className="time-visual-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#059669" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.06" />
                  </linearGradient>

                  <linearGradient id="emeraldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#059669" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#34d399" stopOpacity="0.35" />
                  </linearGradient>

                  <linearGradient id="roiCurveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#10b981" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="1" />
                  </linearGradient>

                  <radialGradient id="vortexGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={isElevated ? '#10b981' : '#f59e0b'} stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </radialGradient>

                  <filter id="emeraldGlow">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Background Grid & Axis */}
                <line x1="80" y1="520" x2="540" y2="520" stroke="rgba(203,213,225,0.6)" strokeWidth="1.5" />
                <line x1="80" y1="520" x2="80" y2="100" stroke="rgba(203,213,225,0.6)" strokeWidth="1.5" />

                {/* Concentric Geometric Rings */}
                <circle className="time-ring tr-1" cx="300" cy="300" r="255" />
                <circle className="time-ring tr-2" cx="300" cy="300" r="205" />
                <circle className="time-ring tr-3" cx="300" cy="300" r="155" />
                <circle className="time-ring tr-4" cx="300" cy="300" r="105" />

                {/* Rotating Arc Segments */}
                <path className="time-arc arc-1" d="M 300 45 A 255 255 0 0 1 555 300" />
                <path className="time-arc arc-2" d="M 300 555 A 255 255 0 0 1 45 300" />

                {/* Inward Gravity Magnetic Conduits (connecting leak nodes to vortex) */}
                {interpolatedLeakNodes.map((n) => (
                  <line
                    key={`beam-${n.id}`}
                    x1="300"
                    y1="300"
                    x2={n.x}
                    y2={n.y}
                    stroke={isElevated ? '#10b981' : '#f59e0b'}
                    strokeWidth={1 + effectiveHeroProgress * 1.5}
                    strokeOpacity={0.25 + effectiveHeroProgress * 0.45}
                    strokeDasharray="4 6"
                  />
                ))}

                {/* Ascending ROI Laser Curve (Drawn dynamically based on progress) */}
                <path
                  d="M 90,510 Q 240,490 350,330 T 520,130"
                  fill="none"
                  stroke="url(#roiCurveGrad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="600"
                  strokeDashoffset={600 - effectiveHeroProgress * 600}
                  filter="url(#emeraldGlow)"
                />

                {/* ROI Growth Milestone Points */}
                {effectiveHeroProgress > 0.25 && (
                  <g className="milestone-pt-1">
                    <circle cx="270" cy="420" r="5" fill="#f59e0b" />
                    <text x="270" y="445" fill="#d97706" fontSize="9.5" fontWeight="700" textAnchor="middle">
                      +1.4x Base
                    </text>
                  </g>
                )}

                {effectiveHeroProgress > 0.6 && (
                  <g className="milestone-pt-2">
                    <circle cx="390" cy="270" r="6" fill="#10b981" filter="url(#emeraldGlow)" />
                    <text x="390" y="252" fill="#047857" fontSize="10" fontWeight="800" textAnchor="middle">
                      +2.5x Auto
                    </text>
                  </g>
                )}

                {effectiveHeroProgress > 0.9 && (
                  <g className="milestone-pt-3">
                    <circle cx="520" cy="130" r="9" fill="#059669" filter="url(#emeraldGlow)" />
                    <circle cx="520" cy="130" r="4" fill="#ffffff" />
                    <text x="520" y="108" fill="#047857" fontSize="12" fontWeight="900" textAnchor="middle">
                      +3.8x ROI
                    </text>
                  </g>
                )}

                {/* Clock Hands with Growth Vector Orientation */}
                <line
                  className="clock-hand"
                  x1="300"
                  y1="300"
                  x2={300 + Math.cos((-90 + effectiveHeroProgress * 135) * Math.PI / 180) * 110}
                  y2={300 + Math.sin((-90 + effectiveHeroProgress * 135) * Math.PI / 180) * 110}
                  stroke="#059669"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <line
                  className="clock-hand"
                  x1="300"
                  y1="300"
                  x2={300 + Math.cos((-90 + effectiveHeroProgress * 225) * Math.PI / 180) * 140}
                  y2={300 + Math.sin((-90 + effectiveHeroProgress * 225) * Math.PI / 180) * 140}
                  stroke="#10b981"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Central Time Core Vortex */}
                <circle cx="300" cy="300" r="75" fill="url(#vortexGlow)" />
                <circle cx="300" cy="300" r="50" fill="url(#emeraldGrad)" stroke="#059669" strokeWidth="2" />
                <circle cx="300" cy="300" r="8" fill="#059669" filter="url(#emeraldGlow)" />

                {/* Central Core Label */}
                <text x="300" y="295" fill="#047857" fontSize="10" fontWeight="800" textAnchor="middle">
                  {isElevated ? 'LSOFT' : 'RESERVORIO'}
                </text>
                <text x="300" y="312" fill="#065f46" fontSize="9" fontWeight="700" textAnchor="middle">
                  {isElevated ? 'TIEMPO' : 'DE HORAS'}
                </text>

                {/* Leaking Nodes / Converged Nodes */}
                {interpolatedLeakNodes.map((n) => (
                  <g key={n.id} className="leak-node-group">
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={isElevated ? 6 : 5}
                      fill={isElevated ? '#059669' : n.color}
                      stroke="#ffffff"
                      strokeWidth="1.5"
                    />
                    <text
                      x={n.x}
                      y={n.y - 10}
                      fill={isElevated ? '#047857' : '#9a3412'}
                      fontSize="9"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      {isElevated ? n.labelGain : n.labelLoss}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator-minimal">
          <span className="scroll-text-m">
            {effectiveHeroProgress < 0.95 ? 'Baje con el scroll para ver la recuperación de horas' : 'Calcule su retorno operativo'}
          </span>
          <div className="scroll-line-m"></div>
        </div>
      </section>
    </div>

      {/* Calculator Section */}
      <section className="minimal-calc-section" id="calculadora">
        <div className="minimal-container">
          <RoiCalculator />
        </div>
      </section>

      {/* La Metodología de 4 Etapas */}
      <section className="minimal-pillars-section" id="metodologia">
        <div className="minimal-container">
          <div className="minimal-section-head">
            <span className="kicker-tag">Nuestra Metodología Integral</span>
            <h2>Cómo convertimos la ineficiencia operativa en rentabilidad medible</h2>
            <p>Un enfoque metódico y estructurado que respeta la realidad de su empresa y asegura resultados desde el primer mes.</p>
          </div>

          {/* Sequential Stage Process Pipeline */}
          <div className="methodology-pipeline-track">
            <div className="pipeline-step-pill active">
              <span className="p-num">01</span>
              <span className="p-txt">Análisis</span>
            </div>
            <div className="pipeline-connector-line"></div>
            <div className="pipeline-step-pill active">
              <span className="p-num">02</span>
              <span className="p-txt">Propuesta</span>
            </div>
            <div className="pipeline-connector-line"></div>
            <div className="pipeline-step-pill active">
              <span className="p-num">03</span>
              <span className="p-txt">Automatización</span>
            </div>
            <div className="pipeline-connector-line"></div>
            <div className="pipeline-step-pill active">
              <span className="p-num">04</span>
              <span className="p-txt">Escalabilidad</span>
            </div>
          </div>

          <div className="pillars-grid">
            <div className="pillar-item">
              <div className="pillar-num">01</div>
              <h3>Análisis de Operaciones</h3>
              <p>
                Levantamos y mapeamos los flujos de trabajo actuales. Identificamos con precisión dónde se concentran las fricciones, demoras y tareas repetitivas que sobrecargan a su personal.
              </p>
            </div>

            <div className="pillar-item">
              <div className="pillar-num">02</div>
              <h3>Propuesta de Solución a la Medida</h3>
              <p>
                Diseñamos una respuesta técnica adaptada a los procesos y herramientas que su empresa ya utiliza. Sin complejidades innecesarias ni disrupciones operativas.
              </p>
            </div>

            <div className="pillar-item">
              <div className="pillar-num">03</div>
              <h3>Automatización Efectiva</h3>
              <p>
                Conectamos los sistemas, configuramos las reglas de negocio e integramos las herramientas de automatización de inicio a fin. Entrega 100% llave en mano.
              </p>
            </div>

            <div className="pillar-item">
              <div className="pillar-num">04</div>
              <h3>Ahorro de Tiempo &amp; Escalabilidad</h3>
              <p>
                Su equipo queda liberado de tareas manuales redundantes, los errores operativos se minimizan y su empresa queda preparada para absorber mayor volumen de negocio con la misma estructura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformar el Cuello de Botella en Ventaja Competitiva */}
      <section className="minimal-contrast-section" id="ventaja">
        <div className="minimal-container">
          <div className="minimal-section-head">
            <span className="kicker-tag">Perspectiva Estratégica</span>
            <h2>Transformar su cuello de botella en su mayor ventaja competitiva</h2>
            <p>El punto más lento de su operación determina el ritmo de toda la empresa. Al resolverlo, el impacto positivo se multiplica en toda la cadena de valor.</p>
          </div>

          {/* Dynamic Bottleneck Dilatation Conduit */}
          <BottleneckConduit />

          <div className="contrast-columns-grid">
            {/* Limitación Operativa Column */}
            <div className="contrast-card cost-column">
              <div className="contrast-badge loss">
                <XCircle size={18} />
                <span>Cuando el cuello de botella permanece sin resolver</span>
              </div>
              <ul className="contrast-list">
                <li>
                  <strong>Sobrecarga constante del personal clave:</strong> El talento de mayor experiencia pasa gran parte de su jornada resolviendo trabas operativas y cuadraturas manuales.
                </li>
                <li>
                  <strong>Tiempos de respuesta lentos hacia clientes:</strong> Retrasos en cotizaciones, entregas o confirmaciones comerciales frente a competidores más ágiles.
                </li>
                <li>
                  <strong>Techo de crecimiento artificial:</strong> La empresa no puede asumir más contratos o clientes sin antes contratar más personal administrativo para manejar el desorden.
                </li>
                <li>
                  <strong>Vulnerabilidad ante la rotación de colaboradores:</strong> Procesos no sistematizados que dependen excesivamente de la memoria individual de pocas personas.
                </li>
              </ul>
            </div>

            {/* Ventaja Competitiva Column */}
            <div className="contrast-card gain-column">
              <div className="contrast-badge win">
                <CheckCircle size={18} />
                <span>Cuando el cuello de botella se transforma en ventaja</span>
              </div>
              <ul className="contrast-list">
                <li>
                  <strong>Agilidad de respuesta comercial inmediata:</strong> Procesos fluidos que permiten responder, cotizar y entregar con velocidad superior al promedio del mercado.
                </li>
                <li>
                  <strong>Equipo enfocado en tareas de alto impacto:</strong> Sus colaboradores disponen de tiempo y energía para la venta, la relación con clientes y la toma de decisiones estratégicas.
                </li>
                <li>
                  <strong>Capacidad de escala con costos controlados:</strong> Su operación puede multiplicar el volumen transaccional sin necesidad de aumentar proporcionalmente los costos fijos.
                </li>
                <li>
                  <strong>Certeza operacional y datos confiables:</strong> La información fluye de manera exacta entre áreas, otorgando a la gerencia visibilidad en tiempo real para decidir con fundamento.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tres Pasos */}
      <section className="minimal-steps-section">
        <div className="minimal-container">
          <div className="minimal-section-head">
            <span className="kicker-tag">Simplicidad para su Organización</span>
            <h2>Tres pasos transparentes hacia una operación más ágil y liviana</h2>
            <p>Sin lenguaje técnico confuso. Un proceso consultivo claro, profesional y orientado a resultados.</p>
          </div>

          <div className="steps-flow-grid">
            <div className="flow-card">
              <span className="step-circle">1</span>
              <h4>Sesión de Diagnóstico</h4>
              <p>Revisamos conjuntamente los procesos operativos actuales para identificar los puntos críticos que generan mayor pérdida de tiempo y sobrecarga.</p>
            </div>

            <div className="flow-card">
              <span className="step-circle">2</span>
              <h4>Propuesta y Ejecución Llave en Mano</h4>
              <p>LSOFT diseña la arquitectura, integra las herramientas necesarias y realiza las pruebas de continuidad sin interrumpir la operación habitual de su empresa.</p>
            </div>

            <div className="flow-card highlight">
              <span className="step-circle">3</span>
              <h4>Operación Fluida y Acompañamiento</h4>
              <p>Capacitamos a su personal de manera cercana y respaldamos el sistema de forma permanente, asegurando que el ahorro de tiempo se consolide en el tiempo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Contact Box */}
      <section className="minimal-contact-section" id="contacto">
        <div className="minimal-container">
          <div className="minimal-contact-wrapper">
            <div className="contact-text-side">
              <span className="kicker-tag">Contacto Consultivo</span>
              <h2>¿Desea evaluar el potencial de optimización en la operación de su empresa?</h2>
              <p>
                Coordinemos una sesión ejecutiva de 20 minutos sin costo. Le presentaremos una perspectiva concreta de cómo liberar horas operativas y hacer más eficiente su gestión.
              </p>
              <div className="direct-cta-whatsapp">
                <a
                  href="https://wa.me/56995377845?text=Estimados%20LSOFT,%20deseamos%20coordinar%20una%20sesion%20de%20evaluacion%20operativa%20para%20nuestra%20empresa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-pill-button"
                >
                  <span>Coordinar vía WhatsApp</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="contact-form-side">
              <form onSubmit={handleSubmit} className="clean-minimal-form">
                <h4>O déjenos sus datos corporativos para comunicarnos:</h4>

                <div className="input-row">
                  <label>Nombre y Cargo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Rodrigo Fernández - Gerente de Operaciones"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="input-row">
                  <label>Correo Electrónico Corporativo</label>
                  <input
                    type="email"
                    required
                    placeholder="r.fernandez@empresa.cl"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="input-row">
                  <label>¿Qué proceso o cuello de botella operativo requiere resolver con mayor prioridad?</label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Ej. La coordinación entre ventas y despacho requiere demasiada conciliación manual diaria..."
                    value={formData.bottleneck}
                    onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="submit-gain-btn">
                  <span>Solicitar Evaluación de Operaciones</span>
                </button>

                {submitted && (
                  <div className="feedback-gain-msg">
                    ✅ Solicitud recibida satisfactoriamente. Un consultor se comunicará para agendar la sesión en el horario más conveniente.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="minimal-footer">
        <div className="minimal-container footer-content">
          <div>
            <img src="/images/lsoft-modern-logo.svg" alt="LSOFT" width="140" height="40" />
            <p>Más de 18 años optimizando operaciones empresariales, reduciendo cargas de trabajo y acompañando el crecimiento de empresas en Chile.</p>
          </div>
          <div className="footer-links-clean">
            <a href="#metodologia">Metodología</a>
            <a href="#calculadora">Calculadora de Retorno</a>
            <a href="#ventaja">Cuellos de Botella</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
        <div className="minimal-bottom-bar">
          <p>© {new Date().getFullYear()} LSOFT Servicios Informáticos. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
