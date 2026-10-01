import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Language } from '../data/portfolioData';
import { Play, RotateCcw, Volume2, VolumeX, Sparkles, Trophy, CheckCircle2 } from 'lucide-react';

interface ColorBombGameProps {
  lang: Language;
}

interface Bubble {
  id: number;
  colorHex: string;
  colorName: {
    he: string;
    en: string;
  };
  isBomb: boolean;
}

const PALETTE = [
  { hex: '#E07A5F', name: { he: 'אלמוג חם', en: 'Warm Coral' } },
  { hex: '#81B29A', name: { he: 'מרווה מעודנת', en: 'Soft Sage' } },
  { hex: '#F2CC8F', name: { he: 'אוקר זהוב', en: 'Golden Ochre' } },
  { hex: '#3D405B', name: { he: 'אינדיגו ערפילי', en: 'Dusk Indigo' } },
  { hex: '#A37081', name: { he: 'ורד מעושן', en: 'Dusty Rose' } },
  { hex: '#6D8B74', name: { he: 'יער שליו', en: 'Calm Forest' } },
];

export const ColorBombGame: React.FC<ColorBombGameProps> = ({ lang }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(1);
  const [timeLeft, setTimeLeft] = useState(25);
  const [highScore, setHighScore] = useState(() => {
    try {
      return parseInt(localStorage.getItem('colorbomb_highscore') || '0', 10);
    } catch {
      return 0;
    }
  });
  const [targetColor, setTargetColor] = useState(PALETTE[0]);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [feedback, setFeedback] = useState<string | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);

  // Play subtle synthesized audio tone
  const playTone = useCallback((type: 'success' | 'miss' | 'gameover') => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'success') {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.12); // G5
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      } else if (type === 'miss') {
        osc.frequency.setValueAtTime(220, ctx.currentTime); // A3
        osc.frequency.exponentialRampToValueAtTime(164.81, ctx.currentTime + 0.15); // E3
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      } else {
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      }
    } catch {
      // AudioContext not available or blocked
    }
  }, [soundEnabled]);

  // Generate a new grid of bubbles ensuring at least 2 match the target
  const generateGrid = useCallback((target = targetColor) => {
    const newBubbles: Bubble[] = [];
    const size = 9; // 3x3 grid
    const targetCount = 2 + Math.floor(Math.random() * 2);

    for (let i = 0; i < size; i++) {
      let chosenColor;
      if (i < targetCount) {
        chosenColor = target;
      } else {
        const others = PALETTE.filter((c) => c.hex !== target.hex);
        chosenColor = others[Math.floor(Math.random() * others.length)];
      }
      newBubbles.push({
        id: Math.random() + i,
        colorHex: chosenColor.hex,
        colorName: chosenColor.name,
        isBomb: chosenColor.hex === target.hex,
      });
    }

    // Shuffle the bubbles
    newBubbles.sort(() => Math.random() - 0.5);
    setBubbles(newBubbles);
  }, [targetColor]);

  // Start new game
  const handleStartGame = () => {
    const randomTarget = PALETTE[Math.floor(Math.random() * PALETTE.length)];
    setTargetColor(randomTarget);
    setScore(0);
    setCombo(1);
    setTimeLeft(25);
    setIsGameOver(false);
    setIsPlaying(true);
    setFeedback(null);
    generateGrid(randomTarget);
  };

  // Timer loop
  useEffect(() => {
    if (!isPlaying || isGameOver) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsGameOver(true);
          setIsPlaying(false);
          playTone('gameover');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, isGameOver, playTone]);

  // Check and update high score
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      try {
        localStorage.setItem('colorbomb_highscore', score.toString());
      } catch {
        // storage disabled
      }
    }
  }, [score, highScore]);

  // Handle clicking a bubble
  const handleBubbleClick = (bubble: Bubble) => {
    if (!isPlaying || isGameOver) return;

    if (bubble.colorHex === targetColor.hex) {
      // Hit!
      const points = 100 * combo;
      setScore((s) => s + points);
      setCombo((c) => Math.min(c + 1, 5));
      playTone('success');
      setFeedback(`+${points}`);
      setTimeout(() => setFeedback(null), 700);

      // Regenerate or cycle target
      const remainingTargetCount = bubbles.filter(
        (b) => b.id !== bubble.id && b.colorHex === targetColor.hex
      ).length;

      if (remainingTargetCount <= 1) {
        // Pick new random target
        const newTarget = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        setTargetColor(newTarget);
        generateGrid(newTarget);
      } else {
        // Remove or replace clicked bubble
        setBubbles((prev) =>
          prev.map((b) =>
            b.id === bubble.id
              ? {
                  ...b,
                  colorHex: PALETTE.filter((c) => c.hex !== targetColor.hex)[0].hex,
                  isBomb: false,
                }
              : b
          )
        );
      }
    } else {
      // Miss!
      setScore((s) => Math.max(0, s - 30));
      setCombo(1);
      playTone('miss');
      setFeedback('-30');
      setTimeout(() => setFeedback(null), 700);
    }
  };

  return (
    <div className="bg-[#F8F6F2] rounded-2xl p-5 border border-stone-200/90 text-stone-800">
      {/* Game Header */}
      <div className="flex items-center justify-between pb-4 border-b border-stone-200/70">
        <div>
          <h4 className="text-sm font-semibold text-stone-900 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>{lang === 'he' ? 'סימולציית Color Bomb חיה' : 'Color Bomb Live Demo'}</span>
          </h4>
          <p className="text-xs text-stone-500 mt-0.5">
            {lang === 'he'
              ? 'לוגיקה אלגוריתמית בצד הלקוח - פותח ב-Vanilla JS'
              : 'Interactive client-side algorithmic logic by Noa Kadish'}
          </p>
        </div>

        {/* Audio Toggle */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-1.5 text-stone-500 hover:text-stone-800 hover:bg-stone-200/50 rounded-lg transition-colors"
          title={soundEnabled ? 'Mute' : 'Enable audio'}
          aria-label="Toggle sound"
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>

      {/* Target & Game Stats Bar */}
      <div className="py-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Target Indicator */}
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-stone-200/80 shadow-2xs">
          <span className="text-stone-500 font-medium">
            {lang === 'he' ? 'נטרלו צבע:' : 'Defuse:'}
          </span>
          <div className="flex items-center gap-1.5">
            <span
              className="w-3.5 h-3.5 rounded-full shadow-inner inline-block"
              style={{ backgroundColor: targetColor.hex }}
            />
            <span className="font-semibold text-stone-800">{targetColor.name[lang]}</span>
          </div>
        </div>

        {/* Counters */}
        <div className="flex items-center gap-3 tabular-nums font-mono-code">
          <div className="text-stone-600">
            <span className="text-stone-400 text-[10px] block font-sans">
              {lang === 'he' ? 'זמן' : 'TIME'}
            </span>
            <span className={`text-sm font-semibold ${timeLeft <= 5 ? 'text-rose-600 animate-pulse' : 'text-stone-800'}`}>
              {timeLeft}s
            </span>
          </div>

          <div className="text-stone-600">
            <span className="text-stone-400 text-[10px] block font-sans">
              {lang === 'he' ? 'ניקוד' : 'SCORE'}
            </span>
            <span className="text-sm font-semibold text-stone-900">{score}</span>
          </div>

          {combo > 1 && (
            <div className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[11px] font-semibold border border-amber-200/60">
              x{combo} Combo
            </div>
          )}

          <div className="text-stone-500 hidden sm:flex items-center gap-1">
            <Trophy className="w-3 h-3 text-amber-500" />
            <span className="text-xs">{highScore}</span>
          </div>
        </div>
      </div>

      {/* Bubble Play Field */}
      <div className="relative my-2 p-4 bg-white/80 rounded-xl border border-stone-200/80 min-h-[220px] flex items-center justify-center">
        {feedback && (
          <div
            className={`absolute top-2 font-mono-code font-bold text-sm pointer-events-none transition-all ${
              feedback.startsWith('+') ? 'text-emerald-600' : 'text-rose-500'
            }`}
          >
            {feedback}
          </div>
        )}

        {!isPlaying && !isGameOver && (
          <div className="text-center space-y-3 py-6">
            <p className="text-xs text-stone-600 max-w-xs mx-auto">
              {lang === 'he'
                ? 'לחצו על העיגולים התואמים לצבע היעד במהירות כדי לנטרל אותם לפני שנגמר הזמן!'
                : 'Click bubbles matching the target color rapidly before the countdown expires!'}
            </p>
            <button
              onClick={handleStartGame}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-xl shadow-xs transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{lang === 'he' ? 'התחלת משחק' : 'Start Mini-Game'}</span>
            </button>
          </div>
        )}

        {isGameOver && (
          <div className="text-center space-y-2 py-4">
            <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-600">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <h5 className="text-sm font-semibold text-stone-900">
              {lang === 'he' ? 'המשחק הסתיים!' : 'Game Finished!'}
            </h5>
            <p className="text-xs text-stone-600 tabular-nums">
              {lang === 'he' ? `השגתם ${score} נקודות.` : `You scored ${score} points.`}{' '}
              {score >= highScore && score > 0 ? (
                <span className="text-amber-700 font-medium">
                  {lang === 'he' ? 'שיא חדש! 🎉' : 'New High Score! 🎉'}
                </span>
              ) : null}
            </p>
            <button
              onClick={handleStartGame}
              className="mt-2 inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{lang === 'he' ? 'שחקו שוב' : 'Play Again'}</span>
            </button>
          </div>
        )}

        {isPlaying && (
          <div className="grid grid-cols-3 gap-3 w-full max-w-[260px]">
            {bubbles.map((bubble) => (
              <button
                key={bubble.id}
                onClick={() => handleBubbleClick(bubble)}
                className="aspect-square rounded-full transition-transform active:scale-90 hover:scale-105 shadow-sm border border-black/5 focus:outline-none flex items-center justify-center cursor-pointer"
                style={{ backgroundColor: bubble.colorHex }}
                title={bubble.colorName[lang]}
                aria-label={`Color bubble ${bubble.colorName[lang]}`}
              >
                <div className="w-2 h-2 rounded-full bg-white/40 shadow-xs" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="pt-2 flex items-center justify-between text-[11px] text-stone-400">
        <span>JavaScript ES6+ · Client State Machine</span>
        {isPlaying && (
          <button
            onClick={handleStartGame}
            className="text-stone-500 hover:text-stone-800 flex items-center gap-1 underline"
          >
            <RotateCcw className="w-2.5 h-2.5" />
            <span>{lang === 'he' ? 'איפוס' : 'Reset'}</span>
          </button>
        )}
      </div>
    </div>
  );
};
