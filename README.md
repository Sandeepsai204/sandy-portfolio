# Sandeep Pucha — Portfolio

Personal portfolio built with **React 18 + Vite**, deployed on **Vercel**. Fully responsive (mobile-first), with light/dark themes and no backend.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```

## Editing content

All text lives in [`src/data.js`](src/data.js) — profile, stats, experience, projects, skills and education. The resume PDF is served from `public/Sandeep_Pucha_AI_Fullstack_Developer.pdf`; replace that file to update it.

## Deploy

Import this repo at [vercel.com/new](https://vercel.com/new). Vercel auto-detects Vite (build: `npm run build`, output: `dist`). Every push to `main` redeploys.
