import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Compass
} from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS_DATA, COMPANY_INFO } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 bg-white border-t border-zinc-100 overflow-hidden select-none">
      
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#c5a059]/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#8d6928] text-xs font-bold tracking-widest uppercase mb-3"
          >
            <Star className="w-3.5 h-3.5 fill-[#b38738] text-[#b38738]" /> Verified Client Feedback
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-wide"
          >
            STORIES OF <span className="text-gold-gradient">SATISFACTION</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-600 text-sm sm:text-base mt-2 font-normal max-w-xl mx-auto"
          >
            Authentic reviews from homeowners, business leaders, and medical professionals across Chandrapur.
          </motion.p>

          {/* Google 4.9★ Overall Rating Card */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm mt-5">
            <div className="flex items-center gap-1 text-[#b38738]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#b38738]" />
              ))}
            </div>
            <div className="text-xs text-zinc-600 font-medium">
              <span className="font-bold text-zinc-900 text-sm">4.9 ★</span> out of 5 ({COMPANY_INFO.reviewsCount}+ Reviews on Google)
            </div>
          </div>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="luxury-card rounded-3xl p-8 sm:p-12 bg-white border border-zinc-200 shadow-md relative">
            
            <Quote className="absolute top-6 right-8 w-16 h-16 text-[#c5a059]/10 stroke-[1] pointer-events-none" />

            <div className="flex items-center gap-1.5 text-[#b38738] mb-5">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#b38738]" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="font-playfair italic text-lg sm:text-2xl text-zinc-800 leading-relaxed mb-8">
              "{current.review}"
            </p>

            {/* Author Profile */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-zinc-100">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#c5a059]/40 bg-zinc-100 shadow-sm">
                  <img src={current.avatar} alt={current.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="font-cinzel text-base font-bold text-zinc-900 flex items-center gap-2">
                    <span>{current.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-xs text-[#8d6928] font-medium">{current.role}</div>
                  <div className="text-[11px] text-zinc-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#b38738]" /> {current.location} • {current.projectType}
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-700 transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-black flex items-center justify-center text-white transition-transform cursor-pointer shadow-sm hover:scale-105"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Indicators */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#b38738]' : 'w-2 bg-zinc-200 hover:bg-zinc-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
