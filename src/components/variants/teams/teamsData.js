import {
  Cloud,
  Server,
  Code2,
  Users,
  RefreshCw,
  Database,
  ShieldCheck,
  Zap,
  Layers,
  Briefcase,
  Clock,
  Compass,
  UserCheck,
} from 'lucide-react';

export const HERO_SQUADS = [
  {
    id: 'cloud-cicd',
    label: 'Cloud & CI/CD',
    badge: 'Despliegue Rápido',
    title: 'Célula Cloud, Servidores & Despliegue Continuo',
    summary:
      'Migración ordenada a la nube, automatización de pipelines y administración de infraestructura de alta disponibilidad.',
    roles: [
      'Arquitecto Cloud (AWS / Azure)',
      'Ingeniero DevOps & CI/CD',
      'Especialista en Servidores Linux / Windows',
    ],
    areas: ['cloud-migrations', 'servers-cicd'],
    stacks: ['AWS / Azure', 'DevOps / CI-CD'],
    modality: 'celula-dedicada',
    kpiLabel: 'Reducción en tiempos de despliegue',
    kpiValue: 'Hasta 80% más rápido',
  },
  {
    id: 'legacy-upgrade',
    label: 'Upgrade Legacy',
    badge: 'Modernización Segura',
    title: 'Célula de Modernización & Software Interno',
    summary:
      'Evolución progresiva de sistemas heredados hacia arquitecturas modernas, limpias y escalables sin detener la operación.',
    roles: [
      'Tech Lead de Modernización',
      'Desarrolladores Full-Stack Senior',
      'Especialista en Bases de Datos SQL',
    ],
    areas: ['legacy-upgrade', 'internal-software', 'databases'],
    stacks: ['.NET / C#', 'React / Next.js', 'SQL / DBA'],
    modality: 'llave-en-mano',
    kpiLabel: 'Continuidad operacional durante migración',
    kpiValue: 'Cero detenciones críticas',
  },
  {
    id: 'staff-frameworks',
    label: 'Staff Especialistas',
    badge: 'Integración Ágil',
    title: 'Especialistas Administrados por Framework y Lenguaje',
    summary:
      'Talento técnico senior evaluado y respaldado por LSOFT, integrado directamente a sus proyectos y metodologías internas.',
    roles: [
      'Especialistas Frontend (React / Angular / Next.js)',
      'Especialistas Backend (.NET / Python / Node / Java)',
      'Supervisión y Gobernanza Técnica LSOFT',
    ],
    areas: ['managed-specialists', 'internal-software'],
    stacks: ['React / Next.js', 'Node / NestJS', 'Python'],
    modality: 'staff-augmentation',
    kpiLabel: 'Tiempo promedio de activación',
    kpiValue: '48 a 72 horas hábiles',
  },
  {
    id: 'data-security',
    label: 'Datos & Ciberseguridad',
    badge: 'Blindaje Integral',
    title: 'Célula de Bases de Datos & Asesoría en Ciberseguridad',
    summary:
      'Optimización de rendimiento en bases de datos críticas, endurecimiento de servidores, control de accesos y auditoría preventiva.',
    roles: [
      'Consultor en Ciberseguridad & Hardening',
      'Arquitecto / DBA SQL & NoSQL',
      'Especialista en Identidad y Accesos (IAM)',
    ],
    areas: ['cybersecurity', 'databases'],
    stacks: ['SQL / DBA', 'Ciberseguridad', 'AWS / Azure'],
    modality: 'auditoria-consultoria',
    kpiLabel: 'Visibilidad y protección de activos',
    kpiValue: 'Monitoreo y resguardo 24/7',
  },
];

export const AREA_CATEGORIES = [
  { id: 'all', label: 'Todas las áreas (8)' },
  { id: 'cloud-infra', label: 'Cloud, Servidores & Seguridad' },
  { id: 'engineering', label: 'Desarrollo, Legacy & Especialistas' },
  { id: 'data-integration', label: 'Datos, Integraciones & Automatización' },
];

