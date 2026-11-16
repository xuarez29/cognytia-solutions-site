import { useRef } from 'react'
import { useScrollProgress } from '../hooks/useScrollProgress'

/**
 * Transición entre secciones: una regla graduada que se desliza con el
 * scroll, como el carro de una máquina. Lleva el índice de la sección.
 */
export default function Ruler({ index, total = '11', label }) {
  const ref = useRef(null)
  const ticks = useRef(null)

  useScrollProgress(ref, (p) => {
    if (ticks.current) ticks.current.style.transform = `translate3d(${(-p * 120).toFixed(1)}px,0,0)`
  })

  return (
    <div ref={ref} className="shell" aria-hidden="true">
      <div className="frame ruler">
        <div ref={ticks} className="ruler-ticks" />
        <span className="joint" style={{ left: 0, top: 0 }} />
        <span className="joint joint--fill" style={{ left: '100%', top: 0 }} />
        <div className="relative flex h-full items-start justify-between pad-x pt-[9px]">
          <span className="mono text-[11px] text-ink-soft">
            {index} / {total}
          </span>
          <span className="mono text-[11px] uppercase tracking-[0.1em] text-ink-soft">{label}</span>
        </div>
      </div>
    </div>
  )
}
