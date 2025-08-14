export default function Footer() {
  return (
    <footer className="border-top border-gray-100">
      <div className="container-max py-10 flex flex-col items-center gap-4 text-sm text-slate-600">
        <img src="/images/logo-icon.png" alt="Cognytia Solutions" className="h-10" />
        <div>© {new Date().getFullYear()} Cognytia Solutions — IA con propósito</div>
        <div className="flex gap-4">
          <p>
  📧 <a href="mailto:carlos@cognytia.mx" class="underline">carlos@cognytia.mx</a>  
  &nbsp;|&nbsp;  
  📞 <a href="tel:+524425955891" class="underline">+52 442 595 5891</a>  
  &nbsp;|&nbsp;  
  📅 <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3x99in295C74dyfVB0mxU5wXrcEQxySxh5IiRI9KklhoNQ5nZCR5N1q3SSht1zPstnSkqDhWtc?gv=true" 
        target="_blank" rel="noopener" class="underline">Agendar reunión</a>
</p>

        </div>
      </div>
    </footer>
  )
}
