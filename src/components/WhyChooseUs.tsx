import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  FileSpreadsheet, 
  Sparkles, 
  Wrench, 
  Award,
  Layers,
  MapPin,
  Compass
} from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/mockData';

const ADVANTAGES = [
  {
    icon: Clock,
    title: '45-Day Turnkey Delivery',
    description: 'Committed delivery timeline with structured milestone schedules.'
  },
  {
    icon: ShieldCheck,
    title: '10-Year Hardware Warranty',
    description: 'Certified premium fittings with guaranteed post-handover support.'
  },
  {
    icon: FileSpreadsheet,
    title: 'Zero Hidden Costs',
    description: '100% transparent itemized Bill of Quantities (BOQ) with fixed pricing.'
  },
  {
    icon: Sparkles,
    title: 'Photorealistic 3D VR',
    description: 'Experience your custom space in 3D walkthroughs before fabrication.'
  },
  {
    icon: MapPin,
    title: 'Local Chandrapur Studio',
    description: 'Direct studio access at Atharva Heights, Bhanapeth for personal visits.'
  },
  {
    icon: Award,
    title: '500+ Happy Clients',
    description: 'Rated 4.9★ with 246+ authentic Google client reviews across the region.'
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="relative py-24 bg-[#fafafc] border-t border-zinc-100 overflow-hidden select-none">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#c5a059]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#8d6928] text-xs font-bold tracking-widest uppercase mb-3"
          >
            <Compass className="w-3.5 h-3.5" /> The Magic Touch Distinction
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-wide"
          >
            WHY CLIENTS TRUST <span className="text-gold-gradient">MAGIC TOUCH</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-600 text-sm sm:text-base mt-2 font-normal max-w-xl mx-auto"
          >
            Uncompromising architectural precision, transparent governance, and exceptional craftsmanship.
          </motion.p>
        </div>

        {/* 6 Grid Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="luxury-card rounded-2xl p-6 bg-white border border-zinc-200 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#c5a059]/15 flex items-center justify-center text-[#8d6928] mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-cinzel text-base font-bold text-zinc-900 mb-1.5">
                    {adv.title}
                  </h3>

                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    {adv.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
