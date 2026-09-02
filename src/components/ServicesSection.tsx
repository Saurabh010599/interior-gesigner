import React, { useState } from 'react';
import { 
  Building2, 
  Home, 
  Utensils, 
  BedDouble, 
  Sofa, 
  Briefcase, 
  Sparkles, 
  RefreshCw, 
  ArrowRight,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';

const ICON_MAP: Record<string, React.ElementType> = {
  Building2,
  Home,
  Utensils,
  BedDouble,
  Sofa,
  Briefcase,
  Sparkles,
  RefreshCw,
  Layers
};

export const ServicesSection: React.FC<{ onBookConsultation: (serviceTitle: string) => void }> = ({ onBookConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'residential', label: 'Residential' },
    { id: 'modular', label: 'Modular' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="services" className="relative py-24 bg-white border-t border-zinc-100 overflow-hidden select-none">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#c5a059]/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#8d6928] text-xs font-bold tracking-widest uppercase mb-3"
          >
            <Layers className="w-3.5 h-3.5" /> Bespoke Design Disciplines
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-wide"
          >
            OUR EXPERTISE & <span className="text-gold-gradient">SERVICES</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-600 text-sm sm:text-base mt-2 font-normal max-w-xl mx-auto"
          >
            Comprehensive architectural planning, turnkey interior execution, and bespoke modular styling in Chandrapur.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, idx) => {
            const IconComponent = ICON_MAP[service.iconName] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="luxury-card rounded-3xl overflow-hidden bg-white flex flex-col justify-between group"
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Category Pill on Image */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#8d6928] uppercase tracking-wider shadow-sm">
                    {service.category}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#c5a059]/15 flex items-center justify-center text-[#8d6928] shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-cinzel text-lg font-bold text-zinc-900">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Deliverables checklist */}
                    <div className="space-y-1.5 mb-6">
                      {(service.deliverables || []).slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#b38738] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <button
                    onClick={() => onBookConsultation(service.title)}
                    className="w-full py-2.5 rounded-xl bg-zinc-50 group-hover:bg-[#fdfbf7] border border-zinc-200 group-hover:border-[#c5a059]/40 text-xs font-bold text-zinc-800 group-hover:text-[#8d6928] uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Inquire Discipline</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
