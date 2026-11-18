# Peter Igbafe — Cloud Engineer Portfolio

A React and Vite portfolio. Profile, project, skill, and work-history content lives in `src/data/portfolio.js`; page sections and shared UI components are kept in separate files. Project architecture diagrams are in `public/architecture/`. The theme switch respects the system preference by default and remembers a manual selection.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, then preview it using `npm run preview`.

## Project structure

- `src/data/portfolio.js` — profile details, skills, experience, and project links.
- `src/sections/` — the page sections, each with its own component.
- `src/components/` — navigation, project cards, timeline items, icons, and reveal animation.
- `src/styles/` — design tokens, page layout, sections, and responsive rules.
- `public/architecture/` — the K3s and E-commerce project diagrams shown in the project cards.
- `profile-pic.PNG` — source portrait used by the hero section.
