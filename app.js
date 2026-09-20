// Angel Pet Shop - Interactive Application Logic

const STORE_CONFIG = {
  name: "Angel Pet Shop",
  phone: "+91 95943 41999",
  whatsappNumber: "919594341999",
  address: "Pachvati niwas Chawl, Asalpha Village, Andheri - Ghatkopar Link Rd, Jambhulpada, Ghatkopar West, Mumbai, Maharashtra 400084",
  rating: 4.6,
  reviewsCount: "16+ Google Reviews",
  closingHour: 22, // 10 PM
  closingMinute: 30 // 10:30 PM
};

// 12 Realistic Popular Indian Pet Products
const PRODUCTS = [
  {
    id: "rc-maxi-adult",
    title: "Royal Canin Maxi Adult Dog Food",
    category: "dog-food",
    categoryLabel: "Dog Food",
    rating: 4.9,
    reviews: 42,
    badge: "Best Seller",
    badgeColor: "bg-blue-600",
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
    title: "Farmina N&D Grain-Free Pumpkin Lamb & Blueberry",
    category: "dog-food",
    categoryLabel: "Dog Food",
    rating: 4.8,
    reviews: 29,
    badge: "Grain-Free",
    badgeColor: "bg-amber-600",
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
    reviews: 58,
    badge: "Popular in Mumbai",
    badgeColor: "bg-indigo-600",
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
    title: "Sheba Premium Wet Cat Food Tuna Fillets with Salmon",
    category: "cat-food",
    categoryLabel: "Cat Food",
    rating: 4.9,
    reviews: 36,
    badge: "Gourmet Pick",
    badgeColor: "bg-rose-500",
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
    id: "drools-calcium-bones",
    title: "Drools Absolute Calcium Milk Bones",
    category: "treats-chews",
    categoryLabel: "Treats & Chews",
    rating: 4.7,
    reviews: 64,
    badge: "Vet Recommended",
    badgeColor: "bg-sky-600",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    description: "Premium calcium and phosphorus fortified chew bones designed to promote strong teeth, joint mobility, and jaw exercise.",
    benefits: ["Optimal 2:1 Calcium to Phosphorus ratio", "Reduces tartar buildup and plaque naturally", "Irresistible real milk flavor pups love"],
    variants: [
      { name: "Jar of 30 Bones", price: 249, originalPrice: 280 },
      { name: "Jar of 60 Bones", price: 449, originalPrice: 499 },
      { name: "Jar of 120 Bones", price: 799, originalPrice: 899 }
    ]
  },
  {
    id: "gnawlers-calcium-chews",
    title: "Gnawlers Heart-Shaped Calcium Milk Dental Chews",
    category: "treats-chews",
    categoryLabel: "Treats & Chews",
    rating: 4.8,
    reviews: 31,
    badge: "Best Seller",
    badgeColor: "bg-blue-600",
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
    id: "bio-groom-shampoo",
    title: "Bio-Groom Herbal Anti-Tick & Flea Pet Shampoo",
    category: "grooming-hygiene",
    categoryLabel: "Grooming & Hygiene",
    rating: 4.8,
    reviews: 22,
    badge: "Herbal Care",
    badgeColor: "bg-cyan-700",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80",
    description: "Soothing natural botanical extract shampoo with aloe vera, neem, and tea tree oils that keeps coat glossy and tick-free.",
    benefits: ["Repels ticks, fleas, and mites naturally", "pH-balanced gentle formulation that doesn't strip oils", "Leaves a refreshing long-lasting herbal fragrance"],
    variants: [
      { name: "250 ml", price: 490, originalPrice: 550 },
      { name: "500 ml", price: 850, originalPrice: 950 },
      { name: "1000 ml (1L)", price: 1490, originalPrice: 1690 }
    ]
  },
  {
    id: "drools-cat-litter",
    title: "Drools Premium Bentonite Lavender Cat Litter",
    category: "grooming-hygiene",
    categoryLabel: "Grooming & Hygiene",
    rating: 4.6,
    reviews: 47,
    badge: "Fast Clumping",
    badgeColor: "bg-indigo-600",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=600&q=80",
    description: "High-grade 100% natural sodium bentonite clay litter with quick clumping action and soothing lavender odor lock technology.",
    benefits: ["99.5% dust-free to protect feline respiratory health", "Instant tight clumps for effortless scooping", "Long-lasting odor control for Mumbai apartments"],
    variants: [
      { name: "5 Litres", price: 375, originalPrice: 420 },
      { name: "10 Litres", price: 699, originalPrice: 790 }
    ]
  },
  {
    id: "feather-wand-toy",
    title: "Interactive Telescopic Feather Teaser Wand for Cats",
    category: "toys-accessories",
    categoryLabel: "Toys & Accessories",
    rating: 4.9,
    reviews: 53,
    badge: "Play Favorite",
    badgeColor: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=600&q=80",
    description: "Flexible carbon-fiber extendable wand with natural Guinea feathers, soft bells, and interchangeable teaser attachments.",
    benefits: ["Keeps indoor cats active and burns pent-up energy", "Extends up to 38 inches for safe, energetic play", "Includes 3 replaceable feather lures"],
    variants: [
      { name: "Standard (1 Wand + 1 Feather)", price: 180, originalPrice: 220 },
      { name: "Pro Set (Extendable Wand + 3 Refills)", price: 349, originalPrice: 450 }
    ]
  },
  {
    id: "tactical-dog-harness",
    title: "Heavy-Duty No-Pull Reflective Dog Harness & Leash Set",
    category: "toys-accessories",
    categoryLabel: "Toys & Accessories",
    rating: 4.8,
    reviews: 38,
    badge: "Heavy Duty",
    badgeColor: "bg-slate-700",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80",
    description: "Ergonomic, breathable air-mesh tactical harness with dual heavy-duty D-rings, sturdy grip handle, and 3M reflective safety stitching.",
    benefits: ["Stops choking and distributes pulling pressure evenly", "High-visibility reflective straps for nighttime Mumbai walks", "Quick snap buckles with easy adjustment points"],
    variants: [
      { name: "Medium (Chest 50-65cm)", price: 699, originalPrice: 850 },
      { name: "Large (Chest 65-85cm)", price: 849, originalPrice: 999 },
      { name: "XL (Chest 80-105cm)", price: 999, originalPrice: 1200 }
    ]
  },
  {
    id: "pedigree-pro-adult",
    title: "Pedigree Pro Expert Nutrition Active Adult Dog Food",
    category: "dog-food",
    categoryLabel: "Dog Food",
    rating: 4.7,
    reviews: 41,
    badge: "In Stock",
    badgeColor: "bg-blue-700",
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=600&q=80",
    description: "Professional veterinarian-crafted formula with 28% crude protein and active antioxidants for energetic agility and endurance.",
    benefits: ["Quality proteins for lean muscle mass maintenance", "Zinc & Omega fatty acids for glossy skin & coat", "Prebiotics to support healthy gut flora"],
    variants: [
      { name: "1.2 kg", price: 480, originalPrice: 520 },
      { name: "3 kg", price: 1150, originalPrice: 1250 },
      { name: "10 kg", price: 3450, originalPrice: 3800 }
    ]
  },
  {
    id: "purepet-mackerel-bundle",
    title: "Purepet Ocean Mackerel Wet Cat Food Pouches",
    category: "cat-food",
    categoryLabel: "Cat Food",
    rating: 4.6,
    reviews: 35,
    badge: "Value Pack",
    badgeColor: "bg-indigo-700",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=600&q=80",
    description: "Mouth-watering tender mackerel chunks in gravy enriched with organic minerals and essential taurine.",
    benefits: ["Rich in Omega 3 & 6 for shining coat", "Helps keep urinary system healthy", "Convenient single-serve 80g mess-free pouches"],
    variants: [
      { name: "Pack of 12 (80g each)", price: 360, originalPrice: 420 },
      { name: "Pack of 24 (80g each)", price: 690, originalPrice: 840 }
    ]
  }
];

