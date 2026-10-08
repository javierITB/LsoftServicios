import React from 'react';
import { Sparkles, DollarSign, Terminal, History, ChevronRight } from 'lucide-react';

export const VARIANTS = [
  {
    id: 'original',
    name: 'Original LSOFT',
    tag: 'Base Clonada',
    desc: 'Clon exacto 1:1 del sitio web actual',
    icon: History,
    color: '#0b65c2',
  },
  {
    id: 'ai-smart',
    name: 'V1: IA & Hardware Inteligente',
    tag: 'Soluciones & Demos',
    desc: 'Chatbots, automatización, hardware y demos interactivas',
    icon: Sparkles,
    color: '#0284c7',
  },
  {
    id: 'minimal-roi',
    name: 'V2: Eficiencia Operativa & ROI',
    tag: 'Estrategia & Retorno',
    desc: 'Menor carga operativa, ahorro de tiempo y rentabilidad empresarial',
    icon: DollarSign,
    color: '#059669',
  },
  {
    id: 'deep-tech',
    name: 'V3: Arquitectura & Sistemas',
    tag: 'Sistemas & Continuidad',
    desc: 'Arquitecturas integrables, alto soporte de carga y monitor en vivo',
    icon: Terminal,
    color: '#8b5cf6',
  },
];

export default function VariantSwitcher({ currentVariant, onSelectVariant }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const activeOption = VARIANTS.find((v) => v.id === currentVariant) || VARIANTS[0];

  return (
    <div className="variant-switcher-container">
      {/* Mini top pill */}
      <div className="variant-switcher-pill" onClick={() => setIsOpen(!isOpen)}>
        <span className="pill-dot" style={{ backgroundColor: activeOption.color }}></span>
        <span className="pill-label">Variante Activa:</span>
        <strong className="pill-name">{activeOption.name}</strong>
        <span className="pill-tag" style={{ color: activeOption.color }}>
          {activeOption.tag}
        </span>
        <span className={`pill-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>

      {/* Expanded Modal / Dropdown Bar */}
      {isOpen && (
        <div className="variant-dropdown-backdrop" onClick={() => setIsOpen(false)}>
          <div className="variant-dropdown-panel" onClick={(e) => e.stopPropagation()}>
            <div className="variant-dropdown-header">
              <div>
                <h3>Selector de Variantes de Modernización</h3>
                <p>Compara el sitio original contra las 3 propuestas estratégicas de valor</p>
              </div>
              <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
            </div>

            <div className="variant-cards-grid">
              {VARIANTS.map((v) => {
                const IconComponent = v.icon;
                const isActive = v.id === currentVariant;
                return (
                  <button
                    key={v.id}
                    className={`variant-card-item ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      onSelectVariant(v.id);
                      setIsOpen(false);
                    }}
                  >
                    <div className="variant-card-icon" style={{ backgroundColor: `${v.color}18`, color: v.color }}>
                      <IconComponent size={22} />
                    </div>
                    <div className="variant-card-info">
                      <div className="variant-card-head">
                        <h4>{v.name}</h4>
                        {isActive && <span className="active-badge">Activo</span>}
                      </div>
                      <span className="variant-card-tag" style={{ color: v.color }}>{v.tag}</span>
                      <p>{v.desc}</p>
                    </div>
                    <ChevronRight size={18} className="card-arrow" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
