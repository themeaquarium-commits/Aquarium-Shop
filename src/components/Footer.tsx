import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Heart, 
  Layers, 
  Fish, 
  Sparkles, 
  ShieldCheck,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';
import { ThemeAquariumLogo } from './ThemeAquariumLogo';
import { CATEGORIES_DATA } from '../data/categories';
import { PolicyType } from './PolicyModal';

interface FooterProps {
  onNavigateTab: (tab: 'home' | 'shop' | 'services' | 'about' | 'contact') => void;
  onOpenCategory: (categoryId: string) => void;
  onOpenPolicy: (type: PolicyType) => void;
  onOpenCustomTank: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateTab,
  onOpenCategory,
  onOpenPolicy,
  onOpenCustomTank,
}) => {
  return (
    <footer className="bg-[#03080e] border-t border-emerald-500/20 text-slate-400 text-xs">
      {/* Top Banner: Trust Highlights */}
      <div className="border-b border-slate-800/80 bg-[#040c14] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-1.5">
              <div className="text-emerald-400 font-mono font-bold text-sm">Adyar Flagship Store</div>
              <p className="text-[11px] text-slate-400">Open 7 Days a week in Chennai</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-emerald-400 font-mono font-bold text-sm">Quarantined Stock</div>
              <p className="text-[11px] text-slate-400">Healthy medicated aquatic livestock</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-emerald-400 font-mono font-bold text-sm">Starphire Glass Tanks</div>
              <p className="text-[11px] text-slate-400">German silicone 3-year warranty</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-emerald-400 font-mono font-bold text-sm">Expert Consultation</div>
              <p className="text-[11px] text-slate-400">Biological balance & CO2 support</p>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <button
              onClick={() => onNavigateTab('home')}
              className="text-left focus:outline-none"
            >
              <ThemeAquariumLogo size="md" />
            </button>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Chennai’s premier specialist destination for nature aquascaping, custom architectural glass aquariums, sterile in-vitro plants, exotic quarantined fish, and professional marine reef setups.
            </p>

            {/* Direct WhatsApp Callout */}
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs">Direct WhatsApp Help</div>
                  <div className="text-[10px] text-emerald-400 font-mono">+91 98841 81562</div>
                </div>
              </div>

              <a
                href="https://wa.me/919884181562"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-[10px] uppercase"
              >
                Chat
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-slate-400 pt-1">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-slate-800 hover:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-slate-800 hover:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-slate-800 hover:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigateTab('home')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('shop')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  All Products Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCustomTank}
                  className="hover:text-emerald-400 transition-colors text-emerald-400 font-semibold"
                >
                  Custom Tank Fabrication
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('services')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Setup & AMC Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('about')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Theme Aquarium
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('contact')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Categories
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2 text-xs">
              {CATEGORIES_DATA.slice(0, 10).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onOpenCategory(cat.id);
                    onNavigateTab('shop');
                  }}
                  className="text-left hover:text-emerald-400 transition-colors truncate"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Store Location */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Store Information
            </h4>
            
            <div className="space-y-3 text-xs leading-relaxed text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  26/1, 12th Lane, 3rd Ave,<br />
                  Indira Nagar, Adyar,<br />
                  Chennai – 600020, Tamil Nadu
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-mono text-white">+91 98841 81562 / 044-42117002</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>themeaquarium@gmail.com</span>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-[11px] text-slate-400 space-y-0.5">
                  <div>Mon – Thu: <span className="text-slate-200">9:30 AM – 10:00 PM</span></div>
                  <div>Fri – Sun: <span className="text-slate-200">9:30 AM – 10:30 PM</span></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* SEO Keyword & Localities Directory Grid */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-[11px] leading-relaxed text-slate-400">
            
            {/* SEO Column 1: Custom Aquarium Solutions */}
            <div className="space-y-2.5">
              <h5 className="font-mono text-xs font-bold text-white uppercase tracking-wider text-emerald-400">
                Custom Aquariums Chennai
              </h5>
              <p className="text-slate-400">
                Custom made aquarium Chennai • Built-in aquarium Chennai • Inbuilt aquarium Chennai • Large aquarium Chennai • Luxury aquarium Chennai • Designer aquarium Chennai • Wall mounted aquarium Chennai • Living room aquarium • Office aquarium • Corporate aquarium • Hotel aquarium • Reception aquarium • Commercial aquarium • Aquarium installation Chennai • Aquarium fabrication Chennai • Aquarium contractor Chennai.
              </p>
            </div>

            {/* SEO Column 2: Specialist Aquascapes & Marine */}
            <div className="space-y-2.5">
              <h5 className="font-mono text-xs font-bold text-white uppercase tracking-wider text-emerald-400">
                Planted, Marine &amp; Ponds
              </h5>
              <p className="text-slate-400">
                Planted aquarium Chennai • Aquascaping Chennai • Nature aquarium Chennai • Large planted aquarium • Custom planted aquarium • Reef aquarium Chennai • Marine aquarium Chennai • Saltwater aquarium Chennai • Paludarium Chennai • Custom paludarium • Terrarium Chennai • Custom terrarium • Koi pond Chennai • Koi pond design • Koi pond filtration Chennai • Pond filtration system Chennai • Custom pond Chennai • Aquarium filtration system.
              </p>
            </div>

            {/* SEO Column 3: Commercial & B2B Referral Partners */}
            <div className="space-y-2.5">
              <h5 className="font-mono text-xs font-bold text-white uppercase tracking-wider text-emerald-400">
                Architectural &amp; Trade Partners
              </h5>
              <p className="text-slate-400">
                Custom aquarium for hotels in Chennai • Aquarium design for interior designers in Chennai • Large aquarium installation in ECR • Corporate office aquarium Chennai • Architecture firms • Architects • Interior designers • Interior design companies • Landscape architects • Landscape contractors • Civil contractors • MEP contractors • Turnkey contractors • Hotel consultants • Builders Chennai • Luxury home builders • Villa builders • Real estate developers • Facility management companies.
              </p>
            </div>

            {/* SEO Column 4: Chennai Service Areas */}
            <div className="space-y-2.5">
              <h5 className="font-mono text-xs font-bold text-white uppercase tracking-wider text-emerald-400">
                Service Locations in Chennai
              </h5>
              <p className="text-slate-400">
                Aquarium Adyar • Aquarium ECR • Aquarium OMR • Aquarium Neelangarai • Aquarium Palavakkam • Aquarium Velachery • Aquarium Guindy • Aquarium Porur • Aquarium Nungambakkam • Aquarium Anna Nagar • Aquarium T Nagar • Aquarium Sholinganallur • Aquarium Perungudi • Aquarium Medavakkam • Aquarium Tambaram • Aquarium Mahabalipuram • Aquarium maintenance Chennai • Aquarium AMC Chennai.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Legal & Policies */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Theme Aquarium Chennai. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenPolicy('shipping')}
              className="hover:text-slate-300 transition-colors"
            >
              Shipping Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicy('refund')}
              className="hover:text-slate-300 transition-colors"
            >
              Return & Refund Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
