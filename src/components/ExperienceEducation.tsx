import React from 'react';
import { portfolioData, Language } from '../data/portfolioData';

interface ExperienceEducationProps {
  lang: Language;
}

export const ExperienceEducation: React.FC<ExperienceEducationProps> = ({ lang }) => {
  const { education } = portfolioData;

  return (
    <section id="journey" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-start">
        {/* Section Header */}
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {lang === 'en' ? 'Background & Education' : 'השכלה והכשרה מעשית'}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Professional Training & Academic Foundations' : 'הכשרה מקצועית והתמחות'}
          </h2>
          <p className="text-slate-600 text-sm max-w-xl">
            {lang === 'en'
              ? 'A disciplined combination of Full-Stack software engineering (MAHAT & UltraCode) and an intensive 250-hour hardware verification practicum.'
              : 'שילוב ייחודי של פיתוח תוכנה Full-Stack (מה"ט ו-UltraCode) ופרקטיקום מעשי של 250 שעות באימות חומרה.'}
          </p>
        </div>

        {/* Clean, Scannable Milestones List */}
        <div className="space-y-4">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs transition-colors space-y-2.5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="space-y-0.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {item.title[lang]}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600">
                    {item.institution[lang]}
                  </p>
                </div>

                <span className="font-mono-code text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">
                  {item.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {item.description[lang]}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-code text-[11px] font-medium px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
