import { Link } from "react-router-dom"
export default function Navbar() {
  const whatsapp = "524425955891";
  const waText = encodeURIComponent("Hola, me interesa más información sobre automatización para mi negocio.");
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="container-max flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/Cognytia C y Nombre.svg" alt="Cognytia" className="h-8" />
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <a href="#quienes" className="hover:text-brand-primary">Quiénes somos</a>
          <a href="#servicios" className="hover:text-brand-primary">Qué hacemos</a>
          <a href="#productos" className="hover:text-brand-primary">Productos</a>
          <a href="#contacto" className="hover:text-brand-primary">Contacto</a>
          <a href={`https://wa.me/${whatsapp}?text=${waText}`} target="_blank" className="hidden md:inline-block px-4 py-2 rounded-lg bg-brand-primary text-white font-semibold hover:opacity-90">
            Solicitar información
          </a>
        </div>
      </nav>
    </header>
  )
}
