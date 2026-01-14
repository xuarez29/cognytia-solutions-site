export default function About() {
  return (
    <section id="quienes" className="container-max py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-brand-dark mb-4">Quiénes somos</h2>
          <p className="text-gray-700 mb-4">
            En <strong>Cognytia Solutions</strong> ayudamos a personas que trabajan por su cuenta y a pequeñas y medianas empresas que no tienen un equipo de IT dedicado.
            Revisamos tus procesos, identificamos oportunidades de automatización e implementamos soluciones inteligentes que funcionan desde el día uno.
          </p>
          <p className="text-gray-700">
            Nuestro enfoque es práctico y medible: menos tareas repetitivas, más tiempo para vender, atender clientes y crecer.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-soft p-6">
          <ul className="space-y-3 text-gray-800">
            <li>✅ Diagnóstico rápido de procesos</li>
            <li>✅ Prototipos funcionales en días, no meses</li>
            <li>✅ Integración con tus herramientas actuales</li>
            <li>✅ Capacitación para tu equipo</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
