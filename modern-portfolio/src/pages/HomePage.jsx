import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationCertificationsSection from '../components/EducationCertificationsSection';
import ContactSection from '../components/ContactSection';

// This component will aggregate all the sections of the single-page portfolio

const HomePage = () => {
  return (
    <div>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationCertificationsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
