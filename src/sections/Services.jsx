import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import ServiceFigure from '../components/ServiceFigure'
import { ArrowDown } from '../components/Icons'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-titulo">
      <div className="shell">
        <div className="frame">
          <div className="pad section-y grid grid-cols-1 gap-10 lg:grid-cols-12">
            <SectionHead id="servicios-titulo" label="Nuestras soluciones" title="Lo que construimos." className="lg:col-span-8" />
            <Reveal as="p" delay={0.1} className="lead self-end lg:col-span-4">
              Cuatro áreas de especialización. Un mismo propósito: hacer que la tecnología trabaje a favor de tu
              negocio.
            </Reveal>
          </div>

          <ol>
            {services.map((s) => (
              <Reveal
                as="li"
                key={s.tag}
                className="svc-row grid grid-cols-[minmax(0,1fr)_auto] border-t border-line lg:grid-cols-12"
              >
                <span className="joint" style={{ left: 0, top: 0 }} aria-hidden="true" />

                <div className="pad pb-0 lg:col-span-5 lg:pb-[var(--pad)]">
                  <p className="mono mb-5 text-ink-soft lg:mb-16">{s.tag} / 04</p>
                  <h3 className="h3 max-w-[14ch]">{s.title}</h3>
                </div>

                <div className="blueprint h-[150px] w-[150px] self-start border-b border-l border-line p-3 xs:h-[190px] xs:w-[190px] lg:order-last lg:col-span-3 lg:h-auto lg:min-h-[260px] lg:w-auto lg:self-stretch lg:border-b-0 lg:p-6">
                  <ServiceFigure name={s.figure} />
                </div>

                <div className="pad col-span-2 flex flex-col justify-between gap-8 lg:col-span-4">
                  <div className="max-w-[42ch]">
                    <p className="text-[clamp(1.15rem,1.5vw,1.3rem)] leading-[1.25] tracking-[-0.02em]">{s.tagline}</p>
                    {s.description.map((text) => (
                      <p key={text} className="mt-4 text-[16px] leading-[1.55] text-ink-soft">
                        {text}
                      </p>
                    ))}
                    {s.href && (
                      <a href={s.href} className="text-link mt-6">
                        {s.hrefLabel}
                        <ArrowDown />
                      </a>
                    )}
                  </div>
                  <ul className="flex flex-wrap gap-2" aria-label="Tecnologías">
                    {s.stack.map((t) => (
                      <li key={t} className="mono border border-line px-2.5 py-1 text-[11.5px] text-ink-soft">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
