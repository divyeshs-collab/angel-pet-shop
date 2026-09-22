/**
 * Angel Pet Shop - Authentic Retail E-Commerce Application Logic
 * Ghatkopar West, Mumbai · WhatsApp Requirement Ordering (Zero Online Payment)
 */

// Store Business Profile
const STORE = {
  name: "Angel Pet Shop",
  phone: "+91 95943 41999",
  displayPhone: "095943 41999",
  whatsappNumber: "919594341999",
  address: "Pachvati niwas Chawl, Asalpha village, Andheri - Ghatkopar Link Rd, Jambhulpada, Ghatkopar West, Mumbai 400084",
  rating: 4.6,
  totalReviews: 16,
  openHour: 10,
  openMinute: 0,
  closeHour: 22,
  closeMinute: 30
};

// Curated Pet Inventory with Variants and Genuine INR Pricing
const PRODUCTS = [
  {
    id: "royal-canin-maxi-adult",
    name: "Royal Canin Maxi Adult Dry Dog Food",
    brand: "Royal Canin",
    category: "dog-food",
    categoryName: "Dog Food & Diets",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80",
    description: "Tailored nutrition for large breed adult dogs (26 to 44 kg). Supports optimal bone, joint integrity, and digestive health.",
    variants: [
      { size: "4 kg", price: 3320 },
      { size: "10 kg", price: 6890 },
      { size: "15 kg", price: 9450 }
    ]
  },
  {
    id: "farmina-nd-grain-free-lamb",
    name: "Farmina N&D Grain-Free Lamb & Blueberry",
    brand: "Farmina N&D",
    category: "dog-food",
    categoryName: "Dog Food & Diets",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=600&q=80",
    description: "Ultra-premium Italian formulation with 96% protein of animal origin, wholesome pumpkin, and antioxidant-rich blueberries. 100% grain free.",
    variants: [
      { size: "800 g", price: 1090 },
      { size: "2.5 kg", price: 2990 },
      { size: "7 kg", price: 6490 }
    ]
  },
  {
    id: "pedigree-pro-puppy",
    name: "Pedigree PRO Professional Puppy Dog Food",
    brand: "Pedigree PRO",
    category: "dog-food",
    categoryName: "Dog Food & Diets",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80",
    description: "Professional nutrition formulation with 32% crude protein, zinc, and omega fatty acids for growing puppies and lactating mothers.",
    variants: [
      { size: "3 kg", price: 1050 },
      { size: "10 kg", price: 3150 },
      { size: "20 kg", price: 5600 }
    ]
  },
  {
    id: "whiskas-ocean-fish-adult",
    name: "Whiskas Ocean Fish Adult Dry Cat Food",
    brand: "Whiskas",
    category: "cat-food",
    categoryName: "Cat Food & Wet Meals",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80",
    description: "Crunchy kibbles with savory real ocean fish pockets, providing 41 essential nutrients, taurine, and urinary tract care.",
    variants: [
      { size: "1.2 kg", price: 450 },
      { size: "3 kg", price: 1050 },
      { size: "7 kg", price: 2250 }
    ]
  },
  {
    id: "sheba-deluxe-wet-fillets",
    name: "Sheba Premium Wet Cat Food Tuna Fillets Gravy",
    brand: "Sheba",
    category: "cat-food",
    categoryName: "Cat Food & Wet Meals",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80",
    description: "Delicate cuts of flaked genuine tuna and salmon in exquisite gravy. Highly palatable and provides vital daily hydration.",
    variants: [
      { size: "Pack of 6 (85g)", price: 390 },
      { size: "Pack of 12 (85g)", price: 750 },
      { size: "Pack of 24 (85g)", price: 1440 }
    ]
  },
  {
    id: "royal-canin-second-age-kitten",
    name: "Royal Canin Kitten Second Age (Dry Kibble)",
    brand: "Royal Canin",
    category: "cat-food",
    categoryName: "Cat Food & Wet Meals",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=600&q=80",
    description: "Essential immune support, digestive health, and balanced growth nutrients for young kittens from 4 to 12 months.",
    variants: [
      { size: "400 g", price: 490 },
      { size: "2 kg", price: 2150 },
      { size: "4 kg", price: 3850 }
    ]
  },
  {
    id: "gnawlers-dental-bones",
    name: "Gnawlers Calcium & Dental Chew Bones",
    brand: "Gnawlers",
    category: "treats",
    categoryName: "Treats & Dental Chews",
    image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=600&q=80",
    description: "Specially formulated dental chews that massage gums, reduce tartar build-up, and freshen breath with genuine milk protein.",
    variants: [
      { size: "Small (270g)", price: 290 },
      { size: "Medium (300g)", price: 350 },
      { size: "Large (350g)", price: 420 }
    ]
  },
  {
    id: "drools-100-natural-bentonite-litter",
    name: "Drools Clumping Bentonite Cat Litter (Lavender)",
    brand: "Drools",
    category: "grooming",
    categoryName: "Grooming & Cat Litter",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=600&q=80",
    description: "99.5% dust-free natural sodium bentonite clay litter with instant clumping and soothing lavender odor control for apartments.",
    variants: [
      { size: "5 Litres", price: 450 },
      { size: "10 Litres", price: 850 }
    ]
  },
  {
    id: "bio-groom-protein-lanolin-shampoo",
    name: "Bio-Groom Protein Lanolin Pet Shampoo",
    brand: "Bio-Groom",
    category: "grooming",
    categoryName: "Grooming & Cat Litter",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80",
    description: "Mild coconut oil based conditioning shampoo that cleans without stripping natural oils. pH balanced and tearless.",
    variants: [
      { size: "355 ml", price: 1250 },
      { size: "946 ml", price: 2650 }
    ]
  },
  {
    id: "himalaya-himcal-pet-supplement",
    name: "Himalaya HimCal Calcium & Phosphorus Tonic",
    brand: "Himalaya",
    category: "health",
    categoryName: "Supplements & Care",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80",
    description: "Ayurvedic calcium and phosphorus tonic ensuring strong bone development, teeth strength, and skeletal integrity in puppies and dogs.",
    variants: [
      { size: "200 ml", price: 180 },
      { size: "500 ml", price: 380 }
    ]
  },
  {
    id: "premium-padded-harness-leash",
    name: "Reflective Padded Dog Harness & Heavy-Duty Leash",
    brand: "Trixie / Local Premium",
    category: "accessories",
    categoryName: "Leashes & Toys",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80",
    description: "No-pull ergonomic harness with breathable air mesh, reinforced metal D-rings, and 3M reflective threading for evening walks.",
    variants: [
      { size: "Small", price: 650 },
      { size: "Medium", price: 850 },
      { size: "Large", price: 1150 }
    ]
  },
  {
    id: "kong-classic-durable-rubber-toy",
    name: "KONG Classic Durable Rubber Enrichment Dog Toy",
    brand: "KONG",
    category: "accessories",
    categoryName: "Leashes & Toys",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=600&q=80",
    description: "Gold standard of dog toys for over 40 years. Ultra-durable natural red rubber that cures boredom, anxiety, and satisfies instinctual chewing.",
    variants: [
      { size: "Medium", price: 990 },
      { size: "Large", price: 1350 }
    ]
  }
];

