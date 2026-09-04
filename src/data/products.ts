import { Product } from '../types';

export const PRODUCTS_DATA: Product[] = [
  // 1. Aquarium Fish
  {
    id: 'fish-betta-halfmoon-king',
    name: 'Show-Grade Halfmoon Betta (Blue & Mustard)',
    category: 'aquarium-fish',
    subCategory: 'Betta',
    price: 850,
    originalPrice: 1100,
    image: '/images/show-halfmoon-betta.jpg',
    description: 'High-fin 180-degree spread Halfmoon Betta with deep royal blue and mustard yellow coloration. Captive-bred, disease-free, conditioned for solitary display nano tanks.',
    specifications: {
      'Tank Size Minimum': '5 Gallons (20L)',
      'Water Temp': '24°C - 28°C',
      'Diet': 'Carnivorous Micro-Pellets & Frozen Bloodworms',
      'Temperament': 'Aggressive with other male Bettas; peaceful with snails'
    },
    inStock: true,
    isLiveStock: true,
    rating: 4.9,
    reviewCount: 28,
    featured: true,
    tag: 'Show Grade',
    careLevel: 'Easy'
  },
  {
    id: 'fish-ranchu-goldfish-tri',
    name: 'Imported Japanese Ranchu Goldfish (Calico)',
    category: 'aquarium-fish',
    subCategory: 'Goldfish',
    price: 2400,
    image: '/images/japanese-ranchu-goldfish.jpg',
    description: 'High quality lionhead/wen development, dorsal-less curved spine, vibrant calico tricolor pattern. Fully quarantined and active in soft-filtered water.',
    specifications: {
      'Tank Size Minimum': '20 Gallons per fish',
      'Water Temp': '18°C - 23°C',
      'Filtration': 'Oversized Biological Canister with low flow',
      'Diet': 'Sinking vegetable & high-protein pellets'
    },
    inStock: true,
    isLiveStock: true,
    rating: 5.0,
    reviewCount: 16,
    featured: true,
    tag: 'Premium Wen',
    careLevel: 'Moderate'
  },
  {
    id: 'fish-cardinal-tetra-school',
    name: 'Fancy Guppies & Planted Schoolers Collection',
    category: 'aquarium-fish',
    subCategory: 'Planted Schooling',
    price: 650,
    originalPrice: 800,
    image: '/images/fancy-guppy-planted-schoolers.jpg',
    description: 'Vivid show-grade fancy guppies and colorful schooling fish, ideal for lush aquascapes and planted biotopes. Completely peaceful and active community fish.',
    specifications: {
      'School Size': 'Pack of active conditioned fish',
      'pH Range': '6.5 - 7.5',
      'Diet': 'Flakes, baby brine shrimp, micro-wafers',
      'Plant Safe': '100% Plant & Shrimp safe'
    },
    inStock: true,
    isLiveStock: true,
    rating: 4.9,
    reviewCount: 42,
    tag: 'Best Seller',
    careLevel: 'Easy'
  },
  {
    id: 'fish-flowerhorn-kamfa',
    name: 'Super Red Dragon Flowerhorn (High Kok Development)',
    category: 'aquarium-fish',
    subCategory: 'Exotic Monster Fish',
    price: 6500,
    image: '/images/flowerhorn-super-red.jpg',
    description: 'Prominent head hump (kok), pearling patterns, and deep cherry crimson color. Highly interactive, hand-tamed centerpiece show fish.',
    specifications: {
      'Tank Size Minimum': '50 Gallons',
      'Water Temp': '28°C - 30°C',
      'Diet': 'High-protein flowerhorn specialized pellets',
      'Housing': 'Single tank specimen'
    },
    inStock: false,
    isLiveStock: true,
    rating: 5.0,
    reviewCount: 9,
    tag: 'Check Availability',
    careLevel: 'Moderate'
  },

  // 2. Aquatic Plants
  {
    id: 'plant-monte-carlo-tc',
    name: 'Micranthemum "Monte Carlo" (In-Vitro Tissue Culture Cup)',
    category: 'aquatic-plants',
    subCategory: 'Carpeting',
    price: 280,
    originalPrice: 350,
    image: '/images/tissue-culture-monte-carlo.jpg',
    description: 'Snail-free, pesticide-free lab-grown tissue culture cup. Produces a thick, lush green carpet quickly under medium to high lighting and CO2.',
    specifications: {
      'Type': 'Carpeting Stem',
      'Light Requirement': 'Medium - High',
      'CO2': 'Recommended for fast lush carpeting',
      'Growth Rate': 'Fast'
    },
    inStock: true,
    rating: 4.9,
    reviewCount: 51,
    featured: true,
    tag: '100% Snail Free',
    careLevel: 'Easy'
  },
  {
    id: 'plant-anubias-nana-petite',
    name: 'Anubias Nana Petite on Lava Stone',
    category: 'aquatic-plants',
    subCategory: 'Epiphyte',
    price: 380,
    image: '/images/anubias-nana-petite-lava-stone.jpg',
    description: 'Hardy slow-growing dwarf Anubias pre-attached to natural black porous lava rock. Does not require substrate planting; simply place on driftwood or rocks.',
    specifications: {
      'Placement': 'Hardscape foreground / midground',
      'Light': 'Low - Medium',
      'CO2': 'Not required (benefits with low dosing)',
      'Care': 'Extremely hardy'
    },
    inStock: true,
    rating: 5.0,
    reviewCount: 34,
    tag: 'Hardy Classic',
    careLevel: 'Easy'
  },
  {
    id: 'plant-rotala-h-ra',
    name: 'Rotala Rotundifolia "H\'ra" (Stem Bunch of 15)',
    category: 'aquatic-plants',
    subCategory: 'Background Stems',
    price: 199,
    image: '/images/rotala-rotundifolia-hra.jpg',
    description: 'Famous aquascaping stem plant turning intense fiery orange-red under good lighting, CO2, and balanced iron fertilisation.',
    specifications: {
      'Height': '15 - 35 cm',
      'Light': 'High',
      'CO2': 'Required for deep red colors',
      'Trimming': 'Prune regularly to bush up'
    },
    inStock: true,
    rating: 4.7,
    reviewCount: 22,
    careLevel: 'Moderate'
  },

  // 3. Planted Aquarium Sets
  {
    id: 'tank-nature-set-60p',
    name: 'Theme 60P Complete Nature Aquascape System (60x30x36cm)',
    category: 'planted-aquarium',
    subCategory: 'Turnkey System',
    price: 24500,
    originalPrice: 28000,
    image: '/images/theme-60p-complete-nature-system.jpg',
    description: 'Complete high-tech setup including Ultra-Clear 60P rimless glass tank (6mm), Chihiros WRGB2 Slim light, external canister filter, lily pipes, CO2 cylinder with solenoid, and active soil.',
    specifications: {
      'Dimensions': '60 x 30 x 36 cm (65 Litres)',
      'Glass': 'Ultra-Clear Optiwhite Low-Iron (6mm)',
      'Lighting': 'Full spectrum APP-controllable WRGB',
      'Filter': 'Silent External Canister Filter with Bio-Media'
    },
    inStock: true,
    rating: 5.0,
    reviewCount: 19,
    featured: true,
    tag: 'All-In-One Pro Set',
    careLevel: 'Moderate'
  },

  // 4. Aquascaping Hardscape & Tools
  {
    id: 'scape-seiryu-stone-box',
    name: 'Black Dragon & Seiryu Aquascaping Stones (5 Kg Selection)',
    category: 'aquascaping',
    subCategory: 'Hardscape Rocks',
    price: 1250,
    originalPrice: 1500,
    image: '/images/black-dragon-seiryu-stones.jpg',
    description: 'Hand-picked textured natural stones with rich white veins and deep contours. Essential for Iwagumi and mountain style nature layouts.',
    specifications: {
      'Weight': '5 Kg Assorted sizes (Main focal + supporting)',
      'Texture': 'Deep crevices for moss & plant attachment',
      'Water Impact': 'Slight GH raise (normal for nature scapes)'
    },
    inStock: true,
    rating: 4.9,
    reviewCount: 27,
    tag: 'Hand-Selected',
    careLevel: 'Easy'
  },
  {
    id: 'scape-spiderwood-driftwood',
    name: 'Natural Branching Spiderwood Centerpiece',
    category: 'aquascaping',
    subCategory: 'Driftwood',
    price: 950,
    image: '/images/natural-branching-spiderwood.jpg',
    description: 'Intricately branched natural spiderwood with root-like tendrils. Perfect for creating tree scapes, moss attachments, and forest illusions.',
    specifications: {
      'Size': 'Medium (30-40 cm span)',
      'Treatment': 'Pre-cleaned, natural tannin-release',
      'Use': 'Freshwater aquascapes and terrariums'
    },
    inStock: true,
    rating: 4.8,
    reviewCount: 18,
    careLevel: 'Easy'
  },
  {
    id: 'scape-pro-tool-kit',
    name: 'Pro Stainless Steel Aquascaping 5-Piece Tool Kit & Pouch',
    category: 'aquascaping',
    subCategory: 'Tools',
    price: 1850,
    originalPrice: 2200,
    image: '/images/aquascaping-tools-kit.jpg',
    description: 'Medical-grade surgical stainless steel: Straight tweezers, curved tweezers, wave scissors for carpeting, straight shears, and sand flattener in a velvet roll-up case.',
    specifications: {
      'Material': 'Black Matte Coated Stainless Steel 316',
      'Included': '5 Essential Scaping Tools + Case',
      'Rust Proof': 'Yes, saltwater & freshwater safe'
    },
    inStock: true,
    rating: 5.0,
    reviewCount: 44,
    featured: true,
    tag: 'Essential Tool',
    careLevel: 'Easy'
  },

  // 5. Aquarium Tanks
  {
    id: 'tank-rimless-90p-ultra',
    name: 'Theme Signature 90P Rimless Ultra-Clear Tank (90x45x45cm)',
    category: 'aquarium-tanks',
    subCategory: 'Rimless Glass',
    price: 16500,
    image: '/images/custom-starphire-tank.jpg',
    description: 'Diamond-polished edges, German clear silicone bonding, 10mm high-transmittance low-iron Optiwhite glass with 99.2% color fidelity. Built for elite scapers.',
    specifications: {
      'Volume': '182 Litres (48 Gallons)',
      'Dimensions': '90 x 45 x 45 cm',
      'Glass': '10mm Low-Iron Starphire Glass',
      'Warranty': '3 Years Leak-Proof Warranty'
    },
    inStock: true,
    rating: 5.0,
    reviewCount: 31,
    featured: true,
    tag: 'Custom Available',
    careLevel: 'Easy'
  },

  // 6. Marine Aquarium
  {
    id: 'marine-reef-salt-mix-20kg',
    name: 'Red Sea Coral Pro Marine Salt & Live Clownfish Diet',
    category: 'marine-aquarium',
    subCategory: 'Marine Supplies',
    price: 5400,
    image: '/images/red-sea-coral-pro-marine-salt.jpg',
    description: 'Formulated with elevated, balanced levels of calcium, magnesium, and carbonate for vibrant SPS and LPS coral growth in modern reef aquariums.',
    specifications: {
      'Yield': '660 Litres at 1.025 Specific Gravity',
      'Bio-Active': 'Free of nitrates & phosphates',
      'Ideal For': 'Mixed reef & full coral aquariums'
    },
    inStock: true,
    rating: 4.9,
    reviewCount: 15,
    tag: 'Reef Grade',
    careLevel: 'Advanced'
  },

  // 7. Aquarium Equipment & Filters
  {
    id: 'eq-canister-filter-oase',
    name: 'High-Flow Biological Canister Filter with Built-in Pre-Filter',
    category: 'aquarium-equipment',
    subCategory: 'Filtration',
    price: 11900,
    originalPrice: 13500,
    image: '/images/canister-filter-system.jpg',
    description: 'Whisper-quiet external canister filter with quick-clean pre-filter chamber. Self-priming mechanism and multi-stage biological matrix baskets.',
    specifications: {
      'Flow Rate': '1150 L/Hr',
      'Power Consumption': '18 Watts',
      'Suitable For': 'Tanks up to 250 Litres',
      'Sound Level': '< 28 dB (Whisper Silent)'
    },
    inStock: true,
    rating: 4.9,
    reviewCount: 37,
    featured: true,
    tag: 'Whisper Silent',
    careLevel: 'Easy'
  },

  // 8. CO2 Systems
  {
    id: 'co2-complete-pro-kit',
    name: 'Theme Professional Pressurized CO₂ Kit with Solenoid & Diffuser',
    category: 'co2-systems',
    subCategory: 'CO2 Kits',
    price: 8800,
    originalPrice: 9900,
    image: '/images/pressurized-co2-kit.jpg',
    description: 'High-pressure 2L aluminium cylinder (IS Certified), dual-gauge precision regulator with 12V cold-touch solenoid for timer control, bubble counter, and micro-bubble ceramic diffuser.',
    specifications: {
      'Cylinder': '2 Litre High Grade Aluminum (Refillable at our Adyar shop)',
      'Solenoid': '12V Low Temp with Auto-Timer support',
      'Diffuser': 'Super-fine Japanese Ceramic Disc',
      'Safety': 'Auto Pressure Release Valve'
    },
    inStock: true,
    rating: 5.0,
    reviewCount: 29,
    featured: true,
    tag: 'Planted Essential',
    careLevel: 'Moderate'
  },

  // 9. Lights
  {
    id: 'light-wrgb2-pro-60',
    name: 'Full Spectrum Smart App WRGB2 Aquarium Light (60cm)',
    category: 'lights',
    subCategory: 'Planted LED',
    price: 9200,
    image: '/images/smart-wrgb-light.jpg',
    description: 'Bluetooth App controlled 4-channel RGB+W LEDs. Programmable sunrise/sunset ramping, customizable color spectrum for unmatched red plant pigmentation and fish color rendering.',
    specifications: {
      'Power': '67W, 4500 Lumens',
      'Color Spectrum': '400nm - 700nm WRGB Full Spectrum',
      'Control': 'My Chihiros iOS & Android App Bluetooth',
      'Spread': '60 - 80 cm tank length'
    },
    inStock: true,
    rating: 4.9,
    reviewCount: 41,
    featured: true,
    tag: 'App Controlled',
    careLevel: 'Easy'
  },

  // 10. Soil & Substrates
  {
    id: 'soil-active-planted-9l',
    name: 'Theme Bio-Active Volcanic Aqua Soil (9 Litre Bag)',
    category: 'soil-substrates',
    subCategory: 'Planted Soil',
    price: 2650,
    image: '/images/aqua-soil-substrate.jpg',
    description: 'Nutrient-rich baked black granules that naturally buffers water to slightly acidic pH (6.2 - 6.8) and low KH, fostering explosive root growth and crystal clarity.',
    specifications: {
      'Volume': '9 Litres (approx 8.5 Kg)',
      'Buffering': 'Maintains optimal 6.5 pH for aquatic plants',
      'Nutrients': 'Humic acid, organic iron, macro nutrients'
    },
    inStock: true,
    rating: 4.8,
    reviewCount: 56,
    tag: 'Fast Rooting',
    careLevel: 'Easy'
  },

  // 11. Fertilizers
  {
    id: 'fert-all-in-one-500ml',
    name: 'Theme Master Plant Liquid All-In-One Fertilizer (500ml)',
    category: 'fertilizers-additives',
    subCategory: 'Liquid Fert',
    price: 650,
    image: '/images/theme-master-plant-liquid-fertilizer.jpg',
    description: 'Comprehensive bio-available NPK + Iron + trace elements formula. One daily pump prevents plant deficiencies and keeps foliage vibrant without triggering algae.',
    specifications: {
      'Volume': '500ml with precision pump (Doses 5,000 Litres)',
      'Formula': 'Nitrogen, Potassium, Phosphorus, Chelated Iron (Fe-DTPA), Boron, Zinc',
      'Shrimp Safe': '100% Safe for Caridina & Neocaridina'
    },
    inStock: true,
    rating: 4.9,
    reviewCount: 63,
    featured: true,
    careLevel: 'Easy'
  },

  // 12. Shrimp
  {
    id: 'shrimp-bloody-mary-10',
    name: 'Bloody Mary Neocaridina Dwarf Shrimp (Pack of 10)',
    category: 'shrimp',
    subCategory: 'Neocaridina',
    price: 750,
    originalPrice: 900,
    image: '/images/cherry-shrimp-colony.jpg',
    description: 'Intense deep crimson clear-flesh shrimp. Exceptional algae cleaners and peaceful grazers for planted aquariums and nano cubes.',
    specifications: {
      'Pack Size': '10 active healthy juveniles/sub-adults',
      'Water Parameters': 'pH 6.5 - 7.5, TDS 180 - 250',
      'Diet': 'Biofilm, algae, specialized shrimp mineral pellets'
    },
    inStock: true,
    isLiveStock: true,
    rating: 4.9,
    reviewCount: 30,
    tag: 'Grade A Red',
    careLevel: 'Easy'
  },

  // 13. Fish Food
  {
    id: 'food-hikari-micro-pellets',
    name: 'Hikari Micro Pellets Premium Daily Diet (45g)',
    category: 'fish-food',
    subCategory: 'Pellets',
    price: 380,
    image: '/images/fancy-guppy-aquarium.jpg',
    description: 'Three-color micro-pellet packed with marine proteins, garlic for immunity, spirulina for color enhancement, and slow-sinking action for small-mouthed fish.',
    specifications: {
      'Net Weight': '45 Grams',
      'Target Fish': 'Tetras, Rasboras, Guppies, Barbs, Dwarf Cichlids',
      'Origin': 'Made in Japan'
    },
    inStock: true,
    rating: 4.9,
    reviewCount: 48,
    careLevel: 'Easy'
  },

  // 14. Terrariums
  {
    id: 'terra-rainforest-dome-bespoke',
    name: 'Artisan Sealed Rainforest Moss Terrarium (Glass Sphere)',
    category: 'terrariums',
    subCategory: 'Living Art',
    price: 3200,
    image: '/images/artisan-moss-terrarium-sphere.jpg',
    description: 'Hand-crafted self-sustaining micro-ecosystem with live Cushion Moss, Fittonia nerve plants, miniature fern, and drainage volcanic layer in heavy borosilicate glass.',
    specifications: {
      'Height': '26 cm x 20 cm diameter',
      'Maintenance': 'Mist once every 3-4 months; indirect room light',
      'Includes': 'Care card and miniature precision pipette'
    },
    inStock: true,
    rating: 5.0,
    reviewCount: 24,
    featured: true,
    tag: 'Zero Maintenance',
    careLevel: 'Easy'
  }
];
