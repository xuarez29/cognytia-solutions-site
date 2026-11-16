import { trackEvent } from '../lib/analytics'
import { WHATSAPP_NUMBER } from '../config/contact'
import { WhatsApp } from './Icons'

const WHATSAPP_MESSAGE = 'Hola, me interesa hablar sobre un proyecto con Cognytia.'

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      onClick={() => trackEvent('whatsapp_click', { source: 'floating_button' })}
      className="fade-in group fixed bottom-4 right-4 z-40 flex h-[52px] items-center overflow-hidden rounded-[2px] border border-white/25 bg-teal-deep text-white shadow-[0_6px_24px_rgba(10,46,46,0.28)] transition-colors duration-300 hover:bg-teal hover:text-teal-deep sm:bottom-6 sm:right-6"
      style={{ '--d': '1.6s' }}
    >
      <span className="mono max-w-0 overflow-hidden whitespace-nowrap text-[12px] uppercase tracking-[0.08em] opacity-0 transition-all duration-500 group-hover:max-w-[220px] group-hover:pl-5 group-hover:opacity-100 group-focus-visible:max-w-[220px] group-focus-visible:pl-5 group-focus-visible:opacity-100">
        ¿Necesitas ayuda?
      </span>
      <span className="flex h-[52px] w-[52px] flex-none items-center justify-center text-teal transition-colors duration-300 group-hover:text-teal-deep">
        <WhatsApp />
      </span>
    </a>
  )
}
