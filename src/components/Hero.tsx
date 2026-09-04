import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  MessageCircle, 
  MapPin, 
  ChevronDown, 
  Layers, 
  Fish, 
  Waves, 
  Award 
} from 'lucide-react';

interface HeroProps {
  onShopClick?: () => void;
  onExploreShop?: () => void;
  onTalkToExpert?: () => void;
  onOpenProjectEnquiry?: () => void;
  onCustomTankClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onShopClick,
  onExploreShop,
  onTalkToExpert,
  onOpenProjectEnquiry,
  onCustomTankClick,
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShop = onExploreShop || onShopClick || (() => {});
  const handleEnquiry = onOpenProjectEnquiry || onTalkToExpert || onCustomTankClick || (() => {});

  const handleScrollDown = () => {
    const nextSection = document.getElementById('categories-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#04090f]">
      {/* Background Layer with true 98% Opacity & Smooth Parallax Scroll Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="w-full h-[125%] -top-[10%] absolute left-0 will-change-transform transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(0, ${scrollY * 0.42}px, 0) scale(${1 + Math.min(scrollY * 0.00025, 0.15)})`
          }}
        >
          <img
            src="/images/hero-aquarium.jpg"
            alt="Premium Planted Nature Aquascape Theme Aquarium"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
            style={{ opacity: 0.98 }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/nature-aquascaping.jpg';
            }}
          />
        </div>

        {/* Minimal edge feathering so 98% image opacity remains brilliant and unobstructed */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#04090f] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#04090f]/60 to-transparent" />
        
        {/* Subtle Ambient Aquatic Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/85 border border-emerald-500/40 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-md shadow-2xl shadow-emerald-950/60">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Premier Aquascaping & Exotic Aquarium Specialist in Chennai</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-5xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          BRING YOUR <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">UNDERWATER WORLD</span> TO LIFE
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 text-lg sm:text-xl text-slate-100 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] bg-slate-950/40 backdrop-blur-sm px-6 py-2 rounded-2xl border border-white/5">
          Aquariums, aquatic plants, aquascaping, fish and complete aquarium solutions — all under one roof in <strong className="text-emerald-300 font-bold">Indira Nagar, Adyar, Chennai</strong>.
        </p>

        {/* Main Action CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <button
            onClick={handleShop}
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm tracking-wide uppercase transition-all transform hover:-translate-y-0.5 shadow-2xl shadow-emerald-900/60 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Shop Aquarium Products</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={handleEnquiry}
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-slate-950/90 hover:bg-slate-900 text-emerald-300 hover:text-emerald-200 border border-emerald-500/50 font-bold text-sm tracking-wide uppercase transition-all backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer shadow-2xl"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Talk to an Expert</span>
          </button>
        </div>

        {/* Quick Features Highlight Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
          
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 backdrop-blur-md hover:border-emerald-500/40 transition-all shadow-xl">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
              <MapPin className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Adyar Showroom</h4>
            <p className="text-[11px] text-slate-300 mt-0.5 font-normal">Physical store with live planted aquascapes & display tanks</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 backdrop-blur-md hover:border-emerald-500/40 transition-all shadow-xl">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
              <Fish className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quarantined Livestock</h4>
            <p className="text-[11px] text-slate-300 mt-0.5 font-normal">Strict health conditioning & disease-free live fish</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 backdrop-blur-md hover:border-emerald-500/40 transition-all shadow-xl">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Custom Rimless Glass</h4>
            <p className="text-[11px] text-slate-300 mt-0.5 font-normal">Starphire low-iron ultra-clear glass tailored to your space</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 backdrop-blur-md hover:border-emerald-500/40 transition-all shadow-xl">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
              <Award className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">B2C & B2B Expertise</h4>
            <p className="text-[11px] text-slate-300 mt-0.5 font-normal">Turnkey execution for luxury homes, hotels & corporate offices</p>
          </div>

        </div>

        {/* Interactive Click-to-Scroll Down Button */}
        <button
          onClick={handleScrollDown}
          className="mt-14 inline-flex flex-col items-center gap-1.5 text-slate-300 hover:text-emerald-300 text-xs font-mono transition-colors cursor-pointer group bg-slate-950/60 px-5 py-2 rounded-sm border border-emerald-500/20 backdrop-blur-md shadow-lg"
          aria-label="Scroll down to explore categories"
        >
          <span className="tracking-wider uppercase text-[11px] font-semibold">Scroll to Explore Aquarium Catalogue</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-emerald-400 group-hover:translate-y-1 transition-transform" />
        </button>

      </div>
    </section>
  );
};
