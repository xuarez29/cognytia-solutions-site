import { motion } from 'framer-motion'
import FadeUp from '../components/FadeUp'
import { projects } from '../data/projects'

function StackChip({ label }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[rgba(61,188,184,0.06)] border border-[rgba(61,188,184,0.15)] text-[11px] font-mono text-brand-primary">
      {label}
    </span>
  )
}

function ProjectCard({ project, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className="group relative card-base overflow-hidden cursor-default flex flex-col"
    >
      {/* Visual header — geometric pattern */}
      <div
        className="w-full h-44 relative overflow-hidden flex-shrink-0"
        style={{
          background: 'linear-gradient(135deg, #F7FAFA 0%, rgba(61,188,184,0.06) 100%)',
        }}
      >
        {/* Decorative node grid */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 176" fill="none">
          {[40, 120, 200, 280, 360].map((x) =>
            [36, 88, 140].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill="#3DBCB8" />
            ))
          )}
          <line x1="40" y1="36" x2="120" y2="88" stroke="#3DBCB8" strokeWidth="1"/>
          <line x1="120" y1="88" x2="200" y2="36" stroke="#3DBCB8" strokeWidth="1"/>
          <line x1="200" y1="36" x2="280" y2="88" stroke="#3DBCB8" strokeWidth="1"/>
          <line x1="280" y1="88" x2="360" y2="36" stroke="#3DBCB8" strokeWidth="1"/>
          <line x1="120" y1="88" x2="120" y2="140" stroke="#3DBCB8" strokeWidth="1"/>
          <line x1="200" y1="36" x2="200" y2="140" stroke="#3DBCB8" strokeWidth="1"/>
          <line x1="280" y1="88" x2="280" y2="140" stroke="#3DBCB8" strokeWidth="1"/>
          <line x1="40" y1="140" x2="360" y2="140" stroke="#3DBCB8" strokeWidth="1" opacity="0.5"/>
        </svg>

        {/* Metric highlight */}
        <div className="absolute bottom-4 left-4">
          <span
            className="font-heading font-light text-brand-primary"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}
          >
            {project.metric}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-brand-accent/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-white font-body font-medium text-[14px]">
            Caso de éxito
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <span className="inline-block text-[11px] font-mono text-brand-primary tracking-wide">
          {project.category}
        </span>
        <h3 className="font-heading font-medium text-[16px] text-brand-text leading-snug">
          {project.title}
        </h3>
        <p className="text-brand-text-secondary text-[13px] leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.stack.map((s) => (
            <StackChip key={s} label={s} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" className="section-padding bg-brand-bg-cold overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeUp className="mb-14">
          <span className="font-mono text-[11px] text-brand-primary tracking-widest uppercase mb-3 block">
            Proyectos
          </span>
          <h2 className="section-title">Proyectos que hablan</h2>
          <p className="text-brand-text-secondary text-[15px] max-w-md mt-2">
            Cada proyecto tiene un antes y un después. Aquí están algunos.
          </p>
        </FadeUp>

        {/* Grid 2×2 */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              delay={(i % 2) * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
