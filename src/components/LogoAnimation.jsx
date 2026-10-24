import { useEffect, useId, useRef } from 'react'

// Logo de CognytIA animado.
// Secuencia: partículas dispersas convergen y forman los nodos → se trazan
// las conexiones → una chispa recorre el contorno y dibuja la C → barrido de
// luz, ondas en los nodos y pulsos de "corriente" que circulan sin parar.

const C_PATH =
  'M1780 405 C1600 180 1350 80 1060 82 C560 80 112 470 112 970 C112 1500 520 1880 1060 1880 C1380 1880 1620 1730 1780 1540 L1490 1260 C1380 1390 1250 1470 1080 1470 C800 1470 602 1260 602 975 C602 680 800 488 1080 488 C1250 488 1380 580 1490 690 Z'

const LINES = [
  'M740 145 C1250 128 1500 300 1638 573',
  'M612 200 C450 350 405 500 413 643',
  'M413 643 C600 420 820 350 1078 465',
  'M1078 465 C1250 340 1450 420 1638 573',
  'M413 643 C300 1100 400 1500 716 1850',
  'M112 1112 C500 1150 690 1450 716 1850',
  'M716 1850 C1000 1600 1350 1490 1722 1470',
  'M716 1850 C1100 1800 1500 1650 1722 1470',
]

// En el orden en que aparecen
const NODES = [
  { x: 1078, y: 465, filled: true },
  { x: 657, y: 153, filled: false },
  { x: 413, y: 643, filled: false },
  { x: 112, y: 1112, filled: true },
  { x: 716, y: 1850, filled: true },
  { x: 1722, y: 1470, filled: false },
  { x: 1638, y: 573, filled: false },
]

const RINGS = [NODES[0], NODES[3], NODES[4]]

const TEAL = '#3DBCB8'
const SPARK = '#1FB5B0'
const TRAIL_COLOR = '#7DD9D5'
const TRAIL = 7

// Línea de tiempo (segundos)
const START = 0.35
const NODES_AT = START + 1.25
const LINES_AT = NODES_AT + 0.75
const C_AT = LINES_AT + 0.8
const C_DUR = 1.6
const FINAL_AT = C_AT + C_DUR + 0.1
const PULSES_AT = FINAL_AT + 0.3

const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const easeOut = (t) => 1 - Math.pow(1 - t, 3)
const NS = 'http://www.w3.org/2000/svg'

