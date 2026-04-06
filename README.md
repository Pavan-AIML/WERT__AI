# Wert AI marketing site

Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact API

`POST /api/contact` accepts JSON: `{ name, email, company, body }`.

By default the handler validates input and returns success; in development it logs a short preview. To deliver mail in production, add your provider inside `app/api/contact/route.ts` (e.g. [Resend](https://resend.com)) and set the required environment variables in your host.

## CI/CD

- **CI:** GitHub Actions workflow at `.github/workflows/ci.yml` runs `lint` + `build` on every push to `main` and every pull request.
- **CD (Vercel):** connect this GitHub repository in [Vercel](https://vercel.com), keep root directory as repository root, and Vercel will auto-deploy on every push to `main` (Preview deployments for PRs).

## Deploy (recommended)

[Vercel](https://vercel.com) is the simplest path for Next.js.

Alternatives: self-host with `npm run build` + `npm run start`, or Docker.
