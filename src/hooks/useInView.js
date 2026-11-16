import { useEffect, useState } from 'react'

/**
 * Devuelve true cuando el elemento entra en pantalla.
 * Con `once` (por defecto) se queda en true y deja de observar.
 */
export function useInView(ref, { once = true, rootMargin = '0px 0px -8% 0px', threshold = 0.08 } = {}) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) io.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { rootMargin, threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [ref, once, rootMargin, threshold])

  return inView
}
