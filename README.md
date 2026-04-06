# Wert AI marketing site

Next.js (App Router) + TypeScript + Tailwind CSS v4. Single-page landing for pilots, partners, and EXIST-style outreach.

## Develop

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact API

`POST /api/contact` accepts JSON: `{ name, email, company, body }`.

By default the handler validates input and returns success; in development it logs a short preview. To deliver mail in production, add your provider inside `app/api/contact/route.ts` (e.g. [Resend](https://resend.com)) and set the required environment variables in your host.

## Deploy (recommended)

[Vercel](https://vercel.com) is the simplest path for Next.js: import the repo, set **Root Directory** to `website`, deploy. GitHub Actions in the parent folder run `lint` and `build` on changes under `website/`.

Alternatives: self-host with `npm run build` + `npm run start`, or Docker.

## CI

From the repository root (parent of `website/`), workflow `.github/workflows/ci.yml` runs on pushes/PRs that touch `website/`.
