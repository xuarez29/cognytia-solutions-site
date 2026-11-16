/**
 * iso.js — proyección isométrica mínima para las ilustraciones.
 * x crece hacia abajo-derecha, y hacia abajo-izquierda, z hacia arriba.
 */

const COS = Math.cos(Math.PI / 6)
const SIN = 0.5

export const P = (x, y, z = 0) => [(x - y) * COS, (x + y) * SIN - z]

export const pts = (list) => list.map(([a, b]) => `${a.toFixed(1)},${b.toFixed(1)}`).join(' ')

export const line = (a, b) => ({ x1: a[0].toFixed(1), y1: a[1].toFixed(1), x2: b[0].toFixed(1), y2: b[1].toFixed(1) })

/** Las tres caras visibles de un prisma: superior, frontal izquierda y frontal derecha. */
export function boxFaces(x, y, z, w, d, h) {
  return {
    top: pts([P(x, y, z + h), P(x + w, y, z + h), P(x + w, y + d, z + h), P(x, y + d, z + h)]),
    left: pts([P(x, y + d, z + h), P(x + w, y + d, z + h), P(x + w, y + d, z), P(x, y + d, z)]),
    right: pts([P(x + w, y, z + h), P(x + w, y + d, z + h), P(x + w, y + d, z), P(x + w, y, z)]),
    outline: pts([
      P(x, y, z + h), P(x + w, y, z + h), P(x + w, y, z),
      P(x + w, y + d, z), P(x, y + d, z), P(x, y + d, z + h),
    ]),
  }
}
