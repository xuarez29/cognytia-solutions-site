import Reveal from '../components/Reveal'
import { testimonials } from '../data/testimonials'

function Quote({ t, big }) {
  return (
    <figure className="flex h-full flex-col justify-between gap-10">
      <blockquote
        className={
          big
            ? 'text-[clamp(1.5rem,3.1vw,2.7rem)] leading-[1.18] tracking-[-0.03em]'
            : 'text-[clamp(1.1rem,1.5vw,1.3rem)] leading-[1.45] tracking-[-0.01em]'
        }
      >
        <p>«{t.quote}»</p>
      </blockquote>
      <figcaption className="flex items-center gap-4">
        <span
          className="mono flex h-11 w-11 flex-none items-center justify-center rounded-full border border-teal bg-teal-tint text-[12px] font-medium text-teal-deep"
          aria-hidden="true"
        >
          {t.initials}
        </span>
        <span className="leading-tight">
          <span className="block font-medium">{t.name}</span>
          <span className="mono mt-1 block text-[11.5px] text-ink-soft">
            {t.role} · {t.company}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  const [first, ...rest] = testimonials

  return (
    <section aria-labelledby="testimonios-titulo">
      <div className="shell">
        <div className="frame grid grid-cols-1 lg:grid-cols-12">
          <div className="pad pb-0 lg:col-span-3 lg:border-r lg:border-line lg:pb-[var(--pad)]">
            <div className="lg:sticky lg:top-[calc(var(--nav-h)+var(--pad))]">
              <p className="label mb-6">
                <span className="node" aria-hidden="true" />
                Testimonios
              </p>
              <h2 id="testimonios-titulo" className="max-w-[14ch] text-[clamp(1.6rem,2.4vw,2.1rem)] leading-[1.08] tracking-[-0.03em]">
                Lo que dicen quienes confían en nosotros
              </h2>
            </div>
          </div>

          <div className="lg:col-span-9">
            <Reveal className="pad py-[clamp(40px,6vw,88px)]">
              <Quote t={first} big />
            </Reveal>
            <div className="grid grid-cols-1 border-t border-line md:grid-cols-2">
              {rest.map((t, i) => (
                <Reveal
                  key={t.name}
                  delay={i * 0.1}
                  className={`pad border-line ${i === 0 ? 'border-b md:border-b-0 md:border-r' : ''}`}
                >
                  <Quote t={t} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
