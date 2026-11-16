import { C_PATH, LINES, NODES } from '../data/logoGeometry'

// Turquesa del logo: más oscuro que el acento Electric Teal para que
// el isotipo tenga peso sobre el lienzo claro.
const LOGO = '#008F87'
const LOGO_DARK = '#007C78'

/** Isotipo estático de CognytIA, con el mismo trazo que la animación del hero. */
export default function LogoMark({ className = '', title }) {
  return (
    <svg
      viewBox="-40 -20 1980 2050"
      className={className}
      fill="none"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {LINES.map((d) => (
        <path key={d} d={d} stroke={LOGO_DARK} strokeWidth="16" strokeLinecap="round" />
      ))}
      <path d={C_PATH} stroke={LOGO} strokeWidth="66" strokeLinejoin="round" strokeLinecap="round" />
      {NODES.map((n) =>
        n.filled ? (
          <circle key={`${n.x}-${n.y}`} cx={n.x} cy={n.y} r="80" fill={LOGO} />
        ) : (
          <circle key={`${n.x}-${n.y}`} cx={n.x} cy={n.y} r="72" fill="#fff" stroke={LOGO} strokeWidth="20" />
        )
      )}
    </svg>
  )
}

/** Logotipo: isotipo + "CognytIA" con la tipografía y colores originales. */
export function Wordmark({ className = '' }) {
  return (
    <span className={`wordmark ${className}`}>
      Cognyt<b>IA</b>
    </span>
  )
}
