import { boxFaces } from '../lib/iso'

/** Prisma isométrico. `tone="teal"` lo pinta con el color de marca. */
export default function IsoBox({ x, y, z = 0, w, d, h, tone = 'plain', className = '', style }) {
  const f = boxFaces(x, y, z, w, d, h)
  const k = tone === 'teal' ? 't' : 'f'
  return (
    <g className={className} style={style}>
      <polygon className={`${k}-left edge`} points={f.left} />
      <polygon className={`${k}-right edge`} points={f.right} />
      <polygon className={`${k}-top edge`} points={f.top} />
    </g>
  )
}

/** Solo el contorno punteado: una pieza planeada, todavía sin construir. */
export function IsoWire({ x, y, z = 0, w, d, h, className = '', style }) {
  const f = boxFaces(x, y, z, w, d, h)
  return (
    <g className={className} style={style}>
      <polygon className="wire" points={f.left} />
      <polygon className="wire" points={f.right} />
      <polygon className="wire" points={f.top} />
    </g>
  )
}
