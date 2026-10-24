/**
 * analytics.js — Integración ligera de Google Analytics 4
 *
 * Uso:
 *   initGA()          → Carga gtag.js y configura la propiedad GA4
 *   trackEvent(...)   → Envía eventos personalizados (conversiones, CTAs, etc.)
 *
 * El script solo se carga en www.cognytia.mx / cognytia.mx; en desarrollo
 * local y en las vistas previas de Vercel no se envía nada.
 */

// El ID de medición de GA4 es público (aparece en el código de cualquier
// página que use GA). Se puede sobrescribir con VITE_GA_MEASUREMENT_ID.
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-8B3FXGZX7J'

// Solo medir en el dominio real: así las vistas previas de Vercel y el
// servidor local (npm run dev) no ensucian los reportes.
const PRODUCTION_HOSTS = ['www.cognytia.mx', 'cognytia.mx']

// ── Helpers internos ────────────────────────────────────────────────

// gtag.js solo procesa el objeto `arguments` original; un arreglo
// (por ejemplo con ...args) se ignora y GA4 no registra nada.
function gtag() {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(arguments)
}

// ── Inicialización ──────────────────────────────────────────────────

/**
 * Carga el script de gtag.js e inicializa la propiedad GA4.
 * Llamar una sola vez al arrancar la app (main.jsx).
 */
export function initGA() {
  if (!GA_ID || !PRODUCTION_HOSTS.includes(window.location.hostname)) return

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
