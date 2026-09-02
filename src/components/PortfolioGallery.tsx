import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Layers, 
  ArrowRight, 
  MoveHorizontal, 
  Eye, 
  Maximize2,
  Calendar,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_PROJECTS } from '../data/mockData';
import { PortfolioProject } from '../types';

export const PortfolioGallery: React.FC<{ onBookConsultation: (projectTitle: string) => void }> = ({ onBookConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Luxury Villas' },
    { id: 'kitchen', label: 'Modular Kitchens' },
    { id: 'commercial', label: 'Offices & Retail' },
    { id: 'renovation', label: 'Renovations' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  // Interactive slider project
  const featuredBeforeAfter = PORTFOLIO_PROJECTS.find(p => p.beforeImage) || PORTFOLIO_PROJECTS[0];

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const offset = clientX - container.left;
    const percentage = Math.max(0, Math.min(100, (offset / container.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section id="portfolio" className="relative py-24 bg-[#fafafc] border-t border-zinc-100 overflow-hidden select-none">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#c5a059]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#8d6928] text-xs font-bold tracking-widest uppercase mb-3"
          >
            <Compass className="w-3.5 h-3.5" /> Executed Masterpieces
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-wide"
          >
            SIGNATURE <span className="text-gold-gradient">PORTFOLIO</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-600 text-sm sm:text-base mt-2 font-normal max-w-xl mx-auto"
          >
            Explore actual turnkey interior and architectural transformations delivered across Chandrapur.
          </motion.p>
        </div>

        {/* Before & After Interactive Feature Card */}
        {featuredBeforeAfter.beforeImage && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 luxury-card rounded-3xl p-6 sm:p-8 bg-white border border-zinc-200 shadow-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#8d6928] block">
                  Interactive Reveal • Drag to Compare
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-zinc-900 mt-0.5">
                  {featuredBeforeAfter.title} (Before vs. After)
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                <MoveHorizontal className="w-4 h-4 text-[#b38738]" />
                <span>Drag Slider Left / Right</span>
              </div>
            </div>

            {/* Slider Comparison Screen */}
            <div 
              onMouseMove={handleSliderMove}
              onTouchMove={handleSliderMove}
              className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none bg-zinc-900"
            >
              {/* After Image (Full Background) */}
              <img
                src={featuredBeforeAfter.image}
                alt="After Transformation"
                className="w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                Executed After ✨
              </div>

              {/* Before Image (Clipped Overlay) */}
              <div 
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={featuredBeforeAfter.beforeImage}
                  alt="Before Transformation"
                  className="w-full h-full object-cover max-w-none"
                  style={{ width: '100%' }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                  Raw Before
                </div>
              </div>

              {/* Slider Split Divider Line */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#c5a059] via-white to-[#b38738] shadow-[0_0_15px_rgba(197,160,89,0.8)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-[#b38738] flex items-center justify-center text-zinc-800 shadow-md">
                  <MoveHorizontal className="w-4 h-4 text-[#8d6928]" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-100 hover:text-zinc-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="luxury-card rounded-3xl overflow-hidden bg-white group flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#8d6928] uppercase tracking-wider shadow-sm">
                  {project.category}
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-amber-200 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#dfbe76]" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-white truncate">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Info & Inquire */}
              <div className="p-5 flex items-center justify-between gap-3 border-t border-zinc-100 bg-white">
                <div className="text-xs text-zinc-500 font-medium">
                  {project.area} • Handover {project.completionYear}
                </div>

                <button
                  onClick={() => onBookConsultation(project.title)}
                  className="px-4 py-2 rounded-full bg-zinc-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 hover:scale-105 active:scale-95"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3 text-[#dfbe76]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
