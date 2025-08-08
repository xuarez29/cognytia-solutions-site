# Cognytia Solutions — Sitio (Vite + Tailwind) v2.2

Incluye:
- Header tipo v1 con CTA a WhatsApp
- Emojis en productos (🎟️, ✈️, 💬, 📊)
- Formulario que envía **sin abrir Mail** vía `/api/contact` (Resend) con **correo HTML** elegante
- `vercel.json` con rutas API + SPA
- Logos y favicons integrados
- Sitemap y robots para SEO

## Variables en Vercel
- `RESEND_API_KEY`
- `CONTACT_TO` = `cognytia.solutions@gmail.com`
- `CONTACT_FROM` = remitente verificado (p.ej. `noreply@cognytia.mx`)

## Desarrollo
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy en Vercel
Conecta el repo a Vercel e importa. Detecta Vite automáticamente.
