/**
 * analytics.js — Integración ligera de Google Analytics 4
 *
 * Uso:
 *   initGA()          → Carga gtag.js y configura la propiedad GA4
 *   trackEvent(...)   → Envía eventos personalizados (conversiones, CTAs, etc.)
 *
 * El script NO se carga si VITE_GA_MEASUREMENT_ID está vacío,
 * lo que evita errores en desarrollo y staging sin ID configurado.
 */

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

// ── Helpers internos ────────────────────────────────────────────────

function gtag(...args) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(args)
}

// ── Inicialización ──────────────────────────────────────────────────

/**
 * Carga el script de gtag.js e inicializa la propiedad GA4.
 * Llamar una sola vez al arrancar la app (main.jsx).
 */
export function initGA() {
  if (!GA_ID) return

  // Inyectar script de forma async — no bloquea el render
  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  script.async = true
  document.head.appendChild(script)

  // Exponer gtag globalmente para que el script externo lo encuentre
  window.gtag = gtag

  gtag('js', new Date())
  gtag('config', GA_ID, {
    // Esperar a que el usuario interactúe antes de enviar datos de página
    // (útil si en el futuro se agrega consentimiento de cookies)
    send_page_view: true,
  })
}

// ── Eventos personalizados ──────────────────────────────────────────

/**
 * Envía un evento personalizado a GA4.
 *
 * @param {string} eventName  - Nombre del evento (ej. 'cta_click')
 * @param {object} params     - Parámetros adicionales (ej. { section: 'hero', label: 'Ver qué hacemos' })
 *
 * Ejemplos de uso:
 *   trackEvent('cta_click', { section: 'hero', label: 'Ver qué hacemos' })
 *   trackEvent('form_submit', { form_type: 'contacto' })
 *   trackEvent('whatsapp_click')
 */
export function trackEvent(eventName, params = {}) {
  if (!GA_ID || typeof window.gtag !== 'function') return
  window.gtag('event', eventName, params)
}
