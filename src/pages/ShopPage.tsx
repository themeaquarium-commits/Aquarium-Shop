import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  ShoppingBag, 
  Heart, 
  Star, 
  Eye, 
  MessageCircle, 
  Sparkles, 
  Check, 
  Filter, 
  ArrowUpDown,
  Grid,
  List
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { CATEGORIES_DATA } from '../data/categories';
import { Product } from '../types';

interface ShopPageProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onOpenProjectEnquiry: () => void;
  searchQuery?: string;
  onSearchQueryChange?: (query: string) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  selectedCategory,
  onSelectCategory,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onOpenProjectEnquiry,
  searchQuery: propSearchQuery,
  onSearchQueryChange,
}) => {
  const [internalSearch, setInternalSearch] = useState('');
  const searchQuery = propSearchQuery !== undefined ? propSearchQuery : internalSearch;
  const setSearchQuery = onSearchQueryChange || setInternalSearch;
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [maxPrice, setMaxPrice] = useState<number>(30000);
  const [layoutMode, setLayoutMode] = useState<'grid' | 'list'>('grid');

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      // Category filter
      if (selectedCategory && p.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (searchQuery && typeof searchQuery === 'string' && searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesCategory = p.category.toLowerCase().includes(q);
        const matchesSub = p.subCategory ? p.subCategory.toLowerCase().includes(q) : false;
        const matchesDesc = p.description.toLowerCase().includes(q);
        if (!matchesName && !matchesCategory && !matchesSub && !matchesDesc) {
          return false;
        }
      }
      // In stock filter
      if (onlyInStock && !p.inStock) {
        return false;
      }
      // Price filter
      if (p.price > maxPrice) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default order
    });
  }, [selectedCategory, searchQuery, onlyInStock, maxPrice, sortBy]);

  const handleWhatsAppEnquire = (product: Product) => {
    const text = encodeURIComponent(
      `Hi Theme Aquarium! I am looking for "${product.name}" (₹${product.price}). Please confirm stock availability and delivery options in Chennai.`
    );
    window.open(`https://wa.me/919884181562?text=${text}`, '_blank');
  };

  return (
    <div className="py-12 bg-[#050c12] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Header */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Theme Aquarium</span>
            <span>/</span>
            <span className="text-emerald-400">Products Catalog</span>
            {selectedCategory && (
              <>
                <span>/</span>
                <span className="text-white capitalize font-semibold">{selectedCategory.replace('-', ' ')}</span>
              </>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Aquarium & Aquascaping Collection
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Explore curated livestock, sterile in-vitro plants, rimless Starphire tanks, CO₂ systems, and filtration technology.
              </p>
            </div>

            <button
              onClick={onOpenProjectEnquiry}
              className="px-4 py-2.5 rounded-sm bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center gap-2 self-start md:self-auto cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Need a Custom Tank? Enquire</span>
            </button>
          </div>
        </div>

        {/* Search & Main Filter Controls Bar */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 mb-8 space-y-4 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search fish species, plants, soil, filters, lighting, fertilizers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-sm pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-3 flex items-center gap-2">
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <ArrowUpDown className="w-3.5 h-3.5" />
                <span>Sort:</span>
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-sm px-3 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="featured">Featured & Curated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Customer Rated</option>
              </select>
            </div>

            {/* In-Stock Toggle & Layout Mode */}
            <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-4">
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                  className="rounded-sm border-slate-700 accent-emerald-500 w-4 h-4"
                />
                <span>In Stock Only</span>
              </label>

              <div className="flex items-center bg-slate-950 border border-slate-800 rounded-sm p-1">
                <button
                  onClick={() => setLayoutMode('grid')}
                  className={`p-1.5 rounded-sm transition-colors ${
                    layoutMode === 'grid' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Grid View"
                >
                  <Grid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setLayoutMode('list')}
                  className={`p-1.5 rounded-sm transition-colors ${
                    layoutMode === 'list' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                  title="List View"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Quick Category Chips Strip */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            <button
              onClick={() => onSelectCategory(null)}
              className={`px-3.5 py-1.5 rounded-sm font-bold uppercase text-[11px] whitespace-nowrap transition-all ${
                selectedCategory === null
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Items ({PRODUCTS_DATA.length})
            </button>
            {CATEGORIES_DATA.map((cat) => {
              const count = PRODUCTS_DATA.filter(p => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-sm font-medium text-[11px] whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat.name} {count > 0 && <span className="opacity-60 text-[10px]">({count})</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter & Price Slider indicator */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 font-mono">
          <div>
            Showing <strong className="text-emerald-400">{filteredProducts.length}</strong> matching products
          </div>
          {selectedCategory && (
            <button
              onClick={() => onSelectCategory(null)}
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
            >
              Clear Category Filter
            </button>
          )}
        </div>

        {/* Products Grid / List View */}
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center space-y-4 rounded-3xl bg-slate-900/40 border border-slate-800">
            <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-base font-bold text-white">No products found matching your filters</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Try adjusting your search terms, resetting filters, or contact us directly on WhatsApp for specialized imports.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory(null);
                setOnlyInStock(false);
              }}
              className="px-4 py-2 rounded-sm bg-emerald-500 text-slate-950 text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        ) : layoutMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 overflow-hidden shadow-lg flex flex-col justify-between transition-all group"
                >
                  {/* Image */}
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

                    {product.tag && (
                      <span className="absolute top-3 left-3 bg-emerald-500 text-slate-950 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded shadow-md">
                        {product.tag}
                      </span>
                    )}

                    <button
                      onClick={() => onToggleWishlist(product)}
                      className={`absolute top-3 right-3 p-2 rounded-sm backdrop-blur-md transition-all ${
                        isWishlisted
                          ? 'bg-rose-500 text-white'
                          : 'bg-slate-950/70 text-slate-300 hover:text-rose-400'
                      }`}
                      title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                    </button>

                    {product.isLiveStock && (
                      <span className="absolute bottom-3 left-3 text-[10px] font-mono text-cyan-300 bg-cyan-950/90 px-2 py-0.5 rounded border border-cyan-500/30 backdrop-blur-sm">
                        Quarantined Live
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 mb-1">
                        <span className="truncate">{product.subCategory || product.category}</span>
                        <span className="flex items-center gap-1 text-amber-400 flex-shrink-0">
                          <Star className="w-3 h-3 fill-current" />
                          <span>{product.rating}</span>
                        </span>
                      </div>

                      <h3 
                        onClick={() => onQuickView(product)}
                        className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors cursor-pointer line-clamp-1"
                      >
                        {product.name}
                      </h3>

                      <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Price & Action Buttons */}
                    <div className="pt-3 border-t border-slate-800/80 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-base font-black text-white">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          {product.originalPrice && (
                            <span className="text-[11px] text-slate-500 line-through ml-2">
                              ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                        {product.inStock ? (
                          <span className="text-[10px] font-mono text-emerald-400">In Stock</span>
                        ) : (
                          <span className="text-[10px] font-mono text-amber-400">Check Stock</span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onQuickView(product)}
                          className="py-2 px-3 rounded-sm bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold text-center transition-all flex items-center justify-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Details</span>
                        </button>

                        <button
                          onClick={() => onAddToCart(product)}
                          className="py-2 px-3 rounded-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black text-center transition-all flex items-center justify-center gap-1 shadow-md shadow-emerald-500/20"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* List Mode */
          <div className="space-y-4">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all group"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                      }}
                      className="w-24 h-24 rounded-xl object-cover border border-slate-800 flex-shrink-0 bg-slate-950"
                    />
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-emerald-400 uppercase">
                        {product.subCategory || product.category}
                      </div>
                      <h3 
                        onClick={() => onQuickView(product)}
                        className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors cursor-pointer"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-400 max-w-lg line-clamp-1">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                    <div className="text-right">
                      <div className="text-lg font-black text-white">
                        ₹{product.price.toLocaleString('en-IN')}
                      </div>
                      <div className="text-[10px] font-mono text-emerald-400">
                        {product.inStock ? 'Ready for Dispatch' : 'Check Store Stock'}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onToggleWishlist(product)}
                        className={`p-2.5 rounded-sm border ${
                          isWishlisted ? 'bg-rose-500 text-white border-rose-500' : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </button>

                      <button
                        onClick={() => onQuickView(product)}
                        className="px-3.5 py-2.5 rounded-sm bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                      >
                        View Specs
                      </button>

                      <button
                        onClick={() => onAddToCart(product)}
                        className="px-4 py-2.5 rounded-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-md"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
