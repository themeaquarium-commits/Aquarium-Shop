import { CATEGORIES_DATA } from '../data/categories';
import { PRODUCTS_DATA } from '../data/products';

export type RoutePath =
  | '/'
  | '/shop'
  | '/services'
  | '/about'
  | '/contact'
  | '/custom-aquarium-chennai'
  | '/aquascaping-chennai'
  | '/marine-reef-aquarium-chennai'
  | '/koi-pond-design-chennai'
  | '/aquarium-amc-maintenance-chennai'
  | '/commercial-corporate-aquariums'
  | '/aquarium-chennai-locations'
  | '/aquarium-adyar-chennai'
  | '/aquarium-ecr-chennai'
  | '/aquarium-omr-chennai'
  | '/aquarium-anna-nagar-chennai'
  | '/aquarium-velachery-chennai'
  | string;

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage: string;
  breadcrumbName: string;
}

export const ROUTES_METADATA: Record<string, RouteMeta> = {
  '/': {
    path: '/',
    title: 'Theme Aquarium Chennai | Custom Aquariums, Marine Reefs & Aquascaping',
    description: 'Theme Aquarium Chennai – Premier specialist in custom luxury aquarium fabrication, planted aquascaping, marine reefs & AMC maintenance in Adyar, ECR, OMR & Chennai.',
    keywords: 'Custom aquarium Chennai, Aquascaping Chennai, Marine aquarium Chennai, Aquarium Adyar, Aquarium ECR, Starphire glass tank',
    canonical: 'https://themeaquarium.com/',
    ogImage: 'https://themeaquarium.com/images/hero-aquarium.jpg',
    breadcrumbName: 'Home',
  },
  '/shop': {
    path: '/shop',
    title: 'Aquarium Shop Chennai | Exotic Fish, Plants & Aquascaping Gear | Theme Aquarium',
    description: 'Buy premium quarantined freshwater fish, sterile in-vitro aquatic plants, ADA soils, Seiryu stones, Starphire tanks, CO2 kits & filters in Adyar, Chennai.',
    keywords: 'Aquarium shop Chennai, Buy aquarium fish Chennai, Aquatic plants Chennai, Aquascaping tools, Substrate, Canister filter',
    canonical: 'https://themeaquarium.com/shop',
    ogImage: 'https://themeaquarium.com/images/fancy-guppy-planted-schoolers.jpg',
    breadcrumbName: 'Shop Catalogue',
  },
  '/services': {
    path: '/services',
    title: 'Aquarium Services & AMC Maintenance Chennai | Theme Aquarium',
    description: 'Professional aquarium installation, custom tank engineering, biological water testing & bi-weekly AMC maintenance services across Chennai residences & offices.',
    keywords: 'Aquarium AMC Chennai, Aquarium maintenance service Chennai, Aquarium cleaning service, Tank installation Chennai',
    canonical: 'https://themeaquarium.com/services',
    ogImage: 'https://themeaquarium.com/images/planted-stream-waterfall.jpg',
    breadcrumbName: 'Services & AMC',
  },
  '/about': {
    path: '/about',
    title: 'About Theme Aquarium Chennai | Master Aquascapers & Custom Fabricators',
    description: 'Explore Theme Aquarium Adyar – Over 15 years of aquatic craftsmanship, German silicone bonding, strict fish quarantine and award-winning aquascapes in Chennai.',
    keywords: 'About Theme Aquarium, Aquarium store Adyar, Aquascaping expert Chennai, Quarantined fish Chennai',
    canonical: 'https://themeaquarium.com/about',
    ogImage: 'https://themeaquarium.com/images/theme-aquarium-logo.png',
    breadcrumbName: 'About Us',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact Theme Aquarium Adyar Chennai | Store Directions & WhatsApp',
    description: 'Visit Theme Aquarium in Indira Nagar, Adyar, Chennai. Open 7 days a week. Call or WhatsApp +91 98841 81562 for stock inquiries and site consultations.',
    keywords: 'Theme Aquarium contact, Aquarium store near me Adyar, Aquarium phone number Chennai, Theme Aquarium address',
    canonical: 'https://themeaquarium.com/contact',
    ogImage: 'https://themeaquarium.com/images/custom-starphire-tank.jpg',
    breadcrumbName: 'Contact & Store Location',
  },
  '/custom-aquarium-chennai': {
    path: '/custom-aquarium-chennai',
    title: 'Custom Aquarium Fabrication Chennai | Starphire Glass Built-In Tanks',
    description: 'Custom built-in wall aquariums, room dividers & Starphire ultra-clear glass tanks engineered with German silicone in Chennai. Turnkey service for luxury homes & offices.',
    keywords: 'Custom aquarium Chennai, Built-in aquarium Chennai, Wall mounted aquarium Chennai, Starphire glass tank Chennai, Custom tank fabrication',
    canonical: 'https://themeaquarium.com/custom-aquarium-chennai',
    ogImage: 'https://themeaquarium.com/images/custom-starphire-tank.jpg',
    breadcrumbName: 'Custom Aquariums',
  },
  '/aquascaping-chennai': {
    path: '/aquascaping-chennai',
    title: 'Nature Aquarium Aquascaping Chennai | Iwagumi & Planted Tank Studio',
    description: 'Artisanal aquascaping in Chennai. Iwagumi & Ryoboku nature aquariums designed with Seiryu stone, Spiderwood, ADA substrate, CO2 injection and tissue-culture flora.',
    keywords: 'Aquascaping Chennai, Nature aquarium Chennai, Iwagumi layout, Planted tank designer Chennai, ADA aqua soil',
    canonical: 'https://themeaquarium.com/aquascaping-chennai',
    ogImage: 'https://themeaquarium.com/images/nature-aquascaping.jpg',
    breadcrumbName: 'Aquascaping Studio',
  },
  '/marine-reef-aquarium-chennai': {
    path: '/marine-reef-aquarium-chennai',
    title: 'Marine Reef Aquarium Setup Chennai | Saltwater Coral & Clownfish Tanks',
    description: 'Turnkey saltwater reef systems in Chennai. SPS/LPS corals, Ocellaris clownfish biotopes, sump filtration, DC protein skimmers & automated water chemistry balancing.',
    keywords: 'Marine aquarium Chennai, Reef tank Chennai, Saltwater aquarium Chennai, Clownfish anemone tank, Sump filtration',
    canonical: 'https://themeaquarium.com/marine-reef-aquarium-chennai',
    ogImage: 'https://themeaquarium.com/images/clownfish-green-anemone.jpg',
    breadcrumbName: 'Marine & Reef Aquariums',
  },
  '/koi-pond-design-chennai': {
    path: '/koi-pond-design-chennai',
    title: 'Koi Pond Design & Biological Filtration Chennai | Luxury Outdoor Waterfalls',
    description: 'Architectural Japanese Koi ponds, garden waterfalls & multi-stage biological vortex filtration systems built for luxury villas & farmhouses in ECR & Chennai.',
    keywords: 'Koi pond Chennai, Koi pond filtration Chennai, Luxury pond design ECR, Japanese koi fish, Garden waterfall Chennai',
    canonical: 'https://themeaquarium.com/koi-pond-design-chennai',
    ogImage: 'https://themeaquarium.com/images/luxury-koi-pond-waterfall.jpg',
    breadcrumbName: 'Koi Pond Engineering',
  },
  '/aquarium-amc-maintenance-chennai': {
    path: '/aquarium-amc-maintenance-chennai',
    title: 'Aquarium AMC & Maintenance Service Chennai | Bi-Weekly Cleaning',
    description: 'Hassle-free aquarium maintenance contracts (AMC) in Chennai. Professional algae removal, 30% water change, canister filter servicing & liquid chemical water testing.',
    keywords: 'Aquarium AMC Chennai, Aquarium cleaning service Chennai, Fish tank maintenance Chennai, Aquarium water testing',
    canonical: 'https://themeaquarium.com/aquarium-amc-maintenance-chennai',
    ogImage: 'https://themeaquarium.com/images/canister-filter-system.jpg',
    breadcrumbName: 'AMC Maintenance',
  },
  '/commercial-corporate-aquariums': {
    path: '/commercial-corporate-aquariums',
    title: 'Commercial & Corporate Aquariums Chennai | Hotels, Offices & Architects',
    description: 'Statement aquariums for corporate lobbies, executive boardrooms, luxury hotel receptions and restaurants in Chennai. Complete MEP coordination and turnkey AMC support.',
    keywords: 'Corporate aquarium Chennai, Hotel aquarium Chennai, Office reception aquarium, Commercial aquarium contractor Chennai',
    canonical: 'https://themeaquarium.com/commercial-corporate-aquariums',
    ogImage: 'https://themeaquarium.com/images/custom-starphire-tank.jpg',
    breadcrumbName: 'Commercial & Corporate',
  },
  '/aquarium-chennai-locations': {
    path: '/aquarium-chennai-locations',
    title: 'Theme Aquarium Service Locations Chennai | Adyar, ECR, OMR & Beyond',
    description: 'Discover Theme Aquarium service coverage across Chennai: Adyar, ECR, OMR, Anna Nagar, Velachery, Guindy, and T. Nagar. Rapid site visits and express delivery.',
    keywords: 'Aquarium Adyar, Aquarium ECR Chennai, Aquarium OMR Chennai, Aquarium Anna Nagar, Aquarium Velachery',
    canonical: 'https://themeaquarium.com/aquarium-chennai-locations',
    ogImage: 'https://themeaquarium.com/images/hero-aquarium.jpg',
    breadcrumbName: 'Chennai Locations',
  },
  '/aquarium-adyar-chennai': {
    path: '/aquarium-adyar-chennai',
    title: 'Theme Aquarium Adyar Chennai | Flagship Store, Livestock & Aquascaping',
    description: 'Visit Theme Aquarium flagship studio in Indira Nagar, Adyar. Premium aquascaping displays, exotic quarantined fish, tissue plants & custom tank consultations.',
    keywords: 'Aquarium Adyar, Aquarium shop Adyar, Theme Aquarium Indira Nagar, Fish shop Adyar Chennai',
    canonical: 'https://themeaquarium.com/aquarium-adyar-chennai',
    ogImage: 'https://themeaquarium.com/images/hero-aquarium.jpg',
    breadcrumbName: 'Adyar Flagship',
  },
  '/aquarium-ecr-chennai': {
    path: '/aquarium-ecr-chennai',
    title: 'Custom Aquariums & Koi Ponds ECR Chennai | Luxury Villa Specialists',
    description: 'Custom luxury wall aquariums, marine reef systems & outdoor Japanese koi ponds designed for beachfront villas along East Coast Road (ECR), Chennai.',
    keywords: 'Aquarium ECR, Koi pond ECR Chennai, Luxury aquarium Neelangarai, Palavakkam aquarium, Akkarai aquarium ECR',
    canonical: 'https://themeaquarium.com/aquarium-ecr-chennai',
    ogImage: 'https://themeaquarium.com/images/luxury-koi-pond-waterfall.jpg',
    breadcrumbName: 'ECR Luxury Projects',
  },
  '/aquarium-omr-chennai': {
    path: '/aquarium-omr-chennai',
    title: 'Aquarium Services OMR Chennai | IT Parks, Apartments & Maintenance',
    description: 'Aquarium design, setup and bi-weekly AMC maintenance for apartments, corporate offices and tech parks along Old Mahabalipuram Road (OMR), Chennai.',
    keywords: 'Aquarium OMR, Aquarium maintenance OMR, Aquarium Sholinganallur, Aquarium Perungudi, Aquarium Thoraipakkam',
    canonical: 'https://themeaquarium.com/aquarium-omr-chennai',
    ogImage: 'https://themeaquarium.com/images/canister-filter-system.jpg',
    breadcrumbName: 'OMR IT Corridor',
  },
  '/aquarium-anna-nagar-chennai': {
    path: '/aquarium-anna-nagar-chennai',
    title: 'Custom Aquariums & AMC Anna Nagar Chennai | Theme Aquarium',
    description: 'Premium custom aquarium fabrication, aquascaping scapes and scheduled AMC maintenance visits across residential homes and clinics in Anna Nagar, Chennai.',
    keywords: 'Aquarium Anna Nagar, Custom aquarium Anna Nagar, Aquarium maintenance Anna Nagar Chennai',
    canonical: 'https://themeaquarium.com/aquarium-anna-nagar-chennai',
    ogImage: 'https://themeaquarium.com/images/cave-hardscape-aquascape.jpg',
    breadcrumbName: 'Anna Nagar',
  },
  '/aquarium-velachery-chennai': {
    path: '/aquarium-velachery-chennai',
    title: 'Aquarium Shop & Maintenance Velachery Chennai | Theme Aquarium',
    description: 'Turnkey aquarium design, livestock supply and reliable cleaning AMC services for residences and businesses in Velachery, Chennai.',
    keywords: 'Aquarium Velachery, Fish tank maintenance Velachery, Aquarium store near Velachery Chennai',
    canonical: 'https://themeaquarium.com/aquarium-velachery-chennai',
    ogImage: 'https://themeaquarium.com/images/fancy-guppy-aquarium.jpg',
    breadcrumbName: 'Velachery',
  },
};

