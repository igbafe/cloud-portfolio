import ExperienceItem from "../components/ExperienceItem.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { experience } from "../data/portfolio.js";

export default function ExperienceSection() {
  return (
    <section className="section section-experience" id="experience">
      <div className="container">
        <Reveal><SectionHeading number="03" label="EXPERIENCE" title="From IT operations to cloud platforms." intro="Building on a software-development and IT-support foundation while taking on infrastructure, automation, and deployment work." /></Reveal>
        <div className="experience-timeline">
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 90}>
              <ExperienceItem item={item} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
