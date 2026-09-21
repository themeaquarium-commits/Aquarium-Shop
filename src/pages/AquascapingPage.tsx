import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Droplets, 
  Sun, 
  Wind, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle,
  Scissors
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { useRouter } from '../context/RouterContext';

interface AquascapingPageProps {
  onOpenProjectEnquiry: () => void;
}

export const AquascapingPage: React.FC<AquascapingPageProps> = ({ onOpenProjectEnquiry }) => {
  const { navigate } = useRouter();

  const scapeStyles = [
    {
      name: 'Iwagumi Style',
      subtitle: 'Zen Stone Mastery',
      desc: 'Minimalist Japanese aesthetic focusing on spiritual stone arrangements (Oyaishi, Fukuishi, Soeishi) surrounded by a lush foreground carpet of Monte Carlo or Glossostigma.',
      image: '/images/nature-aquascaping.jpg',
      idealFor: 'Living Rooms & Meditation Corners',
    },
    {
      name: 'Ryoboku (Driftwood) Style',
      subtitle: 'Ancient Riverbank Forest',
      desc: 'Dynamic, intertwining aged Malaysian Driftwood and Branching Spiderwood layered with weeping moss, Java ferns, and vibrant red Rotala H\'ra backgrounds.',
      image: '/images/planted-stream-waterfall.jpg',
      idealFor: 'Dining Areas & Office Centerpieces',
    },
    {
      name: 'Diorama Depth Landscapes',
      subtitle: 'Miniature Mountain Valleys',
      desc: 'Extreme forced-perspective aquascapes recreating mountain passes, winding river paths with white cosmetic sand, and moss-draped stone cliffs.',
      image: '/images/cave-hardscape-aquascape.jpg',
      idealFor: 'Architectural Showcases & Studios',
    },
  ];

  const corePillars = [
    {
      icon: Layers,
      title: 'Volcanic Soil Substrates',
      desc: 'Multi-layer organic base packed with micro-nutrients, volcanic porous gravel, and active humic acids that maintain optimal 6.4 pH for exotic flora.',
    },
    {
      icon: Sun,
      title: 'Full-Spectrum Smart WRGB',
      desc: 'App-controlled LED lighting offering programmed sunrise-to-sunset ramps and high PAR ratings essential for deep crimson red plant coloration.',
    },
    {
      icon: Wind,
      title: 'Pressurized CO₂ Injection',
      desc: 'Dual-stage regulators with solenoid timers delivering micro-bubbles via atomic diffusers for lush, rapid plant growth and zero algae.',
    },
    {
      icon: Droplets,
      title: 'Sterile In-Vitro Tissue Culture',
      desc: '100% snail-free, pest-free lab cultured aquatic plants guaranteed healthy from leading European and Asian horticultural laboratories.',
    },
  ];

  return (
    <div className="bg-[#030910] text-slate-100 min-h-screen">
      <Breadcrumb />

      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#061821] via-[#040e15] to-[#030910]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Artisan Aquascaping Studio • Chennai</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Masterpiece <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Nature Aquariums</span> & Planted Scapes
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Immerse your space in the tranquil beauty of underwater gardens. Our certified aquascapers design self-sustaining nature biotopes using genuine Seiryu stone, aged driftwood, and sterile in-vitro plants.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenProjectEnquiry}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <span>Commission an Aquascape</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/shop?category=aquascaping')}
                className="px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 font-bold text-sm flex items-center gap-2 transition-all"
              >
                <span>Shop Aquascaping Hardscapes</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 shadow-2xl group">
              <img
                src="/images/nature-aquascaping.jpg"
                alt="Nature Aquarium Aquascape Chennai"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                <div className="text-sm font-bold text-white">Ryoboku Natural Riverbank Biotope</div>
                <div className="text-xs text-emerald-400 font-mono">Commissioned for ECR Villa • Starphire 120P</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-md">
            <span>Aquascaping Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            World-Class Aquascaping Styles
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Each layout is custom tailored to the architecture and light conditions of your Chennai interior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scapeStyles.map((style, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                  }}
                />
                <span className="absolute top-3 left-3 text-[10px] font-mono text-emerald-300 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-500/30">
                  {style.subtitle}
                </span>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{style.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{style.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-400 font-mono">{style.idealFor}</span>
                  <button
                    onClick={onOpenProjectEnquiry}
                    className="text-xs font-bold text-white hover:text-emerald-400 flex items-center gap-1"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#040b12] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              The Science of Algae-Free Planted Aquariums
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              We apply strict horticultural science to balance lighting intensity, carbon dioxide solubility, and macro/micro nutrient dosing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">{pillar.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
