import React from 'react';
import { Fish, MessageCircle, AlertTriangle, ShieldCheck, Sparkles } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { Product } from '../types';

interface FishShowcaseProps {
  onQuickView: (product: Product) => void;
  onCheckLiveStock: (fishName: string) => void;
}

export const FishShowcase: React.FC<FishShowcaseProps> = ({ onQuickView, onCheckLiveStock }) => {
  const liveFishes = PRODUCTS_DATA.filter(p => p.category === 'aquarium-fish');

  const fishCategories = [
    { name: 'Show Betta', desc: 'Halfmoon, Plakat, Dumbo & Crowntail varieties', tag: 'Hand Picked' },
    { name: 'Japanese Ranchu & Oranda', desc: 'Premium wen development, short-body calico & red-white', tag: 'Import Grade' },
    { name: 'Red Dragon Flowerhorn', desc: 'High kok, prominent pearling & cherry red colors', tag: 'Monster Specimen' },
    { name: 'Planted Schoolers', desc: 'Cardinal tetras, Harlequin rasboras, Rummy nose', tag: 'Aquascape Safe' },
    { name: 'Discus & Angelfish', desc: 'Pigeon blood, Blue diamond, Zebra angels', tag: 'Wild & Domestic' },
    { name: 'Marine Clownfish & Tangs', desc: 'Ocellaris, Yellow tang, Blue tang (conditioned)', tag: 'Saltwater Reef' },
  ];

  return (
    <section className="py-24 bg-[#06111a] border-t border-emerald-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
              <Fish className="w-3.5 h-3.5" />
              <span>Quarantined Livestock Collection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Exotic Live Fish Showcase
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl">
              Ethically sourced, medicated, and quarantined in conditioned soft water to ensure robust vitality before moving to your tank.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onCheckLiveStock('Current Live Fish Stock in Store')}
              className="px-4 py-2.5 rounded-sm bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 text-xs font-bold flex items-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp for Today's Stock Photos</span>
            </button>
          </div>
        </div>

        {/* Live Stock Strict Protocol Notice */}
        <div className="mb-10 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center gap-3.5 text-xs text-cyan-200">
          <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
          <div>
            <strong className="font-semibold text-white">Live Stock Availability Protocol:</strong> Live fish availability changes dynamically with store sales and new quarantine batches. Always contact our Adyar store via WhatsApp before visiting for real-time video checks of individual specimens.
          </div>
        </div>

        {/* Category Pills Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {fishCategories.map((fcat, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center space-y-1 hover:border-emerald-500/30 transition-all">
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">{fcat.tag}</span>
              <h4 className="text-xs font-bold text-white leading-tight">{fcat.name}</h4>
            </div>
          ))}
        </div>

        {/* Fish Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {liveFishes.map((fish) => (
            <div 
              key={fish.id}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 overflow-hidden shadow-xl flex flex-col justify-between transition-all group"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <img
                  src={fish.image}
                  alt={fish.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/fancy-guppy-aquarium.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                
                {fish.tag && (
                  <span className="absolute top-3 left-3 bg-emerald-500 text-slate-950 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full shadow-md">
                    {fish.tag}
                  </span>
                )}

                <span className="absolute bottom-3 left-3 text-[10px] font-mono text-cyan-300 bg-cyan-950/90 px-2 py-0.5 rounded border border-cyan-500/30 backdrop-blur-sm">
                  Quarantined & Conditioned
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-emerald-400 mb-1">
                    {fish.subCategory} • Care: {fish.careLevel}
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {fish.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {fish.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-black text-white">
                      ₹{fish.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Per Specimen / Pack
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onQuickView(fish)}
                      className="py-2 px-3 rounded-sm bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold text-center transition-all"
                    >
                      Specifications
                    </button>
                    <button
                      onClick={() => onCheckLiveStock(fish.name)}
                      className="py-2 px-3 rounded-sm bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 text-xs font-bold flex items-center justify-center gap-1 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Check Stock</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
