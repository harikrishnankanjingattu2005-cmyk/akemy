import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Page } from '../types';

// @ts-ignore
import logoImg from '../assets/logo.png';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (key: Page) => {
    setCurrentPage(key);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled 
          ? 'py-4 glass-panel bg-brand-bg/75 shadow-[0_8px_32px_rgba(26,36,61,0.05)]' 
          : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        
        {/* Centered logo on mobile, left-aligned on desktop */}
        <div className="flex items-center justify-center md:justify-start w-full">
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center focus:outline-none cursor-pointer group"
          >
            <img 
              src={logoImg} 
              alt="AKEMY" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
