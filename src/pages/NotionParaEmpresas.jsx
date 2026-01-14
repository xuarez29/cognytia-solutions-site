import { useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function NotionParaEmpresas() {
  const mailSubject = encodeURIComponent("Diagnóstico Notion para empresas")
  const mailto = `mailto:hola@cognytia.mx?subject=${mailSubject}`
  useEffect(() => {
    document.title = "Notion para empresas con CognytIA"
    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute(
        "content",
        "Implementamos Notion + IA para centralizar conocimiento, procesos y ejecución en tu empresa."
      )
    }
  }, [])

  return (
    <div className="font-sans">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-sky-600 opacity-20"></div>
        <div className="container-max py-20 text-center relative">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-brand-dark">
            Notion para empresas con CognytIA
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-slate-700 mb-4">
            Centraliza conocimiento, procesos y ejecución en un solo lugar
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-700">
            En CognytIA diseñamos, implementamos y escalamos espacios de trabajo en Notion + IA para
            que tu empresa deje atrás la dispersión de información, los silos operativos y las
            múltiples herramientas que no se conectan entre sí. Nuestro enfoque es práctico,
            eficiente y orientado a resultados medibles.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={mailto}
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:opacity-90"
            >
              Agendar diagnóstico
            </a>
            <a
              href="#servicios"
              className="px-6 py-3 rounded-xl border border-slate-300 font-semibold hover:bg-slate-50"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      <section className="container-max py-16">
        <h2 className="text-3xl font-extrabold text-brand-dark text-center mb-2">
          Lo que puedes lograr con Notion + CognytIA
        </h2>
        <p className="text-lg text-slate-700 text-center mb-8">
          Un tablero digital único para toda tu operación
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <h3 className="text-xl font-semibold mb-2">Wiki corporativa</h3>
            <p className="text-gray-700">
              Políticas, manuales, SOPs y documentación crítica centralizada y actualizada.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <h3 className="text-xl font-semibold mb-2">Gestión de proyectos y tareas</h3>
            <p className="text-gray-700">
              Tableros, timelines, vistas personalizadas y flujos que reflejen tu metodología.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <h3 className="text-xl font-semibold mb-2">CRM y pipeline de ventas</h3>
            <p className="text-gray-700">
              Embudos conectados con acciones, clientes y métricas reales.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <h3 className="text-xl font-semibold mb-2">Bases de datos relacionales</h3>
            <p className="text-gray-700">
              Proyectos, clientes, procesos y OKRs vinculados entre sí.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <h3 className="text-xl font-semibold mb-2">Dashboards ejecutivos</h3>
            <p className="text-gray-700">
              Indicadores clave, progreso y prioridades visibles en tiempo real.
            </p>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-gray-50 py-16">
        <div className="container-max">
          <h2 className="text-3xl font-extrabold text-brand-dark mb-8 text-center">
            Nuestros servicios de Notion
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="text-sm text-brand-primary font-semibold mb-2">01</div>
              <h3 className="text-xl font-semibold mb-2">Diagnóstico y estrategia</h3>
              <p className="text-gray-700">
                Mapeamos tus herramientas, procesos y silos de información existentes para definir
                un plan de adopción con métricas y objetivos claros.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="text-sm text-brand-primary font-semibold mb-2">02</div>
              <h3 className="text-xl font-semibold mb-2">Arquitectura y diseño</h3>
              <p className="text-gray-700">
                Creamos una estructura sólida de wikis, bases de datos y permisos por rol, con
                convenciones de nombrado y layouts que facilitan el uso diario.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="text-sm text-brand-primary font-semibold mb-2">03</div>
              <h3 className="text-xl font-semibold mb-2">Implementación e integraciones</h3>
              <p className="text-gray-700">
                Migramos tu información crítica, conectamos Notion con tus herramientas digitales actuales y
                automatizamos flujos repetitivos para eliminar trabajos manuales.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="text-sm text-brand-primary font-semibold mb-2">04</div>
              <h3 className="text-xl font-semibold mb-2">IA aplicada al trabajo diario</h3>
              <p className="text-gray-700">
                Implementamos funciones inteligentes: búsqueda empresarial que encuentra lo que
                necesitas en segundos, notas de reuniones automáticas y asistentes de tareas que
                aumentan la productividad.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="text-sm text-brand-primary font-semibold mb-2">05</div>
              <h3 className="text-xl font-semibold mb-2">Capacitación y gobernanza</h3>
              <p className="text-gray-700">
                Formamos a tus equipos, definimos champions internos y establecemos normas de uso,
                auditorías y manuales para asegurar adopción continua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-max py-16">
        <h2 className="text-3xl font-extrabold text-brand-dark text-center mb-8">
          Cómo implementamos Notion en tu organización
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <h3 className="text-xl font-semibold mb-2">Fundamentos</h3>
            <p className="text-gray-700">
              Definición de arquitectura base, permisos, nomenclatura y plantillas iniciales.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <h3 className="text-xl font-semibold mb-2">Adopción</h3>
            <p className="text-gray-700">
              Despliegue por equipos, casos de uso reales y acompañamiento en terreno.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <h3 className="text-xl font-semibold mb-2">Aceleración</h3>
            <p className="text-gray-700">
              Automatizaciones, integraciones y dashboards avanzados.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <h3 className="text-xl font-semibold mb-2">Escalamiento</h3>
            <p className="text-gray-700">
              Centro de excelencia, métricas continuas y soporte estratégico.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container-max">
          <h2 className="text-3xl font-extrabold text-brand-dark text-center mb-6">
            Por qué elegir Notion con CognytIA
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-slate-700 max-w-3xl mx-auto">
            <li>Eliminamos la fragmentación de herramientas y documentación.</li>
            <li>Aumentamos la velocidad de ejecución y toma de decisiones.</li>
            <li>Reducimos el tiempo de búsqueda y handoffs entre equipos.</li>
            <li>Generamos una base de conocimiento reutilizable que crece con tu empresa.</li>
          </ul>
          <p className="text-slate-700 max-w-3xl mx-auto mt-4 text-center">
            Nuestro objetivo no es solo implementar Notion —es transformar tu operación digital para
            que sea más simple, transparente y productiva.
          </p>
        </div>
      </section>

      <section className="container-max py-16">
        <h2 className="text-3xl font-extrabold text-brand-dark text-center mb-6">
          Resultados que medimos
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-slate-700 max-w-3xl mx-auto">
          <li>Menor tiempo perdido en tareas repetitivas.</li>
          <li>Mayor adopción de tu equipo.</li>
          <li>Reducción de herramientas aisladas.</li>
          <li>Decisiones más rápidas con visibilidad completa.</li>
        </ul>
      </section>

      <section className="container-max py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <h3 className="text-xl font-semibold mb-2">¿Notion funciona con mis herramientas actuales?</h3>
            <p className="text-gray-700">
              Todavía más simple: Sí. Notion se puede integrar con herramientas como Slack, Google
              Drive, Teams, Jira, GitHub, Gmail y más para que tu flujo de trabajo sea fluido y
              conectado.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <h3 className="text-xl font-semibold mb-2">Seguridad empresarial</h3>
            <p className="text-gray-700">
              Notion opera con estándares de seguridad corporativos que protegen tu información y
              flujos de trabajo, incluyendo cifrado, permisos granulares y controles de acceso.
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-16 text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Agenda un diagnóstico</h2>
          <p className="text-slate-700 mb-6">
            Agenda un diagnóstico y te proponemos una arquitectura inicial, prioridades por fases y
            un plan de adopción realista.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={mailto}
              className="px-6 py-3 rounded-xl border border-slate-300 font-semibold hover:bg-slate-50"
            >
              hola@cognytia.mx
            </a>
            <a
              href="https://wa.me/524425955891"
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:opacity-90"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