export default function LogoAnimation({ className = '' }) {
  const uid = useId().replace(/:/g, '')
  const svgRef = useRef(null)
  const cRef = useRef(null)
  const headRef = useRef(null)
  const shineRef = useRef(null)
  const linesRef = useRef([])
  const particlesRef = useRef(null)
  const pulsesRef = useRef(null)
  const replayRef = useRef(() => {})

  useEffect(() => {
    const svg = svgRef.current
    const cPath = cRef.current
    const head = headRef.current
    const shine = shineRef.current
    const lines = linesRef.current
    const partG = particlesRef.current
    const pulseG = pulsesRef.current
    if (!svg || !cPath) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cLen = cPath.getTotalLength()
    const lens = lines.map((p) => p.getTotalLength())

    const circle = (r, fill, opacity) => {
      const c = document.createElementNS(NS, 'circle')
      c.setAttribute('r', r)
      c.setAttribute('fill', fill)
      c.setAttribute('opacity', opacity)
      return c
    }

    // Pulsos tipo cometa: cabeza intensa y estela que se desvanece
    const comets = lines.map(() =>
      Array.from({ length: TRAIL }, (_, j) => {
        const c = circle(18 - j * 2, j === 0 ? SPARK : TRAIL_COLOR, (1 - j / TRAIL).toFixed(2))
        pulseG.appendChild(c)
        return c
      })
    )

    let parts = []
    const makeParticles = () => {
      partG.replaceChildren()
      parts = []
      NODES.forEach(({ x, y }, i) => {
        for (let k = 0; k < 7; k++) {
          const a = Math.random() * Math.PI * 2
          const d = 500 + Math.random() * 900
          const arrive = NODES_AT + i * 0.1
          const dur = 0.9 + Math.random() * 0.5
          const el = circle((8 + Math.random() * 10).toFixed(1), k % 3 ? TEAL : SPARK, 0)
          partG.appendChild(el)
          parts.push({ el, x, y, sx: 950 + Math.cos(a) * d, sy: 1005 + Math.sin(a) * d, start: arrive - dur, dur })
        }
      })
    }

    const placeComets = (t) => {
      lines.forEach((path, i) => {
        const headPos = (t * 0.38 + i * 0.37) % 1
        comets[i].forEach((c, j) => {
          const q = path.getPointAtLength(lens[i] * Math.max(0, headPos - j * 0.018))
          c.setAttribute('cx', q.x)
          c.setAttribute('cy', q.y)
        })
      })
    }

    const showFinal = () => {
      cPath.style.strokeDashoffset = '0'
      svg.classList.add('la-nodes', 'la-lines', 'la-pulses', 'la-final')
      placeComets(0.5)
    }

    if (reduce) {
      showFinal()
      return () => pulseG.replaceChildren()
    }

    let raf = 0
    let t0 = performance.now()
    let pausedAt = null
    let flags = {}
    const once = (k, fn) => {
      if (!flags[k]) {
        flags[k] = true
        fn()
      }
    }

    const frame = (now) => {
      const t = (now - t0) / 1000

      parts.forEach((p) => {
        const u = (t - p.start) / p.dur
        if (u <= 0 || u >= 1.15) {
          p.el.setAttribute('opacity', 0)
          return
        }
        const e = easeOut(Math.min(1, u))
        p.el.setAttribute('cx', (p.sx + (p.x - p.sx) * e).toFixed(1))
        p.el.setAttribute('cy', (p.sy + (p.y - p.sy) * e).toFixed(1))
        p.el.setAttribute('opacity', (u < 0.25 ? u / 0.25 : u < 1 ? 1 : 1 - (u - 1) / 0.15).toFixed(2))
      })

      if (t >= NODES_AT) once('n', () => svg.classList.add('la-nodes'))
      if (t >= LINES_AT) once('l', () => svg.classList.add('la-lines'))

      const cp = Math.min(1, Math.max(0, (t - C_AT) / C_DUR))
      const ce = easeInOut(cp)
      cPath.style.strokeDashoffset = (1 - ce).toFixed(4)
      if (cp > 0 && cp < 1) {
        const q = cPath.getPointAtLength(cLen * ce)
        head.setAttribute('cx', q.x)
        head.setAttribute('cy', q.y)
        head.setAttribute('opacity', 1)
      } else {
        head.setAttribute('opacity', 0)
      }

      if (t >= FINAL_AT) {
        once('f', () => svg.classList.add('la-final'))
        const s = ((t - FINAL_AT) % 6) / 1.1
        shine.setAttribute('x', s <= 1 ? (-500 + 2900 * s).toFixed(0) : '-900')
      }
      if (t >= PULSES_AT) {
        once('p', () => svg.classList.add('la-pulses'))
        placeComets(t - PULSES_AT)
      }

      raf = requestAnimationFrame(frame)
    }

    const start = () => {
      if (!raf) raf = requestAnimationFrame(frame)
    }
    const stop = () => {
      cancelAnimationFrame(raf)
      raf = 0
    }

    // Pausa cuando el logo sale de pantalla para no gastar CPU
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (pausedAt !== null) t0 += performance.now() - pausedAt
        pausedAt = null
        start()
      } else {
        pausedAt = performance.now()
        stop()
      }
    })
    io.observe(svg)

    replayRef.current = () => {
      flags = {}
      svg.classList.remove('la-nodes', 'la-lines', 'la-pulses', 'la-final')
      shine.setAttribute('x', '-900')
      makeParticles()
      void svg.getBBox()
      t0 = performance.now() - START * 1000
    }

    makeParticles()
    start()

    return () => {
      stop()
      io.disconnect()
      partG.replaceChildren()
      pulseG.replaceChildren()
      svg.classList.remove('la-nodes', 'la-lines', 'la-pulses', 'la-final')
    }
  }, [])

  const glow = `la-glow-${uid}`
  const soft = `la-soft-${uid}`
  const grad = `la-grad-${uid}`
  const shineGrad = `la-shine-${uid}`
  const mask = `la-mask-${uid}`

  return (
    <button
      type="button"
      onClick={() => replayRef.current()}
      className={`logo-anim block w-full cursor-pointer bg-transparent border-0 p-0 ${className}`}
      aria-label="Logo de CognytIA. Repetir animación"
      title="Repetir animación"
    >
      <svg ref={svgRef} viewBox="0 0 1900 2010" className="w-full h-auto overflow-visible" aria-hidden="true">
        <defs>
          <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6FD6D2" />
            <stop offset=".45" stopColor={TEAL} />
            <stop offset="1" stopColor="#2A8F8C" />
          </linearGradient>
          <linearGradient id={shineGrad} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset=".5" stopColor="#fff" stopOpacity=".85" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <filter id={glow} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="14" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id={soft} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <mask id={mask}>
            <path d={C_PATH} fill="none" stroke="#fff" strokeWidth="66" strokeLinejoin="round" strokeLinecap="round" />
          </mask>
        </defs>

        <g ref={particlesRef} filter={`url(#${glow})`} />

        <g>
          {LINES.map((d, i) => (
            <path
              key={d}
              ref={(el) => (linesRef.current[i] = el)}
              d={d}
              pathLength="1"
              className="la-line"
              style={{ animationDelay: `${i * 0.08}s` }}
            />
          ))}
        </g>

        <path
          ref={cRef}
          d={C_PATH}
          pathLength="1"
          className="la-c"
          stroke={`url(#${grad})`}
          filter={`url(#${soft})`}
        />
        <circle ref={headRef} r="46" fill={SPARK} opacity="0" filter={`url(#${glow})`} />

        <g mask={`url(#${mask})`}>
          <rect ref={shineRef} x="-900" y="-100" width="360" height="2300" fill={`url(#${shineGrad})`} transform="skewX(-18)" />
        </g>

        <g ref={pulsesRef} className="la-pulse-group" filter={`url(#${glow})`} />

        <g>
          {RINGS.map((n, i) => (
            <circle key={i} className="la-ring" cx={n.x} cy={n.y} r="80" style={{ animationDelay: `${i * 0.9}s` }} />
          ))}
        </g>

        <g filter={`url(#${soft})`}>
          {NODES.map((n, i) => (
            <circle
              key={i}
              className={`la-node ${n.filled ? 'la-node-filled' : 'la-node-hollow'}`}
              cx={n.x}
              cy={n.y}
              r={n.filled ? 80 : 72}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </g>
      </svg>
    </button>
  )
}
