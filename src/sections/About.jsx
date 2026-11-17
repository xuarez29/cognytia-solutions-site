import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import AboutFigure from '../components/AboutFigure'

/** Quiénes somos: breve, humana y profesional. No es un currículum. */
export default function About() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-titulo">
      <div className="shell">
        <div className="frame">
          <div className="pad section-y grid grid-cols-1 gap-10 lg:grid-cols-12">
            <SectionHead
              id="nosotros-titulo"
              label="Sobre CognytIA"
              title="Una forma diferente de abordar la tecnología."
              className="lg:col-span-8"
            />
            <Reveal as="p" delay={0.1} className="lead self-end lg:col-span-4">
              CognytIA nace de la convicción de que la tecnología tiene sentido cuando ayuda a resolver problemas
              reales.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 border-t border-line lg:grid-cols-12">
            <Reveal className="pad lg:col-span-7 lg:border-r lg:border-line lg:py-[clamp(40px,5vw,72px)]">
              <h3 className="max-w-[14ch] text-[clamp(1.9rem,3.2vw,2.75rem)] leading-[1.05] tracking-[-0.035em]">
                Entender antes de construir<span className="text-teal">.</span>
              </h3>
              <p className="mt-8 max-w-[40ch] text-[clamp(1.2rem,1.9vw,1.6rem)] leading-[1.3] tracking-[-0.02em]">
                Combinamos pensamiento científico, experiencia empresarial y tecnología para comprender problemas
                complejos y convertirlos en soluciones prácticas.
              </p>
              <p className="mt-6 max-w-[50ch] text-ink-soft">
                Creemos en la innovación que genera valor, no en la tecnología por sí misma.
              </p>
            </Reveal>

            <div className="blueprint border-t border-line pad lg:col-span-5 lg:border-t-0">
              <AboutFigure />
            </div>
          </div>

          <Reveal className="relative border-t border-line pad py-[clamp(40px,6vw,88px)]">
            <span className="joint" style={{ left: 0, top: 0 }} aria-hidden="true" />
            <p className="max-w-[24ch] text-[clamp(1.6rem,3.4vw,3rem)] leading-[1.1] tracking-[-0.035em]">
              La curiosidad nos lleva a explorar. El propósito nos lleva a construir
              <span className="text-teal">.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
