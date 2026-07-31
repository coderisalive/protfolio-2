import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import EducationSection from '../components/sections/EducationSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import CompanyXSection from '../components/sections/CompanyXSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import ContactSection from '../components/sections/ContactSection';

export const Home = () => {
  return (
    <div className="relative space-y-24 py-8">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Education & Journey Section */}
      <EducationSection />

      {/* 3. Work & Research Experience Section */}
      <ExperienceSection />

      {/* 4. Projects Portfolio Section */}
      <ProjectsSection />

      {/* 5. Technical Skills Section */}
      <SkillsSection />

      {/* 6. Venture & Startup Section */}
      <CompanyXSection />

      {/* 7. Achievements & Contests Section */}
      <AchievementsSection />

      {/* 8. Contact Me Section */}
      <ContactSection />
    </div>
  );
};

export default Home;
