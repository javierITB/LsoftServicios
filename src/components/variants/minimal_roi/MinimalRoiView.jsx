import React, { useState, useEffect } from 'react';
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
} from 'lucide-react';
import RoiCalculator from './RoiCalculator';

export default function MinimalRoiView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bottleneck: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [heroCounter, setHeroCounter] = useState(0);

  // Animated counter for the hero
  useEffect(() => {
    const target = 2340;
    const duration = 2500;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setHeroCounter(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, []);

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
          IMMERSIVE HERO — Animated Time Recovery Visualization
         ═══════════════════════════════════════════════════════════════ */}
      <section className="minimal-hero" id="inicio">
        {/* Subtle background animation */}
        <div className="minimal-hero-bg">
          {/* Concentric circles representing time */}
          <svg className="time-visual-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#059669" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="emeraldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#059669" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Breathing concentric circles */}
            <circle className="time-ring tr-1" cx="300" cy="300" r="260" />
            <circle className="time-ring tr-2" cx="300" cy="300" r="210" />
            <circle className="time-ring tr-3" cx="300" cy="300" r="160" />
            <circle className="time-ring tr-4" cx="300" cy="300" r="110" />

            {/* Rotating arc segments */}
            <path className="time-arc arc-1" d="M 300 40 A 260 260 0 0 1 560 300" />
            <path className="time-arc arc-2" d="M 300 560 A 260 260 0 0 1 40 300" />
            <path className="time-arc arc-3" d="M 300 90 A 210 210 0 0 1 510 300" />

            {/* Clock hands abstracted */}
            <line className="clock-hand hand-hour" x1="300" y1="300" x2="300" y2="170" />
            <line className="clock-hand hand-minute" x1="300" y1="300" x2="300" y2="130" />

            {/* Center pulse */}
            <circle className="time-center-pulse" cx="300" cy="300" r="50" fill="url(#emeraldGrad)" />
            <circle className="time-center-dot" cx="300" cy="300" r="8" />

            {/* Floating time particles rising upward */}
            <circle className="time-particle tp-1" cx="280" cy="300" r="3" />
            <circle className="time-particle tp-2" cx="320" cy="300" r="2.5" />
            <circle className="time-particle tp-3" cx="260" cy="310" r="2" />
            <circle className="time-particle tp-4" cx="340" cy="290" r="2.5" />
            <circle className="time-particle tp-5" cx="300" cy="280" r="3" />
          </svg>
        </div>

        {/* Hero content — Apple-clean */}
        <div className="minimal-hero-content">
          <div className="hero-counter-display">
            <span className="counter-number">+{heroCounter.toLocaleString('es-CL')}</span>
            <span className="counter-label">horas recuperadas por nuestros clientes este año</span>
          </div>

          <h1 className="minimal-hero-headline">
            No adquiere software.
            <br />
            <span className="text-gain">Gana tiempo.</span>
          </h1>

          <p className="minimal-hero-subcopy">
            Transformamos los cuellos de botella de su empresa en ventajas competitivas.
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

        {/* Scroll indicator */}
        <div className="scroll-indicator-minimal">
          <div className="scroll-line-m"></div>
        </div>
      </section>

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
