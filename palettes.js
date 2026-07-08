

const PALETTE_LIBRARY = [
  
  {
    keywords: ["cyberpunk", "neon", "future", "sci-fi", "hacker", "city", "night", "synthwave"],
    name: "Neon Dystopia",
    moodDesc: "A rain-slicked futuristic metropolis illuminated by glaring neon signs and holograms.",
    tones: ["Vibrant", "Dark", "High Contrast", "Electric"],
    colors: [
      { hex: "#0b0c10", name: "Asphalt Void", role: "Background", psychology: "Deep, absorbing darkness." },
      { hex: "#ff007f", name: "Neon Magenta", role: "Primary", psychology: "Aggressive, artificial energy." },
      { hex: "#00f0ff", name: "Cyan Glitch", role: "Secondary", psychology: "Electric and technological." },
      { hex: "#7a04eb", name: "Synth Purple", role: "Accent", psychology: "Mysterious digital depth." },
      { hex: "#fe75fe", name: "Hologram Pink", role: "Highlight", psychology: "Ethereal glow." },
      { hex: "#1f2833", name: "Steel Plating", role: "Neutral", psychology: "Cold, industrial backing." },
      { hex: "#050608", name: "Alley Shadow", role: "Shadow", psychology: "Total sensory deprivation." }
    ],
    designs: ["Sci-fi game UI", "Tech startup landing page", "Nightclub flyer"],
    complementary: ["Typography: Orbitron + Roboto Mono", "Textures: Glitch art, scanlines", "Elements: Glowing borders"],
    followUp: "More pinks or more blues?", followUpOptions: ["Pink", "Blue"]
  },
  
  {
    keywords: ["desert", "sunset", "sand", "dune", "warm", "terracotta", "arid", "canyon"],
    name: "Canyon Dusk",
    moodDesc: "The quiet, baking heat of the desert giving way to the cool, purple twilight.",
    tones: ["Warm", "Earthy", "Dusty"],
    colors: [
      { hex: "#2d1b19", name: "Cooling Sand", role: "Background", psychology: "Grounding and deep." },
      { hex: "#d85a42", name: "Terracotta Heat", role: "Primary", psychology: "Earth baked by the sun." },
      { hex: "#e78a53", name: "Dune Orange", role: "Secondary", psychology: "Warmth and energy." },
      { hex: "#8c4b66", name: "Purple Dust", role: "Accent", psychology: "The onset of twilight." },
      { hex: "#f5c396", name: "Last Light", role: "Highlight", psychology: "Fading warmth." },
      { hex: "#e4d4c8", name: "Bone White", role: "Neutral", psychology: "Dry and stark." },
      { hex: "#1a0f0e", name: "Deep Ravine", role: "Shadow", psychology: "Total darkness." }
    ],
    designs: ["Boho apparel brand", "Travel blog", "Ceramics store"],
    complementary: ["Typography: Playfair Display", "Textures: Sand grain, baked clay", "Elements: Soft arches"],
    followUp: "More orange heat or purple dusk?", followUpOptions: ["Orange", "Purple"]
     },
  
  {
    keywords: ["arctic", "winter", "ice", "snow", "cold", "frost", "glacier", "polar"],
    name: "Glacial Silence",
    moodDesc: "Vast expanses of untouched snow and the blinding blue reflection of ancient ice.",
    tones: ["Cool", "Bright", "Sterile", "Crisp"],
    colors: [
      { hex: "#f0f4f8", name: "Snowfield", role: "Background", psychology: "Endless, sterile white." },
      { hex: "#a4c2f4", name: "Glacier Blue", role: "Primary", psychology: "Cold, clear, and calm." },
      { hex: "#cfe2f3", name: "Frost Breath", role: "Secondary", psychology: "Subtle chill." },
      { hex: "#6fa8dc", name: "Deep Ice", role: "Accent", psychology: "Solid and freezing." },
      { hex: "#ffffff", name: "Blinding Sun", role: "Highlight", psychology: "Pure reflection." },
      { hex: "#d9eaee", name: "Overcast Sky", role: "Neutral", psychology: "Muted and soft." },
      { hex: "#4a6b8c", name: "Crevasse", role: "Shadow", psychology: "The hidden depths of the ice." }
    ],
    designs: ["Winter sports gear", "Minimalist skincare", "Climate organization"],
    complementary: ["Typography: Inter", "Textures: Frost patterns", "Elements: Sharp edges"],
    followUp: "More white snow or blue ice?", followUpOptions: ["Snow", "Ice"]
  },
    
  {
    keywords: ["royal", "elegant", "luxury", "gold", "navy", "burgundy", "king", "queen", "wealth"],
    name: "Imperial Velvet",
    moodDesc: "The heavy, quiet luxury of a royal court draped in velvet and gold leaf.",
    tones: ["Rich", "Dark", "Luxurious", "Classic"],
    colors: [
      { hex: "#0f172a", name: "Midnight Navy", role: "Background", psychology: "Authority and extreme depth." },
      { hex: "#d4af37", name: "Crown Gold", role: "Primary", psychology: "Wealth, power, and illumination." },
      { hex: "#800020", name: "Burgundy Wine", role: "Secondary", psychology: "Passion, history, and status." },
      { hex: "#1e3a8a", name: "Royal Blue", role: "Accent", psychology: "Trust and tradition." },
      { hex: "#fde047", name: "Gold Leaf", role: "Highlight", psychology: "Attention and brilliance." },
      { hex: "#f8fafc", name: "Marble White", role: "Neutral", psychology: "Purity and structure." },
      { hex: "#020617", name: "Throne Shadow", role: "Shadow", psychology: "Weight and permanence." }
    ],
    designs: ["Luxury real estate", "High-end jewelry", "Law firm"],
    complementary: ["Typography: Cinzel + Lora", "Textures: Velvet, polished marble", "Elements: Gold foil borders"],
    followUp: "Focus on gold or burgundy?", followUpOptions: ["Gold", "Burgundy"]
  },

  {
    keywords: ["retro", "80s", "arcade", "vintage", "pixel", "outrun", "vaporwave", "nostalgia"],
    name: "Arcade Glow",
    moodDesc: "The sticky carpets and glowing CRT screens of a 1980s video game arcade.",
    tones: ["Vibrant", "Dark", "Nostalgic"],
    colors: [
      { hex: "#1a0b2e", name: "Arcade Carpet", role: "Background", psychology: "Nostalgic dark foundation." },
      { hex: "#ff0055", name: "Insert Coin Red", role: "Primary", psychology: "Urgency and action." },
      { hex: "#fadb0f", name: "Pac Yellow", role: "Secondary", psychology: "Fun, high score energy." },
      { hex: "#00d2ff", name: "Vector Blue", role: "Accent", psychology: "Technological optimism." },
      { hex: "#ff77ff", name: "Laser Pink", role: "Highlight", psychology: "Pure 80s aesthetic." },
      { hex: "#4b2e83", name: "Cabinet Purple", role: "Neutral", psychology: "Muted retro vibes." },
      { hex: "#0d041a", name: "Screen Off", role: "Shadow", psychology: "The dark corner of the room." }
    ],
    designs: ["Indie game site", "Retro apparel", "Event poster"],
    complementary: ["Typography: Press Start 2P", "Textures: CRT scanlines, grid patterns", "Elements: Blocky borders"],
    followUp: "More pinks or more yellows?", followUpOptions: ["Pink", "Yellow"]
  },
  
  {
    keywords: ["autumn", "fall", "harvest", "leaves", "pumpkin", "cozy", "sweater", "october"],
    name: "October Rust",
    moodDesc: "The crisp air of October, falling leaves, and the warmth of a spiced drink.",
    tones: ["Warm", "Earthy", "Cozy", "Muted"],
    colors: [
      { hex: "#f4f1ea", name: "Wool Sweater", role: "Background", psychology: "Comfort and softness." },
      { hex: "#d35400", name: "Pumpkin Spice", role: "Primary", psychology: "Warmth, energy, and autumn." },
      { hex: "#c0392b", name: "Fallen Maple", role: "Secondary", psychology: "Passion and transition." },
      { hex: "#f39c12", name: "Golden Birch", role: "Accent", psychology: "Joy and fading sunlight." },
      { hex: "#f1c40f", name: "Crisp Sun", role: "Highlight", psychology: "Bright, fleeting warmth." },
      { hex: "#7f8c8d", name: "Overcast", role: "Neutral", psychology: "The chill in the air." },
      { hex: "#2c3e50", name: "Night Frost", role: "Shadow", psychology: "The early sunset." }
    ],
    designs: ["Bakery website", "Seasonal campaign", "Cozy blog"],
    complementary: ["Typography: Merriweather", "Textures: Knit, fallen leaves", "Elements: Soft organic shapes"],
    followUp: "More orange or more red?", followUpOptions: ["Orange", "Red"]
  },
  
  {
    keywords: ["corporate", "tech", "business", "saas", "professional", "clean", "trust", "blue"],
    name: "Enterprise Blue",
    moodDesc: "Clean, efficient, and trustworthy. The visual language of modern software and global business.",
    tones: ["Cool", "Professional", "Clean", "Minimal"],
    colors: [
      { hex: "#f8f9fa", name: "Cloud White", role: "Background", psychology: "Cleanliness and space." },
      { hex: "#0056b3", name: "Trust Blue", role: "Primary", psychology: "Reliability, security, and professionalism." },
      { hex: "#007bff", name: "Action Blue", role: "Secondary", psychology: "Clarity and communication." },
      { hex: "#17a2b8", name: "Innovation Cyan", role: "Accent", psychology: "Modernity and technology." },
      { hex: "#ffffff", name: "Pure White", role: "Highlight", psychology: "Absolute clarity." },
      { hex: "#6c757d", name: "Slate Gray", role: "Neutral", psychology: "Balance and neutrality." },
      { hex: "#343a40", name: "Charcoal Text", role: "Shadow", psychology: "Legibility and structure." }
    ],
    designs: ["B2B SaaS dashboard", "Corporate website", "Banking app"],
    complementary: ["Typography: Inter or Roboto", "Textures: Smooth gradients", "Elements: Sharp cards, soft shadows"],
    followUp: "Dark mode or light mode preference?", followUpOptions: ["Light", "Dark"]
  },
  
  {
    keywords: ["pastel", "dream", "soft", "baby", "cute", "kawaii", "lavender", "mint", "cotton candy"],
    name: "Cotton Candy Haze",
    moodDesc: "A soft, floating dreamscape made of sugar, clouds, and gentle afternoon light.",
    tones: ["Soft", "Light", "Sweet", "Airy"],
    colors: [
      { hex: "#fdfbfb", name: "Cloud Fluff", role: "Background", psychology: "Airy, weightless base." },
      { hex: "#ffb3ba", name: "Baby Pink", role: "Primary", psychology: "Innocence, sweetness, and comfort." },
      { hex: "#ffdfba", name: "Peach Sorbet", role: "Secondary", psychology: "Warmth and approachability." },
      { hex: "#baffc9", name: "Mint Breeze", role: "Accent", psychology: "Freshness and calm." },
      { hex: "#bae1ff", name: "Clear Sky", role: "Highlight", psychology: "Openness and peace." },
      { hex: "#e8daef", name: "Lavender Dust", role: "Neutral", psychology: "Gentle transition." },
      { hex: "#aeb6bf", name: "Soft Shadow", role: "Shadow", psychology: "Gentle grounding without harshness." }
    ],
    designs: ["Baby product store", "Dessert shop", "Cute stationery blog"],
    complementary: ["Typography: Quicksand", "Textures: Soft gradients, clouds", "Elements: Very rounded corners"],
    followUp: "More pinks or more blues?", followUpOptions: ["Pinks", "Blues"]
  },
  
  {
    keywords: ["space", "galaxy", "universe", "stars", "nebula", "cosmos", "astronomy", "purple"],
    name: "Deep Cosmos",
    moodDesc: "The infinite, terrifying, and beautiful expanse of the universe.",
    tones: ["Dark", "Mysterious", "Vibrant", "Deep"],
    colors: [
      { hex: "#030014", name: "Void Black", role: "Background", psychology: "The infinite emptiness of space." },
      { hex: "#4a00e0", name: "Nebula Purple", role: "Primary", psychology: "Mystery, magic, and the unknown." },
      { hex: "#8e2de2", name: "Cosmic Violet", role: "Secondary", psychology: "Vibrant stellar energy." },
      { hex: "#00c9ff", name: "Quasar Blue", role: "Accent", psychology: "Intense, radiating heat and light." },
      { hex: "#ffffff", name: "Starlight", role: "Highlight", psychology: "Piercing clarity in the dark." },
      { hex: "#2c3e50", name: "Dark Matter", role: "Neutral", psychology: "Invisible weight." },
      { hex: "#010008", name: "Event Horizon", role: "Shadow", psychology: "Absolute darkness." }
    ],
    designs: ["Astrology app", "Sci-fi portfolio", "Event landing page"],
    complementary: ["Typography: Space Grotesk", "Textures: Starfields, glowing dust", "Elements: Glowing orbs"],
    followUp: "More purple or more blue?", followUpOptions: ["Purple", "Blue"]
  },
  
  {
    keywords: ["coffee", "cafe", "mocha", "espresso", "latte", "brown", "cream", "warm", "morning"],
    name: "Morning Roast",
    moodDesc: "The rich aroma of espresso and the quiet hum of a morning cafe.",
    tones: ["Warm", "Earthy", "Comforting", "Rich"],