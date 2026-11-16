# MEMORY — sitio cognytia.mx

Bitácora del sitio para retomar el trabajo. Léela antes de hacer cambios y actualízala al terminar.

Última actualización: 16 de noviembre de 2026 (paleta "Electric Teal" publicada).

---

## Dónde vive cada cosa

| Qué | Dónde |
| --- | --- |
| Producción | https://www.cognytia.mx (la raíz redirige a `www`) |
| Repositorio | GitHub `xuarez29/cognytia-solutions-site`, rama de trabajo `main` |
| Hosting | Vercel, proyecto `cognytia-solutions-site-iix6` |
| Copia local | `/Volumes/CognytIA/CognytIA/CognytIA-Website/cognytia-solutions-react-prod` (disco externo "CognytIA") |
| Guía de marca para slides | `/Volumes/CognytIA/CognytIA/CognytIA-Website/marca/` (fuera del repositorio; ver historial del 15 nov) |

**Despliegue:** todo push o merge a `main` se publica solo en Vercel en uno o dos minutos. Cada rama distinta de `main` genera una vista previa en Vercel (requiere iniciar sesión en Vercel para verla).

## Stack

- React 19 + Vite 7 + Tailwind CSS 3. Sin librerías de animación ni de íconos: las animaciones son CSS y dos hooks propios (`useInView`, `useScrollProgress`); los íconos son SVG en `src/components/Icons.jsx`.
- Fuentes auto-hospedadas con `@fontsource-variable`: DM Sans (logotipo, títulos y texto) y JetBrains Mono (etiquetas).
- Sitio de una sola página. `src/App.jsx` define el orden de las secciones (`src/sections/`).
- `npm run build` incluye un prerender (`scripts/prerender.js`): deja el HTML de la página en `dist/index.html` y React lo hidrata. No usar `window` ni `document` durante el render.
- Sistema visual en `src/index.css` (variables, retícula, tipografía, botones). Colores de marca en `tailwind.config.js` (paleta "Electric Teal"): teal `#00C4BA`, oscuro `#123638`, gris del logotipo `#606B77`; el logo usa `#00A69C`.
- `vercel.json` reescribe todas las rutas a `/` (con reglas propias antes para la página del curso).

## Cómo trabajar

```bash
cd "/Volumes/CognytIA/CognytIA/CognytIA-Website/cognytia-solutions-react-prod"
git pull            # siempre primero
npm install         # si cambió package-lock.json
npm run dev         # http://localhost:5173
npm run build       # comprobar antes de subir
```

Flujo recomendado: crear una rama, subirla, revisar la vista previa de Vercel, abrir un pull request y fusionarlo a `main` para publicar.

## Historial

### 16 nov 2026 (paleta "Electric Teal", publicada)

Cambio solo de color sobre el rediseño "Human-Centered Industrial"; sin cambios de layout, tipografía, contenido ni comportamiento. Se probó en la rama `experiment/electric-teal` con vistas previas de Vercel y Carlos lo aprobó.

- **Paleta** (`src/index.css` y `tailwind.config.js`): lienzo `#F7F8F7`, tinta `#202728`, tinta suave `#626B70`, tinta tenue `#808A8E`, teal `#00C4BA`, teal profundo `#123638`, teal medio `#205455`, tinte `#DDF7F4`. Los neutros ya no tienen tinte verde. Secciones oscuras: fondo `#123638`, panel `#184345`.
- **`--teal-spark` es `#009F98`**, no el `#00AAA2` propuesto: se usa en íconos pequeños sobre fondo claro y así llega a 3:1.
- **Logo** (`LogoMark.jsx`, `LogoAnimation.jsx`, clases `la-*` y `.wordmark b`): color principal `#00A69C` ("Electric Teal Medium", variable `--teal-logo`), conexiones y sombra del degradado `#008F87`, tono intermedio `#00B5AB`, pulsos y anillos `#00C4BA`, estelas `#70DDD5`. Se probó antes `#008F87` como principal y se descartó por oscuro. Geometría y tiempos sin cambio.
- **Botones:** el principal (`.btn--solid`) y "Hablemos" del menú son teal con texto y borde en teal profundo; al pasar el cursor se invierten. El botón flotante de WhatsApp sigue oscuro.
- **Contraste:** el teal `#00C4BA` da 2:1 sobre el lienzo claro, así que no se usa para texto pequeño ahí; sobre el oscuro da 6:1.
- La página del curso de conservadores no se tocó.

