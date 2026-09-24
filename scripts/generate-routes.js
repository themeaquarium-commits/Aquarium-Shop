import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CATEGORIES_DATA } from '../src/data/categories.ts';
import { PRODUCTS_DATA } from '../src/data/products.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const publicDir = path.resolve(__dirname, '../public');

// Core and specialist service routes
const staticRoutes = [
  {
    path: 'shop',
    title: 'Aquarium Shop Chennai | Exotic Fish, Plants & Aquascaping Gear | Theme Aquarium',
    description: 'Buy premium quarantined freshwater fish, sterile in-vitro aquatic plants, ADA soils, Seiryu stones, Starphire tanks, CO2 kits & filters in Adyar, Chennai.',
    canonical: 'https://themeaquarium.com/shop',
    image: 'https://themeaquarium.com/images/fancy-guppy-planted-schoolers.jpg',
    type: 'shop',
  },
  {
    path: 'services',
    title: 'Aquarium Services & AMC Maintenance Chennai | Theme Aquarium',
    description: 'Professional aquarium installation, custom tank engineering, biological water testing & bi-weekly AMC maintenance services across Chennai residences & offices.',
    canonical: 'https://themeaquarium.com/services',
    image: 'https://themeaquarium.com/images/planted-stream-waterfall.jpg',
    type: 'service',
  },
  {
    path: 'about',
    title: 'About Theme Aquarium Chennai | Master Aquascapers & Custom Fabricators',
    description: 'Explore Theme Aquarium Adyar – Over 15 years of aquatic craftsmanship, German silicone bonding, strict fish quarantine and award-winning aquascapes in Chennai.',
    canonical: 'https://themeaquarium.com/about',
    image: 'https://themeaquarium.com/images/theme-aquarium-logo.png',
    type: 'info',
  },
  {
    path: 'contact',
    title: 'Contact Theme Aquarium Adyar Chennai | Store Directions & WhatsApp',
    description: 'Visit Theme Aquarium in Indira Nagar, Adyar, Chennai. Open 7 days a week. Call or WhatsApp +91 98841 81562 for stock inquiries and site consultations.',
    canonical: 'https://themeaquarium.com/contact',
    image: 'https://themeaquarium.com/images/hero-aquarium.jpg',
    type: 'info',
  },
  {
    path: 'custom-aquarium-chennai',
    title: 'Custom Aquarium Fabrication Chennai | Starphire Glass Built-In Tanks',
    description: 'Custom built-in wall aquariums, room dividers & Starphire ultra-clear glass tanks engineered with German silicone in Chennai. Turnkey service for luxury homes & offices.',
    canonical: 'https://themeaquarium.com/custom-aquarium-chennai',
    image: 'https://themeaquarium.com/images/custom-starphire-tank.jpg',
    type: 'service',
  },
  {
    path: 'aquascaping-chennai',
    title: 'Nature Aquarium Aquascaping Chennai | Iwagumi & Planted Tank Studio',
    description: 'Artisanal aquascaping in Chennai. Iwagumi & Ryoboku nature aquariums designed with Seiryu stone, Spiderwood, ADA substrate, CO2 injection and tissue-culture flora.',
    canonical: 'https://themeaquarium.com/aquascaping-chennai',
    image: 'https://themeaquarium.com/images/nature-aquascaping.jpg',
    type: 'service',
  },
  {
    path: 'marine-reef-aquarium-chennai',
    title: 'Marine Reef Aquarium Setup Chennai | Saltwater Coral & Clownfish Tanks',
    description: 'Turnkey saltwater reef systems in Chennai. SPS/LPS corals, Ocellaris clownfish biotopes, sump filtration, DC protein skimmers & automated water chemistry balancing.',
    canonical: 'https://themeaquarium.com/marine-reef-aquarium-chennai',
    image: 'https://themeaquarium.com/images/saltwater-clownfish-biotope.jpg',
    type: 'service',
  },
  {
    path: 'koi-pond-design-chennai',
    title: 'Koi Pond Design & Biological Filtration Chennai | Luxury Outdoor Waterfalls',
    description: 'Architectural Japanese Koi ponds, garden waterfalls & multi-stage biological vortex filtration systems built for luxury villas & farmhouses in ECR & Chennai.',
    canonical: 'https://themeaquarium.com/koi-pond-design-chennai',
    image: 'https://themeaquarium.com/images/luxury-koi-pond-waterfall.jpg',
    type: 'service',
  },
  {
    path: 'aquarium-amc-maintenance-chennai',
    title: 'Aquarium AMC & Maintenance Service Chennai | Bi-Weekly Cleaning',
    description: 'Hassle-free aquarium maintenance contracts (AMC) in Chennai. Professional algae removal, 30% water change, canister filter servicing & liquid chemical water testing.',
    canonical: 'https://themeaquarium.com/aquarium-amc-maintenance-chennai',
    image: 'https://themeaquarium.com/images/canister-filter-system.jpg',
    type: 'service',
  },
  {
    path: 'commercial-corporate-aquariums',
    title: 'Commercial & Corporate Aquariums Chennai | Hotels, Offices & Architects',
    description: 'Statement aquariums for corporate lobbies, executive boardrooms, luxury hotel receptions and restaurants in Chennai. Complete MEP coordination and turnkey AMC support.',
    canonical: 'https://themeaquarium.com/commercial-corporate-aquariums',
    image: 'https://themeaquarium.com/images/custom-starphire-tank.jpg',
    type: 'service',
  },
  {
    path: 'aquarium-chennai-locations',
    title: 'Theme Aquarium Service Locations Chennai | Adyar, ECR, OMR & Beyond',
    description: 'Discover Theme Aquarium service coverage across Chennai: Adyar, ECR, OMR, Anna Nagar, Velachery, Guindy, and T. Nagar. Rapid site visits and express delivery.',
    canonical: 'https://themeaquarium.com/aquarium-chennai-locations',
    image: 'https://themeaquarium.com/images/hero-aquarium.jpg',
    type: 'location',
  },
  {
    path: 'aquarium-adyar-chennai',
    title: 'Theme Aquarium Adyar Chennai | Flagship Store, Livestock & Aquascaping',
    description: 'Visit Theme Aquarium flagship studio in Indira Nagar, Adyar. Premium aquascaping displays, exotic quarantined fish, tissue plants & custom tank consultations.',
    canonical: 'https://themeaquarium.com/aquarium-adyar-chennai',
    image: 'https://themeaquarium.com/images/hero-aquarium.jpg',
    type: 'location',
  },
  {
    path: 'aquarium-ecr-chennai',
    title: 'Custom Aquariums & Koi Ponds ECR Chennai | Luxury Villa Specialists',
    description: 'Custom luxury wall aquariums, marine reef systems & outdoor Japanese koi ponds designed for beachfront villas along East Coast Road (ECR), Chennai.',
    canonical: 'https://themeaquarium.com/aquarium-ecr-chennai',
    image: 'https://themeaquarium.com/images/luxury-koi-pond-waterfall.jpg',
    type: 'location',
  },
  {
    path: 'aquarium-omr-chennai',
    title: 'Aquarium Services OMR Chennai | IT Parks, Apartments & Maintenance',
    description: 'Aquarium design, setup and bi-weekly AMC maintenance for apartments, corporate offices and tech parks along Old Mahabalipuram Road (OMR), Chennai.',
    canonical: 'https://themeaquarium.com/aquarium-omr-chennai',
    image: 'https://themeaquarium.com/images/canister-filter-system.jpg',
    type: 'location',
  },
  {
    path: 'aquarium-anna-nagar-chennai',
    title: 'Custom Aquariums & AMC Anna Nagar Chennai | Theme Aquarium',
    description: 'Premium custom aquarium fabrication, aquascaping scapes and scheduled AMC maintenance visits across residential homes and clinics in Anna Nagar, Chennai.',
    canonical: 'https://themeaquarium.com/aquarium-anna-nagar-chennai',
    image: 'https://themeaquarium.com/images/cave-hardscape-aquascape.jpg',
    type: 'location',
  },
  {
    path: 'aquarium-velachery-chennai',
    title: 'Aquarium Shop & Maintenance Velachery Chennai | Theme Aquarium',
    description: 'Turnkey aquarium design, livestock supply and reliable cleaning AMC services for residences and businesses in Velachery, Chennai.',
    canonical: 'https://themeaquarium.com/aquarium-velachery-chennai',
    image: 'https://themeaquarium.com/images/fancy-guppy-aquarium.jpg',
    type: 'location',
  },
];

