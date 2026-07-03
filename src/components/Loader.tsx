import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment progress elegantly
    const duration = 1800; // 1.8 seconds loader
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step * (Math.random() * 1.5 + 0.3); // randomized speed for natural loading look
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 400); // 400ms delay to read "100%" smoothly
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  const brandLetters = ['A', 'K', 'E', 'M', 'Y'];

  return (
    <motion.div
      id="preloader-overlay"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark-navy bg-grain"
      exit={{ 
        y: '-100%',
        transition: { 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1] 
        } 
      }}
    >
      <div className="relative flex flex-col items-center justify-center max-w-xs w-full px-6">
        
        {/* SVG Logo Line Drawing & Rotating Circle */}
        <div className="relative w-28 h-28 mb-10 flex items-center justify-center">
          {/* Outer Rotating thin ring */}
          <motion.div
            className="absolute inset-0 border border-brand-gold/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
          />

          {/* Animated Accent rotating arc */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <motion.circle
              cx="56"
              cy="56"
              r="52"
              fill="none"
              stroke="#D6B46A"
              strokeWidth="1.5"
              strokeDasharray="326"
              initial={{ strokeDashoffset: 326 }}
              animate={{ strokeDashoffset: 326 - (326 * progress) / 100 }}
              transition={{ ease: 'easeOut' }}
            />
          </svg>

          {/* Central self-drawing Monogram (AKEMY A) */}
          <svg viewBox="0 0 100 100" className="w-14 h-14 relative z-10">
            <motion.path
              d="M 50,15 L 25,80 L 40,80 L 50,45 L 60,80 L 75,80 Z"
              fill="none"
              stroke="#D6B46A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: Math.min(1, progress / 90) }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
            <motion.path
              d="M 37,55 L 63,55"
              fill="none"
              stroke="#D6B46A"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress >= 40 ? 1 : 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </svg>
        </div>

        {/* Letter-by-letter brand appearance */}
        <div className="flex space-x-1.5 justify-center mb-6 overflow-hidden h-10">
          {brandLetters.map((letter, index) => (
            <motion.span
              key={index}
              className="font-display text-2xl md:text-3xl font-extrabold tracking-widest text-brand-white"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ 
                y: progress >= (index * 15) ? '0%' : '100%',
                opacity: progress >= (index * 15) ? 1 : 0
              }}
              transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Fine line loader */}
        <div className="w-full h-[1px] bg-brand-white/10 rounded-full mb-4 overflow-hidden">
          <motion.div 
            className="h-full bg-brand-gold"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Percentage tracker */}
        <div className="flex justify-between w-full font-mono text-[10px] tracking-widest text-brand-gold/60 uppercase">
          <span>Initializing Vision</span>
          <span className="font-semibold text-brand-gold">
            {Math.floor(progress)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}
