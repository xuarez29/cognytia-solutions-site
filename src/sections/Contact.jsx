import { useState } from 'react'
import Reveal from '../components/Reveal'
import { Alert, ArrowRight, ArrowUpRight, Check } from '../components/Icons'
import { trackEvent } from '../lib/analytics'
import { EMAIL, WHATSAPP_NUMBER, FORMSPREE_ID } from '../config/contact'

const serviceOptions = [
  { value: 'web', label: 'Desarrollo Web' },
  { value: 'ia', label: 'Integraciones con IA' },
  { value: 'auto', label: 'Automatización de Procesos' },
  { value: 'nosey', label: 'No sé aún — quiero platicar' },
]

// 524425955891 → +52 442 595 5891
const formatPhone = (n) =>
  /^52\d{10}$/.test(n) ? `+52 ${n.slice(2, 5)} ${n.slice(5, 8)} ${n.slice(8)}` : `+${n}`

function Field({ id, label, required, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-ink-soft">
        {label}
        {required && <span className="ml-1 text-teal-spark" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <span id={`error-${id}`} role="alert" className="flex items-center gap-1.5 text-[13px] text-[#B42318]">
          <Alert width="13" height="13" className="flex-none" />
          {error}
        </span>
      )}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
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
      document.getElementById(Object.keys(errs)[0])?.focus()
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
          servicio: serviceOptions.find((o) => o.value === form.service)?.label || '—',
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

  const channels = [
    { label: 'Correo', value: EMAIL, href: `mailto:${EMAIL}` },
    {
      label: 'WhatsApp',
      value: formatPhone(WHATSAPP_NUMBER),
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      external: true,
      onClick: () => trackEvent('whatsapp_click', { source: 'contact_section' }),
    },
  ]

  return (
    <section id="contacto" aria-labelledby="contacto-titulo">
      <div className="shell">
        <div className="frame grid grid-cols-1 lg:grid-cols-12">
          {/* Texto y canales */}
          <div className="flex flex-col justify-between gap-14 pad section-y lg:col-span-6 lg:border-r lg:border-line">
            <Reveal>
              <p className="label mb-6">
                <span className="node" aria-hidden="true" />
                Contacto
              </p>
              <h2 id="contacto-titulo" className="h2 max-w-[13ch]">
                ¿Tienes un proyecto en mente? Cuéntanos<span className="text-teal">.</span>
              </h2>
              <p className="lead mt-7 max-w-[40ch]">
                No necesitas tener todo claro para escribirnos. Una conversación de 20 minutos puede cambiar la
                dirección de un proyecto.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="border-t border-line">
                {channels.map((c) => (
                  <li key={c.label} className="border-b border-line">
                    <a
                      href={c.href}
                      onClick={c.onClick}
                      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex items-center gap-5 py-5 transition-[padding] duration-500 hover:pl-3"
                    >
                      <span className="mono w-[84px] flex-none uppercase tracking-[0.08em] text-ink-soft">{c.label}</span>
                      <span className="text-[clamp(1.15rem,2vw,1.6rem)] tracking-[-0.02em]">{c.value}</span>
                      <ArrowUpRight className="ml-auto flex-none text-ink-mute transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-[44ch] text-[15px] text-ink-soft">
                <strong className="font-medium text-ink">Primero entendemos tu proceso.</strong> Luego diseñamos la
                solución adecuada. Hablemos.
              </p>
            </Reveal>
          </div>

          {/* Formulario */}
          <div className="blueprint flex items-center border-t border-line p-4 py-10 sm:p-[var(--pad)] lg:col-span-6 lg:border-t-0">
            <Reveal className="w-full border border-ink bg-panel shadow-[8px_8px_0_0_var(--line)]">
              <div className="flex h-10 items-center justify-between border-b border-line px-5">
                <p className="mono text-[10.5px] uppercase tracking-[0.1em] text-ink-soft">Formulario de contacto</p>
                <span className="node" aria-hidden="true" />
              </div>

              {status === 'success' ? (
                <div className="fade-in flex min-h-[420px] flex-col items-start justify-center gap-5 p-6 sm:p-9" role="status">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-teal-deep">
                    <Check width="20" height="20" />
                  </span>
                  <h3 className="h3">¡Mensaje recibido!</h3>
                  <p className="max-w-[38ch] text-ink-soft">
                    En breve nos pondremos en contacto contigo. Si lo prefieres, contáctanos directamente por
                    WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-5 sm:p-8" noValidate>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field id="name" label="Nombre completo" required error={errors.name}>
                      <input
                        id="name"
                        name="nombre"
                        type="text"
                        autoComplete="name"
                        placeholder="Tu nombre"
                        value={form.name}
                        onChange={handleChange('name')}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                        className="field"
                      />
                    </Field>
                    <Field id="email" label="Email" required error={errors.email}>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        placeholder="tu@empresa.com"
                        value={form.email}
                        onChange={handleChange('email')}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                        className="field"
                      />
                    </Field>
                  </div>

                  <Field id="company" label="Empresa">
                    <input
                      id="company"
                      name="empresa"
                      type="text"
                      autoComplete="organization"
                      placeholder="Opcional"
                      value={form.company}
                      onChange={handleChange('company')}
                      className="field"
                    />
                  </Field>

                  <Field id="service" label="¿En qué podemos ayudarte?">
                    <select
                      id="service"
                      name="servicio"
                      value={form.service}
                      onChange={handleChange('service')}
                      className="field"
                    >
                      <option value="">Selecciona un servicio...</option>
                      {serviceOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field id="message" label="Cuéntanos sobre tu proyecto" required error={errors.message}>
                    <textarea
                      id="message"
                      name="mensaje"
                      rows={4}
                      placeholder="¿Cuál es el problema que quieres resolver? ¿Dónde estás hoy y a dónde quieres llegar?"
                      value={form.message}
                      onChange={handleChange('message')}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'error-message' : undefined}
                      className="field resize-none"
                    />
                  </Field>

                  {status === 'error' && (
                    <p role="alert" className="flex items-start gap-2 border border-[#B42318] bg-[#FEF3F2] px-4 py-3 text-[14px] text-[#B42318]">
                      <Alert className="mt-0.5 flex-none" />
                      Ocurrió un error al enviar. Intenta de nuevo o escríbenos directo por WhatsApp.
                    </p>
                  )}

                  <button type="submit" disabled={status === 'sending'} className="btn btn--solid mt-1 w-full">
                    {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                    {status === 'sending' ? (
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" style={{ animation: 'spin 0.9s linear infinite' }} aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <ArrowRight />
                    )}
                  </button>

                  <p className="mono text-center text-[11px] text-ink-soft">
                    Sin spam, sin suscripciones. Solo una respuesta honesta.
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
