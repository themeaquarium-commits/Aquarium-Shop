import React, { useState } from 'react';
import { 
  Layers, 
  Sparkles, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Home, 
  Hotel, 
  Utensils, 
  Calculator,
  ShieldCheck
} from 'lucide-react';

interface CustomTankSectionProps {
  onOpenProjectEnquiry: () => void;
}

export const CustomTankSection: React.FC<CustomTankSectionProps> = ({ onOpenProjectEnquiry }) => {
  const [lengthFt, setLengthFt] = useState<number>(4);
  const [widthFt, setWidthFt] = useState<number>(2);
  const [heightFt, setHeightFt] = useState<number>(2);
  const [glassType, setGlassType] = useState<'ultra-clear' | 'regular'>('ultra-clear');

  // Calculation in Litres: (L_cm * W_cm * H_cm) / 1000
  const lCm = lengthFt * 30.48;
  const wCm = widthFt * 30.48;
  const hCm = heightFt * 30.48;
  const volumeLitres = Math.round((lCm * wCm * hCm) / 1000);
  const volumeGallons = Math.round(volumeLitres * 0.264172);

  // Recommended glass thickness based on height
  const recommendedGlass = heightFt <= 1.5 ? '10mm' : heightFt <= 2.5 ? '12mm' : '15mm - 19mm Tempered';

  const handleWhatsAppTankEnquiry = () => {
    const text = encodeURIComponent(
      `Hi Theme Aquarium! I am planning a custom aquarium project in Chennai.\n\n` +
      `Estimated Dimensions: ${lengthFt}ft (L) x ${widthFt}ft (W) x ${heightFt}ft (H)\n` +
      `Approx Water Volume: ${volumeLitres} Litres (~${volumeGallons} Gallons)\n` +
      `Preferred Glass: ${glassType === 'ultra-clear' ? 'Starphire Low-Iron Ultra-Clear' : 'Standard Float Glass'}\n` +
      `Recommended Glass Thickness: ${recommendedGlass}\n\n` +
      `Please provide an initial estimate and site consultation availability in Chennai.`
    );
    window.open(`https://wa.me/919884181562?text=${text}`, '_blank');
  };

  return (
    <section className="py-24 bg-[#050e16] border-t border-emerald-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Precision Custom Fabrication</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            YOUR SPACE. YOUR AQUARIUM. YOUR DESIGN.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Engineered architectural glass aquariums customized for luxury residences, corporate headquarters, boutique hotels, and landscape environments across Tamil Nadu.
          </p>
        </div>

        {/* Sectors Served Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
          {[
            { label: 'Private Residences & Villas', icon: Home, count: 'Living Room Centerpieces' },
            { label: 'Corporate & IT Offices', icon: Building2, count: 'Lobby & Boardrooms' },
            { label: 'Hotels & Luxury Resorts', icon: Hotel, count: 'Atrium Installations' },
            { label: 'Restaurants & Cafés', icon: Utensils, count: 'Feature Partitions' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-2">
              <div className="w-9 h-9 mx-auto rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <item.icon className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-white">{item.label}</h4>
              <p className="text-[11px] text-slate-400 font-mono">{item.count}</p>
            </div>
          ))}
        </div>

        {/* Interactive Custom Tank Calculator & Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl bg-slate-900/90 border border-emerald-500/20 p-6 sm:p-10 shadow-2xl">
          
          {/* Left Column: Interactive Sliders */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Tank Estimator</span>
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Configure Your Custom Tank Dimensions
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Adjust length, width, and height to compute volume, glass thickness, and filtration requirement.
              </p>
            </div>

            {/* Sliders */}
            <div className="space-y-4 bg-slate-950/70 p-5 rounded-2xl border border-slate-800">
              {/* Length */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-200">
                  <span>Tank Length:</span>
                  <span className="text-emerald-400 font-mono text-sm">{lengthFt} Feet ({Math.round(lCm)} cm)</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="12"
                  step="0.5"
                  value={lengthFt}
                  onChange={(e) => setLengthFt(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>2 ft (Nano)</span>
                  <span>6 ft (Standard)</span>
                  <span>12 ft (Bespoke Monster)</span>
                </div>
              </div>

              {/* Width */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <div className="flex justify-between text-xs font-semibold text-slate-200">
                  <span>Tank Width (Depth):</span>
                  <span className="text-emerald-400 font-mono text-sm">{widthFt} Feet ({Math.round(wCm)} cm)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="0.5"
                  value={widthFt}
                  onChange={(e) => setWidthFt(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
              </div>

              {/* Height */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <div className="flex justify-between text-xs font-semibold text-slate-200">
                  <span>Tank Height:</span>
                  <span className="text-emerald-400 font-mono text-sm">{heightFt} Feet ({Math.round(hCm)} cm)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="0.5"
                  value={heightFt}
                  onChange={(e) => setHeightFt(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
              </div>
            </div>

            {/* Glass Type Selection */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-300">Select Glass Material:</span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setGlassType('ultra-clear')}
                  className={`p-3 rounded-sm border text-left transition-all text-xs ${
                    glassType === 'ultra-clear'
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="font-bold text-white">⭐ Low-Iron Starphire</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">99.2% Transmittance, diamond beveled</div>
                </button>
                <button
                  onClick={() => setGlassType('regular')}
                  className={`p-3 rounded-sm border text-left transition-all text-xs ${
                    glassType === 'regular'
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="font-bold text-white">Standard Float Glass</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Economical durable glass</div>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Computed Specifications & CTAs */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-950 via-[#071922] to-slate-950 p-6 sm:p-8 rounded-2xl border border-emerald-500/30 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block">
                Live Engineering Estimation
              </span>
              
              <div className="mt-4 grid grid-cols-2 gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs text-slate-400">Total Volume:</span>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                    {volumeLitres.toLocaleString('en-IN')} <span className="text-sm font-normal text-emerald-400">Litres</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">~{volumeGallons} US Gallons</span>
                </div>

                <div>
                  <span className="text-xs text-slate-400">Glass Thickness:</span>
                  <div className="text-xl sm:text-2xl font-black text-emerald-300 font-mono">
                    {recommendedGlass}
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">German Silicone Bond</span>
                </div>
              </div>

              {/* Technical Inclusions */}
              <div className="mt-5 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Marine-grade moisture resistant plywood / metal stand</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Multi-chamber glass sump or canister plumbing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Free on-site inspection in Chennai & structural advice</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>3-Year Leak Proof Workmanship Warranty</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-slate-800">
              <button
                onClick={onOpenProjectEnquiry}
                className="w-full py-3.5 px-4 rounded-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
              >
                <span>Request a Custom Aquarium</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppTankEnquiry}
                className="w-full py-3 px-4 rounded-sm bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Tank Specs to Expert</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
