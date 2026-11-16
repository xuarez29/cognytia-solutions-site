import Reveal from './Reveal'

/** Encabezado de sección: etiqueta mono con nodo, titular editorial y bajada. */
export default function SectionHead({ label, title, children, className = '', id }) {
  return (
    <Reveal as="header" className={className}>
      <p className="label mb-6">
        <span className="node" aria-hidden="true" />
        {label}
      </p>
      <h2 id={id} className="h2 max-w-[16ch]">
        {title}
      </h2>
      {children && <p className="lead mt-6 max-w-[46ch]">{children}</p>}
    </Reveal>
  )
}
