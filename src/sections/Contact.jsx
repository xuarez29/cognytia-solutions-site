import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, ArrowRight, AlertCircle } from 'lucide-react'
import FadeUp from '../components/FadeUp'
import { trackEvent } from '../lib/analytics'

const serviceOptions = [
  { value: 'web', label: 'Desarrollo Web' },
  { value: 'ia', label: 'Integraciones con IA' },
  { value: 'auto', label: 'Automatización de Procesos' },
  { value: 'nosey', label: 'No sé aún — quiero platicar' },
]

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER
const EMAIL = 'hola@cognytia.mx'
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

function InputField({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-body text-brand-text font-medium">
        {label}{required && <span className="text-brand-primary ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}

function FieldError({ id, message }) {
  if (!message) return null
  return (
    <span
      id={id}
      role="alert"
      className="flex items-center gap-1 text-[12px] text-red-500"
    >
      <AlertCircle size={12} className="flex-shrink-0" />
      {message}
    </span>
  )
}

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-[rgba(61,188,184,0.2)] bg-white text-brand-text text-[14px] font-body placeholder:text-brand-text-secondary/60 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-[rgba(61,188,184,0.12)] transition-all duration-300'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Tu nombre es requerido'
    if (!form.email.trim()) e.email = 'Tu email es requerido'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email inválido'
    if (!form.message.trim()) e.message = 'Cuéntanos algo sobre tu proyecto'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setErrors({})
    setStatus('sending')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nombre: form.name,
          email: form.email,
          empresa: form.company || '—',
          servicio: serviceOptions.find(o => o.value === form.service)?.label || '—',
          mensaje: form.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', company: '', service: '', message: '' })
        trackEvent('form_submit', {
          form_type: 'contacto',
          service: form.service || 'sin_seleccionar',
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }))
  }

  return (
    <section id="contacto" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Copy */}
          <FadeUp>
            <span className="font-mono text-[11px] text-brand-primary tracking-widest uppercase mb-4 block">
              Contacto
            </span>
            <h2 className="section-title mb-4">
              ¿Tienes un proyecto en mente?{' '}
              <span className="text-gradient-teal">Cuéntanos.</span>
            </h2>
            <p className="text-brand-text-secondary text-[15px] leading-relaxed mb-10 max-w-sm">
              No necesitas tener todo claro para escribirnos. Una conversación de 20 minutos
              puede cambiar la dirección de un proyecto.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-brand-text hover:text-brand-primary transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl border border-[rgba(61,188,184,0.2)] flex items-center justify-center group-hover:border-brand-primary group-hover:bg-[rgba(61,188,184,0.05)] transition-all duration-300">
                  <Mail size={16} className="text-brand-primary" strokeWidth={1.5} />
                </div>
                <span className="text-[14px] font-body">{EMAIL}</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-brand-text hover:text-brand-primary transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl border border-[rgba(61,188,184,0.2)] flex items-center justify-center group-hover:border-brand-primary group-hover:bg-[rgba(61,188,184,0.05)] transition-all duration-300">
                  <MessageCircle size={16} className="text-brand-primary" strokeWidth={1.5} />
                </div>
                <span className="text-[14px] font-body">+52 442 595 5891</span>
              </a>
            </div>

            {/* Trust note */}
            <div className="mt-10 p-5 rounded-xl bg-brand-bg-cold border border-[rgba(61,188,184,0.12)]">
              <p className="text-[13px] text-brand-text-secondary leading-relaxed">
                <span className="text-brand-text font-medium">Primero entendemos tu proceso.</span>
                {' '}Luego diseñamos la solución adecuada. Hablemos.
              </p>
            </div>
          </FadeUp>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center text-center gap-5 py-16"
              >
                <div className="w-16 h-16 rounded-full bg-[rgba(61,188,184,0.1)] border border-[rgba(61,188,184,0.3)] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-brand-primary">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-heading font-medium text-[22px] text-brand-text">
                  ¡Mensaje recibido!
                </h3>
                <p className="text-brand-text-secondary text-[15px] max-w-xs">
                  En breve nos pondremos en contacto contigo. Si lo prefieres, contáctanos directamente por WhatsApp.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <InputField label="Nombre completo" required>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={handleChange('name')}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'error-name' : undefined}
                      className={`${inputClass} ${errors.name ? 'border-red-400 focus:border-red-400' : ''}`}
                    />
                    <FieldError id="error-name" message={errors.name} />
                  </InputField>

                  <InputField label="Email" required>
                    <input
                      type="email"
                      placeholder="tu@empresa.com"
                      value={form.email}
                      onChange={handleChange('email')}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'error-email' : undefined}
                      className={`${inputClass} ${errors.email ? 'border-red-400 focus:border-red-400' : ''}`}
                    />
                    <FieldError id="error-email" message={errors.email} />
                  </InputField>
                </div>

                <InputField label="Empresa">
                  <input
                    type="text"
                    placeholder="Nombre de tu empresa (opcional)"
                    value={form.company}
                    onChange={handleChange('company')}
                    className={inputClass}
                  />
                </InputField>

                <InputField label="¿En qué podemos ayudarte?">
                  <select
                    value={form.service}
                    onChange={handleChange('service')}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="">Selecciona un servicio...</option>
                    {serviceOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </InputField>

                <InputField label="Cuéntanos sobre tu proyecto" required>
                  <textarea
                    rows={4}
                    placeholder="¿Cuál es el problema que quieres resolver? ¿Dónde estás hoy y dónde quieres llegar?"
                    value={form.message}
                    onChange={handleChange('message')}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'error-message' : undefined}
                    className={`${inputClass} resize-none ${errors.message ? 'border-red-400 focus:border-red-400' : ''}`}
                  />
                  <FieldError id="error-message" message={errors.message} />
                </InputField>

                {status === 'error' && (
                  <p
                    role="alert"
                    className="flex items-center justify-center gap-2 text-[13px] text-red-500 bg-red-50 border border-red-100 rounded-lg px-4 py-3"
                  >
                    <AlertCircle size={14} className="flex-shrink-0" />
                    Ocurrió un error al enviar. Intenta de nuevo o escríbenos directo por WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary justify-center py-3.5 text-[14px] mt-1 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3"/>
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-brand-text-secondary text-center">
                  Sin spam, sin suscripciones. Solo una respuesta honesta.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
