import React from 'react';
import { X, ShieldCheck, Truck, RotateCcw, FileText, Lock } from 'lucide-react';

export type PolicyType = 'shipping' | 'refund' | 'privacy' | 'terms' | null;

interface PolicyModalProps {
  type: PolicyType;
  isOpen: boolean;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, isOpen, onClose }) => {
  if (!isOpen || !type) return null;

  const policyContent = {
    shipping: {
      title: 'Shipping & Livestock Transport Policy',
      icon: Truck,
      content: (
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            At <strong>Theme Aquarium Chennai</strong>, we prioritize the safe, stress-free transport of aquatic equipment, hardscape, and living aquatic flora/fauna across Chennai and throughout India.
          </p>
          <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <h4 className="font-bold text-white text-sm">1. Chennai Local Delivery & Pickup</h4>
            <p>
              Same-day and next-day hyper-local delivery is available across Chennai for dry goods, plants, and selected livestock. You may also choose <em>Store Pickup</em> directly from our Indira Nagar, Adyar showroom during operating hours (9:30 AM – 10:00 PM).
            </p>
          </div>
          <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <h4 className="font-bold text-white text-sm">2. Live Fish & Livestock Packaging Protocol</h4>
            <p>
              All live fish and dwarf shrimp are double-bagged in heavy-gauge leak-proof aquatic bags, pressurized with pure oxygen, conditioned with stress-reducing water buffers, and insulated within thermal styrofoam outer cartons to shield against temperature swings.
            </p>
          </div>
          <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <h4 className="font-bold text-white text-sm">3. Dry Goods & Equipment All-India Shipping</h4>
            <p>
              Canister filters, CO₂ systems, WRGB LED lights, volcanic soils, and hardscape stones are packaged with multi-layer bubble wrap and dispatched via tracked express air/surface couriers across India.
            </p>
          </div>
        </div>
      )
    },
    refund: {
      title: 'Return & Refund Policy',
      icon: RotateCcw,
      content: (
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <h4 className="font-bold text-white text-sm">1. Dry Goods & Equipment Returns (7 Days)</h4>
            <p>
              Aquarium accessories, test kits, heaters, filters, and unopened soils can be returned or exchanged within 7 days of purchase, provided the items are unused, in their original intact packaging with all seals and warranty cards.
            </p>
          </div>
          <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <h4 className="font-bold text-white text-sm">2. Live Arrival Guarantee (DOA Policy)</h4>
            <p>
              In the rare event of a live fish or plant arriving in compromised condition, please share an uncut unboxing video within 2 hours of delivery via WhatsApp (+91 9884181562). We will promptly issue an immediate replacement or store credit.
            </p>
          </div>
          <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <h4 className="font-bold text-white text-sm">3. Custom Aquariums & Specialized Cabinets</h4>
            <p>
              Custom glass aquariums and tailored cabinetry are fabricated to bespoke client dimensions and cannot be returned once production commences. However, all our custom tanks carry a <strong>3-Year Leak-Proof Workmanship Guarantee</strong>.
            </p>
          </div>
        </div>
      )
    },
    privacy: {
      title: 'Privacy Policy',
      icon: Lock,
      content: (
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            Theme Aquarium is committed to safeguarding your privacy. We collect client contact details (name, phone number, location, email) purely to fulfill product orders, coordinate site inspections, schedule AMC maintenance visits, and provide custom project quotes.
          </p>
          <p>
            We never sell, distribute, or lease your personal information to third-party marketing companies. All client communication takes place through secure encrypted channels and direct WhatsApp support.
          </p>
        </div>
      )
    },
    terms: {
      title: 'Terms & Conditions',
      icon: FileText,
      content: (
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            Welcome to Theme Aquarium (themeaquariumchennai.com). By browsing our catalog, placing orders, or requesting custom tank quotes, you agree to our standard store operational guidelines and terms of service.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Livestock availability is subject to seasonal breeding batches and quarantine clearance.</li>
            <li>Prices listed in INR are subject to change based on international shipping rates for imported equipment.</li>
            <li>All custom installation contracts are governed by standard Indian contract regulations and local jurisdiction in Chennai, Tamil Nadu.</li>
          </ul>
        </div>
      )
    }
  };

  const current = policyContent[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#09151e] border border-emerald-500/30 rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <current.icon className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">{current.title}</h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-sm bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {current.content}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-sm bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
