import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data/navigation'
import { EMAIL } from '../config/contact'
import LogoMark, { Wordmark } from './LogoMark'
import { ArrowRight, ArrowUpRight } from './Icons'

const sectionIds = navLinks.filter((l) => l.href.startsWith('#')).map((l) => l.href.slice(1))

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const progressRef = useRef(null)
  const toggleRef = useRef(null)
  const sheetRef = useRef(null)

  // Barra de avance de lectura
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${p.toFixed(4)})`
    }
    const request = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    update()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
    }
  }, [])

  // Sección activa: la que cruza el centro de la pantalla
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          if (entry.isIntersecting) setActive(id)
          else setActive((prev) => (prev === id ? '' : prev))
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  // Menú móvil: bloquea el scroll, cierra con Escape y mantiene el foco dentro
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return
      const items = [toggleRef.current, ...(sheetRef.current?.querySelectorAll('a[href], button') ?? [])]
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-teal-deep focus:px-4 focus:py-3 focus:text-white"
      >
        Saltar al contenido
      </a>

      <header className="nav">
        <div className="shell h-full">
          <div className="frame flex h-full items-stretch">
            <a
              href="#inicio"
              className="flex items-center gap-2.5 pad-x lg:border-r border-line"
              aria-label="CognytIA Solutions — inicio"
              onClick={() => setOpen(false)}
            >
              <LogoMark className="h-8 w-8" />
              <Wordmark className="text-[19px]" />
            </a>

            <nav className="ml-auto hidden lg:flex items-stretch" aria-label="Principal">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  aria-current={link.href === `#${active}` ? 'true' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#contacto"
              className="hidden lg:flex items-center gap-4 ml-4 px-6 bg-teal-deep text-white mono !text-[12px] uppercase !tracking-[0.08em] font-medium transition-colors duration-300 hover:bg-teal hover:text-teal-deep [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-1"
            >
              Hablemos
              <ArrowRight />
            </a>

            <button
              ref={toggleRef}
              type="button"
              className="ml-auto flex lg:hidden items-center gap-3 pad-x border-l border-line mono !text-[12px] uppercase !tracking-[0.08em] font-medium"
              aria-expanded={open}
              aria-controls="menu-movil"
              onClick={() => setOpen((v) => !v)}
            >
              <span>{open ? 'Cerrar' : 'Menú'}</span>
              <span className="relative block h-3 w-5" aria-hidden="true">
                <span
                  className={`absolute left-0 h-px w-5 bg-ink transition-transform duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0.5'}`}
                />
                <span
                  className={`absolute left-0 h-px w-5 bg-ink transition-transform duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-2.5'}`}
                />
              </span>
            </button>
          </div>
        </div>
        <div ref={progressRef} className="nav-progress" aria-hidden="true" />
      </header>

      {/* Menú móvil y tablet: hoja a pantalla completa */}
      <div
        ref={sheetRef}
        id="menu-movil"
        className={`menu-sheet lg:hidden ${open ? 'is-open' : ''}`}
        inert={!open}
      >
        <nav className="shell flex-1" aria-label="Menú">
          <ul className="frame h-full">
            {navLinks.map((link, i) => (
              <li key={link.href} className="border-b border-line">
                <a
                  href={link.href}
                  className="menu-item flex items-baseline gap-5 pad-x py-[clamp(14px,2.6svh,22px)]"
                  style={{ '--i': i }}
                  onClick={() => setOpen(false)}
                >
                  <span className="mono text-ink-soft">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[clamp(1.9rem,8.5vw,3rem)] leading-none tracking-[-0.04em]">{link.label}</span>
                  {!link.href.startsWith('#') && <ArrowUpRight className="ml-auto self-center text-ink-soft" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="shell">
          <div className="frame pad flex flex-col gap-5 border-t border-line">
            <a href="#contacto" className="btn btn--solid w-full" onClick={() => setOpen(false)}>
              Hablemos
              <ArrowRight />
            </a>
            <p className="mono text-ink-soft flex flex-wrap justify-between gap-x-6 gap-y-1">
              <a href={`mailto:${EMAIL}`} className="underline underline-offset-4">{EMAIL}</a>
              <span>IA con propósito.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
