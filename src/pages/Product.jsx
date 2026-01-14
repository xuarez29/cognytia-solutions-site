import { useParams, Link } from "react-router-dom"
import { products } from "../data/products"

export default function Product() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="container-max py-20">
        <p className="mb-4">Producto no encontrado.</p>
        <Link to="/" className="text-brand-primary underline">Volver al inicio</Link>
      </div>
    )
  }

  // WhatsApp y llamada directa
  const phone = "+524425955891"
  const waMsg = encodeURIComponent(
    `Hola, vi "${product.title}" en su sitio y me interesa. ¿Podemos revisar mi caso y, si aplica, agendar una llamada de 20 minutos?`
  )
  const waUrl = `https://wa.me/524425955891?text=${waMsg}`

  return (
    <div>
      <header className="bg-gray-100">
        <div className="container-max py-10">
          <Link to="/" className="text-sm text-brand-primary underline">← Volver</Link>
          <h1 className="text-4xl font-extrabold mt-2">
            {product.title} <span className="text-3xl">{product.emoji}</span>
          </h1>
          <div className="text-sm text-slate-600 mt-1">{product.tags.join(" • ")}</div>
        </div>
      </header>

      <main className="container-max py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Columna izquierda: contenido del producto */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-slate-800">{product.short}</p>

            <section>
              <h2 className="text-xl font-semibold mb-2">Problema</h2>
              <p className="text-slate-700">{product.problem}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Solución</h2>
              <p className="text-slate-700">{product.solution}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Características</h2>
              <ul className="list-disc ml-6 space-y-1 text-slate-700">
                {product.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Resultados</h2>
              <ul className="list-disc ml-6 space-y-1 text-slate-700">
                {product.outcomes.map((o, i) => <li key={i}>{o}</li>)}
              </ul>
            </section>
          </div>

          {/* Columna derecha: CTA */}
          <aside className="space-y-4">
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <h3 className="text-lg font-extrabold mb-2">Contáctanos para revisar tu caso</h3>
              <p className="text-slate-700 mb-4">
                Podemos agendar una llamada breve.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center btn-primary"
              >
                💬 Hablar por WhatsApp
              </a>
              <a
                href={`tel:${phone}`}
                className="mt-3 w-full inline-block text-center btn-secondary"
              >
                📞 Llamada directa
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-soft p-6 text-sm text-slate-700">
              <p><strong>Implementación típica:</strong> 3–10 días</p>
              <p><strong>Requisitos:</strong> Cuenta de Google/WhatsApp, hoja de cálculo o CRM</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
