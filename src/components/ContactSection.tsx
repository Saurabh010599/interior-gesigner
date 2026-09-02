import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Calendar, 
  Building2, 
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/mockData';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  prefillMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefillMessage = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: '3BHK',
    serviceNeeded: 'Residential Interior Design',
    projectLocation: 'Chandrapur',
    preferredDate: '',
    message: prefillMessage
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#c5a059', '#dfbe76', '#0f172a', '#b38738']
        });
      } catch {}
    }, 600);
  };

  const handleSendWhatsAppDirect = () => {
    const text = `Hello Magic Touch Design Chandrapur! 🏛️\n\nI want to book an interior design consultation:\n• Name: ${formData.name || 'Client'}\n• Phone: ${formData.phone || 'Provided on chat'}\n• Space: ${formData.propertyType} (${formData.serviceNeeded})\n• Location: ${formData.projectLocation}\n• Date: ${formData.preferredDate || 'Earliest slot'}\n• Notes: ${formData.message || 'Please arrange a studio meeting at Atharva Heights.'}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 bg-white border-t border-zinc-100 overflow-hidden select-none">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c5a059]/6 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#8d6928] text-xs font-bold tracking-widest uppercase mb-3"
          >
            <Calendar className="w-3.5 h-3.5" /> Studio Consultation
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-wide"
          >
            CONNECT WITH <span className="text-gold-gradient">MAGIC TOUCH</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-600 text-sm sm:text-base mt-2 font-normal max-w-xl mx-auto"
          >
            Visit our design studio at Atharva Heights or schedule a free site consultation with our lead architectural designers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Google Maps */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Studio Address Card */}
            <div className="luxury-card rounded-3xl p-6 sm:p-8 bg-white border border-zinc-200 shadow-sm relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#c5a059]/15 flex items-center justify-center text-[#8d6928] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8d6928]">
                    Headquarters & Design Studio
                  </span>
                  <h3 className="font-cinzel text-lg font-bold text-zinc-900 mt-0.5">
                    Magic Touch Design
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-1 font-normal">
                    Flat No. 103, Atharva Heights,<br />
                    Near ShriRam Chowk, Shriram Ward,<br />
                    Bhanapeth, Chandrapur, Maharashtra 442402
                  </p>
                </div>
              </div>

              {/* Direct Quick Contact Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-100">
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="py-3 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#b38738]" />
                  <span>Call Studio</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Magic Touch Design, I want to book an interior consultation.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Operating Hours & Hotline Card */}
            <div className="luxury-card rounded-3xl p-6 bg-white border border-zinc-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#b38738]" />
                <div>
                  <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Studio Working Hours</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{COMPANY_INFO.openingHours}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-zinc-100">
                <Phone className="w-5 h-5 text-[#b38738]" />
                <div>
                  <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Direct Architect Phone</div>
                  <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-sm font-bold text-[#8d6928] hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="luxury-card rounded-3xl overflow-hidden border border-zinc-200 h-64 relative group shadow-sm">
              <iframe
                title="Magic Touch Design Studio Location - Atharva Heights Chandrapur"
                src="https://maps.google.com/maps?q=Atharva%20Heights%20Bhanapeth%20Chandrapur%20Maharashtra&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/95 border border-zinc-200 text-center text-xs text-zinc-800 font-semibold backdrop-blur-md shadow-sm">
                📍 Atharva Heights, Near ShriRam Chowk, Chandrapur
              </div>
            </div>

          </div>

          {/* Right Column: Consultation Booking Form */}
          <div className="lg:col-span-7 luxury-card rounded-3xl p-6 sm:p-10 bg-white border border-zinc-200 shadow-md">
            
            {submitted ? (
              <div className="text-center py-12 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-zinc-900">
                  CONSULTATION REQUEST RECEIVED
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-zinc-900">{formData.name}</strong>! Our senior architect will review your <strong className="text-[#8d6928]">{formData.propertyType}</strong> requirements and call you at <strong className="text-zinc-900">{formData.phone}</strong> within 2 business hours.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSendWhatsAppDirect}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Continue on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-semibold uppercase cursor-pointer"
                  >
                    Book Another Space
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <div>
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-zinc-900">
                      Book Free Studio Consultation
                    </h3>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Complimentary 3D concept overview & preliminary budget estimation.
                    </p>
                  </div>
                  <Sparkles className="w-5 h-5 text-[#b38738]" />
                </div>

                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="text-xs uppercase font-bold tracking-wider text-zinc-500 mb-1.5 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:border-[#b38738] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs uppercase font-bold tracking-wider text-zinc-500 mb-1.5 block">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 83903 51213"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:border-[#b38738] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Property Configuration */}
                  <div>
                    <label className="text-xs uppercase font-bold tracking-wider text-zinc-500 mb-1.5 block">
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:border-[#b38738] focus:bg-white focus:outline-none transition-colors"
                    >
                      <option value="2BHK Apartment">2BHK Apartment</option>
                      <option value="3BHK Apartment">3BHK Apartment</option>
                      <option value="4BHK / Duplex">4BHK / Duplex</option>
                      <option value="Independent Luxury Villa / Bungalow">Luxury Villa / Bungalow</option>
                      <option value="Modular Kitchen & Wardrobes">Modular Kitchen Only</option>
                      <option value="Commercial Office / Showroom">Commercial Office / Showroom</option>
                      <option value="Full House Renovation">Full House Renovation</option>
                    </select>
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="text-xs uppercase font-bold tracking-wider text-zinc-500 mb-1.5 block">
                      Service Required
                    </label>
                    <select
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:border-[#b38738] focus:bg-white focus:outline-none transition-colors"
                    >
                      <option value="Turnkey Interior Execution">Turnkey Interior Execution (Recommended)</option>
                      <option value="Architecture & Elevation Design">Architecture & Elevation Design</option>
                      <option value="Modular Kitchen Design">Modular Kitchen Design</option>
                      <option value="Living Room & Master Suite">Living Room & Master Suite</option>
                      <option value="Commercial & Office Design">Commercial & Office Design</option>
                      <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Location */}
                  <div>
                    <label className="text-xs uppercase font-bold tracking-wider text-zinc-500 mb-1.5 block">
                      Project Location (Chandrapur & Region)
                    </label>
                    <input
                      type="text"
                      name="projectLocation"
                      placeholder="e.g. Bhanapeth, Civil Lines, Tukum, Mul Road"
                      value={formData.projectLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:border-[#b38738] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="text-xs uppercase font-bold tracking-wider text-zinc-500 mb-1.5 block">
                      Preferred Consultation Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:border-[#b38738] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-zinc-500 mb-1.5 block">
                    Special Design Requirements or Vision
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Describe your design aspirations, preferred style (Neo-Classical, Modern Luxury, Minimalist), or timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:border-[#b38738] focus:bg-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#c5a059] via-[#dfbe76] to-[#b38738] text-black font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Confirming Your Slot...' : 'Submit & Book Free Studio Consultation'}</span>
                </button>

                <div className="flex items-center justify-center gap-4 text-[11px] text-zinc-500 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#b38738]" /> Zero Obligation
                  </span>
                  <span>•</span>
                  <span>Free 3D Blueprint Review</span>
                  <span>•</span>
                  <span>Strict Client Privacy</span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
