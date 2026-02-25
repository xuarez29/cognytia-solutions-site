import { lazy, Suspense } from 'react'
import ErrorBoundary from './components/ErrorBoundary'

// ── Carga inmediata: above the fold ────────────────────────────────
import Navbar   from './components/Navbar'
import Hero     from './sections/Hero'
import Services from './sections/Services'

// ── Carga diferida: below the fold ─────────────────────────────────
const Notion         = lazy(() => import('./sections/Notion'))
const Process        = lazy(() => import('./sections/Process'))
const Projects       = lazy(() => import('./sections/Projects'))
const Metrics        = lazy(() => import('./sections/Metrics'))
const Testimonials   = lazy(() => import('./sections/Testimonials'))
const Contact        = lazy(() => import('./sections/Contact'))
const Footer         = lazy(() => import('./sections/Footer'))
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'))

// Placeholder animado mientras llega el chunk JS
function SectionSkeleton({ height = 'h-40' }) {
  return (
    <div
      className={`w-full ${height} bg-brand-bg-cold animate-pulse`}
      aria-hidden="true"
    />
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg font-body">
      <ErrorBoundary><Navbar /></ErrorBoundary>

      <main>
        {/* Above the fold — sin lazy */}
        <ErrorBoundary><Hero /></ErrorBoundary>
        <ErrorBoundary><Services /></ErrorBoundary>

        {/* Below the fold — lazy + Suspense */}
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="h-96" />}>
            <Notion />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="h-64" />}>
            <Process />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="h-96" />}>
            <Projects />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="h-48" />}>
            <Metrics />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="h-64" />}>
            <Testimonials />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="h-96" />}>
            <Contact />
          </Suspense>
        </ErrorBoundary>
      </main>

      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton height="h-32" />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>

      {/* WhatsApp: sin skeleton — aparece silenciosamente */}
      <ErrorBoundary>
        <Suspense fallback={null}>
          <WhatsAppButton />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
