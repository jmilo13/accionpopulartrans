# Acción Popular Trans — Empleo digno en Bogotá

Landing mobile-first sobre la acción popular por el cumplimiento de la Meta Estratégica 84 (vinculación laboral de personas trans en entidades del Distrito de Bogotá).

Impulsada por el **Consejo Consultivo LGBTI** y **CULTIVA**.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173/accionpopulartrans/`

## Build

```bash
npm run build
npm run preview
```

## Deploy en GitHub Pages

1. Sube el repo a GitHub con nombre `accionpopulartrans`
2. En **Settings → Pages → Build and deployment**, elige **GitHub Actions**
3. Haz push a la rama `main`

El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) publica automáticamente en cada push.

**URL esperada:** https://jmilo13.github.io/accionpopulartrans/

## Estructura

- `src/content/` — textos tipados de la landing
- `src/pages/` — HomePage
- `src/components/` — SiteHeader, DetailSection, ParticipateCard
- `public/` — logos y PDFs descargables
- [`PENDIENTES.md`](PENDIENTES.md) — contacto, plazos, redes y deploy pendientes

## Pendientes

Ver [`PENDIENTES.md`](PENDIENTES.md) para lo que falta completar antes del lanzamiento.
