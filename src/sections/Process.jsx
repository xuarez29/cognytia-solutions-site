import { motion } from 'framer-motion'
import FadeUp from '../components/FadeUp'
import { steps } from '../data/process'

export default function Process() {
  return (
    <section id="proceso" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeUp className="mb-16">
          <span className="font-mono text-[11px] text-brand-primary tracking-widest uppercase mb-3 block">
            Proceso
          </span>
          <h2 className="section-title">Nuestro proceso</h2>
          <p className="text-brand-text-secondary text-[15px] max-w-md mt-2">
            Cuatro pasos que convierten una idea en un producto que funciona.
          </p>
        </FadeUp>

        {/* Steps — desktop horizontal, mobile vertical */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
              className="h-full bg-gradient-to-r from-transparent via-[rgba(61,188,184,0.3)] to-transparent origin-left"
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 + i * 0.12 }}
                className="relative flex flex-col gap-4"
              >
                {/* Step number circle */}
                <div className="relative flex items-center gap-4 lg:flex-col lg:items-start">
                  <div className="relative flex-shrink-0">
                    {/* Big background number */}
                    <span
                      className="absolute -top-3 -left-2 font-heading font-light select-none pointer-events-none"
                      style={{
                        fontSize: '5rem',
                        lineHeight: 1,
                        color: 'rgba(61,188,184,0.06)',
                        letterSpacing: '-0.04em',
                      }}
                    >
                      {step.number}
                    </span>
                    {/* Circle indicator */}
                    <div className="relative w-10 h-10 rounded-full border-2 border-[rgba(61,188,184,0.25)] bg-white flex items-center justify-center z-10">
                      <step.icon size={15} className="text-brand-primary" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Mobile connector */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden absolute left-5 top-10 bottom-0 w-px bg-[rgba(61,188,184,0.2)] -mb-8" />
                  )}
                </div>

                {/* Content */}
                <div className="lg:mt-2 pl-0">
                  <p className="font-mono text-[11px] text-brand-primary tracking-widest mb-2">
                    {step.number}
                  </p>
                  <h3 className="font-heading font-medium text-[17px] text-brand-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-brand-text-secondary text-[14px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
