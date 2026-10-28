import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import { useScrolled } from '../hooks/useScrolled'
import { navLinks } from '../data/navigation'

export default function Navbar() {
  const scrolled = useScrolled(20)
  const [open, setOpen] = useState(false)
  const hamburgerRef = useRef(null)
  const drawerRef = useRef(null)
  const closeButtonRef = useRef(null)

  const handleNav = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const closeMenu = () => {
    setOpen(false)
    hamburgerRef.current?.focus()
  }

  // Escape key + focus trap
  useEffect(() => {
    if (!open) return

    // Auto-focus close button when menu opens
    closeButtonRef.current?.focus()

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu()
        return
      }
      if (e.key === 'Tab') {
        const focusable = drawerRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 bg-white/75 backdrop-blur-[12px] border-b border-black/[0.06] ${
          scrolled
            ? 'shadow-[0_2px_16px_rgba(13,31,31,0.07)]'
            : 'shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group transition-all duration-300 hover:-translate-y-px hover:opacity-90"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <img
              src="/favicon-256x256.png"
              alt="Cognytia Solutions"
              className="h-8 w-8 object-contain"
            />
            <span
              className="font-heading font-semibold text-[16px] tracking-tight hidden sm:block"
              style={{ color: '#606B77' }}
            >
              Cognyt<span className="text-brand-primary">IA</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  // Los enlaces a otras páginas (p. ej. /cursos/…) navegan normal
                  if (!link.href.startsWith('#')) return
                  e.preventDefault(); handleNav(link.href)
                }}
                className="text-[14px] font-body text-brand-text-secondary hover:text-brand-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); handleNav('#contacto') }}
              className="btn-outline text-[13px] px-5 py-2.5"
            >
              Hablemos
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            className="md:hidden p-2 rounded-lg text-brand-text hover:text-brand-primary transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-brand-text/20 backdrop-blur-sm z-50 md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              ref={drawerRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
              className="fixed right-0 top-0 bottom-0 w-72 bg-white z-50 md:hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-[rgba(61,188,184,0.12)]">
                <img
                  src="/favicon-256x256.png"
                  alt="Cognytia Solutions"
                  className="h-7 w-7 object-contain"
                />
                <button
                  ref={closeButtonRef}
                  onClick={closeMenu}
                  className="p-2 text-brand-text-secondary hover:text-brand-primary transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 px-4 pt-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                    onClick={(e) => {
                      if (!link.href.startsWith('#')) { setOpen(false); return }
                      e.preventDefault(); handleNav(link.href)
                    }}
                    className="px-4 py-3 rounded-lg text-brand-text hover:text-brand-primary hover:bg-[#F7FAFA] transition-all duration-300 font-body text-[15px]"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto px-6 pb-8">
                <a
                  href="#contacto"
                  onClick={(e) => { e.preventDefault(); handleNav('#contacto') }}
                  className="btn-primary w-full justify-center"
                >
                  Hablemos
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
