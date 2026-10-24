import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import LogoAnimation from '../components/LogoAnimation'

export default function Hero() {
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
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="order-2 lg:order-1">
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

          {/* Right — Logo animado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="order-1 lg:order-2 relative flex items-center justify-start lg:justify-center"
          >
            <div className="relative w-[170px] sm:w-[210px] lg:w-full lg:max-w-[460px] aspect-square flex items-center justify-center">
              {/* Halo */}
              <div
                className="absolute -inset-[12%] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(61,188,184,0.13) 0%, rgba(61,188,184,0.04) 45%, transparent 70%)' }}
              />
              {/* Órbitas (solo desktop) */}
              <div className="hidden lg:block absolute inset-0 rounded-full border border-[rgba(61,188,184,0.14)] pointer-events-none" />
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 90, ease: 'linear' }}
                className="hidden lg:block absolute -inset-[7%] rounded-full border border-dashed border-[rgba(61,188,184,0.22)] pointer-events-none motion-reduce:animate-none"
              >
                <span className="absolute top-[14%] right-[13%] w-2 h-2 rounded-full bg-brand-primary/60" />
                <span className="absolute bottom-[9%] left-[22%] w-1.5 h-1.5 rounded-full bg-brand-primary/40" />
              </motion.div>
              <LogoAnimation className="relative w-[86%]" />
            </div>
          </motion.div>
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
