import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Search, 
  ShoppingBag, 
  Heart, 
  Menu, 
  X, 
  MessageCircle, 
  ChevronDown,
  Sparkles,
  Layers,
  Fish,
  Compass,
  Waves,
  Wrench,
  Building2
} from 'lucide-react';
import { ThemeAquariumLogo } from './ThemeAquariumLogo';
import { useRouter, Link } from '../context/RouterContext';

interface HeaderProps {
  activeTab?: string;
  onNavigateTab?: (tab: 'home' | 'shop' | 'services' | 'about' | 'contact') => void;
  setActiveTab?: (tab: string) => void;
  onSelectCategory?: (category: string | null) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenProjectEnquiry: () => void;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab: propActiveTab,
  onNavigateTab,
  setActiveTab,
  onSelectCategory,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenProjectEnquiry,
  searchQuery: propSearchQuery,
  setSearchQuery: propSetSearchQuery,
}) => {
  const { path, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [internalSearch, setInternalSearch] = useState('');

  const searchQuery = propSearchQuery !== undefined ? propSearchQuery : internalSearch;
  const setSearchQuery = propSetSearchQuery || setInternalSearch;

  const navLinks = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'shop', label: 'Shop Catalogue', path: '/shop' },
    { id: 'aquascaping', label: 'Aquascaping', path: '/aquascaping-chennai' },
    { id: 'custom-tanks', label: 'Custom Tanks', path: '/custom-aquarium-chennai' },
    { id: 'marine', label: 'Marine & Reef', path: '/marine-reef-aquarium-chennai' },
    { id: 'services', label: 'Services & AMC', path: '/services' },
    { id: 'locations', label: 'Locations', path: '/aquarium-chennai-locations' },
    { id: 'about', label: 'About & Visit', path: '/about' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (targetPath: string) => {
    setMobileMenuOpen(false);
    navigate(targetPath);
  };

  const openWhatsAppGeneral = () => {
    const text = encodeURIComponent("Hi Theme Aquarium, I would like to enquire about your products and aquarium services in Chennai.");
    window.open(`https://wa.me/919884181562?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#071118]/95 border-b border-emerald-500/15 shadow-xl transition-all">
      {/* Top Notification / Store Info Bar */}
      <div className="hidden md:block bg-gradient-to-r from-[#06141d] via-[#0a232c] to-[#06141d] text-xs border-b border-emerald-900/30 text-slate-300 py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>26/1, 12th Lane, 3rd Ave, Indira Nagar, Adyar, Chennai</span>
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-500" />
              <span>Open Daily: 9:30 AM – 10:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href="tel:+919884181562" 
              className="flex items-center gap-1 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+91 98841 81562</span>
            </a>
            <span className="text-slate-600">|</span>
            <button 
              onClick={openWhatsAppGeneral}
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Store</span>
            </button>
            <span className="text-slate-600">|</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400/90 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Store Open in Adyar
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="cursor-pointer flex items-center gap-3 py-1 group"
          >
            <ThemeAquariumLogo size="md" />
            <div className="hidden xl:flex flex-col border-l border-emerald-500/20 pl-3">
              <span className="text-[11px] font-bold tracking-wider text-emerald-400 uppercase">
                Theme Aquarium Chennai
              </span>
              <span className="text-[10px] text-slate-400">
                Adyar Specialist Studio
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.path === '/' ? path === '/' : path.startsWith(link.path);
              return (
                <Link
                  key={link.id}
                  to={link.path}
                  className={`px-3 py-2 rounded-sm text-sm font-medium transition-all ${
                    isActive
                      ? 'text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Toggle */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-slate-900/90 border border-emerald-500/30 rounded-sm px-3 py-1.5 text-sm shadow-inner w-48 sm:w-64 transition-all">
                  <Search className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Search fish, plants, tanks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-slate-100 text-xs w-full placeholder:text-slate-500"
                    autoFocus
                  />
                  <button 
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="text-slate-400 hover:text-white ml-1 p-0.5 rounded-sm"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setSearchOpen(true);
                    navigate('/shop');
                  }}
                  className="p-2.5 rounded-sm bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 hover:border-emerald-500/30 transition-all"
                  title="Search products"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2.5 rounded-sm bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-rose-400 border border-slate-800 hover:border-rose-500/30 transition-all"
              title="View Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white font-bold text-[10px] w-4 h-4 rounded-sm flex items-center justify-center shadow-md">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-sm bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition-all flex items-center gap-1.5 shadow-md"
              title="View Cart"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline text-xs font-semibold">Cart</span>
              {cartCount > 0 && (
                <span className="bg-emerald-500 text-slate-950 font-black text-[10px] w-4 h-4 rounded-sm flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Custom Tank Consultation CTA */}
            <button
              onClick={onOpenProjectEnquiry}
              className="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold shadow-lg shadow-emerald-950/50 transition-all border border-emerald-400/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enquire Project</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071118]/98 border-b border-emerald-500/20 px-4 pt-3 pb-6 space-y-3 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-sm bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200"
            >
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>Home</span>
            </Link>
            <Link
              to="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-sm bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-400" />
              <span>All Products</span>
            </Link>
            <Link
              to="/aquascaping-chennai"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-sm bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Aquascaping</span>
            </Link>
            <Link
              to="/custom-aquarium-chennai"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-sm bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200"
            >
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Custom Tanks</span>
            </Link>
            <Link
              to="/marine-reef-aquarium-chennai"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-sm bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200"
            >
              <Waves className="w-4 h-4 text-cyan-400" />
              <span>Marine Reef</span>
            </Link>
            <Link
              to="/koi-pond-design-chennai"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-sm bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200"
            >
              <Fish className="w-4 h-4 text-emerald-400" />
              <span>Koi Ponds</span>
            </Link>
          </div>

          <div className="space-y-1 border-t border-slate-800 pt-3">
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left px-3 py-2 rounded-sm text-sm text-slate-300 hover:bg-slate-900 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-emerald-400" />
                <span>Services & Maintenance (AMC)</span>
              </span>
              <ChevronDown className="w-4 h-4 -rotate-90 text-slate-500" />
            </Link>
            <Link
              to="/commercial-corporate-aquariums"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left px-3 py-2 rounded-sm text-sm text-slate-300 hover:bg-slate-900 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-400" />
                <span>Commercial / Architect Solutions</span>
              </span>
              <ChevronDown className="w-4 h-4 -rotate-90 text-slate-500" />
            </Link>
            <Link
              to="/aquarium-chennai-locations"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left px-3 py-2 rounded-sm text-sm text-slate-300 hover:bg-slate-900 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Chennai Service Locations</span>
              </span>
              <ChevronDown className="w-4 h-4 -rotate-90 text-slate-500" />
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left px-3 py-2 rounded-sm text-sm text-slate-300 hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Store Location & Hours</span>
              <ChevronDown className="w-4 h-4 -rotate-90 text-slate-500" />
            </Link>
          </div>

          {/* Quick Action Buttons in Mobile */}
          <div className="pt-2 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onOpenProjectEnquiry();
                setMobileMenuOpen(false);
              }}
              className="py-2.5 px-3 rounded-sm bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Custom Quote</span>
            </button>
            <button
              onClick={() => {
                openWhatsAppGeneral();
                setMobileMenuOpen(false);
              }}
              className="py-2.5 px-3 rounded-sm bg-[#25D366] text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Chat</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
