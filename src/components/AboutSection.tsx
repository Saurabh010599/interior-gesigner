import React from 'react';
import { 
  Building2, 
  Award, 
  Users, 
  Clock, 
  Sparkles, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/mockData';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="relative py-24 bg-[#fafafc] border-t border-zinc-100 overflow-hidden select-none">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#c5a059]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with Parallax Tilt Frame */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-200 shadow-[0_20px_40px_rgba(0,0,0,0.06)] group"
            >
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80" 
                alt="Magic Touch Design Studio Atharva Heights Chandrapur" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Trust Card at Atharva Heights */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 sm:right-6 bg-white/95 backdrop-blur-xl p-5 rounded-2xl border border-zinc-200 shadow-[0_15px_35px_rgba(0,0,0,0.08)] max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center text-[#8d6928] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8d6928] block">Studio Location</span>
                  <div className="font-cinzel text-xs font-bold text-zinc-900">Atharva Heights, Chandrapur</div>
                  <span className="text-[11px] text-zinc-500">Flat 103, Near ShriRam Chowk</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#8d6928] text-xs font-bold tracking-widest uppercase"
            >
              <Compass className="w-3.5 h-3.5" /> Studio Philosophy
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 leading-tight"
            >
              CRAFTING TIMELESS <span className="text-gold-gradient">ELEGANCE</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal"
            >
              Magic Touch Design is Chandrapur’s leading architectural and interior design firm. We blend bespoke luxury aesthetics with pragmatic engineering to transform residences, commercial headquarters, and modular spaces into works of art.
            </motion.p>

            {/* Core Pillars 3-Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2"
            >
              <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#c5a059]/15 flex items-center justify-center text-[#8d6928] mb-3">
                  <Award className="w-4 h-4" />
                </div>
                <div className="font-cinzel text-xs font-bold text-zinc-900 mb-1">Tailored Luxury</div>
                <div className="text-[11px] text-zinc-500 leading-snug">Every layout customized to your family’s routine.</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#c5a059]/15 flex items-center justify-center text-[#8d6928] mb-3">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="font-cinzel text-xs font-bold text-zinc-900 mb-1">On-Time Delivery</div>
                <div className="text-[11px] text-zinc-500 leading-snug">45-day guaranteed modular execution.</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#c5a059]/15 flex items-center justify-center text-[#8d6928] mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="font-cinzel text-xs font-bold text-zinc-900 mb-1">Turnkey Warranty</div>
                <div className="text-[11px] text-zinc-500 leading-snug">10-year warranty on core modular hardware.</div>
              </div>
            </motion.div>

            {/* CTA button */}
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-full bg-zinc-900 text-white hover:bg-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <span>Schedule Studio Visit</span>
                <ArrowRight className="w-4 h-4 text-[#dfbe76]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