// Authentic Verified Google Reviews
const REVIEWS = [
  {
    author: "Rohit Sharma",
    rating: 5,
    time: "2 months ago",
    text: "Best pet shop in Asalpha/Ghatkopar. The owner is very helpful and arranges specific Royal Canin prescription food quickly. Very convenient to order on WhatsApp!"
  },
  {
    author: "Pooja V.",
    rating: 5,
    time: "3 months ago",
    text: "Genuine products at good rates. Bought Drools cat litter and kitten food. Quick doorstep delivery to my flat in Ghatkopar West."
  },
  {
    author: "Amey Kulkarni",
    rating: 4,
    time: "4 months ago",
    text: "Good collection of pet toys, treats, and dog belts. Open late till 10:30 PM which is really convenient after office hours."
  },
  {
    author: "Neha Merchant",
    rating: 5,
    time: "6 months ago",
    text: "Very polite staff, they don't push unnecessary items and guide honestly on puppy nutritional supplements."
  }
];

// App State
let currentCategory = 'all';
let searchQuery = '';
let selectedVariants = {}; // { [productId]: variantIndex }
let cart = []; // [ { id, productId, variantIndex, name, brand, image, size, price, quantity } ]
let activeFulfillment = 'Doorstep Delivery';

// --------------------------------------------------------------------------
// 1. Cart Management
// --------------------------------------------------------------------------
function loadCart() {
  try {
    const saved = localStorage.getItem('angel_pet_shop_cart');
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    cart = [];
  }
  updateCartUI();
}

