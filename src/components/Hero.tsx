import React, { useEffect, useState, useRef, ReactNode } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowLeftRight, Share2, Palette, Globe, Cpu, Camera } from 'lucide-react';
import { Page } from '../types';

interface HeroProps {
  setCurrentPage: (page: Page) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [activeIndex, setActiveIndex] = useState(0);

  const isAnyFlipped = Object.values(flippedCards).some((v) => v);

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Auto-scroll loop
  useEffect(() => {
    if (isInteracting || isAnyFlipped) return;

    const interval = setInterval(() => {
      const container = mobileScrollRef.current;
      if (!container) return;

      const cardWidth = 294; // 270 card width + 24 gap
      const totalCards = 5;
      const nextIndex = (activeIndex + 1) % totalCards;

      container.scrollTo({
        left: nextIndex * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex, isInteracting, isAnyFlipped]);

  const handleScroll = () => {
    const container = mobileScrollRef.current;
    if (!container) return;

    const cardWidth = 294; // 270 width + 24 gap
    const scrollPosition = container.scrollLeft;
    const currentActive = Math.round(scrollPosition / cardWidth);
    
    if (currentActive !== activeIndex && currentActive >= 0 && currentActive < 5) {
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
    const walk = (x - startXRef.current) * 1.5; // Drag sensitivity
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

  // Mouse coordinate values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring values for butter-smooth organic lag
  const springX = useSpring(mouseX, { damping: 40, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 40, stiffness: 200 });

  // Parallax mappings for background elements
  const bgX1 = useTransform(springX, [-400, 400], [-35, 35]);
  const bgY1 = useTransform(springY, [-400, 400], [-35, 35]);

  const bgX2 = useTransform(springX, [-400, 400], [45, -45]);
  const bgY2 = useTransform(springY, [-400, 400], [45, -45]);

  // Card tilting calculations
  const rotateX = useTransform(springY, [-400, 400], [15, -15]);
  const rotateY = useTransform(springX, [-400, 400], [-15, 15]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      mouseX.set(x);
      mouseY.set(y);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  const headingText = "From Vision\nto Visibility.";
  const words = headingText.split('\n');

  return (
    <section
      ref={containerRef}
      id="hero-section"
      className="relative min-h-screen w-full flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden bg-brand-bg bg-grain"
    >
      {/* 1. Atmospheric Ambient lighting effects (Static for maximum hardware-accelerated scroll smoothness) */}
      <div className="absolute top-1/4 left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-navy/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[45%] h-[45%] rounded-full bg-brand-gold/8 blur-[90px] pointer-events-none" />

      {/* 2. Floating geometric shapes (Smooth CSS-like loop animations without cursor parallax lag) */}
      <motion.div
        className="absolute top-1/3 right-[15%] w-12 h-12 rounded-full border border-brand-gold/35 pointer-events-none hidden md:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-[10%] w-16 h-16 rounded-xl border border-brand-navy/15 pointer-events-none rotate-45 hidden md:block"
        animate={{ rotate: [45, 90, 45], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />

      {/* 3. Grid of tiny sparkling particles */}
      <div className="absolute inset-0 bg-repeat bg-center opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A243D 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 w-full z-10 flex flex-col items-center text-center">
        {/* Copy & CTAs */}
        <div className="flex flex-col items-center text-center">
          {/* Luxury Large Heading Reveal */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter text-brand-navy leading-[1.05] mb-8">
            <span className="block overflow-hidden pb-1">
              {["From", "Vision"].map((word, wIdx) => (
                <motion.span
                  key={wIdx}
                  className="inline-block mr-3 md:mr-5 text-brand-navy"
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1 + wIdx * 0.1,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden pb-1">
              {["to", "Visibility."].map((word, wIdx) => {
                const isVisibility = word === "Visibility.";
                return (
                  <motion.span
                    key={wIdx}
                    className={`inline-block mr-3 md:mr-5 ${
                      isVisibility 
                        ? 'bg-gradient-to-r from-brand-gold via-brand-navy to-brand-gold bg-[length:200%_auto] text-transparent bg-clip-text font-extrabold drop-shadow-[0_2px_15px_rgba(214,180,106,0.25)] hover:scale-105 transition-transform duration-300' 
                        : 'text-brand-navy'
                    }`}
                    style={isVisibility ? { animation: 'pulse 3s infinite ease-in-out' } : {}}
                    initial={{ y: '100%', opacity: 0, scale: isVisibility ? 0.95 : 1 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                      duration: 1.1,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.35 + wIdx * 0.1,
                    }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </span>
          </h1>

          {/* Subtext description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
            className="font-sans text-sm sm:text-base md:text-xl text-brand-navy/70 leading-relaxed max-w-2xl mb-12"
          >
            We craft brands, websites, content, and automation systems that transform ambitious businesses into unforgettable digital experiences. Beyond Social. Beyond Websites.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
          >
            {/* Primary WhatsApp CTA button with Uiverse interactive style */}
            <a
              href="https://wa.me/918330858233"
              target="_blank"
              rel="noreferrer"
              data-cursor="expand"
              className="btn"
            >
              <span className="btn-text-one">Get in Touch</span>
              <span className="btn-text-two">Say Hello!</span>
            </a>
          </motion.div>
        </div>

        {/* Five Beautiful Interactive Cards with slow left-to-right marquee on mobile */}
        <div className="w-full z-10 flex flex-col items-center justify-center mt-12">
          {/* Section Header: Our Services */}
          <div className="text-center mb-10 max-w-xl mx-auto">
            <span className="font-mono text-[10px] font-bold tracking-widest text-brand-gold uppercase block mb-3">
              Core Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              Our Services
            </h2>
          </div>
          {/* Desktop View: Centered wrapped cards with responsive layout */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-8 mt-4 w-full max-w-7xl">
            {[
              {
                id: 'social',
                title: 'Social Media',
                subtitle: 'Platform Mastery',
                description: 'Elevate your digital footprint. Custom platform strategy, premium reels, high-end content design, and organic growth.',
                blobGradient: 'linear-gradient(135deg, #FAF7F1 0%, #D6B46A 100%)',
                platforms: ['Instagram', 'Pinterest', 'LinkedIn', 'Facebook'],
                services: ['Content Strategy', 'Reels Production', 'Photography & Videography', 'Carousel & Post Design', 'Caption Writing', 'Hashtag Research', 'Monthly Analytics Reports'],
                icon: <Share2 className="w-12 h-12 text-brand-gold" strokeWidth={1.5} />
              },
              {
                id: 'brand',
                title: 'Brand Identity',
                subtitle: 'Visual Legacy',
                description: 'Translate raw brand values into cohesive visual systems, high-end guidelines, iconic marks, and bespoke physical/digital assets.',
                blobGradient: 'linear-gradient(135deg, #D6B46A 0%, #1A243D 100%)',
                services: ['Logo Design', 'Brand Guidelines', 'Color Palette Selection', 'Typography Selection', 'Portfolio Design', 'Company Profile Design', 'Brand Assets & Visual Identity'],
                icon: <Palette className="w-12 h-12 text-brand-gold" strokeWidth={1.5} />
              },
              {
                id: 'web',
                title: 'Web Development',
                subtitle: 'Digital Flagships',
                description: 'Custom engineering of blazing-fast responsive web portfolios, modern landing pages, speed optimization, and robust portals.',
                blobGradient: 'linear-gradient(135deg, #1A243D 0%, #00154c 100%)',
                services: ['Modern Portfolio Websites', 'High-Converting Landing Pages', 'Elegant Contact Forms', 'Mobile-Responsive Design', 'Speed Optimization', 'Blog Setup & CMS Integration'],
                icon: <Globe className="w-12 h-12 text-brand-gold" strokeWidth={1.5} />
              },
              {
                id: 'automation',
                title: 'Automation',
                subtitle: 'Intelligent Flows',
                description: 'Maximize your efficiency. Fully automated lead capturing, smart CRM funnels, bespoke website chatbots, and follow-ups.',
                blobGradient: 'linear-gradient(135deg, #00154c 0%, #D6B46A 100%)',
                services: ['Automatic Lead Capture', 'WhatsApp Automation', 'AI Chatbot for Website', 'Appointment Booking Automation', 'Email & Client Follow-up', 'Proposal & Contract Automation', 'CRM Setup & Funnels'],
                icon: <Cpu className="w-12 h-12 text-brand-gold" strokeWidth={1.5} />
              },
              {
                id: 'content',
                title: 'Content Creation',
                subtitle: 'Cinematic Narrative',
                description: 'High-end production of architectural photography, slow-burn cinematic project overviews, testimonials, and before/after videos.',
                blobGradient: 'linear-gradient(135deg, #D6B46A 0%, #00154c 100%)',
                services: ['Architectural Photography', 'Cinematic Project Videos', 'Site Progress Documentation', 'Before & After Transformation Videos', 'Client Testimonial Videos', 'Project Showcase Content', 'Social Media Production'],
                icon: <Camera className="w-12 h-12 text-brand-gold" strokeWidth={1.5} />
              }
            ].map((card, idx) => {
              const isFlipped = !!flippedCards[card.id];
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.95, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
                  className="flip-card-container cursor-pointer shrink-0"
                  onClick={() => toggleFlip(card.id)}
                  data-cursor="expand"
                >
                  <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                    {/* FRONT */}
                    <div className="flip-card-front">
                      <div className="uiverse-bg flex flex-col justify-between items-center p-6 text-center w-full h-full">
                        <div className="card-border-top" />
                        
                        {/* Clean Spacer (No Icons/Symbols) */}
                        <div className="h-12 mt-4" />

                        <div className="text-center flex-1 flex flex-col justify-center mt-4">
                          <h3 className="font-display text-lg font-bold text-brand-navy tracking-tight">
                            {card.title}
                          </h3>
                          <p className="font-mono text-[10px] text-brand-gold tracking-widest font-bold uppercase mt-1">
                            {card.subtitle}
                          </p>
                          <p className="font-sans text-[11px] text-brand-navy/70 leading-relaxed mt-3 max-w-[220px]">
                            {card.description}
                          </p>
                        </div>
                        <button 
                          className="card-btn mt-4 flex items-center justify-center space-x-2 w-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip(card.id);
                          }}
                        >
                          <span>Explore Services</span>
                          <ArrowLeftRight className="w-3.5 h-3.5 text-brand-gold ml-1.5 opacity-80" />
                        </button>
                      </div>
                      <div className="uiverse-blob" style={{ background: card.blobGradient }}></div>
                    </div>

                    {/* BACK */}
                    <div className="flip-card-back">
                      <div className="card-border-top-back" />
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <div className="text-left border-b border-brand-navy/10 pb-2 mb-3">
                            <span className="font-display text-sm font-bold text-brand-navy block leading-tight">
                              {card.title}
                            </span>
                            <span className="font-sans text-[9px] text-brand-gold font-bold uppercase tracking-wider block mt-0.5">
                              {card.subtitle}
                            </span>
                          </div>

                          {card.platforms && (
                            <div className="mb-2 text-left">
                              <span className="font-mono text-[9px] font-bold text-brand-navy/50 uppercase tracking-wider block mb-1">
                                Platforms:
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {card.platforms.map((platform) => (
                                  <span key={platform} className="text-[8px] font-bold bg-brand-gold/10 text-brand-gold border border-brand-gold/25 px-1.5 py-0.5 rounded">
                                    {platform}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          <span className="font-mono text-[9px] font-bold text-brand-navy/50 uppercase tracking-wider text-left block mb-1">
                            Services Included:
                          </span>
                          <ul className="space-y-1.5 text-left overflow-y-auto max-h-[170px] pr-1 scrollbar-thin">
                            {card.services.map((srv, sIdx) => (
                              <li key={sIdx} className="flex items-start text-[10px] text-brand-navy/85 font-sans leading-tight">
                                <span className="text-brand-gold mr-1.5 shrink-0 select-none">✦</span>
                                <span>{srv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button 
                          className="card-btn-back mt-3 flex items-center justify-center space-x-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip(card.id);
                          }}
                        >
                          <span>Back</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile View: Natural swipable row with snap alignment and auto-scrolling */}
          <div className="md:hidden relative w-full overflow-hidden mt-6 py-6 px-4">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-brand-bg to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-brand-bg to-transparent z-20 pointer-events-none" />
            
            <div className="w-full flex flex-col items-center">
              {/* Constrained wrapper to guarantee exactly ONE card is fully visible at a time */}
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
                {[
                  {
                    id: 'social-m',
                    title: 'Social Media',
                    subtitle: 'Platform Mastery',
                    description: 'Elevate your digital footprint. Custom platform strategy, premium reels, high-end content design, and organic growth.',
                    platforms: ['Instagram', 'Pinterest', 'LinkedIn', 'Facebook'],
                    services: ['Content Strategy', 'Reels Production', 'Photography & Videography', 'Carousel & Post Design', 'Caption Writing', 'Hashtag Research', 'Monthly Analytics Reports'],
                    icon: <Share2 className="w-12 h-12 text-brand-gold" strokeWidth={1.5} />
                  },
                  {
                    id: 'brand-m',
                    title: 'Brand Identity',
                    subtitle: 'Visual Legacy',
                    description: 'Translate raw brand values into cohesive visual systems, high-end guidelines, iconic marks, and bespoke physical/digital assets.',
                    services: ['Logo Design', 'Brand Guidelines', 'Color Palette Selection', 'Typography Selection', 'Portfolio Design', 'Company Profile Design', 'Brand Assets & Visual Identity'],
                    icon: <Palette className="w-12 h-12 text-brand-gold" strokeWidth={1.5} />
                  },
                  {
                    id: 'web-m',
                    title: 'Web Development',
                    subtitle: 'Digital Flagships',
                    description: 'Custom engineering of blazing-fast responsive web portfolios, modern landing pages, speed optimization, and robust portals.',
                    services: ['Modern Portfolio Websites', 'High-Converting Landing Pages', 'Elegant Contact Forms', 'Mobile-Responsive Design', 'Speed Optimization', 'Blog Setup & CMS Integration'],
                    icon: <Globe className="w-12 h-12 text-brand-gold" strokeWidth={1.5} />
                  },
                  {
                    id: 'automation-m',
                    title: 'Automation',
                    subtitle: 'Intelligent Flows',
                    description: 'Maximize your efficiency. Fully automated lead capturing, smart CRM funnels, bespoke website chatbots, and follow-ups.',
                    services: ['Automatic Lead Capture', 'WhatsApp Automation', 'AI Chatbot for Website', 'Appointment Booking Automation', 'Email & Client Follow-up', 'Proposal & Contract Automation', 'CRM Setup & Funnels'],
                    icon: <Cpu className="w-12 h-12 text-brand-gold" strokeWidth={1.5} />
                  },
                  {
                    id: 'content-m',
                    title: 'Content Creation',
                    subtitle: 'Cinematic Narrative',
                    description: 'High-end production of architectural photography, slow-burn cinematic project overviews, testimonials, and before/after videos.',
                    services: ['Architectural Photography', 'Cinematic Project Videos', 'Site Progress Documentation', 'Before & After Transformation Videos', 'Client Testimonial Videos', 'Project Showcase Content', 'Social Media Production'],
                    icon: <Camera className="w-12 h-12 text-brand-gold" strokeWidth={1.5} />
                  }
                ].map((card) => {
                  const isFlipped = !!flippedCards[card.id];
                  return (
                    <div key={card.id} className="snap-center shrink-0 select-none">
                      <div className="flip-card-container" onClick={() => toggleFlip(card.id)}>
                        <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                          {/* FRONT */}
                          <div className="flip-card-front">
                            <div className="uiverse-bg flex flex-col justify-between items-center p-6 text-center w-full h-full">
                              <div className="card-border-top" />
                              <div className="card-img-circle">
                                {card.icon}
                              </div>
                              <div className="text-center flex-1 flex flex-col justify-center mt-4">
                                <h3 className="font-display text-base font-bold text-brand-navy tracking-tight">
                                  {card.title}
                                </h3>
                                <p className="font-mono text-[9px] text-brand-gold tracking-widest font-bold uppercase mt-1">
                                  {card.subtitle}
                                </p>
                                <p className="font-sans text-[10px] text-brand-navy/70 leading-relaxed mt-3 max-w-[200px]">
                                  {card.description}
                                </p>
                              </div>
                              <button 
                                className="card-btn mt-4 flex items-center justify-center space-x-2 w-full"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleFlip(card.id);
                                }}
                              >
                                <span>Explore Services</span>
                                <ArrowLeftRight className="w-3.5 h-3.5 text-brand-gold ml-1.5 opacity-80" />
                              </button>
                            </div>
                          </div>

                          {/* BACK */}
                          <div className="flip-card-back">
                            <div className="card-border-top-back" />
                            <div className="flex flex-col h-full justify-between">
                              <div>
                                <div className="text-left border-b border-brand-navy/10 pb-2 mb-3">
                                  <span className="font-display text-sm font-bold text-brand-navy block leading-tight">
                                    {card.title}
                                  </span>
                                  <span className="font-sans text-[9px] text-brand-gold font-bold uppercase tracking-wider block mt-0.5">
                                    {card.subtitle}
                                  </span>
                                </div>

                                {card.platforms && (
                                  <div className="mb-2 text-left">
                                    <span className="font-mono text-[9px] font-bold text-brand-navy/50 uppercase tracking-wider block mb-1">
                                      Platforms:
                                    </span>
                                    <div className="flex flex-wrap gap-1">
                                      {card.platforms.map((platform) => (
                                        <span key={platform} className="text-[8px] font-bold bg-brand-gold/10 text-brand-gold border border-brand-gold/25 px-1.5 py-0.5 rounded">
                                          {platform}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                <span className="font-mono text-[9px] font-bold text-brand-navy/50 uppercase tracking-wider text-left block mb-1">
                                  Services Included:
                                </span>
                                <ul className="space-y-1 text-left overflow-y-auto max-h-[170px] pr-1 scrollbar-none">
                                  {card.services.map((srv, sIdx) => (
                                    <li key={sIdx} className="flex items-start text-[10px] text-brand-navy/85 font-sans leading-tight">
                                      <span className="text-brand-gold mr-1.5 shrink-0 select-none">✦</span>
                                      <span>{srv}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <button 
                                className="card-btn-back mt-2 flex items-center justify-center space-x-1"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleFlip(card.id);
                                }}
                              >
                                <span>Back</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {[0, 1, 2, 3, 4].map((index) => (
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
            <span className="text-[10px] font-sans font-bold tracking-widest text-brand-navy/40 uppercase mt-4 block">
              ← Swipe or Click to Flip cards →
            </span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
