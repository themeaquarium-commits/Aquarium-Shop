import React, { useState, useMemo } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Eye, 
  MessageCircle, 
  Sparkles, 
  Filter, 
  Check, 
  Search, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { CATEGORIES_DATA } from '../data/categories';
import { Product } from '../types';

interface FeaturedProductsProps {
  selectedCategory?: string;
  setSelectedCategory?: (cat: string) => void;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds?: string[];
  onOpenProjectEnquiry?: () => void;
  onViewAll?: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  selectedCategory: propCategory,
  setSelectedCategory: propSetCategory,
  searchQuery: propSearchQuery,
  setSearchQuery: propSetSearchQuery,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds = [],
  onOpenProjectEnquiry,
  onViewAll,
}) => {
  const [internalCategory, setInternalCategory] = useState('all');
  const [internalQuery, setInternalQuery] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [addedNoticeId, setAddedNoticeId] = useState<string | null>(null);

  const selectedCategory = propCategory !== undefined ? propCategory : internalCategory;
  const setSelectedCategory = propSetCategory || setInternalCategory;
  const searchQuery = propSearchQuery !== undefined ? propSearchQuery : internalQuery;
  const setSearchQuery = propSetSearchQuery || setInternalQuery;

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS_DATA];

    if (selectedCategory && selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (searchQuery && typeof searchQuery === 'string' && searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        (p.subCategory && p.subCategory.toLowerCase().includes(q))
      );
    }

    if (inStockOnly) {
      result = result.filter(p => p.inStock);
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, searchQuery, inStockOnly, sortBy]);

  const handleAddToCartWithFeedback = (product: Product) => {
    onAddToCart(product);
    setAddedNoticeId(product.id);
    setTimeout(() => setAddedNoticeId(null), 2000);
  };

  const handleWhatsAppEnquiry = (product: Product) => {
    const text = encodeURIComponent(
      `Hi Theme Aquarium Chennai! I'm interested in "${product.name}" (Price: ₹${product.price}). Please share live availability and delivery details to my location.`
    );
    window.open(`https://wa.me/919884181562?text=${text}`, '_blank');
  };

  return (
    <section id="shop-section" className="py-20 bg-[#050b10] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Theme Aquarium Catalogue</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Aquatic Products & Live Stock
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
              Authentic aquarium equipment, tissue culture plants, hardscape stones, and quarantined fish direct from our Adyar, Chennai store.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 font-mono">Showing {filteredProducts.length} items</span>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl mb-8 space-y-4">
          
          {/* Category Tabs (Scrollable) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-emerald-900 scrollbar-track-slate-950">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'all' || !selectedCategory
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
              }`}
            >
              All Categories
            </button>
            {CATEGORIES_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search, Sort, and In-Stock Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80 text-xs">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter by product name, species, or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50"
              />
            </div>

            {/* Sort & In-stock */}
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer text-slate-300 select-none">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-950 text-emerald-500 focus:ring-0 w-3.5 h-3.5"
                />
                <span>In Stock Only</span>
              </label>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-950 border border-slate-800 text-slate-300 rounded-xl px-3 py-1.5 text-xs focus:outline-none focus:border-emerald-500/50"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-2xl bg-slate-900/40 border border-slate-800">
            <AlertCircle className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No products found matching your filters</h3>
            <p className="text-slate-400 text-xs mt-1">Try clearing your search query or selecting another category.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setInStockOnly(false);
              }}
              className="mt-4 px-4 py-2 rounded-sm bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-500/30"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              const isAddedJustNow = addedNoticeId === product.id;

              return (
                <div
                  key={product.id}
                  className="group rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Product Image & Top Overlays */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                    {/* Tag / Badge */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      {product.tag && (
                        <span className="bg-emerald-500 text-slate-950 text-[10px] font-bold font-mono px-2.5 py-0.5 rounded shadow-md">
                          {product.tag}
                        </span>
                      )}
                      {product.isLiveStock && (
                        <span className="bg-cyan-950/90 text-cyan-300 border border-cyan-500/30 text-[9px] font-mono px-2 py-0.5 rounded backdrop-blur-sm">
                          Live Stock
                        </span>
                      )}
                    </div>

                    {/* Wishlist and Quick View Buttons */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      <button
                        onClick={() => onToggleWishlist(product)}
                        className={`p-2 rounded-sm backdrop-blur-md transition-all ${
                          isWishlisted
                            ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                            : 'bg-black/60 text-slate-300 hover:text-rose-400 hover:bg-black/80'
                        }`}
                        title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                      >
                        <Heart className="w-3.5 h-3.5 fill-current" />
                      </button>
                      <button
                        onClick={() => onQuickView(product)}
                        className="p-2 rounded-sm bg-black/60 text-slate-300 hover:text-emerald-400 hover:bg-black/80 backdrop-blur-md transition-all"
                        title="Quick View details"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Stock Status Pill on Image */}
                    <div className="absolute bottom-3 left-3">
                      {product.inStock ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 backdrop-blur-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          In Stock (Chennai)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30 backdrop-blur-sm">
                          Contact for Availability
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-emerald-400 font-mono mb-1">
                        <span>{product.subCategory || product.category}</span>
                        <span className="text-slate-400">★ {product.rating} ({product.reviewCount})</span>
                      </div>

                      <h3 
                        onClick={() => onQuickView(product)}
                        className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 cursor-pointer"
                      >
                        {product.name}
                      </h3>

                      <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Price & Action Buttons */}
                    <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-black text-white">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-slate-500 line-through">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                        {product.originalPrice && (
                          <span className="text-[10px] text-emerald-400 font-mono font-bold">
                            Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleAddToCartWithFeedback(product)}
                          className={`py-2 px-3 rounded-sm text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                            isAddedJustNow
                              ? 'bg-emerald-500 text-slate-950'
                              : 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30'
                          }`}
                        >
                          {isAddedJustNow ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added!</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>Add to Cart</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => handleWhatsAppEnquiry(product)}
                          className="py-2 px-3 rounded-sm bg-slate-800 hover:bg-[#25D366]/20 text-slate-200 hover:text-[#25D366] border border-slate-700 hover:border-[#25D366]/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                          title="Instant WhatsApp Enquiry"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Custom Project Callout inside store */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#0a1a23] via-[#0d2631] to-[#0a1a23] border border-emerald-500/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Looking for a Custom Tank Size or Complete Aquascape?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              We engineer custom low-iron Starphire aquariums with sump filtration, ADA-style cabinetry, and complete turnkey setups in Chennai.
            </p>
          </div>
          <button
            onClick={onOpenProjectEnquiry}
            className="px-6 py-3.5 rounded-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/20 whitespace-nowrap cursor-pointer"
          >
            <span>Request Custom Tank</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
