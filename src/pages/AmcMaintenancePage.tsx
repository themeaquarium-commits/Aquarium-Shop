import React from 'react';
import { 
  Wrench, 
  Calendar, 
  ShieldCheck, 
  Droplets, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageCircle,
  Clock
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

interface AmcMaintenancePageProps {
  onOpenProjectEnquiry: () => void;
}

export const AmcMaintenancePage: React.FC<AmcMaintenancePageProps> = ({ onOpenProjectEnquiry }) => {
  const amcTiers = [
    {
      name: 'Residential Standard AMC',
      subtitle: 'Bi-Weekly Visits (2x per month)',
      desc: 'Ideal for planted, community, or marine setups in apartments and independent houses up to 4 feet in length.',
      features: [
        'Glass algae scrubbing (inside & outside)',
        '30% de-chlorinated / RO water exchange',
        'Canister filter impeller rinse & media check',
        'Liquid reagent pH, Ammonia, Nitrite water testing',
        'Aquatic plant trimming & liquid fertilizer dosing',
        'Emergency breakdown callout within 24 hours',
      ],
      price: 'From ₹2,500 / month',
    },
    {
      name: 'Luxury / Marine Reef AMC',
      subtitle: 'Weekly Visits (4x per month)',
      desc: 'Comprehensive stewardship for high-tech nature aquascapes, marine SPS/LPS reefs, and large built-in tanks.',
      features: [
        'All Standard AMC services included',
        'Weekly water chemistry testing (Ca, Mg, dKH, NO3, PO4)',
        'Protein skimmer cup cleaning & neck degreasing',
        'CO2 cylinder pressure verification & bubble calibration',
        'Auto-Top-Off (ATO) reservoir replenishment',
        'Priority emergency callout within 4 hours in Chennai',
      ],
      price: 'From ₹4,500 / month',
    },
    {
      name: 'Corporate & Hospitality AMC',
      subtitle: 'Bi-Weekly or Weekly Custom Schedule',
      desc: 'Designed for IT tech parks, hotel lobbies, hospitals, and corporate reception tanks requiring flawless showroom presentation.',
      features: [
        'Silent off-hours service (early morning or post 6 PM)',
        'Complete equipment maintenance logs & health certificates',
        'Free replacement of common mechanical filter sponges',
        'Quarantined livestock restocking service',
        'GST compliant billing & corporate contracts',
        'Dedicated senior aquarist assigned to your facility',
      ],
      price: 'Custom Corporate Quote',
    },
  ];

  const checklist = [
    'Glass Algae Scraping (Razor blade & non-scratch pads)',
    'Substrate Gravel Vacuuming & Debris Siphoning',
    '30% Temperature-Matched Water Change',
    'Filter Canister / Sump Filter Media Wash in Tank Water',
    'Impeller & Pump Shaft Lubrication & De-gunking',
    'Biological Bacteria Seeding & Water Conditioner Added',
    'API Liquid Colorimetric Reagent Chemistry Testing',
    'Live Plant Dead Foliage Pruning & Scaping Touchup',
    'Fish Health Audit (Skin, Fins, Gills, Appetite Check)',
    'Heater, Chiller & Light Timer Verification',
  ];

  return (
    <div className="bg-[#030910] text-slate-100 min-h-screen">
      <Breadcrumb />

      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#06181f] via-[#040e14] to-[#030910]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              <Wrench className="w-3.5 h-3.5" />
              <span>Certified Technicians • Chennai</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Aquarium AMC & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Professional Maintenance</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Enjoy the breathtaking beauty of your aquarium without the hassle of water changes, dirty filters, or algae. Our trained aquarists service luxury tanks across Adyar, ECR, OMR, Anna Nagar, and all Chennai regions.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenProjectEnquiry}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <span>Book AMC Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919884181562?text=Hi%20Theme%20Aquarium!%20I%20need%20Aquarium%20Maintenance%20/%20AMC%20service%20for%20my%20tank%20in%20Chennai."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 font-bold text-sm flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Quick WhatsApp Booking</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl group">
              <img
                src="/images/canister-filter-system.jpg"
                alt="Aquarium Maintenance Service Chennai"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                <div className="text-sm font-bold text-white">100% Water Clarity Guarantee</div>
                <div className="text-xs text-emerald-400 font-mono">Bi-Weekly Scheduled Visits • Emergency Callouts Included</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMC Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Care Plans Tailored for Your Setup
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Transparent maintenance contracts with zero hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {amcTiers.map((tier, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="inline-block text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md">
                  {tier.subtitle}
                </div>
                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{tier.desc}</p>

                <div className="text-xl font-mono font-bold text-emerald-300 pt-2">
                  {tier.price}
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenProjectEnquiry}
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
              >
                Select This Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 10-Point Checklist */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#040b12] border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Our 10-Point Service Protocol
            </h2>
            <p className="text-slate-400 text-xs">
              Every maintenance visit follows this checklist performed by certified senior technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {checklist.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 text-xs text-slate-200"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-mono font-bold shrink-0">
                  {idx + 1}
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
