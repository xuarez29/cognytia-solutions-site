export default function Footer() {
  return (
    <footer className="border-top border-gray-100">
      <div className="container-max py-10 flex flex-col items-center gap-4 text-sm text-slate-600">
        <img src="/images/Cognytia Logo Completo.svg" alt="Cognytia Solutions" className="h-8" />
        <div>© {new Date().getFullYear()} Cognytia Solutions — IA con propósito</div>
        <div className="flex gap-4">
          <a href="mailto:cognytia.solutions@gmail.com" className="underline">cognytia.solutions@gmail.com</a>
          <a href="tel:+524425955891" className="underline">📞 Llamada directa</a>
        </div>
      </div>
    </footer>
  )
}
