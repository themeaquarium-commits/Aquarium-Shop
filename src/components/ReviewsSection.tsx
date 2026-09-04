import React from 'react';
import { Star, MessageSquare, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviews';
import { ReviewItem } from '../types';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#060e15] border-t border-emerald-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
              <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
              <span>Customer Satisfaction</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trusted by Chennai’s Aquarists & Hobbyists
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl">
              Authentic feedback from hobbyists, interior designers, and homeowners who trust Theme Aquarium for healthy livestock and immaculate planted aquascapes.
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=Theme+Aquarium+Adyar+Chennai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-sm bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center gap-2 transition-all"
          >
            <span>View All Google Reviews</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </a>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.slice(0, 3).map((review: ReviewItem) => (
            <div
              key={review.id}
              className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 shadow-xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-slate-300 ml-1.5 font-mono">5.0</span>
                </div>

                {review.tankType && (
                  <span className="inline-block text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/20">
                    {review.tankType}
                  </span>
                )}

                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">{review.author}</h4>
                  <p className="text-[11px] text-slate-400">{review.location}</p>
                </div>
                <span className="text-[10px] font-mono text-slate-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold font-mono">
              G
            </div>
            <div>
              <span className="font-bold text-white">4.9 Star Average Rating on Google Maps</span>
              <span className="text-slate-400 block text-[11px]">Based on verified local customer reviews in Chennai</span>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Theme+Aquarium+Adyar+Chennai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 underline underline-offset-4"
          >
            <span>Rate Us on Google</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
