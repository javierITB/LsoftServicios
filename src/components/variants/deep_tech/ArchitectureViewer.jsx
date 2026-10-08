import React, { useState } from 'react';
import { Layers, Cpu, Server, Network, ShieldCheck, Database, Zap, Activity } from 'lucide-react';

const LAYERS = [
  {
    id: 'integration',
    name: '01. Integración con Sistemas Existentes',
    icon: Database,
    techStack: 'Conexión a ERPs • APIs REST • Webhooks • SQL & NoSQL',
    throughput: 'Sincronización Bidireccional en Tiempo Real',
    latency: 'Respuesta inmediata sin bloqueos',
    specs: [
      'Se conecta a lo que su empresa ya utiliza (SAP, Softland, Defontana, bases de datos corporativas)',
      'No obliga a cambiar sus plataformas actuales: crea puentes digitales limpios y mantenibles',
      'Validación automática de datos para evitar inconsistencias entre departamentos',
    ],
  },
  {
    id: 'hardware',
    name: '02. Conectividad Hardware & Dispositivos de Terreno',
    icon: Network,
    techStack: 'Terminales Biométricos • Puntos de Venta (POS) • Sensores de Planta',
    throughput: 'Alta concurrencia en sucursales simultáneas',
    latency: 'Transmisión instantánea a la nube',
    specs: [
      'Respaldo local automático: si se corta internet en local o bodega, el dispositivo sigue operando y sincroniza al volver la red',
      'Protocolos estándar y seguros para enlazar torniquetes, lectores de códigos, básculas y sensores',
      'Monitoreo del estado de cada dispositivo en terreno desde un panel centralizado',
    ],
  },
  {
    id: 'ai-engine',
    name: '03. Motor de IA Aplicada & Automatización',
    icon: Cpu,
    techStack: 'Asistentes de IA Privados • Automatización de Procesos • Reglas de Negocio',
    throughput: 'Atención multiusuario 24/7 sin demora',
    latency: 'Procesamiento en segundos',
    specs: [
      'Modelos entrenados con los datos, catálogos y políticas de su empresa bajo estricta confidencialidad',
      'Automatización de tareas repetitivas de validación, consulta y derivación de casos',
      'Adaptable a los procedimientos y cultura operativa que su equipo ya domina',
    ],
  },
  {
    id: 'cloud',
    name: '04. Nube, Alta Carga & Continuidad Operativa',
    icon: Server,
    techStack: 'Arquitectura en Azure / AWS • Balanceo de Carga • Monitoreo 24/7',
    throughput: 'Capacidad para picos de alta demanda',
    latency: 'Disponibilidad 99.99%',
    specs: [
      'Diseñado para soportar miles de consultas y transacciones concurrentes sin caídas de servicio',
      'Copias de seguridad automáticas y planes de recuperación inmediata ante contingencias',
      'Supervisión proactiva de recursos para anticipar y resolver cuellos de botella técnicos',
    ],
  },
];

export default function ArchitectureViewer() {
  const [selectedLayer, setSelectedLayer] = useState(LAYERS[0]);

  return (
    <div className="arch-viewer-card">
      <div className="arch-viewer-header">
        <div>
          <span className="arch-kicker">Arquitectura de Solución Integrable</span>
          <h3>Diseñado para Adaptarse a los Sistemas y Cultura de su Empresa</h3>
          <p>Explore las capas del ecosistema técnico: robusto bajo alta carga y compatible con la operación existente de su organización.</p>
        </div>
        <div className="live-telemetry-badge">
          <Activity size={14} className="pulse-icon" />
          <span>Soporte de Alta Carga • Disponibilidad 99.99%</span>
        </div>
      </div>

      <div className="arch-grid-layout">
        {/* Layer Buttons / Hierarchy */}
        <div className="arch-layers-selector">
          {LAYERS.map((layer) => {
            const Icon = layer.icon;
            const isSelected = selectedLayer.id === layer.id;
            return (
              <button
                key={layer.id}
                className={`arch-layer-btn ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedLayer(layer)}
              >
                <div className="layer-btn-icon">
                  <Icon size={18} />
                </div>
                <div className="layer-btn-info">
                  <strong>{layer.name}</strong>
                  <span>{layer.techStack}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Spec Panel */}
        <div className="arch-detail-panel">
          <div className="detail-panel-top">
            <div className="panel-title-row">
              <h4>{selectedLayer.name}</h4>
              <span className="tech-badge-cyan">{selectedLayer.techStack}</span>
            </div>

            <div className="panel-kpis-grid">
              <div className="kpi-box">
                <span className="kpi-label">Comportamiento Operativo</span>
                <strong className="kpi-val">{selectedLayer.throughput}</strong>
              </div>
              <div className="kpi-box">
                <span className="kpi-label">Desempeño & Estabilidad</span>
                <strong className="kpi-val neon">{selectedLayer.latency}</strong>
              </div>
            </div>
          </div>

          <div className="detail-specs-content">
            <h5>Principios de Integración y Funcionamiento:</h5>
            <ul className="specs-checklist">
              {selectedLayer.specs.map((spec, i) => (
                <li key={i}>
                  <ShieldCheck size={16} className="spec-check" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-bottom-note">
            <code>💡 Principio LSOFT: La tecnología debe adaptarse a la realidad y a los procesos de su empresa, no obligar a la empresa a cambiar traumáticamente su forma de trabajar.</code>
          </div>
        </div>
      </div>
    </div>
  );
}
