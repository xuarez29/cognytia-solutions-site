# MEMORY — sitio cognytia.mx

Bitácora del sitio para retomar el trabajo. Léela antes de hacer cambios y actualízala al terminar.

Última actualización: 23 de octubre de 2026.

---

## Dónde vive cada cosa

| Qué | Dónde |
| --- | --- |
| Producción | https://www.cognytia.mx (la raíz redirige a `www`) |
| Repositorio | GitHub `xuarez29/cognytia-solutions-site`, rama de trabajo `main` |
| Hosting | Vercel, proyecto `cognytia-solutions-site-iix6` |
| Copia local | `/Volumes/CognytIA/CognytIA/CognytIA-Website/cognytia-solutions-react-prod` (disco externo "CognytIA") |

**Despliegue:** todo push o merge a `main` se publica solo en Vercel en uno o dos minutos. Cada rama distinta de `main` genera una vista previa en Vercel (requiere iniciar sesión en Vercel para verla).

## Stack

- React 19 + Vite 7 + Tailwind CSS 3 + framer-motion + lucide-react.
- Fuentes auto-hospedadas con `@fontsource-variable`: DM Sans (títulos), Inter (texto) y JetBrains Mono (etiquetas).
- Sitio de una sola página. `src/App.jsx` carga `Navbar`, `Hero` y `Services` de inmediato; el resto de las secciones (`src/sections/`) se cargan diferidas con `lazy`.
- Colores de marca en `tailwind.config.js`: teal `#3DBCB8`, oscuro `#0A2E2E`.
- `vercel.json` reescribe todas las rutas a `/`.

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

### 23 oct 2026

1. **Nuevo Hero con el logo animado** (PR #1).
   - Componente `src/components/LogoAnimation.jsx`: logo de CognytIA reconstruido en SVG. Secuencia: partículas que forman los nodos → conexiones que se trazan → una chispa dibuja la C → barrido de luz, ondas en los nodos y pulsos de "corriente" en bucle. Se pausa fuera de pantalla, respeta "reducir movimiento" y se repite al hacer clic.
   - Estilos de la animación al final de `src/index.css` (clases `la-*` dentro de `.logo-anim`).
   - `src/sections/Hero.jsx`: se quitó la red de nodos genérica y la C pequeña sobre el título. El logo animado ocupa la columna derecha con halo y órbitas; en móvil aparece arriba del texto.
   - Existe una versión independiente de la animación como página HTML en Claude (fondo claro y fondo oscuro), útil para video, presentaciones o redes.
2. **Vercel Web Analytics activo** (PR #2). `@vercel/analytics` con `<Analytics />` en `src/main.jsx`. Ya está activado en el panel de Vercel y registra visitas.
3. **Parches de seguridad** (PR #3). `npm audit fix` sin `--force`; solo cambió `package-lock.json`. Pasó de 18 avisos a 3 moderados.
4. **Copia local sincronizada.** Estaba en el diseño viejo (commit `29119b8`); se puso en `origin/main`. El commit viejo "Añadir Vercel Web Analytics" quedó guardado en la rama local `respaldo-local-analytics` (ya no hace falta, se puede borrar).

## Pendientes

1. **Tailwind 3 → 4.** Los 3 avisos moderados de `npm audit` vienen de Tailwind 3 y solo se resuelven migrando a Tailwind 4, que cambia la configuración y puede romper estilos. Son de compilación y no afectan al sitio publicado. No correr `npm audit fix --force`.
2. **Activar GA4.** El código ya existe (`src/lib/analytics.js` + `initGA()` en `src/main.jsx`), pero falta la variable `VITE_GA_MEASUREMENT_ID` (formato `G-XXXXXXXXXX`) en Vercel → Settings → Environment Variables, y luego redeploy.
3. **Vistas previas al compartir.** En `index.html`, `og:image` y `twitter:image` usan la ruta relativa `/og-image.jpg`; cambiarlas a `https://www.cognytia.mx/og-image.jpg`.
4. **URL canónica.** Agregar `<link rel="canonical" href="https://www.cognytia.mx/">` en `index.html`.
5. **Respaldos si faltan variables.** `WhatsAppButton.jsx` y `Contact.jsx` usan `VITE_WHATSAPP_NUMBER` y `VITE_FORMSPREE_ID` sin respaldo; si una llega vacía se generan enlaces rotos. Confirmar que `VITE_FORMSPREE_ID` está configurada y que el formulario realmente envía.
6. **Limpieza de ramas en GitHub.** `dev`, `backup-main` y `preview` apuntan a versiones viejas y confunden. Las ramas ya fusionadas (`hero-logo-animado`, `analytics-vercel`, `deps-seguridad`) también se pueden borrar.
7. **README.** `README.md` es la plantilla genérica de Vite; reemplazarlo por una descripción real del proyecto.

## Notas

- El archivo `PROMPT-continuar-diagnostico-cognytia.md` en la carpeta superior (`CognytIA-Website/`) quedó desactualizado: dice que la copia local está en la versión vieja, y ya no es así. Esta bitácora lo reemplaza.
- `npm run lint` marca `'motion' is defined but never used` en archivos que usan `<motion.div>`. Es un falso positivo de la configuración de ESLint que ya existía; no afecta la compilación.
