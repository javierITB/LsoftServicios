import React from 'react';
import {
  CodeIcon,
  ServerNetworkIcon,
  CloudIcon,
  FrontendIcon,
  DatabaseIcon,
  SupportIcon,
} from './Icons';

const services = [
  {
    title: 'Software a medida',
    description:
      'Construimos aplicaciones web y sistemas internos alineados a sus procesos, usuarios y reglas de negocio.',
    icon: CodeIcon,
  },
  {
    title: 'Backend e integraciones',
    description:
      'Desarrollamos APIs, servicios, automatizaciones e integraciones entre plataformas para reducir trabajo manual y errores operativos.',
    icon: ServerNetworkIcon,
  },
  {
    title: 'Cloud y DevOps',
    description:
      'Apoyamos despliegues, ambientes, repositorios, pipelines y servicios en Azure para mejorar continuidad y trazabilidad.',
    icon: CloudIcon,
  },
  {
    title: 'Front end moderno',
    description:
      'Implementamos interfaces claras, responsivas y mantenibles con tecnologías actuales como React, TypeScript y MUI.',
    icon: FrontendIcon,
  },
  {
    title: 'Datos y SQL',
    description:
      'Modelamos, consultamos y optimizamos bases de datos para que la información esté disponible, ordenada y preparada para crecer.',
    icon: DatabaseIcon,
  },
  {
    title: 'Soporte evolutivo',
    description:
      'Acompañamos mejoras, mantención, correcciones y nuevas funcionalidades después de la puesta en marcha.',
    icon: SupportIcon,
  },
];

export default function Services() {
  return (
    <section className="section intro" id="servicios">
      <div className="section-heading">
        <p className="eyebrow">Servicios</p>
        <h2>Soluciones para modernizar, integrar y sostener los sistemas de su empresa.</h2>
      </div>
      <div className="service-grid">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <article className="service-card" key={index}>
              <span className="service-icon">
                <IconComponent size={24} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
