# CognytIA Solutions — sitio web

Sitio de [www.cognytia.mx](https://www.cognytia.mx): consultoría de inteligencia artificial, automatización y desarrollo web para emprendedores y PyMEs. *Inteligencia Artificial con Propósito.*

Para el historial de cambios, decisiones y pendientes, lee [`MEMORY.md`](./MEMORY.md).

## Stack

- [React 19](https://react.dev) + [Vite 7](https://vite.dev)
- [Tailwind CSS 3](https://tailwindcss.com) con la paleta de marca en `tailwind.config.js` y el sistema visual en `src/index.css`
- Animaciones con CSS y un par de hooks propios (sin librerías de animación ni de íconos)
- Fuentes auto-hospedadas: DM Sans (logotipo, títulos y texto) y JetBrains Mono (etiquetas)
- Hospedado en [Vercel](https://vercel.com), con Vercel Web Analytics y Google Analytics 4

## Desarrollo

Requiere Node 20 o superior.

```bash
npm install
npm run dev       # servidor local en http://localhost:5173
npm run build     # compila a dist/ y deja el HTML ya renderizado (ver "Prerender")
npm run preview   # sirve la versión compilada
npm run lint
```

## Estructura

```
src/
├── App.jsx              # orden de las secciones
├── main.jsx             # entrada del navegador: fuentes, GA4 y Vercel Analytics
├── entry-server.jsx     # entrada para el prerender
├── index.css            # sistema visual: variables, retícula, tipografía, botones
├── sections/            # Hero, Approach, Services, Notion, Process, Projects,
│                        # Metrics, Testimonials, Contact, Footer
├── components/          # Navbar, LogoAnimation, LogoMark, Ruler, Reveal,
│                        # figuras isométricas (ServiceFigure, ProcessFigure), …
├── data/                # textos y listas de cada sección; geometría del logo
├── config/contact.js    # correo, WhatsApp y Formspree
├── lib/                 # analytics.js (GA4) e iso.js (proyección isométrica)
└── hooks/               # useInView, useScrollProgress
scripts/prerender.js     # inserta el HTML renderizado en dist/index.html
public/                  # og-image.jpg, robots.txt, sitemap.xml y la página del curso
```

Para cambiar textos de servicios, proyectos, proceso o testimonios, edita el archivo correspondiente en `src/data/`.

## Sistema visual

Dirección "Human-Centered Industrial": lienzo claro, retícula visible, titulares editoriales, etiquetas en mono y los nodos del isotipo como señal recurrente (cruces de la retícula, viñetas, estados activos).

- Paleta "Electric Teal" (16 nov 2026): teal `#00C4BA` como acento, turquesa del logo `#00A69C`, oscuro `#123638`, gris del logotipo `#606B77` y neutros sin tinte verde. Están como variables en `src/index.css` y como colores de Tailwind (`teal`, `teal-deep`, `ink`, `paper`, `line`…).
- La animación del logo (`components/LogoAnimation.jsx`) y su geometría (`data/logoGeometry.js`) son las originales; el hero solo las enmarca.
- Dentro de `.theme-dark` las variables se invierten solas (se usa en la franja de resultados).
- Todas las animaciones respetan "reducir movimiento" y, sin JavaScript, el contenido queda visible.

## Prerender

`npm run build` hace tres pasos: compila el sitio (`dist/`), compila la misma app para Node (`dist-ssr/`, temporal) y ejecuta `scripts/prerender.js`, que escribe el HTML de la página dentro de `dist/index.html`. Así buscadores y vistas previas de enlaces reciben el contenido sin ejecutar JavaScript, y el texto aparece antes de que cargue React, que luego lo hidrata.

Regla al escribir componentes: no usar `window` ni `document` durante el render (solo dentro de `useEffect` o de manejadores de eventos).

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
