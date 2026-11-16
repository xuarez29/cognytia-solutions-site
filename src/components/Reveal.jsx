import { useRef } from 'react'
import { useInView } from '../hooks/useInView'

/** Aparición suave al entrar en pantalla. Sin JS el contenido queda visible. */
export default function Reveal({ as = 'div', delay = 0, className = '', children, ...rest }) {
  const Tag = as
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`}
      style={delay ? { '--d': `${delay}s` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
