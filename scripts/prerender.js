/**
 * prerender.js — deja el HTML de la página ya escrito dentro de dist/index.html.
 *
 * `npm run build` hace tres cosas:
 *   1. vite build                 → dist/        (el sitio para el navegador)
 *   2. vite build --ssr           → dist-ssr/    (la misma app, para Node)
 *   3. este script                → renderiza la app y la inserta en #root
 *
 * Así los buscadores y las vistas previas de enlaces reciben el contenido
 * sin ejecutar JavaScript, y el texto aparece antes de que cargue React.
 * Si algo falla aquí, el build se detiene con un error claro.
 */
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath = path.join(root, 'dist', 'index.html')
const ssrDir = path.join(root, 'dist-ssr')
const marker = '<div id="root"></div>'

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const html = await readFile(htmlPath, 'utf8')

if (!html.includes(marker)) {
  throw new Error(`prerender: no encontré ${marker} en dist/index.html`)
}

const app = render()
await writeFile(htmlPath, html.replace(marker, `<div id="root">${app}</div>`))
await rm(ssrDir, { recursive: true, force: true })

console.log(`prerender: dist/index.html listo (${(app.length / 1024).toFixed(1)} kB de HTML)`)
