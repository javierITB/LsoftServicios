import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Check,
  Users,
  Zap,
  ShieldCheck,
  TrendingUp,
  Award,
  MessageSquare,
  Send,
  Menu,
  X,
  Sparkles,
  Clock,
  Lock,
} from 'lucide-react';
import {
  HERO_SQUADS,
  AREA_CATEGORIES,
  SPECIALTY_AREAS,
  HIRING_MODELS,
  TECH_STACK_GROUPS,
} from './teamsData';
import TeamsConfigurator from './TeamsConfigurator';

const CURRENT_YEAR = new Date().getFullYear();

export default function TeamsView() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeHeroSquadId, setActiveHeroSquadId] = useState(HERO_SQUADS[0].id);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState('all');

  // Configurator shared state
  const [selectedModality, setSelectedModality] = useState('celula-dedicada');
  const [selectedAreas, setSelectedAreas] = useState([
    'cloud-migrations',
    'servers-cicd',
  ]);
  const [selectedStacks, setSelectedStacks] = useState([
    'AWS / Azure',
    'DevOps / CI-CD',
  ]);
  const [urgency, setUrgency] = useState('inmediata');

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [configAttached, setConfigAttached] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activeHeroSquad =
    HERO_SQUADS.find((s) => s.id === activeHeroSquadId) || HERO_SQUADS[0];

  const filteredAreas =
    activeCategory === 'all'
      ? SPECIALTY_AREAS
      : SPECIALTY_AREAS.filter((a) => a.category === activeCategory);

  const scrollToSection = (sectionId) => {
    setIsMobileNavOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleToggleArea = (areaId) => {
    setSelectedAreas((prev) =>
      prev.includes(areaId)
        ? prev.filter((id) => id !== areaId)
        : [...prev, areaId]
    );
  };

  const handleToggleStack = (stackName) => {
    setSelectedStacks((prev) =>
      prev.includes(stackName)
        ? prev.filter((s) => s !== stackName)
        : [...prev, stackName]
    );
  };

  const handleResetConfigurator = () => {
    setSelectedModality('celula-dedicada');
    setSelectedAreas([]);
    setSelectedStacks([]);
    setUrgency('inmediata');
  };

  const handleLoadHeroSquadPreset = (squad) => {
    setSelectedModality(squad.modality);
    setSelectedAreas(squad.areas);
    setSelectedStacks(squad.stacks);
    scrollToSection('configurador');
  };

  const handleSelectModalityAndScroll = (modalityId) => {
    setSelectedModality(modalityId);
    scrollToSection('configurador');
  };

  const handleApplyConfigToContact = (summaryText) => {
    setFormData((prev) => ({
      ...prev,
      message: summaryText,
    }));
    setConfigAttached(true);
    scrollToSection('contacto');
  };

  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x, y });
  };

  const handleHeroMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    setIsSubmitted(true);
    setConfigAttached(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    });
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="variant-teams-page">
      {/* Frosted Corporate Header */}
      <header className="teams-header">
        <div className="teams-header-inner">
          <a
            href="#inicio"
            className="teams-brand"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('inicio');
            }}
          >
            <img
              src="/images/lsoft-modern-logo.svg"
              alt="LSOFT Servicios Informáticos"
              width="176"
              height="49"
            />
            <span className="teams-brand-badge">Equipos &amp; Servicios TI</span>
          </a>

          <nav className={`teams-nav ${isMobileNavOpen ? 'open' : ''}`}>
            <a
              href="#areas"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('areas');
              }}
            >
              Áreas Especializadas
            </a>
            <a
              href="#modalidades"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('modalidades');
              }}
            >
              Contratación
            </a>
            <a
              href="#stacks"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('stacks');
              }}
            >
              Tecnologías
            </a>
            <a
              href="#configurador"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('configurador');
              }}
            >
              Configurar Equipo
            </a>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contacto');
              }}
            >
              Contacto
            </a>
          </nav>

          <div className="teams-header-actions">
            <button
              type="button"
              className="teams-header-cta"
              onClick={() => scrollToSection('configurador')}
            >
              <span>Cotizar Equipo</span>
              <ArrowRight size={15} />
            </button>

            <button
              type="button"
              className="teams-mobile-toggle"
              aria-label="Abrir o cerrar menú"
              onClick={() => setIsMobileNavOpen((prev) => !prev)}
            >
              {isMobileNavOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════
          HERO CORPORATIVO MODERNO (Oscuro de Alto Impacto + Células Interactivas)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="teams-hero" id="inicio">
        <div className="teams-hero-grid-bg" aria-hidden="true"></div>
        <div className="teams-hero-glow glow-left" aria-hidden="true"></div>
        <div className="teams-hero-glow glow-right" aria-hidden="true"></div>

        <div className="teams-container teams-hero-layout">
          <div className="teams-hero-copy">
            <div className="hero-eyebrow-pill">
              <Sparkles size={14} />
              <span>18+ años en Chile · Servicios TI con Equipos Multidisciplinarios</span>
            </div>

            <h1 className="teams-hero-title">
              Equipos Especializados para{' '}
              <span className="hero-highlight">cada Desafío Tecnológico</span> de su Empresa.
            </h1>

            <p className="teams-hero-subtitle">
              Potencie la capacidad tecnológica de su organización sin procesos de selección lentos.
              En LSOFT ponemos a su disposición células multidisciplinarias y especialistas administrados en{' '}
              <strong>Cloud, Servidores, CI/CD, Software Interno, Upgrade Legacy, Bases de Datos y Ciberseguridad</strong>,
              bajo la modalidad de contratación exacta que su negocio necesita.
            </p>

            <div className="teams-hero-ctas">
              <button
                type="button"
                className="btn-teams-primary"
                onClick={() => scrollToSection('configurador')}
              >
                <Users size={18} />
                <span>Configurar mi Equipo</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                className="btn-teams-secondary"
                onClick={() => scrollToSection('modalidades')}
              >
                <span>Ver Modalidades de Contratación</span>
              </button>
            </div>

            <div className="teams-hero-kpis">
              <div className="hero-kpi-item">
                <strong>8+</strong>
                <span>Áreas de especialidad técnica</span>
              </div>
              <div className="hero-kpi-item">
                <strong>48–72 hrs</strong>
                <span>Activación de especialistas</span>
              </div>
              <div className="hero-kpi-item">
                <strong>5 modelos</strong>
                <span>Opciones flexibles de contrato</span>
              </div>
              <div className="hero-kpi-item">
                <strong>18+ años</strong>
                <span>Respaldo empresarial en Chile</span>
              </div>
            </div>
          </div>

          {/* Interactive Multidisciplinary Squad Explorer Card */}
          <div
            className="teams-hero-showcase"
            onMouseMove={handleHeroMouseMove}
            onMouseLeave={handleHeroMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.y * -4}deg) rotateY(${tilt.x * 5}deg)`,
            }}
          >
            <div className="squad-showcase-card">
              <div className="showcase-top-bar">
                <div className="showcase-live-indicator">
                  <span className="live-dot"></span>
                  <span>Ecosistema de Células LSOFT</span>
                </div>
                <span className="showcase-badge">{activeHeroSquad.badge}</span>
              </div>

              {/* Niche Tabs */}
              <div className="showcase-tabs" role="tablist" aria-label="Nichos de equipos LSOFT">
                {HERO_SQUADS.map((squad) => (
                  <button
                    key={squad.id}
                    type="button"
                    role="tab"
                    aria-selected={squad.id === activeHeroSquadId}
                    className={`showcase-tab-btn ${
                      squad.id === activeHeroSquadId ? 'active' : ''
                    }`}
                    onClick={() => setActiveHeroSquadId(squad.id)}
                  >
                    {squad.label}
                  </button>
                ))}
              </div>

              {/* Active Squad Content */}
              <div className="showcase-body">
                <h3>{activeHeroSquad.title}</h3>
                <p>{activeHeroSquad.summary}</p>

                <div className="showcase-roles-box">
                  <span className="roles-box-label">Especialistas integrados en esta célula:</span>
                  <ul>
                    {activeHeroSquad.roles.map((role) => (
                      <li key={role}>
                        <CheckCircle2 size={15} />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="showcase-stacks-row">
                  {activeHeroSquad.stacks.map((st) => (
                    <span key={st} className="showcase-stack-pill">
                      {st}
                    </span>
                  ))}
                </div>

                <div className="showcase-kpi-footer">
                  <div className="showcase-kpi-metric">
                    <span className="sk-label">{activeHeroSquad.kpiLabel}</span>
                    <strong className="sk-value">{activeHeroSquad.kpiValue}</strong>
                  </div>

                  <button
                    type="button"
                    className="showcase-use-btn"
                    onClick={() => handleLoadHeroSquadPreset(activeHeroSquad)}
                  >
                    <span>Cotizar célula similar</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PROPUESTA DE VALOR EJECUTIVA (Sección Luminosa Clara)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="teams-value-section">
        <div className="teams-container">
          <div className="teams-section-head centered">
            <span className="section-kicker">Ventaja Estratégica LSOFT</span>
            <h2>Por qué las empresas potencian sus proyectos con nuestros equipos</h2>
            <p>
              Unificamos capacidad técnica multidisciplinaria, velocidad de despliegue y administración
              integral para que su organización ejecute más proyectos con menor riesgo operacional.
            </p>
          </div>

          <div className="value-pillars-grid">
            <article className="value-pillar-card">
              <div className="pillar-icon blue">
                <Users size={22} />
              </div>
              <h3>Cero Fricción de Reclutamiento</h3>
              <p>
                Acceda de inmediato a desarrolladores, arquitectos cloud, DBAs y consultores de seguridad
                evaluados y administrados por LSOFT, evitando meses de búsqueda y rotación.
              </p>
            </article>

            <article className="value-pillar-card">
              <div className="pillar-icon cyan">
                <Zap size={22} />
              </div>
              <h3>Despliegue Rápido &amp; CI/CD</h3>
              <p>
                Trabajamos con estándares modernos de automatización, control de versiones y entrega
                continua para llevar soluciones a producción de forma predecible y segura.
              </p>
            </article>

            <article className="value-pillar-card">
              <div className="pillar-icon emerald">
                <TrendingUp size={22} />
              </div>
              <h3>Escalabilidad Bajo Demanda</h3>
              <p>
                Escale su célula según la etapa de cada iniciativa: sume especialistas en bases de datos,
                legacy o ciberseguridad exactamente cuando el proyecto lo exige.
              </p>
            </article>

            <article className="value-pillar-card">
              <div className="pillar-icon indigo">
                <ShieldCheck size={22} />
              </div>
              <h3>Gobernanza y Respaldo Senior</h3>
              <p>
                Cada servicio cuenta con dirección técnica LSOFT, documentación ordenada, buenas
                prácticas de seguridad y continuidad asegurada tras la puesta en marcha.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CATÁLOGO DE ÁREAS ESPECIALIZADAS (#areas)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="teams-areas-section" id="areas">
        <div className="teams-container">
          <div className="teams-section-head">
            <div>
              <span className="section-kicker">Áreas de Especialización</span>
              <h2>Equipos dedicados para cada frente tecnológico de su empresa</h2>
              <p>
                Seleccione las áreas que su organización necesita fortalecer hoy e inclúyalas directamente
                en su configuración de servicio.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="area-filter-pills" role="group" aria-label="Filtrar áreas por categoría">
              {AREA_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`filter-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="areas-catalog-grid">
            {filteredAreas.map((area) => {
              const Icon = area.icon;
              const isSelected = selectedAreas.includes(area.id);
              return (
                <article
                  key={area.id}
                  className={`area-catalog-card accent-${area.accent} ${
                    isSelected ? 'is-selected' : ''
                  }`}
                >
                  <div className="area-card-top">
                    <span className={`area-icon-box accent-${area.accent}`}>
                      <Icon size={22} />
                    </span>
                    <span className="area-cat-badge">{area.categoryLabel}</span>
                  </div>

                  <h3>{area.title}</h3>
                  <p className="area-desc">{area.description}</p>

                  <ul className="area-deliverables">
                    {area.deliverables.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={15} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="area-tags-row">
                    {area.tags.map((tag) => (
                      <span key={tag} className="area-tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="area-card-footer">
                    <button
                      type="button"
                      className={`area-select-btn ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleToggleArea(area.id)}
                    >
                      {isSelected ? (
                        <>
                          <Check size={15} />
                          <span>Incluida en su cotización</span>
                        </>
                      ) : (
                        <span>+ Incluir en cotización</span>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {selectedAreas.length > 0 && (
            <div className="areas-selection-bar">
              <div className="selection-bar-info">
                <span className="selection-count-badge">{selectedAreas.length}</span>
                <p>
                  <strong>
                    {selectedAreas.length === 1
                      ? '1 área seleccionada'
                      : `${selectedAreas.length} áreas seleccionadas`}
                  </strong>{' '}
                  para conformar su equipo o servicio a la medida.
                </p>
              </div>
              <button
                type="button"
                className="selection-bar-cta"
                onClick={() => scrollToSection('configurador')}
              >
                <span>Configurar equipo y cotizar</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MODALIDADES DE CONTRATACIÓN (#modalidades)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="teams-modalities-section" id="modalidades">
        <div className="teams-container">
          <div className="teams-section-head centered">
            <span className="section-kicker">Opciones de Contratación Flexibles</span>
            <h2>Contrate exactamente la estructura que su proyecto exige</h2>
            <p>
              Desde un especialista puntual hasta una célula multidisciplinaria completa o un proyecto
              llave en mano. Todas nuestras modalidades están diseñadas para maximizar su retorno.
            </p>
          </div>

          <div className="modalities-cards-grid">
            {HIRING_MODELS.map((model) => {
              const Icon = model.icon;
              const isChosen = selectedModality === model.id;
              return (
                <article
                  key={model.id}
                  className={`modality-card ${model.highlighted ? 'featured' : ''} ${
                    isChosen ? 'chosen' : ''
                  }`}
                >
                  <div className="modality-card-head">
                    <span className="modality-icon-wrap">
                      <Icon size={20} />
                    </span>
                    <span className={`modality-badge ${model.highlighted ? 'featured' : ''}`}>
                      {model.badge}
                    </span>
                  </div>

                  <h3>{model.name}</h3>
                  <p className="modality-summary">{model.summary}</p>

                  <div className="modality-meta-grid">
                    <div>
                      <span>Tiempo de inicio</span>
                      <strong>{model.startTime}</strong>
                    </div>
                    <div>
                      <span>Esquema</span>
                      <strong>{model.billing}</strong>
                    </div>
                  </div>

                  <div className="modality-ideal-box">
                    <span>Ideal para:</span>
                    <p>{model.idealFor}</p>
                  </div>

                  <ul className="modality-includes">
                    {model.includes.map((inc) => (
                      <li key={inc}>
                        <Check size={15} />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={`modality-choose-btn ${model.highlighted ? 'featured' : ''}`}
                    onClick={() => handleSelectModalityAndScroll(model.id)}
                  >
                    <span>
                      {isChosen ? 'Modalidad Activa · Configurar' : 'Elegir esta modalidad'}
                    </span>
                    <ArrowRight size={15} />
                  </button>
                </article>
              );
            })}
          </div>

          {/* Comparative Matrix Table */}
          <div className="comparison-table-card">
            <div className="comparison-table-head">
              <h3>Comparativa rápida de modalidades de contratación</h3>
              <p>Evalúe alcance, gobernanza y velocidad de activación para tomar la mejor decisión.</p>
            </div>

            <div className="comparison-table-scroll">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Modalidad</th>
                    <th>Gobernanza Técnica</th>
                    <th>Velocidad de Inicio</th>
                    <th>Escalabilidad</th>
                    <th>Enfoque Presupuestario</th>
                  </tr>
                </thead>
                <tbody>
                  {HIRING_MODELS.map((m) => (
                    <tr
                      key={m.id}
                      className={selectedModality === m.id ? 'active-row' : ''}
                    >
                      <td>
                        <strong>{m.name}</strong>
                      </td>
                      <td>{m.comparison.governance}</td>
                      <td>{m.comparison.speed}</td>
                      <td>{m.comparison.scalability}</td>
                      <td>{m.comparison.budget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ECOSISTEMA TECNOLÓGICO ADMINISTRADO (#stacks)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="teams-stacks-section" id="stacks">
        <div className="teams-container">
          <div className="teams-section-head centered">
            <span className="section-kicker">Ecosistema Tecnológico Administrado</span>
            <h2>Especialistas en múltiples frameworks, lenguajes y plataformas cloud</h2>
            <p>
              Ya sea que su compañía opere sobre .NET, Java, Python, Node.js, React o Angular,
              contamos con especialistas verificados listos para integrarse con estándares corporativos.
            </p>
          </div>

          <div className="stacks-matrix-grid">
            {TECH_STACK_GROUPS.map((group) => (
              <article key={group.title} className="stack-group-card">
                <h3>{group.title}</h3>
                <p>{group.subtitle}</p>
                <div className="stack-badges-wrap">
                  {group.items.map((item) => (
                    <span key={item} className="stack-item-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CONFIGURADOR INTERACTIVO DE EQUIPO Y SERVICIO (#configurador)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="teams-configurator-section" id="configurador">
        <div className="teams-container">
          <div className="teams-section-head centered">
            <span className="section-kicker">Configurador Interactivo de Contratación</span>
            <h2>Configure su equipo multidisciplinario en menos de un minuto</h2>
            <p>
              Combine la modalidad de contratación, las áreas técnicas requeridas y los lenguajes clave
              para obtener una recomendación inmediata y solicitar su cotización formal.
            </p>
          </div>

          <TeamsConfigurator
            selectedModality={selectedModality}
            onSelectModality={setSelectedModality}
            selectedAreas={selectedAreas}
            onToggleArea={handleToggleArea}
            selectedStacks={selectedStacks}
            onToggleStack={handleToggleStack}
            urgency={urgency}
            onChangeUrgency={setUrgency}
            onReset={handleResetConfigurator}
            onApplyToContact={handleApplyConfigToContact}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ONBOARDING RÁPIDO & GARANTÍAS OPERATIVAS
         ═══════════════════════════════════════════════════════════════ */}
      <section className="teams-process-section">
        <div className="teams-container">
          <div className="teams-section-head centered">
            <span className="section-kicker">Activación Sin Fricciones</span>
            <h2>Cómo ponemos en marcha a su equipo especializado</h2>
            <p>Un proceso ejecutivo transparente, desde el diagnóstico inicial hasta las primeras entregas en producción.</p>
          </div>

          <div className="onboarding-steps-grid">
            <article className="onboarding-step-card">
              <span className="step-index">01</span>
              <h3>Sesión de Diagnóstico</h3>
              <p>
                En 20 minutos revisamos su stack actual, cuellos de botella, prioridades del negocio y
                objetivos de plazo.
              </p>
            </article>

            <article className="onboarding-step-card">
              <span className="step-index">02</span>
              <h3>Propuesta de Célula y Alcance</h3>
              <p>
                En 24 a 48 horas hábiles le presentamos la conformación ideal, modalidad recomendada y
                condiciones claras de contratación.
              </p>
            </article>

            <article className="onboarding-step-card">
              <span className="step-index">03</span>
              <h3>Despegue e Integración</h3>
              <p>
                Alineamos accesos, repositorios, seguridad y canales de comunicación para comenzar a
                entregar valor desde la primera semana.
              </p>
            </article>

            <article className="onboarding-step-card">
              <span className="step-index">04</span>
              <h3>Gobernanza y Evolución</h3>
              <p>
                Seguimiento técnico continuo de LSOFT, métricas de avance transparentes y ajuste
                flexible de capacidad según su hoja de ruta.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECCIÓN DE CONVERSIÓN Y CONTACTO (#contacto)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="teams-contact-section" id="contacto">
        <div className="teams-container teams-contact-grid">
          <div className="teams-contact-copy">
            <span className="section-kicker light">Atención Corporativa Directa</span>
            <h2>Conversemos sobre el equipo o servicio que su organización necesita hoy.</h2>
            <p>
              Ya sea para acelerar un desarrollo interno, migrar hacia la nube, actualizar un sistema
              legacy, blindar su ciberseguridad o sumar especialistas por framework, preparamos una
              propuesta concreta a la medida de su empresa.
            </p>

            <div className="contact-trust-list">
              <div>
                <Clock size={18} />
                <span>Respuesta ejecutiva y técnica en menos de 24 horas hábiles</span>
              </div>
              <div>
                <Award size={18} />
                <span>Atención directa con líderes técnicos senior de LSOFT</span>
              </div>
              <div>
                <Lock size={18} />
                <span>Confidencialidad y acuerdos NDA disponibles desde la evaluación</span>
              </div>
            </div>

            <a
              href="https://wa.me/56995377845?text=Estimados%20LSOFT,%20necesitamos%20cotizar%20servicios%20de%20equipos%20multidisciplinarios%20y%20especialistas%20TI%20para%20nuestra%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="teams-whatsapp-cta"
            >
              <MessageSquare size={20} />
              <div>
                <strong>Conversar vía WhatsApp Corporativo</strong>
                <span>Canal directo · +56 9 9537 7845</span>
              </div>
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="teams-contact-form-wrap">
            <form className="teams-contact-form" onSubmit={handleContactSubmit}>
              <div className="form-header-row">
                <h3>Solicitar Propuesta de Equipo o Servicio</h3>
                {configAttached && (
                  <span className="config-attached-badge">
                    <Check size={13} /> Configuración adjunta
                  </span>
                )}
              </div>

              <div className="form-two-cols">
                <div className="t-form-field">
                  <label htmlFor="teams-name">Nombre y Cargo *</label>
                  <input
                    id="teams-name"
                    type="text"
                    required
                    placeholder="Ej. Carolina Méndez · Gerente de TI"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </div>

                <div className="t-form-field">
                  <label htmlFor="teams-company">Empresa</label>
                  <input
                    id="teams-company"
                    type="text"
                    placeholder="Ej. Grupo Empresarial del Sur"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, company: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="form-two-cols">
                <div className="t-form-field">
                  <label htmlFor="teams-email">Correo Corporativo *</label>
                  <input
                    id="teams-email"
                    type="email"
                    required
                    placeholder="cmendez@empresa.cl"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                </div>

                <div className="t-form-field">
                  <label htmlFor="teams-phone">Teléfono</label>
                  <input
                    id="teams-phone"
                    type="tel"
                    placeholder="+56 9 .... ...."
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="t-form-field">
                <label htmlFor="teams-message">
                  Detalle del requerimiento, área o perfiles solicitados *
                </label>
                <textarea
                  id="teams-message"
                  rows={5}
                  required
                  placeholder="Cuéntenos qué iniciativa necesita impulsar, qué tecnologías utiliza o qué modalidad de contratación prefiere evaluar..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                />
              </div>

              <button type="submit" className="teams-submit-btn">
                <span>Enviar Solicitud de Cotización</span>
                <Send size={16} />
              </button>

              {isSubmitted && (
                <div className="teams-form-success">
                  <CheckCircle2 size={18} />
                  <span>
                    Solicitud recibida satisfactoriamente. Un especialista de LSOFT se pondrá en
                    contacto con usted a la brevedad.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Corporate Footer */}
      <footer className="teams-footer">
        <div className="teams-container teams-footer-inner">
          <div className="footer-brand-col">
            <img
              src="/images/lsoft-modern-logo.svg"
              alt="LSOFT Servicios Informáticos"
              width="168"
              height="47"
            />
            <p>
              Más de 18 años entregando equipos multidisciplinarios, software a medida,
              infraestructura cloud, modernización legacy y asesoría tecnológica en Chile.
            </p>
          </div>

          <nav className="footer-nav-col" aria-label="Navegación de pie de página">
            <a
              href="#areas"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('areas');
              }}
            >
              Áreas Especializadas
            </a>
            <a
              href="#modalidades"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('modalidades');
              }}
            >
              Modalidades de Contratación
            </a>
            <a
              href="#stacks"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('stacks');
              }}
            >
              Tecnologías
            </a>
            <a
              href="#configurador"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('configurador');
              }}
            >
              Configurador
            </a>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contacto');
              }}
            >
              Contacto
            </a>
          </nav>
        </div>

        <div className="teams-container teams-footer-bottom">
          <p>
            © {CURRENT_YEAR} LSOFT Servicios Informáticos. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
