import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CATEGORIES_DATA } from '../src/data/categories.ts';
import { PRODUCTS_DATA } from '../src/data/products.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const publicDir = path.resolve(__dirname, '../public');

// Core and location routes
const staticRoutes = [
  {
    path: 'shop',
    title: 'Aquarium Shop Chennai | Exotic Fish, Plants & Aquascaping Gear | Theme Aquarium',
    description: 'Buy premium quarantined freshwater fish, sterile in-vitro aquatic plants, ADA soils, Seiryu stones, Starphire tanks, CO2 kits & filters in Adyar, Chennai.',
    canonical: 'https://themeaquarium.com/shop',
    image: 'https://themeaquarium.com/images/fancy-guppy-planted-schoolers.jpg',
  },
  {
    path: 'services',
    title: 'Aquarium Services & AMC Maintenance Chennai | Theme Aquarium',
    description: 'Professional aquarium installation, custom tank engineering, biological water testing & bi-weekly AMC maintenance services across Chennai residences & offices.',
    canonical: 'https://themeaquarium.com/services',
    image: 'https://themeaquarium.com/images/planted-stream-waterfall.jpg',
  },
  {
    path: 'about',
    title: 'About Theme Aquarium Chennai | Master Aquascapers & Custom Fabricators',
    description: 'Explore Theme Aquarium Adyar – Over 15 years of aquatic craftsmanship, German silicone bonding, strict fish quarantine and award-winning aquascapes in Chennai.',
    canonical: 'https://themeaquarium.com/about',
    image: 'https://themeaquarium.com/images/theme-aquarium-logo.png',
  },
  {
    path: 'contact',
    title: 'Contact Theme Aquarium Adyar Chennai | Store Directions & WhatsApp',
    description: 'Visit Theme Aquarium in Indira Nagar, Adyar, Chennai. Open 7 days a week. Call or WhatsApp +91 98841 81562 for stock inquiries and site consultations.',
    canonical: 'https://themeaquarium.com/contact',
    image: 'https://themeaquarium.com/images/hero-aquarium.jpg',
  },
  {
    path: 'custom-aquarium-chennai',
    title: 'Custom Aquarium Fabrication Chennai | Starphire Glass Built-In Tanks',
    description: 'Custom built-in wall aquariums, room dividers & Starphire ultra-clear glass tanks engineered with German silicone in Chennai. Turnkey service for luxury homes & offices.',
    canonical: 'https://themeaquarium.com/custom-aquarium-chennai',
    image: 'https://themeaquarium.com/images/custom-starphire-tank.jpg',
  },
  {
    path: 'aquascaping-chennai',
    title: 'Nature Aquarium Aquascaping Chennai | Iwagumi & Planted Tank Studio',
    description: 'Artisanal aquascaping in Chennai. Iwagumi & Ryoboku nature aquariums designed with Seiryu stone, Spiderwood, ADA substrate, CO2 injection and tissue-culture flora.',
    canonical: 'https://themeaquarium.com/aquascaping-chennai',
    image: 'https://themeaquarium.com/images/nature-aquascaping.jpg',
  },
  {
    path: 'marine-reef-aquarium-chennai',
    title: 'Marine Reef Aquarium Setup Chennai | Saltwater Coral & Clownfish Tanks',
    description: 'Turnkey saltwater reef systems in Chennai. SPS/LPS corals, Ocellaris clownfish biotopes, sump filtration, DC protein skimmers & automated water chemistry balancing.',
    canonical: 'https://themeaquarium.com/marine-reef-aquarium-chennai',
    image: 'https://themeaquarium.com/images/saltwater-clownfish-biotope.jpg',
  },
  {
    path: 'koi-pond-design-chennai',
    title: 'Koi Pond Design & Biological Filtration Chennai | Luxury Outdoor Waterfalls',
    description: 'Architectural Japanese Koi ponds, garden waterfalls & multi-stage biological vortex filtration systems built for luxury villas & farmhouses in ECR & Chennai.',
    canonical: 'https://themeaquarium.com/koi-pond-design-chennai',
    image: 'https://themeaquarium.com/images/luxury-koi-pond-waterfall.jpg',
  },
  {
    path: 'aquarium-amc-maintenance-chennai',
    title: 'Aquarium AMC & Maintenance Service Chennai | Bi-Weekly Cleaning',
    description: 'Hassle-free aquarium maintenance contracts (AMC) in Chennai. Professional algae removal, 30% water change, canister filter servicing & liquid chemical water testing.',
    canonical: 'https://themeaquarium.com/aquarium-amc-maintenance-chennai',
    image: 'https://themeaquarium.com/images/canister-filter-system.jpg',
  },
  {
    path: 'commercial-corporate-aquariums',
    title: 'Commercial & Corporate Aquariums Chennai | Hotels, Offices & Architects',
    description: 'Statement aquariums for corporate lobbies, executive boardrooms, luxury hotel receptions and restaurants in Chennai. Complete MEP coordination and turnkey AMC support.',
    canonical: 'https://themeaquarium.com/commercial-corporate-aquariums',
    image: 'https://themeaquarium.com/images/custom-starphire-tank.jpg',
  },
  {
    path: 'aquarium-chennai-locations',
    title: 'Theme Aquarium Service Locations Chennai | Adyar, ECR, OMR & Beyond',
    description: 'Discover Theme Aquarium service coverage across Chennai: Adyar, ECR, OMR, Anna Nagar, Velachery, Guindy, and T. Nagar. Rapid site visits and express delivery.',
    canonical: 'https://themeaquarium.com/aquarium-chennai-locations',
    image: 'https://themeaquarium.com/images/hero-aquarium.jpg',
  },
  {
    path: 'aquarium-adyar-chennai',
    title: 'Theme Aquarium Adyar Chennai | Flagship Store, Livestock & Aquascaping',
    description: 'Visit Theme Aquarium flagship studio in Indira Nagar, Adyar. Premium aquascaping displays, exotic quarantined fish, tissue plants & custom tank consultations.',
    canonical: 'https://themeaquarium.com/aquarium-adyar-chennai',
    image: 'https://themeaquarium.com/images/hero-aquarium.jpg',
  },
  {
    path: 'aquarium-ecr-chennai',
    title: 'Custom Aquariums & Koi Ponds ECR Chennai | Luxury Villa Specialists',
    description: 'Custom luxury wall aquariums, marine reef systems & outdoor Japanese koi ponds designed for beachfront villas along East Coast Road (ECR), Chennai.',
    canonical: 'https://themeaquarium.com/aquarium-ecr-chennai',
    image: 'https://themeaquarium.com/images/luxury-koi-pond-waterfall.jpg',
  },
  {
    path: 'aquarium-omr-chennai',
    title: 'Aquarium Services OMR Chennai | IT Parks, Apartments & Maintenance',
    description: 'Aquarium design, setup and bi-weekly AMC maintenance for apartments, corporate offices and tech parks along Old Mahabalipuram Road (OMR), Chennai.',
    canonical: 'https://themeaquarium.com/aquarium-omr-chennai',
    image: 'https://themeaquarium.com/images/canister-filter-system.jpg',
  },
  {
    path: 'aquarium-anna-nagar-chennai',
    title: 'Custom Aquariums & AMC Anna Nagar Chennai | Theme Aquarium',
    description: 'Premium custom aquarium fabrication, aquascaping scapes and scheduled AMC maintenance visits across residential homes and clinics in Anna Nagar, Chennai.',
    canonical: 'https://themeaquarium.com/aquarium-anna-nagar-chennai',
    image: 'https://themeaquarium.com/images/cave-hardscape-aquascape.jpg',
  },
  {
    path: 'aquarium-velachery-chennai',
    title: 'Aquarium Shop & Maintenance Velachery Chennai | Theme Aquarium',
    description: 'Turnkey aquarium design, livestock supply and reliable cleaning AMC services for residences and businesses in Velachery, Chennai.',
    canonical: 'https://themeaquarium.com/aquarium-velachery-chennai',
    image: 'https://themeaquarium.com/images/fancy-guppy-aquarium.jpg',
  },
];

