import LogoMark from '../components/LogoMark'
import { ArrowUpRight, LinkedIn } from '../components/Icons'
import { navLinks, socials } from '../data/navigation'
import { EMAIL, WHATSAPP_NUMBER } from '../config/contact'
import { trackEvent } from '../lib/analytics'

const socialIcons = { linkedin: LinkedIn }

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell">
        <div className="frame">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="flex flex-col justify-between gap-10 pad lg:col-span-5 lg:py-[clamp(32px,4vw,56px)]">
              <LogoMark className="h-14 w-14" />
              <div>
                <p className="text-[clamp(1.8rem,3vw,2.6rem)] leading-none tracking-[-0.04em]">
                  IA con propósito<span className="text-teal">.</span>
                </p>
                <p className="mono mt-4 text-ink-soft">Especialistas en integración de IA</p>
              </div>
            </div>

            <nav className="border-t border-line pad lg:col-span-3 lg:border-l lg:border-t-0 lg:py-[clamp(32px,4vw,56px)]" aria-label="Pie de página">
              <p className="label mb-6">Navegación</p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="inline-flex items-center gap-2 underline-offset-4 hover:underline">
                      {link.label}
                      {!link.href.startsWith('#') && <ArrowUpRight width="13" height="13" className="text-ink-soft" />}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-line pad lg:col-span-4 lg:border-l lg:border-t-0 lg:py-[clamp(32px,4vw,56px)]">
              <p className="label mb-6">Contacto</p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href={`mailto:${EMAIL}`} className="underline-offset-4 hover:underline">
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('whatsapp_click', { source: 'footer' })}
                    className="underline-offset-4 hover:underline"
                  >
                    WhatsApp
                  </a>
                </li>
                {socials.map((s) => {
                  const Icon = socialIcons[s.id]
                  return (
                    <li key={s.id}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 underline-offset-4 hover:underline"
                      >
                        {Icon && <Icon width="14" height="14" />}
                        {s.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Logotipo a todo lo ancho */}
          <div className="border-t border-line px-[var(--pad)] py-[clamp(12px,2vw,28px)] [container-type:inline-size]" aria-hidden="true">
            <p className="wordmark whitespace-nowrap text-[19vw] leading-[1.02] tracking-[-0.045em] [font-size:24.3cqw]">
              Cognyt<b>IA</b>
            </p>
          </div>

          <div className="mono flex flex-col justify-between gap-2 border-t border-line px-[var(--pad)] pb-24 pt-5 text-[11.5px] text-ink-soft sm:flex-row sm:items-center sm:pb-5 sm:pr-28">
            <p>© 2026 CognytIA Solutions. Hecho en México 🇲🇽</p>
            <p>v2.0 · Diseño propio</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
