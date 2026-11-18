import Navigation from "./components/Navigation.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import SkillsSection from "./sections/SkillsSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import EducationSection from "./sections/EducationSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  );
}
