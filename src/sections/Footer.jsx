import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import { navLinks, socials } from '../data/navigation'

// Mapa de id → componente de ícono (para mantener Lucide fuera del archivo de datos)
const socialIcons = { linkedin: Linkedin }

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-white">
      {/* Top teal divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(61,188,184,0.2)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <img
              src="/favicon-256x256.png"
              alt="Cognytia Solutions"
              className="h-9 w-9 object-contain"
            />
            <div>
              <p className="font-heading font-semibold text-[14px] leading-tight" style={{ color: '#606B77' }}>
                Cognyt<span className="text-brand-primary">IA</span> Solutions
              </p>
              <p className="text-[12px] text-brand-text-secondary font-mono">
                Especialistas en integración de IA
              </p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  // Los enlaces a otras páginas (p. ej. /cursos/…) navegan normal
                  if (!link.href.startsWith('#')) return
                  e.preventDefault(); handleNav(link.href)
                }}
                className="text-[13px] text-brand-text-secondary hover:text-brand-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => {
              const Icon = socialIcons[s.id]
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg border border-[rgba(61,188,184,0.2)] flex items-center justify-center text-brand-text-secondary hover:text-brand-primary hover:border-brand-primary transition-all duration-300"
                >
                  <Icon size={14} strokeWidth={1.5} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-[rgba(61,188,184,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="text-[12px] text-brand-text-secondary">
            © 2026 CognytIA Solutions. Hecho en México 🇲🇽
          </p>
          <p className="text-[11px] text-brand-text-secondary/60 font-mono">
            v1.0 · Diseño propio
          </p>
        </div>
      </div>
    </footer>
  )
}
