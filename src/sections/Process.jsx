import { useEffect, useRef, useState } from 'react'
import SectionHead from '../components/SectionHead'
import Reveal from '../components/Reveal'
import ProcessFigure from '../components/ProcessFigure'
import { useInView } from '../hooks/useInView'
import { steps } from '../data/process'

export default function Process() {
  const [active, setActive] = useState(0)
  const items = useRef([])
  const figure = useRef(null)
  const figureVisible = useInView(figure, { once: false, rootMargin: '0px', threshold: 0 })

  // El paso activo es el que cruza el centro de la pantalla
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.step))
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    items.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="proceso" aria-labelledby="proceso-titulo">
      <div className="shell">
        <div className="frame">
          <div className="pad section-y grid grid-cols-1 gap-10 lg:grid-cols-12">
            <SectionHead id="proceso-titulo" label="Nuestro proceso" title="De la idea a la realidad." className="lg:col-span-8" />
            <Reveal as="p" delay={0.1} className="lead self-end lg:col-span-4">
              Trabajamos por etapas, con objetivos claros, comunicación constante y avances visibles.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 border-t border-line lg:grid-cols-12">
            {/* Figura fija (escritorio): cambia de estado con el scroll */}
            <div className="hidden lg:col-span-5 lg:block lg:border-r lg:border-line">
              <div ref={figure} className="blueprint sticky top-[var(--nav-h)] flex h-[calc(100svh-var(--nav-h))] flex-col" aria-hidden="true">
                <div className="flex items-center justify-between pad pb-0">
                  <p className="mono text-[10.5px] uppercase tracking-[0.1em] text-ink-soft">
                    Fig. 03 — {steps[active].title}
                  </p>
                  <p className="mono text-[10.5px] text-ink-soft">
                    {steps[active].number} / 04
                  </p>
                </div>
                <div className="flex min-h-0 flex-1 items-center justify-center px-10 pt-6">
                  <ProcessFigure stage={active} animate={figureVisible && active === 0} className="h-full max-h-[440px] w-full" />
                </div>
                <div className="pad pt-0">
                  <div className="flex gap-1.5">
                    {steps.map((s, i) => (
                      <span
                        key={s.number}
                        className={`h-[3px] flex-1 transition-colors duration-500 ${i <= active ? 'bg-teal' : 'bg-[var(--line)]'}`}
                      />
                    ))}
                  </div>
                  <p className="mono mt-4 text-[11px] uppercase tracking-[0.08em] text-ink-soft">{steps[active].note}</p>
                </div>
              </div>
            </div>

            <ol className="lg:col-span-7">
              {steps.map((step, i) => (
                <li
                  key={step.number}
                  ref={(el) => {
                    items.current[i] = el
                  }}
                  data-step={i}
                  className={`relative border-line lg:min-h-[62svh] ${i ? 'border-t' : ''}`}
                >
                  {i > 0 && <span className="joint" style={{ left: 0, top: 0 }} aria-hidden="true" />}

                  {/* Móvil y tablet: cada paso trae su propio estado de la figura */}
                  <div
                    className="blueprint absolute right-0 top-0 h-[150px] w-[150px] border-b border-l border-line p-2 xs:h-[190px] xs:w-[190px] lg:hidden"
                    aria-hidden="true"
                  >
                    <ProcessFigure stage={i} className="h-full w-full" />
                  </div>

                  <div
                    className="pad flex flex-col justify-between gap-8 lg:min-h-[62svh] lg:gap-10 lg:py-[clamp(40px,7svh,72px)]"
                  >
                    <p className="mono flex h-[110px] items-start gap-3 text-ink-soft xs:h-[150px] lg:h-auto lg:items-center">
                      <span className={`node mt-[5px] lg:mt-0 ${i === active ? '' : 'node--hollow'}`} aria-hidden="true" />
                      Etapa {step.number}
                    </p>
                    <div>
                      {/* El paso inactivo solo atenúa el título (conserva contraste 3:1) */}
                      <h3
                        className={`text-[clamp(2.4rem,6.4vw,5.5rem)] leading-[0.95] tracking-[-0.045em] transition-opacity duration-500 ${
                          i === active ? '' : 'lg:opacity-50'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-5 max-w-[38ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.5] text-ink-soft">
                        {step.description}
                      </p>
                      <p className="mt-6 max-w-[44ch] border-t border-line pt-4 text-[15px] leading-[1.5]">
                        <span className="mono mb-1.5 block text-[10.5px] uppercase tracking-[0.1em] text-ink-soft">
                          Resultado
                        </span>
                        {step.result}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