// Generate dynamic routes for all categories
const categoryRoutes = CATEGORIES_DATA.map((category) => ({
  path: `category/${category.slug}`,
  title: `${category.name} Chennai | Live Stock, Plants & Aquascaping Gear | Theme Aquarium`,
  description: `${category.description} Shop online or visit our Indira Nagar, Adyar store in Chennai. Doorstep delivery available.`,
  canonical: `https://themeaquarium.com/category/${category.slug}`,
  image: `https://themeaquarium.com${category.image}`,
  categoryData: category,
  type: 'category',
}));

// Generate dynamic routes for all products
const productRoutes = PRODUCTS_DATA.map((product) => ({
  path: `product/${product.id}`,
  title: `${product.name} | Theme Aquarium Chennai`,
  description: `${product.description} Buy online at Theme Aquarium Adyar with live arrival guarantee and express Chennai delivery.`,
  canonical: `https://themeaquarium.com/product/${product.id}`,
  image: `https://themeaquarium.com${product.image}`,
  productData: product,
  type: 'product',
}));

const allRoutes = [...staticRoutes, ...categoryRoutes, ...productRoutes];

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function escapeHtml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// 1. Generate XML Sitemap
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
  xml += `      <image:caption>Award-winning nature aquariums, Starphire rimless glass tanks, and exotic fish studio in Adyar, Chennai</image:caption>\n`;
  xml += `    </image:image>\n`;
  xml += `    <image:image>\n`;
  xml += `      <image:loc>https://themeaquarium.com/images/planted-stream-waterfall.jpg</image:loc>\n`;
  xml += `      <image:title>Planted Stream Waterfall &amp; Riparium Chennai</image:title>\n`;
  xml += `      <image:caption>Custom biotope waterfall and aquascaping installation by Theme Aquarium Chennai</image:caption>\n`;
  xml += `    </image:image>\n`;
  xml += `    <image:image>\n`;
  xml += `      <image:loc>https://themeaquarium.com/images/custom-starphire-tank.jpg</image:loc>\n`;
  xml += `      <image:title>Starphire Ultra-Clear Glass Custom Aquarium Fabrication</image:title>\n`;
  xml += `      <image:caption>Custom built-in Starphire glass aquarium with German silicone bonding in Chennai</image:caption>\n`;
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
      xml += `      <image:caption>${escapeXml(route.description)}</image:caption>\n`;
      xml += `    </image:image>\n`;
    }
    xml += `  </url>\n`;
  }
  xml += `\n`;

  // Category Pages
  xml += `  <!-- Category Pages -->\n`;
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
      xml += `      <image:caption>${escapeXml(catRoute.description)}</image:caption>\n`;
      xml += `    </image:image>\n`;
    }
    xml += `  </url>\n`;
  }
  xml += `\n`;

  // Product Pages
  xml += `  <!-- Individual Product Pages -->\n`;
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
      xml += `      <image:caption>${escapeXml(prodRoute.description)}</image:caption>\n`;
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

  console.log(`Successfully generated sitemap.xml with 1 home + ${staticRoutes.length} static + ${categoryRoutes.length} categories + ${productRoutes.length} products = ${1 + allRoutes.length} total indexed URLs!`);
}

