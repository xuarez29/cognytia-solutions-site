import LogoAnimation from '../components/LogoAnimation'
import { ArrowDown, ArrowRight, Replay } from '../components/Icons'

const index = [
  { n: '01', label: 'Desarrollo web y aplicaciones', href: '#servicios' },
  { n: '02', label: 'Integraciones con IA', href: '#servicios' },
  { n: '03', label: 'Automatización de procesos', href: '#servicios' },
  { n: '04', label: 'Notion a la medida', href: '#notion' },
]

export default function Hero() {
  return (
    <section id="inicio" className="pt-[var(--nav-h)]" aria-labelledby="hero-titulo">
      <div className="shell">
        <div className="frame grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[1fr_auto] lg:min-h-[calc(100svh-var(--nav-h))]">
          {/* ── Lámina del isotipo: la animación original, presentada como plano ── */}
          <div className="blueprint relative order-1 flex items-center justify-center overflow-hidden border-b border-line lg:order-2 lg:col-span-5 lg:border-b-0 lg:border-l min-h-[min(74vw,400px)] lg:min-h-0">
            <span className="bracket bracket--tl" />
            <span className="bracket bracket--tr" />
            <span className="bracket bracket--bl" />
            <span className="bracket bracket--br" />

            {/* Geometría de construcción */}
            <svg
              className="absolute inset-0 h-full w-full text-ink"
              viewBox="0 0 400 400"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              aria-hidden="true"
            >
              <g stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.16">
                <circle cx="200" cy="200" r="168" />
                <circle cx="200" cy="200" r="118" strokeDasharray="3 5" />
                <path d="M200 6v388M6 200h388" strokeDasharray="3 5" />
                <path d="M62 62l276 276M338 62 62 338" opacity="0.6" />
              </g>
            </svg>

            <p className="mono absolute left-9 top-[15px] text-[10.5px] uppercase tracking-[0.1em] text-ink-soft">
              Fig. 01 — Isotipo
            </p>
            <p className="mono absolute right-9 top-[15px] hidden text-[10.5px] uppercase tracking-[0.1em] text-ink-soft xs:block">
              7 nodos · 8 conexiones
            </p>
            <p className="mono absolute bottom-[15px] left-9 hidden text-[10.5px] uppercase tracking-[0.1em] text-ink-soft xs:block">
              20.59° N · 100.39° O
            </p>
            <p className="mono absolute bottom-[15px] right-9 flex items-center gap-2 text-[10.5px] uppercase tracking-[0.1em] text-ink-soft">
              <Replay width="12" height="12" />
              Toca para repetir
            </p>

            <div className="relative w-[46%] max-w-[230px] py-14 lg:w-[58%] lg:max-w-[360px] lg:py-0">
              <LogoAnimation />
            </div>
          </div>

          {/* ── Texto ── */}
          <div className="order-2 flex flex-col justify-between gap-12 pad py-10 lg:order-1 lg:col-span-7 lg:gap-10 lg:py-[clamp(28px,5svh,56px)]">
            <div className="fade-in flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
              <p className="label">
                <span className="node" aria-hidden="true" />
                Soluciones digitales e inteligencia artificial
              </p>
              <p className="label hidden sm:inline-flex">Querétaro, México</p>
            </div>

            <h1 id="hero-titulo" className="display">
              <span className="sr-only">CognytIA Solutions: </span>
              <span className="line-mask" style={{ '--d': '0.1s' }}>
                <span>IA con </span>
              </span>
              <span className="line-mask" style={{ '--d': '0.22s' }}>
                <span>
                  propósito<span className="text-teal">.</span>
                </span>
              </span>
            </h1>

            <div className="fade-in flex flex-col gap-8" style={{ '--d': '0.5s' }}>
              <div>
                <p className="max-w-[26ch] text-[clamp(1.3rem,2.1vw,1.75rem)] leading-[1.18] tracking-[-0.025em]">
                  Transformamos los desafíos de tu negocio en soluciones inteligentes.
                </p>
                <p className="lead mt-4 max-w-[48ch]">
                  Desarrollamos aplicaciones, integramos inteligencia artificial y automatizamos procesos para
                  ayudarte a trabajar mejor, crecer y convertir tus ideas en realidad.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
                <a href="#contacto" className="btn btn--solid">
                  Hablemos de tu proyecto
                  <ArrowRight />
                </a>
                <a href="#servicios" className="text-link">
                  Explorar soluciones
                  <ArrowDown />
                </a>
              </div>
            </div>
          </div>

          {/* ── Índice de servicios ── */}
          <nav
            className="relative order-3 grid grid-cols-2 border-t border-line lg:col-span-12 lg:grid-cols-4"
            aria-label="Servicios"
          >
            <span className="joint" style={{ left: 0, top: 0 }} />
            {index.map((item, i) => (
              <a
                key={item.n}
                href={item.href}
                className={`group flex min-h-[92px] flex-col justify-between gap-4 px-[var(--pad)] py-4 transition-colors duration-500 hover:bg-panel lg:min-h-[104px] lg:py-5 border-line ${
                  i % 2 ? '' : 'border-r'
                } ${i < 2 ? 'border-b lg:border-b-0' : ''} ${i < 3 ? 'lg:border-r' : 'lg:border-r-0'}`}
              >
                <span className="flex items-center justify-between">
                  <span className="mono text-ink-soft">{item.n}</span>
                  <ArrowDown className="text-ink-mute transition-transform duration-300 group-hover:translate-y-1 group-hover:text-ink" />
                </span>
                <span className="text-[15px] leading-tight tracking-[-0.01em] sm:text-[17px]">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}
