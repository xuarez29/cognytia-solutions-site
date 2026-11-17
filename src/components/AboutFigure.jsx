import { useEffect, useRef, useState } from 'react'
import IsoBox, { IsoWire } from './IsoBox'
import { P, pts, line } from '../lib/iso'
import { useInView } from '../hooks/useInView'

/**
 * "Entender antes de construir", en tres tiempos que se repiten:
 * 0 entender (un lector recorre los puntos del problema) ·
 * 1 trazar (aparece la pieza planeada, en línea punteada) ·
 * 2 construir (la pieza se vuelve sólida).
 * Solo avanza mientras está a la vista; con "reducir movimiento" se queda
 * en el estado final.
 */

const phases = [
  { label: 'Entender', ms: 3400 },
  { label: 'Trazar', ms: 2000 },
  { label: 'Construir', ms: 3600 },
]

const boxes = [
  { x: -62, y: -62, z: 6, w: 124, d: 124, h: 32 },
  { x: -42, y: -42, z: 38, w: 84, d: 84, h: 32 },
  { x: -22, y: -22, z: 70, w: 44, d: 44, h: 40, tone: 'teal' },
]

const points = [
  [-66, -34],
  [34, -66],
  [-24, 56],
  [66, 30],
  [6, -6],
]

const show = (on, delay = 0) => ({
  opacity: on ? 1 : 0,
  transitionDelay: on ? `${delay}s` : '0s',
})

export default function AboutFigure() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, rootMargin: '0px', threshold: 0.2 })
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    if (!inView) return
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t = setTimeout(
      () => setPhase((p) => (still ? 2 : (p + 1) % phases.length)),
      still ? 0 : phases[phase].ms
    )
    return () => clearTimeout(t)
  }, [inView, phase])

  const understand = phase === 0
  const plan = phase === 1
  const built = phase === 2

  return (
    <div ref={ref} className="flex h-full min-h-[340px] flex-col" aria-hidden="true">
      <div className="flex items-center justify-between">
        <p className="mono text-[10.5px] uppercase tracking-[0.1em] text-ink-soft">Fig. 04 — {phases[phase].label}</p>
        <p className="mono text-[10.5px] text-ink-soft">
          {String(phase + 1).padStart(2, '0')} / {String(phases.length).padStart(2, '0')}
        </p>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center py-4">
        <svg className="iso h-full max-h-[300px] w-full" viewBox="-185 -175 370 295">
          {/* Base con retícula */}
          <IsoBox x={-100} y={-100} z={0} w={200} d={200} h={6} />
          {[-50, 0, 50].map((v) => (
            <g key={v}>
              <line className="thin" {...line(P(v, -100, 6), P(v, 100, 6))} />
              <line className="thin" {...line(P(-100, v, 6), P(100, v, 6))} />
            </g>
          ))}

          {/* 0 · Entender: los puntos del problema y un lector que los recorre */}
          <g className="iso-part" style={show(understand)}>
            <polyline className="teal-line" strokeDasharray="3 4" points={pts(points.map(([x, y]) => P(x, y, 6)))} />
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
            <g
              style={{
                '--sx': '86px',
                '--sy': '50px',
                animation: inView && understand ? 'scan 3.4s ease-in-out infinite' : 'none',
              }}
            >
              <ellipse cx={P(-50, 0, 6)[0]} cy={P(-50, 0, 6)[1]} rx="34" ry="19.6" className="edge" fill="rgba(0,196,186,0.16)" />
              <line className="edge" {...line(P(-50, 0, 6), P(-50, 0, 46))} />
              <circle cx={P(-50, 0, 46)[0]} cy={P(-50, 0, 46)[1]} r="4" fill="var(--ink)" />
            </g>
          </g>

          {/* 1 · Trazar: la pieza planeada · 2 · Construir: la pieza sólida */}
          {boxes.map((b, i) => (
            <g key={i}>
              <IsoWire {...b} className="iso-part" style={show(plan, i * 0.14)} />
              <g
                className="iso-part"
                style={{ ...show(built, i * 0.22), transform: built ? 'none' : 'translateY(-16px)' }}
              >
                <IsoBox {...b} />
              </g>
            </g>
          ))}
        </svg>
      </div>

      <div>
        <div className="flex gap-1.5">
          {phases.map((p, i) => (
            <span
              key={p.label}
              className={`h-[3px] flex-1 transition-colors duration-500 ${i <= phase ? 'bg-teal' : 'bg-[var(--line)]'}`}
            />
          ))}
        </div>
        <p className="mono mt-4 flex justify-between text-[11px] uppercase tracking-[0.08em] text-ink-soft">
          {phases.map((p, i) => (
            <span key={p.label} className={`transition-colors duration-500 ${i === phase ? 'text-ink' : ''}`}>
              {p.label}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
