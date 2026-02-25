import { Search, LayoutDashboard, Users, Database, LineChart, Sparkles } from 'lucide-react'

/**
 * notion.js
 * Capacidades y beneficios del servicio Notion para empresas.
 */

export const capabilities = [
  {
    icon: Database,
    title: 'Wiki corporativa',
    description:
      'Políticas, manuales, SOPs y documentación crítica centralizada y siempre actualizada.',
  },
  {
    icon: LayoutDashboard,
    title: 'Gestión de proyectos y tareas',
    description:
      'Tableros, timelines, vistas personalizadas y flujos que reflejan tu metodología real.',
  },
  {
    icon: Users,
    title: 'CRM y pipeline de ventas',
    description:
      'Embudos conectados con acciones, clientes y métricas que se mueven con tu negocio.',
  },
  {
    icon: Search,
    title: 'Bases de datos relacionales',
    description:
      'Proyectos, clientes, procesos y OKRs vinculados entre sí. Todo en un solo lugar.',
  },
  {
    icon: LineChart,
    title: 'Dashboards ejecutivos',
    description:
      'Indicadores clave, progreso y prioridades visibles para quien toma decisiones.',
  },
  {
    icon: Sparkles,
    title: 'IA aplicada al trabajo diario',
    description:
      'Búsqueda empresarial instantánea, notas de reuniones automáticas y asistentes de tareas que transforman tu operación digital.',
    highlight: true,
    cta: 'Agenda un diagnóstico gratuito',
  },
]

export const reasons = [
  'Eliminamos la fragmentación de herramientas y documentación.',
  'Aumentamos la velocidad de ejecución y toma de decisiones.',
  'Reducimos el tiempo de búsqueda y handoffs entre equipos.',
  'Generamos una base de conocimiento reutilizable que crece con tu empresa.',
]
