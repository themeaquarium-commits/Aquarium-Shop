import React from 'react';
import { 
  Building2, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  MessageCircle,
  Award
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

interface CommercialAquariumPageProps {
  onOpenProjectEnquiry: () => void;
}

export const CommercialAquariumPage: React.FC<CommercialAquariumPageProps> = ({ onOpenProjectEnquiry }) => {
  const commercialSectors = [
    {
      title: 'Corporate IT Parks & Lobbies',
      desc: 'Biophilic living art in reception foyers that reduces workplace stress, impresses global delegates, and elevates brand prestige.',
      image: '/images/hero-aquarium.jpg',
    },
    {
      title: 'Luxury Hotels & Fine Dining',
      desc: 'Dramatic custom wall installations and panoramic room dividers creating unforgettable guest dining and hospitality memories.',
      image: '/images/custom-starphire-tank.jpg',
    },
    {
      title: 'Hospitals & Prestige Clinics',
      desc: 'Clinically proven to lower patient blood pressure and waiting room anxiety with serene underwater biotopes and ultra-quiet equipment.',
      image: '/images/nature-aquascaping.jpg',
    },
  ];

  return (
    <div className="bg-[#030910] text-slate-100 min-h-screen">
      <Breadcrumb />

      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a1826] via-[#050f18] to-[#030910]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              <Building2 className="w-3.5 h-3.5" />
              <span>B2B & Architectural Solutions • Chennai</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Commercial & Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Aquarium Engineering</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Turnkey aquatic installations designed for architects, general contractors, luxury hotels, and corporate headquarters across Chennai. Complete MEP coordination, structural load calculations, and silent off-hours AMC.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenProjectEnquiry}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <span>Request B2B Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919884181562?text=Hi%20Theme%20Aquarium!%20We%20would%20like%20to%20discuss%20a%20commercial%20aquarium%20project%20in%20Chennai."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 font-bold text-sm flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Architect Hotline</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl group">
              <img
                src="/images/custom-starphire-tank.jpg"
                alt="Corporate Aquarium Chennai"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/hero-aquarium.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                <div className="text-sm font-bold text-white">OMR Tech Park Lobby • 10ft Built-in Marine Reef</div>
                <div className="text-xs text-emerald-400 font-mono">19mm Starphire • Acoustic Soundproofing • Weekly Corporate AMC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Specialized Commercial Applications
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Engineered to blend seamlessly with interior blueprints and high-traffic public standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commercialSectors.map((sector, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                  }}
                />
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{sector.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{sector.desc}</p>
                </div>
                <button
                  onClick={onOpenProjectEnquiry}
                  className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-semibold text-xs transition-colors"
                >
                  Request Project Proposal
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
