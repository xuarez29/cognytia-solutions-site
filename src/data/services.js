/**
 * services.js
 * Servicios principales de CognytIA.
 * Editar aquí para agregar/modificar servicios sin tocar el JSX.
 *
 * `figure` elige la ilustración isométrica (ver components/ServiceFigure.jsx).
 * `tagline` es la idea principal; `description` son los párrafos de apoyo.
 * `stack` son etiquetas técnicas secundarias, no el argumento de venta.
 */

export const services = [
  {
    tag: '01',
    figure: 'web',
    title: 'Desarrollo web y aplicaciones',
    tagline: 'Construimos lo que tu negocio necesita.',
    description: [
      'Desde un sitio web hasta una aplicación empresarial a medida. Diseñamos y desarrollamos herramientas digitales que responden a necesidades reales: cotizadores, portales para clientes, plataformas de gestión, tableros de control y nuevas ideas de negocio.',
      'Soluciones diseñadas para funcionar, evolucionar y crecer contigo.',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'Supabase'],
  },
  {
    tag: '02',
    figure: 'ia',
    title: 'Integraciones con IA',
    tagline: 'Inteligencia donde realmente aporta valor.',
    description: [
      'Desarrollamos asistentes, agentes y sistemas inteligentes que aprovechan la información de tu empresa, facilitan el acceso al conocimiento y amplían las capacidades de tu equipo.',
      'Integramos inteligencia artificial en tus herramientas y procesos cuando existe una oportunidad real de generar valor.',
    ],
    stack: ['OpenAI', 'Anthropic', 'LangChain', 'RAG'],
  },
  {
    tag: '03',
    figure: 'auto',
    title: 'Automatización de procesos',
    tagline: 'Menos trabajo manual. Más tiempo.',
    description: [
      'Si tu equipo captura información varias veces, persigue pendientes por WhatsApp o dedica horas a generar reportes, probablemente existen oportunidades de automatización.',
      'Conectamos tus herramientas, simplificamos procesos y automatizamos tareas repetitivas para que puedas concentrarte en hacer crecer tu negocio.',
    ],
    stack: ['Python', 'Zapier', 'n8n', 'Make'],
  },
  {
    tag: '04',
    figure: 'notion',
    title: 'Implementación y consultoría Notion',
    tagline: 'Tu negocio, mejor organizado.',
    description: [
      'Diseñamos e implementamos espacios de trabajo digitales en Notion que conectan proyectos, documentos, clientes, procesos y conocimiento empresarial.',
      'Adaptamos la plataforma a la forma en que trabaja tu empresa, no al revés.',
    ],
    stack: ['Notion', 'Notion AI', 'Automatizaciones'],
    href: '#notion',
    hrefLabel: 'Ver la especialización',
  },
]
