# Peter Igbafe | Cloud Engineer Portfolio

A responsive, single-page portfolio for Peter Igbafe, a cloud engineer based in Lagos, Nigeria. It introduces his background, presents two cloud engineering case studies, summarizes his skills and experience, and makes it easy to get in touch.

The portfolio is one continuous page with anchor links, not a set of separate routes. The AWS and Kubernetes technologies described in the project cards belong to those case studies; the portfolio website itself is built with React, JavaScript, Vite, and CSS.

## Guide to the site

| Section | What you'll find | How to get there |
| --- | --- | --- |
| **Home** | Peter's introduction, cloud engineering focus, quick links to work, email, and GitHub | Brand name in the header, or scroll to the top |
| **Projects** | Architecture, implementation highlights, technology tags, project notes, and repositories | **Work** in the header, or **Explore my work** in the introduction |
| **Technical stack** | Skills grouped across cloud, infrastructure as code, containers and delivery, Linux and web, networking, and development | **Stack** in the header |
| **Experience** | A timeline of cloud engineering, software development, and IT support roles | **Experience** in the header |
| **Education** | Computer engineering degree and front-end development certificate | Continue down the page after Experience |
| **Contact** | Email, phone, GitHub, LinkedIn, and location | **Contact** or **Let's Talk** in the header, or the contact buttons |

The header stays visible while scrolling. On smaller screens, use the menu button to open the same navigation links. The theme switch changes between light and dark appearance. On a first visit, the page follows the device color preference; after you change it, your choice is saved in the browser.

## Featured projects

- **AWS K3s Cluster with Terraform** — A self-managed Kubernetes platform on AWS EC2. The case study covers Terraform-managed infrastructure, K3s server and worker nodes, NGINX ingress, certificate management, and Argo CD for GitOps delivery.
- **E-commerce Platform on AWS** — A three-stage delivery workflow for a 24-service application: build and publish container images, provision the AWS platform, then deploy through Kubernetes and Argo CD. Links include an overview, documentation for each stage, and the application, infrastructure, and Kubernetes repositories.

Each project card includes an architecture diagram. Select the diagram to open its full-size image in a new tab. Project documentation and repository links also open in a new tab.

## Technologies used to build this site

| Technology | How it is used |
| --- | --- |
| **React 18** and **React DOM** | Build the interface from reusable components and page sections. |
| **JavaScript (ES modules)** | Implement the page behavior and hold the portfolio content. |
| **Vite 6** | Run the local development server and create the production build. |
| **CSS** | Define design tokens, page layout, responsive behavior, light and dark themes, animations, and reduced-motion support. No CSS framework is used. |
| **Intersection Observer** | Reveal content as it enters the viewport, with a fallback when the browser does not support the API. |
| **Browser APIs** | `matchMedia` reads the system color preference; `localStorage` remembers the selected theme. |
| **Google Fonts** | Load Space Grotesk and JetBrains Mono for the site's typography. |

## Run locally

Install [Node.js](https://nodejs.org/) and npm, then run these commands from the project folder:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To build the production files and preview that build locally:

```bash
npm run build
npm run preview
```

## Update the portfolio

- Edit the profile, project descriptions and links, skills, experience, and education in `src/data/portfolio.js`.
- Change the page sections in `src/sections/` and shared interface elements such as navigation or project cards in `src/components/`.
- Adjust colors, typography, layout, theme behavior, and responsive styles in `src/styles/`.
- Replace architecture images in `public/architecture/` and update the image path and alternative text in `src/data/portfolio.js`.
- Replace `profile-pic.PNG` to change the portrait.

## Project structure

```text
.
├── public/
│   ├── architecture/       # Project architecture diagrams
│   └── favicon.svg
├── src/
│   ├── components/         # Shared interface components
│   ├── data/               # Portfolio content and links
│   ├── sections/           # Sections displayed on the page
│   ├── styles/             # Global, layout, theme, and responsive CSS
│   ├── App.jsx              # Assembles the page
│   └── main.jsx             # React entry point
├── profile-pic.PNG
├── index.html
├── package.json
└── vite.config.js
```
