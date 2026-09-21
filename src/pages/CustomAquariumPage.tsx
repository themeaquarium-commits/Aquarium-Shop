import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  Ruler, 
  Compass, 
  Phone, 
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

interface CustomAquariumPageProps {
  onOpenProjectEnquiry: () => void;
}

export const CustomAquariumPage: React.FC<CustomAquariumPageProps> = ({ onOpenProjectEnquiry }) => {
  // Interactive Tank Size & Volume Calculator
  const [lengthFt, setLengthFt] = useState<number>(4);
  const [widthFt, setWidthFt] = useState<number>(2);
  const [heightFt, setHeightFt] = useState<number>(2);

  // Volume in Liters = Length(cm) * Width(cm) * Height(cm) / 1000
  const lengthCm = Math.round(lengthFt * 30.48);
  const widthCm = Math.round(widthFt * 30.48);
  const heightCm = Math.round(heightFt * 30.48);
  const volumeLiters = Math.round((lengthCm * widthCm * heightCm) / 1000);
  const volumeGallons = Math.round(volumeLiters * 0.264172);

  // Recommended glass thickness based on height
  const recommendedGlass = heightFt <= 1.5 ? '10mm' : heightFt <= 2 ? '12mm' : heightFt <= 2.5 ? '15mm' : '19mm';

  const styles = [
    {
      title: 'In-Wall Recessed Aquariums',
      desc: 'Flush with drywalls or masonry partitions, featuring hidden back-room access for clean filter maintenance in living rooms and executive suites.',
      badge: 'Most Popular',
      image: '/images/custom-starphire-tank.jpg',
    },
    {
      title: 'Architectural Room Dividers',
      desc: 'Double-sided 360° panoramic aquariums seamlessly dividing living and dining spaces with acoustic silent overflow sumps.',
      badge: 'Luxury Residences',
      image: '/images/nature-aquascaping.jpg',
    },
    {
      title: 'Executive Reception Centerpieces',
      desc: 'Heavy-duty Starphire glass systems engineered for corporate reception areas, hotel lobbies, and prestige clinics.',
      badge: 'Commercial Grade',
      image: '/images/hero-aquarium.jpg',
    },
  ];

  const faqs = [
    {
      q: 'Why does Theme Aquarium use Starphire Ultra-Clear glass instead of normal float glass?',
      a: 'Standard float glass contains iron oxides that cause a greenish tint, especially visible at thicknesses of 12mm to 19mm. Starphire (low-iron) glass offers 99.2% optical transmission, ensuring the true vivid colors of fish, plants, and corals are viewed without color distortion.',
    },
    {
      q: 'How long does custom tank fabrication take in Chennai?',
      a: 'Standard custom sizes (4ft to 8ft) typically take 10 to 14 business days from 3D CAD approval to structural assembly, silicone curing, and 72-hour hydrostatic leak testing.',
    },
    {
      q: 'Do you provide structural weight load consultations for apartments?',
      a: 'Yes. For large systems exceeding 500 liters (~700 kg including water, glass, and hardscape), our team coordinates with your structural engineer or architect to verify slab load capacity and design weight-distributing steel chassis frames.',
    },
    {
      q: 'What warranty is offered on silicone joints?',
      a: 'We use industrial-grade German Wacker 121 structural silicone and provide a 3-year leak-proof warranty on all our custom bonded glass tanks.',
    },
  ];

  return (
    <div className="bg-[#030910] text-slate-100 min-h-screen">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#06141d] via-[#040c14] to-[#030910]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              <Compass className="w-3.5 h-3.5" />
              <span>Bespoke Engineering • Chennai, TN</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Custom Starphire Glass <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Aquarium Fabrication</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Turnkey custom architectural aquariums engineered for luxury homes, ECR beachfront villas, and corporate offices across Chennai. Precision laser-cut ultra-clear glass, German silicone, and silent sump filtration.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenProjectEnquiry}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919884181562?text=Hi%20Theme%20Aquarium!%20I%20am%20looking%20for%20a%20custom%20aquarium%20quotation%20in%20Chennai."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 font-bold text-sm flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Engineer</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 text-xs text-slate-300">
              <div>
                <div className="text-emerald-400 font-mono font-bold text-lg">99.2%</div>
                <div>Starphire Clarity</div>
              </div>
              <div>
                <div className="text-emerald-400 font-mono font-bold text-lg">3 Years</div>
                <div>Silicone Warranty</div>
              </div>
              <div>
                <div className="text-emerald-400 font-mono font-bold text-lg">500+</div>
                <div>Tanks Built in TN</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-950/40 group">
              <img
                src="/images/custom-starphire-tank.jpg"
                alt="Custom Starphire Glass Aquarium Chennai"
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                <div className="text-sm font-bold text-white">Adyar Luxury Residence • 6ft x 2.5ft x 2.5ft</div>
                <div className="text-xs text-emerald-400 font-mono">15mm Starphire • Internal Overflow Sump • Matte Black Cabinet</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Volume & Glass Calculator */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#040b12] border-y border-slate-800/80">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
              <Calculator className="w-3.5 h-3.5" />
              <span>Instant Sizing Tool</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Aquarium Volume & Glass Spec Calculator
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Select your desired tank dimensions in feet to see water volume, estimated weight, and recommended glass thickness.
            </p>
          </div>

          <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-emerald-500/30 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Controls */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                  <span>Tank Length:</span>
                  <span className="text-emerald-400 font-bold">{lengthFt} Feet ({lengthCm} cm)</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="12"
                  step="0.5"
                  value={lengthFt}
                  onChange={(e) => setLengthFt(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                  <span>Tank Width (Depth):</span>
                  <span className="text-emerald-400 font-bold">{widthFt} Feet ({widthCm} cm)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="0.5"
                  value={widthFt}
                  onChange={(e) => setWidthFt(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                  <span>Tank Height:</span>
                  <span className="text-emerald-400 font-bold">{heightFt} Feet ({heightCm} cm)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="3.5"
                  step="0.25"
                  value={heightFt}
                  onChange={(e) => setHeightFt(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Results Display */}
            <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4 text-center sm:text-left">
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Engineering Specs:
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xs text-slate-400">Total Volume</div>
                  <div className="text-2xl font-black text-emerald-400 font-mono">
                    {volumeLiters} L
                  </div>
                  <div className="text-[10px] text-slate-500">~{volumeGallons} US Gal</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xs text-slate-400">Recommended Glass</div>
                  <div className="text-2xl font-black text-teal-300 font-mono">
                    {recommendedGlass}
                  </div>
                  <div className="text-[10px] text-slate-500">Starphire Ultra-Clear</div>
                </div>
              </div>

              <div className="text-xs text-slate-400 pt-2 leading-relaxed">
                Estimated water weight: <span className="text-white font-mono font-bold">{volumeLiters} kg</span> (excluding glass and cabinetry).
              </div>

              <button
                onClick={onOpenProjectEnquiry}
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
              >
                Inquire for {lengthFt}ft x {widthFt}ft Tank
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tank Architectural Styles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-md">
            <Layers className="w-3.5 h-3.5" />
            <span>Form Factors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Architectural Styles & Configurations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {styles.map((style, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                  }}
                />
                <span className="absolute top-3 right-3 text-[10px] font-mono text-emerald-300 bg-emerald-950/90 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  {style.badge}
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">{style.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{style.desc}</p>
                </div>
                <button
                  onClick={onOpenProjectEnquiry}
                  className="mt-4 w-full py-2.5 rounded-lg bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-semibold text-xs transition-colors"
                >
                  Consult on this Design
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#040b12] border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-xs">
              Everything you need to know about commissioning a custom aquarium in Chennai
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <h3 className="font-bold text-white text-sm">{faq.q}</h3>
                </div>
                <p className="text-slate-400 text-xs pl-7 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