function saveCart() {
  try {
    localStorage.setItem('angel_pet_shop_cart', JSON.stringify(cart));
  } catch (e) {
    console.error('Failed to save cart:', e);
  }
  updateCartUI();
}

function addToCart(productId, specificVariantIndex = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const vIdx = specificVariantIndex !== null 
    ? specificVariantIndex 
    : (selectedVariants[productId] || 0);

  const variant = product.variants[vIdx] || product.variants[0];
  const cartItemId = `${productId}_${vIdx}`;

  const existing = cart.find(item => item.id === cartItemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: cartItemId,
      productId: product.id,
      variantIndex: vIdx,
      name: product.name,
      brand: product.brand,
      image: product.image,
      size: variant.size,
      price: variant.price,
      quantity: 1
    });
  }

  saveCart();
  showToast(`Added ${product.name} (${variant.size}) to cart!`);

  // Animate button feedback
  const btn = document.getElementById(`add-btn-${productId}`);
  if (btn) {
    btn.classList.add('added');
    btn.innerHTML = `<i data-lucide="check" style="width: 14px; height: 14px;"></i> Added`;
    if (window.lucide) window.lucide.createIcons();
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = `<i data-lucide="shopping-bag" style="width: 14px; height: 14px;"></i> Add to Cart`;
      if (window.lucide) window.lucide.createIcons();
    }, 1400);
  }

  // Open cart drawer immediately so user sees their requirement
  openCart();
}

function updateCartQuantity(cartItemId, delta) {
  const itemIndex = cart.findIndex(i => i.id === cartItemId);
  if (itemIndex === -1) return;

  cart[itemIndex].quantity += delta;
  if (cart[itemIndex].quantity <= 0) {
    cart.splice(itemIndex, 1);
  }

  saveCart();
}

function removeFromCart(cartItemId) {
  cart = cart.filter(i => i.id !== cartItemId);
  saveCart();
}

function getCartTotals() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  return { totalItems, totalPrice };
}

