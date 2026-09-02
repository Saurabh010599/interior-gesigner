import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Star, 
  Menu, 
  X, 
  Sparkles, 
  Calendar,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenConsultation: (prefillNote?: string) => void;
  onOpenEstimator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', '3d-studio', 'about', 'services', 'portfolio', 'estimator', 'why-us', 'process', 'reviews', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 220) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: '3D Studio', href: '#3d-studio', id: '3d-studio' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Estimator', href: '#estimator', id: 'estimator' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Reviews', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#fafafa] border-b border-zinc-200/80 text-xs text-zinc-600 py-2 px-4 select-none relative z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 overflow-hidden text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#c5a059]/15 text-[#8d6928] font-bold border border-[#c5a059]/30 text-[11px]">
              <Star className="w-3 h-3 fill-[#b38738] text-[#b38738]" /> {COMPANY_INFO.rating} ★ ({COMPANY_INFO.reviewsCount}+ Google Reviews)
            </span>
            <span className="hidden sm:inline text-zinc-300">|</span>
            <span className="text-zinc-700 font-medium truncate">
              {COMPANY_INFO.hindiTagline}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[12px]">
            <span className="hidden lg:flex items-center gap-1 text-zinc-500">
              <MapPin className="w-3.5 h-3.5 text-[#b38738]" /> Atharva Heights, Chandrapur
            </span>
            <a 
              href={`tel:${COMPANY_INFO.phoneClean}`} 
              className="flex items-center gap-1.5 text-zinc-800 hover:text-[#b38738] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#b38738]" /> {COMPANY_INFO.phone}
            </a>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Magic Touch Design, I want to discuss interior design services in Chandrapur.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl border-b border-zinc-200 shadow-[0_4px_25px_rgba(0,0,0,0.05)] py-3' 
            : 'bg-white/70 backdrop-blur-md py-4 border-b border-zinc-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-white to-[#f4eee1] border border-[#c5a059]/40 flex items-center justify-center shadow-[0_4px_12px_rgba(197,160,89,0.2)] group-hover:border-[#b38738] transition-all">
              <span className="font-cinzel text-xl font-bold bg-gradient-to-br from-[#8d6928] via-[#b38738] to-[#684b16] bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                M
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-base sm:text-lg font-bold tracking-[0.16em] text-zinc-900 group-hover:text-[#8d6928] transition-colors">
                MAGIC TOUCH
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#8d6928] uppercase">
                Design Studio • Chandrapur
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-zinc-100/80 border border-zinc-200/80 rounded-full px-3 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.href)}
                className={`px-3.5 py-1.5 text-xs tracking-wider uppercase rounded-full transition-all duration-200 cursor-pointer font-semibold ${
                  activeSection === link.id
                    ? 'bg-white text-[#8d6928] shadow-sm border border-[#c5a059]/30'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-white/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenConsultation('Navbar Quick Booking')}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#c5a059] via-[#dfbe76] to-[#b38738] text-black font-bold text-xs tracking-wider uppercase shadow-[0_4px_15px_rgba(197,160,89,0.3)] hover:shadow-[0_6px_22px_rgba(197,160,89,0.45)] transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-[#b38738] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden fixed inset-0 z-50 bg-white/98 backdrop-blur-2xl flex flex-col pt-6 px-6 pb-8 border-b border-zinc-200 overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-5 border-b border-zinc-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-white to-[#f4eee1] border border-[#c5a059]/40 flex items-center justify-center">
                  <span className="font-cinzel text-lg font-bold text-[#b38738]">M</span>
                </div>
                <div>
                  <div className="font-cinzel text-base font-bold text-zinc-900 tracking-wider">MAGIC TOUCH</div>
                  <div className="text-[10px] text-[#b38738] font-bold tracking-widest uppercase">Chandrapur</div>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-zinc-900"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col gap-1.5 py-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-3 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center justify-between transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#c5a059]/15 text-[#8d6928] border border-[#c5a059]/30'
                      : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-zinc-400" />
                </button>
              ))}
            </div>

            {/* Quick CTA inside Mobile Drawer */}
            <div className="mt-auto pt-4 border-t border-zinc-200 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#c5a059] via-[#dfbe76] to-[#b38738] text-black font-bold text-xs tracking-wider uppercase text-center shadow-md"
              >
                Book Free Consultation
              </button>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="py-3 px-4 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#b38738]" /> Call Studio
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Magic Touch Design, I want to discuss interior design for my space.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
