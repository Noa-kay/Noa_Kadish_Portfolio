import React, { useState, useMemo } from 'react';
import { portfolioData, Project, Language } from '../data/portfolioData';
import { Github, ExternalLink, Eye } from 'lucide-react';

interface ProjectsSectionProps {
  lang: Language;
  onSelectProject: (project: Project) => void;
}

type FilterCategory = 'all' | 'fullstack' | 'backend' | 'frontend' | 'hardware';

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  lang,
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const { projects } = portfolioData;

  const filterTabs = [
    { id: 'all' as FilterCategory, label: { he: 'כל הפרויקטים (7)', en: 'All Projects (7)' } },
    { id: 'fullstack' as FilterCategory, label: { he: 'Full Stack', en: 'Full Stack' } },
    { id: 'backend' as FilterCategory, label: { he: 'Backend & APIs', en: 'Backend & APIs' } },
    { id: 'frontend' as FilterCategory, label: { he: 'Frontend & משחקים', en: 'Frontend & UI' } },
    { id: 'hardware' as FilterCategory, label: { he: 'אימות שבבים (UVM)', en: 'Hardware & Silicon' } },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => {
      if (activeFilter === 'backend') return p.category === 'backend' || p.category === 'automation';
      return p.category === activeFilter;
    });
  }, [projects, activeFilter]);

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-100/60 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-200 text-start">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {lang === 'en' ? 'Selected Works' : 'פרויקטים ומערכות'}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'en' ? 'Engineered Systems & GitHub Repositories' : 'עבודות פיתוח וקוד ב-GitHub'}
            </h2>
            <p className="text-slate-600 text-sm max-w-xl">
              {lang === 'en'
                ? 'Production-ready applications built end-to-end with clear architectural separation, DTOs, security, and performance.'
                : 'פרויקטים מעשיים שנבנו מקצה לקצה תוך הקפדה על ארכיטקטורה נקייה, DTOs, אבטחה וביצועים.'}
            </p>
          </div>

          {/* Clean Segmented Filter */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-white border border-slate-200/90 rounded-xl self-start md:self-end shadow-2xs">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {tab.label[lang]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Structured Projects Grid - Clean, concise preview cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-start">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all space-y-4 shadow-2xs"
            >
              <div className="space-y-3">
                {/* Category & Period */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200/70">
                    {project.categoryLabel[lang]}
                  </span>
                  <span className="font-mono-code text-slate-400 font-medium">
                    {project.period}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-lg font-bold text-slate-900 hover:text-blue-600 cursor-pointer transition-colors leading-snug"
                  >
                    {project.title[lang]}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {project.subtitle[lang]}
                  </p>
                </div>

                {/* Concise 1-2 sentence Summary */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                  {project.summary[lang]}
                </p>

                {/* Tools */}
                <div className="pt-1 flex flex-wrap items-center gap-1.5">
                  {project.tools.slice(0, 5).map((tool) => (
                    <span
                      key={tool}
                      className="font-mono-code text-[11px] px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-700 font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 5 && (
                    <span className="text-[11px] text-slate-400 font-medium">
                      +{project.tools.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-slate-600 hover:underline cursor-pointer transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-slate-700" />
                  <span>{lang === 'en' ? 'View Architecture' : 'צפייה בארכיטקטורה'}</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 px-3 py-1.5 rounded-lg transition-colors font-mono-code shadow-2xs"
                >
                  <Github className="w-3.5 h-3.5 text-slate-700" />
                  <span>GitHub</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
