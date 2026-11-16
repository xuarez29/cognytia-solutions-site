import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { metrics } from '../data/metrics'

function Counter({ value, run }) {
  const [n, setN] = useState(value)

  useEffect(() => {
    if (!run || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    let t0 = 0
    const step = (t) => {
      if (!t0) t0 = t
      const p = Math.min(1, (t - t0) / 1600)
      setN(Math.round((1 - Math.pow(1 - p, 3)) * value))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [run, value])

  return <span className="tabular-nums">{n}</span>
}

export default function Metrics() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.3, rootMargin: '0px' })

  return (
    <section ref={ref} className="theme-dark" aria-labelledby="resultados-titulo">
      <div className="shell">
        <div className="frame">
          <div className="pad flex flex-wrap items-center justify-between gap-x-10 gap-y-3 py-6">
            <h2 id="resultados-titulo" className="label">
              <span className="node" aria-hidden="true" />
              Resultados
            </h2>
            <p className="label">Reportados por clientes · 2025–2026</p>
          </div>

          <dl className="grid grid-cols-2 border-t border-line lg:grid-cols-4">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`relative flex flex-col-reverse justify-between gap-10 border-line px-[var(--pad)] py-8 lg:min-h-[340px] lg:py-[var(--pad)] ${
                  i % 2 ? '' : 'border-r'
                } ${i < 2 ? 'border-b lg:border-b-0' : ''} ${i < 3 ? 'lg:border-r' : 'lg:border-r-0'}`}
              >
                <dt className="max-w-[20ch] text-[15px] leading-snug text-ink-soft">{m.label}</dt>
                <dd className="text-teal">
                  <span className="mono mb-5 block text-[11px] text-ink-mute">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex items-baseline whitespace-nowrap text-[clamp(2.8rem,7.4vw,6.6rem)] font-light leading-[0.9] tracking-[-0.05em]">
                    <span className="mr-[0.04em] text-[0.55em]">{m.prefix}</span>
                    <Counter value={m.value} run={inView} />
                    <span className="ml-[0.06em] text-[0.34em] tracking-[-0.02em]">{m.suffix.trim()}</span>
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
