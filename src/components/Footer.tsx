import React from 'react';
import { portfolioData, Language } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-slate-100/60 border-t border-slate-200 text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-900">{profile.name[lang]}</span>
          <span className="text-slate-300">·</span>
          <span>Junior Full Stack Developer</span>
          <span className="text-slate-300">·</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors font-medium cursor-pointer"
        >
          <span>{lang === 'en' ? 'Back to Top' : 'חזרה לראש העמוד'}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
