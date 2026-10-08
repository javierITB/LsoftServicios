import React from 'react';
import {
  MicrosoftIcon,
  AwsIcon,
  GoogleIcon,
  CodeBracesIcon,
  ServerLayersIcon,
  SecurityServerIcon,
} from './Icons';

const techGroups = [
  {
    title: 'Microsoft 365 y negocio',
    description: 'Automatización, colaboración e integración sobre plataformas Microsoft.',
    icon: MicrosoftIcon,
    items: [
      'SharePoint',
      'Dynamics 365 Business Central',
      'Azure',
      'Azure DevOps',
      'Azure Key Vault',
    ],
  },
  {
    title: 'AWS serverless',
    description: 'Arquitecturas cloud orientadas a procesos, eventos e integración.',
    icon: AwsIcon,
    items: ['Lambda', 'Step Functions', 'S3', 'IAM', 'API Gateway'],
  },
  {
    title: 'Google y Firebase',
    description: 'Soluciones ágiles para aplicaciones, datos, autenticación y funciones cloud.',
    icon: GoogleIcon,
    items: ['Firebase', 'Cloud Functions', 'Firestore', 'Authentication', 'Hosting'],
  },
  {
    title: 'Desarrollo web',
    description: 'Interfaces modernas, mantenibles y preparadas para crecer.',
    icon: CodeBracesIcon,
    items: [
      'React',
      'Angular',
      'Next JS',
      'TypeScript',
      'Material UI',
      'Tailwind CSS',
      'React Router',
      'Bootstrap',
    ],
  },
  {
    title: 'Backend e integraciones',
    description: 'Servicios robustos para conectar sistemas, datos y flujos operacionales.',
    icon: ServerLayersIcon,
    items: [
      'C#',
      '.NET',
      'Python',
      'Node',
      'Nest JS',
      'Java / Spring Boot',
      'REST APIs',
      'Web Services',
      'SQL',
    ],
  },
  {
    title: 'Infraestructura y seguridad',
    description: 'Ambientes, permisos y despliegues con foco en continuidad y control.',
    icon: SecurityServerIcon,
    items: [
      'Windows Server',
      'Ubuntu',
      'DevOps',
      'Identidad y accesos',
      'Respaldo y monitoreo',
    ],
  },
];

export default function Technologies() {
  return (
    <section className="section tech-section" id="tecnologias">
      <div className="section-heading">
        <p className="eyebrow">Tecnologías</p>
        <h2>Expertise tecnológico para soluciones empresariales modernas.</h2>
      </div>

      <div className="tech-grid">
        {techGroups.map((group, index) => {
          const IconComp = group.icon;
          return (
            <article className="tech-card" key={index}>
              <span className="tech-icon">
                <IconComp size={26} />
              </span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul>
                {group.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
