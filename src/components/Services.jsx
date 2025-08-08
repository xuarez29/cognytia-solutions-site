export default function Services() {
  const services = [
    { title: "Automatización de procesos", desc: "Eliminamos pasos manuales con flujos automáticos a la medida de tu operación." },
    { title: "Bots y asistentes virtuales", desc: "Atiende a tus clientes 24/7 por WhatsApp o web, con transferencia a humano." },
    { title: "Integraciones sin fricción", desc: "Conectamos lo que ya usas (Google, CRMs, formularios) para que todo funcione junto." },
    { title: "Soluciones personalizadas", desc: "Desarrollamos sistemas específicos para tus necesidades reales." },
  ]
  return (
    <section id="servicios" className="bg-gray-50 py-16">
      <div className="container-max">
        <h2 className="text-3xl font-extrabold text-brand-dark mb-8 text-center">Qué hacemos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s,i)=>(
            <div key={i} className="bg-white rounded-2xl shadow-soft p-6">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
