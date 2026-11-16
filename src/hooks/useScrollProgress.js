import { useEffect, useRef } from 'react'

/**
 * Llama a `onProgress(p)` mientras el elemento cruza la pantalla.
 * p va de 0 (su borde superior toca el borde inferior de la ventana)
 * a 1 (su borde inferior sale por arriba). Solo trabaja cuando el
 * elemento está visible y se limita a un cálculo por cuadro.
 */
export function useScrollProgress(ref, onProgress) {
  const cb = useRef(onProgress)

  useEffect(() => {
    cb.current = onProgress
  }, [onProgress])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    let active = false

    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const p = (vh - r.top) / (vh + r.height)
      cb.current(Math.min(1, Math.max(0, p)))
    }
    const request = () => {
      if (active && !raf) raf = requestAnimationFrame(update)
    }
    const io = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting
      request()
    })
    io.observe(el)
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    update()

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
    }
  }, [ref])
}