// Generate dynamic routes for all categories
const categoryRoutes = CATEGORIES_DATA.map((category) => ({
  path: `category/${category.slug}`,
  title: `${category.name} Chennai | Live Stock, Plants & Aquascaping Gear | Theme Aquarium`,
  description: `${category.description} Shop online or visit our Indira Nagar, Adyar store in Chennai. Doorstep delivery available.`,
  canonical: `https://themeaquarium.com/category/${category.slug}`,
  image: `https://themeaquarium.com${category.image}`,
}));

// Generate dynamic routes for all products
const productRoutes = PRODUCTS_DATA.map((product) => ({
  path: `product/${product.id}`,
  title: `${product.name} | Theme Aquarium Chennai`,
  description: `${product.description} Buy online at Theme Aquarium Adyar with live arrival guarantee and express Chennai delivery.`,
  canonical: `https://themeaquarium.com/product/${product.id}`,
  image: `https://themeaquarium.com${product.image}`,
}));

const allRoutes = [...staticRoutes, ...categoryRoutes, ...productRoutes];

function escapeXml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n\n`;

  // Root Homepage
  xml += `  <!-- Homepage -->\n`;
  xml += `  <url>\n`;
  xml += `    <loc>https://themeaquarium.com/</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>daily</changefreq>\n`;
  xml += `    <priority>1.0</priority>\n`;
  xml += `    <image:image>\n`;
  xml += `      <image:loc>https://themeaquarium.com/images/hero-aquarium.jpg</image:loc>\n`;
  xml += `      <image:title>Theme Aquarium Chennai - Luxury Custom Aquariums, Aquascaping &amp; Marine Reefs</image:title>\n`;
  xml += `    </image:image>\n`;
  xml += `  </url>\n\n`;

  // Static routes
  xml += `  <!-- Main Pages & Specialist Services -->\n`;
  for (const route of staticRoutes) {
    xml += `  <url>\n`;
    xml += `    <loc>${route.canonical}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>${route.path === 'shop' || route.path === 'services' ? '0.9' : '0.85'}</priority>\n`;
    if (route.image) {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${route.image}</image:loc>\n`;
      xml += `      <image:title>${escapeXml(route.title)}</image:title>\n`;
      xml += `    </image:image>\n`;
    }
    xml += `  </url>\n`;
  }
  xml += `\n`;

  // Category Pages
  xml += `  <!-- Category Pages (Breadcrumb: Theme Aquarium / Products Catalog / [Category]) -->\n`;
  for (const catRoute of categoryRoutes) {
    xml += `  <url>\n`;
    xml += `    <loc>${catRoute.canonical}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>daily</changefreq>\n`;
    xml += `    <priority>0.85</priority>\n`;
    if (catRoute.image) {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${catRoute.image}</image:loc>\n`;
      xml += `      <image:title>${escapeXml(catRoute.title)}</image:title>\n`;
      xml += `    </image:image>\n`;
    }
    xml += `  </url>\n`;
  }
  xml += `\n`;

  // Product Pages
  xml += `  <!-- Individual Product Pages (Breadcrumb: Theme Aquarium / Products Catalog / [Category] / [Product]) -->\n`;
  for (const prodRoute of productRoutes) {
    xml += `  <url>\n`;
    xml += `    <loc>${prodRoute.canonical}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    if (prodRoute.image) {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${prodRoute.image}</image:loc>\n`;
      xml += `      <image:title>${escapeXml(prodRoute.title)}</image:title>\n`;
      xml += `    </image:image>\n`;
    }
    xml += `  </url>\n`;
  }
  xml += `\n`;

  xml += `</urlset>\n`;

  // Write to public/sitemap.xml and dist/sitemap.xml
  const publicSitemap = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(publicSitemap, xml, 'utf-8');

  if (fs.existsSync(distDir)) {
    const distSitemap = path.join(distDir, 'sitemap.xml');
    fs.writeFileSync(distSitemap, xml, 'utf-8');
  }

  console.log(`Generated sitemap.xml with 1 home + ${staticRoutes.length} static + ${categoryRoutes.length} categories + ${productRoutes.length} products = ${1 + allRoutes.length} total indexed URLs!`);
}

