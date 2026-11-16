import Reveal from './Reveal'

/** Encabezado de sección: etiqueta mono con nodo, titular editorial y bajada. */
export default function SectionHead({ label, title, children, className = '', id }) {
  // El punto final del titular va en teal, como en el hero
  const dot = title.endsWith('.')
  return (
    <Reveal as="header" className={className}>
      <p className="label mb-6">
        <span className="node" aria-hidden="true" />
        {label}
      </p>
      <h2 id={id} className="h2 max-w-[16ch]">
        {dot ? title.slice(0, -1) : title}
        {dot && <span className="text-teal">.</span>}
      </h2>
      {children && <p className="lead mt-6 max-w-[46ch]">{children}</p>}
    </Reveal>
  )
}
