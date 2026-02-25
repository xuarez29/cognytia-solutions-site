import { motion } from 'framer-motion'
import FadeUp, { FadeUpGroup, FadeUpItem } from '../components/FadeUp'
import { LogoWatermark } from '../components/LogoSVG'
import { services } from '../data/services'

function ServiceCard({ service, index }) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.12 }}
      className="group relative card-base p-8 flex flex-col gap-5 overflow-hidden cursor-default"
    >
      {/* Left teal border on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-brand-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out origin-bottom rounded-full" />

      {/* Tag */}
      <span className="font-mono text-[11px] text-brand-primary tracking-widest">
        {service.tag}
      </span>

      {/* Icon */}
      <div className="w-11 h-11 rounded-xl border border-[rgba(61,188,184,0.2)] flex items-center justify-center bg-[rgba(61,188,184,0.04)] group-hover:bg-[rgba(61,188,184,0.08)] transition-colors duration-300">
        <Icon size={20} className="text-brand-primary" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="font-heading font-medium text-[18px] text-brand-text leading-snug">
          {service.title}
        </h3>
        <p className="text-brand-text-secondary text-[14px] leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Stack hint */}
      <div className="mt-auto pt-4 border-t border-[rgba(61,188,184,0.1)]">
        <span className="font-mono text-[11px] text-brand-text-secondary tracking-wide">
          {service.detail}
        </span>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="relative bg-brand-bg-cold section-padding overflow-hidden">
      {/* Watermark */}
      <LogoWatermark className="absolute -right-16 top-1/2 -translate-y-1/2 w-64 opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeUp className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] text-brand-primary tracking-widest uppercase mb-3 block">
                Servicios
              </span>
              <h2 className="section-title">
                Lo que construimos
              </h2>
              <p className="text-brand-text-secondary text-[15px] max-w-md mt-2">
                Tres áreas de enfoque. Una misión: que tu negocio crezca con tecnología que funciona.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
