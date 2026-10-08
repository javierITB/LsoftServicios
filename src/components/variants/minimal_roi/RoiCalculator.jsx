import React, { useState } from 'react';
import { Clock, DollarSign, ArrowRight } from 'lucide-react';

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(5);
  const [wastedHours, setWastedHours] = useState(2.5);

  const workDaysPerMonth = 22;
  const avgHourlyCostClp = 13500; // Average operational cost per hour in CLP

  const monthlyHoursLost = Math.round(teamSize * wastedHours * workDaysPerMonth);
  const monthlyHoursGained = Math.round(monthlyHoursLost * 0.82); // 82% recovered through automation
  const monthlySavingsClp = Math.round(monthlyHoursGained * avgHourlyCostClp);

  const formattedSavings = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(monthlySavingsClp);

  return (
    <div className="roi-calculator-card">
      <div className="roi-card-header">
        <span className="roi-badge">Evaluación de Retorno Operativo</span>
        <h3>¿Cuánto tiempo productivo pierde hoy su empresa en tareas repetitivas?</h3>
        <p>
          Ajuste los indicadores de su equipo para proyectar el ahorro de tiempo y el valor operativo recuperable mediante la automatización de sus procesos.
        </p>
      </div>

      <div className="roi-calculator-body">
        <div className="roi-controls">
          <div className="control-slider-group">
            <div className="slider-label-row">
              <label>Integrantes del equipo dedicados a tareas operativas y de gestión:</label>
              <strong>{teamSize} colaboradores</strong>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="roi-slider"
            />
            <div className="slider-ticks">
              <span>1</span>
              <span>15</span>
              <span>30+</span>
            </div>
          </div>

          <div className="control-slider-group">
            <div className="slider-label-row">
              <label>Horas diarias estimadas por persona en tareas manuales, cuadraturas y coordinación:</label>
              <strong>{wastedHours} hrs/día</strong>
            </div>
            <input
              type="range"
              min="1"
              max="6"
              step="0.5"
              value={wastedHours}
              onChange={(e) => setWastedHours(Number(e.target.value))}
              className="roi-slider"
            />
            <div className="slider-ticks">
              <span>1 hr</span>
              <span>3.5 hrs</span>
              <span>6 hrs</span>
            </div>
          </div>
        </div>

        <div className="roi-results-display">
          <div className="roi-result-tile highlight-green">
            <div className="tile-icon">
              <Clock size={24} />
            </div>
            <div className="tile-content">
              <span className="tile-label">Tiempo recuperado para su empresa</span>
              <div className="tile-metric">+{monthlyHoursGained} Horas / mes</div>
              <p className="tile-desc">Equivalente a más de {Math.round(monthlyHoursGained / 8)} jornadas laborales completas reintegradas a labores de valor comercial.</p>
            </div>
          </div>

          <div className="roi-result-tile highlight-emerald">
            <div className="tile-icon">
              <DollarSign size={24} />
            </div>
            <div className="tile-content">
              <span className="tile-label">Valor del tiempo optimizado</span>
              <div className="tile-metric">{formattedSavings}</div>
              <p className="tile-desc">Capital operativo mensual que deja de disiparse en ineficiencias y reprocesos internos.</p>
            </div>
          </div>

          <div className="roi-cta-bar">
            <div className="cta-statement">
              <strong>"La verdadera rentabilidad de la tecnología no está en el software, sino en el tiempo estratégico que su empresa recupera cada mes."</strong>
            </div>
            <a
              href={`https://wa.me/56995377845?text=Estimados%20LSOFT,%20calculamos%20que%20nuestro%20equipo%20de%20${teamSize}%20personas%20requiere%20optimizar%20aproximadamente%20${monthlyHoursGained}%20horas%20mensuales.%20Deseamos%20evaluar%20una%20propuesta.`}
              target="_blank"
              rel="noopener noreferrer"
              className="roi-whatsapp-btn"
            >
              <span>Solicitar Análisis Operativo con LSOFT</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
