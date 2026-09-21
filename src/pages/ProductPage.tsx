import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Star, 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Check, 
  Sparkles, 
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Info,
  MapPin,
  Clock,
  Share2
} from 'lucide-react';
import { Link, useRouter } from '../context/RouterContext';
import { PRODUCTS_DATA } from '../data/products';
import { CATEGORIES_DATA } from '../data/categories';
import { Product } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';

interface ProductPageProps {
  productId: string;
  onAddToCart: (product: Product, quantity?: number) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onOpenProjectEnquiry: () => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  productId,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onOpenProjectEnquiry,
}) => {
  const { navigate } = useRouter();

  // Find product by id
  const product = PRODUCTS_DATA.find((p) => p.id === productId);

  // Fallback if product not found
  if (!product) {
    return (
      <div className="py-20 min-h-screen bg-[#050c12] text-center text-slate-200 px-4">
        <div className="max-w-md mx-auto space-y-6">
          <h1 className="text-3xl font-black text-white">Product Not Found</h1>
          <p className="text-slate-400 text-sm">
            The requested aquarium product may have been updated or moved.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Catalog
          </Link>
        </div>
      </div>
    );
  }

  // Find matching category
  const category = CATEGORIES_DATA.find(
    (c) => c.id === product.category || c.slug === product.category
  ) || {
    id: product.category,
    slug: product.category,
    name: product.category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
  };

  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const isWishlisted = wishlistIds.includes(product.id);

  // Related products from same category
  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const handleWhatsAppBuy = () => {
    const text = encodeURIComponent(
      `Hi Theme Aquarium Chennai!\n\n` +
      `I would like to order / inquire about:\n` +
      `*Product:* ${product.name}\n` +
      `*Quantity:* ${quantity}\n` +
      `*Unit Price:* ₹${product.price}\n` +
      `*Total:* ₹${product.price * quantity}\n` +
      `*Product Link:* https://themeaquarium.com/product/${product.id}\n\n` +
      `Please confirm livestock health / stock availability and Chennai doorstep delivery or Adyar store pickup.`
    );
    window.open(`https://wa.me/919884181562?text=${text}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Breadcrumbs: Theme Aquarium / Products Catalog / [Category] / [Product]
  const breadcrumbItems = [
    { name: 'Theme Aquarium', path: '/' },
    { name: 'Products Catalog', path: '/shop' },
    { name: category.name, path: `/category/${category.slug}` },
    { name: product.name, path: `/product/${product.id}` },
  ];

  // Schema.org Product JSON-LD
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: `https://themeaquarium.com${product.image}`,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'Theme Aquarium',
    },
    offers: {
      '@type': 'Offer',
      url: `https://themeaquarium.com/product/${product.id}`,
      priceCurrency: 'INR',
      price: product.price,
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/PreOrder',
      itemCondition: 'https://schema.org/NewCondition',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount || 12,
    },
  };

  return (
    <div className="py-8 bg-[#050c12] min-h-screen text-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumb Trail */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-16">
        
        {/* Main Product Layout (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Product Visuals & Trust Badges */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/25 bg-slate-950 shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto max-h-[550px] object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                }}
              />

              {/* Badges on Image */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 items-start pointer-events-none">
                {product.tag && (
                  <span className="text-xs font-mono font-bold text-white bg-emerald-600 px-3 py-1 rounded-full shadow-lg">
                    {product.tag}
                  </span>
                )}
                {product.isLiveStock && (
                  <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/90 border border-cyan-500/30 px-3 py-1 rounded-full shadow backdrop-blur-md">
                    Strictly Quarantined Livestock
                  </span>
                )}
                {product.careLevel && (
                  <span className="text-[11px] font-mono text-slate-300 bg-black/75 px-2.5 py-0.5 rounded-full border border-slate-700 backdrop-blur-sm">
                    Care Level: {product.careLevel}
                  </span>
                )}
              </div>

              {/* Wishlist & Share on Image */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`p-3 rounded-xl backdrop-blur-md transition-all ${
                    isWishlisted
                      ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                      : 'bg-black/60 text-slate-300 hover:text-rose-400 hover:bg-black/80'
                  }`}
                  title={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                >
                  <Heart className="w-4 h-4 fill-current" />
                </button>

                <button
                  onClick={handleShare}
                  className="p-3 rounded-xl bg-black/60 text-slate-300 hover:text-emerald-400 hover:bg-black/80 backdrop-blur-md transition-all"
                  title="Share product"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Stock Status Pill */}
              <div className="absolute bottom-4 left-4">
                {product.inStock ? (
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-300 bg-emerald-950/90 px-3.5 py-1 rounded-full border border-emerald-500/40 backdrop-blur-md shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Ready for In-Store Pickup or Express Chennai Delivery
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-amber-300 bg-amber-950/90 px-3.5 py-1 rounded-full border border-amber-500/40 backdrop-blur-md">
                    Special Import / Order on Request
                  </span>
                )}
              </div>
            </div>

            {copiedLink && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs text-center font-mono animate-in fade-in">
                ✓ Product link copied to clipboard!
              </div>
            )}

            {/* Quality & Delivery Guarantee Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#09151f] border border-slate-800 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Live Arrival Guarantee</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">100% healthy delivery on livestock and tissue plants.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#09151f] border border-slate-800 flex items-start gap-3">
                <Truck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Chennai Express</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Direct courier dispatch across Adyar, ECR, OMR & citywide.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#09151f] border border-slate-800 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Adyar Store Pickup</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Visit our Indira Nagar studio to inspect livestock in person.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Information & Purchase Controls */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Category & Rating */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <Link
                  to={`/category/${category.slug}`}
                  className="text-emerald-400 hover:text-emerald-300 font-bold uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20"
                >
                  {category.name}
                </Link>
                {product.subCategory && (
                  <span className="text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                    {product.subCategory}
                  </span>
                )}
                <div className="flex items-center gap-1 text-amber-400 ml-auto">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold">{product.rating}</span>
                  <span className="text-slate-500">({product.reviewCount || 18} reviews)</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Pricing Section */}
              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-3xl sm:text-4xl font-black text-white">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-slate-500 line-through font-mono">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/25">
                    Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')} (
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF)
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 border-y border-slate-800/80 py-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Product Overview
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Technical Specifications Table */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="space-y-3 bg-[#09151f] p-5 rounded-2xl border border-slate-800">
                <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                  <Info className="w-4 h-4" /> Technical Specifications
                </h3>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="border-b border-slate-800/60 py-1.5 flex justify-between gap-4">
                      <dt className="text-slate-400 font-mono">{key}:</dt>
                      <dd className="text-white font-medium text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {/* Quantity Selector & Action Buttons */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                <label className="text-xs font-mono text-slate-400">Quantity:</label>
                <div className="inline-flex items-center rounded-xl bg-slate-900 border border-slate-800 overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3.5 py-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors font-mono font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-white font-mono font-bold text-sm min-w-[40px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3.5 py-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors font-mono font-bold"
                  >
                    +
                  </button>
                </div>

                <div className="text-xs font-mono text-slate-400 ml-auto">
                  Subtotal: <strong className="text-white text-sm">₹{(product.price * quantity).toLocaleString('en-IN')}</strong>
                </div>
              </div>

              {/* Button Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg ${
                    addedNotice
                      ? 'bg-emerald-400 text-slate-950 font-black shadow-emerald-400/20'
                      : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20'
                  }`}
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-5 h-5" /> Added To Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" /> Add To Shopping Cart
                    </>
                  )}
                </button>

                <button
                  onClick={handleWhatsAppBuy}
                  className="w-full py-3.5 px-6 rounded-2xl font-bold text-sm bg-[#128C7E] hover:bg-[#075E54] text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
                >
                  <MessageCircle className="w-5 h-5" /> Order on WhatsApp
                </button>
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={onOpenProjectEnquiry}
                  className="text-xs font-mono text-slate-400 hover:text-emerald-400 underline decoration-slate-700 transition-colors"
                >
                  Need a custom glass tank dimension or complete turnkey setup? Inquire with our master aquascapers →
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Related Products from this Category */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-slate-800/80 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-white tracking-tight">
                  More in {category.name}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Discover matching aquatic essentials from Theme Aquarium Chennai
                </p>
              </div>

              <Link
                to={`/category/${category.slug}`}
                className="text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                View Full Category <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <div
                  key={relProduct.id}
                  className="group bg-[#09151f] rounded-2xl border border-slate-800 hover:border-emerald-500/50 overflow-hidden transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                    <Link to={`/product/${relProduct.id}`}>
                      <img
                        src={relProduct.image}
                        alt={relProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                        }}
                      />
                    </Link>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="text-[10px] font-mono text-emerald-400 mb-1">
                        {relProduct.subCategory || category.name}
                      </div>
                      <Link
                        to={`/product/${relProduct.id}`}
                        className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2"
                      >
                        {relProduct.name}
                      </Link>
                    </div>

                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                      <span className="text-sm font-black text-white">
                        ₹{relProduct.price.toLocaleString('en-IN')}
                      </span>
                      <Link
                        to={`/product/${relProduct.id}`}
                        className="text-[11px] font-mono text-emerald-400 hover:underline flex items-center gap-1"
                      >
                        View Page →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