export const SPECIALTY_AREAS = [
  {
    id: 'cloud-migrations',
    category: 'cloud-infra',
    categoryLabel: 'Cloud & Migraciones',
    title: 'Mundo Cloud & Migraciones a la Nube',
    shortName: 'Cloud & Migraciones',
    icon: Cloud,
    accent: 'cobalt',
    description:
      'Diseñamos, migramos y administramos su infraestructura en AWS, Microsoft Azure o Google Cloud con foco en resiliencia, escalabilidad y optimización de costos.',
    deliverables: [
      'Evaluación y plan de migración desde servidores locales sin interrupciones',
      'Arquitecturas serverless, almacenamiento seguro y alta disponibilidad',
      'Control presupuestario cloud (FinOps) y gestión de identidades (IAM)',
    ],
    tags: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Serverless', 'FinOps'],
    recommendedRole: 'Arquitecto Cloud',
  },
  {
    id: 'servers-cicd',
    category: 'cloud-infra',
    categoryLabel: 'Infraestructura & DevOps',
    title: 'Servidores, Despliegue Rápido & CI/CD',
    shortName: 'Servidores & CI/CD',
    icon: Server,
    accent: 'cyan',
    description:
      'Aceleramos sus puestas en producción mediante pipelines automatizados, contenedores y administración experta de servidores Linux y Windows Server.',
    deliverables: [
      'Pipelines CI/CD automatizados con despliegues rápidos y rollback seguro',
      'Administración de ambientes (Dev, QA, Producción) en Ubuntu y Windows Server',
      'Monitoreo proactivo, alertas tempranas y trazabilidad completa de cambios',
    ],
    tags: ['Azure DevOps', 'GitHub Actions', 'Docker', 'Ubuntu', 'Windows Server'],
    recommendedRole: 'Ingeniero DevOps & CI/CD',
  },
  {
    id: 'internal-software',
    category: 'engineering',
    categoryLabel: 'Ingeniería de Software',
    title: 'Software Interno & Plataformas a la Medida',
    shortName: 'Software Interno',
    icon: Code2,
    accent: 'indigo',
    description:
      'Construimos herramientas internas, portales corporativos y sistemas de gestión alineados exactamente a las reglas operacionales de su organización.',
    deliverables: [
      'Portales internos de operaciones, ventas, aprobaciones y reportería gerencial',
      'Interfaces modernas, rápidas y responsivas para equipos administrativos y terreno',
      'Código limpio, documentado y preparado para evolucionar junto al negocio',
    ],
    tags: ['React', 'Next.js', 'TypeScript', '.NET', 'Node.js'],
    recommendedRole: 'Célula Full-Stack',
  },
  {
    id: 'managed-specialists',
    category: 'engineering',
    categoryLabel: 'Talento Especializado',
    title: 'Administración de Especialistas por Lenguaje y Framework',
    shortName: 'Especialistas por Stack',
    icon: Users,
    accent: 'blue',
    description:
      'Proveemos y administramos especialistas senior en múltiples frameworks y lenguajes para reforzar sus equipos internos con respaldo técnico directo de LSOFT.',
    deliverables: [
      'Asignación ágil de perfiles Frontend, Backend, QA, Cloud o Full-Stack',
      'Continuidad garantizada, seguimiento técnico y cero carga de reclutamiento',
      'Adaptación fluida a sus metodologías, repositorios y ritmos de entrega',
    ],
    tags: ['React', 'Angular', 'C# / .NET', 'Python', 'Java / Spring', 'NestJS'],
    recommendedRole: 'Especialistas Administrados',
  },
  {
    id: 'legacy-upgrade',
    category: 'engineering',
    categoryLabel: 'Modernización',
    title: 'Upgrade de Sistemas Legacy & Modernización',
    shortName: 'Upgrade Legacy',
    icon: RefreshCw,
    accent: 'amber',
    description:
      'Actualizamos plataformas antiguas o código difícil de mantener hacia tecnologías vigentes, eliminando riesgos de obsolescencia sin perder datos ni operación.',
    deliverables: [
      'Auditoría técnica de sistemas heredados y hoja de ruta de modernización gradual',
      'Refactorización modular y actualización de frameworks y librerías críticas',
      'Desacoplamiento por APIs para extender la vida útil mientras migra por fases',
    ],
    tags: ['Modernización .NET', 'Refactorización', 'APIs Puente', 'Migración UI'],
    recommendedRole: 'Especialista Modernización Legacy',
  },
  {
    id: 'databases',
    category: 'data-integration',
    categoryLabel: 'Datos & Rendimiento',
    title: 'Bases de Datos & Arquitectura de Información',
    shortName: 'Bases de Datos',
    icon: Database,
    accent: 'emerald',
    description:
      'Optimizamos, modelamos y resguardamos sus bases de datos relacionales y NoSQL para asegurar velocidad en consultas críticas, integridad y disponibilidad.',
    deliverables: [
      'Tuning de consultas lentas, índices y procedimientos almacenados críticos',
      'Migración de motores, consolidación de datos y esquemas de alta disponibilidad',
      'Estrategias automatizadas de respaldo, recuperación y auditoría de datos',
    ],
    tags: ['SQL Server', 'PostgreSQL', 'MySQL', 'Firestore', 'Tuning SQL'],
    recommendedRole: 'Arquitecto / DBA de Datos',
  },
  {
    id: 'cybersecurity',
    category: 'cloud-infra',
    categoryLabel: 'Seguridad & Resguardo',
    title: 'Asesoría en Ciberseguridad & Hardening',
    shortName: 'Asesoría Ciberseguridad',
    icon: ShieldCheck,
    accent: 'rose',
    description:
      'Protegemos sus aplicaciones, servidores, APIs y accesos corporativos frente a vulnerabilidades, filtraciones y amenazas operacionales.',
    deliverables: [
      'Evaluación de brechas de seguridad en web, APIs, servidores y entornos cloud',
      'Gestión centralizada de secretos, llaves, permisos mínimos e identidad (Key Vault / IAM)',
      'Endurecimiento (hardening), respaldo seguro y protocolos de continuidad operativa',
    ],
    tags: ['Hardening', 'Azure Key Vault', 'AWS IAM', 'Auditoría APIs', 'Zero Trust'],
    recommendedRole: 'Consultor Ciberseguridad',
  },
  {
    id: 'integrations-ai',
    category: 'data-integration',
    categoryLabel: 'Integración & Evolución',
    title: 'Integraciones Empresariales, Automatización & Soporte',
    shortName: 'Integraciones & Soporte',
    icon: Zap,
    accent: 'violet',
    description:
      'Conectamos sus ERPs, plataformas comerciales, hardware y canales digitales, sumando automatización inteligente y soporte evolutivo continuo.',
    deliverables: [
      'Integración bidireccional con ERPs (SAP, Softland, Defontana, Dynamics 365)',
      'Automatización de flujos operativos, webhooks y asistentes con IA corporativa',
      'Soporte evolutivo, mantención preventiva y nuevas funcionalidades continuas',
    ],
    tags: ['REST APIs', 'Dynamics 365', 'Automatización', 'IA Aplicada', 'SLA'],
    recommendedRole: 'Ingeniero de Integraciones',
  },
];

