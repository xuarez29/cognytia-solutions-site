/**
 * metrics.js
 * Indicadores de impacto mostrados en la sección de métricas.
 *
 * Campos:
 *   prefix  — símbolo antes del número (+, <, etc.) o cadena vacía
 *   value   — número al que animará el contador
 *   suffix  — símbolo después del número (%, x, h, etc.) o cadena vacía
 *   label   — descripción de la métrica
 */

export const metrics = [
  { prefix: '+', value: 25,  suffix: '',     label: 'automatizaciones implementadas en PyMEs'  },
  { prefix: '–', value: 30,  suffix: '%',    label: 'tareas manuales promedio reducidas'        },
  { prefix: '<', value: 45,  suffix: ' días', label: 'tiempo típico de despliegue'               },
  { prefix: '+', value: 120, suffix: ' h',   label: 'ahorradas por proyecto en promedio'       },
]
