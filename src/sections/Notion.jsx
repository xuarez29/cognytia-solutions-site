import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

import FadeUp from '../components/FadeUp'
import { LogoWatermark } from '../components/LogoSVG'
import { capabilities, reasons } from '../data/notion'

function CapabilityCard({ item, index, onCtaClick }) {
  const Icon = item.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
      className={`group card-base p-6 flex flex-col gap-4 cursor-default ${item.highlight ? 'bg-[rgba(61,188,184,0.03)] border-[rgba(61,188,184,0.2)]' : ''}`}
    >
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-brand-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out origin-bottom rounded-full" />
      <div className="w-10 h-10 rounded-xl border border-[rgba(61,188,184,0.2)] flex items-center justify-center bg-[rgba(61,188,184,0.04)] group-hover:bg-[rgba(61,188,184,0.08)] transition-colors duration-300 flex-shrink-0">
        <Icon size={18} className="text-brand-primary" strokeWidth={1.5} />
      </div>
      <div className="flex-1">
        <h4 className="font-heading font-medium text-[16px] text-brand-text mb-1">{item.title}</h4>
        <p className="text-brand-text-secondary text-[13px] leading-relaxed">{item.description}</p>
      </div>
      {item.cta && (
        <button
          onClick={onCtaClick}
          className="mt-auto flex items-center gap-1.5 text-[12px] font-medium text-brand-primary hover:gap-2.5 transition-all duration-300 group/btn"
        >
          {item.cta}
          <ArrowRight size={13} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      )}
    </motion.div>
  )
}


export default function Notion() {
  const scrollToContact = () => {
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="notion" className="relative bg-white overflow-hidden">

      {/* ── Hero de sección ── */}
      <div className="relative section-padding pb-16 border-b border-[rgba(61,188,184,0.08)]">
        <LogoWatermark className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 opacity-[0.035] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="font-mono text-[11px] text-brand-primary tracking-widest uppercase mb-4 block">
                Servicio especializado
              </span>
              <h2 className="font-heading font-light text-brand-text mb-5 leading-[1.1]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
                Notion para empresas
              </h2>
              <p className="text-brand-text-secondary text-[16px] leading-relaxed mb-4 max-w-lg">
                Centraliza conocimiento, procesos y ejecución en un solo lugar. Diseñamos, implementamos
                y escalamos espacios de trabajo en Notion + IA para que tu empresa deje atrás la
                dispersión de información y los silos operativos.
              </p>
              <p className="text-brand-text-secondary text-[15px] leading-relaxed mb-8 max-w-lg">
                Nuestro enfoque es práctico, eficiente y orientado a resultados medibles.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button onClick={scrollToContact} className="btn-primary text-[14px] px-6 py-3">
                  Agendar diagnóstico
                  <ArrowRight size={15} />
                </button>
              </div>
            </FadeUp>

            {/* Razones — lado derecho del hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[rgba(61,188,184,0.03)] border border-[rgba(61,188,184,0.1)]"
                >
                  <CheckCircle2 size={16} className="text-brand-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-brand-text text-[14px] leading-relaxed">{r}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Lo que puedes lograr ── */}
      <div className="section-padding bg-brand-bg-cold border-b border-[rgba(61,188,184,0.08)]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="mb-12">
            <span className="font-mono text-[11px] text-brand-primary tracking-widest uppercase mb-3 block">
              Capacidades
            </span>
            <h3 className="font-heading font-light text-brand-text mb-2"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.015em' }}>
              Notion: un sistema único para toda tu operación
            </h3>
            <p className="text-brand-text-secondary text-[15px] max-w-md">
              Un tablero digital que conecta cada parte de tu empresa.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
            {capabilities.map((item, i) => (
              <div key={i} className="relative">
                <CapabilityCard item={item} index={i} onCtaClick={scrollToContact} />
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  )
}
