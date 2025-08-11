#!/usr/bin/env bash
# ------------------------------------------------------------
# Deploy pro para Cognytia (Vite + Vercel + GitHub)
# Uso:
#   ./deploy.sh "Mensaje de commit"
#   ./deploy.sh               # (usa mensaje con timestamp)
# ------------------------------------------------------------

set -euo pipefail

# ===== Config =====
PROD_BRANCH="main"
GIT_REMOTE_NAME="origin"
VERCEL_DASHBOARD="https://vercel.com/xuarez29s-projects/cognytia-solutions-site-iix6"
PUBLIC_DOMAIN="https://cognytia.mx"

# ===== Utilidad (colores) =====
C_RESET="\033[0m"; C_INFO="\033[36m"; C_OK="\033[32m"; C_WARN="\033[33m"; C_ERR="\033[31m"
say()   { echo -e "${C_INFO}👉 $*${C_RESET}"; }
ok()    { echo -e "${C_OK}✅ $*${C_RESET}"; }
warn()  { echo -e "${C_WARN}⚠️  $*${C_RESET}"; }
fail()  { echo -e "${C_ERR}❌ $*${C_RESET}"; exit 1; }

# ===== Chequeos rápidos =====
[ -f package.json ] || fail "No encuentro package.json. ¿Estás en la raíz del proyecto?"
[ -d .git ]         || fail "No es un repo Git. Ejecuta 'git init' y vuelve a intentar."

command -v node >/dev/null || fail "Node no está instalado."
command -v npm  >/dev/null || fail "npm no está instalado."
command -v git  >/dev/null || fail "git no está instalado."

# ===== Rama / remoto =====
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [ "$CURRENT_BRANCH" != "$PROD_BRANCH" ]; then
  say "Cambiando de rama ($CURRENT_BRANCH → $PROD_BRANCH)…"
  git checkout -B "$PROD_BRANCH"
fi

if ! git remote get-url "$GIT_REMOTE_NAME" >/dev/null 2>&1; then
  fail "No hay remoto llamado '$GIT_REMOTE_NAME'. Agrega, por ejemplo:
  git remote add origin https://github.com/xuarez29/cognytia-solutions-site.git"
fi

# ===== Mensaje de commit =====
if [ $# -gt 0 ]; then
  COMMIT_MSG="$*"
else
  TS="$(date '+%Y-%m-%d %H:%M:%S')"
  COMMIT_MSG="Deploy: actualización rápida ($TS)"
fi
say "Mensaje de commit: \"$COMMIT_MSG\""

# ===== Dependencias =====
if [ ! -d node_modules ]; then
  say "Instalando dependencias (no existe node_modules)…"
  if [ -f package-lock.json ]; then
    npm ci
  else
    npm install
  fi
else
  say "Verificando dependencias (npm install)…"
  npm install
fi

# ===== Build =====
say "Compilando (npm run build)…"
npm run build

# Validación rápida del build
if [ ! -f dist/index.html ]; then
  fail "No se encontró dist/index.html. Revisa errores de build."
fi

# ===== Git add / commit =====
say "Preparando commit…"
git add -A
if git diff --cached --quiet; then
  warn "No hay cambios nuevos que commitear. Crearé un commit vacío para disparar el deploy."
  git commit --allow-empty -m "$COMMIT_MSG"
else
  git commit -m "$COMMIT_MSG"
fi

# ===== Push =====
say "Haciendo push a $PROD_BRANCH…"
git push -u "$GIT_REMOTE_NAME" "$PROD_BRANCH"

ok "Push hecho. Vercel iniciará el deploy automáticamente."

# ===== Abrir dashboard y sitio =====
open_url() {
  if command -v open >/dev/null 2>&1; then
    open "$1" >/dev/null 2>&1 || true
  elif command -v xdg-open >/dev/null 2>&1; then
    xdg-open "$1" >/dev/null 2>&1 || true
  fi
}

say "Abriendo dashboard de Vercel…"
open_url "$VERCEL_DASHBOARD"

say "Abriendo sitio público…"
open_url "$PUBLIC_DOMAIN"

ok "Listo. Revisa el deployment en Vercel y valida en ${PUBLIC_DOMAIN}."
