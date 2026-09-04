import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { FeaturedProducts } from './components/FeaturedProducts';
import { AquascapingSection } from './components/AquascapingSection';
import { CustomTankSection } from './components/CustomTankSection';
import { FishShowcase } from './components/FishShowcase';
import { AquaticPlantsSection } from './components/AquaticPlantsSection';
import { EquipmentSection } from './components/EquipmentSection';
import { MarineSection } from './components/MarineSection';
import { TerrariumSection } from './components/TerrariumSection';
import { WhyUsSection } from './components/WhyUsSection';
import { B2BSection } from './components/B2BSection';
import { SeoArchitecturalSection } from './components/SeoArchitecturalSection';
import { ServicesSection } from './components/ServicesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { VisitStoreSection } from './components/VisitStoreSection';
import { Footer } from './components/Footer';

// Pages
import { ShopPage } from './pages/ShopPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Modals & Drawers
import { ProductDetailModal } from './components/ProductDetailModal';
import { ProjectEnquiryModal } from './components/ProjectEnquiryModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { PolicyModal, PolicyType } from './components/PolicyModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { Product, CartItem } from './types';
import { PRODUCTS_DATA } from './data/products';

export default function App() {
  // Navigation
  const [activeTab, setActiveTab] = useState<'home' | 'shop' | 'services' | 'about' | 'contact'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Cart State with localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('theme_aquarium_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist State with localStorage
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('theme_aquarium_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modals & Drawers
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isProjectEnquiryOpen, setIsProjectEnquiryOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [policyType, setPolicyType] = useState<PolicyType>(null);

  // Save cart & wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('theme_aquarium_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('theme_aquarium_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Scroll to top on tab change
  const handleNavigateTab = (tab: 'home' | 'shop' | 'services' | 'about' | 'contact') => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (catId: string | null) => {
    setSelectedCategory(catId);
    setActiveTab('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart Actions
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist Actions
  const handleToggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlist(prev => prev.filter(p => p.id !== productId));
  };

  const handleClearWishlist = () => {
    setWishlist([]);
  };

  const handleCheckLiveStock = (fishName: string) => {
    const text = encodeURIComponent(
      `Hi Theme Aquarium! I would like to check current store availability and request video/photos for: "${fishName}".`
    );
    window.open(`https://wa.me/919884181562?text=${text}`, '_blank');
  };

  const wishlistIds = wishlist.map(p => p.id);
  const cartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#030910] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950 font-sans antialiased">
      
      {/* Global Header */}
      <Header
        activeTab={activeTab}
        onNavigateTab={handleNavigateTab}
        onSelectCategory={handleSelectCategory}
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Page Routing Switch */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero
              onExploreShop={() => handleNavigateTab('shop')}
              onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
            />

            <CategoryGrid onSelectCategory={handleSelectCategory} />

            <FeaturedProducts
              onQuickView={(p) => setQuickViewProduct(p)}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
              onViewAll={() => handleNavigateTab('shop')}
            />

            <AquascapingSection
              onExploreAquascaping={() => handleSelectCategory('aquascaping')}
              onOpenCustomQuote={() => setIsProjectEnquiryOpen(true)}
            />

            <CustomTankSection
              onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
            />

            <FishShowcase
              onQuickView={(p) => setQuickViewProduct(p)}
              onCheckLiveStock={handleCheckLiveStock}
            />

            <AquaticPlantsSection
              onExplorePlants={() => handleSelectCategory('aquatic-plants')}
            />

            <EquipmentSection
              onExploreEquipment={() => handleSelectCategory('filtration-systems')}
            />

            <MarineSection
              onExploreMarine={() => handleSelectCategory('marine-aquariums')}
              onEnquireMarine={() => setIsProjectEnquiryOpen(true)}
            />

            <TerrariumSection
              onExploreTerrariums={() => handleSelectCategory('terrariums')}
            />

            <WhyUsSection />

            <B2BSection
              onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
            />

            <SeoArchitecturalSection
              onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
            />

            <ServicesSection
              onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
            />

            <ReviewsSection />

            <VisitStoreSection />
          </>
        )}

        {activeTab === 'shop' && (
          <ShopPage
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
            onQuickView={(p) => setQuickViewProduct(p)}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
          />
        )}

        {activeTab === 'services' && (
          <ServicesPage
            onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
            onNavigateTab={handleNavigateTab}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigateTab={handleNavigateTab}
        onOpenCategory={handleSelectCategory}
        onOpenPolicy={(p) => setPolicyType(p)}
        onOpenCustomTank={() => setIsProjectEnquiryOpen(true)}
      />

      {/* Persistent Floating WhatsApp Helper */}
      <FloatingWhatsApp />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
      />

      {/* Project Enquiry Modal */}
      <ProjectEnquiryModal
        isOpen={isProjectEnquiryOpen}
        onClose={() => setIsProjectEnquiryOpen(false)}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlist}
        onAddToCart={handleAddToCart}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onClearWishlist={handleClearWishlist}
      />

      {/* Policy Modal */}
      <PolicyModal
        type={policyType}
        isOpen={!!policyType}
        onClose={() => setPolicyType(null)}
      />

    </div>
  );
}