### 15 nov 2026 (rediseño "Human-Centered Industrial", PR #26, publicado)

Rediseño completo de la página principal, pedido por Carlos. Se trabajó en la rama `redesign/human-industrial`, se revisó en la vista previa de Vercel y se publicó el mismo día con el PR #26, después de que Carlos lo aprobó de forma explícita. El diseño anterior sigue en el historial de `main` (commit `5bd71f4`) por si hay que volver a él.

1. **Dirección visual.** Lienzo claro, retícula visible, titulares editoriales grandes, etiquetas en mono y figuras isométricas propias. La señal de marca son los nodos del isotipo: marcan los cruces de la retícula, las viñetas y los estados activos.
2. **Lo que se conservó.** Colores corporativos (mismos valores), logotipo "CognytIA" en DM Sans gris + teal, isotipo y su animación original del hero (`LogoAnimation.jsx` sin cambios de comportamiento; solo se movió su geometría a `src/data/logoGeometry.js` para reutilizarla en el isotipo estático), lema "IA con propósito.", servicios, proyectos, métricas, testimonios, formulario (Formspree, mismos campos y mismo cuerpo), WhatsApp, GA4, Vercel Analytics y el enlace a Cursos.
3. **Página del curso.** `public/cursos/conservadores-cosmeticos/` no se tocó (idéntica byte a byte).
4. **Estructura nueva de la página.** Hero → Enfoque → Servicios → Notion para empresas → Proceso → Proyectos → Resultados → Testimonios → Contacto → Pie. Entre secciones hay una regla graduada con el número de sección.
5. **Piezas interactivas.** Texto del enfoque que se "enciende" al leer; figura del proceso que se construye con el scroll (fija en escritorio, una por paso en móvil); expediente de proyectos con diagrama de flujo (acordeón en móvil); vista esquemática de un espacio de trabajo de Notion con pestañas.
6. **Cambios técnicos.**
   - Se quitaron `framer-motion`, `lucide-react` y `@fontsource-variable/inter`: las animaciones son CSS + dos hooks (`useInView`, `useScrollProgress`) y los íconos son SVG propios. DM Sans se usa también para el texto.
   - **Prerender:** `npm run build` ahora también renderiza la página a HTML (`scripts/prerender.js`) y React la hidrata. Si el prerender no corre, el sitio funciona igual como SPA.
   - SEO: se conservaron título, descripción, canonical, Open Graph, Twitter y JSON-LD; se agregaron el lema y el catálogo de servicios al JSON-LD, `apple-touch-icon` y se actualizó `lastmod` del sitemap.
   - Nuevos eventos `whatsapp_click` con `source: 'contact_section'` y `source: 'footer'` (antes solo el botón flotante lo medía).
7. **Verificación (local, build de producción).** Compila y pasa `npm run lint` sin errores. Probado a 375, 768 y 1440 px sin desbordamiento horizontal. Menú móvil, anclas, pestañas, acordeón y validación del formulario funcionan. Lighthouse (local): rendimiento 96 en móvil y 100 en escritorio, accesibilidad 97, SEO 100 (producción anterior: 76 / 91 / 100). El único aviso de accesibilidad es el contraste del "IA" teal del logotipo, que se dejó igual por ser color de marca.
8. **Verificación en producción (después de fusionar).** Responden 200 la raíz (con y sin `www`), el curso (con y sin `/` final), su aviso de privacidad, `sitemap.xml`, `robots.txt`, `og-image.jpg` y el favicon. La página del curso es idéntica byte a byte. GA4 y Vercel Analytics cargan; sin errores en consola. **Carlos confirmó** que un mensaje real del formulario llegó a su correo y que el sitio se ve bien en Safari de iPhone.

### 15 nov 2026 (guía de marca para slides)

A pedido de Carlos, el sistema visual del rediseño quedó documentado para usarlo en presentaciones. Vive **fuera del repositorio** (no se publica en el sitio), en `/Volumes/CognytIA/CognytIA/CognytIA-Website/marca/`:

