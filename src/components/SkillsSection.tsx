import React from 'react';
import { portfolioData, Language } from '../data/portfolioData';
import { Code2, Terminal, Database, Cpu, Wrench, Languages as LanguagesIcon } from 'lucide-react';

interface SkillsSectionProps {
  lang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const { skillGroups, languages } = portfolioData;

  const icons = [
    <Code2 className="w-4 h-4 text-slate-700" />,
    <Terminal className="w-4 h-4 text-slate-700" />,
    <Database className="w-4 h-4 text-slate-700" />,
    <Cpu className="w-4 h-4 text-slate-700" />,
    <Wrench className="w-4 h-4 text-slate-700" />,
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-start">
        {/* Section Header */}
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {lang === 'en' ? 'Technical Stack' : 'ארגז כלים מקצועי'}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Skills, Languages & Frameworks' : 'מיומנויות, שפות וסביבות פיתוח'}
          </h2>
          <p className="text-slate-600 text-sm max-w-xl">
            {lang === 'en'
              ? 'Technologies, architectures, and testing frameworks with verified hands-on engineering experience.'
              : 'טכנולוגיות ושפות פיתוח בהן צברתי ניסיון מעשי במימוש פרויקטים וכתיבת קוד.'}
          </p>
        </div>

        {/* 4-Card Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/60 space-y-3 hover:border-slate-300 transition-colors shadow-2xs"
            >
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200/80">
                <span className="p-1 rounded bg-white border border-slate-200">
                  {icons[idx % icons.length]}
                </span>
                <h3 className="text-sm font-bold text-slate-900">
                  {group.category[lang]}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="font-mono-code text-xs font-semibold px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-800 shadow-2xs"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Languages Spoken Card */}
          <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/60 space-y-3 hover:border-slate-300 transition-colors shadow-2xs">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200/80">
              <span className="p-1 rounded bg-white border border-slate-200">
                <LanguagesIcon className="w-4 h-4 text-slate-700" />
              </span>
              <h3 className="text-sm font-bold text-slate-900">
                {lang === 'en' ? 'Spoken Languages' : 'שפות'}
              </h3>
            </div>

            <div className="space-y-3 pt-1 text-xs">
              {languages.map((lng, lIdx) => (
                <div key={lIdx} className="space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">{lng.name[lang]}</span>
                    <span className="text-slate-600 font-semibold bg-white px-2 py-0.5 rounded border border-slate-200">
                      {lng.level[lang]}
                    </span>
                  </div>
                  {lIdx < languages.length - 1 && (
                    <div className="pt-2 border-b border-slate-200/60" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
