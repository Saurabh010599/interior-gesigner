import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  MessageCircle, 
  PhoneCall,
  ArrowRight,
  Compass
} from 'lucide-react';
import { motion } from 'motion/react';
import { FAQ_DATA, COMPANY_INFO } from '../data/mockData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQ_DATA[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#fafafc] border-t border-zinc-100 overflow-hidden select-none">
      
      {/* Background Radiance */}
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#8d6928] text-xs font-bold tracking-widest uppercase mb-3"
          >
            <HelpCircle className="w-3.5 h-3.5" /> Clarity & Confidence
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-wide"
          >
            FREQUENTLY ASKED <span className="text-gold-gradient">QUESTIONS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-600 text-sm sm:text-base mt-2 font-normal max-w-xl mx-auto"
          >
            Clear answers about timelines, 3D designs, turnkey warranties, and material costs in Chandrapur.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#b38738]/50 shadow-sm'
                    : 'bg-white border-zinc-200 hover:border-zinc-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-cinzel text-sm sm:text-base font-bold text-zinc-900 pr-2">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#b38738] text-white rotate-180' : 'bg-zinc-100 text-zinc-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal border-t border-zinc-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have More Questions Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-cinzel text-sm sm:text-base font-bold text-zinc-900">
              Have a specific architectural or interior question?
            </h4>
            <p className="text-xs text-zinc-500 mt-0.5">
              Speak directly with our senior interior architects at our Atharva Heights studio.
            </p>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Magic Touch Design, I have a question regarding interior design for my property in Chandrapur.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
