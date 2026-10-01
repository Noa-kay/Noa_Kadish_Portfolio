import React from 'react';
import { portfolioData, Language } from '../data/portfolioData';
import { Search, Zap, ShieldCheck, Cpu, Code2, GraduationCap, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const { profile } = portfolioData;

  const pillars = [
    {
      icon: <Search className="w-5 h-5 text-indigo-600" />,
      color: 'bg-indigo-50 border-indigo-200 text-indigo-900',
      title: {
        he: 'חקירה מעמיקה וירידה לפרטים (Deep System Investigation)',
        en: 'Deep System Investigation',
      },
      text: {
        he: 'סקרנות טבעית להבין לעומק מה מתרחש בכל שכבה — מהלוגיקה הפנימית של מוליכים למחצה ואימות חומרה (UVM) ועד לתקשורת API, שאילתות מסדי נתונים ורינדור בדפדפן.',
        en: 'A natural drive to deeply inspect every architectural layer — from semiconductor simulation (UVM) to RESTful data pipelines, caching, and reactive client rendering.',
      },
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-600" />,
      color: 'bg-amber-50 border-amber-200 text-amber-900',
      title: {
        he: 'קליטה מהירה ופתרונות יצירתיים תחת לחץ',
        en: 'Rapid Mastery & Creative Solutions Under Pressure',
      },
      text: {
        he: 'שליטה מהירה בספריות ופריימוורקים מודרניים. פיתוח עצמאי ומדויק של קוד נקי ומודולרי תוך עמידה בלוחות זמנים ויעדים טכניים מורכבים.',
        en: 'Demonstrated speed in mastering unfamiliar tech stacks and shipping clean, maintainable, and elegant solutions on time.',
      },
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      color: 'bg-emerald-50 border-emerald-200 text-emerald-900',
      title: {
        he: 'אמינות, אבטחה ובדיקות תוכנה מקיפות',
        en: 'Reliability, Security & Full Regression Testing',
      },
      text: {
        he: 'מחויבות בלתי מתפשרת לאימות קלט, אבטחת מידע (JWT, RBAC) וכתיבת תשתיות בדיקה באוטומציה (Selenium, Page Object Model) המבטיחות יציבות לאורך זמן.',
        en: 'Relentless dedication to input validation, JWT/RBAC security, and resilient automated regression testing (Selenium POM) preventing breaking bugs.',
      },
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-stone-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-start">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>{lang === 'he' ? 'מי אני ופילוסופיית העבודה שלי' : 'About & Engineering Mindset'}</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
              {lang === 'he' ? (
                <>
                  שילוב ייחודי של <span className="text-gradient-primary">חשיבה לוגית חדה</span> ועשייה טכנולוגית
                </>
              ) : (
                <>
                  Blending <span className="text-gradient-primary">Rigorous Logic</span> with Modern Engineering
                </>
              )}
            </h2>

            <div className="space-y-3 text-stone-600 text-sm sm:text-base leading-relaxed font-normal pt-1">
              <p>
                {lang === 'he'
                  ? 'הדרך שלי בעולם הפיתוח מונעת מתוך תשוקה לחקור מערכות מורכבות ולהבין כיצד כל החלקים מתחברים לשלם עובד ויעיל. לאחר סיום לימודי מה"ט ותוכנית UltraCode לפיתוח מתקדם, השלמתי בהצלחה תוכנית פרקטיקום תובענית בת 250 שעות לתכנון ואימות מוליכים למחצה ושבבים.'
                  : 'My journey in development stems from an enduring drive to explore complex systems from the inside out. Following comprehensive MAHAT studies and the UltraCode program, I completed a demanding 250-hour practicum in semiconductor planning and hardware verification.'}
              </p>
              <p>
                {lang === 'he'
                  ? 'השילוב הזה מעניק לי יתרון משמעותי: הבנה שורשית של ביצועים וחומרה, לצד מיומנות גבוהה בבניית יישומי Web מודרניים, עשירים ואינטואיטיביים (React, Angular, Spring Boot, .NET Core).'
                  : 'This foundation provides a unique edge: a low-level appreciation for hardware performance paired with high-level web craftsmanship across modern frameworks.'}
              </p>
            </div>

            {/* Quick Dual-Strength Highlight Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-50 to-pink-50 border border-violet-200/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0 shadow-xs font-bold text-lg">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="text-xs space-y-0.5">
                <p className="font-bold text-stone-900">
                  {lang === 'he' ? 'שני עולמות משלימים:' : 'Two Complementary Strengths:'}
                </p>
                <p className="text-stone-600">
                  {lang === 'he'
                    ? 'פיתוח Full Stack מודרני + רקע מעשי בתכנון ואימות שבבים (UVM / Silicon)'
                    : 'Modern Full-Stack engineering combined with hands-on semiconductor verification (UVM)'}
                </p>
              </div>
            </div>
          </div>

          {/* Right 3 Colorful Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2 hover:shadow-md hover:border-violet-300 transition-all text-start"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${item.color} shrink-0`}>
                    {item.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-stone-900">
                    {item.title[lang]}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed ps-12">
                  {item.text[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
