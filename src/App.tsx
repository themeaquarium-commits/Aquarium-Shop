import React, { useState, useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CustomAquariumPage } from './pages/CustomAquariumPage';
import { AquascapingPage } from './pages/AquascapingPage';
import { MarineReefPage } from './pages/MarineReefPage';
import { KoiPondPage } from './pages/KoiPondPage';
import { AmcMaintenancePage } from './pages/AmcMaintenancePage';
import { CommercialAquariumPage } from './pages/CommercialAquariumPage';
import { LocationsPage } from './pages/LocationsPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductPage } from './pages/ProductPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Modals & Drawers
import { ProductDetailModal } from './components/ProductDetailModal';
import { ProjectEnquiryModal } from './components/ProjectEnquiryModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { PolicyModal, PolicyType } from './components/PolicyModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { Product, CartItem } from './types';

function AppContent() {
  const { path, queryParams, navigate } = useRouter();

  // Search state
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

  // Determine which page component to render based on URL route
  const renderCurrentPage = () => {
    switch (path) {
      case '/':
        return (
          <HomePage
            onQuickView={(p) => setQuickViewProduct(p)}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
            onCheckLiveStock={handleCheckLiveStock}
          />
        );

      case '/shop':
        return (
          <ShopPage
            selectedCategory={queryParams.get('category')}
            onSelectCategory={(cat) => {
              if (cat) {
                navigate(`/shop?category=${encodeURIComponent(cat)}`);
              } else {
                navigate('/shop');
              }
            }}
            onQuickView={(p) => setQuickViewProduct(p)}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
          />
        );

      case '/services':
        return (
          <ServicesPage
            onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
          />
        );

      case '/about':
        return (
          <AboutPage
            onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
            onNavigateTab={(tab) => navigate(tab === 'home' ? '/' : '/' + tab)}
          />
        );

      case '/contact':
        return <ContactPage />;

      case '/custom-aquarium-chennai':
        return (
          <CustomAquariumPage
            onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
          />
        );

      case '/aquascaping-chennai':
        return (
          <AquascapingPage
            onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
          />
        );

      case '/marine-reef-aquarium-chennai':
        return (
          <MarineReefPage
            onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
          />
        );

      case '/koi-pond-design-chennai':
        return (
          <KoiPondPage
            onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
          />
        );

      case '/aquarium-amc-maintenance-chennai':
        return (
          <AmcMaintenancePage
            onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
          />
        );

      case '/commercial-corporate-aquariums':
        return (
          <CommercialAquariumPage
            onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
          />
        );

      case '/aquarium-chennai-locations':
      case '/aquarium-adyar-chennai':
      case '/aquarium-ecr-chennai':
      case '/aquarium-omr-chennai':
      case '/aquarium-anna-nagar-chennai':
      case '/aquarium-velachery-chennai':
        return (
          <LocationsPage
            onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
          />
        );

      default:
        // Handle dynamic category route: /category/:slug
        if (path.startsWith('/category/')) {
          const slug = path.replace('/category/', '');
          return (
            <CategoryPage
              categorySlug={slug}
              onQuickView={(p) => setQuickViewProduct(p)}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
              onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
            />
          );
        }

        // Handle dynamic product route: /product/:id
        if (path.startsWith('/product/')) {
          const id = path.replace('/product/', '');
          return (
            <ProductPage
              productId={id}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
              onOpenProjectEnquiry={() => setIsProjectEnquiryOpen(true)}
            />
          );
        }

        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030910] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950 font-sans antialiased">
      {/* Global Header */}
      <Header
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
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer
        onOpenCategory={(cat) => navigate(`/shop?category=${encodeURIComponent(cat)}`)}
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

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
