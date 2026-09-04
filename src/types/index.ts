export interface Product {
  id: string;
  name: string;
  category: string;
  subCategory?: string;
  price: number;
  originalPrice?: number;
  image: string;
  gallery?: string[];
  description: string;
  specifications?: Record<string, string>;
  inStock: boolean;
  isLiveStock?: boolean;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  tag?: string;
  careLevel?: 'Easy' | 'Moderate' | 'Advanced';
}

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  itemCountText: string;
  highlightTag?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  benefits: string[];
  pricingHint: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  source: 'Google' | 'Verified Client';
  tankType?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Fish & Plants' | 'Custom Tanks' | 'Shipping & Visits';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ProjectEnquiry {
  name: string;
  phone: string;
  email: string;
  projectType: 'Home Residential' | 'Corporate Office' | 'Hotel / Restaurant' | 'Villa / Luxury' | 'Landscape / Pond' | 'Other';
  aquariumSize: string;
  ecosystemType: 'Freshwater Planted' | 'Marine Reef' | 'Cichlid / Predator' | 'Terrarium / Paludarium' | 'Custom Sump Tank';
  budgetRange: string;
  location: string;
  details: string;
}
