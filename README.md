# FlowPilot — SaaS Analytics Dashboard

FlowPilot is a portfolio-ready SaaS analytics dashboard demo built with Next.js, TypeScript and Tailwind CSS.

Live demo:
- Production: https://flowpilot-demo.vercel.app
- Local fallback: http://64.188.63.171:3210

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Recharts
- lucide-react
- clsx
- ESLint + Prettier

## Features

- Premium dark SaaS landing
- Responsive dashboard layout
- KPI cards, charts, tasks table, activity feed
- Mock-data driven architecture
- SEO metadata, robots, sitemap, OG image
- Accessibility basics (semantic landmarks, headings, focus-visible, readable labels)
- Active navigation states
- Reduced-motion friendly transitions and reveal animations
- Mobile task cards + desktop analytics table layout

## Pages

- `/` landing
- `/dashboard` analytics UI
- `/pricing` pricing + FAQ

## Architecture

- `src/components/layout/*` global shell
- `src/components/landing/*` landing sections
- `src/components/dashboard/*` dashboard widgets
- `src/components/ui/*` reusable UI primitives
- `src/data/*` mock data
- `src/lib/*` formatting and utilities

## Environment

Create `.env.local`:

```bash
cp .env.example .env.local
```

Variables:

```env
NEXT_PUBLIC_SITE_URL=https://flowpilot-demo.vercel.app
PORT=3210
```

## Run locally

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run lint
npm run typecheck
npm run build
npm run format
npm run format:check
npm run test:smoke
```

## Smoke tests

Simple smoke coverage exists for:

- `/`
- `/dashboard`
- `/pricing`

Run after starting the app:

```bash
npm run dev
npm run test:smoke
```

## Lighthouse / SEO checklist

Before deployment:

- Verify metadataBase uses production domain
- Check canonical URLs
- Validate OpenGraph preview
- Confirm robots + sitemap accessibility
- Run Lighthouse on desktop and mobile
- Validate keyboard navigation and focus states
- Check contrast in dark mode
- Verify responsive layout at 375px, 768px, 1280px+
- Confirm no console errors during navigation

## Deployment notes

Recommended:

- Vercel for portfolio deployment
- Node.js >=20.9.0
- PM2 optional for VPS deployment

Example PM2 command:

```bash
PORT=3210 pm2 start npm --name flowpilot-dashboard -- start
```

## What this project demonstrates

- Dashboard UI composition
- Responsive SaaS layout
- Mock-data driven components
- Charts and metrics visualization
- TypeScript component architecture
- Accessibility and SEO basics
- Production-style frontend polish
