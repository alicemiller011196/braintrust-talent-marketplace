# Braintrust Talent Marketplace MVP

A responsive Next.js web app for exploring independent talent, browsing client projects, and previewing a shared hiring workspace.

## Run the website locally

You need Node.js 18.17 or newer. From a terminal:

```bash
git clone https://github.com/alicemiller011196/braintrust-talent-marketplace.git
cd braintrust-talent-marketplace
npm install
npm run dev
```

Keep the terminal open while the server runs, then open http://localhost:3000 in a browser on the same computer. `localhost` is not a public URL; to share the site, deploy the repository to a hosting provider such as Vercel.

## Included pages

- `/` — marketplace landing page
- `/talent` — talent discovery
- `/projects` — open project listings
- `/projects/p1` — sample project detail and proposal UI
- `/dashboard` — client workspace preview
- `/login` and `/signup` — UI-only account screens

## Stack

- Next.js 14 App Router
- React 18 and TypeScript
- Tailwind CSS
- Local sample data in `data/mock-data.ts`

## Current limitations

This is a frontend prototype using mock data. Login/signup, proposal submission, chat, payments, and database persistence are not connected yet. No Emergent project has been linked or imported; to reproduce a particular Emergent-generated design, export or share its source files and add them to this repository.

## Build check

```bash
npm run build
```
