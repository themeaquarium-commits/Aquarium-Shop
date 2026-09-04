import React, { useState } from 'react';
import { 
  Building2, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Compass, 
  CheckCircle2, 
  Briefcase, 
  Hotel, 
  MapPin, 
  Layers, 
  Droplets, 
  ShieldCheck, 
  Users, 
  Fish, 
  TreePine, 
  Palette, 
  FileText,
  PhoneCall
} from 'lucide-react';

interface SeoArchitecturalSectionProps {
  onOpenProjectEnquiry: () => void;
}

export const SeoArchitecturalSection: React.FC<SeoArchitecturalSectionProps> = ({ 
  onOpenProjectEnquiry 
}) => {
  const [activeTab, setActiveTab] = useState<'industries' | 'specialties' | 'locations' | 'partners'>('industries');
  const [selectedLocality, setSelectedLocality] = useState<string>('ECR');

  const industries = [
    {
      title: 'Architects & Interior Designers',
      desc: 'Seamless built-in wall aquariums, room dividers, and custom recessed flush-mount Starphire glass tanks engineered to match your architectural blue-prints.',
      features: ['2D/3D CAD Drawing & BIM Files', 'Custom Joinery & Sump Concealment', 'Structural Slab Load Calculations', 'Discreet MEP Plumbing Run-ins'],
      icon: Compass,
      tag: 'Trade Collaboration'
    },
    {
      title: 'Corporate Offices & IT Campuses',
      desc: 'High-impact reception area aquariums and boardroom nature scapes that lower employee stress and create a statement entrance for MNCs in OMR & Guindy.',
      features: ['Silent Sump Overflow Engineering', 'Automated LED Lighting & CO2 Cycles', 'Comprehensive Corporate AMC Contracts', 'Zero-Disruption Maintenance Hours'],
      icon: Building2,
      tag: 'Corporate & MNC'
    },
    {
      title: 'Luxury Hotels, Resorts & Cafes',
      desc: 'Living coral reef tanks, panoramic room dividers, and luxury biotope features designed for 5-star hotel atriums, fine-dining restaurants, and resort lobbies.',
      features: ['Vibrant Exotic Marine Corals & Livestock', 'Fail-Safe Dual-Pump Circulation', 'Commercial Ozone & UV Sterilization', '24/7 Priority Emergency Support'],
      icon: Hotel,
      tag: 'Hospitality & Dining'
    },
    {
      title: 'Builders & Luxury Villa Developers',
      desc: 'Turnkey architectural aquarium installations and outdoor Japanese Koi ponds for premium villas and luxury gated communities along ECR & Anna Nagar.',
      features: ['Site Pre-Plumbing & Electrical Provisioning', 'Multi-Chamber Biological Sump Filters', 'Custom Granite & Quartzite Surrounds', 'Full Warranty on Glass Bonding'],
      icon: Layers,
      tag: 'Real Estate & Luxury Living'
    },
    {
      title: 'Landscape Architects & Outdoor Ponds',
      desc: 'Custom Nishikigoi Japanese ponds, biological wetland filtration, and architectural waterbodies designed for luxury gardens and courtyards.',
      features: ['Bottom Drains & Vortex Settling Tanks', 'High-Output Submerged UV Clarifiers', 'Biological Moving Bed Biofilm Filters', 'Eco-Balanced Crystal Clear Water'],
      icon: TreePine,
      tag: 'Landscape & Ponds'
    }
  ];

  const specialties = [
    {
      name: 'Custom Made & Built-in Aquariums',
      desc: 'Precision Starphire low-iron glass fabrication with German Wacker silicone, ultra-clear diamond bevelled edges, and flush wall integration for living rooms and offices.',
      keywords: 'Built-in aquarium Chennai • Inbuilt aquarium Chennai • Wall mounted aquarium • Designer aquarium'
    },
    {
      name: 'Planted Aquascapes & Nature Aquariums',
      desc: 'Takashi Amano inspired Iwagumi, Ryoboku, and Dutch layouts using sterile in-vitro tissue culture flora, ADA substrates, and pressurized CO2 dosing.',
      keywords: 'Planted aquarium Chennai • Nature aquarium Chennai • Aquascaping Chennai • Large planted tank'
    },
    {
      name: 'Marine Reef & Coral Ecosystems',
      desc: 'Ultra-vibrant saltwater reef setups with SPS/LPS corals, quarantined clownfish, wavemaker circulation, and multi-stage protein skimming.',
      keywords: 'Marine aquarium Chennai • Reef aquarium Chennai • Saltwater aquarium Chennai • Coral tank'
    },
    {
      name: 'Bioactive Paludariums & Terrariums',
      desc: 'Enclosed tropical rainforest biotopes combining aquatic waterfalls with terrestrial mosses, miniature orchids, and micro-fauna in artisan glass.',
      keywords: 'Paludarium Chennai • Custom paludarium • Terrarium Chennai • Bioactive terrarium'
    },
    {
      name: 'Koi Ponds & Pond Filtration Systems',
      desc: 'Engineered biological pond filtration designed specifically for Chennai weather, eliminating green algae and ensuring thriving Japanese Nishikigoi.',
      keywords: 'Koi pond Chennai • Koi pond design • Pond filtration system Chennai • Custom pond Chennai'
    },
    {
      name: 'Aquarium AMC & Maintenance Contracts',
      desc: 'Professional bi-weekly, weekly, and monthly cleaning, chemical testing, filter servicing, and health monitoring across Chennai homes and corporates.',
      keywords: 'Aquarium maintenance Chennai • Aquarium AMC Chennai • Aquarium servicing • Tank cleaning Adyar'
    }
  ];

  const localities = [
    { name: 'Adyar', desc: 'Flagship Showroom & Quick Response AMC Maintenance Hub in South Chennai.' },
    { name: 'ECR (East Coast Road)', desc: 'Luxury Villa Aquariums, Beachside Marine Tanks & Outdoor Japanese Koi Ponds.' },
    { name: 'OMR (IT Corridor)', desc: 'Corporate MNC Reception Aquariums, IT Park Green Scapes & Penthouse Built-ins.' },
    { name: 'Neelangarai', desc: 'Custom Starphire Glass Wall Partitions & Saltwater Reef Tanks for Seaside Residences.' },
    { name: 'Palavakkam', desc: 'Bespoke Nature Aquascapes & High-Tech Living Room Wall Aquariums.' },
    { name: 'Velachery', desc: 'Residential Planted Aquariums, Coral Reef Setups & Comprehensive AMC Service.' },
    { name: 'Guindy & Porur', desc: 'Executive Boardroom Aquariums & Turnkey Corporate Installations.' },
    { name: 'Anna Nagar', desc: 'Luxury Residence Built-in Wall Tanks, Commercial Cafe Scapes & Koi Ponds.' },
    { name: 'T Nagar & Nungambakkam', desc: 'Designer Showroom Aquariums, Boutique Hotel Displays & Clinic Reception Tanks.' },
    { name: 'Sholinganallur & Perungudi', desc: 'Corporate Atrium Water Features & High-Tech Automated Reef Biotopes.' },
    { name: 'Medavakkam & Tambaram', desc: 'Villa Custom Aquariums & Complete Bioactive Terrarium Projects.' },
    { name: 'Mahabalipuram', desc: 'Resort Lobbies, Spa Aquariums & Outdoor Architectural Waterbodies.' }
  ];

  const referralPartners = [
    'Architects & Architectural Firms',
    'Interior Designers & Decorators',
    'Landscape Architects & Designers',
    'Civil & MEP Contractors',
    'Turnkey Fit-Out Contractors',
    'Hotel & Hospitality Consultants',
    'Real Estate & Luxury Villa Developers',
    'Facility & Property Management Companies',
    'Commercial Builders & Project PMCs'
  ];

  const handleWhatsAppConsult = (subject: string) => {
    const text = encodeURIComponent(
      `Hi Theme Aquarium! I am interested in discussing a project for: ${subject}. Please share technical specifications and consultation details.`
    );
    window.open(`https://wa.me/919884181562?text=${text}`, '_blank');
  };

  return (
    <section className="py-24 bg-[#040a12] border-t border-emerald-500/20 relative overflow-hidden" id="architectural-solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-bold tracking-widest uppercase bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-500/30">
            <Building2 className="w-3.5 h-3.5" />
            <span>Turnkey B2B & Commercial Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Architectural Aquarium Engineering & Commercial Projects Chennai
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Theme Aquarium is Chennai’s trusted turnkey execution partner for architects, interior designers, corporate offices, luxury hotels, and high-end villa builders across Adyar, ECR, OMR, and Anna Nagar.
          </p>

          {/* Tab Navigation */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'industries', label: 'Commercial & Hospitality' },
              { id: 'specialties', label: 'Specialist Project Capabilities' },
              { id: 'locations', label: 'Chennai Service Coverage' },
              { id: 'partners', label: 'Referral Partner Network' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Commercial & Hospitality Sectors */}
        {activeTab === 'industries' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 p-7 flex flex-col justify-between space-y-6 shadow-xl transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                        {ind.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {ind.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      {ind.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2">
                    <button
                      onClick={onOpenProjectEnquiry}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider text-center transition-all cursor-pointer"
                    >
                      Book Consultation
                    </button>
                    <button
                      onClick={() => handleWhatsAppConsult(ind.title)}
                      className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-emerald-400 border border-slate-800 transition-colors"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Specialist Project Capabilities */}
        {activeTab === 'specialties' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((spec, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 p-7 flex flex-col justify-between space-y-5 shadow-xl transition-all"
              >
                <div className="space-y-3">
                  <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                    Speciality 0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {spec.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {spec.desc}
                  </p>
                  
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 font-mono">
                    {spec.keywords}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenProjectEnquiry}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-emerald-500/30 cursor-pointer"
                  >
                    <span>Request Technical Specification</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Chennai Neighborhoods & Service Coverage */}
        {activeTab === 'locations' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-xl font-bold text-white">
                Active Project Locations Across Chennai & Suburbs
              </h3>
              <p className="text-xs text-slate-400">
                Our technicians provide site surveying, 3D drafting, precision installation, and recurring AMC maintenance across all major residential and commercial hubs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {localities.map((loc, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedLocality(loc.name)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    selectedLocality === loc.name
                      ? 'bg-emerald-950/40 border-emerald-500 shadow-lg shadow-emerald-950/50'
                      : 'bg-slate-900/80 border-slate-800 hover:border-emerald-500/40'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <h4 className="font-bold text-sm text-white">{loc.name}</h4>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {loc.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Action for Selected Locality */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto shadow-xl">
              <div>
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  Selected Service Area
                </div>
                <div className="text-lg font-bold text-white">
                  Aquarium Services in {selectedLocality}, Chennai
                </div>
                <p className="text-xs text-slate-400">
                  Site inspection, custom fabrication & bi-weekly AMC contracts available.
                </p>
              </div>

              <button
                onClick={() => handleWhatsAppConsult(`Custom Aquarium Installation in ${selectedLocality}, Chennai`)}
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 flex-shrink-0 shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire for {selectedLocality}</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Referral Partner Network */}
        {activeTab === 'partners' && (
          <div className="rounded-3xl bg-slate-900/90 border border-emerald-500/30 p-8 sm:p-12 space-y-8 shadow-2xl">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">
                Professional Collaboration Program
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Collaborate with Theme Aquarium on Client Projects
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We work directly alongside architects, interior designers, civil contractors, and hospitality consultants as your dedicated aquatic engineering subcontractor. We manage the biological, plumbing, and structural complexities so you can deliver breathtaking visual centerpieces with peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {referralPartners.map((partner, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3 text-xs font-medium text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{partner}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenProjectEnquiry}
                className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <span>Register as Trade Partner</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919884181562?text=Hi%20Theme%20Aquarium!%20I%20am%20an%20Architect%20/%20Interior%20Designer%20in%20Chennai%20interested%20in%20partnering%20for%20client%20projects."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 font-bold text-xs flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Direct Architect Hotline (+91 98841 81562)</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
