import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Droplets, Sun, Wind } from 'lucide-react';

interface TerrariumSectionProps {
  onExploreTerrariums: () => void;
}

export const TerrariumSection: React.FC<TerrariumSectionProps> = ({ onExploreTerrariums }) => {
  return (
    <section className="py-24 bg-[#061016] border-t border-emerald-500/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl relative group">
              <img
                src="/images/artisan-moss-terrarium-sphere.jpg"
                alt="Living Rainforest Artisan Moss Glass Sphere Terrarium Theme Aquarium"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/bioactive-paludarium-cliff.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/85 border border-emerald-500/20 backdrop-blur-md">
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Self-Sustaining Biosphere</span>
                <h4 className="text-sm font-bold text-white mt-0.5">Artisan Glass Rainforests</h4>
                <p className="text-xs text-slate-400 mt-0.5">Natural water cycle inside sealed high-clarity borosilicate glass.</p>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bioactive Plant Terrariums & Paludariums</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              A LITTLE PIECE OF NATURE, INDOORS
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Experience the tranquility of lush tropical mosses, miniature ferns, and exotic Fittonias in self-regulating sealed glass terrariums and open waterfall paludariums.
            </p>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <Droplets className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-white">Self-Regulating Water Cycle</h5>
                  <p className="text-slate-400 text-[11px] mt-0.5">Moisture evaporates, condenses on glass walls, and rains down into root substrates. Requires watering once in 3 months.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-white">Perfect for Desks & Modern Interiors</h5>
                  <p className="text-slate-400 text-[11px] mt-0.5">Ideal statement centerpiece for luxury study tables, living rooms, and corporate office receptions.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreTerrariums}
                className="px-7 py-3.5 rounded-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
              >
                <span>Explore Terrariums</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
