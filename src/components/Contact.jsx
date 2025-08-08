import { useState } from "react";
export default function Contact() {
  const [status, setStatus] = useState("idle");
  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone") || "",
      message: form.get("message"),
    };
    const r = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    setStatus(r.ok ? "ok" : "error");
    if (r.ok) e.currentTarget.reset();
  }
  const whatsapp = "524425955891";
  const waText = encodeURIComponent("Hola, me interesa automatizar procesos con Cognytia. ¿Me compartes más información?");
  return (
    <section id="contacto" className="bg-brand-dark text-white">
      <div className="container-max py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">Hablemos de tu proyecto</h2>
            <p className="text-brand-primary/20 mb-6">Querétaro • Bajío • México</p>
            <p className="text-white/90">Cuéntanos tu reto y preparamos una propuesta clara.</p>
          </div>
          <div className="bg-white text-slate-800 rounded-2xl shadow-soft p-6">
            <form className="space-y-4" onSubmit={onSubmit}>
              <div>
                <label className="block text-sm font-semibold mb-1">Nombre</label>
                <input name="name" required className="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Correo</label>
                <input name="email" type="email" required className="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="tunombre@correo.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Teléfono (opcional)</label>
                <input name="phone" className="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="+52 ..." />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">¿Qué necesitas automatizar?</label>
                <textarea name="message" rows="3" required className="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Cuéntanos brevemente tu caso"></textarea>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <button type="submit" className="px-4 py-2 rounded-lg bg-brand-primary text-white font-semibold hover:opacity-90 disabled:opacity-60" disabled={status==='sending'}>
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                </button>
                <a href={`https://wa.me/${whatsapp}?text=${waText}`} target="_blank" className="px-4 py-2 rounded-lg border border-slate-300 font-semibold hover:bg-slate-50">WhatsApp</a>
                <a href="tel:+524425955891" className="text-sm text-slate-600 underline">📞 Llamada directa</a>
              </div>
              {status === "ok" && <p className="text-sm text-green-600">¡Listo! Te respondemos en breve.</p>}
              {status === "error" && <p className="text-sm text-red-600">Hubo un error al enviar. Inténtalo de nuevo.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
