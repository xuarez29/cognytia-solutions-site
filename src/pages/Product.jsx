import { useParams, Link } from "react-router-dom"
import { products } from "../data/products"
export default function Product() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  if (!product) {
    return (
      <div className="container-max py-16">
        <p className="mb-4">Producto no encontrado.</p>
        <Link to="/" className="text-brand-primary underline">Volver al inicio</Link>
      </div>
    )
  }
  return (
    <div>
      <header className="bg-gray-100">
        <div className="container-max py-10">
          <Link to="/" className="text-sm text-brand-primary underline">← Volver</Link>
          <h1 className="text-4xl font-extrabold mt-2">{product.title} <span className="text-3xl">{product.emoji}</span></h1>
          <div className="text-sm text-slate-600 mt-1">{product.tags.join(" • ")}</div>
        </div>
      </header>
      <main className="container-max py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-slate-800">{product.short}</p>
            <section><h2 className="text-xl font-semibold mb-2">Problema</h2><p className="text-slate-700">{product.problem}</p></section>
            <section><h2 className="text-xl font-semibold mb-2">Solución</h2><p className="text-slate-700">{product.solution}</p></section>
            <section><h2 className="text-xl font-semibold mb-2">Características</h2><ul className="list-disc ml-6 space-y-1 text-slate-700">{product.features.map((f,i)=><li key={i}>{f}</li>)}</ul></section>
            <section><h2 className="text-xl font-semibold mb-2">Resultados</h2><ul className="list-disc ml-6 space-y-1 text-slate-700">{product.outcomes.map((o,i)=><li key={i}>{o}</li>)}</ul></section>
          </div>
          <aside className="space-y-4">
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <h3 className="text-lg font-semibold mb-2">¿Quieres esto en tu negocio?</h3>
              <p className="text-slate-700 mb-4">Agendemos una llamada de 20 minutos para revisar tu caso.</p>
              <a href="#contacto" className="inline-block px-4 py-2 rounded-lg bg-brand-primary text-white font-semibold hover:opacity-90">Hablar con Cognytia</a>
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
