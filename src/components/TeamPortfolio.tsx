import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Palette, Quote, X, ArrowUpRight } from 'lucide-react';
import { Page } from '../types';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  achievement: string;
  gradient: string;
  avatarIcon: any;
  avatarSvg?: ReactNode;
}

interface CardProps {
  member: TeamMember;
  isFlipped: boolean;
  onToggle: () => void;
  onOpenProfile: () => void;
}

// Reusable elegant flip card component
function FlipCard({ member, isFlipped, onToggle, onOpenProfile }: CardProps) {
  const IconComponent = member.avatarIcon;
  return (
    <div className="flip-card-container shrink-0 select-none">
      <div 
        className={`flip-card-inner cursor-pointer ${isFlipped ? 'is-flipped' : ''}`}
        onClick={onToggle}
      >
        {/* FRONT SIDE */}
        <div className="flip-card-front">
          <div className="uiverse-bg flex flex-col justify-between items-center p-6 text-center w-full h-full">
            {/* Gilded Top Lip */}
            <div className="card-border-top" />

            {/* Clean Spacer (No Icons/Symbols) */}
            <div className="h-12 mt-4" />

            {/* Member Details */}
            <div className="text-center flex-1 flex flex-col justify-center mt-4">
              <span className="font-display text-xl font-bold text-brand-navy tracking-tight block">
                {member.name}
              </span>
              <span className="font-sans text-xs text-brand-gold tracking-wide font-bold block mt-1">
                {member.role}
              </span>
            </div>

            {/* Actions */}
            <div className="w-full space-y-2 mt-4">
              <button 
                className="card-btn flex items-center justify-center space-x-2 w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenProfile();
                }}
              >
                <span>Launch Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-gold ml-1.5 opacity-90" />
              </button>
              <div className="text-[10px] font-mono text-brand-navy/40 uppercase tracking-widest hover:text-brand-gold transition-colors duration-200">
                Click Card to Flip
              </div>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="flip-card-back">
          <div className="card-border-top-back" />

          {/* Header */}
          <div className="flex items-center space-x-3 mb-2">
            <div>
              <span className="font-display text-sm font-bold text-brand-navy block leading-tight">
                {member.name}
              </span>
              <span className="font-sans text-[10px] text-brand-gold font-bold uppercase tracking-wider block">
                Expertise
              </span>
            </div>
          </div>

          {/* Bio Text */}
          <p className="font-sans text-[11px] text-brand-navy/85 leading-relaxed italic mb-3">
            "{member.bio}"
          </p>

          {/* Core Skills */}
          <div className="mb-4">
            <span className="font-mono text-[9px] font-bold text-brand-navy/50 uppercase tracking-widest block mb-1.5">
              Core Capabilities:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {member.skills.slice(0, 3).map((skill) => (
                <span 
                  key={skill}
                  className="text-[9px] font-bold tracking-wide bg-brand-navy/5 border border-brand-navy/10 text-brand-navy px-2.5 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Achievement */}
          <div className="p-2.5 bg-brand-gold/10 border border-brand-gold/20 rounded-xl mb-4 text-left">
            <span className="font-sans text-[10px] text-brand-navy/85 leading-tight block">
              “{member.achievement}”
            </span>
          </div>

          {/* Interactive Actions on Back */}
          <div className="flex space-x-2 w-full mt-auto">
            <button 
              className="card-btn-back flex-1 py-2 text-[10px]"
              onClick={(e) => {
                e.stopPropagation();
                onOpenProfile();
              }}
            >
              Full Profile
            </button>
            <button 
              className="card-btn-back flex-1 py-2 text-[10px] bg-brand-navy/5 border-brand-navy/10 text-brand-navy"
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
            >
              Flip Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TeamPortfolioProps {
  setCurrentPage: (page: Page) => void;
}

export default function TeamPortfolio({ setCurrentPage }: TeamPortfolioProps) {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isAnyFlipped = Object.values(flippedCards).some((v) => v);

  const team: TeamMember[] = [
    {
      id: 'steve',
      name: 'Steve Vijay',
      role: 'Creative Director',
      bio: 'Lead content strategist and visionary video director transforming design narratives into viral luxury milestones.',
      skills: ['Creative Strategy', 'Short-form Video Production', 'Aesthetic Branding'],
      achievement: 'Led video production campaigns reaching multi-million views for top-tier architecture creators.',
      gradient: 'linear-gradient(135deg, #D6B46A 0%, #1A243D 100%)',
      avatarIcon: Palette,
      avatarSvg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-brand-gold">
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 50,15 L 50,85 M 15,50 L 85,50" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
          <rect x="38" y="38" width="24" height="24" fill="none" stroke="#1A243D" strokeWidth="2" rx="4" />
          <circle cx="50" cy="50" r="5" fill="#1A243D" />
        </svg>
      )
    },
    {
      id: 'fidha',
      name: 'Fidha Farook',
      role: 'UI/UX & Graphic Designer',
      bio: 'Final-year CSE student and graphic designer blending visual creativity with technical depth and AI product engineering.',
      skills: ['UI/UX Design', 'Graphic Design', 'AI/ML Enthusiast'],
      achievement: 'Created ComponentAI (an AI-driven UI generator) and a secure autonomous AI sandbox.',
      gradient: 'linear-gradient(135deg, #1A243D 0%, #D6B46A 100%)',
      avatarIcon: Sparkles,
      avatarSvg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-brand-gold">
          <path d="M 50,12 C 25,40 25,60 50,88 C 75,60 75,40 50,12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="16" fill="none" stroke="#1A243D" strokeWidth="2" />
          <path d="M 30,50 L 70,50" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
          <path d="M 50,30 L 50,70" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
        </svg>
      )
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll loop
  useEffect(() => {
    if (isInteracting || isAnyFlipped) return;

    const interval = setInterval(() => {
      const container = mobileScrollRef.current;
      if (!container) return;

      const cardWidth = 294; // 270 card width + 24 gap
      const totalCards = team.length;
      const nextIndex = (activeIndex + 1) % totalCards;

      container.scrollTo({
        left: nextIndex * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex, isInteracting, isAnyFlipped, team.length]);

  const handleScroll = () => {
    const container = mobileScrollRef.current;
    if (!container) return;

    const cardWidth = 294; // 270 width + 24 gap
    const scrollPosition = container.scrollLeft;
    const currentActive = Math.round(scrollPosition / cardWidth);
    
    if (currentActive !== activeIndex && currentActive >= 0 && currentActive < team.length) {
      setActiveIndex(currentActive);
    }
  };

  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = mobileScrollRef.current;
    if (!container) return;
    isMouseDownRef.current = true;
    setIsInteracting(true);
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current) return;
    e.preventDefault();
    const container = mobileScrollRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    container.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isMouseDownRef.current) {
      isMouseDownRef.current = false;
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
      interactionTimeoutRef.current = setTimeout(() => {
        setIsInteracting(false);
      }, 4000);
    }
  };

  const handleTouchStart = () => {
    setIsInteracting(true);
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
  };

  const handleTouchEnd = () => {
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 4000);
  };

  return (
    <section id="portfolio-team" className="w-full py-24 bg-brand-cream border-t border-brand-gray relative overflow-hidden bg-grain">
      {/* Decorative ambient gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <span className="font-mono text-[10px] font-bold tracking-widest text-brand-navy/60 uppercase block mb-4">
            Curated Talent
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
            Our Creative Powerhouse
          </h2>
          <p className="font-sans text-sm text-brand-navy/70 leading-relaxed">
            Meet the modern architects of digital visibility. Click on "Launch Portfolio" to explore their complete creative portfolio webpages, or click the card to flip for a quick snapshot.
          </p>
        </div>

        {/* 1. DESKTOP VIEW: Stable responsive grid with hover reveal transitions */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-10">
          {team.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
            >
              <FlipCard 
                member={member}
                isFlipped={!!flippedCards[member.id]}
                onToggle={() => toggleFlip(member.id)}
                onOpenProfile={() => {
                  setCurrentPage(member.id as Page);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* 2. MOBILE VIEW: Fully constrained single card slider with smooth infinite loop */}
        <div className="md:hidden relative w-full overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-brand-cream to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-brand-cream to-transparent z-20 pointer-events-none" />
          
          <div className="w-full flex flex-col items-center">
            {/* Constrained width wrapper so exactly ONE card is seen on screen */}
            <div className="max-w-[310px] w-full mx-auto overflow-hidden">
              <div
                ref={mobileScrollRef}
                onScroll={handleScroll}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                className="flex overflow-x-auto scrollbar-none gap-6 w-full py-4 px-2 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
              >
                {team.map((member) => {
                  return (
                    <div key={member.id} className="snap-center shrink-0 select-none">
                      <FlipCard 
                        member={member}
                        isFlipped={!!flippedCards[member.id]}
                        onToggle={() => toggleFlip(member.id)}
                        onOpenProfile={() => {
                          setCurrentPage(member.id as Page);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const container = mobileScrollRef.current;
                    if (container) {
                      const cardWidth = 294;
                      container.scrollTo({
                        left: index * cardWidth,
                        behavior: 'smooth'
                      });
                      setActiveIndex(index);
                    }
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'w-6 bg-brand-gold' 
                      : 'w-1.5 bg-brand-navy/25 hover:bg-brand-navy/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Visual helper cue */}
            <span className="text-[10px] font-sans font-bold tracking-widest text-brand-navy/40 uppercase mt-4 block text-center">
              ← Swipe Left or Right • Click to Flip/Launch →
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
