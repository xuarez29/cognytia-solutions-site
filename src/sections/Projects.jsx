import { Fragment, useState } from 'react'
import SectionHead from '../components/SectionHead'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

/** Diagrama del flujo: pasos conectados; un pulso recorre cada conexión. */
function Flow({ steps }) {
  return (
    <ol className="flex flex-col md:flex-row md:items-stretch" aria-label="Flujo de la solución">
      {steps.map((step, i) => {
        const last = i === steps.length - 1
        return (
          <Fragment key={step}>
            <li
              className={`flex flex-1 items-center gap-3 border px-3.5 py-3 md:flex-col md:items-start md:justify-between md:gap-6 md:py-3.5 ${
                last ? 'border-teal-deep bg-teal-deep text-white' : 'border-line bg-panel'
              }`}
            >
              <span className={`mono text-[10.5px] ${last ? 'text-teal' : 'text-ink-soft'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[14px] leading-tight">{step}</span>
            </li>
            {!last && <li className="flow-link" style={{ '--d': `${i * 0.5}s` }} aria-hidden="true" />}
          </Fragment>
        )
      })}
    </ol>
  )
}

function Detail({ project }) {
  return (
    <div key={project.id} className="fade-in flex h-full flex-col gap-10">
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
        <p className="text-[clamp(2.6rem,6.2vw,5.4rem)] leading-[0.92] tracking-[-0.05em]">
          {project.metric}
        </p>
        <p className="mono max-w-[18ch] pb-1.5 uppercase tracking-[0.08em] text-ink-soft">{project.metricLabel}</p>
      </div>

      <Flow steps={project.flow} />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <p className="label mb-3">
            <span className="node node--hollow" aria-hidden="true" />
            El reto
          </p>
          <p className="text-[15.5px] leading-[1.6] text-ink-soft">{project.challenge}</p>
        </div>
        <div>
          <p className="label mb-3">
            <span className="node" aria-hidden="true" />
            La solución
          </p>
          <p className="text-[15.5px] leading-[1.6] text-ink-soft">{project.solution}</p>
        </div>
      </div>

      <ul className="mt-auto flex flex-wrap gap-2" aria-label="Tecnologías">
        {project.stack.map((t) => (
          <li key={t} className="mono border border-line px-2.5 py-1 text-[11.5px] text-ink-soft">
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState(0)

  const select = (i, button) => {
    setActive(i)
    // En móvil es un acordeón: al cerrarse el caso anterior el botón se
    // desplaza, así que lo regresamos a la vista una vez pintado el cambio.
    if (window.innerWidth < 1024) {
      requestAnimationFrame(() => button.scrollIntoView({ block: 'start' }))
    }
  }

  return (
    <section id="proyectos" aria-labelledby="proyectos-titulo">
      <div className="shell">
        <div className="frame">
          <div className="pad section-y grid grid-cols-1 gap-10 lg:grid-cols-12">
            <SectionHead id="proyectos-titulo" label="Proyectos" title="Proyectos que hablan" className="lg:col-span-8" />
            <Reveal as="p" delay={0.1} className="lead self-end lg:col-span-4">
              Cada proyecto tiene un antes y un después. Aquí están algunos.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 border-t border-line lg:grid-cols-12">
            {/* Índice: en móvil funciona como acordeón */}
            <ul className="lg:col-span-5 lg:border-r lg:border-line">
              {projects.map((p, i) => {
                const on = i === active
                return (
                  <li key={p.id} className="border-b border-line last:border-b-0">
                    <button
                      type="button"
                      onClick={(e) => select(i, e.currentTarget)}
                      aria-expanded={on}
                      aria-controls={`proyecto-${p.id}`}
                      className={`group relative grid w-full grid-cols-[auto_1fr_auto] items-start gap-x-5 pad py-6 text-left transition-colors duration-500 lg:py-7 ${
                        on ? 'bg-panel' : 'hover:bg-panel'
                      }`}
                    >
                      <span
                        className={`absolute inset-y-0 left-0 w-[3px] origin-top bg-teal transition-transform duration-500 ${
                          on ? 'scale-y-100' : 'scale-y-0'
                        }`}
                        aria-hidden="true"
                      />
                      <span className="mono pt-1 text-ink-soft">{String(i + 1).padStart(2, '0')}</span>
                      <span>
                        <span className="mono mb-2 block text-[11px] uppercase tracking-[0.08em] text-ink-soft">
                          {p.category}
                        </span>
                        <span className="block text-[clamp(1.2rem,1.9vw,1.6rem)] leading-[1.15] tracking-[-0.025em]">
                          {p.title}
                        </span>
                      </span>
                      <span
                        className={`node mt-2 transition-transform duration-300 ${on ? '' : 'node--hollow group-hover:scale-125'}`}
                        aria-hidden="true"
                      />
                    </button>
                    {on && (
                      <div id={`proyecto-${p.id}`} className="blueprint border-t border-line pad lg:hidden">
                        <Detail project={p} />
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>

            {/* Expediente (escritorio) */}
            <div className="blueprint hidden pad lg:col-span-7 lg:block" aria-live="polite">
              <Detail project={projects[active]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