// 2. Pre-render crawlable HTML body for Googlebot / search engines
function generateCrawlableBody(route) {
  const brandNav = `
    <header class="border-b border-slate-800 bg-slate-950/90 py-4 px-6">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <a href="/" class="flex items-center gap-3 text-emerald-400 font-bold text-xl tracking-tight">
          <span>THEME AQUARIUM</span>
          <span class="text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/20">Chennai</span>
        </a>
        <nav class="flex flex-wrap items-center gap-6 text-sm text-slate-300 font-medium">
          <a href="/" class="hover:text-emerald-400">Home</a>
          <a href="/shop" class="hover:text-emerald-400">Products Catalog</a>
          <a href="/services" class="hover:text-emerald-400">Services &amp; AMC</a>
          <a href="/custom-aquarium-chennai" class="hover:text-emerald-400">Custom Aquariums</a>
          <a href="/aquascaping-chennai" class="hover:text-emerald-400">Aquascaping</a>
          <a href="/marine-reef-aquarium-chennai" class="hover:text-emerald-400">Marine Reefs</a>
          <a href="/koi-pond-design-chennai" class="hover:text-emerald-400">Koi Ponds</a>
          <a href="/about" class="hover:text-emerald-400">About Us</a>
          <a href="/contact" class="hover:text-emerald-400">Contact</a>
        </nav>
      </div>
    </header>
  `;

  const footer = `
    <footer class="border-t border-slate-800 bg-slate-950 py-12 px-6 mt-20 text-slate-400 text-sm">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 class="text-white font-semibold mb-3">Theme Aquarium Chennai</h4>
          <p class="mb-3 text-xs leading-relaxed">Premier custom luxury aquarium fabricators, planted nature aquascaping studio, saltwater reef builders &amp; pond engineers.</p>
          <p class="text-xs">26/1, 12th Lane, 3rd Ave, Indira Nagar, Adyar, Chennai - 600020</p>
          <p class="text-xs mt-1 text-emerald-400 font-medium">Phone / WhatsApp: +91 98841 81562</p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-3">Specialist Services</h4>
          <ul class="space-y-1.5 text-xs">
            <li><a href="/custom-aquarium-chennai" class="hover:text-emerald-400">Custom Built-In Aquariums</a></li>
            <li><a href="/aquascaping-chennai" class="hover:text-emerald-400">Planted Tank Aquascaping</a></li>
            <li><a href="/marine-reef-aquarium-chennai" class="hover:text-emerald-400">Marine Reef Coral Tanks</a></li>
            <li><a href="/koi-pond-design-chennai" class="hover:text-emerald-400">Koi Pond Filtration Systems</a></li>
            <li><a href="/aquarium-amc-maintenance-chennai" class="hover:text-emerald-400">Aquarium AMC Maintenance</a></li>
            <li><a href="/commercial-corporate-aquariums" class="hover:text-emerald-400">Commercial &amp; Hotel Tanks</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-3">Popular Categories</h4>
          <ul class="space-y-1.5 text-xs">
            <li><a href="/category/aquarium-fish" class="hover:text-emerald-400">Freshwater Aquarium Fish</a></li>
            <li><a href="/category/aquatic-plants" class="hover:text-emerald-400">Tissue Culture Aquatic Plants</a></li>
            <li><a href="/category/planted-aquarium" class="hover:text-emerald-400">Planted Nature Aquariums</a></li>
            <li><a href="/category/aquascaping" class="hover:text-emerald-400">Aquascaping Hardscapes &amp; Stones</a></li>
            <li><a href="/category/marine-aquarium" class="hover:text-emerald-400">Marine Saltwater Supplies</a></li>
            <li><a href="/category/co2-systems" class="hover:text-emerald-400">Pressurized CO2 Kits</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-3">Service Areas in Chennai</h4>
          <p class="text-xs leading-relaxed mb-2">Adyar, Besant Nagar, Thiruvanmiyur, ECR (Neelangarai, Palavakkam, Akkarai), OMR (Perungudi, Sholinganallur), Velachery, Anna Nagar, T Nagar, Guindy, Porur &amp; Mahabalipuram.</p>
          <p class="text-xs text-slate-500">© ${new Date().getFullYear()} Theme Aquarium Chennai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;

  // 1. PRODUCT PAGE BODY
  if (route.type === 'product' && route.productData) {
    const p = route.productData;
    const cat = CATEGORIES_DATA.find((c) => c.slug === p.category || c.id === p.category);
    const catName = cat ? cat.name : 'Catalogue';
    const catSlug = cat ? cat.slug : 'aquarium-fish';

    return `
      ${brandNav}
      <main class="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <!-- Breadcrumb Navigation -->
        <nav aria-label="Breadcrumb" class="mb-6 text-sm flex items-center gap-2 text-slate-400">
          <a href="/" class="hover:text-emerald-400">Theme Aquarium</a>
          <span>/</span>
          <a href="/shop" class="hover:text-emerald-400">Products Catalog</a>
          <span>/</span>
          <a href="/category/${catSlug}" class="hover:text-emerald-400">${escapeHtml(catName)}</a>
          <span>/</span>
          <span class="text-emerald-400 font-medium">${escapeHtml(p.name)}</span>
        </nav>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 bg-slate-900/60 p-6 md:p-10 rounded-2xl border border-slate-800">
          <div>
            <img src="${p.image}" alt="${escapeHtml(p.name)}" class="w-full h-auto object-cover rounded-xl border border-slate-800 shadow-2xl" />
          </div>
          <div>
            <div class="flex items-center gap-2 mb-3">
              <span class="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30 uppercase font-semibold tracking-wider">${escapeHtml(p.tag || p.category)}</span>
              ${p.isLiveStock ? '<span class="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30 font-semibold">Quarantined Livestock</span>' : ''}
              <span class="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full">In Stock</span>
            </div>
            <h1 class="text-2xl md:text-4xl font-extrabold text-white mb-4">${escapeHtml(p.name)}</h1>
            <p class="text-slate-300 text-base md:text-lg mb-6 leading-relaxed">${escapeHtml(p.description)}</p>
            
            <div class="mb-6 flex items-baseline gap-4">
              <span class="text-3xl md:text-4xl font-black text-emerald-400">₹${p.price.toLocaleString('en-IN')}</span>
              ${p.originalPrice ? `<span class="text-lg text-slate-500 line-through">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
              <span class="text-xs text-emerald-400/80">Inclusive of all taxes</span>
            </div>

            <!-- Specifications Table -->
            ${p.specifications ? `
            <div class="mb-8 border border-slate-800 rounded-xl overflow-hidden bg-slate-950/60">
              <h2 class="text-sm font-semibold text-white px-4 py-2.5 bg-slate-800/80 border-b border-slate-800">Technical Specifications</h2>
              <dl class="divide-y divide-slate-800 text-sm">
                ${Object.entries(p.specifications).map(([key, val]) => `
                  <div class="grid grid-cols-3 px-4 py-2.5">
                    <dt class="text-slate-400 font-medium">${escapeHtml(key)}</dt>
                    <dd class="text-slate-200 col-span-2">${escapeHtml(val)}</dd>
                  </div>
                `).join('')}
              </dl>
            </div>
            ` : ''}

            <div class="flex flex-wrap gap-4 items-center mb-8">
              <a href="https://wa.me/919884181562?text=Hi%20Theme%20Aquarium!%20I%20am%20interested%20in%20${encodeURIComponent(p.name)}" class="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition flex items-center gap-2">
                Order via WhatsApp (+91 98841 81562)
              </a>
              <a href="/category/${catSlug}" class="border border-slate-700 hover:border-slate-500 text-slate-200 px-6 py-3 rounded-xl transition">
                View More in ${escapeHtml(catName)}
              </a>
            </div>

            <div class="p-4 rounded-xl bg-slate-950/40 border border-slate-800 text-xs text-slate-400 space-y-1">
              <p>✔ <strong>Doorstep Delivery across Chennai</strong>: Express delivery in Adyar, ECR, OMR, Anna Nagar, and Velachery.</p>
              <p>✔ <strong>Live Arrival Guarantee</strong>: Quarantined &amp; oxygen-packed for safe transit.</p>
              <p>✔ <strong>Store Pickup</strong>: Visit Theme Aquarium in Indira Nagar, Adyar (Open 7 Days a week).</p>
            </div>
          </div>
        </div>
      </main>
      ${footer}
    `;
  }

  // 2. CATEGORY PAGE BODY
  if (route.type === 'category' && route.categoryData) {
    const cat = route.categoryData;
    const catProducts = PRODUCTS_DATA.filter((p) => p.category === cat.slug || p.category === cat.id);

    return `
      ${brandNav}
      <main class="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <!-- Breadcrumb Navigation -->
        <nav aria-label="Breadcrumb" class="mb-6 text-sm flex items-center gap-2 text-slate-400">
          <a href="/" class="hover:text-emerald-400">Theme Aquarium</a>
          <span>/</span>
          <a href="/shop" class="hover:text-emerald-400">Products Catalog</a>
          <span>/</span>
          <span class="text-emerald-400 font-medium">${escapeHtml(cat.name)}</span>
        </nav>

        <div class="mb-10">
          <span class="text-xs bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 font-semibold uppercase tracking-wider">${escapeHtml(cat.highlightTag || 'Collection')}</span>
          <h1 class="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-4">${escapeHtml(cat.name)} in Chennai</h1>
          <p class="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">${escapeHtml(cat.description)} Available for direct purchase at our Adyar studio or Chennai doorstep courier.</p>
        </div>

        <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${catProducts.map((p) => `
            <article class="bg-slate-900/60 rounded-2xl border border-slate-800 p-5 flex flex-col justify-between hover:border-emerald-500/50 transition">
              <div>
                <a href="/product/${p.id}">
                  <img src="${p.image}" alt="${escapeHtml(p.name)}" class="w-full h-48 object-cover rounded-xl border border-slate-800 mb-4" />
                </a>
                <span class="text-xs text-emerald-400 font-medium">${escapeHtml(p.tag || p.subCategory || cat.name)}</span>
                <h2 class="text-lg font-bold text-white mt-1 mb-2 hover:text-emerald-400 transition">
                  <a href="/product/${p.id}">${escapeHtml(p.name)}</a>
                </h2>
                <p class="text-xs text-slate-400 line-clamp-2 mb-4">${escapeHtml(p.description)}</p>
              </div>
              <div class="flex items-center justify-between border-t border-slate-800 pt-4">
                <span class="text-xl font-black text-emerald-400">₹${p.price.toLocaleString('en-IN')}</span>
                <a href="/product/${p.id}" class="text-xs bg-emerald-500/20 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 font-bold px-3 py-1.5 rounded-lg border border-emerald-500/30 transition">
                  View Details →
                </a>
              </div>
            </article>
          `).join('')}
        </section>

        <!-- Category Overview & Chennai Service -->
        <div class="mt-16 bg-slate-950/70 border border-slate-800 rounded-2xl p-8">
          <h2 class="text-xl font-bold text-white mb-3">Looking for Custom Recommendations in Chennai?</h2>
          <p class="text-sm text-slate-300 mb-4">Visit our studio at Indira Nagar, Adyar to view live setups, get water parameter testing, or request exotic species quarantine orders. We deliver across Chennai including ECR, OMR, Velachery, and Anna Nagar.</p>
          <a href="https://wa.me/919884181562?text=Hi%20Theme%20Aquarium!%20I%20have%20an%20enquiry%20regarding%20${encodeURIComponent(cat.name)}" class="inline-flex items-center gap-2 text-sm bg-emerald-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-400 transition">
            Ask Aquarium Specialist on WhatsApp
          </a>
        </div>
      </main>
      ${footer}
    `;
  }

  // 3. SERVICE / SPECIALIST / LOCATION / INFO PAGE BODY
  return `
    ${brandNav}
    <main class="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <!-- Breadcrumb Navigation -->
      <nav aria-label="Breadcrumb" class="mb-6 text-sm flex items-center gap-2 text-slate-400">
        <a href="/" class="hover:text-emerald-400">Theme Aquarium</a>
        <span>/</span>
        <span class="text-emerald-400 font-medium">${escapeHtml(route.path.replace(/-/g, ' '))}</span>
      </nav>

      <div class="max-w-4xl mx-auto">
        <span class="text-xs bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 font-semibold uppercase tracking-wider">Chennai Specialist Service</span>
        <h1 class="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-6">${escapeHtml(route.title)}</h1>
        <p class="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">${escapeHtml(route.description)}</p>

        ${route.image ? `
        <div class="mb-10">
          <img src="${route.image}" alt="${escapeHtml(route.title)}" class="w-full h-auto max-h-[460px] object-cover rounded-2xl border border-slate-800 shadow-2xl" />
        </div>
        ` : ''}

        <!-- Service Details & Highlights -->
        <section class="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 mb-10 space-y-6">
          <h2 class="text-xl md:text-2xl font-bold text-white">Turnkey Aquatic Solutions Across Chennai</h2>
          <p class="text-slate-300 text-sm leading-relaxed">
            Theme Aquarium provides architectural-grade aquatic engineering, including custom Starphire ultra-clear glass aquariums, living marine reef ecosystems, high-tech planted aquascapes, and outdoor Japanese Nishikigoi ponds. Trusted by leading architects, interior designers, and luxury homeowners in Adyar, ECR, OMR, and Anna Nagar.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h3 class="font-bold text-emerald-400 mb-1">Precision Engineering</h3>
              <p class="text-xs text-slate-400">Structural load calculations, MEP plumbing design, and German silicone bonding.</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h3 class="font-bold text-emerald-400 mb-1">Strict Fish Quarantine</h3>
              <p class="text-xs text-slate-400">Multi-week health conditioning, parasitic treatments, and live arrival guarantee.</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h3 class="font-bold text-emerald-400 mb-1">Silent Sump Filtration</h3>
              <p class="text-xs text-slate-400">Custom acoustic overflow chambers and high-capacity biological filtration.</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h3 class="font-bold text-emerald-400 mb-1">Bi-Weekly AMC Contracts</h3>
              <p class="text-xs text-slate-400">Hassle-free maintenance, parameter testing, and algae mitigation visits.</p>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <div class="bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30 rounded-2xl p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
          <div>
            <h3 class="text-xl font-bold text-white mb-2">Book a Site Consultation in Chennai</h3>
            <p class="text-slate-300 text-sm">Speak with our aquatic engineers for custom sizes, architectural CAD drawings, or livestock inquiries.</p>
          </div>
          <div class="mt-4 sm:mt-0 flex-shrink-0">
            <a href="https://wa.me/919884181562?text=Hi%20Theme%20Aquarium!%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(route.title)}" class="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition inline-block">
              WhatsApp (+91 98841 81562)
            </a>
          </div>
        </div>
      </div>
    </main>
    ${footer}
  `;
}

