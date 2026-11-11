import React from 'react';
import {
  SlidersHorizontal,
  Check,
  Users,
  ArrowRight,
  MessageSquare,
  RotateCcw,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import {
  SPECIALTY_AREAS,
  HIRING_MODELS,
  PROFILE_CHIPS,
  URGENCY_OPTIONS,
} from './teamsData';

export default function TeamsConfigurator({
  selectedModality,
  onSelectModality,
  selectedAreas,
  onToggleArea,
  selectedStacks,
  onToggleStack,
  urgency,
  onChangeUrgency,
  onReset,
  onApplyToContact,
}) {
  const activeModality =
    HIRING_MODELS.find((m) => m.id === selectedModality) || HIRING_MODELS[0];

  const activeAreas = SPECIALTY_AREAS.filter((a) => selectedAreas.includes(a.id));
  const activeUrgency =
    URGENCY_OPTIONS.find((u) => u.id === urgency) || URGENCY_OPTIONS[0];

  // Derive recommended multidisciplinary team roles based on selected areas
  const derivedRoles = [];
  if (activeAreas.length > 1 || selectedModality === 'celula-dedicada') {
    derivedRoles.push('Tech Lead & Gobernanza LSOFT');
  }
  activeAreas.forEach((area) => {
    if (!derivedRoles.includes(area.recommendedRole)) {
      derivedRoles.push(area.recommendedRole);
    }
  });
  if (derivedRoles.length === 0) {
    derivedRoles.push('Consultor Técnico Senior (Evaluación Inicial)');
  }

  const areaNamesText =
    activeAreas.length > 0
      ? activeAreas.map((a) => a.shortName).join(', ')
      : 'Por definir en diagnóstico';

  const stacksText =
    selectedStacks.length > 0
      ? selectedStacks.join(', ')
      : 'A recomendar por LSOFT según necesidad';

  const buildSummaryText = () => {
    return [
      `Modalidad de contratación: ${activeModality.name}`,
      `Áreas requeridas: ${areaNamesText}`,
      `Especialistas / Stack: ${stacksText}`,
      `Plazo estimado de inicio: ${activeUrgency.label}`,
    ].join('\n');
  };

  const whatsappUrl = `https://wa.me/56995377845?text=${encodeURIComponent(
    `Estimados LSOFT, deseamos cotizar el siguiente requerimiento:\n\n• Modalidad: ${activeModality.name}\n• Áreas: ${areaNamesText}\n• Tecnologías/Perfiles: ${stacksText}\n• Urgencia: ${activeUrgency.label}`
  )}`;

  return (
    <div className="teams-configurator-shell">
      <div className="configurator-builder-col">
        {/* Paso 1: Modalidad */}
        <div className="config-step-block">
          <div className="config-step-head">
            <span className="step-num-pill">01</span>
            <div>
              <h3>Seleccione su modalidad de contratación</h3>
              <p>Elija cómo prefiere integrar el talento o ejecutar el servicio en su empresa.</p>
            </div>
          </div>

          <div className="config-modality-grid">
            {HIRING_MODELS.map((model) => {
              const isSelected = model.id === selectedModality;
              return (
                <button
                  key={model.id}
                  type="button"
                  className={`config-choice-btn ${isSelected ? 'selected' : ''}`}
                  onClick={() => onSelectModality(model.id)}
                >
                  <div className="choice-top">
                    <strong>{model.name}</strong>
                    <span className="choice-check">
                      {isSelected && <Check size={14} />}
                    </span>
                  </div>
                  <span className="choice-meta">
                    Inicio: {model.startTime} · {model.billing}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Paso 2: Áreas especializadas */}
        <div className="config-step-block">
          <div className="config-step-head">
            <span className="step-num-pill">02</span>
            <div>
              <h3>Indique las áreas técnicas o nichos que necesita</h3>
              <p>Puede combinar múltiples especialidades para conformar una célula multidisciplinaria.</p>
            </div>
          </div>

          <div className="config-areas-grid">
            {SPECIALTY_AREAS.map((area) => {
              const Icon = area.icon;
              const isSelected = selectedAreas.includes(area.id);
              return (
                <button
                  key={area.id}
                  type="button"
                  className={`config-area-pill ${isSelected ? 'selected' : ''}`}
                  onClick={() => onToggleArea(area.id)}
                >
                  <span className="area-pill-icon">
                    <Icon size={16} />
                  </span>
                  <span className="area-pill-name">{area.shortName}</span>
                  <span className="area-pill-status">
                    {isSelected ? <Check size={14} /> : '+'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Paso 3: Tecnologías y urgencia */}
        <div className="config-step-block">
          <div className="config-step-head">
            <span className="step-num-pill">03</span>
            <div>
              <h3>Especifique tecnologías clave y urgencia de inicio</h3>
              <p>Opcional: seleccione los lenguajes, plataformas o plazos prioritarios.</p>
            </div>
          </div>

          <div className="config-chips-wrap">
            {PROFILE_CHIPS.map((chip) => {
              const isSelected = selectedStacks.includes(chip);
              return (
                <button
                  key={chip}
                  type="button"
                  className={`stack-select-chip ${isSelected ? 'selected' : ''}`}
                  onClick={() => onToggleStack(chip)}
                >
                  {isSelected && <Check size={13} />}
                  <span>{chip}</span>
                </button>
              );
            })}
          </div>

          <div className="urgency-selector-row">
            <span className="urgency-label">Horizonte de inicio deseado:</span>
            <div className="urgency-pills">
              {URGENCY_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={`urgency-pill ${urgency === opt.id ? 'selected' : ''}`}
                  onClick={() => onChangeUrgency(opt.id)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Live Summary Card */}
      <aside className="configurator-summary-col">
        <div className="summary-sticky-card">
          <div className="summary-card-header">
            <div className="summary-badge">
              <SlidersHorizontal size={14} />
              <span>Resumen de Configuración</span>
            </div>
            <button
              type="button"
              className="reset-config-btn"
              onClick={onReset}
              title="Restablecer selección"
            >
              <RotateCcw size={14} />
              <span>Limpiar</span>
            </button>
          </div>

          <div className="summary-modality-box">
            <span className="sum-lbl">Modalidad seleccionada</span>
            <h4>{activeModality.name}</h4>
            <div className="sum-meta-row">
              <span>
                <Clock size={13} /> Inicio: {activeModality.startTime}
              </span>
              <span>
                <ShieldCheck size={13} /> Respaldo LSOFT
              </span>
            </div>
          </div>

          <div className="summary-section">
            <span className="sum-lbl">
              Conformación sugerida ({derivedRoles.length}{' '}
              {derivedRoles.length === 1 ? 'rol' : 'roles'})
            </span>
            <ul className="suggested-roles-list">
              {derivedRoles.map((role) => (
                <li key={role}>
                  <Users size={14} />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="summary-section">
            <span className="sum-lbl">
              Áreas incluidas ({activeAreas.length})
            </span>
            {activeAreas.length > 0 ? (
              <div className="summary-tags-wrap">
                {activeAreas.map((a) => (
                  <span key={a.id} className="summary-tag area">
                    {a.shortName}
                  </span>
                ))}
              </div>
            ) : (
              <p className="summary-empty-hint">
                Seleccione una o más áreas técnicas a la izquierda para precisar su requerimiento.
              </p>
            )}
          </div>

          {selectedStacks.length > 0 && (
            <div className="summary-section">
              <span className="sum-lbl">Stacks y perfiles clave</span>
              <div className="summary-tags-wrap">
                {selectedStacks.map((st) => (
                  <span key={st} className="summary-tag stack">
                    {st}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="summary-actions">
            <button
              type="button"
              className="summary-btn-primary"
              onClick={() => onApplyToContact(buildSummaryText())}
            >
              <span>Enviar al Formulario de Cotización</span>
              <ArrowRight size={16} />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="summary-btn-whatsapp"
            >
              <MessageSquare size={16} />
              <span>Cotizar por WhatsApp con este detalle</span>
            </a>
          </div>

          <p className="summary-footnote">
            Evaluación técnica sin costo · Respuesta ejecutiva en menos de 24 horas hábiles.
          </p>
        </div>
      </aside>
    </div>
  );
}

