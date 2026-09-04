import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShoppingBag, 
  Heart, 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Check, 
  Sparkles,
  Info,
  Star
} from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setAddedNotice(false);
    }
  }, [product?.id]);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const handleWhatsAppBuy = () => {
    const text = encodeURIComponent(
      `Hi Theme Aquarium Chennai!\n\n` +
      `I would like to order / enquire about this product:\n` +
      `*Product:* ${product.name}\n` +
      `*Quantity:* ${quantity}\n` +
      `*Unit Price:* ₹${product.price}\n` +
      `*Estimated Total:* ₹${product.price * quantity}\n\n` +
      `Please confirm stock and doorstep delivery / pickup in Chennai.`
    );
    window.open(`https://wa.me/919884181562?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#09151e] border border-emerald-500/30 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-sm bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Product Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                  }}
                />
                
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-emerald-500 text-slate-950 text-xs font-mono font-bold px-3 py-1 rounded shadow-md">
                    {product.tag}
                  </span>
                )}

                {product.isLiveStock && (
                  <span className="absolute bottom-3 left-3 bg-cyan-950/90 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono px-3 py-1 rounded backdrop-blur-sm">
                    Quarantined Live Specimen
                  </span>
                )}
              </div>

              {/* Livestock disclaimer banner if applicable */}
              {product.isLiveStock && (
                <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Livestock Note:</strong> Live fish & shrimp availability may fluctuate dynamically. Please contact us via WhatsApp before ordering to check current batch condition and receive live video confirmation.
                  </span>
                </div>
              )}
            </div>

            {/* Right: Product Details & Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Category, Rating & Title */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-1">
                  <span>{product.subCategory || product.category}</span>
                  <span className="flex items-center gap-1 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{product.rating} ({product.reviewCount} reviews)</span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {product.name}
                </h2>
              </div>

              {/* Price & Stock */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-black text-white">
                    ₹{product.price.toLocaleString('en-IN')}
                  </div>
                  {product.originalPrice && (
                    <div className="text-xs text-slate-500 line-through">
                      MRP: ₹{product.originalPrice.toLocaleString('en-IN')} (Inclusive of all taxes)
                    </div>
                  )}
                </div>

                <div>
                  {product.inStock ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded border border-emerald-500/30">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      In Stock in Adyar
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 bg-amber-950/90 px-3 py-1 rounded border border-amber-500/30">
                      Check Store Stock
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                  Description & Care
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Specifications Table */}
              {product.specifications && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                    Technical Specifications
                  </h4>
                  <div className="grid grid-cols-1 gap-1.5 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 text-xs">
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <div key={key} className="flex justify-between py-1 border-b border-slate-900 last:border-none">
                        <span className="text-slate-400 font-medium">{key}:</span>
                        <span className="text-white font-mono text-right">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Action Controls */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  {/* Quantity selector */}
                  <div className="flex items-center bg-slate-950 border border-slate-800 rounded-sm px-2 py-1 text-xs">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2 py-1 text-slate-400 hover:text-white font-bold text-sm"
                    >
                      -
                    </button>
                    <span className="px-3 text-white font-mono font-bold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-2 py-1 text-slate-400 hover:text-white font-bold text-sm"
                    >
                      +
                    </button>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => onToggleWishlist(product)}
                    className={`p-3 rounded-sm border transition-all ${
                      isWishlisted
                        ? 'bg-rose-500 text-white border-rose-500 shadow-md shadow-rose-500/20'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-rose-400'
                    }`}
                    title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>

                  {/* Add to Cart Button */}
                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 py-3 px-4 rounded-sm font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      addedNotice
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    {addedNotice ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Cart ({quantity})</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart (₹{(product.price * quantity).toLocaleString('en-IN')})</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Instant WhatsApp Order CTA */}
                <button
                  onClick={handleWhatsAppBuy}
                  className="w-full py-3.5 px-4 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Instant WhatsApp Order / Availability Check</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-[10px] text-slate-400 text-center">
                <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                  <Truck className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
                  <span>Chennai Express Delivery</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
                  <span>100% Genuine Brand</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
                  <span>Expert Setup Support</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
