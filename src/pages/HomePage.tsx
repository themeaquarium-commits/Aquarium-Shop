import React from 'react';
import { Hero } from '../components/Hero';
import { CategoryGrid } from '../components/CategoryGrid';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { AquascapingSection } from '../components/AquascapingSection';
import { CustomTankSection } from '../components/CustomTankSection';
import { FishShowcase } from '../components/FishShowcase';
import { AquaticPlantsSection } from '../components/AquaticPlantsSection';
import { EquipmentSection } from '../components/EquipmentSection';
import { MarineSection } from '../components/MarineSection';
import { TerrariumSection } from '../components/TerrariumSection';
import { WhyUsSection } from '../components/WhyUsSection';
import { B2BSection } from '../components/B2BSection';
import { SeoArchitecturalSection } from '../components/SeoArchitecturalSection';
import { ServicesSection } from '../components/ServicesSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { VisitStoreSection } from '../components/VisitStoreSection';
import { Product } from '../types';
import { useRouter } from '../context/RouterContext';

interface HomePageProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onOpenProjectEnquiry: () => void;
  onCheckLiveStock: (fishName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onOpenProjectEnquiry,
  onCheckLiveStock,
}) => {
  const { navigate } = useRouter();

  const handleSelectCategory = (catId: string) => {
    navigate(`/shop?category=${encodeURIComponent(catId)}`);
  };

  return (
    <div className="space-y-0">
      <Hero
        onExploreShop={() => navigate('/shop')}
        onOpenProjectEnquiry={onOpenProjectEnquiry}
      />

      <CategoryGrid onSelectCategory={handleSelectCategory} />

      <FeaturedProducts
        onQuickView={onQuickView}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        wishlistIds={wishlistIds}
        onViewAll={() => navigate('/shop')}
      />

      <AquascapingSection
        onExploreAquascaping={() => navigate('/aquascaping-chennai')}
        onOpenCustomQuote={onOpenProjectEnquiry}
      />

      <CustomTankSection
        onOpenProjectEnquiry={onOpenProjectEnquiry}
      />

      <FishShowcase
        onQuickView={onQuickView}
        onCheckLiveStock={onCheckLiveStock}
      />

      <AquaticPlantsSection
        onExplorePlants={() => handleSelectCategory('aquatic-plants')}
      />

      <EquipmentSection
        onExploreEquipment={() => handleSelectCategory('filtration-systems')}
      />

      <MarineSection
        onExploreMarine={() => navigate('/marine-reef-aquarium-chennai')}
        onEnquireMarine={onOpenProjectEnquiry}
      />

      <TerrariumSection
        onExploreTerrariums={() => handleSelectCategory('terrariums')}
      />

      <WhyUsSection />

      <B2BSection
        onOpenProjectEnquiry={onOpenProjectEnquiry}
      />

      <SeoArchitecturalSection
        onOpenProjectEnquiry={onOpenProjectEnquiry}
      />

      <ServicesSection
        onOpenProjectEnquiry={onOpenProjectEnquiry}
      />

      <ReviewsSection />

      <VisitStoreSection />
    </div>
  );
};
