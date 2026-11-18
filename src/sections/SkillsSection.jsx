import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { skillGroups } from "../data/portfolio.js";

export default function SkillsSection() {
  return (
    <section className="section section-skills" id="skills">
      <div className="container">
        <Reveal><SectionHeading number="02" label="TECHNICAL STACK" title="Tools for shipping and operating." intro="A practical mix of cloud, infrastructure, systems, and application development." /></Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.code} delay={(index % 3) * 75}>
              <article className="skill-card">
                <div className="skill-card-header">
                  <span className="skill-icon"><Icon name={group.icon} size={18} /></span>
                  <span className="skill-code">{group.code}</span>
                </div>
                <h3>{group.title}</h3>
                <div className="tag-list skill-tags">
                  {group.skills.map((skill) => <span className="tech-tag" key={skill}>{skill}</span>)}
                </div>
                <span className="card-corner-mark" aria-hidden="true">+</span>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="skills-note"><span className="note-light" /> SKILLS REFLECT HANDS-ON WORK, PROJECTS, AND FOUNDATIONAL KNOWLEDGE</div>
      </div>
    </section>
  );
}
