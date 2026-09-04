import React from 'react';
import { Waves, Sparkles, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';

interface MarineSectionProps {
  onExploreMarine: () => void;
  onEnquireMarine: () => void;
}

export const MarineSection: React.FC<MarineSectionProps> = ({
  onExploreMarine,
  onEnquireMarine,
}) => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#050c12] via-[#071a27] to-[#050c12] border-t border-cyan-500/20 relative overflow-hidden">
      {/* Ambient blue glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20">
              <Waves className="w-3.5 h-3.5" />
              <span>Saltwater & Reef Specialists</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              DISCOVER THE WORLD OF MARINE AQUARIUMS
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Step into the mesmerizing beauty of living coral reefs. Theme Aquarium designs, installs, and supports marine reef aquariums with calibrated salinity, high-efficiency protein skimmers, UV sterilization, and specialized coral growth spectrums.
            </p>

            {/* Inclusions */}
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="font-bold text-white block">Reef Salts & Chemistry</span>
                <span className="text-slate-400 text-[11px]">Red Sea Coral Pro, Calcium, Alk & Mag buffers</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="font-bold text-white block">DC Protein Skimmers</span>
                <span className="text-slate-400 text-[11px]">High-efficiency micro-bubble organic removal</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="font-bold text-white block">Reef LED Spectrums</span>
                <span className="text-slate-400 text-[11px]">Actinic 420nm - 460nm coral fluorescence</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="font-bold text-white block">Conditioned Livestock</span>
                <span className="text-slate-400 text-[11px]">Clownfish, Tangs & Reef Invertebrates</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-cyan-950/60 border border-cyan-500/20 text-xs text-cyan-300 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Marine livestock availability is verified strictly upon individual store check.</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreMarine}
                className="px-6 py-3.5 rounded-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
              >
                <span>Explore Marine Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onEnquireMarine}
                className="px-5 py-3.5 rounded-sm bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 font-semibold text-xs transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-cyan-400" />
                <span>Reef Consultation</span>
              </button>
            </div>

          </div>

          {/* Right Column Visual Card */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 relative group">
              <img
                src="/images/clownfish-green-anemone.jpg"
                alt="Vibrant Ocellaris Clownfish in Fluorescent Green Sea Anemone Theme Aquarium"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/marine-coral-reef.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Full Marine Reef Ecosystems</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Turnkey planning, sump plumbing & coral stabilization in Chennai</p>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-full border border-cyan-500/30">
                    Pro Sump
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
