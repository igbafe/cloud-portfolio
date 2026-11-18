import Icon from "./Icon.jsx";

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card project-card-${project.id}`}>
      <div className="card-topline">
        <span className="eyebrow"><span>{project.number}</span><span className="eyebrow-divider">//</span>{project.type}</span>
        <span className="project-marker">ARCHITECTURE <Icon name="arrowUpRight" size={14} /></span>
      </div>

      <div className="project-copy">
        <p className="project-index">PROJECT_{project.number}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
      </div>

      <figure className="project-diagram">
        <figcaption><span>{project.panelLabel}</span><span>CLICK TO EXPAND</span></figcaption>
        <a href={project.diagram} target="_blank" rel="noreferrer" aria-label={`Open the full ${project.title} architecture diagram`}>
          <img src={project.diagram} alt={project.diagramAlt} loading="lazy" />
          <span className="diagram-open"><Icon name="external" size={14} /> VIEW FULL DIAGRAM</span>
        </a>
      </figure>

      <ul className="project-highlights">
        {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
      </ul>

      <div className="project-bottom">
        <div className="tag-list" aria-label="Technologies">
          {project.technologies.map((tech) => <span className="tech-tag" key={tech}>{tech}</span>)}
        </div>
        <div className="project-links">
          {project.links.map((link) => (
            <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
              <Icon name={link.icon} size={15} />{link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