function generateRoutes() {
  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.warn('dist/index.html not found, skipping route generation.');
    return;
  }

  const baseHtml = fs.readFileSync(indexPath, 'utf-8');

  for (const route of allRoutes) {
    const routeDir = path.join(distDir, route.path);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    let routeHtml = baseHtml;

    // Replace Title
    routeHtml = routeHtml.replace(
      /<title>.*?<\/title>/i,
      `<title>${route.title}</title>`
    );

    // Replace Meta Description
    routeHtml = routeHtml.replace(
      /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="description" content="${route.description}" />`
    );

    // Replace Canonical Link
    routeHtml = routeHtml.replace(
      /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
      `<link rel="canonical" href="${route.canonical}" />`
    );

    // Replace OpenGraph Title
    routeHtml = routeHtml.replace(
      /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:title" content="${route.title}" />`
    );

    // Replace OpenGraph Description
    routeHtml = routeHtml.replace(
      /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:description" content="${route.description}" />`
    );

    // Replace OpenGraph URL
    routeHtml = routeHtml.replace(
      /<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:url" content="${route.canonical}" />`
    );

    // Replace OpenGraph Image if available
    if (route.image) {
      routeHtml = routeHtml.replace(
        /<meta\s+property=["']og:image["']\s+content=["'].*?["']\s*\/?>/i,
        `<meta property="og:image" content="${route.image}" />`
      );
    }

    const outPath = path.join(routeDir, 'index.html');
    fs.writeFileSync(outPath, routeHtml, 'utf-8');
  }

  console.log(`Successfully generated ${allRoutes.length} multi-page route directories in dist/!`);
  generateSitemap();
}

generateRoutes();
