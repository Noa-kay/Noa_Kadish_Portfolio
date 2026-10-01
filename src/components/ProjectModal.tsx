import React, { useEffect } from 'react';
import { Project, Language } from '../data/portfolioData';
import { X, Github, ExternalLink, Check, Layers, Code2, Calendar } from 'lucide-react';
import { ColorBombGame } from './ColorBombGame';

interface ProjectModalProps {
  project: Project | null;
  lang: Language;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  lang,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/50 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-xl p-6 sm:p-8 space-y-6 text-start"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 end-5 p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 pe-8">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
              {project.categoryLabel[lang]}
            </span>
            <span>·</span>
            <span className="font-mono-code">{project.period}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            {project.title[lang]}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            {project.subtitle[lang]}
          </p>
        </div>

        {/* Playable Mini Game if applicable */}
        {project.hasPlayableDemo && (
          <div className="pt-2">
            <ColorBombGame lang={lang} />
          </div>
        )}

        {/* Overview */}
        <div className="space-y-1.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {lang === 'he' ? 'תיאור הפרויקט' : 'Project Overview'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {project.summary[lang]}
          </p>
        </div>

        {/* Architecture */}
        {project.architecture && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-slate-700" />
              <span>{lang === 'he' ? 'ארכיטקטורה ומבנה מערכת' : 'Architecture & Structure'}</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {project.architecture[lang]}
            </p>
          </div>
        )}

        {/* Highlights */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {lang === 'he' ? 'דגשים ומימוש' : 'Key Highlights'}
          </h4>
          <ul className="space-y-2">
            {project.highlights[lang].map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="space-y-1.5 pt-2 border-t border-slate-100">
          <h4 className="text-xs font-bold text-slate-500 flex items-center gap-1">
            <Code2 className="w-3.5 h-3.5" />
            <span>{lang === 'he' ? 'טכנולוגיות' : 'Technologies'}</span>
          </h4>
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="font-mono-code bg-slate-100 px-2 py-0.5 rounded border border-slate-200 text-slate-800"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-100">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
          >
            <Github className="w-4 h-4" />
            <span>{lang === 'he' ? 'קוד ב-GitHub' : 'View on GitHub'}</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {lang === 'he' ? 'סגירה' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