export const HIRING_MODELS = [
  {
    id: 'celula-dedicada',
    name: 'Célula Multidisciplinaria Dedicada',
    badge: 'Más Solicitada',
    highlighted: true,
    icon: Layers,
    startTime: '5 a 10 días hábiles',
    billing: 'Mensual escalable',
    summary:
      'Un equipo completo y coordinado por LSOFT (Arquitectura, Desarrollo, Cloud/DevOps y QA/Seguridad) dedicado a acelerar su hoja de ruta tecnológica.',
    idealFor:
      'Empresas que necesitan avanzar en múltiples frentes simultáneos sin armar ni gestionar un área interna de TI desde cero.',
    includes: [
      'Tech Lead + especialistas según el nicho requerido',
      'Entregas quincenales (sprints) con visibilidad ejecutiva',
      'Capacidad flexible para sumar o ajustar perfiles por etapa',
    ],
    comparison: {
      governance: '100% gestionada por LSOFT',
      scalability: 'Alta (ajuste mensual)',
      speed: '5–10 días hábiles',
      budget: 'Fee mensual predecible',
    },
  },
  {
    id: 'staff-augmentation',
    name: 'Especialistas Administrados (Staff TI)',
    badge: 'Alta Velocidad',
    highlighted: false,
    icon: UserCheck,
    startTime: '48 a 72 horas',
    billing: 'Tarifa mensual por perfil',
    summary:
      'Especialistas senior en el framework o lenguaje exacto que su proyecto demanda, administrados por LSOFT e integrados directamente a su equipo.',
    idealFor:
      'Organizaciones con liderazgo técnico propio que necesitan sumar capacidad experta inmediata sin procesos largos de selección.',
    includes: [
      'Perfiles validados en React, .NET, Python, Java, Cloud o DBA',
      'Respaldo y mentoría técnica continua desde LSOFT',
      'Garantía de continuidad y reemplazo ágil ante contingencias',
    ],
    comparison: {
      governance: 'Compartida con su equipo',
      scalability: 'Inmediata por especialista',
      speed: '48–72 horas',
      budget: 'Por especialista asignado',
    },
  },
  {
    id: 'llave-en-mano',
    name: 'Proyecto Llave en Mano',
    badge: 'Alcance Cerrado',
    highlighted: false,
    icon: Briefcase,
    startTime: 'Tras diagnóstico inicial',
    billing: 'Hitos y presupuesto definido',
    summary:
      'Asumimos la responsabilidad integral de inicio a fin: levantamiento, diseño, desarrollo, pruebas, despliegue y puesta en marcha operativa.',
    idealFor:
      'Software interno a medida, migraciones a la nube, upgrades de sistemas legacy o integraciones con objetivos y plazos acotados.',
    includes: [
      'Presupuesto y cronograma pactados antes de iniciar',
      'Documentación técnica, traspaso y capacitación a su equipo',
      'Garantía de estabilización posterior al lanzamiento',
    ],
    comparison: {
      governance: '100% LSOFT (inicio a fin)',
      scalability: 'Según alcance acordado',
      speed: 'Plan de hitos definido',
      budget: 'Precio fijo por entregables',
    },
  },
  {
    id: 'bolsa-horas',
    name: 'Soporte Evolutivo & Bolsa de Horas',
    badge: 'Continuidad',
    highlighted: false,
    icon: Clock,
    startTime: 'Inmediato',
    billing: 'Paquete mensual flexible',
    summary:
      'Capacidad técnica multidisciplinaria disponible bajo demanda para mejoras continuas, mantención, ajustes CI/CD, optimización SQL y soporte.',
    idealFor:
      'Empresas con plataformas en producción que requieren respaldo ágil y evolutivo sin sostener una célula full-time permanente.',
    includes: [
      'Acceso transversal a especialistas (Web, Backend, BD, Cloud, Seguridad)',
      'Atención priorizada por SLA según criticidad operacional',
      'Reporte mensual detallado de horas consumidas y mejoras logradas',
    ],
    comparison: {
      governance: 'Mesa técnica LSOFT',
      scalability: 'Paquetes ajustables mes a mes',
      speed: 'Inmediato',
      budget: 'Bolsa mensual controlada',
    },
  },
  {
    id: 'auditoria-consultoria',
    name: 'Auditoría, Diagnóstico & Asesoría Senior',
    badge: 'Intervención Focalizada',
    highlighted: false,
    icon: Compass,
    startTime: '24 a 48 horas',
    billing: 'Por evaluación o sprint',
    summary:
      'Intervención experta para diagnosticar vulnerabilidades de ciberseguridad, cuellos de botella en bases de datos, costos cloud o viabilidad legacy.',
    idealFor:
      'Gerencias de TI y Directorios que requieren una segunda opinión experta o un plan de acción técnico antes de invertir.',
    includes: [
      'Informe ejecutivo y técnico con hallazgos priorizados por impacto',
      'Arquitectura recomendada y estimación de esfuerzo realista',
      'Acompañamiento opcional en la ejecución de las mejoras',
    ],
    comparison: {
      governance: 'Consultores Senior LSOFT',
      scalability: 'Focalizada por objetivo',
      speed: '24–48 horas',
      budget: 'Tarifa única por diagnóstico',
    },
  },
];