// 3. Generate structured data (JSON-LD) tailored for each route
function generateStructuredData(route) {
  // Product Page Schema
  if (route.type === 'product' && route.productData) {
    const p = route.productData;
    const cat = CATEGORIES_DATA.find((c) => c.slug === p.category || c.id === p.category);
    const catName = cat ? cat.name : 'Catalogue';
    const catSlug = cat ? cat.slug : 'aquarium-fish';

    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: p.name,
      image: [route.image],
      description: p.description,
      sku: p.id,
      brand: {
        '@type': 'Brand',
        name: 'Theme Aquarium Chennai',
      },
      offers: {
        '@type': 'Offer',
        url: route.canonical,
        priceCurrency: 'INR',
        price: p.price,
        itemCondition: 'https://schema.org/NewCondition',
        availability: p.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
        seller: {
          '@type': 'Organization',
          name: 'Theme Aquarium Chennai',
        },
      },
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Theme Aquarium',
          item: 'https://themeaquarium.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Products Catalog',
          item: 'https://themeaquarium.com/shop',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: catName,
          item: `https://themeaquarium.com/category/${catSlug}`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: p.name,
          item: route.canonical,
        },
      ],
    };

    return `<script type="application/ld+json">\n${JSON.stringify(productSchema, null, 2)}\n</script>\n<script type="application/ld+json">\n${JSON.stringify(breadcrumbSchema, null, 2)}\n</script>`;
  }

  // Category Page Schema
  if (route.type === 'category' && route.categoryData) {
    const cat = route.categoryData;
    const categorySchema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${cat.name} Chennai | Theme Aquarium`,
      description: cat.description,
      url: route.canonical,
      publisher: {
        '@type': 'Organization',
        name: 'Theme Aquarium Chennai',
        url: 'https://themeaquarium.com/',
      },
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Theme Aquarium',
          item: 'https://themeaquarium.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Products Catalog',
          item: 'https://themeaquarium.com/shop',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: cat.name,
          item: route.canonical,
        },
      ],
    };

    return `<script type="application/ld+json">\n${JSON.stringify(categorySchema, null, 2)}\n</script>\n<script type="application/ld+json">\n${JSON.stringify(breadcrumbSchema, null, 2)}\n</script>`;
  }

  // Service / Specialist Page Schema
  if (route.type === 'service' || route.type === 'shop' || route.type === 'info' || route.type === 'location') {
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: route.title,
      description: route.description,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Theme Aquarium Chennai',
        telephone: '+919884181562',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '26/1, 12th Lane, 3rd Ave, Indira Nagar, Adyar',
          addressLocality: 'Chennai',
          addressRegion: 'Tamil Nadu',
          postalCode: '600020',
          addressCountry: 'IN',
        },
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Chennai, Tamil Nadu, India',
      },
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Theme Aquarium',
          item: 'https://themeaquarium.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: route.path.replace(/-/g, ' '),
          item: route.canonical,
        },
      ],
    };

    return `<script type="application/ld+json">\n${JSON.stringify(serviceSchema, null, 2)}\n</script>\n<script type="application/ld+json">\n${JSON.stringify(breadcrumbSchema, null, 2)}\n</script>`;
  }

  return '';
}

// 4. Pre-render Multi-Page HTML Routes
function generateRoutes() {
  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.warn('dist/index.html not found, skipping HTML route generation.');
    return;
  }

  // Ensure .nojekyll exists in dist
  const nojekyllDist = path.join(distDir, '.nojekyll');
  fs.writeFileSync(nojekyllDist, '', 'utf-8');

  // Copy robots.txt and sitemap.xml to dist
  const publicRobots = path.join(publicDir, 'robots.txt');
  if (fs.existsSync(publicRobots)) {
    fs.copyFileSync(publicRobots, path.join(distDir, 'robots.txt'));
  }

  const baseHtml = fs.readFileSync(indexPath, 'utf-8');

  for (const route of allRoutes) {
    const routeDir = path.join(distDir, route.path);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    let routeHtml = baseHtml;

    // 1. Replace Title
    routeHtml = routeHtml.replace(
      /<title>.*?<\/title>/i,
      `<title>${escapeHtml(route.title)}</title>`
    );

    // 2. Replace Meta Title
    routeHtml = routeHtml.replace(
      /<meta\s+name=["']title["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="title" content="${escapeHtml(route.title)}" />`
    );

    // 3. Replace Meta Description
    routeHtml = routeHtml.replace(
      /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(route.description)}" />`
    );

    // 4. Replace Canonical Link
    routeHtml = routeHtml.replace(
      /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
      `<link rel="canonical" href="${route.canonical}" />`
    );

    // 5. Replace OpenGraph Title
    routeHtml = routeHtml.replace(
      /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(route.title)}" />`
    );

    // 6. Replace OpenGraph Description
    routeHtml = routeHtml.replace(
      /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(route.description)}" />`
    );

    // 7. Replace OpenGraph URL
    routeHtml = routeHtml.replace(
      /<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:url" content="${route.canonical}" />`
    );

    // 8. Replace OpenGraph Image
    if (route.image) {
      routeHtml = routeHtml.replace(
        /<meta\s+property=["']og:image["']\s+content=["'].*?["']\s*\/?>/i,
        `<meta property="og:image" content="${route.image}" />`
      );
    }

    // 9. Replace Twitter Title & Description & URL
    routeHtml = routeHtml.replace(
      /<meta\s+property=["']twitter:title["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="twitter:title" content="${escapeHtml(route.title)}" />`
    );
    routeHtml = routeHtml.replace(
      /<meta\s+property=["']twitter:description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="twitter:description" content="${escapeHtml(route.description)}" />`
    );
    routeHtml = routeHtml.replace(
      /<meta\s+property=["']twitter:url["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="twitter:url" content="${route.canonical}" />`
    );
    if (route.image) {
      routeHtml = routeHtml.replace(
        /<meta\s+property=["']twitter:image["']\s+content=["'].*?["']\s*\/?>/i,
        `<meta property="twitter:image" content="${route.image}" />`
      );
    }

    // 10. Inject page-specific Structured Data (JSON-LD) into <head>
    const structuredDataTag = generateStructuredData(route);
    if (structuredDataTag) {
      routeHtml = routeHtml.replace(
        /<\/head>/i,
        `  ${structuredDataTag}\n</head>`
      );
    }

    // 11. Inject Pre-rendered Crawlable Semantic HTML into <div id="root"></div>
    const crawlableBody = generateCrawlableBody(route);
    routeHtml = routeHtml.replace(
      /<div id=["']root["']>\s*<\/div>/i,
      `<div id="root">${crawlableBody}</div>`
    );

    // 12. Write both `dist/${route.path}/index.html` AND `dist/${route.path}.html`
    // This completely resolves GitHub Pages 301 trailing slash redirects for Googlebot!
    const outFolderIndexPath = path.join(routeDir, 'index.html');
    fs.writeFileSync(outFolderIndexPath, routeHtml, 'utf-8');

    const outCleanHtmlPath = path.join(distDir, `${route.path}.html`);
    // Ensure parent directory exists for nested routes (e.g. dist/category/aquascaping.html)
    const parentDir = path.dirname(outCleanHtmlPath);
    if (!fs.existsSync(parentDir)) {
      fs.mkdirSync(parentDir, { recursive: true });
    }
    fs.writeFileSync(outCleanHtmlPath, routeHtml, 'utf-8');
  }

  console.log(`Successfully generated ${allRoutes.length} multi-page route directories & clean HTML files in dist/!`);
}

generateSitemap();
generateRoutes();
