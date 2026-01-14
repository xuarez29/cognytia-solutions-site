import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const waMsg = encodeURIComponent("Hola, quisiera información sobre soluciones automatizadas.");
  const waUrl = `https://wa.me/524425955891?text=${waMsg}`; // <-- tu número

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="container-max flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo-navbar.png" alt="Cognytia Solutions" className="h-8 md:h-10" />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-4">
          <a href="/#servicios" className="text-slate-700 hover:text-slate-900">Servicios</a>
          <a href="/#productos" className="text-slate-700 hover:text-slate-900">Productos</a>
          <Link to="/notion-para-empresas" className="text-slate-700 hover:text-slate-900">
            Notion para empresas
          </Link>
          <a href="/#quienes" className="text-slate-700 hover:text-slate-900">Nosotros</a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold hover:opacity-90"
          >
            Solicitar información
          </a>
        </nav>

        {/* Mobile toggle (si lo usas) */}
        <button
          className="md:hidden p-2 rounded-lg border"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          ☰
        </button>

        {/* Mobile menu */}
        {open && (
          <div id="mobile-menu" className="absolute top-16 right-4 left-4 bg-white border rounded-2xl p-4 md:hidden">
            <div className="flex flex-col gap-3">
              <a href="/#servicios" onClick={() => setOpen(false)}>Servicios</a>
              <a href="/#productos" onClick={() => setOpen(false)}>Productos</a>
              <Link to="/notion-para-empresas" onClick={() => setOpen(false)}>
                Notion para empresas
              </Link>
              <a href="/#quienes" onClick={() => setOpen(false)}>Nosotros</a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-center"
                onClick={() => setOpen(false)}
              >
                Solicitar información
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
