/**
 * projects.js
 * Casos mostrados en la sección Proyectos.
 * Para agregar un proyecto, añade un objeto al arreglo con la misma estructura.
 *
 *   challenge — la situación de partida
 *   solution  — lo que construimos
 *   flow      — pasos del flujo, en orden (se dibujan como diagrama)
 *   metric    — resultado principal
 */

export const projects = [
  {
    id: 1,
    category: 'Desarrollo web + IA',
    title: 'Cotizador inteligente para empresa industrial',
    challenge:
      'Una empresa de servicios industriales elaboraba cotizaciones complejas en Excel y dependía de una sola persona para validar márgenes y condiciones especiales. El proceso tomaba hasta dos días y generaba inconsistencias.',
    solution:
      'Desarrollamos un cotizador web con lógica dinámica de precios que calcula costos, márgenes y variaciones automáticamente, y genera propuestas formales en PDF listas para enviar al cliente.',
    flow: ['Solicitud de cotización', 'Lógica dinámica de precios', 'Costos, márgenes y variaciones', 'Propuesta formal en PDF'],
    stack: ['Next.js', 'Supabase', 'OpenAI', 'PDF'],
    metric: '2 días → 30 min',
    metricLabel: 'tiempo para cotizar',
  },
  {
    id: 2,
    category: 'SaaS · IA aplicada a operaciones',
    title: 'Predicción de demanda para distribuidora regional',
    challenge:
      'Una distribuidora con varias sucursales en el Bajío enfrentaba capital detenido en inventario lento y quiebres en productos de alta rotación.',
    solution:
      'Implementamos un modelo de predicción de demanda basado en históricos de venta y estacionalidad, integrado a un dashboard operativo que facilita decisiones de compra más precisas.',
    flow: ['Históricos de venta y estacionalidad', 'Modelo de predicción de demanda', 'Dashboard operativo', 'Decisiones de compra más precisas'],
    stack: ['React', 'Node.js', 'OpenAI', 'PostgreSQL'],
    metric: '–28%',
    metricLabel: 'sobreinventario',
  },
  {
    id: 3,
    category: 'Automatización comercial',
    title: 'Embudo inteligente para consultor independiente',
    challenge:
      'Un consultor de negocios generaba prospectos por redes sociales, pero el seguimiento era manual e inconsistente.',
    solution:
      'Diseñamos un sistema de calificación automática de prospectos y secuencias personalizadas de seguimiento vía WhatsApp y correo, priorizando contactos con mayor intención de compra.',
    flow: ['Prospectos de redes sociales', 'Calificación automática', 'Seguimiento por WhatsApp y correo', 'Contactos con mayor intención'],
    stack: ['n8n', 'WhatsApp API', 'GPT-4', 'Airtable'],
    metric: '+55%',
    metricLabel: 'tasa de cierre',
  },
  {
    id: 4,
    category: 'IA aplicada a servicios profesionales',
    title: 'Generador automático de reportes financieros',
    challenge:
      'Un consultor fiscal invertía varias horas al mes elaborando reportes personalizados para cada cliente.',
    solution:
      'Desarrollamos una herramienta que procesa información financiera, identifica puntos relevantes y genera reportes estructurados con análisis y recomendaciones en minutos.',
    flow: ['Información financiera', 'Identificación de puntos relevantes', 'Análisis y recomendaciones', 'Reporte estructurado'],
    stack: ['Python', 'OpenAI', 'Pandas', 'PDF'],
    metric: '8 horas → 45 min',
    metricLabel: 'tiempo por reporte',
  },
]