export function getRouteMetadata(path: string): RouteMeta {
  if (ROUTES_METADATA[path]) {
    return ROUTES_METADATA[path];
  }

  // Check for dynamic /category/:slug
  if (path.startsWith('/category/')) {
    const slug = path.replace('/category/', '');
    const category = CATEGORIES_DATA.find((c) => c.slug === slug || c.id === slug);
    if (category) {
      return {
        path,
        title: `${category.name} Chennai | Livestock, Plants & Gear | Theme Aquarium`,
        description: `${category.description} Explore our curated collection in Adyar, Chennai with doorstep delivery and store pickup.`,
        keywords: `${category.name} Chennai, ${category.name} shop Chennai, Theme Aquarium Adyar, Buy ${category.name}`,
        canonical: `https://themeaquarium.com/category/${category.slug}`,
        ogImage: `https://themeaquarium.com${category.image}`,
        breadcrumbName: category.name,
      };
    }
  }

  // Check for dynamic /product/:id
  if (path.startsWith('/product/')) {
    const id = path.replace('/product/', '');
    const product = PRODUCTS_DATA.find((p) => p.id === id);
    if (product) {
      return {
        path,
        title: `${product.name} | Theme Aquarium Chennai`,
        description: `${product.description} Available with Chennai doorstep delivery or in-store pickup at Adyar.`,
        keywords: `${product.name}, Buy ${product.name} Chennai, Aquarium shop Adyar, ${product.category}`,
        canonical: `https://themeaquarium.com/product/${product.id}`,
        ogImage: `https://themeaquarium.com${product.image}`,
        breadcrumbName: product.name,
      };
    }
  }

  return {
    path,
    title: 'Theme Aquarium Chennai | Custom Aquariums, Marine Reefs & Aquascaping',
    description: 'Premier custom aquarium studio in Chennai. Specializing in Starphire glass aquariums, nature aquascaping, live coral reefs, and koi ponds.',
    keywords: 'Theme aquarium Chennai, Custom fish tanks Chennai, Aquascaping Adyar',
    canonical: `https://themeaquarium.com${path === '/' ? '/' : path}`,
    ogImage: 'https://themeaquarium.com/images/hero-aquarium.jpg',
    breadcrumbName: path.replace('/', '').replace(/-/g, ' ') || 'Home',
  };
}

