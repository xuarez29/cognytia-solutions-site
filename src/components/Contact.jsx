export default function Contact() {
  const phone = "+524425955891"; // <-- pon aquí tu número en formato E.164
  const waMsg = encodeURIComponent(
    "Hola, me interesa automatizar procesos con Cognytia. ¿Podemos hablar?"
  );
  const waUrl = `https://wa.me/524425955891?text=${waMsg}`;

  return (
    <section id="contacto" className="py-16 text-center">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Contacto</h2>
        <p className="text-slate-700 mb-6">
          Escríbenos por WhatsApp o llámanos. Atendemos Querétaro y el Bajío.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:opacity-90"
          >
            💬 Escribir por WhatsApp
          </a>
          <a
            href={`tel:${phone}`}
            className="px-6 py-3 rounded-xl border border-slate-300 font-semibold hover:bg-slate-50"
          >
            📞 Llamada directa
          </a>
        </div>
      </div>
    </section>
  );
}
