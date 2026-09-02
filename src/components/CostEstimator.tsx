import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  HelpCircle, 
  ArrowRight, 
  FileText, 
  MessageCircle,
  ShieldCheck,
  Building2,
  Compass
} from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/mockData';

interface CostEstimatorProps {
  onBookConsultation: (details: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onBookConsultation }) => {
  const [bhkType, setBhkType] = useState<'1bhk' | '2bhk' | '3bhk' | '4bhk' | 'villa'>('3bhk');
  const [areaSqft, setAreaSqft] = useState<number>(1450);
  const [finishTier, setFinishTier] = useState<'essential' | 'premium' | 'ultra'>('premium');
  const [includedRooms, setIncludedRooms] = useState<string[]>([
    'living',
    'kitchen',
    'master_bed',
    'guest_bed',
    'false_ceiling',
    'lighting'
  ]);

  const BHK_PRESETS = {
    '1bhk': { name: '1 BHK Apartment', defaultSqft: 650, baseMin: 550, baseMax: 750 },
    '2bhk': { name: '2 BHK Apartment', defaultSqft: 1050, baseMin: 900, baseMax: 1200 },
    '3bhk': { name: '3 BHK Apartment', defaultSqft: 1450, baseMin: 1250, baseMax: 1750 },
    '4bhk': { name: '4 BHK / Duplex', defaultSqft: 2200, baseMin: 1800, baseMax: 2600 },
    'villa': { name: 'Independent Luxury Villa', defaultSqft: 3200, baseMin: 2500, baseMax: 5000 },
  };

  const FINISH_TIERS = {
    essential: {
      name: 'Essential Quality',
      tagline: 'Standard Century/Greenlam laminates, soft-close hardware',
      ratePerSqft: 1200,
      multiplier: 1.0
    },
    premium: {
      name: 'Premium Luxury',
      tagline: 'Acrylic / PU finishes, Hafele/Hettich hardware, designer ceiling',
      ratePerSqft: 1750,
      multiplier: 1.35
    },
    ultra: {
      name: 'Bespoke Ultra-Luxury',
      tagline: 'Italian marble inlays, CNC louvers, smart automation, veneer & brass',
      ratePerSqft: 2450,
      multiplier: 1.75
    }
  };

  const ROOM_ADDONS = [
    { id: 'living', label: 'Living Room TV Unit & Paneling', costPct: 0.22 },
    { id: 'kitchen', label: 'Modular Acrylic / PU Kitchen', costPct: 0.28 },
    { id: 'master_bed', label: 'Master Bedroom Wardrobe & Headboard', costPct: 0.22 },
    { id: 'guest_bed', label: 'Guest / Kids Bedroom Wardrobe', costPct: 0.14 },
    { id: 'false_ceiling', label: 'Designer POP / Gypsum False Ceiling', costPct: 0.08 },
    { id: 'lighting', label: 'COB & Profile Architectural Lighting', costPct: 0.06 },
  ];

  const handleBhkChange = (type: '1bhk' | '2bhk' | '3bhk' | '4bhk' | 'villa') => {
    setBhkType(type);
    setAreaSqft(BHK_PRESETS[type].defaultSqft);
  };

  const toggleRoom = (id: string) => {
    if (includedRooms.includes(id)) {
      if (includedRooms.length > 1) {
        setIncludedRooms(includedRooms.filter(r => r !== id));
      }
    } else {
      setIncludedRooms([...includedRooms, id]);
    }
  };

  // Calculation Math
  const baseRate = FINISH_TIERS[finishTier].ratePerSqft;
  const activeRoomsWeight = includedRooms.reduce((acc, roomId) => {
    const item = ROOM_ADDONS.find(r => r.id === roomId);
    return acc + (item ? item.costPct : 0);
  }, 0);

  const rawEstimate = areaSqft * baseRate * (0.4 + activeRoomsWeight * 0.6);
  const minEstimateLakhs = (rawEstimate * 0.92 / 100000).toFixed(2);
  const maxEstimateLakhs = (rawEstimate * 1.08 / 100000).toFixed(2);

  const handleWhatsAppQuote = () => {
    const text = `Hello Magic Touch Design Chandrapur! 🏛️\n\nI generated an interior estimate on your website:\n• Configuration: ${BHK_PRESETS[bhkType].name} (${areaSqft} sqft)\n• Quality Tier: ${FINISH_TIERS[finishTier].name}\n• Selected Scope: ${includedRooms.join(', ')}\n• Estimated Range: ₹${minEstimateLakhs} Lakhs - ₹${maxEstimateLakhs} Lakhs\n\nPlease schedule a free site visit to provide an exact BOQ quotation.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="estimator" className="relative py-24 bg-white border-t border-zinc-100 overflow-hidden select-none">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#c5a059]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#8d6928] text-xs font-bold tracking-widest uppercase mb-3"
          >
            <Calculator className="w-3.5 h-3.5" /> Instant Transparent Estimation
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-wide"
          >
            ESTIMATE YOUR <span className="text-gold-gradient">INVESTMENT</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-600 text-sm sm:text-base mt-2 font-normal max-w-xl mx-auto"
          >
            Get a tailored cost projection for your home or villa in Chandrapur with 100% itemized transparency.
          </motion.p>
        </div>

        {/* Estimator Master Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Configurator (7 cols on desktop) */}
          <div className="lg:col-span-7 luxury-card rounded-3xl p-6 sm:p-8 bg-white border border-zinc-200 shadow-sm space-y-7">
            
            {/* 1. Property Type Selector */}
            <div>
              <label className="text-xs uppercase font-bold tracking-wider text-zinc-500 mb-3 block">
                1. Select Property Configuration
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {(Object.keys(BHK_PRESETS) as Array<keyof typeof BHK_PRESETS>).map((type) => {
                  const isSelected = bhkType === type;
                  return (
                    <button
                      key={type}
                      onClick={() => handleBhkChange(type)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#b38738] bg-[#fdfbf7] text-zinc-900 shadow-sm'
                          : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                      }`}
                    >
                      <span className="font-cinzel text-xs font-bold block">
                        {BHK_PRESETS[type].name.split(' ')[0]} {BHK_PRESETS[type].name.split(' ')[1]}
                      </span>
                      <span className="text-[11px] text-zinc-400">
                        Avg {BHK_PRESETS[type].defaultSqft} sqft
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Carpet Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase font-bold tracking-wider text-zinc-500">
                  2. Built-up / Carpet Area
                </label>
                <span className="font-cinzel text-base font-bold text-[#8d6928]">
                  {areaSqft} <span className="text-xs text-zinc-500 font-sans">Sq.Ft</span>
                </span>
              </div>
              <input
                type="range"
                min={BHK_PRESETS[bhkType].baseMin}
                max={BHK_PRESETS[bhkType].baseMax}
                step={50}
                value={areaSqft}
                onChange={(e) => setAreaSqft(Number(e.target.value))}
                className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#b38738]"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 mt-1">
                <span>{BHK_PRESETS[bhkType].baseMin} sqft</span>
                <span>{BHK_PRESETS[bhkType].baseMax} sqft</span>
              </div>
            </div>

            {/* 3. Material & Finish Tier */}
            <div>
              <label className="text-xs uppercase font-bold tracking-wider text-zinc-500 mb-3 block">
                3. Material & Craftsmanship Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(Object.keys(FINISH_TIERS) as Array<keyof typeof FINISH_TIERS>).map((tierKey) => {
                  const tier = FINISH_TIERS[tierKey];
                  const isSelected = finishTier === tierKey;
                  return (
                    <button
                      key={tierKey}
                      onClick={() => setFinishTier(tierKey)}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#b38738] bg-[#fdfbf7] shadow-sm'
                          : 'border-zinc-200 bg-zinc-50 hover:bg-zinc-100'
                      }`}
                    >
                      <div>
                        <div className={`font-cinzel text-xs font-bold mb-1 ${
                          isSelected ? 'text-[#8d6928]' : 'text-zinc-800'
                        }`}>
                          {tier.name}
                        </div>
                        <p className="text-[10px] text-zinc-500 leading-snug line-clamp-2">
                          {tier.tagline}
                        </p>
                      </div>
                      <div className="text-[11px] font-bold text-zinc-700 mt-2">
                        ₹{tier.ratePerSqft}/sqft
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Room Scope Checkboxes */}
            <div>
              <label className="text-xs uppercase font-bold tracking-wider text-zinc-500 mb-3 block">
                4. Select Interior Scope Included
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ROOM_ADDONS.map((room) => {
                  const isChecked = includedRooms.includes(room.id);
                  return (
                    <div
                      key={room.id}
                      onClick={() => toggleRoom(room.id)}
                      className={`p-2.5 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-colors ${
                        isChecked
                          ? 'bg-[#fdfbf7] border-[#b38738]/50 text-zinc-900'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-400'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-md flex items-center justify-center ${
                        isChecked ? 'bg-[#b38738] text-white' : 'border border-zinc-300'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-medium truncate">{room.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Real-time Summary Card (5 cols on desktop) */}
          <div className="lg:col-span-5 luxury-card rounded-3xl p-6 sm:p-8 bg-white border border-zinc-200 shadow-md flex flex-col justify-between">
            
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                <span className="text-xs uppercase font-bold tracking-wider text-zinc-500">
                  Estimated Investment
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold uppercase">
                  Turnkey Estimation
                </span>
              </div>

              {/* Huge Price Display */}
              <div className="p-6 rounded-2xl bg-[#fdfbf7] border border-[#c5a059]/30 text-center">
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">
                  Total Budget Range (Chandrapur)
                </div>
                <div className="font-cinzel text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                  ₹{minEstimateLakhs} - ₹{maxEstimateLakhs} <span className="text-lg font-sans font-bold text-[#8d6928]">Lakhs*</span>
                </div>
                <div className="text-[11px] text-zinc-400 mt-1">
                  Includes Materials, Hardware, Labor & Supervision
                </div>
              </div>

              {/* Selected Spec Summary */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-zinc-100">
                  <span className="text-zinc-500">Space Type</span>
                  <span className="font-semibold text-zinc-800">{BHK_PRESETS[bhkType].name} ({areaSqft} sqft)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-100">
                  <span className="text-zinc-500">Material Grade</span>
                  <span className="font-semibold text-zinc-800">{FINISH_TIERS[finishTier].name}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-100">
                  <span className="text-zinc-500">Scope Items</span>
                  <span className="font-semibold text-zinc-800">{includedRooms.length} Modules Selected</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-zinc-500">Delivery Guarantee</span>
                  <span className="font-semibold text-emerald-700">45 Days Turnkey Handover</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-6 border-t border-zinc-100 mt-6">
              <button
                onClick={() => onBookConsultation(`${BHK_PRESETS[bhkType].name} - Estimated: ₹${minEstimateLakhs}-₹${maxEstimateLakhs} Lakhs`)}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#c5a059] via-[#dfbe76] to-[#b38738] text-black font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
              >
                <span>Book Free BOQ Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleWhatsAppQuote}
                className="w-full py-3 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Send Estimate on WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
