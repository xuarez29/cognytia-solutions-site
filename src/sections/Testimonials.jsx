import { motion } from 'framer-motion'
import FadeUp from '../components/FadeUp'
import { LogoWatermark } from '../components/LogoSVG'
import { testimonials } from '../data/testimonials'

function QuoteIcon() {
  return (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="text-brand-primary opacity-40">
      <path d="M0 18V10.8C0 7.8 0.8 5.2 2.4 3C4 0.8 6.2 0 8.8 0L9.6 1.8C8 2.4 6.6 3.4 5.6 4.8C4.6 6.2 4 7.8 4 9.6H8V18H0ZM14 18V10.8C14 7.8 14.8 5.2 16.4 3C18 0.8 20.2 0 22.8 0L23.6 1.8C22 2.4 20.6 3.4 19.6 4.8C18.6 6.2 18 7.8 18 9.6H22V18H14Z" fill="currentColor"/>
    </svg>
  )
}

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.12 }}
      className="relative flex flex-col gap-5 p-7 rounded-2xl"
      style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(61, 188, 184, 0.15)',
        boxShadow: '0 2px 20px rgba(13, 31, 31, 0.05)',
      }}
    >
      <QuoteIcon />

      <blockquote className="text-brand-text text-[15px] leading-relaxed flex-1">
        "{testimonial.quote}"
      </blockquote>

      <div className="flex items-center gap-3 pt-4 border-t border-[rgba(61,188,184,0.1)]">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[12px] font-medium font-body flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #3DBCB8 0%, #0A2E2E 100%)' }}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="font-heading font-medium text-[14px] text-brand-text">
            {testimonial.name}
          </p>
          <p className="text-[12px] text-brand-text-secondary">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative section-padding bg-brand-bg-cold overflow-hidden">
      {/* Background watermark */}
      <LogoWatermark className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <FadeUp className="mb-14 text-center">
          <span className="font-mono text-[11px] text-brand-primary tracking-widest uppercase mb-3 block">
            Testimonios
          </span>
          <h2 className="section-title text-center">
            Lo que dicen quienes <br className="hidden sm:block" />
            confían en nosotros
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
