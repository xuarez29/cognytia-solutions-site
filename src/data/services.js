import { Globe, Brain, Zap } from 'lucide-react'

/**
 * services.js
 * Servicios principales de Cognytia.
 * Editar aquí para agregar/modificar servicios sin tocar el JSX.
 */

export const services = [
  {
    icon: Globe,
    tag: '01',
    title: 'Desarrollo Web',
    description:
      'Sitios y plataformas rápidas, escalables y con diseño que convierte. De landing pages a sistemas complejos.',
    detail: 'React · Next.js · Node.js · Supabase',
  },
  {
    icon: Brain,
    tag: '02',
    title: 'Integraciones con IA',
    description:
      'Conectamos modelos de lenguaje, visión y predicción a tus productos. IA útil, no IA por moda.',
    detail: 'OpenAI · Anthropic · LangChain · RAG',
  },
  {
    icon: Zap,
    tag: '03',
    title: 'Automatización de Procesos',
    description:
      'Identificamos cuellos de botella y los eliminamos con flujos inteligentes. Tu equipo hace lo que importa, el resto lo automatizamos.',
    detail: 'Python · Zapier · n8n · Make',
  },
]
