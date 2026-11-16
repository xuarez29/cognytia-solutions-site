import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Entrada para el prerender (scripts/prerender.js). Debe producir el mismo
// árbol que main.jsx para que React pueda hidratarlo en el navegador.
// <Analytics /> no se incluye: no pinta nada en el HTML.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
