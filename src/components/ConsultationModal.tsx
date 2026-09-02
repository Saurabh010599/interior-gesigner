import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  MessageCircle, 
  ShieldCheck,
  Building2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import confetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillNote?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ 
  isOpen, 
  onClose, 
  prefillNote = '' 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertyType: '3BHK',
    service: 'Complete Turnkey Interior',
    location: 'Chandrapur',
    preferredDate: '',
    message: prefillNote
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefillNote) {
      setFormData(prev => ({ ...prev, message: prefillNote }));
    }
  }, [prefillNote]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#c5a059', '#dfbe76', '#b38738', '#0f172a']
        });
      } catch {}
    }, 500);
  };

  const handleWhatsApp = () => {
    const msg = `Hello Magic Touch Design Chandrapur! 🏛️\n\nI want to book an interior design consultation:\n• Name: ${formData.name || 'Client'}\n• Phone: ${formData.phone || 'Provided on chat'}\n• Space: ${formData.propertyType} (${formData.service})\n• Location: ${formData.location}\n• Note: ${formData.message || 'Please arrange a site visit / studio consultation.'}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-3xl bg-white border border-zinc-200 shadow-[0_25px_60px_rgba(0,0,0,0.18)] overflow-hidden my-8">
        
        {/* Top Header */}
        <div className="p-6 border-b border-zinc-100 flex items-center justify-between bg-gradient-to-r from-zinc-50 to-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c5a059] to-[#b38738] flex items-center justify-center text-black font-bold font-cinzel text-base shadow-sm">
              M
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-[#8d6928]">
                Magic Touch Design • Chandrapur
              </div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-zinc-900">
                Book Free Design Consultation
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-zinc-900">
                APPOINTMENT CONFIRMED
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed">
                Thank you! Our lead architect will call you at <strong className="text-zinc-900">{formData.phone}</strong> to confirm your slot at Atharva Heights or your project site.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open in WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-semibold uppercase cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-zinc-500 mb-1 block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Deshmukh"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:border-[#b38738] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-zinc-500 mb-1 block">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 83903 51213"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:border-[#b38738] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-zinc-500 mb-1 block">
                    Property Configuration
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:border-[#b38738] focus:bg-white focus:outline-none"
                  >
                    <option value="2BHK Flat">2BHK Apartment</option>
                    <option value="3BHK Flat">3BHK Apartment</option>
                    <option value="4BHK / Penthouse">4BHK / Penthouse</option>
                    <option value="Independent Bungalow / Villa">Luxury Bungalow / Villa</option>
                    <option value="Modular Kitchen Only">Modular Kitchen Only</option>
                    <option value="Commercial Office / Retail">Commercial / Showroom</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-zinc-500 mb-1 block">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:border-[#b38738] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase font-bold tracking-wider text-zinc-500 mb-1 block">
                  Project Details / Specific Space Vision
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details about your space, budget expectations, or preferred design style..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:border-[#b38738] focus:bg-white focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#c5a059] via-[#dfbe76] to-[#b38738] text-black font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.01] transition-transform flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Calendar className="w-4 h-4" />
                <span>{isSubmitting ? 'Securing Your Slot...' : 'Confirm Free Studio Consultation'}</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#b38738]" />
                <span>Studio at Flat 103, Atharva Heights, Bhanapeth, Chandrapur</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
