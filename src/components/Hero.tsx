import React from 'react';
import { portfolioData, Language } from '../data/portfolioData';
import { FileText, ArrowDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenCvModal }) => {
  const { profile } = portfolioData;

  const coreStack = [
    'React (Vite)',
    'Angular',
    'Node.js & Express',
    'Java & Spring Boot',
    'C# & .NET Core 7',
    'TypeScript',
    'MongoDB & SQL',
    'Chip Verification (UVM)',
  ];

  return (
    <section id="top" className="pt-12 pb-16 md:pt-16 md:pb-18 bg-tech-canvas border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-start">
        {/* Availability Badge (Only Open to Work, location not repeated here!) */}
        <div className="flex items-center gap-2.5 text-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs text-slate-800 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{profile.openToWorkText[lang]}</span>
          </span>
        </div>

        {/* Main Content Area */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {profile.name[lang]}
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-slate-700">
            {profile.title[lang]}
          </p>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
            {profile.bio[lang]}
          </p>

          {/* Core Tech Stack Badges */}
          <div className="pt-1 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              {lang === 'en' ? 'Core Technologies:' : 'טכנולוגיות וכלי ליבה:'}
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {coreStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono-code text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-800 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'en' ? 'Resume (PDF)' : 'קורות חיים (PDF)'}</span>
            </button>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all shadow-2xs cursor-pointer"
            >
              <span>{lang === 'en' ? 'Explore Projects' : 'פרויקטים נבחרים'}</span>
              <ArrowDown className="w-4 h-4 text-slate-500" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-colors shadow-2xs"
            >
              <Mail className="w-4 h-4 text-blue-600" />
              <span>{lang === 'en' ? 'Send Email' : 'שליחת מייל'}</span>
            </a>
          </div>
        </div>

        {/* Quick Contact: Title above, all items centered in the middle */}
        <div className="pt-2">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3 text-center">
            {/* Title Above & Centered */}
            <div className="flex justify-center">
              <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] bg-slate-100 px-3 py-1 rounded-md border border-slate-200/80 inline-block">
                {lang === 'en' ? 'Quick Contact' : 'פרטי התקשרות'}
              </span>
            </div>

            {/* Centered Items in Row */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs font-medium text-slate-700">
              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 font-mono-code font-semibold text-slate-800 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{profile.email}</span>
              </a>

              <span className="text-slate-300 hidden sm:inline">|</span>

              {/* Phone */}
              <a
                href={`tel:${profile.phoneInternational}`}
                className="inline-flex items-center gap-1.5 font-mono-code font-semibold text-slate-800 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{profile.phone}</span>
              </a>

              <span className="text-slate-300 hidden sm:inline">|</span>

              {/* Location */}
              <span className="inline-flex items-center gap-1.5 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Petach Tikva, Israel (Central / Hybrid)</span>
              </span>

              <span className="text-slate-300 hidden sm:inline">|</span>

              {/* GitHub */}
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-slate-800 hover:text-blue-600 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
              </a>

              <span className="text-slate-300 hidden sm:inline">|</span>

              {/* LinkedIn */}
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-900 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
