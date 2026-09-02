import React, { useState } from 'react';
import { 
  Compass, 
  Layout, 
  Box, 
  Layers, 
  Hammer, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/mockData';
import { ProcessStep } from '../types';

const ICON_MAP: Record<string, React.ElementType> = {
  MessageSquare: Compass,
  Layout,
  Box,
  Layers,
  Hammer,
  Sparkles
};

export const ProcessSection: React.FC<{ onBookConsultation: () => void }> = ({ onBookConsultation }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep: ProcessStep = PROCESS_STEPS[activeStepIndex];
  const StepIcon = ICON_MAP[activeStep.icon] || Sparkles;

  return (
    <section id="process" className="relative py-24 bg-white border-t border-zinc-100 overflow-hidden select-none">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#c5a059]/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#8d6928] text-xs font-bold tracking-widest uppercase mb-3"
          >
            <Compass className="w-3.5 h-3.5" /> Structured Execution Journey
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-wide"
          >
            THE DESIGN <span className="text-gold-gradient">JOURNEY</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-600 text-sm sm:text-base mt-2 font-normal max-w-xl mx-auto"
          >
            From your initial consultation at Atharva Heights to move-in day, experience a predictable, luxurious process.
          </motion.p>
        </div>

        {/* 6 Step Progress Tabs on Desktop */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            const isCompleted = idx < activeStepIndex;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                  isActive
                    ? 'bg-[#fdfbf7] border-[#b38738] shadow-sm'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`font-cinzel text-base font-bold ${isActive ? 'text-[#8d6928]' : 'text-zinc-400'}`}>
                    {step.stepNumber}
                  </span>
                  {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                </div>
                <div className={`text-xs font-bold font-cinzel leading-tight ${isActive ? 'text-zinc-900' : 'text-zinc-700'}`}>
                  {step.title.split('&')[0]}
                </div>
                <div className="text-[10px] text-zinc-400 mt-1">{step.duration}</div>

                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c5a059] to-[#b38738]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Step Detail Interactive Card */}
        <div className="luxury-card rounded-3xl p-6 sm:p-10 bg-white border border-zinc-200 shadow-md relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex items-center gap-3">
                <span className="font-cinzel text-3xl sm:text-4xl font-black text-[#8d6928]">
                  {activeStep.stepNumber}
                </span>
                <div>
                  <div className="text-xs font-bold text-[#b38738] uppercase tracking-widest">
                    {activeStep.hindiTitle}
                  </div>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-zinc-900">
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              <div className="text-xs sm:text-sm font-semibold text-zinc-700">
                {activeStep.subtitle}
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                {activeStep.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#8d6928] mb-1.5">
                  Key Stage Deliverables & Milestones
                </h4>
                {activeStep.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b38738] shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
                    className="px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-semibold uppercase disabled:opacity-30 cursor-pointer"
                  >
                    Previous
                  </button>
                  <button
                    disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                    onClick={() => setActiveStepIndex(Math.min(PROCESS_STEPS.length - 1, activeStepIndex + 1))}
                    className="px-4 py-2 rounded-xl bg-zinc-900 text-white font-semibold text-xs uppercase disabled:opacity-30 cursor-pointer"
                  >
                    Next Stage
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#b38738]" />
                  <span>Duration: {activeStep.duration}</span>
                </div>
              </div>

            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full aspect-square max-w-sm rounded-3xl overflow-hidden border border-zinc-200 p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#fdfbf7] to-[#f7f5ef] shadow-sm">
                
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c5a059] to-[#b38738] flex items-center justify-center text-black shadow-md mb-5">
                  <StepIcon className="w-8 h-8 text-black" />
                </div>

                <span className="text-[10px] uppercase font-bold tracking-widest text-[#8d6928] mb-1">
                  Stage {activeStep.stepNumber} of 06
                </span>
                <div className="font-cinzel text-lg font-bold text-zinc-900 mb-2">
                  {activeStep.title}
                </div>
                <p className="text-xs text-zinc-600 font-sans max-w-xs">
                  Guaranteed transparency, professional site supervision, and milestone sign-offs.
                </p>

                <button
                  onClick={onBookConsultation}
                  className="mt-6 px-6 py-2.5 rounded-full bg-zinc-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-black transition-all cursor-pointer shadow-sm hover:scale-105"
                >
                  Start Stage 01 Today
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
