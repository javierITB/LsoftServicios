import React, { useState } from 'react';
import { Bot, Send, User, RefreshCw } from 'lucide-react';

const INITIAL_MESSAGES = [
  {
    sender: 'bot',
    text: 'Estimado usuario, soy el Asistente IA de LSOFT conectado en tiempo real al sistema operativo y catálogo central. ¿Qué consulta o gestión requiere realizar hoy?',
    time: 'Ahora',
  },
];

const PRESET_PROMPTS = [
  {
    label: '📦 Consultar stock y despacho',
    prompt: '¿Cuál es la disponibilidad del producto SKU-410 y plazo de entrega a la Región Metropolitana?',
    response: '✅ Consultado en base de datos central: 42 unidades disponibles en bodega principal. Tiempo de despacho estimado: 24 horas hábiles a destino.',
  },
  {
    label: '💼 Generar cotización formal',
    prompt: 'Generar cotización para 15 terminales y remitir al contacto comercial registrado.',
    response: '📄 Cotización #LSOFT-8921 emitida por $450.000 + IVA. Documento consolidado y enviado automáticamente a los canales de contacto del cliente.',
  },
  {
    label: '🔍 Estado de orden de compra',
    prompt: 'Verificar estado de la orden OC-3092 correspondiente a Constructora Sur.',
    response: '🚚 Verificación completada: La orden OC-3092 fue validada y se encuentra en ruta de entrega con móvil asignado (Camión 04). Estado: En tránsito.',
  },
];

export default function AiChatDemo() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (text) => {
    const userText = text || inputVal;
    if (!userText.trim()) return;

    const newMsgs = [...messages, { sender: 'user', text: userText, time: 'Ahora' }];
    setMessages(newMsgs);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const match = PRESET_PROMPTS.find((p) => p.prompt.toLowerCase() === userText.toLowerCase());
      const botResponse = match
        ? match.response
        : `🤖 Gestión procesada por el Agente IA: Información contrastada con los registros operativos y registrada exitosamente. Tiempo humano ahorrado: ~15 minutos.`;

      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: botResponse, time: 'Ahora' },
      ]);
      setIsTyping(false);
    }, 850);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
    setInputVal('');
  };

  return (
    <div className="ai-chat-demo-card">
      <div className="demo-card-topbar">
        <div className="bot-status-indicator">
          <div className="status-avatar">
            <Bot size={18} />
          </div>
          <div>
            <strong>LSOFT AI Assistant • Operaciones ERP</strong>
            <span className="online-badge">● Sincronizado en tiempo real con bases de datos</span>
          </div>
        </div>
        <button className="reset-demo-btn" onClick={handleReset} title="Reiniciar demostración">
          <RefreshCw size={14} />
          <span>Reiniciar</span>
        </button>
      </div>

      <div className="demo-chat-messages">
        {messages.map((m, idx) => (
          <div key={idx} className={`chat-bubble ${m.sender}`}>
            <div className="bubble-avatar">
              {m.sender === 'bot' ? <Bot size={14} /> : <User size={14} />}
            </div>
            <div className="bubble-content">
              <p>{m.text}</p>
              <span className="bubble-time">{m.time}</span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="chat-bubble bot typing">
            <div className="bubble-avatar"><Bot size={14} /></div>
            <div className="typing-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}
      </div>

      <div className="demo-preset-pills">
        <span className="preset-label">Consultas de muestra:</span>
        <div className="pills-scroll">
          {PRESET_PROMPTS.map((p, i) => (
            <button key={i} className="preset-pill" onClick={() => handleSend(p.prompt)}>
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <form
        className="demo-chat-input-bar"
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
      >
        <input
          type="text"
          placeholder="Escriba una consulta de gestión o seleccione un ejemplo superior..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit" className="send-btn" disabled={!inputVal.trim()}>
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
