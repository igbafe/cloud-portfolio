import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { education } from "../data/portfolio.js";

export default function EducationSection() {
  return (
    <section className="section section-education" id="background">
      <div className="container">
        <Reveal><SectionHeading number="04" label="EDUCATION & CERTIFICATION" title="A strong technical foundation." /></Reveal>
        <div className="education-grid">
          <Reveal>
            <article className="education-card">
              <span className="education-icon"><Icon name="graduation" size={19} /></span>
              <div><p className="date-label">ENGINEERING</p><h3>{education.degree}</h3><p>{education.school}</p></div>
              <span className="education-code">EDU_01</span>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="education-card">
              <span className="education-icon"><Icon name="check" size={19} /></span>
              <div><p className="date-label">CERTIFICATE</p><h3>{education.certification}</h3><p>{education.certificationProvider}</p></div>
              <span className="education-code">CERT_01</span>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
