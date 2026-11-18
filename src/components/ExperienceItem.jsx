import Icon from "./Icon.jsx";

export default function ExperienceItem({ item, index }) {
  return (
    <article className="experience-item">
      <div className="experience-rail">
        <span className="experience-node">0{index + 1}</span>
        {index < 2 && <span className="experience-line" />}
      </div>
      <div className="experience-card">
        <div className="experience-header">
          <div>
            <p className="date-label">{item.period}</p>
            <h3>{item.role}</h3>
            <p className="experience-company">{item.company}<span> · {item.context}</span></p>
          </div>
          <span className="experience-icon"><Icon name="briefcase" size={18} /></span>
        </div>
        <ul className="experience-highlights">
          {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
      </div>
    </article>
  );
}
