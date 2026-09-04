import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Fish, Layers, HelpCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    {
      title: 'Custom Tank Project',
      desc: 'Discuss dimensions, glass & sump quote',
      icon: Layers,
      message: 'Hi Theme Aquarium! I am interested in getting a custom aquarium tank built. I would like to discuss my requirements and dimensions.'
    },
    {
      title: 'Live Fish & Plant Stock',
      desc: 'Check today’s stock photos & video',
      icon: Fish,
      message: 'Hi Theme Aquarium! Please share today\'s live fish and aquatic plants stock availability at your Adyar store.'
    },
    {
      title: 'Aquascaping Help',
      desc: 'Hardscape, soil & CO2 advice',
      icon: Sparkles,
      message: 'Hi Theme Aquarium! I need help with an aquascaping project and choosing hardscape rocks, soil, and plants.'
    },
    {
      title: 'Visit Store in Adyar',
      desc: 'Showroom directions & timings',
      icon: HelpCircle,
      message: 'Hi Theme Aquarium! I would like to visit your showroom in Indira Nagar, Adyar, Chennai today. Please share store location.'
    },
  ];

  const handleSendPrompt = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919884181562?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  const handleDirectChat = () => {
    const encoded = encodeURIComponent("Hi Theme Aquarium! I'm browsing your website and have a few questions.");
    window.open(`https://wa.me/919884181562?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Quick Action Drawer Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-[#091621] border border-emerald-500/30 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-200 backdrop-blur-xl">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-current text-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold leading-tight">Theme Aquarium Support</h4>
                <div className="flex items-center gap-1 text-[10px] text-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Online • Adyar, Chennai</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-sm bg-black/20 text-emerald-100 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body with Quick Prompts */}
          <div className="p-4 space-y-2 text-xs">
            <p className="text-[11px] text-slate-400 mb-2">
              Select a quick inquiry topic to chat directly with our specialist:
            </p>

            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendPrompt(prompt.message)}
                className="w-full p-2.5 rounded-sm bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-left flex items-center gap-3 transition-all group cursor-pointer"
              >
                <div className="p-2 rounded-sm bg-emerald-500/10 text-emerald-400 group-hover:scale-105 flex-shrink-0">
                  <prompt.icon className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-white group-hover:text-emerald-300 text-[11px]">
                    {prompt.title}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {prompt.desc}
                  </div>
                </div>
              </button>
            ))}

            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={handleDirectChat}
                className="w-full py-2.5 px-3 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Start General Chat</span>
              </button>
            </div>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 p-3.5 sm:px-4 sm:py-3.5 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold text-xs shadow-2xl shadow-[#25D366]/40 transition-all transform hover:scale-105 cursor-pointer border-2 border-emerald-300/40"
        title="Chat on WhatsApp"
        aria-label="Open WhatsApp Chat"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-mono tracking-tight font-bold">
          WhatsApp Us
        </span>
        
        {/* Pulse ring indicator */}
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"></span>
      </button>

    </div>
  );
};
