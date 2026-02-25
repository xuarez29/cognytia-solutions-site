import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useMediaQuery } from '../hooks/useMediaQuery'

// Animated SVG: nodes connecting, inspired by the logo
function NodeNetwork() {
  const nodes = [
    { cx: 300, cy: 80, r: 6 },
    { cx: 160, cy: 160, r: 5 },
    { cx: 380, cy: 200, r: 4 },
    { cx: 80, cy: 280, r: 7 },
    { cx: 260, cy: 300, r: 5 },
    { cx: 420, cy: 340, r: 4 },
    { cx: 140, cy: 390, r: 6 },
    { cx: 320, cy: 430, r: 5 },
    { cx: 60, cy: 430, r: 4 },
    { cx: 440, cy: 150, r: 3 },
  ]

  const paths = [
    { d: 'M 300 80 L 160 160', delay: 0 },
    { d: 'M 300 80 L 380 200', delay: 1 },
    { d: 'M 300 80 L 440 150', delay: 2 },
    { d: 'M 160 160 L 80 280', delay: 1 },
    { d: 'M 160 160 L 260 300', delay: 2 },
    { d: 'M 380 200 L 260 300', delay: 3 },
    { d: 'M 380 200 L 420 340', delay: 2 },
    { d: 'M 80 280 L 140 390', delay: 3 },
    { d: 'M 80 280 L 60 430', delay: 4 },
    { d: 'M 260 300 L 320 430', delay: 3 },
    { d: 'M 420 340 L 320 430', delay: 4 },
    { d: 'M 140 390 L 60 430', delay: 5 },
    { d: 'M 140 390 L 320 430', delay: 5 },
  ]

  return (
    <svg
      viewBox="0 0 500 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Lines */}
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          stroke="#3DBCB8"
          strokeWidth="1.5"
          strokeLinecap="round"
          className={`path-draw path-draw-delay-${(p.delay % 5) + 1}`}
          style={{ opacity: 0 }}
        />
      ))}

      {/* Secondary faint lines */}
      <path d="M 300 80 L 260 300" stroke="#3DBCB8" strokeWidth="1" strokeLinecap="round" opacity="0.2" className="path-draw path-draw-delay-4"/>
      <path d="M 160 160 L 420 340" stroke="#3DBCB8" strokeWidth="1" strokeLinecap="round" opacity="0.15" className="path-draw path-draw-delay-5"/>

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.cx} cy={n.cy} r={n.r + 5}
            fill="#3DBCB8" opacity="0.06"
            className={`node-appear node-delay-${(i % 7) + 1}`}
          />
          <circle
            cx={n.cx} cy={n.cy} r={n.r}
            fill="#3DBCB8"
            className={`node-appear node-delay-${(i % 7) + 1}`}
          />
        </g>
      ))}

      {/* Central highlight node */}
      <circle cx="260" cy="300" r="9" fill="#3DBCB8" opacity="0.15" className="node-appear node-delay-3"/>
      <circle cx="260" cy="300" r="5" fill="#3DBCB8" className="node-appear node-delay-3"/>
      <circle cx="260" cy="300" r="2" fill="#0A2E2E" className="node-appear node-delay-3"/>
    </svg>
  )
}

export default function Hero() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  const scrollToServices = () => {
    document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Subtle background dot grid */}
      <div className="absolute inset-0 dot-grid-bg opacity-60 pointer-events-none" />

      {/* Teal gradient blob — top left */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(61,188,184,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Text */}
          <div>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(61,188,184,0.25)] bg-[rgba(61,188,184,0.04)] mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary inline-block" />
              <span className="text-[12px] font-mono text-brand-primary tracking-wide">
                Especialistas en integración de IA
              </span>
            </motion.div>

            {/* Logo hero */}
            <motion.img
              src="/logo-hero.png"
              alt="Cognytia Solutions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              className="w-[90px] md:w-[110px] h-auto object-contain mb-10"
            />

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="font-heading font-bold mb-6 leading-[1.1]"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', letterSpacing: '-0.03em', color: '#606B77' }}
            >
              Cognyt<span className="text-brand-primary">IA</span> Solutions.{' '}
              <span
                className="text-gradient-teal font-medium block mt-3"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)', letterSpacing: '-0.01em' }}
              >
                IA con Propósito
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
              className="text-brand-text-secondary text-[16px] leading-relaxed mb-10 max-w-lg"
            >
              Desarrollamos soluciones web, integramos inteligencia artificial y
              automatizamos procesos para que emprendedores y PyMEs crezcan con propósito.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button onClick={scrollToServices} className="btn-primary px-7 py-3.5 text-[14px]">
                Ver qué hacemos
                <ArrowRight size={15} />
              </button>
              <button
                onClick={scrollToContact}
                className="btn-ghost text-[14px] group"
              >
                Agendar llamada
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </motion.div>

            {/* Social proof hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {['#0A2E2E', '#1A4A4A', '#3DBCB8'].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center"
                    style={{ background: c, zIndex: 3 - i }}
                  >
                    <span className="text-white text-[9px] font-medium">
                      {['F', 'S', 'P'][i]}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-brand-text-secondary">
                IA y automatización al alcance de tu negocio.
              </p>
            </motion.div>
          </div>

          {/* Right — Node animation (solo desktop) */}
          {isDesktop && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-[480px] aspect-square">
                {/* Background circle glow */}
                <div
                  className="absolute inset-8 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(61,188,184,0.05) 0%, transparent 70%)',
                  }}
                />
                <NodeNetwork />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-brand-text-secondary hover:text-brand-primary transition-colors"
        aria-label="Scroll hacia abajo"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}
