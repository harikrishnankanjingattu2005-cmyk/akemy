import { motion } from 'motion/react';
import { PhoneCall, MessageCircle, Calendar } from 'lucide-react';
import { Page } from '../types';

interface FloatingProps {
  setCurrentPage: (page: Page) => void;
}

export default function FloatingMobileCTA({ setCurrentPage }: FloatingProps) {
  const handleBookClick = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsAppText = "Hi AKEMY! I arrived from your Instagram link and would love to request a premium discovery call briefing.";
  const whatsAppUrl = `https://wa.me/message/AKEMY?text=${encodeURIComponent(whatsAppText)}`;

  return (
    <div className="fixed bottom-6 left-0 right-0 z-30 px-6 flex justify-center md:hidden pointer-events-none">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', damping: 20, stiffness: 150 }}
        className="glass-panel-dark border border-brand-white/10 rounded-full py-2.5 px-4 flex items-center justify-between gap-4 shadow-2xl w-full max-w-sm pointer-events-auto"
      >
        {/* Quick WhatsApp Action Button */}
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-full text-[11px] font-bold tracking-wider uppercase transition-colors duration-300"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Chat</span>
        </a>

        {/* Quick Contact Form Selector */}
        <button
          onClick={handleBookClick}
          className="flex-1 flex items-center justify-center space-x-2 bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-navy py-3 px-4 rounded-full text-[11px] font-bold tracking-wider uppercase transition-colors duration-300 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Briefing</span>
        </button>
      </motion.div>
    </div>
  );
}
