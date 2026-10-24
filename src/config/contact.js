/**
 * contact.js — Datos de contacto del sitio en un solo lugar.
 *
 * Cada valor se puede sobrescribir con su variable de entorno en Vercel
 * (Settings → Environment Variables). Si la variable falta o está vacía,
 * se usa el valor por defecto, así WhatsApp y el formulario nunca quedan
 * con enlaces rotos. Todos estos valores ya son públicos en el sitio.
 */

export const EMAIL = 'hola@cognytia.mx'

export const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER?.trim() || '524425955891'

export const FORMSPREE_ID =
  import.meta.env.VITE_FORMSPREE_ID?.trim() || 'xpqjjend'
