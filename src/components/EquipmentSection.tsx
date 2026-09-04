import React from 'react';
import { 
  Filter, 
  Wind, 
  Sun, 
  Flame, 
  ThermometerSnowflake, 
  Activity, 
  Wrench, 
  Droplets,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface EquipmentSectionProps {
  onExploreEquipment: () => void;
}

export const EquipmentSection: React.FC<EquipmentSectionProps> = ({ onExploreEquipment }) => {
  const equipmentList = [
    { title: 'Canister Filters', desc: 'Oase, Eheim & SunSun multi-stage silent external filters', icon: Filter },
    { title: 'Sintered Bio Media', desc: 'Seachem Matrix, ceramic rings, bio-balls & Purigen', icon: Activity },
    { title: 'DC Water Pumps', desc: 'Sine-wave return pumps with digital variable speed controller', icon: Droplets },
    { title: 'Pressurized CO₂ Systems', desc: 'Refillable aluminum cylinders, dual stage solenoids & bubble counters', icon: Wind },
    { title: 'WRGB LED Lighting', desc: 'Bluetooth app-controlled Chihiros, Week Aqua & ADA lighting', icon: Sun },
    { title: 'Titanium Heaters', desc: 'Shatterproof electronic temperature controllers (24°C - 32°C)', icon: Flame },
    { title: 'Aquarium Chillers', desc: 'High-performance quiet refrigeration for cold water reef & shrimp tanks', icon: ThermometerSnowflake },
    { title: 'Precision Scape Tools', desc: 'Wave shears, curved spring tweezers, stainless sand flatteners', icon: Wrench },
    { title: 'RO/DI Filtration', desc: '0 TDS 4-stage reverse osmosis deionization systems for pure water', icon: Droplets },
    { title: 'Water Conditioners', desc: 'Instant chlorine & chloramine detoxifiers, beneficial bacteria starters', icon: Sparkles },
  ];

  return (
    <section className="py-24 bg-[#071118] border-t border-emerald-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
              <Wrench className="w-3.5 h-3.5" />
              <span>Engineered Aquarium Hardware</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional Aquarium Equipment & Tech
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl">
              Reliable, energy-efficient filtration, precision carbon dosing, and high-PAR illumination engineered for long-term ecosystem stability.
            </p>
          </div>

          <button
            onClick={onExploreEquipment}
            className="px-5 py-2.5 rounded-sm bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>View All Equipment</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {equipmentList.map((eq, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <eq.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {eq.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {eq.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400/90">
                100% Genuine Warranty
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
