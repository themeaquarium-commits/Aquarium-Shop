import React from 'react';
import { 
  Waves, 
  Sparkles, 
  Droplets, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle,
  Activity
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

interface MarineReefPageProps {
  onOpenProjectEnquiry: () => void;
}

export const MarineReefPage: React.FC<MarineReefPageProps> = ({ onOpenProjectEnquiry }) => {
  const reefSpecs = [
    { label: 'Salinity (Specific Gravity)', value: '1.025 – 1.026 SG', target: 'Calibrated via Digital Refractometer' },
    { label: 'Water Temperature', value: '25°C – 26°C', target: 'Titanium In-Line Chiller System' },
    { label: 'Calcium (Ca)', value: '420 – 440 ppm', target: 'Automated 4-Channel Peristaltic Dosing' },
    { label: 'Magnesium (Mg)', value: '1350 – 1400 ppm', target: 'Balanced Ionic Buffer Solution' },
    { label: 'Alkalinity (dKH)', value: '8.0 – 8.5 dKH', target: 'Maintained for Steady Coral Calcification' },
    { label: 'Nitrates (NO₃) & Phosphates (PO₄)', value: '< 5 ppm / < 0.03 ppm', target: 'DC Needle-Wheel Protein Skimming' },
  ];

  const livestockTypes = [
    {
      title: 'Clownfish & Anemone Biotopes',
      desc: 'Symbiotic pairings of captive-bred Ocellaris, Picasso, or Maroon Clownfish hosting in healthy Rose and Green Bubble-Tip Anemones (Entacmaea quadricolor).',
      image: '/images/clownfish-green-anemone.jpg',
    },
    {
      title: 'LPS & Soft Coral Gardens',
      desc: 'Flowing Torch corals, Hammer corals, Duncan corals, and vibrant Zoanthid polyps that sway naturally with multi-phase wavemaker pulses.',
      image: '/images/marine-coral-reef.jpg',
    },
    {
      title: 'Full SPS Reef Systems',
      desc: 'High-energy Acropora, Montipora, and Stylophora coral ecosystems requiring high PAR actinic lighting, high water turnover, and continuous trace element dosing.',
      image: '/images/custom-starphire-tank.jpg',
    },
  ];

  return (
    <div className="bg-[#030910] text-slate-100 min-h-screen">
      <Breadcrumb />

      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#06152b] via-[#040e1d] to-[#030910]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
              <Waves className="w-3.5 h-3.5" />
              <span>Marine & Coral Reef Specialists • Chennai</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Living Coral Reefs & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Saltwater Aquariums</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Bring the vivid biodiversity of the ocean into your Chennai residence. Engineered with custom acrylic sumps, high-efficiency chillers, DC needle-wheel skimmers, and automated ionic chemistry dosing.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenProjectEnquiry}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <span>Consult Marine Specialist</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919884181562?text=Hi%20Theme%20Aquarium!%20I%20am%20enquiring%20about%20setting%20up%20a%20Marine%20Reef%20Aquarium%20in%20Chennai."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 font-bold text-sm flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Marine Desk</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl group">
              <img
                src="/images/clownfish-green-anemone.jpg"
                alt="Marine Reef Aquarium Clownfish Chennai"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/clownfish-marine-reef.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                <div className="text-sm font-bold text-white">450L Mixed Reef Biotope</div>
                <div className="text-xs text-cyan-400 font-mono">Titanium Chiller • 4x Wavemakers • Coral Pro Salt</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reef Systems */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Saltwater Ecosystem Configurations
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            From beginner-friendly clownfish tanks to advanced high-light SPS coral reefs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {livestockTypes.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/marine-coral-reef.jpg';
                  }}
                />
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
                <button
                  onClick={onOpenProjectEnquiry}
                  className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 font-semibold text-xs transition-colors"
                >
                  Consult on this Setup
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Water Chemistry Specs Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#040c18] border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-3 py-1 rounded-md">
              <Activity className="w-3.5 h-3.5" />
              <span>Precision Water Chemistry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Target Reef Parameters Maintained by Our AMC
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reefSpecs.map((spec, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between"
              >
                <div>
                  <div className="text-xs text-slate-400">{spec.label}</div>
                  <div className="text-lg font-mono font-bold text-cyan-300">{spec.value}</div>
                  <div className="text-[10px] text-slate-500">{spec.target}</div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
