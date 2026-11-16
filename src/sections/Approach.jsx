import { useRef } from 'react'
import Reveal from '../components/Reveal'
import { useScrollProgress } from '../hooks/useScrollProgress'

const statement =
  'Primero entendemos tu proceso. Luego diseñamos la solución adecuada. Tecnología que le quita carga a tu equipo y le da claridad a tu negocio: IA útil, no IA por moda.'

const principles = [
  { n: 'A', title: 'Práctico', text: 'Partimos de cómo trabajas hoy, no de la tecnología de moda.' },
  { n: 'B', title: 'Eficiente', text: 'Automatizamos lo repetitivo para que tu equipo haga lo que importa.' },
  { n: 'C', title: 'Medible', text: 'Cada proyecto tiene un antes y un después que se puede medir.' },
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
              className="pad py-[clamp(48px,8vw,120px)] text-[clamp(1.75rem,4.3vw,3.75rem)] leading-[1.08] tracking-[-0.035em]"
            >
              {words.map((w, i) => (
                <span key={i}>{w} </span>
              ))}
            </p>

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
