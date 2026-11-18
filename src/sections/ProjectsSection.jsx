import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { projects } from "../data/portfolio.js";

export default function ProjectsSection() {
  return (
    <section className="section section-work" id="work">
      <div className="container">
        <Reveal><SectionHeading number="01" label="SELECTED WORK" title="Projects, built end to end." intro="Cloud infrastructure and delivery workflows, documented from architecture through implementation." /></Reveal>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 110}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
