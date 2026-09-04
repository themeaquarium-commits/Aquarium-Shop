import React from 'react';
import { Sparkles, Droplets, Sun, Wind, Layers, ArrowRight, ShieldCheck } from 'lucide-react';

interface AquaticPlantsSectionProps {
  onExplorePlants: () => void;
}

export const AquaticPlantsSection: React.FC<AquaticPlantsSectionProps> = ({ onExplorePlants }) => {
  return (
    <section className="py-24 bg-[#050c12] border-t border-emerald-500/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sterile In-Vitro & Potted Flora</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            BRING NATURE INTO YOUR AQUARIUM
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Healthy aquatic plants purify water, consume toxic nitrates, generate oxygen, and provide natural biotope shelter for fish and dwarf shrimp.
          </p>
        </div>

        {/* The 6 Pillars of Planted Tank Success Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">1. Sterile Tissue Culture Flora</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Lab-cultivated tissue culture cups that are 100% certified snail-free, pest-free, and algae-free. Fast acclimation without melting.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">2. Nutrient-Rich Aqua Soil</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Volcanic baked soil granules that buffer water pH to optimal acidic levels (6.2 - 6.8) and feed root feeders like Crypts and carpets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">3. WRGB Full Spectrum Lighting</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Photosynthetically active radiation (PAR) tailored to stimulate chlorophyll A & B synthesis and deepen vibrant red pigments in Rotalas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Wind className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">4. Pressurized CO₂ Injection</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Carbon is the core building block of aquatic vegetation. Constant 20-30 ppm dissolved CO2 accelerates growth 5x while preventing black beard algae.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">5. Balanced Micro & Macro Fertilization</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Chelated Iron, Potassium, Nitrogen, and trace minerals precisely dosed to prevent pinholes, yellowing leaves, and stunted growth.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">6. High-Turnover Bio-Filtration</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Gentle surface agitation with lily pipes creates high oxygen exchange without gassing off CO2, keeping water crystal clear.
            </p>
          </div>

        </div>

        {/* CTA Banner */}
        <div className="text-center">
          <button
            onClick={onExplorePlants}
            className="px-8 py-4 rounded-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-xl shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <span>Explore Aquatic Plants</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
