import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description:
      'Levantamos objetivos, procesos, restricciones y prioridades antes de proponer una solución.',
  },
  {
    number: '02',
    title: 'Diseno y desarrollo',
    description:
      'Construimos con entregas controladas, validación continua y foco en la mantenibilidad.',
  },
  {
    number: '03',
    title: 'Puesta en marcha',
    description:
      'Apoyamos pruebas, ajustes, despliegue y estabilización para una adopción ordenada.',
  },
];

export default function Experience() {
  return (
    <section className="section split" id="experiencia">
      <div className="split-copy">
        <p className="eyebrow">Experiencia</p>
        <h2>Más de 18 años entregando soluciones informáticas a medida.</h2>
        <p>
          LSOFT Servicios Informáticos combina experiencia técnica y cercanía operacional para transformar necesidades concretas en sistemas funcionales, escalables y fáciles de mantener.
        </p>
        <p>
          Trabajamos con empresas que necesitan desarrollar nuevas plataformas, modernizar aplicaciones existentes, integrar sistemas o fortalecer su infraestructura de desarrollo.
        </p>
      </div>

      <div className="process-list" aria-label="Forma de trabajo">
        {steps.map((step) => (
          <article key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