// App State
let currentCategory = "all";
let searchQuery = "";
let selectedProductVariants = {}; // map of productId -> variantIndex
let cart = []; // array of { productId, variantIndex, quantity }

// Initialize defaults for variants
PRODUCTS.forEach(product => {
  selectedProductVariants[product.id] = 0;
});

// Load cart from localStorage if available
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

// Generate general WhatsApp inquiry link
function getGeneralWhatsAppLink(subject = "") {
  let message = `Hi Angel Pet Shop! I have an inquiry about your pet supplies and local delivery in Mumbai.`;
  if (subject) {
    message = `Hi Angel Pet Shop! I have an inquiry about *${subject}*. Are you open and can you deliver to Ghatkopar?`;
  }
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Check live store open status
function checkStoreStatus() {
  const now = new Date();
  const currentHours = now.getHours();
  const currentMins = now.getMinutes();
  const timeInMinutes = currentHours * 60 + currentMins;
  
  // Store open from 9:00 AM (540 min) to 10:30 PM (1350 min)
  const openTime = 9 * 60;
  const closeTime = 22 * 60 + 30; // 10:30 PM
  
  const isOpen = timeInMinutes >= openTime && timeInMinutes <= closeTime;
  
  const statusBadges = document.querySelectorAll(".store-status-badge");
  statusBadges.forEach(badge => {
    if (isOpen) {
      badge.innerHTML = `
        <span class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span class="text-xs font-semibold text-emerald-800">Open Now · Closes at 10:30 PM</span>
      `;
    } else {
      badge.innerHTML = `
        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
        <span class="text-xs font-semibold text-amber-800">Opens Tomorrow at 9:00 AM</span>
      `;
    }
  });
}

// Render Products Catalog
function renderProducts() {
  const grid = document.getElementById("product-grid");
  const emptyState = document.getElementById("product-empty-state");
  const countBadge = document.getElementById("product-count-badge");
  
  if (!grid) return;
  
  const filtered = PRODUCTS.filter(product => {
    const matchesCategory = currentCategory === "all" || product.category === currentCategory;
    const matchesSearch = !searchQuery || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} products found`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  grid.innerHTML = filtered.map(product => {
    const activeVarIdx = selectedProductVariants[product.id] || 0;
    const activeVariant = product.variants[activeVarIdx] || product.variants[0];
    const savings = activeVariant.originalPrice ? (activeVariant.originalPrice - activeVariant.price) : 0;
    const discountPercent = activeVariant.originalPrice ? Math.round((savings / activeVariant.originalPrice) * 100) : 0;
    const waLink = getWhatsAppOrderLink(product.id);

    return `
      <div class="product-card bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden flex flex-col justify-between group" data-id="${product.id}">
        <!-- Image & Badges -->
        <div class="relative bg-stone-50 overflow-hidden aspect-[4/3] flex items-center justify-center p-4">
          <img 
            src="${product.image}" 
            alt="${product.title}" 
            class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          
          <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold text-white shadow-sm ${product.badgeColor}">
              ${product.badge}
            </span>
            ${discountPercent > 0 ? `
              <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-500 text-white shadow-sm">
                Save ${discountPercent}%
              </span>
            ` : ''}
          </div>

          <button 
            type="button" 
            onclick="openQuickView('${product.id}')"
            class="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-stone-700 hover:text-blue-600 p-2 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 text-xs font-semibold flex items-center gap-1.5"
            title="Quick Details"
          >
            <i data-lucide="eye" class="w-4 h-4"></i>
            <span>Quick View</span>
          </button>
        </div>

        <!-- Product Details -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <!-- Category & Rating -->
            <div class="flex items-center justify-between text-xs text-stone-500 mb-1.5">
              <span class="font-bold text-blue-600 uppercase tracking-wider text-[11px]">${product.categoryLabel}</span>
              <div class="flex items-center gap-1 text-amber-500 font-semibold">
                <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
                <span>${product.rating}</span>
                <span class="text-stone-400 font-normal">(${product.reviews})</span>
              </div>
            </div>

            <!-- Title -->
            <h3 class="font-heading font-bold text-stone-900 text-lg leading-snug line-clamp-2 hover:text-blue-600 cursor-pointer mb-2" onclick="openQuickView('${product.id}')">
              ${product.title}
            </h3>

            <!-- Weight/Size Variant Selector -->
            <div class="mb-4">
              <span class="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1.5">Select Size / Pack:</span>
              <div class="flex flex-wrap gap-1.5">
                ${product.variants.map((v, idx) => `
                  <button 
                    type="button" 
                    onclick="selectVariant('${product.id}', ${idx})" 
                    class="px-2.5 py-1 text-xs rounded-lg font-medium transition-all ${
                      idx === activeVarIdx 
                        ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-400 ring-offset-1' 
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }"
                  >
                    ${v.name}
                  </button>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Price & Order Action -->
          <div class="pt-3 border-t border-stone-100 mt-2">
            <div class="flex items-baseline justify-between mb-3">
              <div>
                <span class="text-2xl font-bold font-heading text-stone-900">₹${activeVariant.price.toLocaleString('en-IN')}</span>
                ${activeVariant.originalPrice ? `
                  <span class="text-xs text-stone-400 line-through ml-1.5">₹${activeVariant.originalPrice.toLocaleString('en-IN')}</span>
                ` : ''}
              </div>
              <span class="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md flex items-center gap-1 border border-blue-100">
                <i data-lucide="truck" class="w-3 h-3 text-blue-600"></i> Ghatkopar Delivery
              </span>
            </div>

            <!-- Dual Actions: WhatsApp direct + Add to Cart -->
            <div class="grid grid-cols-5 gap-2">
              <a 
                href="${waLink}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="col-span-4 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-bold text-sm py-2.5 px-3 rounded-xl shadow-sm transition-all text-center"
              >
                <i data-lucide="message-circle" class="w-4 h-4 fill-current"></i>
                <span>Order via WhatsApp</span>
              </a>

              <button 
                type="button" 
                onclick="addToCart('${product.id}', ${activeVarIdx})" 
                class="col-span-1 inline-flex items-center justify-center bg-blue-50 hover:bg-blue-100 hover:text-blue-700 text-blue-700 rounded-xl transition-all border border-blue-100"
                title="Add to Bundle Cart"
              >
                <i data-lucide="plus" class="w-5 h-5"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-initialize Lucide icons in dynamically inserted HTML
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Select Variant for a card
function selectVariant(productId, variantIndex) {
  selectedProductVariants[productId] = variantIndex;
  renderProducts();
}

// Filter Tab Switch
function setCategory(category) {
  currentCategory = category;
  
  // Update UI Pills
  document.querySelectorAll(".cat-pill").forEach(pill => {
    if (pill.dataset.category === category) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  renderProducts();
}

// Cart Drawer & Management
function saveCart() {
  try {
    localStorage.setItem("angel_pet_cart", JSON.stringify(cart));
  } catch (e) {
    console.warn("Could not save cart", e);
  }
  updateCartBadge();
  renderCartDrawer();
}

function updateCartBadge() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll(".cart-count-badge");
  badges.forEach(b => {
    b.textContent = totalItems;
    if (totalItems > 0) {
      b.classList.remove("hidden");
    } else {
      b.classList.add("hidden");
    }
  });
}

function addToCart(productId, variantIndex = 0) {
  const existing = cart.find(item => item.productId === productId && item.variantIndex === variantIndex);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ productId, variantIndex, quantity: 1 });
  }
  saveCart();
  showToast("Added to your WhatsApp order list!");
}

function changeCartQuantity(productId, variantIndex, delta) {
  const item = cart.find(i => i.productId === productId && i.variantIndex === variantIndex);
  if (!item) return;
  
  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => !(i.productId === productId && i.variantIndex === variantIndex));
  }
  saveCart();
}

function clearCart() {
  cart = [];
  saveCart();
}

function toggleCartDrawer(open = true) {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");
  
  if (open) {
    renderCartDrawer();
    drawer.classList.add("open");
    overlay.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  } else {
    drawer.classList.remove("open");
    overlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

function renderCartDrawer() {
  const container = document.getElementById("cart-items-container");
  const totalElem = document.getElementById("cart-total-price");
  const waBtn = document.getElementById("cart-whatsapp-checkout");
  const emptyCartState = document.getElementById("cart-empty-state");
  const cartContent = document.getElementById("cart-content-wrapper");

  if (!container) return;

  if (cart.length === 0) {
    if (emptyCartState) emptyCartState.classList.remove("hidden");
    if (cartContent) cartContent.classList.add("hidden");
    return;
  }

  if (emptyCartState) emptyCartState.classList.add("hidden");
  if (cartContent) cartContent.classList.remove("hidden");

  let grandTotal = 0;
  let orderSummaryLines = [];

  container.innerHTML = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) return '';
    const variant = product.variants[item.variantIndex] || product.variants[0];
    const itemTotal = variant.price * item.quantity;
    grandTotal += itemTotal;

    orderSummaryLines.push(`• ${item.quantity}x ${product.title} (${variant.name}) - ₹${itemTotal.toLocaleString('en-IN')}`);

    return `
      <div class="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-200">
        <img src="${product.image}" alt="${product.title}" class="w-14 h-14 object-cover rounded-lg flex-shrink-0" />
        <div class="flex-1 min-w-0">
          <h4 class="font-bold text-stone-900 text-xs truncate">${product.title}</h4>
          <span class="text-[11px] text-stone-500 block mb-1">Variant: ${variant.name}</span>
          <span class="font-heading font-bold text-blue-900 text-sm">₹${variant.price.toLocaleString('en-IN')}</span>
        </div>
        <div class="flex items-center gap-1.5 bg-white border border-stone-200 rounded-lg p-1">
          <button type="button" onclick="changeCartQuantity('${item.productId}', ${item.variantIndex}, -1)" class="w-6 h-6 flex items-center justify-center text-stone-600 hover:text-red-600 rounded">
            -
          </button>
          <span class="text-xs font-bold w-5 text-center">${item.quantity}</span>
          <button type="button" onclick="changeCartQuantity('${item.productId}', ${item.variantIndex}, 1)" class="w-6 h-6 flex items-center justify-center text-stone-600 hover:text-blue-600 rounded">
            +
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (totalElem) {
    totalElem.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
  }

  // Pre-fill consolidated WhatsApp order message
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
      <!-- Image Section -->
      <div class="relative bg-stone-100 rounded-2xl overflow-hidden flex items-center justify-center p-4">
        <img src="${product.image}" alt="${product.title}" class="w-full h-80 object-cover rounded-xl" />
        <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${product.badgeColor}">
          ${product.badge}
        </span>
      </div>

      <!-- Info Section -->
      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs text-stone-500 mb-2">
            <span class="font-bold text-blue-600 uppercase tracking-wider">${product.categoryLabel}</span>
            <div class="flex items-center gap-1 text-amber-500 font-semibold">
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <span>${product.rating}</span>
              <span class="text-stone-400">(${product.reviews} reviews)</span>
            </div>
          </div>

          <h2 class="font-heading font-extrabold text-2xl text-stone-900 mb-3">${product.title}</h2>
          <p class="text-stone-600 text-sm leading-relaxed mb-4">${product.description}</p>

          <!-- Key Highlights -->
          <div class="bg-blue-50/70 border border-blue-100 rounded-xl p-3.5 mb-4">
            <h4 class="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i data-lucide="shield-check" class="w-4 h-4 text-blue-600"></i> Key Benefits
            </h4>
            <ul class="text-xs text-blue-950 space-y-1.5">
              ${product.benefits.map(b => `<li class="flex items-start gap-1.5">• <span>${b}</span></li>`).join('')}
            </ul>
          </div>

          <!-- Select Variant -->
          <div class="mb-4">
            <span class="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-2">Select Size / Pack:</span>
            <div class="flex flex-wrap gap-2">
              ${product.variants.map((v, idx) => `
                <button 
                  type="button" 
                  onclick="selectModalVariant('${product.id}', ${idx})" 
                  class="px-3 py-1.5 text-xs rounded-xl font-semibold transition-all ${
                    idx === activeVarIdx 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }"
                >
                  ${v.name} · ₹${v.price.toLocaleString('en-IN')}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Order Bar -->
        <div class="pt-4 border-t border-stone-200">
          <div class="flex items-baseline justify-between mb-4">
            <div>
              <span class="text-3xl font-extrabold font-heading text-stone-900">₹${activeVariant.price.toLocaleString('en-IN')}</span>
              ${activeVariant.originalPrice ? `<span class="text-sm text-stone-400 line-through ml-2">₹${activeVariant.originalPrice.toLocaleString('en-IN')}</span>` : ''}
            </div>
            <span class="text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-md">
              ⚡ In Stock at Ghatkopar
            </span>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <a 
              href="${waLink}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all text-sm"
            >
              <i data-lucide="message-circle" class="w-5 h-5 fill-current"></i>
              <span>Order on WhatsApp</span>
            </a>
            <button 
              type="button" 
              onclick="addToCart('${product.id}', ${activeVarIdx}); closeQuickView();" 
              class="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all text-sm shadow-md shadow-blue-500/20"
            >
              <i data-lucide="shopping-bag" class="w-4 h-4"></i>
              <span>Add to Bundle</span>
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
  renderProducts();
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
    toast.className = "fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-2xl z-50 flex items-center gap-2 transition-all duration-300 opacity-0 pointer-events-none border border-slate-700";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <i data-lucide="check-circle" class="w-4 h-4 text-blue-400"></i>
    <span>${message}</span>
  `;
  if (window.lucide) window.lucide.createIcons();

  toast.classList.remove("opacity-0", "pointer-events-none");
  toast.classList.add("opacity-100");

  setTimeout(() => {
    toast.classList.remove("opacity-100");
    toast.classList.add("opacity-0", "pointer-events-none");
  }, 2800);
}

// Mobile Menu Toggle
function toggleMobileMenu(forceClose = false) {
  const menu = document.getElementById("mobile-menu");
  if (!menu) return;
  if (forceClose) {
    menu.classList.add("hidden");
  } else {
    menu.classList.toggle("hidden");
  }
}

// Setup Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Initialize UI
  checkStoreStatus();
  updateCartBadge();
  renderProducts();

  // Search input handler
  const searchInput = document.getElementById("product-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Category filter pills
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const category = pill.dataset.category || "all";
      setCategory(category);
    });
  });

  // Check store status every 60 seconds
  setInterval(checkStoreStatus, 60000);
});
