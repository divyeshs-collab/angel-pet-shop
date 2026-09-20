// Angel Pet Shop - Interactive Application Logic (PetiGo Reference Design)

const STORE_CONFIG = {
  name: "Angel Pet Shop",
  phone: "+91 95943 41999",
  whatsappNumber: "919594341999",
  address: "Pachvati niwas Chawl, Asalpha Village, Andheri - Ghatkopar Link Rd, Jambhulpada, Ghatkopar West, Mumbai, Maharashtra 400084",
  rating: 4.6,
  reviewsCount: "16+ Google Reviews",
  closingHour: 22,
  closingMinute: 30
};

// 12 Authentic Indian Pet Products with Variants & Pricing in INR
const PRODUCTS = [
  {
    id: "rc-maxi-adult",
    title: "Royal Canin Maxi Adult Dry Dog Food",
    category: "dog-food",
    categoryLabel: "Dog Food",
    rating: 4.9,
    reviews: 456,
    badge: "Best Seller",
    badgeColor: "bg-amber-500 text-white",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80",
    description: "Tailored nutritional formula for large breed adult dogs (26-44kg). Supports optimal bone & joint health and high digestive security.",
    benefits: ["Supports high joint stress in large dogs", "Omega-3 fatty acids (EPA-DHA) for healthy coat", "Highly digestible proteins with balanced fibers"],
    variants: [
      { name: "4 kg", price: 3320, originalPrice: 3500 },
      { name: "10 kg", price: 6890, originalPrice: 7200 },
      { name: "15 kg", price: 9450, originalPrice: 9990 }
    ]
  },
  {
    id: "farmina-nd-pumpkin",
    title: "Farmina N&D Grain-Free Lamb & Blueberry",
    category: "dog-food",
    categoryLabel: "Dog Food",
    rating: 4.8,
    reviews: 389,
    badge: "Grain-Free",
    badgeColor: "bg-sky-600 text-white",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=600&q=80",
    description: "Ultra-premium Italian formulation crafted with pasture-raised lamb, wholesome pumpkin, and antioxidant-rich blueberries.",
    benefits: ["96% protein of animal origin", "Low glycemic index with zero grains", "Ideal for sensitive stomachs and allergy-prone breeds"],
    variants: [
      { name: "800 g", price: 1090, originalPrice: 1190 },
      { name: "2.5 kg", price: 2990, originalPrice: 3250 },
      { name: "7 kg", price: 6490, originalPrice: 6990 }
    ]
  },
  {
    id: "whiskas-ocean-fish",
    title: "Whiskas Ocean Fish Adult Dry Cat Food",
    category: "cat-food",
    categoryLabel: "Cat Food",
    rating: 4.7,
    reviews: 512,
    badge: "Popular Pick",
    badgeColor: "bg-purple-600 text-white",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80",
    description: "Specially formulated crunchy kibbles with tasty real fish pockets that deliver 41 essential nutrients for active feline health.",
    benefits: ["Enriched with Omega 3 & 6 and zinc for radiant fur", "Taurine for healthy eyesight and heart health", "Balanced minerals to protect urinary tract health"],
    variants: [
      { name: "1.2 kg", price: 450, originalPrice: 480 },
      { name: "3 kg", price: 1050, originalPrice: 1120 },
      { name: "7 kg", price: 2250, originalPrice: 2400 }
    ]
  },
  {
    id: "sheba-tuna-fillet",
    title: "Sheba Premium Wet Cat Food Tuna Fillets",
    category: "cat-food",
    categoryLabel: "Cat Food",
    rating: 4.9,
    reviews: 276,
    badge: "Gourmet Gravy",
    badgeColor: "bg-rose-500 text-white",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80",
    description: "Flaked real tuna and salmon cuts delicately prepared in an exquisite savory gravy that entices even the pickiest feline eaters.",
    benefits: ["Made with 100% genuine seafood cuts", "High moisture hydration support for kidney health", "Free from artificial preservatives and fillers"],
    variants: [
      { name: "Pack of 6 (85g each)", price: 390, originalPrice: 420 },
      { name: "Pack of 12 (85g each)", price: 750, originalPrice: 840 },
      { name: "Pack of 24 (85g each)", price: 1440, originalPrice: 1680 }
    ]
  },
  {
    id: "gnawlers-calcium-chews",
    title: "Gnawlers Heart-Shaped Dental Milk Bones",
    category: "treats",
    categoryLabel: "Treats",
    rating: 4.8,
    reviews: 318,
    badge: "Dental Care",
    badgeColor: "bg-emerald-600 text-white",
    image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=600&q=80",
    description: "Specially textured dental chews that massage gums, freshen bad dog breath, and provide a lasting chewing experience.",
    benefits: ["Helps clean teeth right down to the gumline", "Enriched with real milk protein & vitamins", "Easy to digest and hypoallergenic"],
    variants: [
      { name: "Small (270g / 30 pcs)", price: 220, originalPrice: 250 },
      { name: "Medium (300g / 20 pcs)", price: 260, originalPrice: 300 },
      { name: "Large (350g / 12 pcs)", price: 310, originalPrice: 360 }
    ]
  },
  {
    id: "drools-cat-litter",
    title: "Drools Clumping Lavender Cat Litter 10L",
    category: "grooming",
    categoryLabel: "Grooming & Hygiene",
    rating: 4.7,
    reviews: 590,
    badge: "Odor Lock",
    badgeColor: "bg-indigo-600 text-white",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=600&q=80",
    description: "High-grade 100% natural sodium bentonite clay litter with quick clumping action and soothing lavender odor lock technology.",
    benefits: ["99.5% dust-free to protect feline respiratory health", "Instant tight clumps for effortless scooping", "Long-lasting odor control for Mumbai apartments"],
    variants: [
      { name: "5 Litres", price: 375, originalPrice: 420 },
      { name: "10 Litres", price: 699, originalPrice: 790 }
    ]
  },
  {
    id: "tactical-dog-harness",
    title: "Heavy-Duty No-Pull Reflective Dog Harness",
    category: "accessories",
    categoryLabel: "Accessories",
    rating: 4.8,
    reviews: 240,
    badge: "Safety Grip",
    badgeColor: "bg-slate-800 text-white",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80",
    description: "Ergonomic, breathable air-mesh tactical harness with dual heavy-duty D-rings, sturdy grip handle, and 3M reflective safety stitching.",
    benefits: ["Stops choking and distributes pulling pressure evenly", "High-visibility reflective straps for nighttime walks", "Quick snap buckles with easy adjustment points"],
    variants: [
      { name: "Medium (Chest 50-65cm)", price: 699, originalPrice: 850 },
      { name: "Large (Chest 65-85cm)", price: 849, originalPrice: 999 },
      { name: "XL (Chest 80-105cm)", price: 999, originalPrice: 1200 }
    ]
  },
  {
    id: "bio-groom-shampoo",
    title: "Bio-Groom Herbal Anti-Tick & Flea Shampoo",
    category: "grooming",
    categoryLabel: "Grooming & Hygiene",
    rating: 4.8,
    reviews: 180,
    badge: "Herbal Care",
    badgeColor: "bg-teal-600 text-white",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80",
    description: "Soothing natural botanical extract shampoo with aloe vera, neem, and tea tree oils that keeps coat glossy and tick-free.",
    benefits: ["Repels ticks, fleas, and mites naturally", "pH-balanced gentle formulation", "Leaves a refreshing long-lasting herbal fragrance"],
    variants: [
      { name: "250 ml", price: 490, originalPrice: 550 },
      { name: "500 ml", price: 850, originalPrice: 950 },
      { name: "1000 ml", price: 1490, originalPrice: 1690 }
    ]
  },
  {
    id: "drools-calcium-bones",
    title: "Drools Absolute Calcium Milk Bone Treats",
    category: "treats",
    categoryLabel: "Treats",
    rating: 4.7,
    reviews: 210,
    badge: "Vet Choice",
    badgeColor: "bg-amber-600 text-white",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    description: "Premium calcium and phosphorus fortified chew bones designed to promote strong teeth, joint mobility, and jaw exercise.",
    benefits: ["Optimal 2:1 Calcium to Phosphorus ratio", "Reduces tartar buildup naturally", "Real milk flavor pups love"],
    variants: [
      { name: "Jar of 30 Bones", price: 249, originalPrice: 280 },
      { name: "Jar of 60 Bones", price: 449, originalPrice: 499 },
      { name: "Jar of 120 Bones", price: 799, originalPrice: 899 }
    ]
  },
  {
    id: "feather-wand-toy",
    title: "Interactive Telescopic Cat Teaser Feather Wand",
    category: "cat-toys",
    categoryLabel: "Cat Toys",
    rating: 4.9,
    reviews: 175,
    badge: "High Energy",
    badgeColor: "bg-purple-700 text-white",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=600&q=80",
    description: "Flexible carbon-fiber extendable wand with natural Guinea feathers, soft bells, and interchangeable teaser attachments.",
    benefits: ["Keeps indoor cats active and burns energy", "Extends up to 38 inches for safe play", "Includes 3 replaceable feather lures"],
    variants: [
      { name: "Standard (1 Wand + 1 Feather)", price: 180, originalPrice: 220 },
      { name: "Pro Set (Extendable Wand + 3 Refills)", price: 349, originalPrice: 450 }
    ]
  },
  {
    id: "rubber-chew-ball",
    title: "Durable Rubber Teething Chew Ball with Bell",
    category: "dog-toys",
    categoryLabel: "Dog Toys",
    rating: 4.8,
    reviews: 310,
    badge: "Tough Play",
    badgeColor: "bg-sky-600 text-white",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80",
    description: "High-bounce, puncture-resistant non-toxic natural rubber ball designed for fetch, jaw exercise, and puppy teething.",
    benefits: ["Non-toxic natural rubber", "Cleans teeth as dog chews", "Built-in enticing chime bell"],
    variants: [
      { name: "Medium (6.5 cm)", price: 240, originalPrice: 290 },
      { name: "Large (8.0 cm)", price: 320, originalPrice: 380 }
    ]
  },
  {
    id: "stainless-steel-bowl",
    title: "Anti-Skid Stainless Steel Pet Feeder Bowl",
    category: "bowls",
    categoryLabel: "Bowls & Feeders",
    rating: 4.7,
    reviews: 280,
    badge: "Non-Tip",
    badgeColor: "bg-teal-700 text-white",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80",
    description: "Food-grade stainless steel feeding bowl with removable heavy-duty non-slip rubber silicone base that prevents floor scratching and spills.",
    benefits: ["Rust-proof & dishwasher safe", "Anti-skid rubber base prevents mess", "Suitable for water, dry food, and wet pouches"],
    variants: [
      { name: "Medium (450 ml)", price: 199, originalPrice: 240 },
      { name: "Large (900 ml)", price: 299, originalPrice: 360 }
    ]
  }
];

