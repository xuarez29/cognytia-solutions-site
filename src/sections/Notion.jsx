import { useRef, useState } from 'react'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import { ArrowRight, Check } from '../components/Icons'
import { capabilities, reasons } from '../data/notion'

/* ── Esquemas de cada capacidad (dibujos, no capturas) ─────────────── */

const Bar = ({ w = '100%', className = '' }) => (
  <span className={`block h-[7px] bg-[var(--line)] ${className}`} style={{ width: w }} />
)

const Tag = ({ children, on }) => (
  <span
    className={`mono inline-block border px-2 py-[3px] text-[10.5px] leading-none ${
      on ? 'border-teal bg-teal-tint text-teal-deep' : 'border-line text-ink-soft'
    }`}
  >
    {children}
  </span>
)

const schematics = {
  wiki: () => (
    <div className="grid h-full grid-cols-[auto_minmax(0,1fr)] gap-4">
      <ul className="flex flex-col gap-2.5 border-r border-line pr-4">
        {['Políticas', 'Manuales', 'Procesos', 'Conocimiento'].map((t, i) => (
          <li key={t} className={`mono flex items-center gap-2 text-[10.5px] ${i === 1 ? 'text-ink' : 'text-ink-soft'}`}>
            <span className={`node !h-[6px] !w-[6px] ${i === 1 ? '' : 'node--hollow'}`} />
            {t}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2.5">
        <Bar w="55%" className="!h-[12px] !bg-ink" />
        <Bar />
        <Bar w="92%" />
        <Bar w="70%" />
        <Bar w="40%" className="mt-2 !bg-teal" />
        <Bar w="85%" />
        <Bar w="60%" />
      </div>
    </div>
  ),
  board: () => (
    <div className="grid h-full grid-cols-3 gap-3">
      {[['Por hacer', 3], ['En curso', 2], ['Hecho', 3]].map(([t, n], c) => (
        <div key={t} className="flex flex-col gap-2">
          <p className="mono mb-1 text-[10.5px] text-ink-soft">{t}</p>
          {Array.from({ length: n }, (_, i) => (
            <div key={i} className={`flex flex-col gap-1.5 border p-2 ${c === 1 && i === 0 ? 'border-teal bg-teal-tint' : 'border-line'}`}>
              <Bar w="80%" />
              <Bar w="50%" />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
  crm: () => (
    <div className="flex h-full flex-col justify-center gap-3">
      {[['Prospecto', '100%'], ['Contacto', '74%'], ['Propuesta', '48%'], ['Cierre', '26%']].map(([t, w], i) => (
        <div key={t} className="grid grid-cols-[78px_1fr] items-center gap-3">
          <span className="mono text-[10.5px] text-ink-soft">{t}</span>
          <span className={`block h-[18px] ${i === 3 ? 'bg-teal' : 'border border-line bg-[var(--line-soft)]'}`} style={{ width: w }} />
        </div>
      ))}
    </div>
  ),
  db: () => (
    <div className="relative grid h-full grid-cols-2 content-center gap-x-10 gap-y-5">
      {['Proyectos', 'Clientes', 'Procesos', 'OKRs'].map((t, i) => (
        <div key={t} className="relative border border-line bg-panel">
          <p className="mono flex items-center gap-2 border-b border-line px-2 py-1.5 text-[10.5px]">
            <span className={`node !h-[6px] !w-[6px] ${i % 3 ? 'node--hollow' : ''}`} />
            {t}
          </p>
          <div className="flex flex-col gap-1.5 p-2">
            <Bar w="85%" />
            <Bar w="60%" />
          </div>
        </div>
      ))}
      <span className="absolute left-1/2 top-1/2 h-px w-10 -translate-x-1/2 bg-teal" />
      <span className="absolute left-1/2 top-1/2 h-5 w-px -translate-y-1/2 bg-teal" />
    </div>
  ),
  dash: () => (
    <div className="grid h-full grid-cols-[1fr_38%] gap-4">
      <div className="flex items-end gap-2 border-b border-l border-line pl-2">
        {[38, 54, 46, 70, 62, 88].map((h, i) => (
          <span key={i} className={`flex-1 ${i === 5 ? 'bg-teal' : 'bg-[var(--line)]'}`} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="flex flex-col justify-between gap-2">
        {['Indicadores', 'Progreso', 'Prioridades'].map((t, i) => (
          <div key={t} className="border border-line p-2">
            <p className="mono mb-2 text-[10.5px] text-ink-soft">{t}</p>
            <Bar w={['70%', '45%', '85%'][i]} className={i === 1 ? '!bg-teal' : ''} />
          </div>
        ))}
      </div>
    </div>
  ),
  ai: () => (
    <div className="flex h-full flex-col justify-center gap-4">
      <div className="flex items-center gap-3 border border-teal bg-teal-tint px-3 py-2.5">
        <span className="node" />
        <span className="mono text-[11px] text-teal-deep">Pregunta a tu espacio de trabajo</span>
        <span className="ml-auto block h-4 w-px bg-teal-deep" style={{ animation: 'blink 1.1s steps(2) infinite' }} />
      </div>
      <div className="flex flex-wrap gap-2">
        <Tag on>Búsqueda empresarial</Tag>
        <Tag>Notas de reuniones</Tag>
        <Tag>Asistentes de tareas</Tag>
      </div>
      <div className="flex flex-col gap-2.5">
        <Bar w="90%" />
        <Bar w="72%" />
        <Bar w="50%" />
      </div>
    </div>
  ),
}

/* ── Sección ───────────────────────────────────────────────────────── */

export default function Notion() {
  const [active, setActive] = useState(0)
  const tabs = useRef([])
  const current = capabilities[active]
  const Schematic = schematics[current.id]

  const onKeyDown = (e) => {
    const dir = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key]
    if (!dir) return
    e.preventDefault()
    const next = (active + dir + capabilities.length) % capabilities.length
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <section id="notion" aria-labelledby="notion-titulo">
      <div className="shell">
        <div className="frame grid grid-cols-1 lg:grid-cols-12">
          {/* Texto */}
          <div className="pad section-y lg:col-span-5 lg:border-r lg:border-line">
            <SectionHead id="notion-titulo" label="Notion a la medida" title="Tu empresa, mejor conectada." />
            <Reveal delay={0.1}>
              <p className="lead mt-8 max-w-[44ch]">
                Transformamos Notion en un espacio de trabajo personalizado que integra la información, los
                procesos y el conocimiento de tu empresa, incorporando automatizaciones e inteligencia
                artificial.
              </p>
            </Reveal>

            <ul className="mt-10 border-t border-line">
              {reasons.map((r, i) => (
                <Reveal as="li" key={r} delay={i * 0.06} className="flex items-start gap-4 border-b border-line py-4">
                  <Check className="mt-1.5 flex-none text-teal-spark" />
                  <span className="text-[15.5px] leading-snug">{r}</span>
                </Reveal>
              ))}
            </ul>

            <a href="#contacto" className="btn btn--solid mt-10">
              Hablemos de tu proyecto
              <ArrowRight />
            </a>
          </div>

          {/* Espacio de trabajo interactivo */}
          <div className="blueprint flex flex-col justify-center border-t border-line p-4 sm:p-[var(--pad)] lg:col-span-7 lg:border-t-0">
            <Reveal className="border border-ink bg-panel shadow-[8px_8px_0_0_var(--line)]">
              <div className="flex h-10 items-center gap-2 border-b border-line px-4">
                <span className="node node--hollow !h-2 !w-2" aria-hidden="true" />
                <span className="node node--hollow !h-2 !w-2" aria-hidden="true" />
                <span className="node !h-2 !w-2" aria-hidden="true" />
                <p className="mono ml-3 truncate text-[10.5px] uppercase tracking-[0.1em] text-ink-soft">
                  Un sistema único para toda tu operación
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,230px)_1fr]">
                <div
                  role="tablist"
                  aria-label="Áreas de implementación en Notion"
                  aria-orientation="vertical"
                  className="flex overflow-x-auto border-b border-line md:flex-col md:overflow-visible md:border-b-0 md:border-r"
                  onKeyDown={onKeyDown}
                >
                  {capabilities.map((c, i) => (
                    <button
                      key={c.id}
                      ref={(el) => {
                        tabs.current[i] = el
                      }}
                      type="button"
                      role="tab"
                      id={`cap-tab-${c.id}`}
                      aria-selected={i === active}
                      aria-controls="cap-panel"
                      tabIndex={i === active ? 0 : -1}
                      onClick={() => setActive(i)}
                      className={`flex flex-none items-center gap-3 whitespace-nowrap border-line px-4 py-3 text-left text-[13.5px] leading-tight transition-colors duration-300 md:whitespace-normal md:border-b md:py-3.5 md:last:border-b-0 ${
                        i === active ? 'bg-teal-deep text-white' : 'text-ink-soft hover:bg-paper hover:text-ink'
                      }`}
                    >
                      <span className="mono text-[10.5px] opacity-70">{String(i + 1).padStart(2, '0')}</span>
                      {c.title}
                    </button>
                  ))}
                </div>

                <div
                  role="tabpanel"
                  id="cap-panel"
                  aria-labelledby={`cap-tab-${current.id}`}
                  tabIndex={0}
                  className="flex min-h-[400px] flex-col gap-6 p-5 sm:p-7"
                >
                  <div key={current.id} className="fade-in flex flex-1 flex-col gap-6">
                    <div>
                      <h3 className="text-[1.5rem] leading-tight tracking-[-0.025em]">{current.title}</h3>
                      <p className="mt-2 max-w-[46ch] text-[15px] text-ink-soft">{current.description}</p>
                    </div>
                    <div className="min-h-[190px] flex-1 border border-line bg-paper p-4" aria-hidden="true">
                      <Schematic />
                    </div>
                    {current.cta && (
                      <a href="#contacto" className="text-link self-start">
                        {current.cta}
                        <ArrowRight />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
            <p className="mono mt-5 text-[10.5px] uppercase tracking-[0.1em] text-ink-soft">
              Fig. 02 — Vista esquemática de un espacio de trabajo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
