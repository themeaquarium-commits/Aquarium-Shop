import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle,
  Navigation
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { useRouter } from '../context/RouterContext';

interface LocationsPageProps {
  onOpenProjectEnquiry: () => void;
  activeLocationSlug?: string;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ 
  onOpenProjectEnquiry,
  activeLocationSlug 
}) => {
  const { navigate, path } = useRouter();

  const locations = [
    {
      slug: 'adyar',
      path: '/aquarium-adyar-chennai',
      name: 'Adyar (Flagship Studio)',
      tag: 'Flagship Showroom',
      address: '26/1, 12th Lane, 3rd Ave, Indira Nagar, Adyar, Chennai 600020',
      description: 'Our flagship studio houses 20+ live planted aquascapes, sterile tissue-culture plant displays, quarantined exotic fish, and hardscape stones.',
      highlights: ['Walk-in Showroom 7 Days', 'Live Plant Lab', 'Instant Hardscape Layout Table', 'Aquascaping Workshops'],
      image: '/images/hero-aquarium.jpg',
    },
    {
      slug: 'ecr',
      path: '/aquarium-ecr-chennai',
      name: 'East Coast Road (ECR)',
      tag: 'Luxury Beachfront Villas',
      address: 'Servicing Thiruvanmiyur, Kottivakkam, Palavakkam, Neelangarai, Injambakkam, Akkarai & Uthandi',
      description: 'Specialists in 6ft – 12ft built-in wall aquariums, marine reef systems, and outdoor Japanese koi ponds with biological filtration for luxury coastal residences.',
      highlights: ['Custom Villa Ponds', 'Salt-Air Corrosion Resistant Cabinets', 'Weekly Marine Reef AMC', 'Same-Day Technician Dispatch'],
      image: '/images/luxury-koi-pond-waterfall.jpg',
    },
    {
      slug: 'omr',
      path: '/aquarium-omr-chennai',
      name: 'Old Mahabalipuram Road (OMR)',
      tag: 'IT Parks & High-Rise Apartments',
      address: 'Servicing Perungudi, Thoraipakkam, Sholinganallur, Navalur & Siruseri',
      description: 'Low-maintenance, silent aquariums tailored for IT park receptions, executive boardrooms, and luxury gated apartment complexes.',
      highlights: ['Silent Internal Sump Tech', 'Corporate AMC Agreements', 'Off-Hours Servicing', 'Automated Light/CO2 Timers'],
      image: '/images/custom-starphire-tank.jpg',
    },
    {
      slug: 'anna-nagar',
      path: '/aquarium-anna-nagar-chennai',
      name: 'Anna Nagar & Central Chennai',
      tag: 'Residential & Clinics',
      address: 'Servicing Anna Nagar, Kilpauk, Shenoy Nagar, Mogappair & Chetpet',
      description: 'Custom architectural aquariums, doctor clinic centerpieces, and scheduled bi-weekly cleaning maintenance across West & Central Chennai.',
      highlights: ['Clinic & Hospital biotopes', 'Bi-Weekly Cleaning Visits', 'Quarantined Live Stock Delivery', 'Free Site Measurement'],
      image: '/images/nature-aquascaping.jpg',
    },
    {
      slug: 'velachery',
      path: '/aquarium-velachery-chennai',
      name: 'Velachery & South Chennai',
      tag: 'Homes & Commercial',
      address: 'Servicing Velachery, Guindy, Madipakkam, Medavakkam & Tambaram',
      description: 'Affordable and reliable aquarium design, equipment upgrades, and doorstep maintenance services for growing family residences.',
      highlights: ['Doorstep Fish & Food Supply', 'Canister Filter Servicing', 'Planted Nano Aquariums', 'Water Testing Support'],
      image: '/images/fancy-guppy-aquarium.jpg',
    },
  ];

  // Check if viewing a specific neighborhood page
  const activeLoc = locations.find(l => l.path === path) || locations[0];
  const isIndividual = locations.some(l => l.path === path);

  return (
    <div className="bg-[#030910] text-slate-100 min-h-screen">
      <Breadcrumb />

      {/* Header */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#06141d] to-[#030910]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            <MapPin className="w-3.5 h-3.5" />
            <span>Chennai Local Service Coverage</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {isIndividual ? (
              <>Aquarium Services in <span className="text-emerald-400">{activeLoc.name}</span></>
            ) : (
              <>Theme Aquarium <span className="text-emerald-400">Chennai Service Hubs</span></>
            )}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {isIndividual 
              ? activeLoc.description 
              : 'Providing turnkey custom tank engineering, planted aquascaping, and doorstep AMC maintenance across prime neighborhoods in Chennai.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenProjectEnquiry}
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>Book Site Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/919884181562?text=Hi%20Theme%20Aquarium!%20I%20am%20located%20in%20${encodeURIComponent(activeLoc.name)}%20and%20need%20aquarium%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 font-bold text-xs flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Nearby Technician</span>
            </a>
          </div>
        </div>
      </section>

      {/* Locations List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc) => {
            const isCurrent = loc.path === path;

            return (
              <div
                key={loc.slug}
                className={`rounded-3xl bg-slate-900/90 border ${
                  isCurrent ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-slate-800'
                } overflow-hidden hover:border-emerald-500/40 transition-all flex flex-col justify-between`}
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                    }}
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-mono text-emerald-300 bg-emerald-950/90 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    {loc.tag}
                  </span>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{loc.name}</span>
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{loc.address}</p>

                    <ul className="space-y-1.5 pt-3 border-t border-slate-800 text-xs text-slate-300">
                      {loc.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => navigate(loc.path)}
                    className="mt-4 w-full py-2.5 rounded-lg bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View {loc.name} Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
