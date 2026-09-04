import React from 'react';
import { 
  Wrench, 
  Sparkles, 
  Calendar, 
  Layers, 
  Droplets, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Phone
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { SeoArchitecturalSection } from '../components/SeoArchitecturalSection';

interface ServicesPageProps {
  onOpenProjectEnquiry: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenProjectEnquiry }) => {
  const steps = [
    { num: '01', title: 'Consultation & Site Assessment', desc: 'We assess room lighting, structural flooring load, plumbing access, and power outlets at your Chennai property.' },
    { num: '02', title: 'Concept Design & 3D Drafting', desc: 'Selection of glass dimensions, cabinetry wood finish, sump chamber layouts, and hardscape style (Iwagumi/Ryoboku).' },
    { num: '03', title: 'Precision Fabrication & Leak Test', desc: 'German Wacker silicone bonding, diamond edge polishing, and 72-hour hydrostatic leak testing.' },
    { num: '04', title: 'On-Site Aquascaping & Planting', desc: 'Layering volcanic aqua soil, placing cured Seiryu stones / driftwood, and planting sterile in-vitro tissue flora.' },
    { num: '05', title: 'Biological Nitrogen Cycling', desc: 'Seeding nitrifying bacteria, calibrating CO₂ bubble count and light photoperiod until zero ammonia & nitrite.' },
    { num: '06', title: 'Quarantined Livestock Introduction', desc: 'Slow drip acclimatization of exotic fish and dwarf shrimp, followed by recurring AMC maintenance visits.' },
  ];

  return (
    <div className="py-12 bg-[#050c12] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
            <Wrench className="w-3.5 h-3.5" />
            <span>Turnkey Aquatic Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Professional Aquarium Services & AMC Maintenance
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From bespoke architectural tank engineering to bi-weekly water chemistry maintenance, Theme Aquarium delivers end-to-end aquatic craftsmanship across Chennai.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenProjectEnquiry}
              className="px-6 py-3.5 rounded-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <span>Book Site Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919884181562?text=Hi%20Theme%20Aquarium!%20I%20am%20enquiring%20about%20your%20Aquarium%20AMC%20Maintenance%20Services%20in%20Chennai."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-sm bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 font-bold text-xs flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>

        {/* Detailed Service Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 overflow-hidden shadow-2xl flex flex-col justify-between transition-all group"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <span className="absolute bottom-3 left-3 text-xs font-mono text-emerald-300 bg-emerald-950/90 px-3 py-1 rounded border border-emerald-500/30 backdrop-blur-md">
                  {service.pricingHint}
                </span>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="mt-5 space-y-2.5 text-xs text-slate-300">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3">
                  <button
                    onClick={onOpenProjectEnquiry}
                    className="py-3 px-4 rounded-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider text-center transition-all cursor-pointer"
                  >
                    Request Quote
                  </button>

                  <a
                    href={`https://wa.me/919884181562?text=${encodeURIComponent(`Hi Theme Aquarium! I would like to book or enquire about: ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-sm bg-slate-950 hover:bg-slate-800 text-emerald-300 border border-slate-800 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 6-Step Turnkey Process Workflow */}
        <div className="rounded-3xl bg-slate-900/60 border border-emerald-500/20 p-8 sm:p-12 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              Execution Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              How We Execute Turnkey Aquatic Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3"
              >
                <div className="text-2xl font-black text-emerald-400 font-mono">
                  {step.num}
                </div>
                <h4 className="text-sm font-bold text-white">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AMC FAQ Strip */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-emerald-950/40 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">
              Have an Existing Tank That Needs Maintenance or Renovation?
            </h3>
            <p className="text-xs text-slate-300">
              Our technicians visit residences and offices across Adyar, Besant Nagar, OMR, ECR, Anna Nagar, and Velachery.
            </p>
          </div>

          <button
            onClick={onOpenProjectEnquiry}
            className="px-6 py-3 rounded-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex-shrink-0 cursor-pointer shadow-lg"
          >
            Schedule AMC Inspection
          </button>
        </div>

        {/* Architectural & Commercial Sector Hub */}
        <SeoArchitecturalSection onOpenProjectEnquiry={onOpenProjectEnquiry} />

      </div>
    </div>
  );
};
