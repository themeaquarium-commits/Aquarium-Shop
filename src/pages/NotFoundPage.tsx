import React from 'react';
import { Compass, Home, ShoppingBag, Wrench, ArrowRight } from 'lucide-react';
import { Link } from '../context/RouterContext';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#030910] text-slate-100">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-black text-white font-mono">404</h1>
          <h2 className="text-xl font-bold text-white">Page Not Found</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            The aquatic page you are looking for may have moved or does not exist. Explore our core sections below.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <Link
            to="/"
            className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/shop"
            className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
          >
            <ShoppingBag className="w-4 h-4 text-emerald-400" />
            <span>Browse Products Catalogue</span>
          </Link>

          <Link
            to="/services"
            className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
          >
            <Wrench className="w-4 h-4 text-emerald-400" />
            <span>Aquarium AMC & Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
