/**
 * logoGeometry.js
 * Geometría original del isotipo de CognytIA (viewBox 0 0 1900 2010).
 * La comparten la animación del hero (LogoAnimation) y la versión
 * estática (LogoMark). No modificar: es el trazo real de la marca.
 */

export const C_PATH =
  'M1780 405 C1600 180 1350 80 1060 82 C560 80 112 470 112 970 C112 1500 520 1880 1060 1880 C1380 1880 1620 1730 1780 1540 L1490 1260 C1380 1390 1250 1470 1080 1470 C800 1470 602 1260 602 975 C602 680 800 488 1080 488 C1250 488 1380 580 1490 690 Z'

export const LINES = [
  'M740 145 C1250 128 1500 300 1638 573',
  'M612 200 C450 350 405 500 413 643',
  'M413 643 C600 420 820 350 1078 465',
  'M1078 465 C1250 340 1450 420 1638 573',
  'M413 643 C300 1100 400 1500 716 1850',
  'M112 1112 C500 1150 690 1450 716 1850',
  'M716 1850 C1000 1600 1350 1490 1722 1470',
  'M716 1850 C1100 1800 1500 1650 1722 1470',
]

// En el orden en que aparecen
export const NODES = [
  { x: 1078, y: 465, filled: true },
  { x: 657, y: 153, filled: false },
  { x: 413, y: 643, filled: false },
  { x: 112, y: 1112, filled: true },
  { x: 716, y: 1850, filled: true },
  { x: 1722, y: 1470, filled: false },
  { x: 1638, y: 573, filled: false },
]