// App State
let currentCategory = "all";
let searchQuery = "";
let selectedProductVariants = {};
let cart = [];
let wishlist = new Set();

// Initialize defaults for variants
PRODUCTS.forEach(product => {
  selectedProductVariants[product.id] = 0;
});

// Load cart from localStorage
try {
  const savedCart = localStorage.getItem("angel_pet_cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
} catch (e) {
  console.warn("Could not load cart from storage", e);
}

// Generate formatted WhatsApp single product link
function getWhatsAppOrderLink(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return "#";
  
  const variantIndex = selectedProductVariants[productId] || 0;
  const variant = product.variants[variantIndex];
  
  const message = `Hi Angel Pet Shop! I want to order *${product.title}* (${variant.name}) - *₹${variant.price.toLocaleString('en-IN')}*. Is this available for delivery in Ghatkopar/Mumbai?`;
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Toggle Wishlist Heart Icon
function toggleWishlist(productId, btnElem) {
  if (wishlist.has(productId)) {
    wishlist.delete(productId);
    btnElem.classList.remove("text-rose-500", "fill-rose-500");
    btnElem.classList.add("text-slate-300");
    showToast("Removed from wishlist");
  } else {
    wishlist.add(productId);
    btnElem.classList.remove("text-slate-300");
    btnElem.classList.add("text-rose-500", "fill-rose-500");
    showToast("Added to wishlist! ❤️");
  }
}

// Flash Sale Countdown Timer
function initFlashSaleTimer() {
  // 2 days, 15 hours, 48 mins, 30 secs from first load
  let countdownSeconds = 2 * 86400 + 15 * 3600 + 48 * 60 + 30;

  function updateDisplay() {
    const days = Math.floor(countdownSeconds / 86400);
    const hours = Math.floor((countdownSeconds % 86400) / 3600);
    const mins = Math.floor((countdownSeconds % 3600) / 60);
    const secs = countdownSeconds % 60;

    const daysEl = document.getElementById("timer-days");
    const hoursEl = document.getElementById("timer-hours");
    const minsEl = document.getElementById("timer-mins");
    const secsEl = document.getElementById("timer-secs");

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(secs).padStart(2, '0');

    if (countdownSeconds > 0) {
      countdownSeconds--;
    } else {
      countdownSeconds = 86400; // Reset to 24h
    }
  }

  updateDisplay();
  setInterval(updateDisplay, 1000);
}

// Render "Best Sellers" Section (6 Cards with Full-Width Blue Button matching PetiGo)
function renderBestSellers() {
  const container = document.getElementById("best-sellers-grid");
  if (!container) return;

  const bestSellerProducts = PRODUCTS.slice(0, 6);

  container.innerHTML = bestSellerProducts.map(product => {
    const activeVarIdx = selectedProductVariants[product.id] || 0;
    const variant = product.variants[activeVarIdx] || product.variants[0];
    const isWished = wishlist.has(product.id);

    return `
      <div class="pet-card bg-white rounded-2xl border border-slate-200 p-3.5 flex flex-col justify-between group relative" data-id="${product.id}">
        
        <!-- Wishlist Button -->
        <button 
          type="button" 
          onclick="toggleWishlist('${product.id}', this.querySelector('i'))" 
          class="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 shadow-sm border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-colors"
          title="Save to wishlist"
        >
          <i data-lucide="heart" class="w-4 h-4 ${isWished ? 'text-rose-500 fill-rose-500' : 'text-slate-300'} transition-colors"></i>
        </button>

        <div>
          <!-- Product Photo on Clean White (Matching PetiGo) -->
          <div class="relative bg-slate-50/70 rounded-xl overflow-hidden aspect-square flex items-center justify-center p-3 mb-3 cursor-pointer group-hover:bg-sky-50/40 transition-colors" onclick="openQuickView('${product.id}')">
            <img 
              src="${product.image}" 
              alt="${product.title}" 
              class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>

          <!-- Product Details -->
          <div class="space-y-1 mb-3">
            <h3 class="font-heading font-bold text-slate-800 text-xs sm:text-sm line-clamp-1 hover:text-sky-600 cursor-pointer transition-colors" onclick="openQuickView('${product.id}')">
              ${product.title}
            </h3>

            <!-- Price in INR -->
            <div class="flex items-baseline gap-1.5">
              <span class="font-heading font-black text-sm sm:text-base text-slate-900">₹${variant.price.toLocaleString('en-IN')}</span>
              ${variant.originalPrice ? `<span class="text-[11px] text-slate-400 line-through">₹${variant.originalPrice.toLocaleString('en-IN')}</span>` : ''}
            </div>

            <!-- Star Rating (Gold Stars matching PetiGo) -->
            <div class="flex items-center gap-1 text-[11px]">
              <div class="flex text-amber-400 text-xs">★★★★★</div>
              <span class="text-slate-400 text-[10px]">(${product.reviews})</span>
            </div>
          </div>
        </div>

        <!-- Full-Width Blue Add to Cart Button (Exact PetiGo Match) -->
        <button 
          type="button" 
          onclick="addToCart('${product.id}', ${activeVarIdx})" 
          class="w-full bg-[#0284C7] hover:bg-[#0369A1] active:scale-[0.98] text-white font-extrabold text-xs py-2.5 px-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5"
        >
          <i data-lucide="shopping-cart" class="w-3.5 h-3.5"></i>
          <span>Add to Cart</span>
        </button>

      </div>
    `;
  }).join('');
}

// Render Dog Toys / Dog Supplies Showcase (4 Cards matching PetiGo)
function renderDogSupplies() {
  const container = document.getElementById("dog-supplies-grid");
  if (!container) return;

  const dogProducts = PRODUCTS.filter(p => p.category === "dog-food" || p.category === "treats" || p.category === "accessories" || p.category === "dog-toys").slice(0, 4);

  container.innerHTML = dogProducts.map(product => {
    const activeVarIdx = selectedProductVariants[product.id] || 0;
    const variant = product.variants[activeVarIdx] || product.variants[0];
    const isWished = wishlist.has(product.id);

    return `
      <div class="pet-card bg-white rounded-2xl border border-slate-200 p-3.5 flex flex-col justify-between group relative" data-id="${product.id}">
        <button 
          type="button" 
          onclick="toggleWishlist('${product.id}', this.querySelector('i'))" 
          class="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white/90 shadow-sm border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-colors"
        >
          <i data-lucide="heart" class="w-3.5 h-3.5 ${isWished ? 'text-rose-500 fill-rose-500' : 'text-slate-300'}"></i>
        </button>

        <div>
          <div class="relative bg-slate-50/70 rounded-xl overflow-hidden aspect-square flex items-center justify-center p-3 mb-2.5 cursor-pointer group-hover:bg-amber-50/40 transition-colors" onclick="openQuickView('${product.id}')">
            <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform" />
          </div>

          <h4 class="font-heading font-bold text-slate-800 text-xs line-clamp-1 hover:text-sky-600 cursor-pointer" onclick="openQuickView('${product.id}')">
            ${product.title}
          </h4>

          <div class="flex items-baseline gap-1 mt-0.5">
            <span class="font-heading font-bold text-xs sm:text-sm text-slate-900">₹${variant.price.toLocaleString('en-IN')}</span>
          </div>

          <div class="flex items-center gap-1 text-[10px] text-amber-400 mt-0.5">
            ★★★★★ <span class="text-slate-400">(${product.reviews})</span>
          </div>
        </div>

        <button 
          type="button" 
          onclick="addToCart('${product.id}', ${activeVarIdx})" 
          class="w-full mt-2.5 bg-slate-100 hover:bg-[#0284C7] hover:text-white text-slate-700 font-bold text-xs py-2 px-2.5 rounded-lg transition-colors flex items-center justify-center gap-1"
        >
          <i data-lucide="plus" class="w-3.5 h-3.5"></i>
          <span>Add to Basket</span>
        </button>
      </div>
    `;
  }).join('');
}

// Render Cat Essentials Showcase (4 Cards matching PetiGo)
function renderCatEssentials() {
  const container = document.getElementById("cat-essentials-grid");
  if (!container) return;

  const catProducts = PRODUCTS.filter(p => p.category === "cat-food" || p.category === "cat-toys" || p.category === "grooming").slice(0, 4);

  container.innerHTML = catProducts.map(product => {
    const activeVarIdx = selectedProductVariants[product.id] || 0;
    const variant = product.variants[activeVarIdx] || product.variants[0];
    const isWished = wishlist.has(product.id);

    return `
      <div class="pet-card bg-white rounded-2xl border border-slate-200 p-3.5 flex flex-col justify-between group relative" data-id="${product.id}">
        <button 
          type="button" 
          onclick="toggleWishlist('${product.id}', this.querySelector('i'))" 
          class="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white/90 shadow-sm border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-colors"
        >
          <i data-lucide="heart" class="w-3.5 h-3.5 ${isWished ? 'text-rose-500 fill-rose-500' : 'text-slate-300'}"></i>
        </button>

        <div>
          <div class="relative bg-slate-50/70 rounded-xl overflow-hidden aspect-square flex items-center justify-center p-3 mb-2.5 cursor-pointer group-hover:bg-purple-50/40 transition-colors" onclick="openQuickView('${product.id}')">
            <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform" />
          </div>

          <h4 class="font-heading font-bold text-slate-800 text-xs line-clamp-1 hover:text-sky-600 cursor-pointer" onclick="openQuickView('${product.id}')">
            ${product.title}
          </h4>

          <div class="flex items-baseline gap-1 mt-0.5">
            <span class="font-heading font-bold text-xs sm:text-sm text-slate-900">₹${variant.price.toLocaleString('en-IN')}</span>
          </div>

          <div class="flex items-center gap-1 text-[10px] text-amber-400 mt-0.5">
            ★★★★★ <span class="text-slate-400">(${product.reviews})</span>
          </div>
        </div>

        <button 
          type="button" 
          onclick="addToCart('${product.id}', ${activeVarIdx})" 
          class="w-full mt-2.5 bg-slate-100 hover:bg-[#0284C7] hover:text-white text-slate-700 font-bold text-xs py-2 px-2.5 rounded-lg transition-colors flex items-center justify-center gap-1"
        >
          <i data-lucide="plus" class="w-3.5 h-3.5"></i>
          <span>Add to Basket</span>
        </button>
      </div>
    `;
  }).join('');
}

// Category filter interaction from Circular Category Bubbles
function selectCategoryBubble(category) {
  currentCategory = category;
  
  // Highlight active bubble if matching
  document.querySelectorAll(".category-bubble").forEach(b => {
    if (b.dataset.category === category) {
      b.classList.add("ring-2", "ring-[#0284C7]");
    } else {
      b.classList.remove("ring-2", "ring-[#0284C7]");
    }
  });

  const catalogSec = document.getElementById("catalog-section");
  if (catalogSec) {
    catalogSec.scrollIntoView({ behavior: 'smooth' });
  }

  renderFullCatalog();
}

// Render Filterable Full Catalog Grid
function renderFullCatalog() {
  const grid = document.getElementById("full-catalog-grid");
  const countBadge = document.getElementById("catalog-count");
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    const matchCat = currentCategory === "all" || p.category === currentCategory || 
      (currentCategory === "dogs" && (p.category === "dog-food" || p.category === "dog-toys" || p.category === "accessories")) ||
      (currentCategory === "cats" && (p.category === "cat-food" || p.category === "cat-toys" || p.category === "grooming"));
    
    const matchSearch = !searchQuery || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCat && matchSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} products`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center bg-slate-50 rounded-2xl border border-slate-200">
        <p class="text-sm font-bold text-slate-700">No products found matching your search</p>
        <button onclick="currentCategory='all'; searchQuery=''; renderFullCatalog();" class="mt-3 px-4 py-2 bg-[#0284C7] text-white text-xs font-bold rounded-xl">View All Items</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const activeVarIdx = selectedProductVariants[product.id] || 0;
    const variant = product.variants[activeVarIdx] || product.variants[0];
    const waLink = getWhatsAppOrderLink(product.id);

    return `
      <div class="pet-card bg-white rounded-2xl border border-slate-200 p-4 flex flex-col justify-between group">
        <div>
          <div class="relative bg-slate-50 rounded-xl overflow-hidden aspect-square flex items-center justify-center p-3 mb-3 cursor-pointer" onclick="openQuickView('${product.id}')">
            <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform" />
            <span class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold ${product.badgeColor}">
              ${product.badge}
            </span>
          </div>

          <span class="text-[10px] font-extrabold uppercase tracking-wider text-sky-700">${product.categoryLabel}</span>
          <h3 class="font-heading font-bold text-slate-900 text-sm line-clamp-2 hover:text-sky-600 cursor-pointer mb-2" onclick="openQuickView('${product.id}')">
            ${product.title}
          </h3>

          <!-- Variant Switcher Pills -->
          <div class="flex flex-wrap gap-1 mb-3">
            ${product.variants.map((v, idx) => `
              <button 
                type="button" 
                onclick="selectVariant('${product.id}', ${idx})" 
                class="px-2 py-0.5 text-[10px] rounded-md font-semibold transition-all ${
                  idx === activeVarIdx 
                    ? 'bg-[#0284C7] text-white shadow-xs' 
                    : 'bg-slate-100 text-slate-700 hover:bg-sky-100'
                }"
              >
                ${v.name}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="pt-3 border-t border-slate-100 space-y-2">
          <div class="flex items-center justify-between">
            <span class="font-heading font-black text-lg text-slate-900">₹${variant.price.toLocaleString('en-IN')}</span>
            <button 
              type="button" 
              onclick="addToCart('${product.id}', ${activeVarIdx})" 
              class="w-8 h-8 rounded-lg bg-slate-900 hover:bg-[#0284C7] text-white flex items-center justify-center transition-colors"
              title="Add to Cart"
            >
              <i data-lucide="plus" class="w-4 h-4"></i>
            </button>
          </div>

          <a 
            href="${waLink}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="w-full inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs py-2 px-3 rounded-xl transition-all shadow-xs"
          >
            <i data-lucide="message-circle" class="w-3.5 h-3.5 fill-current"></i>
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function selectVariant(productId, variantIndex) {
  selectedProductVariants[productId] = variantIndex;
  renderFullCatalog();
  renderBestSellers();
}

// Cart Drawer Functions
function toggleCartDrawer(open) {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");
  if (!drawer || !overlay) return;

  if (open) {
    renderCart();
    overlay.classList.remove("hidden");
    setTimeout(() => drawer.classList.add("open"), 10);
  } else {
    drawer.classList.remove("open");
    setTimeout(() => overlay.classList.add("hidden"), 300);
  }
}

function addToCart(productId, variantIndex = 0) {
  const existing = cart.find(item => item.productId === productId && item.variantIndex === variantIndex);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ productId, variantIndex, quantity: 1 });
  }

  saveCart();
  updateCartBadge();
  showToast("Added to WhatsApp Order Basket! 🐾");
  toggleCartDrawer(true);
}

function changeCartQuantity(productId, variantIndex, delta) {
  const index = cart.findIndex(item => item.productId === productId && item.variantIndex === variantIndex);
  if (index === -1) return;

  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  renderCart();
  updateCartBadge();
}

function saveCart() {
  try {
    localStorage.setItem("angel_pet_cart", JSON.stringify(cart));
  } catch (e) {
    console.warn("Storage error", e);
  }
}

function updateCartBadge() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const badges = document.querySelectorAll(".cart-count-badge");
  badges.forEach(badge => {
    badge.textContent = count;
    if (count > 0) {
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  });

  const headerTotal = document.getElementById("header-cart-total");
  if (headerTotal) {
    let sum = 0;
    cart.forEach(item => {
      const prod = PRODUCTS.find(p => p.id === item.productId);
      if (prod) {
        const v = prod.variants[item.variantIndex] || prod.variants[0];
        sum += v.price * item.quantity;
      }
    });
    headerTotal.textContent = `₹${sum.toLocaleString('en-IN')}`;
  }
}

function renderCart() {
  const container = document.getElementById("cart-items-container");
  const emptyState = document.getElementById("cart-empty-state");
  const contentWrapper = document.getElementById("cart-content-wrapper");
  const totalElem = document.getElementById("cart-total-price");
  const waBtn = document.getElementById("cart-whatsapp-checkout");

  if (!container) return;

  if (cart.length === 0) {
    if (emptyState) emptyState.classList.remove("hidden");
    if (contentWrapper) contentWrapper.classList.add("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");
  if (contentWrapper) contentWrapper.classList.remove("hidden");

  let grandTotal = 0;
  const orderSummaryLines = [];

  container.innerHTML = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) return '';
    const variant = product.variants[item.variantIndex] || product.variants[0];
    const itemTotal = variant.price * item.quantity;
    grandTotal += itemTotal;

    orderSummaryLines.push(`• ${item.quantity}x ${product.title} (${variant.name}) - ₹${itemTotal.toLocaleString('en-IN')}`);

    return `
      <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
        <img src="${product.image}" alt="${product.title}" class="w-14 h-14 object-cover rounded-lg flex-shrink-0" />
        <div class="flex-1 min-w-0">
          <h4 class="font-bold text-slate-900 text-xs truncate">${product.title}</h4>
          <span class="text-[11px] text-slate-500 block mb-0.5">Size: ${variant.name}</span>
          <span class="font-heading font-black text-[#0284C7] text-sm">₹${variant.price.toLocaleString('en-IN')}</span>
        </div>
        <div class="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1">
          <button type="button" onclick="changeCartQuantity('${item.productId}', ${item.variantIndex}, -1)" class="w-6 h-6 flex items-center justify-center text-slate-600 hover:text-rose-600 rounded font-bold">
            -
          </button>
          <span class="text-xs font-bold w-5 text-center text-slate-900">${item.quantity}</span>
          <button type="button" onclick="changeCartQuantity('${item.productId}', ${item.variantIndex}, 1)" class="w-6 h-6 flex items-center justify-center text-slate-600 hover:text-sky-600 rounded font-bold">
            +
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (totalElem) {
    totalElem.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
  }

  const fullMessage = `Hi Angel Pet Shop! I would like to order the following items for delivery in Mumbai:\n\n${orderSummaryLines.join('\n')}\n\n*Estimated Total: ₹${grandTotal.toLocaleString('en-IN')}*\n\nPlease confirm availability and delivery timeframe to Ghatkopar. Thank you!`;
  
  if (waBtn) {
    waBtn.href = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Quick View Modal
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("quick-view-modal");
  const modalContent = document.getElementById("quick-view-body");
  if (!modal || !modalContent) return;

  const activeVarIdx = selectedProductVariants[product.id] || 0;
  const activeVariant = product.variants[activeVarIdx] || product.variants[0];
  const waLink = getWhatsAppOrderLink(product.id);

  modalContent.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div class="relative bg-slate-50 rounded-2xl overflow-hidden flex items-center justify-center p-4">
        <img src="${product.image}" alt="${product.title}" class="w-full h-80 object-cover rounded-xl" />
        <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold shadow-xs ${product.badgeColor}">
          ${product.badge}
        </span>
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span class="font-extrabold text-sky-700 uppercase tracking-wider">${product.categoryLabel}</span>
            <div class="flex items-center gap-1 text-amber-500 font-semibold">
              <span>★ ★ ★ ★ ★</span>
              <span class="text-slate-400">(${product.reviews} reviews)</span>
            </div>
          </div>

          <h2 class="font-heading font-black text-2xl text-slate-900 mb-2">${product.title}</h2>
          <p class="text-slate-600 text-xs leading-relaxed mb-4">${product.description}</p>

          <div class="bg-sky-50 border border-sky-100 rounded-xl p-3.5 mb-4">
            <h4 class="text-xs font-bold text-sky-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i data-lucide="shield-check" class="w-4 h-4 text-sky-600"></i> Key Nutrition Benefits
            </h4>
            <ul class="text-xs text-slate-700 space-y-1.5">
              ${product.benefits.map(b => `<li class="flex items-start gap-1.5">• <span>${b}</span></li>`).join('')}
            </ul>
          </div>

          <div class="mb-4">
            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Select Size / Pack:</span>
            <div class="flex flex-wrap gap-2">
              ${product.variants.map((v, idx) => `
                <button 
                  type="button" 
                  onclick="selectModalVariant('${product.id}', ${idx})" 
                  class="px-3 py-1.5 text-xs rounded-xl font-semibold transition-all ${
                    idx === activeVarIdx 
                      ? 'bg-[#0284C7] text-white shadow-sm' 
                      : 'bg-slate-100 text-slate-700 hover:bg-sky-100'
                  }"
                >
                  ${v.name} · ₹${v.price.toLocaleString('en-IN')}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-200">
          <div class="flex items-baseline justify-between mb-4">
            <div>
              <span class="text-3xl font-black font-heading text-slate-900">₹${activeVariant.price.toLocaleString('en-IN')}</span>
              ${activeVariant.originalPrice ? `<span class="text-sm text-slate-400 line-through ml-2">₹${activeVariant.originalPrice.toLocaleString('en-IN')}</span>` : ''}
            </div>
            <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              ⚡ In Stock at Ghatkopar
            </span>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <a 
              href="${waLink}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl shadow-sm transition-all text-xs"
            >
              <i data-lucide="message-circle" class="w-4 h-4 fill-current"></i>
              <span>Order on WhatsApp</span>
            </a>
            <button 
              type="button" 
              onclick="addToCart('${product.id}', ${activeVarIdx}); closeQuickView();" 
              class="inline-flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold py-3 px-4 rounded-xl transition-all text-xs shadow-sm"
            >
              <i data-lucide="shopping-cart" class="w-4 h-4"></i>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.classList.add("overflow-hidden");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function selectModalVariant(productId, variantIndex) {
  selectedProductVariants[productId] = variantIndex;
  openQuickView(productId);
  renderFullCatalog();
  renderBestSellers();
}

function closeQuickView() {
  const modal = document.getElementById("quick-view-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
  }
}

// Toast notification
function showToast(message) {
  let toast = document.getElementById("global-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "global-toast";
    toast.className = "fixed bottom-24 right-6 z-50 bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-2xl transition-all transform translate-y-4 opacity-0 pointer-events-none";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.remove("translate-y-4", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-4", "opacity-0");
  }, 2500);
}

// Global initialization
document.addEventListener("DOMContentLoaded", () => {
  renderBestSellers();
  renderDogSupplies();
  renderCatEssentials();
  renderFullCatalog();
  updateCartBadge();
  initFlashSaleTimer();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});
