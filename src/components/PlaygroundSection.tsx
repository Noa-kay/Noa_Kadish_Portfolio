import React from 'react';
import { Language } from '../data/portfolioData';
import { ColorBombGame } from './ColorBombGame';
import { Sparkles, Gamepad2, Code2, Award, Zap } from 'lucide-react';

interface PlaygroundSectionProps {
  lang: Language;
}

export const PlaygroundSection: React.FC<PlaygroundSectionProps> = ({ lang }) => {
  return (
    <section id="play-demo" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-pink-50/30 to-[#FAF8F5]">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 start-1/4 w-80 h-80 bg-pink-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 end-1/4 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/80 border border-pink-200 text-xs font-bold text-pink-800 shadow-2xs">
            <Gamepad2 className="w-3.5 h-3.5 text-pink-600" />
            <span>{lang === 'he' ? 'דמו אינטראקטיבי חי' : 'Live Interactive Demo'}</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            {lang === 'he' ? (
              <>
                שחקו עכשיו ב-<span className="text-gradient-warm">Color Bomb</span>! 🎮
              </>
            ) : (
              <>
                Play <span className="text-gradient-warm">Color Bomb</span> Live! 🎮
              </>
            )}
          </h2>

          <p className="text-stone-600 text-sm sm:text-base font-normal">
            {lang === 'he'
              ? 'אחד מהפרויקטים שפיתחתי — משחק דפדפן מהיר המבוסס על אלגוריתמיקה מותאמת בצד הלקוח, חישובי זמן ותגובתיות חלקה. נסו לשבור את השיא!'
              : 'One of my algorithmic projects — a fast-paced client-side JavaScript game with dynamic state tracking and responsive mechanics. Try breaking the record!'}
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-start">
          {/* Left Info & Algorithmic Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-violet-600" />
                <span>{lang === 'he' ? 'עקרונות המימוש בקוד' : 'Engineering Highlights'}</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-stone-600">
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center shrink-0 text-xs font-bold">
                    1
                  </div>
                  <div>
                    <span className="font-bold text-stone-800">
                      {lang === 'he' ? 'ניהול מכונת מצבים (State Machine): ' : 'Client State Machine: '}
                    </span>
                    <span>
                      {lang === 'he'
                        ? 'בקרת מעברים רציפה בין מצבי פעילות, חישוב ניקוד מנורמל וזמני ספירה לאחור.'
                        : 'Pure deterministic state transitions controlling round clocks and score multipliers.'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 text-xs font-bold">
                    2
                  </div>
                  <div>
                    <span className="font-bold text-stone-800">
                      {lang === 'he' ? 'אלגוריתם בחירת צבעים וקומבו: ' : 'Dynamic Combinatorics: '}
                    </span>
                    <span>
                      {lang === 'he'
                        ? 'ערבוב מתמטי המבטיח תמיד פתרון אפשרי בכל מחזור ומתגמל שרשראות הצלחה.'
                        : 'Guaranteed solvable color distribution and progressive combo multipliers.'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xs font-bold">
                    3
                  </div>
                  <div>
                    <span className="font-bold text-stone-800">
                      {lang === 'he' ? 'סינתזת אודיו מקורית (Web Audio): ' : 'Web Audio API Synth: '}
                    </span>
                    <span>
                      {lang === 'he'
                        ? 'צלילים עדינים המיוצרים בקוד בזמן אמת ללא קבצים חיצוניים כבדים.'
                        : 'Real-time tone generation via browser oscillators without asset network delay.'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-stone-500">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>{lang === 'he' ? 'פרויקט עצמאי ב-JavaScript' : 'Vanilla JS Project'}</span>
                </div>

                <a
                  href="https://github.com/Noa-kay/Color-bomb-game"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-violet-700 hover:text-violet-900 underline"
                >
                  {lang === 'he' ? 'צפייה בקוד ב-GitHub ←' : 'View Code on GitHub ←'}
                </a>
              </div>
            </div>
          </div>

          {/* Right Live Game Playground Container */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-2 sm:p-4 shadow-xl border-2 border-pink-100 ring-4 ring-pink-50">
              <ColorBombGame lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