- `guia-estilo-slides-cognytia.md`: principios, paleta con usos y proporciones, reglas de contraste, tipografía con escala en puntos (PowerPoint/Keynote y factor para Google Slides), retícula 16:9, elementos de marca (nodos, láminas técnicas, isométricos, regla graduada, botones), reglas del logo, 9 plantillas de slide, movimiento, voz y una instrucción lista para copiar a herramientas de IA.
- `isotipo-cognytia-fondo-claro.svg` e `isotipo-cognytia-fondo-oscuro.svg`: el isotipo exportado desde `src/data/logoGeometry.js` (mismo trazo que el sitio).

Si cambian colores, tipografía o el estilo del sitio, actualizar también esta guía.

### 15 nov 2026 (revisión y limpieza)

1. **Comparación con el sitio en vivo.** La copia local, `origin/main` y producción están en el mismo commit (`647064d`, PR #24). Los archivos de `public/` son idénticos byte a byte a los publicados, y la compilación local produce el mismo JS y CSS. La única diferencia es que en Vercel sí están configuradas `VITE_WHATSAPP_NUMBER` y `VITE_FORMSPREE_ID`, con los mismos valores que los de respaldo.
2. **Limpieza local.** Se borró `dist/` (compilación vieja del 28 oct), el archivo `PROMPT-continuar-diagnostico-cognytia.md` y un `package-lock.json` vacío en la carpeta superior, una copia duplicada `.git/index 2` y la referencia a la rama remota `nota-iva-tarjeta`, que ya no existía.

### 29 oct 2026 (PRs #15 a #24, publicados)

Ajustes a la página del curso "Conservadores en cosméticos":
- Botones de reserva del encabezado y de la barra móvil abren WhatsApp; en celular se quitó el botón del encabezado.
- Correo de informes en el pie de página.
- Preguntas frecuentes: preguntas sobre formulaciones, confirmación por WhatsApp y que con factura el precio es más IVA.
- Ajustes de copy; la tarjeta de precio no menciona factura y lleva una nota discreta de IVA.
- GA4 en la página del curso, con eventos de clic en WhatsApp y correo.
- Aviso de privacidad en `/cursos/conservadores-cosmeticos/privacidad/` (regla propia en `vercel.json`) con enlace en el pie.

### 28 oct 2026 (curso publicado)

1. **Curso "Conservadores en cosméticos" como página independiente.**
   - Página completa del curso en `public/cursos/conservadores-cosmeticos/` (HTML y CSS propios, no React). Se sirve en `/cursos/conservadores-cosmeticos/`; `vercel.json` tiene una regla antes de la reescritura general para que la ruta sin `/` final también funcione.
   - Decisión de Carlos: el curso es independiente de los servicios de CognytIA. No aparece como sección en la página principal y la página del curso no enlaza de regreso al sitio ni lleva la marca de CognytIA: su encabezado y pie muestran el nombre del curso, tiene ícono propio y el título de la pestaña no dice CognytIA. Solo el dominio aparece en los datos ocultos para compartir (`canonical`, `og:url`, `og:image`). Solo hay un enlace de ida: "Cursos" en el menú y en el pie de página (`src/data/navigation.js`).
   - `Navbar.jsx` y `Footer.jsx` ahora dejan navegar normal los enlaces que no empiezan con `#`; antes todos se interceptaban para desplazarse dentro de la página.
   - La fuente original de la página del curso está en `/Volumes/CognytIA/Projects/Cursos/Cosmeticos/sites/conservadores-cosmeticos/dist`. Si se edita una, hay que copiar los cambios a la otra.
   - Página del curso agregada a `public/sitemap.xml`.
   - También se cambiaron la imagen del hero, la de vista previa al compartir y la foto del instructor, y se agregaron el precio regular y la fecha de cierre de inscripciones.

### 23 oct 2026

1. **Nuevo Hero con el logo animado** (PR #1).
   - Componente `src/components/LogoAnimation.jsx`: logo de CognytIA reconstruido en SVG. Secuencia: partículas que forman los nodos → conexiones que se trazan → una chispa dibuja la C → barrido de luz, ondas en los nodos y pulsos de "corriente" en bucle. Se pausa fuera de pantalla, respeta "reducir movimiento" y se repite al hacer clic.
   - Estilos de la animación al final de `src/index.css` (clases `la-*` dentro de `.logo-anim`).
   - `src/sections/Hero.jsx`: se quitó la red de nodos genérica y la C pequeña sobre el título. El logo animado ocupa la columna derecha con halo y órbitas; en móvil aparece arriba del texto.
   - Existe una versión independiente de la animación como página HTML en Claude (fondo claro y fondo oscuro), útil para video, presentaciones o redes.
2. **Vercel Web Analytics activo** (PR #2). `@vercel/analytics` con `<Analytics />` en `src/main.jsx`. Ya está activado en el panel de Vercel y registra visitas.
3. **Parches de seguridad** (PR #3). `npm audit fix` sin `--force`; solo cambió `package-lock.json`. Pasó de 18 avisos a 3 moderados.
4. **Copia local sincronizada.** Estaba en el diseño viejo (commit `29119b8`); se puso en `origin/main`. El commit viejo "Añadir Vercel Web Analytics" se rehízo sobre el diseño actual en el PR #2.
5. **SEO y vista previa al compartir** (PR #5). URL canónica `https://www.cognytia.mx/`; `og:image` y `twitter:image` con URL absoluta más tamaño, tipo y texto alternativo; `og:url`, datos estructurados (JSON-LD), `robots.txt` y `sitemap.xml` apuntan a `www` (antes apuntaban a `cognytia.mx`, que solo redirige).
6. **Formulario de contacto verificado** por Carlos: los mensajes llegan a su correo de CognytIA.
7. **GA4 activo** (PR #6 y #7). Se corrigió `gtag` en `src/lib/analytics.js` (empujaba un arreglo y GA4 lo ignoraba). Propiedad en la cuenta de Google carlos@cognytia.mx, ID de medición `G-8B3FXGZX7J`, puesto como valor por defecto en el código (se puede sobrescribir con `VITE_GA_MEASUREMENT_ID` en Vercel). Solo mide en `www.cognytia.mx` y `cognytia.mx`; local y vistas previas no envían datos. Eventos ya instrumentados: `whatsapp_click` y `form_submit`.
8. **Mantenimiento** (PR #8).
   - Correo, WhatsApp y ID de Formspree centralizados en `src/config/contact.js`, con valores por defecto: si una variable falta en Vercel, ya no se generan enlaces rotos. `.env.example` documenta que todas son opcionales.
   - `README.md` reescrito con la descripción real del proyecto.
   - El diseño viejo (antes en las ramas `dev` y `backup-main`, con historial no relacionado a `main`) quedó archivado en la rama `archivo-diseno-anterior`.
9. **Limpieza de ramas.** En GitHub solo quedan `main` y `archivo-diseno-anterior`; está activo "Automatically delete head branches", así que cada rama se borra sola al fusionar su pull request. En la copia local solo queda `main`.
10. **Git en la Mac.** Se aceptó la licencia de Xcode (`sudo xcodebuild -license accept`), necesaria para usar `git` desde la Terminal de macOS.

## Pendientes

1. **Retomar el 16 nov 2026.** Carlos cerró la sesión del 15 nov con el rediseño publicado y verificado; no quedó nada a medias. Revisar con él qué sigue.
2. **Tailwind 3 → 4.** Los 3 avisos moderados de `npm audit` vienen de Tailwind 3 y solo se resuelven migrando a Tailwind 4, que cambia la configuración y puede romper estilos. Son de compilación y no afectan al sitio publicado. No correr `npm audit fix --force`.

## Notas

- Fusión de pull requests (actualizado el 29 oct 2026): Carlos autorizó que Claude publique directamente los cambios que él pida. Claude crea la rama, abre el pull request, espera a que pasen las verificaciones de Vercel, lo fusiona a `main` con `gh pr merge` y luego revisa la página en vivo, sin pedirle a Carlos que lo fusione. Solo aplica a cambios que Carlos pidió. La cuenta de `gh` tiene permisos de administrador y `main` no está protegida; si la app de Claude Code bloquea el comando de fusión, Carlos lo autoriza en el aviso de permisos.
- Las apps de mensajería guardan en caché la vista previa de cada enlace. Si una vista previa vieja sigue apareciendo sin imagen, se puede forzar la actualización con el Post Inspector de LinkedIn o el Sharing Debugger de Facebook.
- Los datos estructurados de `index.html` declaran el correo `hola@cognytia.mx`; Carlos confirmó que existe y es correcto.
- `npm run lint` marca `'motion' is defined but never used` en archivos que usan `<motion.div>`. Es un falso positivo de la configuración de ESLint que ya existía; no afecta la compilación. (Desde el rediseño ya no aparece: el sitio no usa framer-motion.)
