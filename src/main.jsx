import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'

// ── Fuentes auto-hospedadas (sin petición a Google) ─────────────────
import '@fontsource-variable/dm-sans/wght.css'         // normal: 100–900
import '@fontsource-variable/dm-sans/wght-italic.css'  // italic: 100–900
import '@fontsource-variable/inter/wght.css'            // normal: 100–900
import '@fontsource-variable/jetbrains-mono/wght.css'   // normal: 100–800

import './index.css'
import App from './App.jsx'
import { initGA } from './lib/analytics'

// Inicializa GA4 (no-op si VITE_GA_MEASUREMENT_ID está vacío)
initGA()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
)
