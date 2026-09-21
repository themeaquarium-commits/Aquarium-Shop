import React, { useState, useMemo } from 'react';
import { 
  SlidersHorizontal, 
  ShoppingBag, 
  Heart, 
  Star, 
  Eye, 
  MessageCircle, 
  Sparkles, 
  Check, 
  ArrowLeft,
  ArrowRight,
  Filter,
  ShieldCheck,
  Truck,
  Layers,
  ChevronRight
} from 'lucide-react';
import { Link, useRouter } from '../context/RouterContext';
import { CATEGORIES_DATA } from '../data/categories';
import { PRODUCTS_DATA } from '../data/products';
import { Product } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';

interface CategoryPageProps {
  categorySlug: string;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onOpenProjectEnquiry: () => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categorySlug,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onOpenProjectEnquiry,
}) => {
  const { navigate } = useRouter();

  // Find category by slug or id
  const category = useMemo(() => {
    return (
      CATEGORIES_DATA.find((c) => c.slug === categorySlug || c.id === categorySlug) ||
      CATEGORIES_DATA[0]
    );
  }, [categorySlug]);

  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [addedNoticeId, setAddedNoticeId] = useState<string | null>(null);

  // Filter products for this category
  const categoryProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => p.category === category.id || p.category === category.slug);
  }, [category.id, category.slug]);

  // Extract unique subcategories
  const subCategories = useMemo(() => {
    const subs = new Set<string>();
    categoryProducts.forEach((p) => {
      if (p.subCategory) subs.add(p.subCategory);
    });
    return Array.from(subs);
  }, [categoryProducts]);

  // Apply filters and sorting
  const filteredProducts = useMemo(() => {
    return categoryProducts
      .filter((p) => {
        if (selectedSubCategory && p.subCategory !== selectedSubCategory) {
          return false;
        }
        if (onlyInStock && !p.inStock) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [categoryProducts, selectedSubCategory, onlyInStock, sortBy]);

  const handleAddToCart = (product: Product) => {
    onAddToCart(product, 1);
    setAddedNoticeId(product.id);
    setTimeout(() => setAddedNoticeId(null), 1800);
  };

  const handleWhatsAppEnquire = (product: Product) => {
    const text = encodeURIComponent(
      `Hi Theme Aquarium Chennai! I am viewing "${product.name}" in the ${category.name} section (₹${product.price}). Please confirm live stock and delivery in Chennai.`
    );
    window.open(`https://wa.me/919884181562?text=${text}`, '_blank');
  };

  // Structured breadcrumb items
  const breadcrumbItems = [
    { name: 'Theme Aquarium', path: '/' },
    { name: 'Products Catalog', path: '/shop' },
    { name: category.name, path: `/category/${category.slug}` },
  ];

  // CollectionPage JSON-LD
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} | Theme Aquarium Chennai`,
    description: category.description,
    url: `https://themeaquarium.com/category/${category.slug}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: categoryProducts.map((p, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://themeaquarium.com/product/${p.id}`,
        name: p.name,
      })),
    },
  };

  return (
    <div className="py-8 bg-[#050c12] min-h-screen text-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-10">
        
        {/* Category Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 bg-gradient-to-r from-[#030910] via-[#071724] to-[#04121d] p-8 sm:p-12 shadow-2xl">
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/25">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Specialist Category • {category.itemCountText}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                {category.name}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Check className="w-4 h-4" /> 100% Guaranteed Healthy Stock
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Truck className="w-4 h-4 text-emerald-400" /> Fast Delivery Across Chennai
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Adyar Store Pickup Available
                </span>
              </div>
            </div>

            {/* Category Visual Thumbnail */}
            <div className="relative w-full lg:w-72 h-44 rounded-2xl overflow-hidden border border-emerald-500/30 shadow-xl flex-shrink-0">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-mono font-bold text-emerald-300 bg-black/60 px-2.5 py-1 rounded backdrop-blur-md">
                  {categoryProducts.length} Products Available
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Sort Bar */}
        <div className="bg-[#09151f] border border-slate-800/80 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Subcategory Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs">
            <button
              onClick={() => setSelectedSubCategory(null)}
              className={`px-3.5 py-1.5 rounded-lg font-bold uppercase text-[11px] whitespace-nowrap transition-all ${
                selectedSubCategory === null
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All {category.name} ({categoryProducts.length})
            </button>
            {subCategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubCategory(sub)}
                className={`px-3 py-1.5 rounded-lg font-medium text-[11px] whitespace-nowrap transition-all ${
                  selectedSubCategory === sub
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* Controls: Stock toggle & Sorting */}
          <div className="flex items-center gap-3 flex-wrap">
            <label className="flex items-center gap-2 text-xs font-mono text-slate-300 cursor-pointer select-none bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
              <input
                type="checkbox"
                checked={onlyInStock}
                onChange={(e) => setOnlyInStock(e.target.checked)}
                className="w-3.5 h-3.5 text-emerald-500 rounded border-slate-700 focus:ring-emerald-500 focus:ring-offset-0 bg-slate-800"
              />
              <span>In-Stock Only</span>
            </label>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-emerald-500 font-mono"
            >
              <option value="featured">Featured Order</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#09151f] rounded-2xl border border-slate-800/80 p-8 space-y-4">
            <p className="text-slate-400 text-sm">
              No products found matching the current filters in this category.
            </p>
            <button
              onClick={() => {
                setSelectedSubCategory(null);
                setOnlyInStock(false);
              }}
              className="px-4 py-2 bg-emerald-500 text-slate-950 rounded-lg text-xs font-bold hover:bg-emerald-400 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              const isJustAdded = addedNoticeId === product.id;

              return (
                <div
                  key={product.id}
                  className="group relative bg-[#09151f] rounded-2xl border border-slate-800 hover:border-emerald-500/50 overflow-hidden shadow-lg hover:shadow-emerald-950/20 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                    <Link to={`/product/${product.id}`} className="block w-full h-full">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/planted-stream-waterfall.jpg';
                        }}
                      />
                    </Link>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start pointer-events-none">
                      {product.tag && (
                        <span className="text-[10px] font-mono font-bold text-white bg-emerald-600 px-2 py-0.5 rounded shadow">
                          {product.tag}
                        </span>
                      )}
                      {product.isLiveStock && (
                        <span className="text-[9px] font-mono font-bold text-cyan-300 bg-cyan-950/90 border border-cyan-500/30 px-2 py-0.5 rounded backdrop-blur-sm">
                          Live Quarantined
                        </span>
                      )}
                    </div>

                    {/* Action buttons (Wishlist & Quick View) */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      <button
                        onClick={() => onToggleWishlist(product)}
                        className={`p-2 rounded-lg backdrop-blur-md transition-all ${
                          isWishlisted
                            ? 'bg-rose-500 text-white shadow-lg'
                            : 'bg-black/60 text-slate-300 hover:text-rose-400 hover:bg-black/80'
                        }`}
                        title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                      >
                        <Heart className="w-3.5 h-3.5 fill-current" />
                      </button>
                      <button
                        onClick={() => onQuickView(product)}
                        className="p-2 rounded-lg bg-black/60 text-slate-300 hover:text-emerald-400 hover:bg-black/80 backdrop-blur-md transition-all"
                        title="Quick View"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Stock Status Pill */}
                    <div className="absolute bottom-3 left-3">
                      {product.inStock ? (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          In Stock (Chennai)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-500/30 backdrop-blur-sm">
                          Order On Request
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span className="text-emerald-400 font-semibold">{product.subCategory || category.name}</span>
                        <span className="flex items-center gap-1 text-amber-400">
                          <Star className="w-3 h-3 fill-current" /> {product.rating} ({product.reviewCount})
                        </span>
                      </div>

                      <Link to={`/product/${product.id}`} className="block group-hover:text-emerald-300 transition-colors">
                        <h2 className="text-base font-bold text-white line-clamp-2 leading-snug">
                          {product.name}
                        </h2>
                      </Link>

                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Pricing & Buttons */}
                    <div className="pt-3 border-t border-slate-800/80 space-y-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-white">
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

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                            isJustAdded
                              ? 'bg-emerald-400 text-slate-950 font-black'
                              : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                          }`}
                        >
                          {isJustAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" /> Added!
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
                            </>
                          )}
                        </button>

                        <Link
                          to={`/product/${product.id}`}
                          className="py-2 px-3 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all flex items-center justify-center gap-1 text-center"
                        >
                          Details <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <button
                        onClick={() => handleWhatsAppEnquire(product)}
                        className="w-full py-1.5 px-3 rounded-lg text-[11px] font-mono font-semibold bg-emerald-950/40 hover:bg-emerald-950/80 text-emerald-400 border border-emerald-500/20 transition-all flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Stock Check
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Other Categories Strip */}
        <div className="pt-12 border-t border-slate-800/80 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">
                Explore Other Aquatic Categories
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Browse our complete specialized collection at Theme Aquarium Adyar
              </p>
            </div>
            <Link
              to="/shop"
              className="text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
            >
              All Categories <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {CATEGORIES_DATA.filter((c) => c.id !== category.id).slice(0, 5).map((otherCat) => (
              <Link
                key={otherCat.id}
                to={`/category/${otherCat.slug}`}
                className="group p-3 rounded-xl bg-[#09151f] border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center gap-3"
              >
                <img
                  src={otherCat.image}
                  alt={otherCat.name}
                  className="w-10 h-10 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-200 group-hover:text-emerald-300 truncate">
                    {otherCat.name}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {otherCat.itemCountText}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
