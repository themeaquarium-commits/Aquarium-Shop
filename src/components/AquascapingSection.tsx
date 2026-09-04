import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, Droplets, Sun, Wind, Layers, Compass } from 'lucide-react';

interface AquascapingSectionProps {
  onExploreProducts?: () => void;
  onExploreAquascaping?: () => void;
  onEnquireScape?: () => void;
  onOpenCustomQuote?: () => void;
}

export const AquascapingSection: React.FC<AquascapingSectionProps> = ({
  onExploreProducts,
  onExploreAquascaping,
  onEnquireScape,
  onOpenCustomQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'iwagumi' | 'nature' | 'dutch'>('nature');
  const handleExplore = onExploreAquascaping || onExploreProducts || (() => {});
  const handleEnquire = onOpenCustomQuote || onEnquireScape || (() => {});

  const scapeTypes = {
    nature: {
      title: 'Nature Aquarium Layout',
      subtitle: 'Takashi Amano inspired wild river & forest scapes',
      description: 'Balancing driftwood roots, layered Seiryu stones, carpeting Monte Carlo, and vibrant stem plants into an intricate living wilderness that naturally purifies water.',
      image: '/images/planted-stream-waterfall.jpg',
      flora: 'Rotala H\'ra, Anubias Nana Petite, Java Moss, Monte Carlo',
      hardscape: 'Ancient Spiderwood & Textured Black Mountain Stone'
    },
    iwagumi: {
      title: 'Zen Iwagumi & Stone Arch Cave',
      subtitle: 'Minimalist Japanese stone formations & velvet carpets',
      description: 'Centered around dramatic textured rock formations, caverns, and clean cosmetic sand pathways with weeping moss and foreground plant carpeting.',
      image: '/images/cave-hardscape-aquascape.jpg',
      flora: 'Eleocharis Mini Dwarf Hairgrass, Micranthemum Monte Carlo, Java Fern',
      hardscape: 'Aged Seiryu & Dragon Rock (Golden Ratio Arrangement)'
    },
    dutch: {
      title: 'High-Density Dutch Style',
      subtitle: 'Lush terraced botanical streets with zero hardscape',
      description: 'Intense, colorful plant grouping resembling vibrant flower beds. Requires precision full-spectrum WRGB light, pressurized CO2, and balanced daily micro/macro fertilisation.',
      image: '/images/nature-aquascaping.jpg',
      flora: 'Ludwigia Super Red, Pogostemon Helferi, Alternanthera Reineckii',
      hardscape: 'Layered Active Volcanic Substrate & Root Tabs'
    }
  };

  const current = scapeTypes[activeTab];

  return (
    <section className="py-24 bg-[#07131b] border-t border-emerald-500/15 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chennai Aquascaping Studio</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            CREATE A LIVING MASTERPIECE
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Theme Aquarium provides complete solutions for planted aquariums and bespoke aquascaping in Chennai — from raw hardscape sculpting to precision CO₂ tuning and biological balancing.
          </p>
        </div>

        {/* 9 Core Solution Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 mb-14">
          {[
            { title: 'Aquatic Plants', desc: 'Sterile tissue culture & rooted pots', icon: Droplets },
            { title: 'Aquarium Soil', desc: 'Volcanic pH buffering active substrates', icon: Layers },
            { title: 'Hardscape Rocks', desc: 'Seiryu, Dragon, Lava & Slate', icon: Compass },
            { title: 'Driftwood', desc: 'Spiderwood, Driftwood branches & Mangrove', icon: Sparkles },
            { title: 'Pressurized CO₂', desc: 'IS Certified cylinders & solenoids', icon: Wind },
            { title: 'WRGB Lighting', desc: 'Full spectrum app-controlled LEDs', icon: Sun },
            { title: 'Fertilizers', desc: 'Specialized NPK & chelated iron formulas', icon: Droplets },
            { title: 'Pro Scape Tools', desc: 'Curved wave shears, tweezers & cases', icon: Sparkles },
          ].map((item, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-emerald-500/30 transition-all flex items-start gap-3 backdrop-blur-sm"
            >
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 flex-shrink-0 mt-0.5">
                <item.icon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">{item.title}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Aquascape Style Showcase Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-emerald-500/20 overflow-hidden shadow-2xl">
          {/* Tabs */}
          <div className="flex border-b border-slate-800 bg-slate-950/60 p-2 gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('nature')}
              className={`px-5 py-2.5 rounded-sm text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'nature'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              🌿 Nature Aquarium
            </button>
            <button
              onClick={() => setActiveTab('iwagumi')}
              className={`px-5 py-2.5 rounded-sm text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'iwagumi'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              🪨 Zen Iwagumi
            </button>
            <button
              onClick={() => setActiveTab('dutch')}
              className={`px-5 py-2.5 rounded-sm text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'dutch'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              🌺 Dutch Botanical
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            {/* Image */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-800">
              <img
                src={current.image}
                alt={current.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1 rounded-sm bg-emerald-950/90 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                  {current.title}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  {current.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {current.title}
                </h3>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {current.description}
                </p>
              </div>

              <div className="space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-500 font-mono block">Recommended Flora:</span>
                  <span className="text-emerald-300 font-medium">{current.flora}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-mono block">Hardscape Base:</span>
                  <span className="text-slate-200 font-medium">{current.hardscape}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleExplore}
                  className="px-6 py-3 rounded-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
                >
                  <span>Explore Aquascaping</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleEnquire}
                  className="px-5 py-3 rounded-sm bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/30 font-semibold text-xs transition-all cursor-pointer"
                >
                  Book Studio Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
