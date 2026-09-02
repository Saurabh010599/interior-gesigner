import React, { useState } from 'react';
import { 
  Eye, 
  Layers, 
  Sun, 
  Moon, 
  Sunset, 
  Sparkles, 
  ArrowRight,
  Compass,
  Palette,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { ROOM_STUDIO_MODELS } from '../data/mockData';
import { Room3DModel } from '../types';

interface Interactive3DStudioProps {
  onBookConsultation: (roomTitle: string) => void;
}

export const Interactive3DStudio: React.FC<Interactive3DStudioProps> = ({ onBookConsultation }) => {
  const [selectedRoom, setSelectedRoom] = useState<Room3DModel>(ROOM_STUDIO_MODELS[0]);
  const [activeStyleIndex, setActiveStyleIndex] = useState<number>(0);
  const [activeLighting, setActiveLighting] = useState<'daylight' | 'warm' | 'evening'>('warm');

  const currentStyle = selectedRoom.styles[activeStyleIndex] || selectedRoom.styles[0];

  const handleRoomSelect = (room: Room3DModel) => {
    setSelectedRoom(room);
    setActiveStyleIndex(0);
  };

  return (
    <section id="3d-studio" className="relative py-24 bg-white border-t border-zinc-100 overflow-hidden select-none">
      
      {/* Background Ambience */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#c5a059]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#dfbe76]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#8d6928] text-xs font-bold tracking-widest uppercase mb-3"
          >
            <Compass className="w-3.5 h-3.5" /> Interactive 3D Studio
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-wide"
          >
            EXPERIENCE YOUR <span className="text-gold-gradient">SANCTUARY</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-600 text-sm sm:text-base mt-2 font-normal max-w-xl mx-auto"
          >
            Customize lighting moods, finish textures, and spatial layouts before physical execution.
          </motion.p>
        </div>

        {/* Room Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {ROOM_STUDIO_MODELS.map((room) => {
            const isSelected = selectedRoom.id === room.id;
            return (
              <button
                key={room.id}
                onClick={() => handleRoomSelect(room)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-zinc-900 text-white shadow-md'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900'
                }`}
              >
                <span>{room.title}</span>
              </button>
            );
          })}
        </div>

        {/* 3D Visualizer Main Stage */}
        <div className="luxury-card rounded-3xl overflow-hidden border border-zinc-200 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Screen (8 cols on desktop) */}
            <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[380px] sm:min-h-[460px] bg-zinc-100 overflow-hidden group">
              
              {/* Render Image with dynamic lighting filter */}
              <motion.img
                key={`${selectedRoom.id}-${activeStyleIndex}-${activeLighting}`}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                src={currentStyle.image}
                alt={selectedRoom.title}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  activeLighting === 'daylight'
                    ? 'brightness-105 contrast-100 saturate-100'
                    : activeLighting === 'warm'
                    ? 'brightness-100 contrast-105 sepia-[0.15] saturate-110'
                    : 'brightness-90 contrast-115 hue-rotate-[-10deg] saturate-120'
                }`}
                referrerPolicy="no-referrer"
              />

              {/* Lighting Ambient Overlay */}
              <div 
                className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                  activeLighting === 'warm' 
                    ? 'bg-amber-500/10' 
                    : activeLighting === 'evening' 
                    ? 'bg-indigo-950/20' 
                    : 'bg-transparent'
                }`}
              />

              {/* Floating Lighting Controls */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 shadow-sm z-20">
                <button
                  onClick={() => setActiveLighting('daylight')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeLighting === 'daylight'
                      ? 'bg-zinc-900 text-white shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                  title="Daylight 6500K"
                >
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span className="hidden sm:inline">Daylight</span>
                </button>

                <button
                  onClick={() => setActiveLighting('warm')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeLighting === 'warm'
                      ? 'bg-[#b38738] text-white shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                  title="Warm Ambient 3000K"
                >
                  <Sunset className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Warm</span>
                </button>

                <button
                  onClick={() => setActiveLighting('evening')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeLighting === 'evening'
                      ? 'bg-zinc-900 text-white shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                  title="Evening Mood 2700K"
                >
                  <Moon className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="hidden sm:inline">Evening</span>
                </button>
              </div>

              {/* Bottom Room Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
                <div className="px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-zinc-200 shadow-sm">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[#8d6928]">
                    {selectedRoom.tagline}
                  </div>
                  <div className="font-cinzel text-sm sm:text-base font-bold text-zinc-900">
                    {selectedRoom.title} — <span className="text-[#8d6928]">{currentStyle.name}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Configurator Controls Sidebar (4 cols on desktop) */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l border-zinc-200">
              
              <div className="space-y-6">
                
                {/* Style Selector */}
                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-[#b38738]" /> Select Aesthetic Style
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedRoom.styles.map((style, idx) => {
                      const isActive = activeStyleIndex === idx;
                      return (
                        <button
                          key={style.id}
                          onClick={() => setActiveStyleIndex(idx)}
                          className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                            isActive
                              ? 'border-[#b38738] bg-[#fdfbf7] shadow-sm'
                              : 'border-zinc-200 bg-zinc-50 hover:bg-zinc-100'
                          }`}
                        >
                          <div className={`text-xs font-bold font-cinzel ${isActive ? 'text-[#8d6928]' : 'text-zinc-800'}`}>
                            {style.name}
                          </div>
                          <div className="flex items-center gap-1 mt-2">
                            {style.palette.map((color, cIdx) => (
                              <div 
                                key={cIdx} 
                                className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-inner" 
                                style={{ backgroundColor: color }} 
                              />
                            ))}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {currentStyle.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-1.5">
                  <div className="text-[11px] uppercase font-bold tracking-wider text-zinc-400">
                    Included Architectural Highlights
                  </div>
                  {currentStyle.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#b38738] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Materials list */}
                <div>
                  <div className="text-[11px] uppercase font-bold tracking-wider text-zinc-400 mb-2">
                    Materials & Finishes
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentStyle.materials.map((mat, mIdx) => (
                      <span key={mIdx} className="px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-700 text-[11px] font-medium">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action CTA */}
              <div className="pt-6 border-t border-zinc-100 mt-6">
                <button
                  onClick={() => onBookConsultation(`${selectedRoom.title} (${currentStyle.name})`)}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#c5a059] via-[#dfbe76] to-[#b38738] text-black font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Request This 3D Design</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
