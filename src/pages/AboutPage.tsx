import React from 'react';
import { 
  Sparkles, 
  Fish, 
  Layers, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { ThemeAquariumLogo } from '../components/ThemeAquariumLogo';

interface AboutPageProps {
  onOpenProjectEnquiry: () => void;
  onNavigateTab: (tab: 'home' | 'shop' | 'services' | 'about' | 'contact') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenProjectEnquiry, onNavigateTab }) => {
  return (
    <div className="py-12 bg-[#050c12] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 bg-slate-900/80 p-8 sm:p-16">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Theme Aquarium Story</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Crafting Living Underwater Art in Chennai
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Theme Aquarium was founded with a singular vision: to elevate the aquarium hobby in India from simple glass boxes into sophisticated, biologically balanced living biotopes and nature art.
            </p>
          </div>
        </div>

        {/* Brand Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Fish className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">1. Biological Integrity First</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We never compromise on livestock quarantine or water chemistry. Every live fish specimen undergoes strict prophylactic conditioning before joining your ecosystem.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">2. Architectural Precision</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We engineer custom Starphire low-iron tanks with diamond beveled edging, German silicone bonding, and moisture-sealed marine plywood cabinetry.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">3. Lifelong Hobbyist Guidance</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Whether you are an aspiring beginner setting up your first nano planted bowl or an architect designing a 12-foot atrium reef, we provide continuous technical mentorship.
            </p>
          </div>
        </div>

        {/* Adyar Experience Center Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-12">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">
              Flagship Studio Experience
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Visit Our Experience Showroom in Indira Nagar, Adyar
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our store is designed as a calm, contemplative nature oasis. Explore active high-tech planted aquascapes, live coral reef biotopes, bioactive moss terrariums, and our dry hardscape drafting table where you can compose your layout stones before buying.
            </p>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Live Nature Aquascapes & ADA Style Display Tanks</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Interactive Hardscape Drafting Sandbox</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Snail-free Tissue Culture Plant Chiller Bank</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Water Parameter Testing Lab (TDS, pH, GH, KH, Nitrate)</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onNavigateTab('contact')}
                className="px-6 py-3 rounded-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Store Location & Timings
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src="/images/nature-aquascaping.jpg"
                alt="Theme Aquarium Adyar Chennai Showroom Nature Aquascape"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-80 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                }}
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
