/**
 * navigation.js
 * Fuente única de verdad para los enlaces de navegación y redes sociales.
 * Usado por Navbar y Footer — editar aquí aplica a ambos.
 *
 * Los enlaces que empiezan con "#" se desplazan dentro de la página;
 * los demás (p. ej. /cursos/…) navegan a otra página.
 */

export const navLinks = [
  { label: 'Servicios',  href: '#servicios' },
  { label: 'Notion',     href: '#notion'    },
  { label: 'Proceso',    href: '#proceso'   },
  { label: 'Proyectos',  href: '#proyectos' },
  { label: 'Cursos',     href: '/cursos/conservadores-cosmeticos/' },
  { label: 'Contacto',   href: '#contacto'  },
]

export const socials = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/cognytia',
  },
]
