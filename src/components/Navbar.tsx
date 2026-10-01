import React, { useState } from 'react';
import { portfolioData, Language } from '../data/portfolioData';
import { Menu, X, FileText, Globe, ArrowUpRight, Github, Linkedin } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenCvModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { profile } = portfolioData;

  const navLinks = [
    {
      href: '#projects',
      label: {
        he: 'פרויקטים',
        en: 'Projects',
      },
    },
    {
      href: '#skills',
      label: {
        he: 'מיומנויות וטכנולוגיות',
        en: 'Skills',
      },
    },
    {
      href: '#journey',
      label: {
        he: 'השכלה והתמחות',
        en: 'Education & Practicum',
      },
    },
    {
      href: '#contact',
      label: {
        he: 'יצירת קשר',
        en: 'Contact',
      },
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Zone */}
        <a
          href="#top"
          className="flex items-center gap-3 group text-start"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-2xs group-hover:bg-blue-600 transition-colors">
            NK
          </div>
          <div>
            <span className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors block leading-tight">
              {profile.name[lang]}
            </span>
            <span className="text-[11px] text-slate-500 font-medium block leading-tight">
              Junior Full Stack Developer
            </span>
          </div>
        </a>

        {/* Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-slate-950 transition-colors py-1 relative"
            >
              {link.label[lang]}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* GitHub Quick Link */}
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Language Toggle: HEB / ENG */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200 cursor-pointer shadow-2xs"
            title={lang === 'en' ? 'Switch to Hebrew' : 'Switch to English'}
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span className="tracking-wide">{lang === 'en' ? 'HEB' : 'ENG'}</span>
          </button>

          {/* CV Button */}
          <button
            onClick={onOpenCvModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-all shadow-2xs whitespace-nowrap cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-slate-700" />
            <span>{lang === 'en' ? 'Resume (PDF)' : 'קורות חיים (PDF)'}</span>
          </button>

          {/* Contact Direct */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shadow-2xs"
          >
            <span>{lang === 'en' ? 'Contact' : 'צור קשר'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-2 text-start">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              {link.label[lang]}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-800 bg-slate-100 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'en' ? 'View Resume (PDF)' : 'צפייה בקורות חיים'}</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg"
            >
              <span>{lang === 'en' ? 'Contact Directly' : 'יצירת קשר'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
