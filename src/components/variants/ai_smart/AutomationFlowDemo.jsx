import React, { useState } from 'react';
import { Play, Clock, Zap, Check, Cpu } from 'lucide-react';

const STEPS = [
  {
    title: '1. Ingesta Automática',
    desc: 'Ingreso centralizado desde canales de comunicación, correos o plataformas web.',
    badge: 'Disparador Inmediato',
  },
  {
    title: '2. Procesamiento con IA',
    desc: 'Lectura semántica de datos, extracción estructurada y clasificación de prioridades.',
    badge: 'Precisión Operativa',
  },
  {
    title: '3. Validación en Sistemas Centrales',
    desc: 'Cruce inmediato contra reglas de negocio, base de datos y ERP corporativo.',
    badge: 'Cero Error Humano',
  },
  {
    title: '4. Ejecución y Notificación',
    desc: 'Registro formal y notificación automática a los responsables pertinentes.',
    badge: 'Proceso Concluido',
  },
];

export default function AutomationFlowDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const startSimulation = () => {
    setIsRunning(true);
    setIsDone(false);
    setActiveStep(1);

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < 4) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsRunning(false);
          setIsDone(true);
          return 4;
        }
      });
    }, 1000);
  };

  return (
    <div className="automation-flow-card">
      <div className="flow-card-header">
        <div>
          <h4>Flujo Automatizado: "Gestión Operativa de Extremo a Extremo"</h4>
          <p>Observe cómo una tarea administrativa repetitiva se resuelve en segundos sin recargar a su personal.</p>
        </div>
        <button
          className="run-flow-btn"
          onClick={startSimulation}
          disabled={isRunning}
        >
          {isRunning ? (
            <>
              <Cpu className="spin-icon" size={16} />
              <span>Ejecutando Flujo con IA...</span>
            </>
          ) : (
            <>
              <Play size={16} />
              <span>Simular Flujo en Vivo</span>
            </>
          )}
        </button>
      </div>

      <div className="flow-steps-pipeline">
        {STEPS.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = activeStep > stepNumber || isDone;
          const isCurrent = activeStep === stepNumber && isRunning;

          return (
            <div
              key={index}
              className={`pipeline-step-item ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}
            >
              <div className="step-icon-wrapper">
                {isCompleted ? (
                  <Check size={18} />
                ) : (
                  <span>{stepNumber}</span>
                )}
              </div>
              <div className="step-body">
                <span className="step-pill">{step.badge}</span>
                <h5>{step.title}</h5>
                <p>{step.desc}</p>
              </div>
              {index < STEPS.length - 1 && (
                <div className="pipeline-connector">
                  <div
                    className="connector-fill"
                    style={{
                      width: isCompleted ? '100%' : isCurrent ? '50%' : '0%',
                    }}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flow-metrics-footer">
        <div className="metric-box">
          <Clock size={18} className="metric-icon" />
          <div>
            <strong>Tiempo de Gestión Manual</strong>
            <span>35 a 45 minutos por evento</span>
          </div>
        </div>
        <div className="metric-arrow">➔</div>
        <div className="metric-box highlight">
          <Zap size={18} className="metric-icon" />
          <div>
            <strong>Con Automatización LSOFT</strong>
            <span>3.8 segundos sin errores</span>
          </div>
        </div>
        <div className="savings-badge">
          ✅ <strong>Hasta 85% de tiempo operativo recuperado</strong> para su organización
        </div>
      </div>
    </div>
  );
}