export const TECH_STACK_GROUPS = [
  {
    title: 'Desarrollo Frontend & Web',
    subtitle: 'Interfaces corporativas rápidas, accesibles y escalables.',
    items: ['React', 'Next.js', 'Angular', 'TypeScript', 'Material UI', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend, APIs & Lenguajes',
    subtitle: 'Servicios robustos para lógica de negocio e integraciones.',
    items: ['C# / .NET', 'Python', 'Node.js', 'NestJS', 'Java / Spring Boot', 'REST APIs', 'Web Services'],
  },
  {
    title: 'Mundo Cloud & Serverless',
    subtitle: 'Infraestructura elástica, migraciones y servicios gestionados.',
    items: ['Microsoft Azure', 'AWS Lambda', 'Step Functions', 'S3 & API Gateway', 'Google Cloud', 'Firebase'],
  },
  {
    title: 'Servidores, DevOps & CI/CD',
    subtitle: 'Despliegue rápido, automatización y control de entornos.',
    items: ['Azure DevOps', 'GitHub Actions', 'Docker', 'CI/CD Pipelines', 'Windows Server', 'Ubuntu Linux'],
  },
  {
    title: 'Bases de Datos & Analítica',
    subtitle: 'Modelamiento, tuning de rendimiento y alta disponibilidad.',
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Firestore', 'Tuning de Consultas', 'Respaldos & Réplicas'],
  },
  {
    title: 'Ciberseguridad & Ecosistema ERP',
    subtitle: 'Resguardo de activos críticos e integración empresarial.',
    items: ['Azure Key Vault', 'AWS IAM', 'Hardening', 'Dynamics 365', 'SharePoint', 'SAP / Softland'],
  },
];

export const PROFILE_CHIPS = [
  'React / Next.js',
  '.NET / C#',
  'Python',
  'Node / NestJS',
  'Java / Spring',
  'AWS / Azure',
  'DevOps / CI-CD',
  'SQL / DBA',
  'Ciberseguridad',
  'Angular',
];

export const URGENCY_OPTIONS = [
  { id: 'inmediata', label: 'Inmediata (esta semana)' },
  { id: 'corto-plazo', label: 'Corto plazo (próximas 2–4 semanas)' },
  { id: 'planificacion', label: 'Planificación trimestral / Licitación' },
];

