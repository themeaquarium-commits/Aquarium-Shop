import React from 'react';
import { 
  Wrench, 
  Sparkles, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Calendar,
  MessageCircle
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenProjectEnquiry: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenProjectEnquiry }) => {
  const handleServiceWhatsApp = (service: ServiceItem) => {
    const text = encodeURIComponent(
      `Hi Theme Aquarium! I would like to enquire about your service: "${service.title}". Please let me know your availability and process in Chennai.`
    );
    window.open(`https://wa.me/919884181562?text=${text}`, '_blank');
  };

  return (
    <section className="py-24 bg-[#050e15] border-t border-emerald-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
            <Wrench className="w-3.5 h-3.5" />
            <span>Turnkey Professional Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Complete Aquarium Setup & Maintenance Services
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm">
            From one-time nature aquascaping and plumbing setups to periodic monthly AMC visits across Chennai.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 shadow-xl overflow-hidden flex flex-col justify-between transition-all group"
            >
              {/* Service Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <span className="absolute bottom-3 left-3 text-[10px] font-mono text-emerald-300 bg-emerald-950/90 px-2.5 py-1 rounded border border-emerald-500/30 backdrop-blur-sm">
                  {service.pricingHint}
                </span>
              </div>

              {/* Service Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="mt-4 space-y-2 text-xs text-slate-300">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-[11px] text-slate-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2">
                  <button
                    onClick={onOpenProjectEnquiry}
                    className="py-2.5 px-3 rounded-sm bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold text-center transition-all"
                  >
                    Request Quote
                  </button>
                  <button
                    onClick={() => handleServiceWhatsApp(service)}
                    className="py-2.5 px-3 rounded-sm bg-slate-800 hover:bg-[#25D366]/20 text-slate-200 hover:text-[#25D366] border border-slate-700 hover:border-[#25D366]/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
