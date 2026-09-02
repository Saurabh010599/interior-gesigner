import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Calculator, 
  ArrowUp,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FloatingActionsProps {
  onOpenEstimator: () => void;
  onOpenConsultation: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ 
  onOpenEstimator, 
  onOpenConsultation 
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none select-none">
      
      {/* Floating Instant Cost Estimator Pill */}
      <button
        onClick={onOpenEstimator}
        className="pointer-events-auto group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 border border-zinc-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-[#b38738] text-zinc-900 text-xs font-bold backdrop-blur-xl transition-all cursor-pointer hover:scale-105 active:scale-95"
      >
        <Calculator className="w-3.5 h-3.5 text-[#b38738]" />
        <span className="hidden sm:inline text-zinc-700 group-hover:text-zinc-900">
          Estimate Project Cost
        </span>
        <span className="px-1.5 py-0.5 rounded bg-[#c5a059]/20 text-[#8d6928] text-[10px] font-bold">
          Free
        </span>
      </button>

      {/* Floating Action Buttons Group */}
      <div className="flex items-center gap-2.5 pointer-events-auto">
        
        {/* Direct Phone Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phoneClean}`}
          className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-[#8d6928] hover:text-black hover:bg-[#fdfbf7] shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:scale-110 transition-all cursor-pointer"
          aria-label="Call Magic Touch Design"
          title="Call +91 83903 51213"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Floating Button with Glow */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Magic Touch Design Chandrapur! I would like to inquire about architecture and interior design services for my space.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-[0_4px_25px_rgba(16,185,129,0.4)] hover:scale-110 transition-all cursor-pointer"
          aria-label="Chat on WhatsApp"
          title="WhatsApp Magic Touch Design"
        >
          <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
          <MessageCircle className="w-6 h-6 relative z-10" />
        </a>

        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:text-[#8d6928] hover:border-[#c5a059] flex items-center justify-center transition-all cursor-pointer shadow-md"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

      </div>

    </div>
  );
};
