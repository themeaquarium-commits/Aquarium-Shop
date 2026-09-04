import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, MessageCircle, UploadCloud, Layers } from 'lucide-react';
import { ProjectEnquiry } from '../types';

interface ProjectEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectEnquiryModal: React.FC<ProjectEnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ProjectEnquiry>({
    name: '',
    phone: '',
    email: '',
    projectType: 'Home Residential',
    aquariumSize: '4 Feet (120x45x45 cm)',
    ecosystemType: 'Freshwater Planted',
    budgetRange: '₹30,000 - ₹75,000',
    location: 'Chennai (Adyar / OMR / ECR / Anna Nagar)',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceFileName, setReferenceFileName] = useState<string | null>(null);
  const [whatsAppUrl, setWhatsAppUrl] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp message
    const waText = encodeURIComponent(
      `*NEW AQUARIUM PROJECT ENQUIRY - THEME AQUARIUM*\n\n` +
      `*Client Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Project Type:* ${formData.projectType}\n` +
      `*Target Size:* ${formData.aquariumSize}\n` +
      `*Ecosystem:* ${formData.ecosystemType}\n` +
      `*Budget:* ${formData.budgetRange}\n` +
      `*Location:* ${formData.location}\n` +
      `*Details:* ${formData.details || 'Turnkey setup requested'}\n\n` +
      `_Submitted via Theme Aquarium Web Portal_`
    );

    const url = `https://wa.me/919884181562?text=${waText}`;
    setWhatsAppUrl(url);

    try {
      window.open(url, '_blank');
    } catch {
      // Handled by direct button on success view
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReferenceFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#09151e] border border-emerald-500/30 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Custom Aquarium Project Enquiry</h3>
              <p className="text-xs text-slate-400">Residential, Commercial, Planted & Marine Projects in Chennai</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-sm bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border-2 border-emerald-500 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Thank You, {formData.name}!</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Your project enquiry has been generated. Click below to continue directly to WhatsApp with our senior aquascaping engineer at Theme Aquarium Chennai.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
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
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-sm bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Suresh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-sm px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98841 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-sm px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Email & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="e.g. suresh@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-sm px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Location in Chennai / Area *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Adyar, Besant Nagar, ECR, Anna Nagar"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-sm px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Project Type & Ecosystem */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Project Type *</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value as any })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-sm px-3.5 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Home Residential">Living Room / Luxury Villa Aquarium</option>
                    <option value="Built-in Wall Aquarium">Built-in / Inbuilt Wall Partition Aquarium</option>
                    <option value="Corporate Office">Corporate Office / Reception Area Aquarium</option>
                    <option value="Hotel / Restaurant">Hotel / Restaurant / Café Centerpiece</option>
                    <option value="Architect / Interior Collaboration">Architect & Interior Designer Trade Project</option>
                    <option value="Real Estate / Builder Project">Builder & Real Estate Development</option>
                    <option value="Outdoor Koi Pond">Outdoor Koi Pond & Multi-Stage Filtration</option>
                    <option value="Aquarium AMC Maintenance">Aquarium AMC Maintenance Contract</option>
                    <option value="Other">Other Bespoke Aquatic Setup</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Ecosystem Style *</label>
                  <select
                    value={formData.ecosystemType}
                    onChange={(e) => setFormData({ ...formData, ecosystemType: e.target.value as any })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-sm px-3.5 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Freshwater Planted">High-Tech Nature Planted (CO2 + WRGB)</option>
                    <option value="Marine Reef">Marine Coral Reef & Saltwater</option>
                    <option value="Cichlid / Predator">Monster Cichlid / Discus Display</option>
                    <option value="Terrarium / Paludarium">Rainforest Paludarium / Moss Wall</option>
                    <option value="Custom Sump Tank">Bare Rimless Tank with Custom Sump</option>
                  </select>
                </div>
              </div>

              {/* Aquarium Size & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Target Aquarium Size / Dimensions</label>
                  <input
                    type="text"
                    placeholder="e.g. 4x2x2 ft or 5x1.5x2 ft or Custom Space"
                    value={formData.aquariumSize}
                    onChange={(e) => setFormData({ ...formData, aquariumSize: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-sm px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Estimated Budget Range</label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-sm px-3.5 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="₹15,000 - ₹35,000">₹15,000 - ₹35,000 (Nano / Standard Setup)</option>
                    <option value="₹35,000 - ₹75,000">₹35,000 - ₹75,000 (3ft - 4ft Planted Setup)</option>
                    <option value="₹75,000 - ₹1,50,000">₹75,000 - ₹1,50,000 (4ft - 6ft Luxury Low-Iron Setup)</option>
                    <option value="₹1,50,000 - ₹3,00,000+">₹1,50,000 - ₹3,00,000+ (Commercial / Marine Reef)</option>
                    <option value="Undecided">Flexible / Need Expert Recommendation</option>
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300">Project Details & Special Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the space, wall dimensions, preferred cabinetry color, or livestock preferences..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-sm px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Reference Image Upload */}
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300">Upload Reference Image / Site Photo (Optional)</label>
                <div className="border-2 border-dashed border-slate-800 hover:border-emerald-500/40 rounded-sm p-4 text-center cursor-pointer relative bg-slate-950/40">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <UploadCloud className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                  <span className="text-slate-300 font-medium block">
                    {referenceFileName ? referenceFileName : 'Click to select or drag room / reference photos'}
                  </span>
                  <span className="text-[10px] text-slate-500">JPG, PNG up to 10MB</span>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-sm bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Send Project Enquiry</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
