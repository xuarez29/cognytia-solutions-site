export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="container-max py-10 flex flex-col items-center gap-4 text-sm text-slate-600">
        <img src="/images/logo-icon.png" alt="Cognytia Solutions" className="h-10" />
        <div>© {new Date().getFullYear()} Cognytia Solutions — IA con propósito</div>
        <div className="flex gap-4">
          <p>
  📧 <a href="mailto:hola@cognytia.mx" className="underline">hola@cognytia.mx</a>  
  &nbsp;|&nbsp;  
  📞 <a href="tel:+524425955891" className="underline">+52 442 595 5891</a>  
  &nbsp;
</p>

        </div>
      </div>
    </footer>
  )
}
