const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Store Business Profile
const STORE_DATA = {
  name: "Angel Pet Shop",
  legalName: "Angel Pet Shop",
  tagline: "Your Neighborhood Pet Store in Ghatkopar West",
  phone: "+91 95943 41999",
  displayPhone: "095943 41999",
  whatsappNumber: "919594341999",
  rating: 4.6,
  totalReviews: 16,
  category: "Pet store",
  address: "Pachvati niwas Chawl, Asalpha village, Andheri - Ghatkopar Link Rd, Jambhulpada, Ghatkopar West, Mumbai, Maharashtra 400084",
  googleMapsUrl: "https://maps.google.com/?cid=3589467798993884104",
  timings: {
    open: "10:00 AM",
    close: "10:30 PM",
    days: "Monday – Sunday (Open Daily)",
    popularTimes: "Usually not too busy around 9:00 PM"
  },
  services: [
    { title: "Genuine Pet Foods", desc: "100% authentic diets from Royal Canin, Farmina, Whiskas, Pedigree PRO & Drools" },
    { title: "Doorstep Delivery", desc: "Quick local delivery across Ghatkopar West, Asalpha, and central Mumbai" },
    { title: "Care & Grooming Supplies", desc: "Hypoallergenic shampoos, bentonite cat litter, dental chews, and brushes" },
    { title: "WhatsApp Direct Enquiry", desc: "Instant stock checks and personalized advice directly with our store staff" }
  ]
};

// Calculate Store Status based on Mumbai Time (IST = UTC+5:30)
function getStoreLiveStatus() {
  const now = new Date();
  // Compute IST time
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istTime = new Date(utc + (3600000 * 5.5));

  const hours = istTime.getHours();
  const minutes = istTime.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  const openMinutes = 10 * 60; // 10:00 AM
  const closeMinutes = 22 * 60 + 30; // 10:30 PM

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;
  const isClosingSoon = isOpen && (closeMinutes - currentMinutes <= 60);

  let statusText = "Closed Now · Opens 10:00 AM";
  let statusClass = "closed";

  if (isOpen) {
    if (isClosingSoon) {
      statusText = "Closes soon · 10:30 PM";
      statusClass = "closing-soon";
    } else {
      statusText = "Open Now · Closes at 10:30 PM";
      statusClass = "open";
    }
  }

  return {
    isOpen,
    isClosingSoon,
    statusText,
    statusClass,
    serverTimeIST: istTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
  };
}

// REST API Endpoints

// 1. Store Profile & Live Status (supports /api/store and /api/store-info)
const getStoreHandler = (req, res) => {
  const status = getStoreLiveStatus();
  res.json({
    ...STORE_DATA,
    liveStatus: status
  });
};

app.get('/api/store', getStoreHandler);
app.get('/api/store-info', getStoreHandler);

// 2. Catalog & Categories
app.get('/api/catalog', (req, res) => {
  const catalogPath = path.join(__dirname, 'data', 'catalog.json');
  try {
    if (fs.existsSync(catalogPath)) {
      const data = fs.readFileSync(catalogPath, 'utf8');
      return res.json(JSON.parse(data));
    }
  } catch (err) {
    console.error('Error reading catalog:', err);
  }
  res.status(500).json({ error: 'Catalog unavailable' });
});

// 3. Authentic Google Reviews
app.get('/api/reviews', (req, res) => {
  res.json({
    rating: 4.6,
    totalReviews: 16,
    breakdown: {
      "5": 12,
      "4": 3,
      "3": 1,
      "2": 0,
      "1": 0
    },
    reviews: [
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
    ]
  });
});

// 4. Create and Log WhatsApp Enquiry
app.post('/api/enquiry', (req, res) => {
  try {
    const { name, phone, petType, category, message, fulfillment, productName } = req.body;

    const enquiryId = 'ENQ-' + Date.now();
    const timestamp = new Date().toISOString();

    const enquiryRecord = {
      id: enquiryId,
      timestamp,
      name: name || 'Customer',
      phone: phone || '',
      petType: petType || 'Pet',
      category: category || 'General Enquiry',
      productName: productName || '',
      fulfillment: fulfillment || 'Delivery or Store Pickup',
      message: message || 'Enquiring about pet supplies'
    };

    // Construct formatted WhatsApp message text
    let waLines = [
      `*New Enquiry - Angel Pet Shop*`,
      `━━━━━━━━━━━━━━━━━━`,
      `• *Pet:* ${enquiryRecord.petType}`,
      `• *Looking for:* ${enquiryRecord.category}`
    ];

    if (enquiryRecord.productName) {
      waLines.push(`• *Item:* ${enquiryRecord.productName}`);
    }

    if (enquiryRecord.fulfillment) {
      waLines.push(`• *Preference:* ${enquiryRecord.fulfillment}`);
    }

    if (enquiryRecord.name && enquiryRecord.name !== 'Customer') {
      waLines.push(`• *From:* ${enquiryRecord.name}`);
    }

    if (enquiryRecord.message) {
      waLines.push(`\n*Note / Question:* ${enquiryRecord.message}`);
    }

    waLines.push(`\n_Sent via Angel Pet Shop Website_`);

    const waText = encodeURIComponent(waLines.join('\n'));
    const whatsappUrl = `https://wa.me/${STORE_DATA.whatsappNumber}?text=${waText}`;

    // Persist to data/enquiries.json safely
    const dataDir = path.join(__dirname, 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const enquiriesPath = path.join(dataDir, 'enquiries.json');
    let enquiries = [];
    try {
      if (fs.existsSync(enquiriesPath)) {
        const raw = fs.readFileSync(enquiriesPath, 'utf8');
        enquiries = JSON.parse(raw);
      }
    } catch (e) {
      enquiries = [];
    }

    enquiries.unshift(enquiryRecord);
    if (enquiries.length > 200) enquiries = enquiries.slice(0, 200);

    fs.writeFileSync(enquiriesPath, JSON.stringify(enquiries, null, 2), 'utf8');

    res.json({
      success: true,
      enquiryId,
      whatsappUrl,
      message: "Enquiry prepared. Redirecting to WhatsApp..."
    });
  } catch (err) {
    console.error('Enquiry error:', err);
    res.status(500).json({ error: 'Failed to process enquiry' });
  }
});

// 5. Admin View of Enquiries
app.get('/api/enquiries', (req, res) => {
  const enquiriesPath = path.join(__dirname, 'data', 'enquiries.json');
  try {
    if (fs.existsSync(enquiriesPath)) {
      const raw = fs.readFileSync(enquiriesPath, 'utf8');
      return res.json(JSON.parse(raw));
    }
  } catch (e) {
    // Ignore
  }
  res.json([]);
});

// Static files (frontend)
app.use(express.static(path.join(__dirname)));

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server if not imported (e.g. for Vercel)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Angel Pet Shop server running at http://localhost:${PORT}`);
    console.log(`Store: ${STORE_DATA.name} | Phone: ${STORE_DATA.phone}`);
  });
}

module.exports = app;
