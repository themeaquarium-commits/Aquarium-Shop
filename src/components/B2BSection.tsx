import React from 'react';
import { 
  Building2, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Compass, 
  CheckCircle2, 
  Briefcase, 
  Layers, 
  Hotel,
  ShieldCheck
} from 'lucide-react';

interface B2BSectionProps {
  onOpenProjectEnquiry: () => void;
}

export const B2BSection: React.FC<B2BSectionProps> = ({ onOpenProjectEnquiry }) => {
  const targetIndustries = [
    'Architects & Spatial Planners',
    'Interior Designers & Decorators',
    'Landscape Designers',
    'Luxury Builders & Developers',
    'Hotels, Resorts & Spas',
    'Fine-Dining Restaurants & Lounges',
    'Corporate IT Campuses',
    'Healthcare & Executive Clinics',
  ];

  const turnkeyCapabilities = [
    'Custom Low-Iron Architectural Glass Partitions & In-Wall Installations',
    'Large Commercial Planted Nature Biotopes & Japanese Aquascapes',
    'Vibrant Marine Coral Reef Ecosystems with Automated Dosing',
    'High-Capacity Koi Pond Multi-Chamber Bio-Filtration',
    'Discrete Remote Sump Plumbing & Cable Management',
    'Scheduled White-Glove Corporate Maintenance AMC Contracts',
    'CAD Drawings, Structural Load Engineering & Vendor Coordination',
  ];

  const handleWhatsAppB2B = () => {
    const text = encodeURIComponent(
      `Hi Theme Aquarium! I am reaching out regarding a commercial / architectural aquarium project in Chennai. I would like to discuss design requirements and technical coordination.`
    );
    window.open(`https://wa.me/919884181562?text=${text}`, '_blank');
  };

  return (
    <section className="py-24 bg-[#06121a] border-t border-emerald-500/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Commercial & Architectural Partnering</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            AQUARIUM SOLUTIONS FOR YOUR PROJECT
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We partner with leading architects, interior designers, and corporate builders across Chennai to integrate living underwater art seamlessly into luxury spaces.
          </p>
        </div>

        {/* 2-Column Professional Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-slate-900/90 border border-emerald-500/20 p-8 sm:p-12 shadow-2xl">
          
          {/* Left Column: Target Sectors & Capabilities */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Turnkey Execution for Design Professionals
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Whether you are designing an executive boardroom, hotel atrium, or private residence in Chennai, our team provides complete technical oversight from initial spatial planning to ongoing maintenance.
              </p>
            </div>

            {/* Target Audience Chips */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
                Target Sectors:
              </span>
              <div className="flex flex-wrap gap-2">
                {targetIndustries.map((ind, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 text-xs font-medium"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Capabilities Checkmarks */}
            <div className="space-y-2.5 pt-2 border-t border-slate-800">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
                What We Offer:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {turnkeyCapabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenProjectEnquiry}
                className="px-7 py-3.5 rounded-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppB2B}
                className="px-5 py-3.5 rounded-sm bg-slate-950 hover:bg-slate-800 text-[#25D366] border border-[#25D366]/40 font-bold text-xs flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp B2B Lead Engineer</span>
              </button>
            </div>

          </div>

          {/* Right Column: Featured Corporate Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative bg-slate-950">
              <img
                src="/images/custom-starphire-tank.jpg"
                alt="Corporate Office Aquarium Project Theme Aquarium"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-80 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="p-6 space-y-3 bg-slate-950/90 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">Commercial Project Portfolio</span>
                  <span className="text-emerald-400 font-mono">Adyar, Chennai</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Full GST invoicing, vendor registration, milestone-based execution, and automated maintenance protocols designed for corporate environments.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
