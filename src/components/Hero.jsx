export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-sky-600 opacity-20"></div>
      <div className="container-max py-20 text-center relative">
        <img src="/images/logo-hero.png" alt="Cognytia Solutions" className="h-28 md:h-36 mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-brand-dark">IA con propósito</h1>
        <p className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto text-slate-700 mb-4">
          Automatizamos procesos y diseñamos soluciones a la medida para PYMEs y profesionales en Querétaro y el Bajío.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base text-slate-600">
          <span className="px-3 py-1 rounded-full border border-slate-200 bg-white/70">Automatización</span>
          <span className="px-3 py-1 rounded-full border border-slate-200 bg-white/70">Bots y asistentes</span>
          <span className="px-3 py-1 rounded-full border border-slate-200 bg-white/70">Integraciones</span>
        </div>
      </div>
    </section>
  )
}