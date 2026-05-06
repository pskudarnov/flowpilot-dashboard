# FlowPilot — SaaS Analytics Dashboard

FlowPilot is a production-ready demo SaaS analytics dashboard built for portfolio showcase.

Live demo: http://64.188.63.171:3210

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
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
```

## Deployment notes

- PM2 process name: `flowpilot-dashboard`
- Port: `3210`
- Start command:

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
