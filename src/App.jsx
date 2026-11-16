import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Ruler from './components/Ruler'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import Approach from './sections/Approach'
import Services from './sections/Services'
import Notion from './sections/Notion'
import Process from './sections/Process'
import Projects from './sections/Projects'
import Metrics from './sections/Metrics'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

// Orden de la página. Cada bloque va en su propio ErrorBoundary para que
// un fallo en una sección no tumbe el resto del sitio.
const sections = [
  { id: 'hero', Component: Hero },
  { id: 'approach', Component: Approach, index: '02', label: 'Enfoque' },
  { id: 'services', Component: Services, index: '03', label: 'Servicios' },
  { id: 'notion', Component: Notion, index: '04', label: 'Notion' },
  { id: 'process', Component: Process, index: '05', label: 'Proceso' },
  { id: 'projects', Component: Projects, index: '06', label: 'Proyectos' },
  { id: 'metrics', Component: Metrics, index: '07', label: 'Resultados' },
  { id: 'testimonials', Component: Testimonials },
  { id: 'contact', Component: Contact, index: '08', label: 'Contacto' },
]

export default function App() {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>

      <main id="contenido">
        {sections.map((s) => {
          const Section = s.Component
          return (
            <ErrorBoundary key={s.id}>
              {s.index && <Ruler index={s.index} label={s.label} />}
              <Section />
            </ErrorBoundary>
          )
        })}
      </main>

      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>

      <ErrorBoundary>
        <WhatsAppButton />
      </ErrorBoundary>
    </>
  )
}
