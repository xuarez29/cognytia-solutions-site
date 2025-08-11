export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-sky-600 opacity-20"></div>
      <div className="container-max py-20 text-center relative">
        <img src="/images/Cognytia Logo Completo.svg" alt="Cognytia Solutions" className="h-48 md:h-64 mx-auto mb-2" />
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-brand-dark">IA con propósito</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-700">
          Automatizamos procesos y diseñamos soluciones a la medida para PYMEs y profesionales en Querétaro y el Bajío.
        </p>
      </div>
    </section>
  )
}