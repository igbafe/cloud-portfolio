# Peter Igbafe — Cloud Engineer Portfolio

A responsive, single-page portfolio introducing Peter Igbafe's cloud engineering work, technical skills, professional experience, and education. It is designed to let visitors scan the profile, explore detailed project write-ups and source repositories, then get in touch.

## Explore the site

The page is arranged as a guided scroll from introduction to contact:

1. **Home** — The opening section summarizes Peter's focus and links directly to selected work, email, and GitHub.
2. **Work** — Two featured cloud projects include architecture diagrams, implementation highlights, technology tags, and links to project notes and code. Select a diagram to open it at full size.
   - **AWS K3s Cluster with Terraform** — A self-managed Kubernetes platform on EC2, with ingress, TLS, and GitOps delivery.
   - **E-commerce Platform on AWS** — A 24-service delivery workflow covering image builds, AWS infrastructure, Kubernetes deployment, and observability.
3. **Stack** — Skills are grouped into cloud, infrastructure as code, containers and delivery, Linux and web, networking, and development.
4. **Experience** — A timeline of cloud engineering, software development, and IT support roles.
5. **Education & certification** — Engineering degree and front-end development certificate.
6. **Contact** — Email, phone, GitHub, and LinkedIn links, followed by a back-to-top link.

Use the header links to jump to **Work**, **Stack**, **Experience**, or **Contact**. The brand name returns to the top. On narrow screens, open the menu button to reach the same navigation links. The **Let's Talk** button and contact links provide direct ways to connect. The theme switch changes between light and dark modes; the initial theme follows the device preference, and a manual choice is remembered in the browser.

## Technologies used to build this site

- **React 18** — Renders the page as reusable components and sections.
- **JavaScript (ES modules)** — Holds the UI behavior and portfolio data.
- **Vite 6** — Development server and production build tool.
- **CSS** — Custom styles, design tokens, responsive layouts, theme colors, and reduced-motion support; no CSS framework is used.
- **Intersection Observer** — Reveals content as it enters the viewport, with a fallback for browsers that do not support it.
- **Browser APIs** — `localStorage` remembers the theme, and `prefers-color-scheme` selects the initial theme.
- **Google Fonts** — Space Grotesk and JetBrains Mono.

The AWS, Terraform, Kubernetes, and observability technologies listed in the project cards describe the featured cloud projects, not the implementation stack of this portfolio website.

## Run locally

You will need Node.js and npm installed.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal. To create and preview a production build:

```bash
npm run build
npm run preview
```

## Update portfolio content

- Edit profile details, project descriptions and links, skill groups, work history, and education in `src/data/portfolio.js`.
- Update section layouts and content rendering in `src/sections/`.
- Update shared interface elements, such as project cards and navigation, in `src/components/`.
- Adjust design tokens, theme styles, page layout, and responsive behavior in `src/styles/`.
- Replace or add project diagrams in `public/architecture/` and update their paths in `src/data/portfolio.js`.
- Replace the portrait at `profile-pic.PNG` to change the hero image.

## Project structure

```text
.
├── public/
│   ├── architecture/       # Featured project diagrams
│   └── favicon.svg
├── src/
│   ├── components/         # Shared UI components
│   ├── data/               # Portfolio content
│   ├── sections/           # Page sections
│   ├── styles/             # Global, layout, theme, and responsive CSS
│   ├── App.jsx             # Page composition
│   └── main.jsx            # React entry point
├── profile-pic.PNG
├── index.html
├── package.json
└── vite.config.js
```
