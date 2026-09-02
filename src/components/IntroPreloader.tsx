import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const IntroPreloader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onComplete) onComplete();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-zinc-900 pointer-events-none select-none"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-[500px] h-[500px] bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Luxury Logo Reveal Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center relative z-10 px-6"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-white via-[#fcfbf9] to-[#f4eee1] border border-[#c5a059]/40 flex items-center justify-center shadow-[0_10px_35px_rgba(197,160,89,0.25)] mb-6">
              <span className="font-cinzel text-3xl sm:text-4xl font-bold bg-gradient-to-br from-[#b38738] via-[#c5a059] to-[#8d6928] bg-clip-text text-transparent">
                M
              </span>
            </div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.2em] text-zinc-900 uppercase mb-2"
            >
              MAGIC TOUCH
            </motion.h1>

            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#b38738] uppercase"
            >
              <span>Architect & Interior Designer</span>
              <span>•</span>
              <span>Chandrapur</span>
            </motion.div>

            {/* Subtle Loading Line */}
            <div className="w-36 h-[2px] bg-zinc-100 rounded-full mt-8 overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#c5a059] to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