function updateCartUI() {
  const { totalItems, totalPrice } = getCartTotals();

  // Header Badge
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  }

  // Drawer Header Count
  const drawerCount = document.getElementById('drawer-item-count');
  if (drawerCount) {
    drawerCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;
  }

  // Drawer Summary
  const subtotalElem = document.getElementById('summary-subtotal');
  const totalElem = document.getElementById('summary-total');
  if (subtotalElem) subtotalElem.textContent = `₹${totalPrice.toLocaleString('en-IN')}`;
  if (totalElem) totalElem.textContent = `₹${totalPrice.toLocaleString('en-IN')}`;

  // Floating Mobile Pill
  const floatingPill = document.getElementById('floating-cart-pill');
  const floatingText = document.getElementById('floating-cart-text');
  if (floatingPill && floatingText) {
    if (totalItems > 0) {
      floatingText.textContent = `Cart: ${totalItems} items (₹${totalPrice.toLocaleString('en-IN')})`;
      floatingPill.classList.add('show');
    } else {
      floatingPill.classList.remove('show');
    }
  }

  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <i data-lucide="shopping-bag" class="cart-empty-icon"></i>
        <h4 style="font-size: 16px; font-weight: 700; color: #0F172A; margin-bottom: 6px;">Your cart is empty</h4>
        <p style="font-size: 13px; color: #64748B; margin-bottom: 20px;">
          Select your required pet food, treats, or supplies and click "Add to Cart".
        </p>
        <button onclick="closeCart()" class="btn btn-primary btn-sm">
          Browse Pet Supplies
        </button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
        <div class="cart-item-info">
          <div class="cart-item-brand">${item.brand}</div>
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-variant">Size: <strong>${item.size}</strong> · ₹${item.price.toLocaleString('en-IN')}</div>
          
          <div class="cart-item-controls">
            <div class="cart-qty-stepper">
              <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)" aria-label="Decrease quantity">−</button>
              <span class="qty-number">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
            </div>
            
            <div class="cart-item-price">₹${itemTotal.toLocaleString('en-IN')}</div>
            
            <button class="cart-remove-btn" onclick="removeFromCart('${item.id}')" title="Remove item">
              <i data-lucide="trash-2" style="width: 15px; height: 15px;"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function openCart() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCart() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function handleOverlayClick(event) {
  if (event.target.id === 'cart-drawer-overlay') {
    closeCart();
  }
}

function setFulfillment(type) {
  activeFulfillment = type;
  const pillDel = document.getElementById('pill-delivery');
  const pillPick = document.getElementById('pill-pickup');
  if (pillDel && pillPick) {
    if (type === 'Doorstep Delivery') {
      pillDel.classList.add('active');
      pillPick.classList.remove('active');
    } else {
      pillPick.classList.add('active');
      pillDel.classList.remove('active');
    }
  }
}

