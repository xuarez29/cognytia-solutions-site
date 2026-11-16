import IsoBox from './IsoBox'
import { P, pts, line } from '../lib/iso'

/**
 * Ilustraciones isométricas de los servicios. Son objetos abstractos:
 * capas (web), un núcleo conectado (IA) y una línea de proceso
 * (automatización). Al pasar el cursor sobre la fila, las piezas se separan.
 */

function Web() {
  const top = 61
  return (
    <svg className="iso h-full w-full" viewBox="-125 -128 250 205" aria-hidden="true">
      <IsoBox x={-55} y={-55} z={0} w={110} d={110} h={7} />
      <g className="iso-part lift-1">
        <IsoBox x={-55} y={-55} z={27} w={110} d={110} h={7} />
        {[-28, 0, 28].map((v) => (
          <g key={v}>
            <line className="thin" {...line(P(v, -55, 34), P(v, 55, 34))} />
            <line className="thin" {...line(P(-55, v, 34), P(55, v, 34))} />
          </g>
        ))}
      </g>
      <g className="iso-part lift-2">
        <IsoBox x={-55} y={-55} z={54} w={110} d={110} h={7} />
        <line className="edge" {...line(P(-55, -36, top), P(55, -36, top))} />
        <polygon className="t-top edge" points={pts([P(-42, -22, top), P(2, -22, top), P(2, 40, top), P(-42, 40, top)])} />
        {[-18, -4, 10].map((v) => (
          <line key={v} className="edge" {...line(P(14, v, top), P(42, v, top))} />
        ))}
        <polygon className="edge f-right" points={pts([P(14, 24, top), P(42, 24, top), P(42, 40, top), P(14, 40, top)])} />
        {[-46, -38, -30].map((v) => {
          const [cx, cy] = P(v, -46, top)
          return <circle key={v} cx={cx} cy={cy} r="1.8" fill="var(--ink)" />
        })}
      </g>
    </svg>
  )
}

function Ia() {
  const hub = P(0, 0, 54)
  const nodes = [
    { p: [0, -118], filled: true },
    { p: [-82, -74], filled: false },
    { p: [78, -86], filled: false },
    { p: [-104, -12], filled: true },
    { p: [104, -22], filled: false },
  ]
  const links = [
    [hub, nodes[0].p],
    [nodes[0].p, nodes[1].p],
    [nodes[0].p, nodes[2].p],
    [nodes[1].p, nodes[3].p],
    [nodes[2].p, nodes[4].p],
    [P(-24, 0, 30), nodes[3].p],
    [P(24, -24, 30), nodes[4].p],
  ]
  return (
    <svg className="iso h-full w-full" viewBox="-125 -132 250 210" aria-hidden="true">
      <IsoBox x={-62} y={-62} z={0} w={124} d={124} h={6} />
      {[-31, 0, 31].map((v) => (
        <g key={v}>
          <line className="thin" {...line(P(v, -62, 6), P(v, 62, 6))} />
          <line className="thin" {...line(P(-62, v, 6), P(62, v, 6))} />
        </g>
      ))}
      <g className="iso-part lift-1">
        <IsoBox x={-24} y={-24} z={6} w={48} d={48} h={48} tone="teal" />
      </g>
      <g className="iso-part lift-2">
        {links.map(([a, b], i) => (
          <line key={i} className="teal-line" {...line(a, b)} />
        ))}
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.p[0]}
            cy={n.p[1]}
            r={n.filled ? 6 : 5.4}
            fill={n.filled ? 'var(--teal)' : 'var(--panel)'}
            stroke="var(--teal)"
            strokeWidth={n.filled ? 0 : 2.2}
          />
        ))}
      </g>
    </svg>
  )
}

function Auto() {
  const a = P(-92, 0, 8)
  const b = P(92, 0, 8)
  return (
    <svg className="iso h-full w-full" viewBox="-125 -112 250 190" aria-hidden="true">
      <IsoBox x={-96} y={-26} z={0} w={192} d={52} h={8} />
      <line className="thin" {...line(P(-96, -13, 8), P(96, -13, 8))} />
      <line className="thin" {...line(P(-96, 13, 8), P(96, 13, 8))} />
      {/* Poste trasero del arco */}
      <IsoBox x={-7} y={-34} z={0} w={14} d={8} h={58} />
      {/* Pieza sin procesar */}
      <IsoBox x={-78} y={-12} z={8} w={24} d={24} h={24} />
      {/* Pulso que recorre la línea */}
      <line className="teal-line on-hover" {...line(a, b)} pathLength="1" strokeDasharray="0.08 0.92" style={{ animation: 'travel 2.6s linear infinite' }} />
      {/* Pieza procesada */}
      <g className="iso-part lift-1">
        <IsoBox x={44} y={-12} z={8} w={24} d={24} h={24} tone="teal" />
      </g>
      {/* Travesaño y poste frontal */}
      <IsoBox x={-7} y={-34} z={58} w={14} d={68} h={8} />
      <IsoBox x={-7} y={26} z={0} w={14} d={8} h={58} />
      <circle cx={P(7, 0, 62)[0]} cy={P(7, 0, 62)[1]} r="2.4" fill="var(--teal)" className="on-hover" style={{ animation: 'blink 1.3s ease-in-out infinite' }} />
    </svg>
  )
}

const figures = { web: Web, ia: Ia, auto: Auto }

export default function ServiceFigure({ name }) {
  const Figure = figures[name]
  return Figure ? <Figure /> : null
}
