import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import { metrics } from '../data/metrics'

function MetricItem({ metric, index, trigger }) {
  const { count, run } = useCountUp(metric.value, 1800)

  useEffect(() => {
    if (trigger) run()
  }, [trigger])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={trigger ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.12 }}
      className="flex flex-col items-center text-center gap-2"
    >
      <div className="flex items-baseline gap-0.5">
        {metric.prefix && (
          <span className="font-heading font-light text-brand-primary" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            {metric.prefix}
          </span>
        )}
        <span
          className="font-heading font-light text-brand-primary tabular-nums"
          style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1, letterSpacing: '-0.03em' }}
        >
          {metric.display ?? count}
        </span>
        {metric.suffix && (
          <span className="font-heading font-light text-brand-primary" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            {metric.suffix}
          </span>
        )}
      </div>
      <p className="text-white/60 text-[13px] font-body tracking-wide max-w-[140px]">
        {metric.label}
      </p>
    </motion.div>
  )
}

export default function Metrics() {
  const { ref, inView } = useInView({ threshold: 0.3 })

  return (
    <section
      ref={ref}
      className="py-20 md:py-24 px-6 md:px-12 lg:px-20 xl:px-32"
      style={{ background: '#0A2E2E' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Subtle divider accent */}
        <div className="flex justify-center mb-16">
          <div className="w-12 h-px bg-brand-primary opacity-40" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
          {metrics.map((metric, i) => (
            <MetricItem key={i} metric={metric} index={i} trigger={inView} />
          ))}
        </div>

        {/* Bottom copy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-white/30 text-[12px] font-mono mt-16 tracking-wide"
        >
          Resultados reportados por clientes · 2025–2026
        </motion.p>
      </div>
    </section>
  )
}
