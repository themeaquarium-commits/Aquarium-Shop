import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  Layers, 
  Wrench, 
  Headphones, 
  MapPin,
  ShieldCheck
} from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      title: 'EXPERT KNOWLEDGE',
      desc: 'Professional guidance on biological nitrogen cycling, plant nutrients, lighting spectrums, and fish compatibility for beginner and seasoned aquarists.',
      icon: GraduationCap
    },
    {
      title: 'QUALITY PRODUCTS',
      desc: 'Carefully curated international brands (Oase, Chihiros, ADA, Seachem, Red Sea, Hikari) alongside our hand-selected lab tissue cultures and hardscape.',
      icon: Sparkles
    },
    {
      title: 'COMPLETE SOLUTIONS',
      desc: 'From exotic quarantined fish and aquatic plants to custom Starphire rimless glass tanks, CO2 systems, and comprehensive maintenance.',
      icon: Layers
    },
    {
      title: 'CUSTOM PROJECTS',
      desc: 'Architectural aquatic installations engineered for luxury residences, corporate boardrooms, hotels, and bespoke interior spaces.',
      icon: Wrench
    },
    {
      title: 'CUSTOMER SUPPORT',
      desc: 'Direct WhatsApp and phone assistance for water parameter troubleshooting, equipment maintenance, and plant pruning guidance.',
      icon: Headphones
    },
    {
      title: 'CHENNAI BASED',
      desc: 'Physical walk-in studio in Indira Nagar, Adyar, Chennai with live display tanks, on-site hardscape drafting, and local doorstep service.',
      icon: MapPin
    }
  ];

  return (
    <section className="py-24 bg-[#050b10] border-t border-emerald-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Why Theme Aquarium</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Setting the Benchmark for Aquatics in Chennai
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm">
            We are passionate biological hobbyists and engineers dedicated to creating sustainable, breathtaking living underwater ecosystems.
          </p>
        </div>

        {/* 6 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900 transition-all space-y-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white tracking-wide group-hover:text-emerald-300 transition-colors">
                {p.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
