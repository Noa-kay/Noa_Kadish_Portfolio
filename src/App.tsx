import React, { useState, useEffect } from 'react';
import { portfolioData, Language, Project } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceEducation } from './components/ExperienceEducation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CvModal } from './components/CvModal';

export default function App() {
  // English first by default!
  const [lang, setLang] = useState<Language>('en');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  // Sync document direction and lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'he' : 'en'));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-slate-200 selection:text-slate-900">
      {/* High-Tech Developer Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Executive Hero with Tech Canvas Background */}
        <Hero
          lang={lang}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />

        {/* Structured Projects Grid on Tinted Background */}
        <ProjectsSection
          lang={lang}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Clean Tech Stack Matrix */}
        <SkillsSection lang={lang} />

        {/* Education & Practicum Milestones */}
        <ExperienceEducation lang={lang} />

        {/* Direct Contact */}
        <ContactSection lang={lang} />
      </main>

      {/* Clean Footer */}
      <Footer lang={lang} />

      {/* Technical Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
      />

      {/* Full CV Viewer & Print Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        lang={lang}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
