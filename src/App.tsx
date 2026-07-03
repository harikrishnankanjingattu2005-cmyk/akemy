import { useState, useEffect } from 'react';
import { Page } from './types';
import { motion, AnimatePresence } from 'motion/react';

// @ts-ignore
import logoImg from './assets/logo.png';

// Core Components
import CustomCursor from './components/CustomCursor';
import InteractivePaintBackground from './components/InteractivePaintBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeamPortfolio from './components/TeamPortfolio';
import StevePortfolio from './components/StevePortfolio';
import FidhaPortfolio from './components/FidhaPortfolio';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [runtimeError, setRuntimeError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const handleError = (event: ErrorEvent) => {
      setRuntimeError(`Runtime Error: ${event.message}\nAt: ${event.filename}:${event.lineno}:${event.colno}`);
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      setRuntimeError(`Unhandled Promise Rejection: ${event.reason?.message || event.reason}`);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);

  if (runtimeError) {
    return (
      <div className="fixed inset-0 bg-brand-dark-navy text-brand-white p-8 z-50 flex items-center justify-center font-mono text-sm leading-relaxed overflow-auto">
        <div className="max-w-2xl bg-brand-navy p-6 rounded-xl border border-brand-gold/30 shadow-2xl">
          <h2 className="text-brand-gold text-lg font-bold mb-4">Application Diagnostic Overlay</h2>
          <pre className="bg-black/40 p-4 rounded-md border border-brand-white/10 text-red-400 whitespace-pre-wrap font-mono mb-6">
            {runtimeError}
          </pre>
          <button
            onClick={() => window.location.reload()}
            className="bg-brand-gold text-brand-navy px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Reload Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 bg-brand-bg z-50 flex items-center justify-center"
          >
            <motion.img
              src={logoImg}
              alt="AKEMY"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-[180px] max-h-[180px] w-auto h-auto object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative min-h-screen flex flex-col justify-between selection:bg-brand-gold selection:text-brand-navy">
        {/* Interactive Paint Brush Cursor Background */}
        <InteractivePaintBackground />
        
        {/* Custom Desktop Cursor */}
        <CustomCursor />

        {/* Sticky Luxury Navbar */}
        {!isLoading && (
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )}

        {/* Single-section Layout Container with scrolling vertical flow */}
        <main className="flex-1 w-full flex flex-col pt-16">
          <AnimatePresence mode="wait">
            {currentPage === 'home' && (
              <motion.div
                key="home-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col"
              >
                <Hero setCurrentPage={setCurrentPage} />
                <TeamPortfolio setCurrentPage={setCurrentPage} />
              </motion.div>
            )}
            {currentPage === 'steve' && (
              <StevePortfolio setCurrentPage={setCurrentPage} />
            )}
            {currentPage === 'fidha' && (
              <FidhaPortfolio setCurrentPage={setCurrentPage} />
            )}
          </AnimatePresence>
        </main>
        
        {!isLoading && (
          <Footer setCurrentPage={setCurrentPage} />
        )}
      </div>
    </>
  );
}
