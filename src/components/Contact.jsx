import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isToastActive, setIsToastActive] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Por favor completa los campos requeridos.');
      return;
    }

    // Client-side confirmation feedback
    showToast('¡Gracias por escribirnos! Nos pondremos en contacto contigo a la brevedad.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const showToast = (msg) => {
    setStatusMessage(msg);
    setIsToastActive(true);
    setTimeout(() => {
      setIsToastActive(false);
    }, 4500);
  };

  return (
    <section className="contact-band" id="contacto">
      <div className="contact-copy">
        <p className="eyebrow">Contacto</p>
        <h2>Conversemos sobre los requerimientos de su organización.</h2>
        <p>
          Le responderemos a la brevedad para revisar el alcance, prioridades y el mejor camino técnico para su empresa.
        </p>
        <a
          className="whatsapp-link"
          href="https://wa.me/56995377845?text=Hola%20LSOFT,%20necesito%20informacion%20sobre%20sus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/wsp.jpg" alt="" width="64" height="64" />
          Escribir por WhatsApp
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="contact-name">Nombre</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="contact-email">E-mail</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="contact-phone">Teléfono</label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>

        <div className="form-row">
          <label htmlFor="contact-message">Mensaje</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>

        <button className="button button-primary" type="submit">
          Enviar mensaje
        </button>
      </form>

      <div className={`snackbars ${isToastActive ? 'active' : ''}`} id="form-output-global">
        {statusMessage}
      </div>
    </section>
  );
}
