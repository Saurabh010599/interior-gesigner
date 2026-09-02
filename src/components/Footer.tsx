import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  MessageCircle, 
  ArrowUp,
  ShieldCheck,
  Instagram,
  Facebook,
  Linkedin,
  Youtube
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/mockData';

export const Footer: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#f8f8fa] border-t border-zinc-200 text-zinc-600 select-none overflow-hidden">
      
      {/* Blueprint Grid Watermark */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-zinc-200">
          
          {/* Brand Info & Vision (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#c5a059]/40 flex items-center justify-center shadow-sm">
                <span className="font-cinzel text-xl font-bold bg-gradient-to-br from-[#8d6928] via-[#b38738] to-[#684b16] bg-clip-text text-transparent">
                  M
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-lg font-bold tracking-[0.16em] text-zinc-900">
                  MAGIC TOUCH
                </span>
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#8d6928] uppercase">
                  Architect & Interior Designer
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
              Transforming spaces into extraordinary experiences. Chandrapur’s premier architecture and luxury interior design studio creating bespoke residential, commercial, and modular living sanctuaries.
            </p>

            <div className="text-xs text-[#8d6928] font-semibold font-sans">
              "आपके सपनों को खूबसूरत वास्तविकता में बदलते हैं"
            </div>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-3 p-3 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <div className="flex items-center text-[#b38738]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#b38738]" />
                ))}
              </div>
              <span className="text-xs text-zinc-800 font-semibold">
                {COMPANY_INFO.rating} ★ Rating ({COMPANY_INFO.reviewsCount}+ Google Reviews)
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                { icon: Instagram, href: 'https://instagram.com' },
                { icon: Facebook, href: 'https://facebook.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Youtube, href: 'https://youtube.com' }
              ].map((soc, idx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-[#8d6928] hover:border-[#c5a059] shadow-sm transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-cinzel text-xs font-bold text-zinc-900 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Home', href: '#hero' },
                { label: '3D Room Studio', href: '#3d-studio' },
                { label: 'About Studio', href: '#about' },
                { label: 'Bespoke Services', href: '#services' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Cost Estimator', href: '#estimator' },
                { label: 'Client Reviews', href: '#testimonials' },
                { label: 'Studio Contact', href: '#contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-zinc-600 hover:text-[#8d6928] transition-colors cursor-pointer text-left font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Luxury Services Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-cinzel text-xs font-bold text-zinc-900 uppercase tracking-widest">
              Design Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600">
              {SERVICES_DATA.slice(0, 8).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="hover:text-zinc-900 transition-colors text-left flex items-center gap-1.5 cursor-pointer font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#b38738]" />
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Chandrapur Studio Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-cinzel text-xs font-bold text-zinc-900 uppercase tracking-widest">
              Chandrapur Studio
            </h4>
            
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#b38738] shrink-0 mt-0.5" />
                <span className="text-zinc-700 leading-relaxed font-normal">
                  {COMPANY_INFO.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#b38738] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-zinc-900 hover:text-[#8d6928] font-semibold">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#b38738] shrink-0" />
                <span className="text-zinc-500 text-xs">
                  {COMPANY_INFO.openingHours}
                </span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider text-center shadow-sm hover:scale-105 transition-transform cursor-pointer mt-3"
            >
              Book Studio Consultation
            </button>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-zinc-800">Magic Touch Design</strong>. All Rights Reserved. | Architect & Luxury Interior Designer in Chandrapur.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-500">Flat 103, Atharva Heights, Bhanapeth</span>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-[#8d6928] hover:border-[#c5a059] shadow-sm transition-all cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
