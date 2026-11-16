import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'

// ── Fuentes auto-hospedadas (sin petición a Google) ─────────────────
import '@fontsource-variable/dm-sans/wght.css'        // DM Sans: logotipo, títulos y texto
import '@fontsource-variable/jetbrains-mono/wght.css' // JetBrains Mono: etiquetas técnicas

import './index.css'
import App from './App.jsx'
import { initGA } from './lib/analytics'

// Inicializa GA4 (solo mide en el dominio de producción)
initGA()

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>
)

// `npm run build` deja el HTML ya renderizado dentro de #root (ver
// scripts/prerender.js); en ese caso React lo hidrata. En desarrollo,
// o si el prerender no corrió, se monta desde cero.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
