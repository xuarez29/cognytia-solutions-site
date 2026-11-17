import Reveal from '../components/Reveal'
import { faq } from '../data/faq'

/** Preguntas frecuentes. Usa <details> nativo: funciona sin JavaScript y con teclado. */
export default function Faq() {
  return (
    <section id="preguntas" aria-labelledby="preguntas-titulo">
      <div className="shell">
        <div className="frame grid grid-cols-1 lg:grid-cols-12">
          <div className="pad pb-0 lg:col-span-4 lg:border-r lg:border-line lg:pb-[var(--pad)]">
            <div className="lg:sticky lg:top-[calc(var(--nav-h)+var(--pad))]">
              <p className="label mb-6">
                <span className="node" aria-hidden="true" />
                Preguntas frecuentes
              </p>
              <h2
                id="preguntas-titulo"
                className="max-w-[14ch] text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.06] tracking-[-0.035em]"
              >
                Algunas preguntas antes de empezar<span className="text-teal">.</span>
              </h2>
            </div>
          </div>

          <Reveal className="pt-8 lg:col-span-8 lg:pt-0">
            {faq.map((item, i) => (
              <details key={item.q} className={`group border-line ${i ? 'border-t' : 'border-t lg:border-t-0'}`}>
                <summary className="flex cursor-pointer list-none items-start gap-5 pad py-6 transition-colors duration-300 hover:bg-panel [&::-webkit-details-marker]:hidden">
                  <span className="mono pt-1 text-ink-soft">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex-1 text-[clamp(1.1rem,1.6vw,1.35rem)] leading-[1.25] tracking-[-0.02em]">
                    {item.q}
                  </span>
                  <span
                    className="node node--hollow mt-2 flex-none transition-transform duration-300 group-open:scale-125 group-open:bg-teal"
                    aria-hidden="true"
                  />
                </summary>
                <p className="max-w-[60ch] px-[var(--pad)] pb-7 pl-[calc(var(--pad)+2.6rem)] text-[16px] leading-[1.6] text-ink-soft">
                  {item.a}
                </p>
              </details>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
