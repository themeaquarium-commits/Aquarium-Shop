import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Compass, ExternalLink } from 'lucide-react';

export const VisitStoreSection: React.FC = () => {
  const handleCall = () => {
    window.location.href = 'tel:+919884181562';
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Theme Aquarium! I would like to visit your showroom in Adyar, Chennai. Please share live store location or directions.");
    window.open(`https://wa.me/919884181562?text=${text}`, '_blank');
  };

  const handleOpenMap = () => {
    window.open('https://maps.google.com/?q=26/1,+12th+Lane,+3rd+Ave,+Indira+Nagar,+Adyar,+Chennai,+Tamil+Nadu+600020', '_blank');
  };

  return (
    <section className="py-24 bg-[#050c12] border-t border-emerald-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
            <MapPin className="w-3.5 h-3.5" />
            <span>Adyar Experience Center</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            VISIT THEME AQUARIUM
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Come explore live nature aquascapes, healthy quarantined tropical fish, rare tissue culture plants, and bespoke rimless tanks in our Indira Nagar showroom.
          </p>
        </div>

        {/* 2-Column Store Location Details & Interactive Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl bg-slate-900/90 border border-emerald-500/20 p-6 sm:p-10 shadow-2xl">
          
          {/* Left Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono">
                  <MapPin className="w-4 h-4" />
                  <span>Store Location & Address</span>
                </div>
                <div className="text-sm font-semibold text-white leading-relaxed pl-6">
                  26/1, 12th Lane, 3rd Ave,<br />
                  Indira Nagar, Adyar,<br />
                  Chennai – 600020, Tamil Nadu, India
                </div>
                <div className="text-xs text-slate-400 pl-6 pt-1">
                  Landmark: Close to Indira Nagar Water Tank & Adyar 3rd Avenue
                </div>
              </div>

              {/* Timings Card */}
              <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono">
                  <Clock className="w-4 h-4" />
                  <span>Operating Hours</span>
                </div>
                <div className="space-y-1 text-xs text-slate-300 pl-6">
                  <div className="flex justify-between">
                    <span>Monday – Thursday:</span>
                    <span className="font-mono text-white font-semibold">9:30 AM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday – Sunday:</span>
                    <span className="font-mono text-white font-semibold">9:30 AM – 10:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Contact Direct Numbers */}
              <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono">
                  <Phone className="w-4 h-4" />
                  <span>Call & WhatsApp Contact</span>
                </div>
                <div className="pl-6 space-y-1 text-xs">
                  <div className="text-white font-mono font-bold">+91 98841 81562 / 044-42117002</div>
                  <div className="text-slate-400">Email: themeaquarium@gmail.com</div>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={handleCall}
                className="py-3.5 px-4 rounded-sm bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>CALL US</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="py-3.5 px-4 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WHATSAPP US</span>
              </button>
            </div>

          </div>

          {/* Right Interactive Location Map Card */}
          <div className="lg:col-span-6 relative flex flex-col justify-between rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 min-h-[360px]">
            
            {/* Map Visual / Stylized Area Interface */}
            <div className="relative flex-1 w-full bg-slate-950 flex flex-col items-center justify-center p-8 text-center space-y-4">
              {/* Radial gradient backing */}
              <div className="absolute inset-0 bg-radial-at-c from-emerald-950/40 via-slate-950 to-slate-950" />
              
              {/* Center Pin Marker */}
              <div className="relative z-10 space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 animate-pulse shadow-xl shadow-emerald-500/30">
                  <MapPin className="w-8 h-8" />
                </div>
                
                <div>
                  <h4 className="text-base font-bold text-white">THEME AQUARIUM</h4>
                  <p className="text-xs text-emerald-300 font-mono">Indira Nagar, Adyar, Chennai</p>
                </div>

                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Click below to open Google Maps navigation directly on your device with turn-by-turn driving directions.
                </p>
              </div>
            </div>

            {/* Bottom Bar on Map */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-300 font-medium">Chennai Pin: 600020</span>
              <button
                onClick={handleOpenMap}
                className="px-4 py-2 rounded-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions (Google Maps)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
