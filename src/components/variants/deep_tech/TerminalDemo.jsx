import React, { useState } from 'react';
import { Terminal, Play, RefreshCw, Copy, Check } from 'lucide-react';

const PRESET_COMMANDS = [
  {
    cmd: 'lsoft status --sistemas',
    label: 'Estado de Integración con Sistemas',
    output: `[LSOFT Diagnóstico de Integración]
✔ Conexión con ERP / Base de Datos: Activa y sincronizada en tiempo real
✔ Canales Digitales y Webhooks: Operando con respuesta promedio < 45ms
✔ Motor de Automatización: Sin tareas pendientes en cola, 0 errores de validación
✔ Seguridad y Cifrado: Canales protegidos con certificados TLS actualizados
Resultado: SISTEMA EN CONDICIONES ÓPTIMAS (Continuidad garantizada)`,
  },
  {
    cmd: 'lsoft hardware --test-dispositivos',
    label: 'Prueba de Dispositivos de Terreno',
    output: `[LSOFT Conectividad Hardware]
Verificando dispositivos de sucursales y bodegas:
  ├── Terminal Biométrico / Acceso (Sucursal 1): En línea [Respaldo local OK]
  ├── Puntos de Venta POS (Cajas 1 a 6): Sincronizados con inventario central
  └── Sensores de Planta y Bodega: Transmitiendo variables con 0 paquetes perdidos
Resultado: 100% de dispositivos comunicando correctamente`,
  },
  {
    cmd: 'lsoft carga --simular-pico',
    label: 'Prueba de Soporte de Alta Carga',
    output: `[LSOFT Test de Alta Concurrencia]
Simulando 2.500 solicitudes operativas simultáneas:
  ├── Tiempo promedio de respuesta: 68 ms
  ├── Tasa de transacciones exitosas: 100%
  ├── Consumo de recursos en servidor: 28% de CPU / 34% de memoria
Resultado: ARQUITECTURA PREPARADA PARA PICOS DE DEMANDA SIN DEGRADACIÓN`,
  },
];

export default function TerminalDemo() {
  const [terminalHistory, setTerminalHistory] = useState([
    {
      type: 'system',
      text: 'LSOFT Monitor de Rendimiento y Sistemas v4.2\nSeleccione o escriba un comando para verificar el estado de los componentes.',
    },
    {
      type: 'cmd',
      text: PRESET_COMMANDS[0].cmd,
    },
    {
      type: 'output',
      text: PRESET_COMMANDS[0].output,
    },
  ]);

  const [inputCmd, setInputCmd] = useState('');
  const [copied, setCopied] = useState(false);

  const executeCommand = (cmdStr) => {
    const command = cmdStr || inputCmd;
    if (!command.trim()) return;

    const matched = PRESET_COMMANDS.find(
      (p) => p.cmd.toLowerCase() === command.toLowerCase()
    );

    const outputText = matched
      ? matched.output
      : `Comando no reconocido: "${command}". Comandos de prueba disponibles:\n- lsoft status --sistemas\n- lsoft hardware --test-dispositivos\n- lsoft carga --simular-pico`;

    setTerminalHistory((prev) => [
      ...prev,
      { type: 'cmd', text: command },
      { type: 'output', text: outputText },
    ]);

    setInputCmd('');
  };

  const handleClear = () => {
    setTerminalHistory([
      {
        type: 'system',
        text: 'Consola de diagnóstico reiniciada. Lista para nuevas verificaciones.',
      },
    ]);
  };

  const handleCopy = () => {
    const text = terminalHistory.map((h) => h.text).join('\n\n');
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="terminal-demo-card">
      <div className="terminal-topbar">
        <div className="window-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-title">
          <Terminal size={14} />
          <span>lsoft@sistemas-operativos:~$ monitor-en-vivo</span>
        </div>
        <div className="terminal-actions">
          <button className="term-btn" onClick={handleCopy} title="Copiar reporte">
            {copied ? <Check size={13} /> : <Copy size={13} />}
          </button>
          <button className="term-btn" onClick={handleClear} title="Limpiar pantalla">
            <RefreshCw size={13} />
          </button>
        </div>
      </div>

      <div className="terminal-content">
        {terminalHistory.map((item, index) => {
          if (item.type === 'system') {
            return (
              <div key={index} className="term-line system">
                <pre>{item.text}</pre>
              </div>
            );
          }
          if (item.type === 'cmd') {
            return (
              <div key={index} className="term-line cmd">
                <span className="prompt">admin@lsoft:~$</span>
                <span className="command-text">{item.text}</span>
              </div>
            );
          }
          return (
            <div key={index} className="term-line output">
              <pre>{item.text}</pre>
            </div>
          );
        })}
      </div>

      <div className="terminal-presets-bar">
        <span className="preset-title">Ejecutar prueba de diagnóstico:</span>
        <div className="preset-buttons">
          {PRESET_COMMANDS.map((p, idx) => (
            <button
              key={idx}
              className="term-preset-pill"
              onClick={() => executeCommand(p.cmd)}
            >
              <Play size={11} />
              <span>{p.label}</span>
            </button>
          ))}
        </div>
      </div>

      <form
        className="terminal-input-row"
        onSubmit={(e) => {
          e.preventDefault();
          executeCommand();
        }}
      >
        <span className="input-prompt">admin@lsoft:~$</span>
        <input
          type="text"
          value={inputCmd}
          onChange={(e) => setInputCmd(e.target.value)}
          placeholder="Escriba un comando o seleccione una opción superior..."
          spellCheck={false}
        />
      </form>
    </div>
  );
}
