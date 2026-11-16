import IsoBox, { IsoWire } from './IsoBox'
import { P, pts, line } from '../lib/iso'

/**
 * La misma pieza en cuatro estados, uno por paso del proceso:
 * 0 diagnóstico (se mide el terreno) · 1 arquitectura (se traza el plan)
 * 2 construcción (el plan se vuelve sólido) · 3 escala (crece).
 * `animate` activa el lector del diagnóstico; se deja apagado cuando la
 * figura no está a la vista para no gastar CPU.
 */

const boxes = [
  { x: -72, y: -72, w: 60, d: 60, h: 70, tone: 'teal' },
  { x: 12, y: -72, w: 60, d: 60, h: 38 },
  { x: -72, y: 12, w: 60, d: 60, h: 28 },
  { x: 12, y: 12, w: 60, d: 60, h: 52 },
]
// Pisos que se agregan al escalar: [índice de la base, altura]
const extras = [
  [0, 36],
  [3, 30],
]

const points = [
  [-60, -30],
  [40, -60],
  [-20, 50],
  [62, 28],
  [8, -8],
]

const show = (on, delay = 0) => ({
  opacity: on ? 1 : 0,
  transitionDelay: on ? `${delay}s` : '0s',
})

export default function ProcessFigure({ stage = 0, animate = false, className = '' }) {
  const plan = stage >= 1
  const built = stage >= 2
  const scaled = stage >= 3

  const renderBox = (b, i) => (
    <g key={i}>
      <IsoWire {...b} className="iso-part" style={show(plan && !built, i * 0.08)} />
      <g
        className="iso-part"
        style={{ ...show(built, i * 0.12), transform: built ? 'none' : 'translateY(-14px)' }}
      >
        <IsoBox {...b} />
      </g>
      {extras
        .filter(([base]) => base === i)
        .map(([base, h]) => (
          <g
            key={`x${base}`}
            className="iso-part"
            style={{ ...show(scaled, 0.1 + i * 0.08), transform: scaled ? 'none' : 'translateY(-22px)' }}
          >
            <IsoBox {...b} z={6 + b.h} h={h} />
          </g>
        ))}
    </g>
  )

  const tops = boxes.map((b) => {
    const extra = extras.find(([base]) => base === boxes.indexOf(b))
    return P(b.x + b.w / 2, b.y + b.d / 2, 6 + b.h + (extra ? extra[1] : 0))
  })

  return (
    <svg className={`iso ${className}`} viewBox="-185 -205 370 325" aria-hidden="true">
      {/* Base con retícula */}
      <IsoBox x={-100} y={-100} z={0} w={200} d={200} h={6} />
      {[-50, 0, 50].map((v) => (
        <g key={v}>
          <line className="thin" {...line(P(v, -100, 6), P(v, 100, 6))} />
          <line className="thin" {...line(P(-100, v, 6), P(100, v, 6))} />
        </g>
      ))}

      {/* 0 · Diagnóstico: puntos del proceso actual y un lector que los recorre */}
      <g className="iso-part" style={show(stage === 0)}>
        <polyline
          className="teal-line"
          strokeDasharray="3 4"
          points={pts(points.map(([x, y]) => P(x, y, 6)))}
        />
        {points.map(([x, y], i) => {
          const [cx, cy] = P(x, y, 6)
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="5"
              fill={i % 2 ? 'var(--panel)' : 'var(--teal)'}
              stroke="var(--teal)"
              strokeWidth="2"
            />
          )
        })}
        <g style={{ '--sx': '86px', '--sy': '50px', animation: animate ? 'scan 5s ease-in-out infinite' : 'none' }}>
          <ellipse cx={P(-50, 0, 6)[0]} cy={P(-50, 0, 6)[1]} rx="34" ry="19.6" className="edge" fill="rgba(0,196,186,0.16)" />
          <line className="edge" {...line(P(-50, 0, 6), P(-50, 0, 46))} />
          <circle cx={P(-50, 0, 46)[0]} cy={P(-50, 0, 46)[1]} r="4" fill="var(--ink)" />
        </g>
      </g>

      {/* 1 · Arquitectura: las piezas planeadas y cómo se conectan */}
      <g className="iso-part" style={show(plan && !built, 0.2)}>
        <polygon
          className="teal-line"
          points={pts([P(-42, -42, 6), P(42, -42, 6), P(42, 42, 6), P(-42, 42, 6)])}
        />
      </g>

      {boxes.map(renderBox)}

      {/* 3 · Escala: la red que une lo construido */}
      <g className="iso-part" style={show(scaled, 0.5)}>
        <polyline className="edge" fill="none" points={pts([tops[2], tops[0], tops[1], tops[3], tops[2]])} />
        {tops.map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="5.5"
            fill="var(--panel)"
            stroke="var(--teal-deep)"
            strokeWidth="1.6"
          />
        ))}
      </g>
    </svg>
  )
}
