import React from 'react';
import { Smartphone } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage?: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer 
      id="main-footer"
      className="bg-brand-dark-navy text-brand-white bg-grain py-16 relative overflow-hidden"
    >
      {/* Subtle lighting overlay */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-brand-gold/10 blur-[110px] pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] rounded-full bg-brand-white/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-6">
        {/* Brand Logo & Identity */}
        <div>
          <span className="font-display text-3xl font-extrabold tracking-widest text-brand-white block">
            AKEMY
          </span>
          <span className="font-sans text-[10px] text-brand-gold font-bold tracking-widest uppercase mt-1 block">
            From Vision to Visibility.
          </span>
        </div>

        {/* Minimalist Divider */}
        <div className="w-12 h-[1px] bg-brand-white/20 mx-auto" />

        {/* Direct Phone / WhatsApp Contact */}
        <div className="flex items-center justify-center space-x-2.5">
          <Smartphone className="w-4 h-4 text-brand-gold shrink-0" />
          <a 
            href="https://wa.me/918330858233" 
            target="_blank" 
            rel="noreferrer" 
            className="font-sans text-sm font-semibold tracking-wider text-brand-white/90 hover:text-brand-gold transition-colors duration-300"
          >
            +91 83308 58233
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-4 text-brand-white/30 text-[9px] font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} AKEMY. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
