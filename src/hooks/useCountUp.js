import { useState, useEffect, useRef } from 'react'

export function useCountUp(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start)
  const [isRunning, setIsRunning] = useState(false)
  const frameRef = useRef(null)
  const startTimeRef = useRef(null)

  const run = () => {
    if (isRunning) return
    setIsRunning(true)
    startTimeRef.current = null

    const step = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * (end - start) + start))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step)
      }
    }
    frameRef.current = requestAnimationFrame(step)
  }

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return { count, run }
}
