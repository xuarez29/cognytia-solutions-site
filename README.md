# CognytIA Solutions — sitio web

Sitio de [www.cognytia.mx](https://www.cognytia.mx): consultoría de inteligencia artificial, automatización y desarrollo web para emprendedores y PyMEs. *Inteligencia Artificial con Propósito.*

Para el historial de cambios, decisiones y pendientes, lee [`MEMORY.md`](./MEMORY.md).

## Stack

- [React 19](https://react.dev) + [Vite 7](https://vite.dev)
- [Tailwind CSS 3](https://tailwindcss.com) con colores de marca en `tailwind.config.js`
- [framer-motion](https://motion.dev) para animaciones y [lucide-react](https://lucide.dev) para íconos
- Fuentes auto-hospedadas: DM Sans, Inter y JetBrains Mono
- Hospedado en [Vercel](https://vercel.com), con Vercel Web Analytics y Google Analytics 4

## Desarrollo

Requiere Node 20 o superior.

```bash
npm install
npm run dev       # servidor local en http://localhost:5173
npm run build     # compila a dist/
npm run preview   # sirve la versión compilada
npm run lint
```

## Estructura

```
src/
├── App.jsx              # orden de secciones; las de abajo se cargan diferidas
├── main.jsx             # entrada: fuentes, GA4 y Vercel Analytics
├── sections/            # Hero, Services, Notion, Process, Projects, Metrics,
│                        # Testimonials, Contact, Footer
├── components/          # Navbar, LogoAnimation, WhatsAppButton, FadeUp, …
├── data/                # textos y listas de cada sección
├── config/contact.js    # correo, WhatsApp y Formspree
├── lib/analytics.js     # GA4 (solo mide en el dominio de producción)
└── hooks/
public/                  # imágenes, og-image.jpg, robots.txt, sitemap.xml
```

Para cambiar textos de servicios, proyectos, proceso o testimonios, edita el archivo correspondiente en `src/data/`.

## Configuración

Los datos de contacto y analítica tienen valores por defecto en el código, así que el sitio funciona sin configurar nada. Para sobrescribirlos, usa estas variables de entorno (en Vercel: Settings → Environment Variables; en local: copia `.env.example` como `.env.local`):

| Variable | Para qué |
| --- | --- |
| `VITE_FORMSPREE_ID` | Formulario de contacto (Formspree) |
| `VITE_WHATSAPP_NUMBER` | Botón y enlace de WhatsApp |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 |

## Publicar

Todo cambio que llega a `main` se publica solo en Vercel. Flujo recomendado:

1. Crea una rama desde `main` y haz tus cambios.
2. Comprueba que `npm run build` termine sin errores.
3. Sube la rama y abre un pull request; Vercel genera una vista previa.
4. Fusiona el pull request para publicar.
