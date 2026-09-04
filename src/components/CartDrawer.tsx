import React from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  MessageCircle, 
  Truck, 
  ShieldCheck 
} from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const totalAmount = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    let message = `*NEW ORDER / QUOTE REQUEST - THEME AQUARIUM CHENNAI*\n\n`;
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   Qty: ${item.quantity} x ₹${item.product.price} = ₹${item.product.price * item.quantity}\n`;
    });
    message += `\n*TOTAL ESTIMATE:* ₹${totalAmount.toLocaleString('en-IN')}\n\n`;
    message += `Please confirm product stock availability, delivery time to my Chennai address, and payment details.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919884181562?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#09151e] border-l border-emerald-500/30 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Your Shopping Cart</h3>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                {totalItemCount} items
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-sm bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
                <h4 className="text-sm font-bold text-slate-300">Your cart is currently empty</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Explore our exotic fish, tissue culture plants, custom tanks, and CO₂ gear.
                </p>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/90 flex gap-3 items-center justify-between"
                >
                  {/* Thumbnail */}
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

                  {/* Info */}
                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="text-xs font-bold text-white truncate">
                      {product.name}
                    </h4>
                    <div className="text-[11px] text-emerald-400 font-mono mt-0.5">
                      ₹{product.price.toLocaleString('en-IN')}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center bg-slate-900 border border-slate-800 rounded-sm text-xs">
                        <button
                          onClick={() => onUpdateQuantity(product.id, Math.max(1, quantity - 1))}
                          className="px-2 py-0.5 text-slate-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-white font-mono text-[11px]">{quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                          className="px-2 py-0.5 text-slate-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <span className="text-[11px] text-slate-400 font-mono">
                        = ₹{(product.price * quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => onRemoveItem(product.id)}
                    className="p-2 text-slate-500 hover:text-rose-400 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-slate-800 bg-slate-950/80 space-y-4">
              
              {/* Delivery notice */}
              <div className="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Doorstep Delivery & Store Pickup Available in Adyar, Chennai</span>
              </div>

              {/* Subtotal */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Items Subtotal:</span>
                  <span className="font-mono text-slate-200">₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Estimated Tax:</span>
                  <span className="text-emerald-400 font-mono">Included</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-slate-800">
                  <span>Estimated Total:</span>
                  <span className="text-emerald-400 font-mono text-base">₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* WhatsApp Checkout Button */}
              <div className="space-y-2">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3.5 px-4 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Order via WhatsApp</span>
                </button>

                <button
                  onClick={onClearCart}
                  className="w-full text-center text-[11px] text-slate-500 hover:text-slate-400 py-1"
                >
                  Clear Cart
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
