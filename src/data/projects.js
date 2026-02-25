/**
 * projects.js
 * Casos de éxito mostrados en la sección Proyectos.
 * Para agregar un proyecto, añade un objeto al array siguiendo la misma estructura.
 */

export const projects = [
  {
    id: 1,
    category: 'Desarrollo Web + IA',
    title: 'Cotizador inteligente para empresa industrial',
    description:
      'Empresa de servicios industriales elaboraba cotizaciones complejas en Excel, dependiendo de una sola persona para validar márgenes y condiciones especiales. El proceso tomaba hasta dos días y generaba inconsistencias. Desarrollamos un cotizador web con lógica dinámica de precios que calcula costos, márgenes y variaciones automáticamente, y genera propuestas formales en PDF listas para enviar al cliente.',
    stack: ['Next.js', 'Supabase', 'OpenAI', 'PDF'],
    metric: '2 días → 30 min',
  },
  {
    id: 2,
    category: 'SaaS · IA aplicada a operaciones',
    title: 'Predicción de demanda para distribuidora regional',
    description:
      'Distribuidora con varias sucursales en el Bajío enfrentaba capital detenido en inventario lento y quiebres en productos de alta rotación. Implementamos un modelo de predicción de demanda basado en históricos de venta y estacionalidad, integrado a un dashboard operativo que facilita decisiones de compra más precisas.',
    stack: ['React', 'Node.js', 'OpenAI', 'PostgreSQL'],
    metric: '–28% sobreinventario',
  },
  {
    id: 3,
    category: 'Automatización comercial',
    title: 'Embudo inteligente para consultor independiente',
    description:
      'Consultor de negocios generaba prospectos por redes sociales, pero el seguimiento era manual e inconsistente. Diseñamos un sistema de calificación automática de prospectos y secuencias personalizadas de seguimiento vía WhatsApp y correo, priorizando contactos con mayor intención de compra.',
    stack: ['n8n', 'WhatsApp API', 'GPT-4', 'Airtable'],
    metric: '+55% tasa de cierre',
  },
  {
    id: 4,
    category: 'IA aplicada a servicios profesionales',
    title: 'Generador automático de reportes financieros',
    description:
      'Consultor fiscal invertía varias horas al mes elaborando reportes personalizados para cada cliente. Desarrollamos una herramienta que procesa información financiera, identifica puntos relevantes y genera reportes estructurados con análisis y recomendaciones en minutos.',
    stack: ['Python', 'OpenAI', 'Pandas', 'PDF'],
    metric: '8 horas → 45 min',
  },
]
