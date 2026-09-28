/**
 * Angel Pet Shop - Admin Dashboard Application Logic
 * Ghatkopar West, Mumbai · Complete Product & Inventory Management
 */

// Default Seed Catalog (12 Authentic Curated Indian Store Products)
const DEFAULT_CATALOG = [
  {
    id: "royal-canin-maxi-adult",
    name: "Royal Canin Maxi Adult Dry Dog Food",
    brand: "Royal Canin",
    category: "dog-food",
    categoryName: "Dog Food & Diets",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80",
    description: "Tailored nutrition for large breed adult dogs (26 to 44 kg). Supports optimal bone, joint integrity, and digestive health.",
    inStock: true,
    variants: [
      { size: "4 kg", price: 3320 },
      { size: "10 kg", price: 6890 },
      { size: "15 kg", price: 9450 }
    ],
    benefits: [
      "High joint & bone support under heavy body mass",
      "Enriched with Omega-3 (EPA-DHA) for healthy coat",
      "L.I.P. highly digestible proteins with dietary fibers"
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
    inStock: true,
    variants: [
      { size: "800 g", price: 1090 },
      { size: "2.5 kg", price: 2990 },
      { size: "7 kg", price: 6490 }
    ],
    benefits: [
      "96% protein of animal origin from pasture-raised lamb",
      "Low glycemic index with zero grains or gluten",
      "Rich in Tuscan antioxidant blueberries"
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
    inStock: true,
    variants: [
      { size: "3 kg", price: 1050 },
      { size: "10 kg", price: 3150 },
      { size: "20 kg", price: 5600 }
    ],
    benefits: [
      "32% high-grade protein for robust muscular growth",
      "Prebiotics (MOS) for delicate puppy digestion",
      "Optimal calcium-to-phosphorus ratio for skeletal build"
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
    inStock: true,
    variants: [
      { size: "1.2 kg", price: 450 },
      { size: "3 kg", price: 1050 },
      { size: "7 kg", price: 2250 }
    ],
    benefits: [
      "Crunchy pockets with savory real fish center",
      "Taurine and Vitamin A for healthy feline vision and heart",
      "Controlled minerals to maintain urinary tract wellness"
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
    inStock: true,
    variants: [
      { size: "Pack of 6 (85g)", price: 390 },
      { size: "Pack of 12 (85g)", price: 750 },
      { size: "Pack of 24 (85g)", price: 1440 }
    ],
    benefits: [
      "100% authentic whole seafood fillets in savory gravy",
      "Vital moisture hydration support for kidneys",
      "Zero artificial colorings or harsh preservatives"
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
    inStock: true,
    variants: [
      { size: "400 g", price: 490 },
      { size: "2 kg", price: 2150 },
      { size: "4 kg", price: 3850 }
    ],
    benefits: [
      "Antioxidant complex (Vitamins C & E) for young immunity",
      "Adapted small kibble size for young jaws",
      "High energy density for active, playful growth"
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
    inStock: true,
    variants: [
      { size: "Small (270g)", price: 290 },
      { size: "Medium (300g)", price: 350 },
      { size: "Large (350g)", price: 420 }
    ],
    benefits: [
      "Massages gums and cleans tartar down to the gumline",
      "Enriched with natural milk calcium",
      "Easily digestible formula safe for dogs of all breeds"
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
    inStock: true,
    variants: [
      { size: "5 Litres", price: 450 },
      { size: "10 Litres", price: 850 }
    ],
    benefits: [
      "Instant tight clumping for effortless scooping",
      "99.5% dust-free formula safe for respiratory health",
      "Lavender aroma neutralizes strong ammonia smells"
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
    inStock: true,
    variants: [
      { size: "355 ml", price: 1250 },
      { size: "946 ml", price: 2650 }
    ],
    benefits: [
      "Pure coconut oil cleanser base that retains natural skin oils",
      "Hydrolyzed protein adds coat body and brilliant luster",
      "Soap-free, tearless, and rinses out completely in seconds"
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
    inStock: true,
    variants: [
      { size: "200 ml", price: 180 },
      { size: "500 ml", price: 380 }
    ],
    benefits: [
      "1:0.8 calcium-to-phosphorus ratio for fast bone absorption",
      "Fortified with natural Oyster Shell (Mouktika Sukti)",
      "Ideal for growing puppies, lactating dams, and senior dogs"
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
    inStock: true,
    variants: [
      { size: "Small", price: 650 },
      { size: "Medium", price: 850 },
      { size: "Large", price: 1150 }
    ],
    benefits: [
      "Ergonomic chest padding distributes pull evenly to protect neck",
      "3M reflective piping ensures night walking visibility",
      "Dual zinc-alloy leash attachment clips"
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
    inStock: true,
    variants: [
      { size: "Medium", price: 990 },
      { size: "Large", price: 1350 }
    ],
    benefits: [
      "Ultra-durable natural all-rubber resists power chewers",
      "Stuffable with peanut butter or treats to alleviate anxiety",
      "Erratic bounce stimulates interactive outdoor play"
    ]
  }
];

const CATEGORY_NAMES = {
  'dog-food': 'Dog Food & Diets',
  'cat-food': 'Cat Food & Wet Meals',
  'treats': 'Treats & Dental Chews',
  'grooming': 'Grooming & Cat Litter',
  'accessories': 'Leashes & Toys',
  'health': 'Supplements & Care'
};

// Curated Pet Imagery Presets for quick selection
const SAMPLE_IMAGES = [
  { label: "Dry Dog Food", url: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80" },
  { label: "Golden Retriever Kibble", url: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=600&q=80" },
  { label: "Puppy Nutrition", url: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80" },
  { label: "Cat Dry Food", url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80" },
  { label: "Cat Wet Food / Pouch", url: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80" },
  { label: "Kitten Meals", url: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=600&q=80" },
  { label: "Dental Chews / Treats", url: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=600&q=80" },
  { label: "Cat Litter", url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=600&q=80" },
  { label: "Pet Shampoo & Bath", url: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80" },
  { label: "Health Tonic / Care", url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80" },
  { label: "Dog Harness & Leash", url: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80" },
  { label: "Rubber Dog Toy", url: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=600&q=80" }
];

// App State
let inventory = [];
let editingProductId = null;
let deletingProductId = null;
let searchQuery = '';
let selectedCategory = 'all';
let selectedStock = 'all';
let selectedSort = 'default';

// --------------------------------------------------------------------------
// 1. PIN Security Lock Screen Gate
// --------------------------------------------------------------------------
const DEFAULT_PIN = "angel2026";

function isAuthorized() {
  return sessionStorage.getItem('angel_admin_auth') === 'true';
}

function checkGate() {
  const gate = document.getElementById('pin-gate-modal');
  if (!gate) return;
  if (isAuthorized()) {
    gate.style.display = 'none';
  } else {
    gate.style.display = 'flex';
    const pinInput = document.getElementById('admin-pin-input');
    if (pinInput) {
      pinInput.value = '';
      setTimeout(() => pinInput.focus(), 150);
    }
  }
}

function handlePinSubmit(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('admin-pin-input');
  const card = document.getElementById('pin-gate-card');
  const entered = input ? input.value.trim() : '';

  const storedPin = localStorage.getItem('angel_admin_pin') || DEFAULT_PIN;

  if (entered === storedPin) {
    sessionStorage.setItem('angel_admin_auth', 'true');
    const gate = document.getElementById('pin-gate-modal');
    if (gate) gate.style.display = 'none';
    showToast('Welcome to Angel Pet Shop Admin!', 'success');
  } else {
    if (card) {
      card.classList.add('shake');
      setTimeout(() => card.classList.remove('shake'), 450);
    }
    showToast('Incorrect PIN. Please try again.', 'error');
    if (input) {
      input.value = '';
      input.focus();
    }
  }
}

function lockAdmin() {
  sessionStorage.removeItem('angel_admin_auth');
  checkGate();
  showToast('Admin session locked.');
}

function promptChangePin() {
  const currentPin = localStorage.getItem('angel_admin_pin') || DEFAULT_PIN;
  const currentInput = prompt("Enter your current PIN to authorize change:");
  if (currentInput === null) return;
  if (currentInput !== currentPin) {
    alert("Incorrect current PIN!");
    return;
  }
  const newPin = prompt("Enter new 4 to 8 digit Admin PIN:");
  if (!newPin || newPin.trim().length < 4) {
    alert("PIN must be at least 4 characters.");
    return;
  }
  localStorage.setItem('angel_admin_pin', newPin.trim());
  showToast('Admin PIN updated successfully!', 'success');
}

// --------------------------------------------------------------------------
// 2. Inventory State & Persistence
// --------------------------------------------------------------------------
function loadInventory() {
  try {
    const saved = localStorage.getItem('angel_pet_shop_custom_inventory');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        inventory = parsed.map(p => ({
          ...p,
          inStock: p.inStock !== false // default true
        }));
        return;
      }
    }
  } catch (e) {
    console.warn('Error loading custom inventory from localStorage:', e);
  }
  inventory = JSON.parse(JSON.stringify(DEFAULT_CATALOG));
}

function saveInventory(syncServer = true) {
  try {
    localStorage.setItem('angel_pet_shop_custom_inventory', JSON.stringify(inventory));
  } catch (e) {
    console.error('Failed to save inventory to localStorage:', e);
  }

  // Sync to server backend if running
  if (syncServer) {
    fetch('/api/catalog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ products: inventory })
    }).catch(() => {
      // Serverless or static fallback - localStorage already updated
    });
  }

  updateKPIs();
  renderProducts();
}

// --------------------------------------------------------------------------
// 3. KPI Cards Calculation
// --------------------------------------------------------------------------
function updateKPIs() {
  const totalElem = document.getElementById('kpi-total-products');
  const inStockElem = document.getElementById('kpi-instock');
  const outStockElem = document.getElementById('kpi-outstock');
  const categoriesElem = document.getElementById('kpi-categories');

  const total = inventory.length;
  const inStockCount = inventory.filter(p => p.inStock !== false).length;
  const outStockCount = total - inStockCount;

  const uniqueCats = new Set(inventory.map(p => p.category)).size;

  if (totalElem) totalElem.textContent = total;
  if (inStockElem) inStockElem.textContent = inStockCount;
  if (outStockElem) outStockElem.textContent = outStockCount;
  if (categoriesElem) categoriesElem.textContent = uniqueCats;
}

// --------------------------------------------------------------------------
// 4. Product Filtering & Rendering
// --------------------------------------------------------------------------
function getFilteredProducts() {
  let list = [...inventory];

  // Category filter
  if (selectedCategory !== 'all') {
    list = list.filter(p => p.category === selectedCategory);
  }

  // Stock status filter
  if (selectedStock === 'in-stock') {
    list = list.filter(p => p.inStock !== false);
  } else if (selectedStock === 'out-stock') {
    list = list.filter(p => p.inStock === false);
  }

  // Search query filter
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(p =>
      (p.name && p.name.toLowerCase().includes(q)) ||
      (p.brand && p.brand.toLowerCase().includes(q)) ||
      (p.categoryName && p.categoryName.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q)) ||
      (p.variants && p.variants.some(v => v.size.toLowerCase().includes(q)))
    );
  }

  // Sort
  if (selectedSort === 'name-asc') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedSort === 'name-desc') {
    list.sort((a, b) => b.name.localeCompare(a.name));
  } else if (selectedSort === 'price-low') {
    list.sort((a, b) => {
      const minA = a.variants && a.variants.length ? Math.min(...a.variants.map(v => v.price)) : 0;
      const minB = b.variants && b.variants.length ? Math.min(...b.variants.map(v => v.price)) : 0;
      return minA - minB;
    });
  } else if (selectedSort === 'price-high') {
    list.sort((a, b) => {
      const maxA = a.variants && a.variants.length ? Math.max(...a.variants.map(v => v.price)) : 0;
      const maxB = b.variants && b.variants.length ? Math.max(...b.variants.map(v => v.price)) : 0;
      return maxB - maxA;
    });
  }

  return list;
}

function renderProducts() {
  const tbody = document.getElementById('product-table-body');
  const mobileContainer = document.getElementById('mobile-cards-wrap');
  const countLabel = document.getElementById('table-count-label');

  const products = getFilteredProducts();

  if (countLabel) {
    countLabel.textContent = `Showing ${products.length} of ${inventory.length} items`;
  }

  // Empty state
  if (products.length === 0) {
    const emptyHTML = `
      <div class="table-empty">
        <i data-lucide="package-search" style="width: 48px; height: 48px;"></i>
        <h3>No products found</h3>
        <p>Try clearing your search query or adjusting the category filter.</p>
        <button class="btn-primary" onclick="clearFilters()">Reset Filters</button>
      </div>
    `;
    if (tbody) tbody.innerHTML = `<tr><td colspan="6">${emptyHTML}</td></tr>`;
    if (mobileContainer) mobileContainer.innerHTML = emptyHTML;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  // Desktop Table Rows
  if (tbody) {
    tbody.innerHTML = products.map((item, index) => {
      const inStock = item.inStock !== false;
      const variantsHtml = (item.variants || []).map(v => 
        `<span class="variant-chip"><span>${v.size}</span><strong>₹${Number(v.price).toLocaleString('en-IN')}</strong></span>`
      ).join('');

      return `
        <tr>
          <td>
            <div class="product-cell">
              <img src="${item.image || 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=200&q=80'}" 
                   alt="${item.name}" 
                   class="product-thumb" 
                   onerror="this.src='https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=200&q=80'" />
              <div class="product-meta">
                <span class="product-brand-tag">${item.brand || 'Store Brand'}</span>
                <span class="product-name-txt">${item.name}</span>
              </div>
            </div>
          </td>
          <td>
            <span class="category-pill ${item.category || ''}">${item.categoryName || item.category || 'General'}</span>
          </td>
          <td>
            <div class="variants-chips">
              ${variantsHtml || '<span style="color: var(--text-light); font-size: 12px;">No variants</span>'}
            </div>
          </td>
          <td>
            <label class="switch-label" title="Toggle Stock Status">
              <input type="checkbox" class="switch-input" ${inStock ? 'checked' : ''} onchange="toggleStock('${item.id}', this.checked)">
              <span class="switch-track">
                <span class="switch-thumb"></span>
              </span>
              <span class="stock-status-text ${inStock ? 'in-stock' : 'out-of-stock'}">
                ${inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </label>
          </td>
          <td>
            <div class="action-btns">
              <button class="btn-icon" onclick="openEditModal('${item.id}')" title="Edit Product">
                <i data-lucide="edit-3" style="width: 15px; height: 15px;"></i>
              </button>
              <button class="btn-icon" onclick="duplicateProduct('${item.id}')" title="Duplicate Product">
                <i data-lucide="copy" style="width: 15px; height: 15px;"></i>
              </button>
              <button class="btn-icon delete" onclick="confirmDelete('${item.id}')" title="Delete Product">
                <i data-lucide="trash-2" style="width: 15px; height: 15px;"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  // Mobile Cards
  if (mobileContainer) {
    mobileContainer.innerHTML = products.map(item => {
      const inStock = item.inStock !== false;
      const variantsHtml = (item.variants || []).map(v => 
        `<span class="variant-chip"><span>${v.size}</span><strong>₹${Number(v.price).toLocaleString('en-IN')}</strong></span>`
      ).join('');

      return `
        <div class="mobile-product-card">
          <div class="mobile-card-top">
            <img src="${item.image || 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=200&q=80'}" 
                 alt="${item.name}" 
                 class="mobile-card-img" 
                 onerror="this.src='https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=200&q=80'" />
            <div class="mobile-card-details">
              <span class="product-brand-tag">${item.brand || 'Store Brand'}</span>
              <div class="product-name-txt" style="margin-bottom: 6px;">${item.name}</div>
              <span class="category-pill ${item.category || ''}">${item.categoryName || item.category || 'General'}</span>
            </div>
          </div>

          <div>
            <div style="font-size: 11px; font-weight: 600; color: var(--text-muted); margin-bottom: 4px;">Packs & Prices:</div>
            <div class="variants-chips">
              ${variantsHtml || '<span style="color: var(--text-light); font-size: 12px;">No variants</span>'}
            </div>
          </div>

          <div class="mobile-card-bottom">
            <label class="switch-label">
              <input type="checkbox" class="switch-input" ${inStock ? 'checked' : ''} onchange="toggleStock('${item.id}', this.checked)">
              <span class="switch-track">
                <span class="switch-thumb"></span>
              </span>
              <span class="stock-status-text ${inStock ? 'in-stock' : 'out-of-stock'}">
                ${inStock ? 'In Stock' : 'Out'}
              </span>
            </label>

            <div class="action-btns">
              <button class="btn-icon" onclick="openEditModal('${item.id}')" title="Edit">
                <i data-lucide="edit-3" style="width: 14px; height: 14px;"></i>
              </button>
              <button class="btn-icon" onclick="duplicateProduct('${item.id}')" title="Duplicate">
                <i data-lucide="copy" style="width: 14px; height: 14px;"></i>
              </button>
              <button class="btn-icon delete" onclick="confirmDelete('${item.id}')" title="Delete">
                <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  if (window.lucide) window.lucide.createIcons();
}

// --------------------------------------------------------------------------
// 5. Stock Toggle & Quick Actions
// --------------------------------------------------------------------------
function toggleStock(productId, isChecked) {
  const item = inventory.find(p => p.id === productId);
  if (!item) return;
  item.inStock = isChecked;
  saveInventory();
  showToast(`${item.name} is now ${isChecked ? 'In Stock' : 'Out of Stock'}.`, 'success');
}

function duplicateProduct(productId) {
  const original = inventory.find(p => p.id === productId);
  if (!original) return;

  const clone = JSON.parse(JSON.stringify(original));
  clone.id = `${original.id}-copy-${Date.now().toString().slice(-4)}`;
  clone.name = `${original.name} (Copy)`;

  inventory.unshift(clone);
  saveInventory();
  showToast(`Duplicated: ${clone.name}`, 'success');
}

function confirmDelete(productId) {
  const item = inventory.find(p => p.id === productId);
  if (!item) return;

  deletingProductId = productId;
  const modal = document.getElementById('delete-modal');
  const nameElem = document.getElementById('delete-product-name');
  if (nameElem) nameElem.textContent = item.name;
  if (modal) modal.classList.add('active');
}

function executeDelete() {
  if (!deletingProductId) return;
  const item = inventory.find(p => p.id === deletingProductId);
  const name = item ? item.name : 'Product';

  inventory = inventory.filter(p => p.id !== deletingProductId);
  deletingProductId = null;
  closeDeleteModal();
  saveInventory();
  showToast(`Deleted ${name} from inventory.`, 'success');
}

function closeDeleteModal() {
  deletingProductId = null;
  const modal = document.getElementById('delete-modal');
  if (modal) modal.classList.remove('active');
}

// --------------------------------------------------------------------------
// 6. Add & Edit Product Modal Handling
// --------------------------------------------------------------------------
function openAddModal() {
  editingProductId = null;
  document.getElementById('modal-title-text').textContent = 'Add New Product';
  document.getElementById('product-form').reset();
  document.getElementById('prod-id').value = '';
  document.getElementById('prod-instock').checked = true;

  // Clear and add 1 default variant row
  const container = document.getElementById('variants-builder-list');
  if (container) {
    container.innerHTML = '';
    addVariantRow('', '');
  }

  updateImagePreview('');
  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.add('active');
}

function openEditModal(productId) {
  const item = inventory.find(p => p.id === productId);
  if (!item) return;

  editingProductId = productId;
  document.getElementById('modal-title-text').textContent = `Edit Product: ${item.name}`;

  document.getElementById('prod-id').value = item.id;
  document.getElementById('prod-name').value = item.name || '';
  document.getElementById('prod-brand').value = item.brand || '';
  document.getElementById('prod-category').value = item.category || 'dog-food';
  document.getElementById('prod-image').value = item.image || '';
  document.getElementById('prod-desc').value = item.description || '';
  document.getElementById('prod-instock').checked = item.inStock !== false;

  // Variants
  const container = document.getElementById('variants-builder-list');
  if (container) {
    container.innerHTML = '';
    if (item.variants && item.variants.length > 0) {
      item.variants.forEach(v => addVariantRow(v.size, v.price));
    } else {
      addVariantRow('Standard', 0);
    }
  }

  updateImagePreview(item.image);
  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.add('active');
}

function closeModal() {
  editingProductId = null;
  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.remove('active');
}

// Dynamic Variant Rows
function addVariantRow(sizeVal = '', priceVal = '') {
  const container = document.getElementById('variants-builder-list');
  if (!container) return;

  const row = document.createElement('div');
  row.className = 'variant-builder-row';
  row.innerHTML = `
    <input type="text" class="form-input variant-size" placeholder="Pack Size (e.g. 3 kg, 500 ml)" value="${sizeVal}" required />
    <input type="number" class="form-input variant-price" placeholder="Price ₹ (e.g. 1050)" value="${priceVal}" min="0" step="1" required />
    <button type="button" class="variant-remove-btn" onclick="removeVariantRow(this)" title="Remove size">
      <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
    </button>
  `;
  container.appendChild(row);
  if (window.lucide) window.lucide.createIcons();
}

function removeVariantRow(btn) {
  const container = document.getElementById('variants-builder-list');
  if (!container) return;
  const rows = container.querySelectorAll('.variant-builder-row');
  if (rows.length <= 1) {
    showToast('A product must have at least one pack size or variant!', 'error');
    return;
  }
  btn.closest('.variant-builder-row').remove();
}

// Form Submission (Add or Update)
function handleProductFormSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('prod-name').value.trim();
  const brand = document.getElementById('prod-brand').value.trim();
  const category = document.getElementById('prod-category').value;
  const image = document.getElementById('prod-image').value.trim();
  const description = document.getElementById('prod-desc').value.trim();
  const inStock = document.getElementById('prod-instock').checked;

  if (!name || !brand) {
    showToast('Product name and brand are required.', 'error');
    return;
  }

  // Parse Variants
  const container = document.getElementById('variants-builder-list');
  const rows = container.querySelectorAll('.variant-builder-row');
  const variants = [];

  rows.forEach(r => {
    const size = r.querySelector('.variant-size').value.trim();
    const price = parseFloat(r.querySelector('.variant-price').value) || 0;
    if (size) {
      variants.push({ size, price });
    }
  });

  if (variants.length === 0) {
    showToast('Please add at least one variant size with price.', 'error');
    return;
  }

  const categoryName = CATEGORY_NAMES[category] || 'Pet Supplies';

  if (editingProductId) {
    // Update existing
    const itemIndex = inventory.findIndex(p => p.id === editingProductId);
    if (itemIndex !== -1) {
      inventory[itemIndex] = {
        ...inventory[itemIndex],
        name,
        brand,
        category,
        categoryName,
        image: image || 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80',
        description,
        inStock,
        variants
      };
      showToast(`Updated "${name}" successfully!`, 'success');
    }
  } else {
    // Generate clean ID from name
    const cleanId = name.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || `item-${Date.now()}`;

    // Ensure unique ID
    let finalId = cleanId;
    let counter = 1;
    while (inventory.some(p => p.id === finalId)) {
      finalId = `${cleanId}-${counter++}`;
    }

    const newProduct = {
      id: finalId,
      name,
      brand,
      category,
      categoryName,
      image: image || 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80',
      description,
      inStock,
      variants,
      benefits: [
        "100% genuine formulation sourced for Angel Pet Shop",
        "Recommended by Ghatkopar pet parents",
        "Fast local delivery across Mumbai"
      ]
    };

    inventory.unshift(newProduct);
    showToast(`Added "${name}" to store inventory!`, 'success');
  }

  saveInventory();
  closeModal();
}

// Image Preview Handling
function updateImagePreview(url) {
  const preview = document.getElementById('image-preview');
  if (!preview) return;
  const fallback = 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=200&q=80';
  preview.src = url || fallback;
}

function setQuickBrand(brandName) {
  const brandInput = document.getElementById('prod-brand');
  if (brandInput) {
    brandInput.value = brandName;
  }
}

// --------------------------------------------------------------------------
// 7. Sample Image Picker Modal
// --------------------------------------------------------------------------
function openImagePicker() {
  const modal = document.getElementById('image-picker-modal');
  const grid = document.getElementById('image-picker-grid');
  if (!modal || !grid) return;

  grid.innerHTML = SAMPLE_IMAGES.map(item => `
    <div style="cursor: pointer; border: 1px solid var(--border-card); border-radius: 8px; overflow: hidden; background: #fff;" onclick="selectSampleImage('${item.url}')">
      <img src="${item.url}" style="width: 100%; height: 80px; object-fit: cover;" alt="${item.label}" />
      <div style="font-size: 11px; padding: 6px; font-weight: 600; text-align: center; color: var(--text-primary);">${item.label}</div>
    </div>
  `).join('');

  modal.classList.add('active');
}

function selectSampleImage(url) {
  const input = document.getElementById('prod-image');
  if (input) {
    input.value = url;
    updateImagePreview(url);
  }
  closeImagePicker();
}

function closeImagePicker() {
  const modal = document.getElementById('image-picker-modal');
  if (modal) modal.classList.remove('active');
}

// --------------------------------------------------------------------------
// 8. Backup & Restore (JSON Export & Import)
// --------------------------------------------------------------------------
function exportCatalogJSON() {
  const exportData = {
    storeName: "Angel Pet Shop",
    exportedAt: new Date().toISOString(),
    totalProducts: inventory.length,
    products: inventory
  };

  const jsonStr = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const filename = `angel-pet-shop-catalog-${dateStr}.json`;

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  showToast(`Catalog exported as ${filename}`, 'success');
}

function triggerImportDialog() {
  const input = document.getElementById('import-file-input');
  if (input) input.click();
}

function handleFileImport(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = JSON.parse(evt.target.result);
      let newProducts = [];
      if (Array.isArray(data)) {
        newProducts = data;
      } else if (data && Array.isArray(data.products)) {
        newProducts = data.products;
      }

      if (newProducts.length === 0) {
        showToast('Invalid backup file. No products found.', 'error');
        return;
      }

      const confirmMsg = `Found ${newProducts.length} products in backup. Replace current store inventory with this backup?`;
      if (confirm(confirmMsg)) {
        inventory = newProducts;
        saveInventory();
        showToast(`Successfully imported ${newProducts.length} products!`, 'success');
      }
    } catch (err) {
      showToast('Error reading JSON file: ' + err.message, 'error');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

function resetToDefaultCatalog() {
  const confirmMsg = "Are you sure you want to reset the catalog back to original Ghatkopar store defaults? Any newly added items will be replaced.";
  if (confirm(confirmMsg)) {
    inventory = JSON.parse(JSON.stringify(DEFAULT_CATALOG));
    saveInventory();
    showToast('Catalog restored to default store inventory!', 'success');
  }
}

// --------------------------------------------------------------------------
// 9. Enquiries / Orders Viewer Modal
// --------------------------------------------------------------------------
async function openEnquiriesModal() {
  const modal = document.getElementById('enquiries-modal');
  const container = document.getElementById('enquiries-list-container');
  if (!modal || !container) return;

  container.innerHTML = '<div style="text-align: center; padding: 24px; color: var(--text-muted);">Loading enquiries...</div>';
  modal.classList.add('active');

  try {
    const res = await fetch('/api/enquiries');
    if (res.ok) {
      const data = await res.json();
      renderEnquiries(data);
      return;
    }
  } catch (e) {}

  container.innerHTML = `
    <div style="text-align: center; padding: 32px 16px; color: var(--text-muted);">
      <i data-lucide="inbox" style="width: 40px; height: 40px; margin: 0 auto 8px; color: var(--text-light);"></i>
      <h4 style="font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">No logged orders yet</h4>
      <p style="font-size: 13px;">Customer WhatsApp orders placed from the website will appear here.</p>
    </div>
  `;
  if (window.lucide) window.lucide.createIcons();
}

function renderEnquiries(enquiries) {
  const container = document.getElementById('enquiries-list-container');
  if (!container) return;

  if (!Array.isArray(enquiries) || enquiries.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 32px 16px; color: var(--text-muted);">
        <i data-lucide="inbox" style="width: 40px; height: 40px; margin: 0 auto 8px; color: var(--text-light);"></i>
        <h4 style="font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">No logged orders yet</h4>
        <p style="font-size: 13px;">When customers submit the WhatsApp order cart, entries are logged here.</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = enquiries.map(e => `
    <div style="background: var(--bg-surface); border: 1px solid var(--border-card); border-radius: 8px; padding: 14px; margin-bottom: 10px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
        <strong style="color: var(--text-primary); font-size: 14px;">${e.name || 'Customer'}</strong>
        <span style="font-size: 11px; color: var(--text-light);">${new Date(e.timestamp).toLocaleString('en-IN')}</span>
      </div>
      <div style="font-size: 12.5px; color: var(--text-secondary); margin-bottom: 4px;">
        📞 <strong>${e.phone || 'Not provided'}</strong> · 🚚 <strong>${e.fulfillment || 'Delivery'}</strong>
      </div>
      <div style="font-size: 12px; color: var(--text-muted); background: var(--bg-subtle); padding: 8px; border-radius: 6px; white-space: pre-wrap; margin-top: 6px;">
        ${e.message || 'Product enquiry'}
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function closeEnquiriesModal() {
  const modal = document.getElementById('enquiries-modal');
  if (modal) modal.classList.remove('active');
}

// --------------------------------------------------------------------------
// 10. Filter Helpers & Toast
// --------------------------------------------------------------------------
function handleSearch(val) {
  searchQuery = val;
  renderProducts();
}

function handleCategoryFilter(val) {
  selectedCategory = val;
  renderProducts();
}

function handleStockFilter(val) {
  selectedStock = val;
  renderProducts();
}

function handleSort(val) {
  selectedSort = val;
  renderProducts();
}

function clearFilters() {
  searchQuery = '';
  selectedCategory = 'all';
  selectedStock = 'all';
  selectedSort = 'default';

  const sInput = document.getElementById('admin-search-input');
  const cSelect = document.getElementById('filter-category');
  const stSelect = document.getElementById('filter-stock');
  const soSelect = document.getElementById('filter-sort');

  if (sInput) sInput.value = '';
  if (cSelect) cSelect.value = 'all';
  if (stSelect) stSelect.value = 'all';
  if (soSelect) soSelect.value = 'default';

  renderProducts();
}

let toastTimer = null;
function showToast(message, type = 'default') {
  const toast = document.getElementById('admin-toast');
  const text = document.getElementById('toast-text');
  if (!toast || !text) return;

  text.textContent = message;
  toast.className = `admin-toast show ${type}`;

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// --------------------------------------------------------------------------
// 11. Initialization
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  checkGate();
  loadInventory();
  updateKPIs();
  renderProducts();

  // Listen for storage events across open tabs
  window.addEventListener('storage', (e) => {
    if (e.key === 'angel_pet_shop_custom_inventory') {
      loadInventory();
      updateKPIs();
      renderProducts();
    }
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
});
