import React, { useState } from 'react';
import { Smartphone, Wifi, Radio, ShieldCheck, RefreshCw, Cpu } from 'lucide-react';

const DEVICES = [
  {
    id: 'terminal',
    name: 'Terminal Biométrico & RFID',
    type: 'Control de Acceso / Asistencia',
    actionLabel: 'Simular Marcación de Personal',
    defaultStatus: 'En espera de lectura física...',
    successStatus: 'Marcación exitosa (ID: EMP-041). Sincronizado en la nube en 140ms. Notificación enviada a RRHH.',
  },
  {
    id: 'pos',
    name: 'Hardware POS & Lector Fiscal',
    type: 'Punto de Venta Integrado',
    actionLabel: 'Simular Transacción en Mostrador',
    defaultStatus: 'Esperando operación en punto físico...',
    successStatus: 'Operación registrada ($34.990). Documento tributario emitido. Stock descontado en almacén central de inmediato.',
  },
  {
    id: 'sensor',
    name: 'Sensores de Planta y Bodega',
    type: 'Telemetría de Variables Críticas',
    actionLabel: 'Simular Reporte de Variables',
    defaultStatus: 'Monitoreando sensores en tiempo real...',
    successStatus: 'Temperatura actual: 3.8°C (Rango óptimo). Registro automático en bitácora de calidad sin intervención manual.',
  },
];

export default function HardwareDemo() {
  const [selectedDevice, setSelectedDevice] = useState(DEVICES[0]);
  const [deviceLogs, setDeviceLogs] = useState({
    terminal: DEVICES[0].defaultStatus,
    pos: DEVICES[1].defaultStatus,
    sensor: DEVICES[2].defaultStatus,
  });
  const [isSyncing, setIsSyncing] = useState(false);

  const triggerAction = (dev) => {
    setIsSyncing(true);
    setTimeout(() => {
      setDeviceLogs((prev) => ({
        ...prev,
        [dev.id]: dev.successStatus,
      }));
      setIsSyncing(false);
    }, 700);
  };

  const resetDevice = (devId) => {
    const original = DEVICES.find((d) => d.id === devId);
    setDeviceLogs((prev) => ({
      ...prev,
      [devId]: original.defaultStatus,
    }));
  };

  return (
    <div className="hardware-demo-card">
      <div className="hardware-card-header">
        <div>
          <h4>Conexión Hardware-Nube: "Operación Física Sincronizada"</h4>
          <p>Conectamos dispositivos físicos directamente a los sistemas de gestión de su empresa, adaptándonos al flujo operacional existente.</p>
        </div>
      </div>

      <div className="device-cards-grid">
        {DEVICES.map((dev) => {
          const isSelected = selectedDevice.id === dev.id;
          const currentLog = deviceLogs[dev.id];
          const hasTriggered = currentLog !== dev.defaultStatus;

          return (
            <div
              key={dev.id}
              className={`device-item-card ${isSelected ? 'selected' : ''} ${hasTriggered ? 'active-event' : ''}`}
              onClick={() => setSelectedDevice(dev)}
            >
              <div className="device-header">
                <div className="device-icon-box">
                  {dev.id === 'terminal' && <Radio size={20} />}
                  {dev.id === 'pos' && <Smartphone size={20} />}
                  {dev.id === 'sensor' && <Wifi size={20} />}
                </div>
                <div>
                  <h6>{dev.name}</h6>
                  <span className="device-category">{dev.type}</span>
                </div>
              </div>

              <div className="device-log-box">
                <div className="status-ping">
                  <span className={`ping-dot ${hasTriggered ? 'green' : 'blue'}`}></span>
                  <span className="log-text">{currentLog}</span>
                </div>
              </div>

              <div className="device-actions">
                <button
                  className="trigger-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerAction(dev);
                  }}
                  disabled={isSyncing}
                >
                  {isSyncing && selectedDevice.id === dev.id ? (
                    <>
                      <Cpu className="spin-icon" size={14} />
                      <span>Sincronizando...</span>
                    </>
                  ) : (
                    <>
                      <Radio size={14} />
                      <span>{dev.actionLabel}</span>
                    </>
                  )}
                </button>
                {hasTriggered && (
                  <button
                    className="reset-icon-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      resetDevice(dev.id);
                    }}
                    title="Restablecer estado"
                  >
                    <RefreshCw size={13} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="hardware-summary-banner">
        <ShieldCheck size={20} className="summary-icon" />
        <p>
          <strong>Continuidad garantizada:</strong> Todo el hardware implementado por LSOFT cuenta con respaldo local (almacenamiento temporal en búfer) y sincronización automática inmediata ante contingencias de conectividad.
        </p>
      </div>
    </div>
  );
}
