import React, { useEffect, useRef } from 'react';
import { 
  Star, 
  ArrowRight, 
  Layers, 
  Eye, 
  ShieldCheck, 
  Sparkles,
  ChevronDown,
  Building2,
  Compass
} from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/mockData';

interface HeroProps {
  onOpenConsultation: () => void;
  onExplorePortfolio: () => void;
  onExplore3D: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenConsultation, 
  onExplorePortfolio,
  onExplore3D 
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }

    const particlesCount = Math.min(50, Math.floor(window.innerWidth / 30));
    const particles: Particle[] = [];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.6,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.15,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Subtle architectural grid rays
      ctx.strokeStyle = 'rgba(197, 160, 89, 0.04)';
      ctx.lineWidth = 1;
      
      const horizonY = height * 0.65;
      const vanishingX = width * 0.5;

      for (let i = -width; i <= width * 2; i += 160) {
        ctx.beginPath();
        ctx.moveTo(vanishingX, horizonY);
        ctx.lineTo(i, height);
        ctx.stroke();
      }

      particles.forEach((p, idx) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentOpacity = p.opacity + Math.sin(time * 2 + idx) * 0.15;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(179, 135, 56, ${Math.max(0.1, Math.min(0.65, currentOpacity))})`;
        ctx.fill();

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(197, 160, 89, ${(1 - dist / 100) * 0.09})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#fcfcfd] via-[#f9f9fb] to-[#ffffff] pt-8 pb-16 select-none"
    >
      {/* Background Interactive Ambient Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-0 opacity-70" 
      />

      {/* Luxury Subtle Radial Warm Light Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute -bottom-24 right-10 w-[400px] h-[400px] bg-[#dfbe76]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Blueprint Grid Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Top Gold Pill Badge with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#c5a059]/40 shadow-[0_2px_15px_rgba(197,160,89,0.15)] mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#b38738]" />
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#8d6928]">
            #1 Architect & Luxury Interior Designer • Chandrapur
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#b38738] animate-pulse" />
        </motion.div>

        {/* Brand Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[0.05em] uppercase text-zinc-900 max-w-5xl leading-[1.08] mb-4"
        >
          <span className="block text-zinc-900">MAGIC TOUCH</span>
          <span className="block text-gold-gradient drop-shadow-[0_2px_15px_rgba(197,160,89,0.25)]">
            DESIGN
          </span>
        </motion.h1>

        {/* Hindi Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-4 inline-block px-4 py-1.5 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30"
        >
          <p className="text-sm sm:text-base md:text-lg font-semibold text-[#8d6928] tracking-wide font-sans">
            चंद्रपुर का विश्वसनीय आर्किटेक्ट एवं इंटीरियर डिज़ाइन स्टूडियो
          </p>
        </motion.div>

        {/* Concise Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10 font-sans"
        >
          Transforming spaces into extraordinary experiences with bespoke architecture, turnkey luxury interiors, and 3D room visualization.
        </motion.p>

        {/* Action Buttons Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14"
        >
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#c5a059] via-[#dfbe76] to-[#b38738] text-black font-bold text-sm tracking-wider uppercase shadow-[0_4px_25px_rgba(197,160,89,0.4)] hover:shadow-[0_6px_35px_rgba(197,160,89,0.6)] transition-all cursor-pointer hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>

          <button
            onClick={onExplorePortfolio}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-zinc-50 text-zinc-900 font-bold text-sm tracking-wider uppercase border border-zinc-200 hover:border-[#c5a059] shadow-sm transition-all cursor-pointer hover:shadow-md flex items-center justify-center gap-2"
          >
            <Layers className="w-4 h-4 text-[#b38738]" />
            <span>View Portfolio</span>
          </button>

          <button
            onClick={onExplore3D}
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#fdfbf7] text-[#8d6928] font-bold text-xs tracking-wider uppercase border border-[#c5a059]/40 hover:border-[#b38738] transition-all cursor-pointer hover:bg-[#faf5eb] flex items-center justify-center gap-2 shadow-sm"
          >
            <Eye className="w-4 h-4 text-[#b38738]" />
            <span>3D Room Studio</span>
          </button>
        </motion.div>

        {/* Trust Proof Badges (White Luxury Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {/* Rating */}
          <div className="luxury-card rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center bg-white">
            <div className="flex items-center gap-1 text-[#b38738] mb-1">
              <Star className="w-4 h-4 fill-[#b38738]" />
              <span className="font-bold text-lg sm:text-xl text-zinc-900">4.9 ★</span>
            </div>
            <div className="text-xs text-zinc-700 font-semibold">246+ Google Reviews</div>
            <div className="text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">Top-Rated Studio</div>
          </div>

          {/* Completed Projects */}
          <div className="luxury-card rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center bg-white">
            <div className="font-bold text-lg sm:text-xl text-gold-gradient mb-1">500+</div>
            <div className="text-xs text-zinc-700 font-semibold">Completed Projects</div>
            <div className="text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">Chandrapur & Region</div>
          </div>

          {/* Years of Experience */}
          <div className="luxury-card rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center bg-white">
            <div className="font-bold text-lg sm:text-xl text-zinc-900 mb-1">10+ Years</div>
            <div className="text-xs text-zinc-700 font-semibold">Design Excellence</div>
            <div className="text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">Master Craftsmanship</div>
          </div>

          {/* Turnkey & Satisfaction */}
          <div className="luxury-card rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center bg-white">
            <div className="flex items-center gap-1 text-emerald-600 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-bold text-lg sm:text-xl text-zinc-900">100%</span>
            </div>
            <div className="text-xs text-zinc-700 font-semibold">Client Satisfaction</div>
            <div className="text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">Turnkey Warranty</div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div 
          onClick={onExplore3D}
          className="mt-12 flex flex-col items-center gap-1 text-zinc-400 hover:text-[#b38738] transition-colors cursor-pointer group"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] font-bold group-hover:tracking-[0.3em] transition-all">
            Explore 3D Spaces
          </span>
          <ChevronDown className="w-4 h-4 text-[#b38738] animate-bounce" />
        </div>

      </div>
    </section>
  );
};
