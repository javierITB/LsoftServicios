import React, { useState, useRef } from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, Zap, RotateCcw, TrendingUp } from 'lucide-react';
import { useScrollStory } from '../../../hooks/useScrollStory';

export default function BottleneckConduit() {
  const containerRef = useRef(null);
  const { scrollProgress } = useScrollStory(containerRef, { thresholdStart: 0, thresholdEnd: 450 });
  // 0 = Atascado / Cuello de botella severo; 1 = Autopista de valor 100% dilatada (scroll driven)
  const progress = Math.min(1, Math.max(0, (scrollProgress - 0.1) * 1.8));
  const isResolved = progress >= 0.55;

  // Conduit neck geometry interpolation:
  // Top boundary at neck: from y=135 (narrow) down to y=70 (wide open)
  // Bottom boundary at neck: from y=185 (narrow) up to y=250 (wide open)
  const neckTopY = 135 - progress * 65;
  const neckBottomY = 185 + progress * 65;
  const neckWidth = Math.round(neckBottomY - neckTopY);

  // Dynamic throughput calculation
  const throughput = Math.round(12 + progress * 1428); // 12 -> 1440 ops/día
  const delayHours = Math.max(0, (48 * (1 - progress)).toFixed(1)); // 48h -> 0h

  // SVG paths for the conduit walls
  const topWallD = `M 40,60 C 180,60 240,${neckTopY} 350,${neckTopY} C 460,${neckTopY} 520,60 660,60`;
  const bottomWallD = `M 40,260 C 180,260 240,${neckBottomY} 350,${neckBottomY} C 460,${neckBottomY} 520,260 660,260`;

  return (
    <div className="conduit-interactive-wrapper" ref={containerRef}>
      {/* Header Controller Bar */}
      <div className="conduit-controller-bar">
        <div className="conduit-status-badge">
          <span className={`conduit-status-indicator ${isResolved ? 'resolved' : 'congested'}`}></span>
          <span className="conduit-status-heading">
            {isResolved
              ? 'OPERACIÓN OPTIMIZADA: AUTOPISTA DE ALTO FLUJO'
              : 'ESTADO INICIAL: CUELLO DE BOTELLA OPERATIVO'}
          </span>
        </div>

        <div className="conduit-scroll-indicator">
          <div className="conduit-bar-track">
            <div
              className="conduit-bar-fill"
              style={{ width: `${Math.min(100, progress * 100)}%` }}
            ></div>
          </div>
          <span className="conduit-scroll-hint">
            {progress < 0.9 ? '⇣ Scrollee para abrir el canal' : '✔ Flujo Desatascado (+120x)'}
          </span>
        </div>
      </div>

      {/* SVG Fluid Conduit Simulation */}
      <div className="conduit-svg-container">
        <svg
          className="conduit-svg"
          viewBox="0 0 700 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="pipeFillGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={isResolved ? '#059669' : '#dc2626'} stopOpacity="0.08" />
              <stop offset="50%" stopColor={isResolved ? '#10b981' : '#f59e0b'} stopOpacity="0.14" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="pipeBorderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={isResolved ? '#10b981' : '#ef4444'} stopOpacity="0.8" />
              <stop offset="50%" stopColor={isResolved ? '#34d399' : '#f59e0b'} stopOpacity="0.95" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
            </linearGradient>

            <filter id="conduitGlow">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Conduit Pipe Body */}
          <path
            d={`${topWallD} L 660,260 ${bottomWallD.replace('M 40,260', 'L 40,260')} Z`}
            fill="url(#pipeFillGrad)"
            className="conduit-fill-path"
          />

          {/* Upper and Lower Pipe Walls */}
          <path
            d={topWallD}
            fill="none"
            stroke="url(#pipeBorderGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d={bottomWallD}
            fill="none"
            stroke="url(#pipeBorderGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Guide grid lines */}
          <line x1="350" y1="30" x2="350" y2="290" stroke="rgba(100,116,139,0.18)" strokeDasharray="3 4" />
          <line x1="40" y1="160" x2="660" y2="160" stroke="rgba(100,116,139,0.12)" strokeDasharray="2 4" />

          {/* Upstream Packets (Left: x 60 to 260) */}
          {/* If progress is low: packets pile up in a congested red cluster */}
          {!isResolved ? (
            <g className="congested-cluster">
              {/* Traffic jam pulses */}
              <circle cx="210" cy="140" r="14" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" filter="url(#conduitGlow)" />
              <text x="210" y="144" fill="#b91c1c" fontSize="11" fontWeight="800" textAnchor="middle">!</text>

              <circle cx="250" cy="160" r="13" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" filter="url(#conduitGlow)" />
              <text x="250" y="164" fill="#b91c1c" fontSize="11" fontWeight="800" textAnchor="middle">!</text>

              <circle cx="280" cy="155" r="11" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="280" y="159" fill="#b45309" fontSize="9" fontWeight="700" textAnchor="middle">Wait</text>

              <circle cx="160" cy="120" r="10" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" />
              <circle cx="130" cy="175" r="11" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
              <circle cx="180" cy="190" r="9" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" />
              <circle cx="100" cy="150" r="9" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" />
              <circle cx="70" cy="130" r="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" />

              {/* Red bottleneck choke label */}
              <rect x="290" y="90" width="120" height="24" rx="12" fill="#991b1b" opacity="0.9" />
              <text x="350" y="106" fill="#ffffff" fontSize="10.5" fontWeight="800" textAnchor="middle">
                CUELLO: {neckWidth}px
              </text>
            </g>
          ) : (
            <g className="laminar-stream-group">
              {/* Laminar high velocity streamlines */}
              {[95, 125, 160, 195, 225].map((yPos, i) => (
                <path
                  key={i}
                  d={`M 50,${yPos} C 200,${yPos} 350,${yPos} 650,${yPos}`}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeOpacity="0.45"
                  strokeDasharray="14 10"
                  className="laminar-line"
                  style={{ animationDuration: `${1.2 - i * 0.15}s` }}
                />
              ))}

              {/* Glowing emerald packets gliding through */}
              {[
                { cx: 120, cy: 125, r: 8, label: 'ERP' },
                { cx: 230, cy: 160, r: 9, label: 'Cotiz.' },
                { cx: 350, cy: 125, r: 8.5, label: 'Auto' },
                { cx: 470, cy: 195, r: 9, label: 'Stock' },
                { cx: 580, cy: 160, r: 8, label: 'Fact.' },
              ].map((pkt, idx) => (
                <g key={idx}>
                  <circle
                    cx={pkt.cx}
                    cy={pkt.cy}
                    r={pkt.r}
                    fill="#059669"
                    stroke="#a7f3d0"
                    strokeWidth="2"
                    filter="url(#conduitGlow)"
                  />
                  <text
                    x={pkt.cx}
                    y={pkt.cy + 3.5}
                    fill="#ffffff"
                    fontSize="8"
                    fontWeight="800"
                    textAnchor="middle"
                  >
                    {pkt.label}
                  </text>
                </g>
              ))}

              {/* Dilated Highway Label */}
              <rect x="280" y="32" width="140" height="26" rx="13" fill="#047857" opacity="0.95" />
              <text x="350" y="49" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">
                CANAL LIBRE: {neckWidth}px
              </text>
            </g>
          )}

          {/* Left / Right Zone Labels */}
          <text x="80" y="295" fill="#64748b" fontSize="11.5" fontWeight="700">
            ENTRADA: Requerimientos
          </text>
          <text x="620" y="295" fill="#059669" fontSize="11.5" fontWeight="800" textAnchor="end">
            SALIDA: Entregas y Cierres
          </text>
        </svg>
      </div>

      {/* Dynamic Telemetry KPI Bar */}
      <div className="conduit-kpi-grid">
        <div className={`kpi-metric-box ${isResolved ? 'box-emerald' : 'box-crimson'}`}>
          <span className="kpi-tag">Capacidad de Procesamiento</span>
          <span className="kpi-value">{throughput.toLocaleString('es-CL')} ops/día</span>
          <span className="kpi-sub">
            {isResolved ? 'Velocidad de respuesta 120x superior' : 'Estancamiento y cola de espera acumulada'}
          </span>
        </div>

        <div className={`kpi-metric-box ${isResolved ? 'box-emerald' : 'box-crimson'}`}>
          <span className="kpi-tag">Demora en Cuello de Botella</span>
          <span className="kpi-value">{delayHours} horas</span>
          <span className="kpi-sub">
            {isResolved ? 'Resolución en tiempo real sin pausas' : 'Retrasos en cotizaciones y conciliaciones'}
          </span>
        </div>

        <div className="kpi-metric-box box-neutral">
          <span className="kpi-tag">Apertura del Flujo</span>
          <span className="kpi-value">{neckWidth} px de paso</span>
          <span className="kpi-sub">
            {isResolved ? 'Flujo laminar sin fricción de equipo' : 'Estrangulamiento por tareas manuales'}
          </span>
        </div>
      </div>
    </div>
  );
}
