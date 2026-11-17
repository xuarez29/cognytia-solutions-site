import { useRef } from 'react'
import Reveal from '../components/Reveal'
import { useScrollProgress } from '../hooks/useScrollProgress'

const statement = 'Primero el problema. Después la tecnología.'

const principles = [
  { n: 'A', title: 'Práctico', text: 'Partimos de cómo trabajas hoy, no de la tecnología de moda.' },
  { n: 'B', title: 'Eficiente', text: 'Simplificamos procesos y automatizamos lo repetitivo para que tu equipo pueda concentrarse en lo que realmente importa.' },
  { n: 'C', title: 'Medible', text: 'Diseñamos soluciones con objetivos claros y resultados que podemos evaluar.' },
]

export default function Approach() {
  const ref = useRef(null)
  const words = statement.split(' ')

  // Las palabras se "encienden" conforme avanza la lectura
  useScrollProgress(ref, (p) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const spans = ref.current.children
    const t = Math.min(1, Math.max(0, (p - 0.12) / 0.42))
    const head = t * (spans.length + 3)
    for (let i = 0; i < spans.length; i++) {
      const o = Math.min(1, Math.max(0, head - i))
      // 0.5 es el piso: atenuado, el texto conserva contraste 3:1 (texto grande)
      spans[i].style.opacity = (0.5 + 0.5 * o).toFixed(2)
    }
  })

  return (
    <section id="enfoque" aria-labelledby="enfoque-titulo">
      <div className="shell">
        <div className="frame grid grid-cols-1 lg:grid-cols-12">
          <div className="pad pb-0 lg:col-span-3 lg:border-r lg:border-line lg:pb-[var(--pad)]">
            <h2 id="enfoque-titulo" className="label lg:sticky lg:top-[calc(var(--nav-h)+var(--pad))]">
              <span className="node" aria-hidden="true" />
              Nuestro enfoque
            </h2>
          </div>

          <div className="lg:col-span-9">
            <p
              ref={ref}
              className="pad pb-0 pt-[clamp(48px,8vw,120px)] text-[clamp(2rem,4.8vw,4.25rem)] leading-[1.04] tracking-[-0.04em]"
            >
              {words.map((w, i) => (
                <span key={i}>{w} </span>
              ))}
            </p>

            <Reveal className="pad pb-[clamp(48px,8vw,120px)] pt-[clamp(28px,4vw,48px)]">
              <p className="lead max-w-[46ch]">
                Primero entendemos cómo funciona tu negocio. Después diseñamos la solución adecuada.
              </p>
              <p className="mt-4 max-w-[52ch] text-ink-soft">
                Creemos en la tecnología que simplifica procesos, amplía las capacidades de las personas y genera
                resultados tangibles.
              </p>
              <p className="mt-6 text-[clamp(1.15rem,1.6vw,1.4rem)] tracking-[-0.02em]">
                IA útil, no IA por moda<span className="text-teal">.</span>
              </p>
            </Reveal>

            <ul className="grid grid-cols-1 border-t border-line sm:grid-cols-3">
              {principles.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.n}
                  delay={i * 0.08}
                  className={`pad border-line ${i < 2 ? 'border-b sm:border-b-0 sm:border-r' : ''}`}
                >
                  <p className="mono mb-8 flex items-center justify-between text-ink-soft sm:mb-14">
                    <span>{p.n}</span>
                    <span className={`node ${i === 1 ? '' : 'node--hollow'}`} aria-hidden="true" />
                  </p>
                  <h3 className="mb-2 text-[1.35rem] tracking-[-0.02em]">{p.title}</h3>
                  <p className="body-soft max-w-[30ch] text-[15px]">{p.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
