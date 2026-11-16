import { C_PATH, LINES, NODES } from '../data/logoGeometry'

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
        <path key={d} d={d} stroke="#00C4BA" strokeWidth="16" strokeLinecap="round" />
      ))}
      <path d={C_PATH} stroke="#00C4BA" strokeWidth="66" strokeLinejoin="round" strokeLinecap="round" />
      {NODES.map((n) =>
        n.filled ? (
          <circle key={`${n.x}-${n.y}`} cx={n.x} cy={n.y} r="80" fill="#00C4BA" />
        ) : (
          <circle key={`${n.x}-${n.y}`} cx={n.x} cy={n.y} r="72" fill="#fff" stroke="#00C4BA" strokeWidth="20" />
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
