import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Navigation, 
  Send, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = encodeURIComponent(
      `*MESSAGE FROM WEBSITE CONTACT FORM*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Subject:* ${subject}\n` +
      `*Message:* ${message}\n\n` +
      `_Submitted via Theme Aquarium Contact Page_`
    );

    const url = `https://wa.me/919884181562?text=${waText}`;
    setWhatsAppUrl(url);
    try {
      window.open(url, '_blank');
    } catch {
      // Handled by direct button on success view
    }
  };

  const handleCall = () => {
    window.location.href = 'tel:+919884181562';
  };

  const handleOpenMap = () => {
    window.open('https://maps.google.com/?q=26/1,+12th+Lane,+3rd+Ave,+Indira+Nagar,+Adyar,+Chennai,+Tamil+Nadu+600020', '_blank');
  };

  return (
    <div className="py-12 bg-[#050c12] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
            <MapPin className="w-3.5 h-3.5" />
            <span>Connect with Theme Aquarium</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Visit Our Adyar Showroom or Get in Touch
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have questions about livestock care, equipment sizing, or custom tank installations in Chennai? Our specialists are here to assist you.
          </p>
        </div>

        {/* 2-Column Contact Info & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Details & Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-5">
              <h3 className="text-lg font-bold text-white">Store Location</h3>
              
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Theme Aquarium Chennai</span>
                    <p className="text-slate-300 mt-1 leading-relaxed">
                      26/1, 12th Lane, 3rd Ave,<br />
                      Indira Nagar, Adyar,<br />
                      Chennai – 600020, Tamil Nadu, India
                    </p>
                    <span className="text-[11px] text-slate-500 mt-1 block">Landmark: Near Indira Nagar 3rd Avenue</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Phone & Hotline</span>
                    <span className="text-white font-mono font-bold">+91 98841 81562 / 044-42117002</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Official Email</span>
                    <span className="text-white">themeaquarium@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[11px]">Showroom Timings</span>
                    <div className="text-white">Mon – Thu: <span className="font-mono text-emerald-300">9:30 AM – 10:00 PM</span></div>
                    <div className="text-white">Fri – Sun: <span className="font-mono text-emerald-300">9:30 AM – 10:30 PM</span></div>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleCall}
                  className="py-3 px-4 rounded-sm bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Store</span>
                </button>

                <button
                  onClick={handleOpenMap}
                  className="py-3 px-4 rounded-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Directions</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border-2 border-emerald-500 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Thank You, {name}!</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Your message has been received. Click below to continue directly to WhatsApp with our store manager in Adyar.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  {whatsAppUrl && (
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Open in WhatsApp</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-sm bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                <div>
                  <h3 className="text-xl font-bold text-white">Send Us a Direct Message</h3>
                  <p className="text-slate-400 text-xs mt-1">
                    Fill in your details below and we will respond within 30 minutes.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-sm px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-300">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98841 XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-sm px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Subject / Inquiry Topic</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-sm px-3.5 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Live Fish & Shrimp Availability">Live Fish & Shrimp Stock Availability</option>
                    <option value="Aquatic Plants & Tissue Culture">Aquatic Plants & Tissue Culture In-Vitro</option>
                    <option value="Custom Starphire Glass Tank Quote">Custom Starphire Glass Tank Quote</option>
                    <option value="Aquarium AMC Maintenance Service">Aquarium AMC Maintenance Service</option>
                    <option value="CO2 System / Equipment Help">CO2 System / Filtration Tech Help</option>
                    <option value="Corporate / Architect Collaboration">Corporate / Architect Collaboration</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you're looking for or how we can assist..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-sm px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-sm bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message & Connect on WhatsApp</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