// --------------------------------------------------------------------------
// 2. Proceed to WhatsApp (The Core Requirement Order Builder)
// --------------------------------------------------------------------------
async function proceedToWhatsApp() {
  if (cart.length === 0) {
    showToast('Your cart is empty! Please add items first.');
    return;
  }

  const customerName = document.getElementById('order-customer-name')?.value.trim() || 'Customer';
  const customerPhone = document.getElementById('order-customer-phone')?.value.trim() || '';
  const customerAddress = document.getElementById('order-customer-address')?.value.trim() || '';
  const customerNotes = document.getElementById('order-customer-notes')?.value.trim() || '';

  const { totalItems, totalPrice } = getCartTotals();

  // Format Order Requirement lines
  let lines = [
    `*New Order Requirement - Angel Pet Shop*`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `*Customer:* ${customerName}${customerPhone ? ' (' + customerPhone + ')' : ''}`,
    `*Fulfillment:* ${activeFulfillment}`
  ];

  if (customerAddress) {
    lines.push(`*Delivery Address:* ${customerAddress}`);
  }

  lines.push(`\n*Requested Items (${totalItems}):*`);

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    lines.push(`${index + 1}. *${item.name}*`);
    lines.push(`   • Size: ${item.size} | Qty: ${item.quantity} | Total: ₹${itemTotal.toLocaleString('en-IN')}`);
  });

  lines.push(`\n*Total Estimated Amount: ₹${totalPrice.toLocaleString('en-IN')}*`);

  if (customerNotes) {
    lines.push(`*Notes / Instructions:* ${customerNotes}`);
  }

  lines.push(`\n_Sent via Angel Pet Shop Website Cart_`);
  lines.push(`Please confirm stock availability and delivery timeframe to Ghatkopar. Thank you!`);

  const fullMessage = lines.join('\n');
  const whatsappUrl = `https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

  // Optional: Post requirement to backend for logging
  try {
    fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: customerName,
        phone: customerPhone,
        fulfillment: activeFulfillment,
        message: fullMessage,
        itemsCount: totalItems,
        totalEstimate: totalPrice
      })
    }).catch(() => {});
  } catch (e) {}

  showToast('Redirecting to WhatsApp with your order...');
  
  // Launch WhatsApp
  window.open(whatsappUrl, '_blank');
}

// --------------------------------------------------------------------------
// 3. Product Catalog & Variant Selection
// --------------------------------------------------------------------------
function selectVariant(productId, variantIndex, element) {
  selectedVariants[productId] = variantIndex;

  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const variant = product.variants[variantIndex];
  if (!variant) return;

  // Update active pill state
  const pills = document.querySelectorAll(`.variant-pill-${productId}`);
  pills.forEach(p => p.classList.remove('active'));
  if (element) {
    element.classList.add('active');
  }

  // Update displayed price
  const priceElem = document.getElementById(`price-${productId}`);
  if (priceElem) {
    priceElem.textContent = `₹${variant.price.toLocaleString('en-IN')}`;
  }

  // Update quick whatsapp link
  const waBtn = document.getElementById(`wa-btn-${productId}`);
  if (waBtn) {
    const waText = `Hi Angel Pet Shop, I want to enquire about ${product.name} (${variant.size}) available at your Ghatkopar store.`;
    waBtn.href = `https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(waText)}`;
  }
}

function renderCatalog() {
  const grid = document.getElementById('product-grid');
  const countLabel = document.getElementById('catalog-count-label');
  const categoryTitle = document.getElementById('current-category-title');
  if (!grid) return;

  let filtered = PRODUCTS;

  // Filter by category
  if (currentCategory !== 'all') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  // Filter by search query
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.brand.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // Update labels
  if (countLabel) {
    countLabel.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} products`;
  }
  if (categoryTitle) {
    const catMap = {
      'all': 'All Pet Supplies',
      'dog-food': 'Dog Food & Veterinary Diets',
      'cat-food': 'Cat Food & Wet Meals',
      'treats': 'Treats & Dental Chews',
      'grooming': 'Grooming Essentials & Cat Litter',
      'accessories': 'Leashes, Collars & Toys',
      'health': 'Health Supplements & Tonics'
    };
    categoryTitle.textContent = catMap[currentCategory] || 'Pet Supplies';
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 48px 20px; background: #FFFFFF; border-radius: 12px; border: 1px solid var(--border-card);">
        <i data-lucide="search-x" style="width: 44px; height: 44px; color: var(--text-muted); margin: 0 auto 12px;"></i>
        <h3 style="font-size: 16px; font-weight: 700; color: #0F172A; margin-bottom: 6px;">No products match your search</h3>
        <p style="font-size: 13px; color: #64748B; margin-bottom: 16px;">We can source any prescription food or specialty item for you directly in Ghatkopar.</p>
        <a href="https://wa.me/${STORE.whatsappNumber}?text=Hi%20Angel%20Pet%20Shop%2C%20do%20you%20have%20this%20specific%20pet%20product%20in%20stock%3F" target="_blank" class="btn btn-wa btn-sm">
          Ask on WhatsApp (+91 95943 41999)
        </a>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const defaultIdx = selectedVariants[item.id] || 0;
    const activeVariant = item.variants[defaultIdx] || item.variants[0];
    const waText = `Hi Angel Pet Shop, I want to enquire about ${item.name} (${activeVariant.size}) available at your Ghatkopar store.`;

    return `
      <article class="product-card">
        <div class="product-img-wrap">
          <img src="${item.image}" alt="${item.name}" class="product-img" loading="lazy" />
          <span class="product-category-badge">${item.categoryName}</span>
        </div>

        <div class="product-body">
          <span class="product-brand">${item.brand}</span>
          <h3 class="product-title">${item.name}</h3>

          <div class="variant-selector-wrap">
            <span class="variant-label">Pack Size / Weight:</span>
            <div class="variant-pills">
              ${item.variants.map((v, idx) => `
                <span 
                  class="variant-pill variant-pill-${item.id} ${idx === defaultIdx ? 'active' : ''}" 
                  onclick="selectVariant('${item.id}', ${idx}, this)"
                >
                  ${v.size}
                </span>
              `).join('')}
            </div>
          </div>

          <div class="product-pricing-row">
            <div>
              <span class="product-price" id="price-${item.id}">₹${activeVariant.price.toLocaleString('en-IN')}</span>
            </div>
            <span class="stock-tag">
              <i data-lucide="check" style="width: 12px; height: 12px;"></i>
              <span>In Stock</span>
            </span>
          </div>

          <div class="product-cta-group">
            <button 
              type="button" 
              class="btn-add-cart" 
              id="add-btn-${item.id}"
              onclick="addToCart('${item.id}')"
            >
              <i data-lucide="shopping-bag" style="width: 14px; height: 14px;"></i>
              <span>Add to Cart</span>
            </button>
            <a 
              href="https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(waText)}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-quick-wa" 
              id="wa-btn-${item.id}"
              title="Quick enquire on WhatsApp"
            >
              <i data-lucide="message-circle" style="width: 16px; height: 16px;"></i>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function filterCategory(category) {
  currentCategory = category;
  const buttons = document.querySelectorAll('#category-nav .category-nav-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-category') === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderCatalog();
}

function handleSearch(query) {
  searchQuery = query;
  renderCatalog();
}

// --------------------------------------------------------------------------
// 4. Live Store Status (IST UTC+5:30)
// --------------------------------------------------------------------------
function updateLiveStoreStatus() {
  const pill = document.getElementById('live-status-pill');
  const textElem = document.getElementById('status-text');
  if (!pill || !textElem) return;

  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const ist = new Date(utc + (3600000 * 5.5));

  const hours = ist.getHours();
  const minutes = ist.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  const openMinutes = STORE.openHour * 60 + STORE.openMinute; // 10:00 AM (600)
  const closeMinutes = STORE.closeHour * 60 + STORE.closeMinute; // 10:30 PM (1350)

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  if (isOpen) {
    pill.className = 'live-status-pill open';
    textElem.textContent = 'Open Now · Closes 10:30 PM';
  } else {
    pill.className = 'live-status-pill closed';
    textElem.textContent = 'Closed Now · Opens 10:00 AM';
  }
}

// --------------------------------------------------------------------------
// 5. Authentic Google Reviews
// --------------------------------------------------------------------------
function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;

  grid.innerHTML = REVIEWS.map(r => `
    <article class="review-card">
      <div>
        <div class="reviewer-header">
          <div class="reviewer-meta">
            <div class="reviewer-avatar">${r.author.charAt(0)}</div>
            <div>
              <div class="reviewer-name">${r.author}</div>
              <div class="reviewer-time">${r.time}</div>
            </div>
          </div>
          <div class="review-stars" style="display: flex; gap: 2px; color: #F59E0B;">
            <i data-lucide="star" style="width: 13px; height: 13px; fill: #F59E0B;"></i>
            <i data-lucide="star" style="width: 13px; height: 13px; fill: #F59E0B;"></i>
            <i data-lucide="star" style="width: 13px; height: 13px; fill: #F59E0B;"></i>
            <i data-lucide="star" style="width: 13px; height: 13px; fill: #F59E0B;"></i>
            <i data-lucide="star" style="width: 13px; height: 13px; fill: #F59E0B;"></i>
          </div>
        </div>
        <p class="review-text">"${r.text}"</p>
      </div>
      <div class="verified-tag">
        <i data-lucide="check-circle-2" style="width: 13px; height: 13px;"></i>
        <span>Verified Google Maps Review</span>
      </div>
    </article>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

// --------------------------------------------------------------------------
// 6. UI Helpers & Initialization
// --------------------------------------------------------------------------
function showToast(message) {
  const toast = document.getElementById('toast-msg');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

// Global Keydown (Escape closes cart)
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCart();
});

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Year
  const yearElem = document.getElementById('current-year');
  if (yearElem) yearElem.textContent = new Date().getFullYear();

  // Load and Render
  updateLiveStoreStatus();
  setInterval(updateLiveStoreStatus, 60000);

  renderCatalog();
  renderReviews();
  loadCart();

  if (window.lucide) window.lucide.createIcons();
});
