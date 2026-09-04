import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'service-custom-tanks',
    title: 'Custom Aquarium Design & Installation',
    shortDesc: 'Bespoke rimless low-iron glass aquariums engineered for homes, luxury villas, and corporate offices.',
    fullDesc: 'From in-wall architectural displays to standalone centerpieces with custom marine-grade plywood cabinetry and precision silent sump filtration. We handle 3D dimensional planning, glass thickness structural engineering, plumbing, and turnkey commissioning.',
    image: '/images/custom-starphire-tank.jpg',
    benefits: [
      'Starphire low-iron ultra-clear glass fabrication',
      'Engineered multi-chamber sump filtration systems',
      'Solid hardwood or moisture-proof marine ply cabinetry',
      'Full plumbing, cable management, and automated top-off (ATO)'
    ],
    pricingHint: 'Custom Quote / Free Initial Site Assessment in Chennai',
    iconName: 'Layout'
  },
  {
    id: 'service-aquascaping-studio',
    title: 'Turnkey Aquascaping & Nature Aquariums',
    shortDesc: 'Living underwater masterpieces inspired by Nature Aquarium aesthetics and Takashi Amano principles.',
    fullDesc: 'Our master aquascapers design, hardscape with aged driftwood & textured Seiryu stones, plant tissue-cultured flora, balance CO2 injection, and cultivate thriving balanced ecosystems.',
    image: '/images/planted-stream-waterfall.jpg',
    benefits: [
      '1-on-1 hardscape layout drafting at our Adyar studio',
      'Nutrient-rich substrate stratification & bacterial seeding',
      'Full spectrum light & CO2 tuning for algae-free stability',
      'Plant trimming, fertilisation guide, and biological balancing'
    ],
    pricingHint: 'From ₹12,000 for nano scapes to custom large setups',
    iconName: 'Sparkles'
  },
  {
    id: 'service-marine-reef',
    title: 'Marine & Coral Reef Aquarium Setup',
    shortDesc: 'Saltwater ecosystems with live corals, marine fish, protein skimmers, and dosing automation.',
    fullDesc: 'Advanced marine biotope setup featuring quarantine protocols, nitrogen cycle stabilization, salinity balancing, wavemaker hydrodynamics, and specialized reef spectrum lighting.',
    image: '/images/clownfish-green-anemone.jpg',
    benefits: [
      'Cured live rock & biological reef cycling',
      'High-efficiency DC protein skimmers & UV sterilizers',
      'Reef-safe livestock & coral placement planning',
      'Automated calcium, magnesium & alkalinity dosing setups'
    ],
    pricingHint: 'Custom project based on dimensions & coral load',
    iconName: 'Waves'
  },
  {
    id: 'service-amc-maintenance',
    title: 'Aquarium AMC & Professional Maintenance',
    shortDesc: 'Hassle-free weekly & bi-weekly maintenance visits by certified aquarists across Chennai.',
    fullDesc: 'Keep your aquarium crystal clear and healthy without lifting a finger. Our technicians conduct water testing, algae removal, plant pruning, filter media cleaning, and livestock health checkups.',
    image: '/images/canister-filter-system.jpg',
    benefits: [
      'Water parameter chemical testing (pH, Ammonia, Nitrite, Nitrate, TDS)',
      'High-pressure glass cleaning and gravel vacuuming',
      'Canister filter media servicing & pump maintenance',
      'Emergency technician callout support in Chennai'
    ],
    pricingHint: 'Monthly AMC plans starting from ₹2,500/month',
    iconName: 'ShieldCheck'
  },
  {
    id: 'service-b2b-corporate',
    title: 'Commercial & Hospitality Projects (B2B)',
    shortDesc: 'Aquatic architectural features for hotels, IT parks, restaurants, clinics, and interior designers.',
    fullDesc: 'We partner directly with architects, builders, and interior designers across Tamil Nadu to integrate breathtaking living installations into lobbies, reception counters, and executive lounges.',
    image: '/images/cave-hardscape-aquascape.jpg',
    benefits: [
      'Architectural CAD drawings & load-bearing coordination',
      'Automated water change systems for low-touch operation',
      'Scheduled corporate maintenance with zero disturbance',
      'GST invoices and formal corporate vendor agreements'
    ],
    pricingHint: 'Institutional proposals upon request',
    iconName: 'Building'
  },
  {
    id: 'service-pond-filtration',
    title: 'Koi Pond & Bio-Filtration Engineering',
    shortDesc: 'Outdoor and indoor Koi ponds with bottom drains, vortex chambers, and UV clarification.',
    fullDesc: 'Design and refurbishment of crystal-clear Japanese Koi ponds. We install energy-efficient pumps, pressurized bead filters, multi-chamber biological filtration, and aeration.',
    image: '/images/luxury-koi-pond-waterfall.jpg',
    benefits: [
      'Bottom drain & surface skimmer flow hydraulics',
      'Heavy biological nitrification chambers for high fish load',
      'High-power submersible UV-C clarifiers to prevent green water',
      'Complete water quality stabilization'
    ],
    pricingHint: 'Site inspection & estimate on demand',
    iconName: 'Droplets'
  }
];
