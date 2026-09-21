import React from 'react';
import { 
  Fish, 
  Droplets, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle,
  Trees
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

interface KoiPondPageProps {
  onOpenProjectEnquiry: () => void;
}

export const KoiPondPage: React.FC<KoiPondPageProps> = ({ onOpenProjectEnquiry }) => {
  const pondFeatures = [
    {
      title: 'Bottom Drain & Vortex Settlement',
      desc: 'Aerated 4-inch bottom drains that pull fish waste into a dedicated vortex swirl chamber, eliminating sludge before it decomposes.',
    },
    {
      title: 'Biological Bead & Japanese Matting',
      desc: 'High surface-area K1 micro-media and Japanese filter mats colonized with millions of beneficial nitrifying bacteria for crystal clear water.',
    },
    {
      title: 'Submerged High-Output UV Clarifiers',
      desc: 'Commercial 55W – 110W ultraviolet sterilizers that flocculate single-celled green water algae, guaranteeing sparkling clarity in Chennai sunlight.',
    },
    {
      title: 'Architectural Slate Waterfalls',
      desc: 'Natural river slate and granite weir spillways designed for maximum acoustic serenity and constant dissolved oxygen saturation.',
    },
  ];

  return (
    <div className="bg-[#030910] text-slate-100 min-h-screen">
      <Breadcrumb />

      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#081816] via-[#040e0e] to-[#030910]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              <Trees className="w-3.5 h-3.5" />
              <span>Pond Architecture • ECR & Chennai</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Luxury Japanese <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Koi Ponds</span> & Waterfalls
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Transform your garden, courtyard, or ECR beachfront villa into a serene Japanese sanctuary. Turnkey pond excavation, commercial biological bead filtration, and healthy imported Nishikigoi.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenProjectEnquiry}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <span>Book Pond Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919884181562?text=Hi%20Theme%20Aquarium!%20I%20am%20enquiring%20about%20building%20a%20Koi%20Pond%20in%20Chennai."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 font-bold text-sm flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Pond Desk</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl group">
              <img
                src="/images/luxury-koi-pond-waterfall.jpg"
                alt="Luxury Japanese Koi Pond Chennai"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                <div className="text-sm font-bold text-white">ECR Beachfront Villa Koi Pond • 15,000 Liters</div>
                <div className="text-xs text-emerald-400 font-mono">Vortex Chamber • Japanese Mats • 75W UV</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Biological Pond Filtration Engineering
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Traditional concrete ponds turn green without proper bio-engineering. We guarantee crystal clear water 365 days a year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pondFeatures.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/30 transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
