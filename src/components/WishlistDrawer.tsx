import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onAddToCart: (product: Product) => void;
  onRemoveFromWishlist: (productId: string) => void;
  onClearWishlist: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onAddToCart,
  onRemoveFromWishlist,
  onClearWishlist,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#09151e] border-l border-emerald-500/30 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-400 fill-current" />
              <h3 className="text-base font-bold text-white">Your Saved Wishlist</h3>
              <span className="text-xs font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                {items.length}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-sm bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <Heart className="w-12 h-12 text-slate-600 mx-auto" />
                <h4 className="text-sm font-bold text-slate-300">Your wishlist is empty</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Click the heart icon on any product to save items for future tank setups.
                </p>
              </div>
            ) : (
              items.map((product) => (
                <div
                  key={product.id}
                  className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/90 flex gap-3 items-center justify-between"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-xl object-cover border border-slate-800 flex-shrink-0 bg-slate-900"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                    }}
                  />

                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="text-xs font-bold text-white truncate">
                      {product.name}
                    </h4>
                    <div className="text-[11px] text-emerald-400 font-mono mt-0.5">
                      ₹{product.price.toLocaleString('en-IN')}
                    </div>

                    <button
                      onClick={() => {
                        onAddToCart(product);
                        onRemoveFromWishlist(product.id);
                      }}
                      className="mt-2 px-2.5 py-1 rounded-sm bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-[10px] font-bold border border-emerald-500/30 flex items-center gap-1"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Move to Cart</span>
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveFromWishlist(product.id)}
                    className="p-2 text-slate-500 hover:text-rose-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-slate-800 bg-slate-950/80">
              <button
                onClick={onClearWishlist}
                className="w-full py-2.5 text-center text-xs text-slate-400 hover:text-white rounded-sm border border-slate-800 hover:bg-slate-900"
              >
                Clear All Wishlist Items
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
