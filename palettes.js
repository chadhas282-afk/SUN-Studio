

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
    colors: [
      { hex: "#fdfbf7", name: "Steamed Milk", role: "Background", psychology: "Clean, warm, and inviting canvas." },
      { hex: "#3e2723", name: "Espresso Shot", role: "Primary", psychology: "Strong, grounding, and energizing." },
      { hex: "#5d4037", name: "Mocha Swirl", role: "Secondary", psychology: "Richness and reliability." },
      { hex: "#8d6e63", name: "Latte Foam", role: "Accent", psychology: "Softness and comfort." },
      { hex: "#d7ccc8", name: "Warm Mug", role: "Highlight", psychology: "Cozy, tactile warmth." },
      { hex: "#efebe9", name: "Oat Milk", role: "Neutral", psychology: "Smooth transition." },
      { hex: "#1b100c", name: "Roasted Bean", role: "Shadow", psychology: "Deep, bitter contrast." }
    ],
    designs: ["Coffee roaster e-commerce", "Local cafe website", "Morning routine app"],
    complementary: ["Typography: Merriweather + Lato", "Textures: Paper, wood grain", "Elements: Warm drop shadows"],
    followUp: "Lighter (latte) or darker (espresso)?", followUpOptions: ["Lighter", "Darker"]
  },
  
  {
    keywords: ["tropical", "beach", "summer", "ocean", "sand", "turquoise", "coral", "vacation"],
    name: "Island Getaway",
    moodDesc: "Crystal clear waters, warm sand, and the vibrant life of a coral reef.",
    tones: ["Vibrant", "Warm", "Refreshing", "Bright"],
    colors: [
      { hex: "#f0f8ff", name: "Sea Foam", role: "Background", psychology: "Airy, fresh, and clean." },
      { hex: "#00ced1", name: "Turquoise Water", role: "Primary", psychology: "Refreshing, clear, and calming." },
      { hex: "#ff7f50", name: "Living Coral", role: "Secondary", psychology: "Vibrant, energetic life." },
      { hex: "#ffd700", name: "Sunlight", role: "Accent", psychology: "Joy, warmth, and vacation." },
      { hex: "#ffffff", name: "White Sand", role: "Highlight", psychology: "Purity and heat." },
      { hex: "#f5deb3", name: "Wet Sand", role: "Neutral", psychology: "Earthy grounding." },
      { hex: "#005f69", name: "Deep Reef", role: "Shadow", psychology: "The cool depths of the ocean." }
    ],
    designs: ["Travel agency", "Swimwear brand", "Resort website"],
    complementary: ["Typography: Montserrat", "Textures: Water ripples, sand", "Elements: Wavy dividers"],
    followUp: "More blue or more coral?", followUpOptions: ["Blue", "Coral"]
  },
  
  {
    keywords: ["gothic", "mystery", "dark", "vampire", "crimson", "silver", "victorian", "spooky", "halloween"],
    name: "Victorian Shadow",
    moodDesc: "A candlelit manor, secrets in the dark, and the sharp elegance of gothic architecture.",
    tones: ["Dark", "Elegant", "Moody", "Sharp"],
    colors: [
      { hex: "#111111", name: "Obsidian", role: "Background", psychology: "Absolute darkness and mystery." },
      { hex: "#720e1e", name: "Dried Blood", role: "Primary", psychology: "Danger, passion, and the macabre." },
      { hex: "#4a4a4a", name: "Tarnished Silver", role: "Secondary", psychology: "Age, elegance, and coldness." },
      { hex: "#9b111e", name: "Ruby Amulet", role: "Accent", psychology: "A striking, wealthy focal point." },
      { hex: "#e0e0e0", name: "Moonlight", role: "Highlight", psychology: "Pale, ghostly illumination." },
      { hex: "#2b2b2b", name: "Stone Wall", role: "Neutral", psychology: "Cold, unyielding structure." },
      { hex: "#000000", name: "Pitch Black", role: "Shadow", psychology: "The void." }
    ],
    designs: ["Horror book cover", "Alternative fashion", "Escape room site"],
    complementary: ["Typography: Cinzel", "Textures: Lace, stone, fog", "Elements: Sharp borders, ornate frames"],
    followUp: "More red or more silver?", followUpOptions: ["Red", "Silver"]
  },
  
  {
    keywords: ["minimalist", "zen", "neutral", "beige", "clean", "simple", "peaceful", "calm", "wabi-sabi"],
    name: "Wabi-Sabi",
    moodDesc: "The beauty of imperfection, natural materials, and absolute simplicity.",
    tones: ["Muted", "Earthy", "Calm", "Light"],
    colors: [
      { hex: "#faf9f6", name: "Rice Paper", role: "Background", psychology: "Ultimate simplicity and peace." },
      { hex: "#8c857d", name: "Warm Stone", role: "Primary", psychology: "Grounded, natural strength." },
      { hex: "#b5b0a1", name: "Dried Reed", role: "Secondary", psychology: "Organic, muted life." },
      { hex: "#d6d2c4", name: "Soft Clay", role: "Accent", psychology: "Tactile warmth." },
      { hex: "#ffffff", name: "Pure Light", role: "Highlight", psychology: "Clarity and emptiness." },
      { hex: "#e8e6df", name: "Linen", role: "Neutral", psychology: "Soft texture." },
      { hex: "#4a4742", name: "Cast Iron", role: "Shadow", psychology: "Heavy, anchoring contrast." }
    ],
    designs: ["Architecture portfolio", "High-end ceramics", "Meditation app"],
    complementary: ["Typography: Inter (Light weight)", "Textures: Linen, unglazed pottery", "Elements: Huge whitespace"],
    followUp: "Warmer or cooler neutrals?", followUpOptions: ["Warmer", "Cooler"]
  },
  
  {
    keywords: ["sunset", "la", "vaporwave", "orange", "magenta", "violet", "summer", "evening"],
    name: "Malibu Dusk",
    moodDesc: "Cruising down the coast as the sky explodes into neon pinks and oranges.",
    tones: ["Vibrant", "Warm", "Saturated", "Nostalgic"],
    colors: [
      { hex: "#2b1055", name: "Deep Violet", role: "Background", psychology: "The encroaching night sky." },
      { hex: "#ff2a5f", name: "Hot Magenta", role: "Primary", psychology: "Vibrant, nostalgic energy." },
      { hex: "#ff7b54", name: "Sunset Orange", role: "Secondary", psychology: "The fading warmth of the sun." },
      { hex: "#ffd966", name: "Golden Glow", role: "Accent", psychology: "The last ray of light." },
      { hex: "#ffb4c4", name: "Pink Cloud", role: "Highlight", psychology: "Soft reflection." },
      { hex: "#753a88", name: "Twilight Purple", role: "Neutral", psychology: "The blending of day and night." },
      { hex: "#14042b", name: "Ocean Dark", role: "Shadow", psychology: "Depth and mystery." }
    ],
    designs: ["Music festival site", "Cocktail brand", "Summer apparel"],
    complementary: ["Typography: Outfit", "Textures: Gradients, palm silhouettes", "Elements: Gradient text"],
    followUp: "More pink or more orange?", followUpOptions: ["Pink", "Orange"]
  },
  
  {
    keywords: ["neon", "nightlife", "party", "club", "lime", "pink", "dark", "rave"],
    name: "Electric Underground",
    moodDesc: "The pulsing bass and blinding strobe lights of an underground rave.",
    tones: ["Neon", "Dark", "High Contrast", "Aggressive"],
    colors: [
      { hex: "#0a0a0a", name: "Pitch", role: "Background", psychology: "The dark room." },
      { hex: "#39ff14", name: "Toxic Lime", role: "Primary", psychology: "Piercing, unnatural energy." },
      { hex: "#ff00ff", name: "Rave Pink", role: "Secondary", psychology: "Wild, uninhibited fun." },
      { hex: "#00ffff", name: "Laser Cyan", role: "Accent", psychology: "Electric sharpness." },
      { hex: "#ffffff", name: "Strobe White", role: "Highlight", psychology: "Blinding flashes." },
      { hex: "#222222", name: "Speaker Grill", role: "Neutral", psychology: "Industrial backing." },
      { hex: "#000000", name: "Total Black", role: "Shadow", psychology: "The baseline." }
    ],
    designs: ["DJ portfolio", "Event ticketing", "Energy drink"],
    complementary: ["Typography: Space Grotesk", "Textures: LED grids", "Elements: Glowing borders"],
    followUp: "Focus on green or pink?", followUpOptions: ["Green", "Pink"]
  },
  
  {
    keywords: ["vintage", "academia", "dark academia", "leather", "books", "green", "brown", "study"],
    name: "Oxford Library",
    moodDesc: "Dusty books, leather armchairs, and the quiet pursuit of knowledge.",
    tones: ["Dark", "Warm", "Muted", "Intellectual"],
    colors: [
      { hex: "#1e221b", name: "Library Dark", role: "Background", psychology: "Quiet, insulated focus." },
      { hex: "#3b4d3a", name: "Hunter Green", role: "Primary", psychology: "Tradition, growth, and wealth." },
      { hex: "#5a3a29", name: "Old Leather", role: "Secondary", psychology: "History and tactile comfort." },
      { hex: "#cda434", name: "Brass Lamp", role: "Accent", psychology: "Illumination and classic elegance." },
      { hex: "#e8dcc4", name: "Parchment", role: "Highlight", psychology: "The pages of an old book." },
      { hex: "#8b7e66", name: "Dusty Spine", role: "Neutral", psychology: "Aged paper and bindings." },
      { hex: "#11120f", name: "Ink Black", role: "Shadow", psychology: "The written word." }
    ],
    designs: ["University website", "Bookstore", "Historical blog"],
    complementary: ["Typography: EB Garamond", "Textures: Paper, leather", "Elements: Serif drop caps"],
    followUp: "More green or more brown?", followUpOptions: ["Green", "Brown"]
  },
  
  {
    keywords: ["industrial", "grunge", "concrete", "rust", "steel", "urban", "decay", "gray"],
    name: "Urban Decay",
    moodDesc: "The raw, unfinished texture of concrete, rust, and exposed steel in a city.",
    tones: ["Cool", "Harsh", "Muted", "Gritty"],
    colors: [
      { hex: "#1c1c1c", name: "Soot", role: "Background", psychology: "Dirt and urban grime." },
      { hex: "#595959", name: "Concrete", role: "Primary", psychology: "Cold, unyielding structure." },
      { hex: "#b7410e", name: "Rust", role: "Secondary", psychology: "Decay and the passage of time." },
      { hex: "#a0a0a0", name: "Brushed Steel", role: "Accent", psychology: "Industrial strength." },
      { hex: "#e0e0e0", name: "Zinc", role: "Highlight", psychology: "Harsh, unpolished light." },
      { hex: "#3d3d3d", name: "Asphalt", role: "Neutral", psychology: "The street level." },
      { hex: "#0a0a0a", name: "Drain Shadow", role: "Shadow", psychology: "Deep urban darkness." }
    ],
    designs: ["Streetwear brand", "Architecture firm", "Music venue"],
    complementary: ["Typography: Anton", "Textures: Concrete, grunge brushes", "Elements: Thick borders"],
    followUp: "More rust or more concrete?", followUpOptions: ["Rust", "Concrete"]
  },
  
  {
    keywords: ["candy", "pop", "bubblegum", "sweet", "fun", "kids", "colorful", "bright"],
    name: "Sugar Rush",
    moodDesc: "A burst of pure, unadulterated joy, sugar, and hyper-colored fun.",
    tones: ["Vibrant", "Bright", "Playful", "Loud"],
    colors: [
      { hex: "#ffffff", name: "Pure Sugar", role: "Background", psychology: "A clean slate for bright colors." },
      { hex: "#ff1493", name: "Bubblegum", role: "Primary", psychology: "Loud, unabashed fun." },
      { hex: "#00bfff", name: "Blue Raspberry", role: "Secondary", psychology: "Electric and sweet." },
      { hex: "#ffd700", name: "Lemon Drop", role: "Accent", psychology: "High energy and happiness." },
      { hex: "#ffb6c1", name: "Cotton Candy", role: "Highlight", psychology: "Soft sweetness." },
      { hex: "#e6e6fa", name: "Grape Taffy", role: "Neutral", psychology: "Playful backing." },
      { hex: "#ff4500", name: "Cherry Pop", role: "Shadow", psychology: "Intense flavor." }
      ],
    designs: ["Toy store", "Candy brand", "Kids app"],
    complementary: ["Typography: Fredoka One", "Textures: Glossy plastics", "Elements: Heavy rounded corners, bouncy animations"],
    followUp: "More pink or more blue?", followUpOptions: ["Pink", "Blue"]
  },
  
  {
    keywords: ["mountain", "majestic", "slate", "pine", "snow", "outdoor", "hiking", "adventure"],
    name: "Alpine Peak",
    moodDesc: "The thin air, massive rock faces, and towering pines of a mountain range.",
    tones: ["Cool", "Earthy", "Muted", "Vast"],
    colors: [
      { hex: "#e2e8f0", name: "Cloud Cover", role: "Background", psychology: "Airy, high-altitude openness." },
      { hex: "#475569", name: "Slate Rock", role: "Primary", psychology: "Immovable strength." },
      { hex: "#1e293b", name: "Deep Pine", role: "Secondary", psychology: "Endurance and nature." },
      { hex: "#0ea5e9", name: "Alpine Sky", role: "Accent", psychology: "Clarity and vastness." },
      { hex: "#ffffff", name: "Snow Cap", role: "Highlight", psychology: "Purity and isolation." },
      { hex: "#cbd5e1", name: "Mist", role: "Neutral", psychology: "The haze between peaks." },
      { hex: "#0f172a", name: "Gorge Shadow", role: "Shadow", psychology: "Deep, intimidating drops." }
    ],
    designs: ["Outdoor gear brand", "Hiking app", "Travel documentary"],
    complementary: ["Typography: Inter", "Textures: Rock grain", "Elements: Geometric triangles"],
    followUp: "More blue or more slate?", followUpOptions: ["Blue", "Slate"]
  },
  
  {
    keywords: ["golden hour", "warm", "amber", "peach", "sun", "glow", "evening", "photography"],
    name: "Last Light",
    moodDesc: "That magical, fleeting window of time when the world is bathed in soft, golden honey.",
    tones: ["Warm", "Soft", "Glowing", "Nostalgic"],
    colors: [
      { hex: "#fff8f0", name: "Soft Haze", role: "Background", psychology: "Gentle, diffused light." },
      { hex: "#f5a623", name: "Sun Halo", role: "Primary", psychology: "Warmth, joy, and illumination." },
      { hex: "#f8e71c", name: "Liquid Gold", role: "Secondary", psychology: "Precious, fleeting moments." },
      { hex: "#e36e39", name: "Peach Glow", role: "Accent", psychology: "Soft romance and end of day." },
      { hex: "#ffffff", name: "Sun Flare", role: "Highlight", psychology: "Blinding, beautiful light." },
      { hex: "#fde3c8", name: "Dust Motes", role: "Neutral", psychology: "Textural warmth." },
      { hex: "#8c5b3f", name: "Long Shadow", role: "Shadow", psychology: "The approaching evening." }
    ],
    designs: ["Photography portfolio", "Wedding site", "Skincare brand"],
    complementary: ["Typography: Lora", "Textures: Light leaks, soft blurs", "Elements: Soft glows"],
    followUp: "More yellow/gold or more peach/orange?", followUpOptions: ["Gold", "Peach"]
  },
  
  {
    keywords: ["romance", "love", "passion", "pink", "red", "heart", "blush", "crush", "intimate", "affection", "valentine"],
    name: "Crimson heartbeat",
    moodDesc: "The rush of blood, the warmth of a touch, and the electric tension of a gaze. This palette pulses with the intense, vulnerable energy of falling in love.",
    tones: ["Warm", "Passionate", "Soft", "Vibrant"],
    colors: [
      { hex: "#2B0007", name: "Deep Longing",      role: "Background", psychology: "Grounds the bright passion with a heavy, intense depth." },
      { hex: "#8A0521", name: "Venous Red",        role: "Primary",    psychology: "The color of adrenaline and heartbeat; signals bold, undeniable affection." },
      { hex: "#D62849", name: "First Kiss",        role: "Secondary",  psychology: "Vibrant and alive; represents the sudden spark of romantic tension." },
      { hex: "#FF5E7E", name: "Fever Pink",        role: "Accent",     psychology: "Flirtatious, warm, and highly emotional." },
      { hex: "#FF99B1", name: "Soft Blush",        role: "Highlight",  psychology: "The vulnerable, tender side of love; soft, gentle, and intimate." },
      { hex: "#FFE6EA", name: "Silk Sheets",       role: "Neutral",    psychology: "A comforting, clean canvas for the emotional intensity of the reds." },
      { hex: "#4A0B1A", name: "Shadowed Rose",     role: "Shadow",     psychology: "The secrecy and privacy of an intimate romantic moment." }
    ],
    designs: [
      "Wedding or event photography portfolio",
      "Boutique lingerie or luxury cosmetic brand identity",
      "A dating app interface focusing on deep connections"
    ],
    complementary: [
      "Typography: Playfair Display + Lato (clean, elegant contrast)",
      "Textures: Silk drapery, crushed velvet, rose petal softness",
      "Elements: Soft gradients, rounded corners, subtle bloom effects"
    ],
    followUp: "Do you want this to feel more **innocent and sweet** (more light pinks) or more **intense and passionate** (more dark crimson)?",
    followUpOptions: ["Innocent and sweet", "Intense and passionate"]
  },

  
  {
    keywords: ["hate", "anger", "fury", "rage", "blood", "fire", "intense", "aggression", "rebel", "dark red", "villain"],
    name: "Boiling Point",
    moodDesc: "The sharp, uncompromising edge of rage and rebellion. A hostile, cinematic atmosphere built on the tension between absolute darkness and searing heat.",
    tones: ["Aggressive", "Harsh", "Dark", "High Contrast"],
    colors: [
      { hex: "#0A0000", name: "Void Black",        role: "Background", psychology: "Total absence of light; creates an oppressive, heavy, and formidable atmosphere." },
      { hex: "#520000", name: "Coagulated Blood",  role: "Primary",    psychology: "Signals danger and deep, simmering resentment." },
      { hex: "#9E0000", name: "Raw Fury",          role: "Secondary",  psychology: "Aggressive and demanding of attention; the color of a warning sign." },
      { hex: "#E60000", name: "Searing Heat",      role: "Accent",     psychology: "Explosive, uncontrollable energy breaking through the dark." },
      { hex: "#FF4D4D", name: "Warning Light",     role: "Highlight",  psychology: "A sharp, uncomfortable brightness that creates visual tension." },
      { hex: "#2B1A1A", name: "Ash and Rust",      role: "Neutral",    psychology: "Corroded and exhausted; the aftermath of burning emotion." },
      { hex: "#1F0000", name: "Abyss",             role: "Shadow",     psychology: "Swallowing light and hope; absolute hostility." }
    ],
    designs: [
      "Heavy metal band merchandise or tour website",
      "High-intensity gaming UI for a combat or horror game",
      "A provocative editorial spread on rebellion and protest"
    ],
    complementary: [
      "Typography: Impact or Anton + JetBrains Mono (harsh, structural typography)",
      "Textures: Scratched metal, concrete, static noise",
      "Elements: Sharp diagonal cuts, glitch effects, brutalist UI components"
    ],
    followUp: "Should this feel more like **cold, calculated villainy** or **explosive, chaotic rage**?",
    followUpOptions: ["Cold calculated villainy", "Explosive chaotic rage"]
  },

  
  {
    keywords: ["green", "forest", "nature", "leaves", "earth", "calm", "growth", "life", "moss", "pine", "botanical"],
    name: "Canopy Whisper",
    moodDesc: "The quiet hush of an ancient forest after rainfall. Sunlight filtering through layers of pine needles, breathing life, growth, and absolute stillness.",
    tones: ["Earthy", "Calm", "Organic", "Lush"],
    colors: [
      { hex: "#0A1F11", name: "Deep Roots",        role: "Background", psychology: "Grounding and ancient; the dark soil from which everything grows." },
      { hex: "#1C4024", name: "Pine Shadow",       role: "Primary",    psychology: "Quiet strength and endurance; a mature, stable energy." },
      { hex: "#2F6B3A", name: "Fern Frond",        role: "Secondary",  psychology: "Life, vitality, and natural harmony." },
      { hex: "#56A35F", name: "Sunlit Moss",       role: "Accent",     psychology: "Inviting and refreshing; triggers feelings of renewal and health." },
      { hex: "#A6DCAE", name: "Morning Dew",       role: "Highlight",  psychology: "Crisp and delicate; the gentle start of a new day." },
      { hex: "#E8F5E9", name: "Birch Bark",        role: "Neutral",    psychology: "Clean, organic, and airy; gives the heavy greens room to breathe." },
      { hex: "#112E1B", name: "Undergrowth",       role: "Shadow",     psychology: "The cool, damp spaces hidden away from the sun." }
    ],
    designs: [
      "Sustainable fashion brand e-commerce site",
      "Organic skincare or wellness app",
      "Environmental non-profit campaign page"
      ],
    complementary: [
      "Typography: Lora + Inter (organic serif paired with clean sans)",
      "Textures: Linen weave, watercolor paper, subtle leaf shadows",
      "Elements: Soft organic shapes, plenty of negative space, botanical illustrations"
    ],
    followUp: "Do you prefer a **misty, muted pine forest** or a **vibrant, sunlit jungle**?",
    followUpOptions: ["Misty pine forest", "Vibrant sunlit jungle"]
  },

  
  {
    keywords: ["jazz", "velvet", "amber", "cigarette", "smoke", "club", "lounge", "speakeasy", "bourbon", "whiskey", "warm light", "bar"],
    name: "Velvet Twilight",
    moodDesc: "The last hour before midnight in a dimly lit jazz bar — amber light catching smoke, the smell of old wood and good whiskey, conversations that feel like confessions.",
    tones: ["Warm", "Dark", "Saturated", "Nostalgic"],
    colors: [
      { hex: "#1a0f0a", name: "Midnight Mahogany", role: "Background", psychology: "Grounds the palette in rich depth and intimacy; signals exclusivity and warmth." },
      { hex: "#8b3a2f", name: "Ember Bloom",       role: "Primary",    psychology: "Evokes burning coals and slow desire — passionate but controlled." },
      { hex: "#d4893a", name: "Burnished Amber",   role: "Accent",     psychology: "The warmth of candlelight; triggers nostalgia, comfort, and golden-era longing." },
      { hex: "#f0c87e", name: "Honey Mist",        role: "Highlight",  psychology: "Soft luminosity that lifts the palette without breaking the smoky spell." },
      { hex: "#3d2b1f", name: "Old Leather",       role: "Surface",    psychology: "Worn, trusted, familiar — the patina of beautiful things with history." },
      { hex: "#c4a882", name: "Aged Parchment",    role: "Neutral",    psychology: "The color of paper letters and old photographs; evokes time and tenderness." },
      { hex: "#6b2d2d", name: "Velvet Dusk",       role: "Shadow",     psychology: "A deep wine-like shadow that adds theatrical depth and mystery." }
    ],
    designs: [
      "Upscale whiskey brand or cocktail bar website with rich texture overlays",
      "Vintage jazz album cover or music streaming app with dark editorial aesthetic",
      "Luxury memoir or noir novel interior design with serif typography"
    ],
    complementary: [
      "Typography: DM Serif Display + Cormorant Garamond (italic for headings)",
      "Textures: Aged leather grain, canvas weave, subtle wood knot pattern",
      "Elements: Geometric art deco frames, vintage record grooves, candlelight halos"
    ],
    followUp: "Should it feel more **cinematic and moody** (deeper shadows, less warm glow) or more **romantically golden** (brighter ambers, ivory highlights)?",
    followUpOptions: ["More cinematic — deepen the shadows", "More romantic — warmer golds"]
  },

  
  {
    keywords: ["ocean", "sea", "melancholy", "deep", "water", "vast", "cold", "blue", "underwater", "waves", "marine", "abyss", "grief"],
    name: "Abyssal Longing",
    moodDesc: "Standing at the edge of something vast and unknowable — the ocean at night, beautiful and indifferent, its depth a mirror for everything you haven't said.",
    tones: ["Cool", "Dark", "Muted", "Contemplative"],
    colors: [
      { hex: "#050d1a", name: "Midnight Fathom",       role: "Background", psychology: "The absolute dark of deep water; evokes existential depth and oceanic calm." },
      { hex: "#0d2e4a", name: "Trench Blue",           role: "Primary",    psychology: "Cold, vast, and melancholic — the color of unexplored interiors." },
      { hex: "#1a5a82", name: "Current Pulse",         role: "Secondary",  psychology: "Slow-moving force; suggests constancy, resilience, and quiet strength." },
      { hex: "#2a8fae", name: "Surface Light",         role: "Accent",     psychology: "The electric shimmer of sunlight reaching through dark water — hope at depth." },
      { hex: "#5bc4d6", name: "Bioluminescent Wisp",  role: "Highlight",  psychology: "Ethereal and rare; signals wonder, the beautiful things found in darkness." },
      { hex: "#8eb8c8", name: "Fog Drift",             role: "Neutral",    psychology: "The haze between sky and sea; ambiguity, contemplation, open questions." },
      { hex: "#0a1929", name: "Hadal Shadow",          role: "Shadow",     psychology: "Crushingly deep; the weight of silence and the comfort of invisibility." }
    ],
    designs: [
      "Environmental storytelling game or interactive narrative with ocean themes",
      "Mental wellness app with calming, introspective interface",
      "Photography portfolio for underwater or seascape artists"
    ],
    complementary: [
      "Typography: Spectral (light weight) + Space Grotesk (UI elements)",
      "Textures: Watercolor washes, caustic light patterns, salt-crystal grain",
      "Elements: Flowing wave animations, depth gradient overlays, sparse negative space"
    ],
    followUp: "Should it lean more **poetic and introspective** (softer grays, misty blues) or more **dramatic and cinematic** (deeper contrasts, electric cyan accents)?",
    followUpOptions: ["More poetic — softer, mistier", "More dramatic — darker contrasts"]
  },

  
  {
    keywords: ["snow", "winter", "cold", "ice", "frost", "silence", "white", "pure", "crisp", "frozen", "arctic", "first snow"],
    name: "Crystalline Hush",
    moodDesc: "The morning after the first snowfall — a world held in suspension, every sound swallowed by white, the air sharp and clean with the weight of something beginning.",
    tones: ["Cool", "Light", "Minimal", "Serene"],
    colors: [
      { hex: "#f5f7fc", name: "Blank Canvas",    role: "Background", psychology: "Infinite potential; the breath before a word — pure and expectant." },
      { hex: "#d6e4f0", name: "Ice Veil",        role: "Primary",    psychology: "Transparent winter calm; equanimity and the beauty of empty spaces." },
      { hex: "#a8c4dc", name: "Pale Horizon",    role: "Secondary",  psychology: "The soft blue of a winter sky — detached, elevated, quietly hopeful." },
      { hex: "#7ba7c4", name: "Frost Current",   role: "Accent",     psychology: "Crisp and precise; intellectual clarity and cool-headed confidence." },
      { hex: "#e8eef7", name: "Snow Whisper",    role: "Surface",    psychology: "Barely-there warmth in the whiteness — the quiet comfort of being indoors." },
      { hex: "#c5d8e8", name: "Frozen Lake",     role: "Neutral",    psychology: "Something solid beneath the surface; trust, stillness, depth beneath serenity." },
      { hex: "#b4cfe5", name: "Dusk Pearl",      role: "Shadow",     psychology: "The faint shadow on snow at dusk — lavender-tinged, magical, ephemeral." }
    ],
    designs: [
      "Minimalist meditation or mindfulness app with airy, breathable layouts",
      "Luxury skincare or wellness brand with clean, clinical elegance",
      "Editorial magazine spread for winter fashion or poetry anthology"
    ],
    complementary: [
      "Typography: Cormorant Garamond (light italic) + Inter (300 weight UI text)",
      "Textures: Vellum paper, snowflake crystalline micro-patterns, frosted glass",
      "Elements: Generous whitespace, hairline dividers, subtle silver foil effects"
    ],
    followUp: "Should it feel more **stark and minimalist** (almost monochrome) or add **warmth and softness** (hints of cream, pale lavender)?",
    followUpOptions: ["Starker — near-monochrome", "Softer — add pale lavender warmth"]
  },

  
  {
    keywords: ["neon", "cyberpunk", "city", "3am", "electric", "future", "tech", "night", "rain", "urban", "dystopia", "futuristic", "sci-fi", "cyber", "solitude", "lonely"],
    name: "Neon Solace",
    moodDesc: "3 AM in a city that never sleeps — neon signs bleeding into rain-slicked streets, the loneliness of a crowd, the electric hum of a world running on caffeine and data.",
    tones: ["Cool", "Dark", "Vivid", "Electric"],
    colors: [
      { hex: "#080b14", name: "Void Black",        role: "Background", psychology: "The darkness between stars; the city's unconscious, full of potential energy." },
      { hex: "#7000ff", name: "UV Signal",         role: "Primary",    psychology: "High-energy, transgressive; the color of systems operating outside normal bounds." },
      { hex: "#00d4ff", name: "Cyan Ghost",        role: "Accent",     psychology: "Cold digital light; the alien beauty of screens reflecting on wet pavement." },
      { hex: "#ff2d87", name: "Glitch Rose",       role: "Secondary",  psychology: "Warmth corrupted by electricity; intimacy filtered through a neon lens." },
      { hex: "#1a1a2e", name: "Circuit Shadow",    role: "Surface",    psychology: "The deep blue-black of server rooms and back alleys — industrial and contained." },
      { hex: "#ff9c00", name: "Warning Amber",     role: "Alert",      psychology: "Caution and attention; the color of emergency lights and desire." },
      { hex: "#4d00b3", name: "Deep Ultraviolet",  role: "Shadow",     psychology: "The subterranean layer beneath consciousness — menacing and hypnotic." }
    ],
    designs: [
      "Cyberpunk video game UI or dark-mode developer tool with neon accents",
      "Music festival brand for electronic/techno events with intense visual identity",
      "Sci-fi novel or graphic novel cover with hard-boiled noir atmosphere"
    ],
    complementary: [
      "Typography: Rajdhani Bold + IBM Plex Mono (for data/code elements)",
      "Textures: Scanline CRT patterns, holographic foil, rain-on-glass blur",
      "Elements: Glitch animations, neon glow box-shadows, hexagonal grid overlays"
    ],
    followUp: "Should this lean more **cold and corporate dystopia** (more blues, chrome) or more **warm and chaotic underground** (more purples and hot pinks)?",
    followUpOptions: ["Colder — corporate dystopia blues", "Warmer — chaotic underground pinks"]
  },

  
  {
    keywords: ["garden", "bloom", "summer", "flower", "nature", "green", "botanical", "sun", "warm", "cottage", "floral", "lush", "abundant"],
    name: "Sunlit Abundance",
    moodDesc: "A cottage garden in full summer — every color competing joyfully, bees in lavender, the smell of warm earth and ripe tomatoes, the sense that life is genuinely good.",
    tones: ["Warm", "Saturated", "Joyful", "Earthy"],
    colors: [
      { hex: "#faf4e8", name: "Afternoon Linen",  role: "Background",   psychology: "Warm, unhurried, inviting — the light through gauze curtains on a summer afternoon." },
      { hex: "#4a7c59", name: "Garden Deep",      role: "Primary",      psychology: "Rooted, vital, generative; the satisfaction of growing things and tended soil." },
      { hex: "#e8603c", name: "Poppy Fire",       role: "Accent",       psychology: "Exuberant joy and bold presence; the confidence to be vivid and unashamed." },
      { hex: "#f2c94c", name: "Buttercup Gold",   role: "Secondary",    psychology: "Radiant optimism; the color of afternoon sunlight and simple happiness." },
      { hex: "#9ab8a0", name: "Sage Mist",        role: "Neutral",      psychology: "Calm amid abundance; the refreshing counterpoint to lush, saturated vitality." },
      { hex: "#c8856f", name: "Terra Rosa",       role: "Warm Neutral",  psychology: "Grounding warmth; old clay pots and sun-baked terracotta — timeless and honest." },
      { hex: "#8b4f6e", name: "Lavender Dusk",    role: "Complement",   psychology: "The sweet mystery of evening gardens; adds sophistication to unguarded joy." }
      ],
    designs: [
      "Farm-to-table restaurant branding or organic food marketplace with earthy vitality",
      "Botanical illustration app or plant-care guide with warm, handcrafted feel",
      "Summer lifestyle brand or artisanal goods shop with joyful, abundant energy"
    ],
    complementary: [
      "Typography: Playfair Display (headings) + Lora (body text) — warm serif warmth",
      "Textures: Linen weave, botanical watercolor washes, pressed flower illustrations",
      "Elements: Hand-drawn botanical borders, organic shapes, dappled light overlays"
    ],
    followUp: "Should this feel more **wildflower and untamed** (brighter, more chaotic) or more **curated English garden** (more muted, ordered, classic)?",
    followUpOptions: ["Wilder — brighter and untamed", "Curated — muted and ordered"]
  },

  
  {
    keywords: ["forest", "moss", "wood", "trees", "nature", "dark green", "mysterious", "ancient", "earth", "dusk", "woodland", "fairy", "fern", "mushroom"],
    name: "Moss Whisper",
    moodDesc: "An ancient forest at the edge of dusk — the hush of things growing slowly, light filtering green through a thousand leaves, the sense that the trees remember everything.",
    tones: ["Cool-Warm", "Dark", "Muted", "Earthy"],
    colors: [
      { hex: "#0f1c0d", name: "Old Growth Dark",    role: "Background", psychology: "The primal dark of dense canopy; protective, ancient, teeming with hidden life." },
      { hex: "#2a5c2a", name: "Verdant Depth",      role: "Primary",    psychology: "Living, breathing vitality; the color of endurance and quiet, persistent growth." },
      { hex: "#5c8c3e", name: "Canopy Light",       role: "Secondary",  psychology: "Filtered sunlight through leaves — hope that filters through even dense cover." },
      { hex: "#8fae60", name: "New Fern",           role: "Accent",     psychology: "The bright urgency of fresh growth; renewal after long dormancy." },
      { hex: "#3d2e1a", name: "Forest Floor",       role: "Warm Shadow",psychology: "Decomposing leaves and rich soil — the dark generativity that feeds new life." },
      { hex: "#7a9e7e", name: "Lichen Grey-Green",  role: "Neutral",    psychology: "Patient coexistence; the slow collaboration of fungi and rock over centuries." },
      { hex: "#c4b98e", name: "Birch Pale",         role: "Highlight",  psychology: "The pale bark of birch trees — graceful contrast in darkness, delicate resilience." }
    ],
    designs: [
      "Eco-conscious brand or environmental nonprofit with grounded, earthy authority",
      "Fantasy RPG game UI or nature-themed journaling app with deep atmospheric immersion",
      "Sustainable fashion label or artisanal outdoor goods with ancient-craft aesthetic"
    ],
    complementary: [
      "Typography: EB Garamond (italic headings) + Source Serif Pro (body)",
      "Textures: Bark rubbing, watercolor moss, scratched wood grain, aged paper",
      "Elements: Intricate leaf vein patterns, circular tree-ring motifs, spore cloud particles"
    ],
    followUp: "Should it lean more **dark and mystical** (deeper blacks, bioluminescent accents) or more **sunlit and peaceful** (warmer greens, golden highlights)?",
    followUpOptions: ["Darker — mystical, bioluminescent", "Sunnier — warmer greens, gold"]
  },

  
  {
    keywords: ["library", "cozy", "books", "reading", "rain", "coffee", "warm", "safe", "thoughtful", "intellectual", "quiet", "indoors"],
    name: "Amber Stacks",
    moodDesc: "A rainy afternoon in a library that smells of old books — the particular contentment of being surrounded by ideas, with a warm drink, going nowhere, needing nothing.",
    tones: ["Warm", "Dark", "Muted", "Safe"],
    colors: [
      { hex: "#1e1610", name: "Binding Dark",    role: "Background", psychology: "The deep brown of wooden shelves and tooled leather; shelter and accumulated wisdom." },
      { hex: "#8b5e3c", name: "Walnut Warm",     role: "Primary",    psychology: "Solid, learned, trustworthy — the color of old desks and used encyclopedias." },
      { hex: "#d4a574", name: "Tawny Page",      role: "Secondary",  psychology: "The golden aging of beloved books; time made beautiful through use and love." },
      { hex: "#e8c99a", name: "Reading Light",   role: "Highlight",  psychology: "The warm glow of a lamp on an autumn afternoon — focused, inviting, safe." },
      { hex: "#4a3728", name: "Dark Oak",        role: "Surface",    psychology: "Structural depth; the grounding presence of old furniture and settled convictions." },
      { hex: "#9e8268", name: "Dusty Spine",     role: "Neutral",    psychology: "A well-loved middle tone — neither new nor ancient, perfectly worn-in." },
      { hex: "#c4916a", name: "Fox-Tone Tan",    role: "Accent",     psychology: "The foxing on old paper; beautiful imperfection, marks of a life well-read." }
    ],
    designs: [
      "Book subscription service, literary magazine, or reading app with editorial warmth",
      "Academic publishing house branding with timeless intellectual authority",
      "Personal blog or newsletter for thoughtful long-form writing and essays"
    ],
    complementary: [
      "Typography: Libre Baskerville (headings) + Georgia (body) — deeply legible serif pair",
      "Textures: Aged paper grain, leather embossing, linen endpapers, marbled paper",
      "Elements: Decorative chapter dividers, footnote-style annotations, vintage map borders"
    ],
    followUp: "Should this feel more **academic and classical** (cooler tones, more formal) or more **romantic and personal** (warmer, cozier, handwritten touches)?",
    followUpOptions: ["More academic — cooler, formal", "More romantic — cozy, handwritten"]
  },

  
  {
    keywords: ["desert", "dusk", "sunset", "sand", "orange", "vast", "silence", "heat", "dry", "arid", "cactus", "canyon", "golden hour", "barren", "horizon"],
    name: "Ochre Silence",
    moodDesc: "The desert at golden hour — the sun turning everything to fire and shadow, absolute silence broken only by wind, the profound peace of a landscape that needs nothing from you.",
    tones: ["Warm", "Dark", "Saturated", "Expansive"],
    colors: [
      { hex: "#1a0c05", name: "Canyon Midnight",     role: "Background", psychology: "The absolute dark of desert canyons at night; ancient, contained, vast." },
      { hex: "#c45c1a", name: "Burning Mesa",        role: "Primary",    psychology: "The orange fire of sun-baked clay; raw earth at its most elemental and bold." },
      { hex: "#e88a3a", name: "Ember Horizon",       role: "Accent",     psychology: "A sun caught between day and night — transformation, endings, radiant beauty." },
      { hex: "#f2c07a", name: "Sand Pale",           role: "Highlight",  psychology: "The glow of dunes in late light — serene vastness and timeless patience." },
      { hex: "#8b3a1a", name: "Terracotta Shadow",   role: "Shadow",     psychology: "Long shadows of rock formations; depth that makes light more precious." },
      { hex: "#6b4c2a", name: "Dust Storm",          role: "Neutral",    psychology: "Fine particles of a thousand years; the in-between of earth and air." },
      { hex: "#3d1f0a", name: "Arroyo Dark",         role: "Surface",    psychology: "The cool dark of a dry riverbed — hidden pathways, underground persistence." }
    ],
    designs: [
      "Artisanal ceramics or handmade goods brand with earthy, sun-baked materiality",
      "Travel magazine editorial for American Southwest or Saharan destinations",
      "Architecture or interior design studio with warm, adobe-inspired aesthetic"
    ],
    complementary: [
      "Typography: Freight Display Pro (serif) + Acumin Pro (clean sans-serif)",
      "Textures: Cracked clay, rough sandstone, woven basket patterns, sun-bleached linen",
      "Elements: Stretched horizon compositions, long shadow graphics, rock strata motifs"
    ],
    followUp: "Should the palette feel more **hot and intense** (deeper reds, burning midtones) or more **pale and ethereal** (bleached golds, cool purples at the edges)?",
    followUpOptions: ["Hotter — deeper reds, burning", "Paler — bleached golds, ethereal"]
    },

  
  {
    keywords: ["nostalgia", "retro", "memory", "vintage", "past", "childhood", "90s", "80s", "faded", "film", "analog", "old", "remember", "polaroid"],
    name: "Faded Summer",
    moodDesc: "The saturated warmth of a memory that hasn't quite faded — summer afternoons from another decade, colors slightly off, edges blurred, the ache of something beautiful that's gone.",
    tones: ["Warm", "Muted", "Nostalgic", "Analog"],
    colors: [
      { hex: "#f5ede0", name: "Sun-Bleached Cream",  role: "Background",   psychology: "The warm fade of old photographs; time that has softened everything it touched." },
      { hex: "#d4845a", name: "Terracotta Blush",    role: "Primary",      psychology: "Seventies warmth distilled — comfortable, handmade, earnest without irony." },
      { hex: "#8fb8a8", name: "Sage Washed",         role: "Secondary",    psychology: "The green of vintage clothing; muted by sun and wash cycles, more beautiful for it." },
      { hex: "#e8c4a0", name: "Polaroid Gold",       role: "Highlight",    psychology: "The color-shift of expired film; the imperfect record of something real." },
      { hex: "#7a5c48", name: "Dark Roast",          role: "Dark Neutral", psychology: "The brown of old leather and worn-wood; presence without pretension." },
      { hex: "#c4a882", name: "Linen Warm",          role: "Neutral",      psychology: "The middle distance of memory — present but not sharp, warm but not hot." },
      { hex: "#4a7a6a", name: "Forest Teal",         role: "Accent",       psychology: "A pop of the unexpected; the detail in a memory that makes it suddenly vivid." }
    ],
    designs: [
      "Vintage clothing or thrift store brand with analog, handcrafted visual language",
      "Personal photography portfolio or film-photography zine with nostalgic warmth",
      "Podcast or newsletter about culture, memory, and the recent past"
    ],
    complementary: [
      "Typography: Playfair Display (weathered serif) + Josefin Sans (1970s geometric touch)",
      "Textures: Film grain overlay, slightly off-register printing, aged newsprint",
      "Elements: Rounded corners on photos, Polaroid-style frames, hand-lettered labels"
    ],
    followUp: "Should it feel more **warm and golden (70s film)** or more **cool and washed out (90s Kodak)**?",
    followUpOptions: ["Warmer — 70s golden film", "Cooler — 90s washed Kodak"]
  },

  
  {
    keywords: ["minimal", "zen", "calm", "peaceful", "simple", "clean", "quiet", "meditate", "breathe", "still", "serene", "japanese", "wabi", "sabi"],
    name: "Still Water",
    moodDesc: "Absolute interior calm — the moment between breath in and breath out, a single stone in raked gravel, the understanding that less is not deprivation but precision.",
    tones: ["Neutral", "Warm-Neutral", "Minimal", "Restful"],
    colors: [
      { hex: "#f8f6f2", name: "Washi White",      role: "Background", psychology: "The warm white of handmade paper; presence without assertion, space that breathes." },
      { hex: "#2c2c2c", name: "Sumi Black",       role: "Primary",    psychology: "The black of calligraphy ink — decisive, pure, complete without being harsh." },
      { hex: "#8c8c8c", name: "Stone Mist",       role: "Secondary",  psychology: "The gray of wet river stones; contemplative, balanced, effortlessly neutral." },
      { hex: "#c8b99a", name: "Natural Reed",     role: "Neutral",    psychology: "Organic warmth without theatrics; the satisfying imperfection of natural materials." },
      { hex: "#6b7b6b", name: "Pine Shadow",      role: "Accent",     psychology: "The muted green of old cedar; grounding, enduring, quietly alive." },
      { hex: "#e8e0d4", name: "Linen Breath",     role: "Surface",    psychology: "The warmth of untreated cloth; comfort without excess, texture without noise." }
    ],
    designs: [
      "Meditation or mindfulness app with rigorous negative space and intentional typography",
      "Luxury architectural studio or interior design firm with Japanese aesthetic sensibility",
      "Premium skincare or wellness brand that communicates through restraint and purity"
    ],
    complementary: [
      "Typography: Noto Serif JP (elegantly bilingual) + Inter (crisp UI sans-serif)",
      "Textures: Hand-pressed paper, raked sand, unglazed ceramic, raw linen",
      "Elements: Maximum negative space, hairline rules, single focal point per view"
    ],
    followUp: "Should this feel more **purely monochrome** (true blacks and whites) or keep the **warm earthy undertones** that give it humanity?",
    followUpOptions: ["Purely monochrome — no warm tones", "Keep earthy warmth and humanity"]
  },

  
  {
    keywords: ["romance", "love", "tender", "soft", "dreamy", "pink", "delicate", "gentle", "flutter", "blush", "rose", "feminine", "ethereal"],
    name: "Rose Reverie",
    moodDesc: "The soft disorientation of falling — everything slightly blurred, the world warm and rose-tinted, every small detail charged with meaning, time moving strangely slow.",
    tones: ["Warm", "Light", "Soft", "Romantic"],
    colors: [
      { hex: "#fff0f3", name: "First Blush",        role: "Background", psychology: "The color of anticipation and open-heartedness; vulnerability made beautiful." },
      { hex: "#e8789a", name: "Rose Petal",         role: "Primary",    psychology: "Tender romantic love, femininity at its most confident and unconflicted." },
      { hex: "#c45882", name: "Twilight Fuchsia",   role: "Accent",     psychology: "Passion with depth; love that has texture and courage, not just sweetness." },
      { hex: "#f4b8cc", name: "Flutter Pink",       role: "Secondary",  psychology: "The giddy levity of a new crush; delicate, hopeful, unable to stop smiling." },
      { hex: "#d4a0b8", name: "Dusk Mauve",         role: "Neutral",    psychology: "Romantic melancholy; the beautiful ache of loving something ephemeral." },
      { hex: "#8b4a6a", name: "Dark Rose",          role: "Shadow",     psychology: "Depth within romance — desire, longing, the complexity of true intimacy." },
      { hex: "#ffe4ec", name: "Champagne Blush",    role: "Surface",    psychology: "Celebration and softness; the gentle effervescence of joy in love." }
    ],
    designs: [
      "Romantic fiction cover design or wedding brand with tender, dreamy aesthetic",
      "Beauty or fragrance brand targeting emotional resonance over clinical precision",
      "Valentine's campaign or anniversary brand identity with genuine warmth"
    ],
    complementary: [
      "Typography: Cormorant Garamond Italic + Lato Light — romantic weight contrast",
      "Textures: Silk charmeuse, dried rose petals, watercolor blooms, tulle",
      "Elements: Soft-focus photography, flowing organic shapes, petal scatter patterns"
    ],
    followUp: "Should this be more **sweet and playful** (brighter pinks, lighthearted) or more **deep and passionate** (darker roses, more emotional weight)?",
    followUpOptions: ["Sweeter — brighter and playful", "Deeper — darker, more passionate"]
  },

  
  {
    keywords: ["dark", "gothic", "mystery", "shadow", "night", "moon", "haunted", "witch", "occult", "black", "purple", "dramatic", "eerie", "moody"],
    name: "Midnight Grimoire",
    moodDesc: "Pages of an old book that shouldn't exist — the ink still wet, the candle guttering, something beautiful and dangerous waiting in the margins where the light doesn't reach.",
    tones: ["Cool", "Dark", "Saturated", "Mystical"],
    colors: [
      { hex: "#0a050f", name: "Void Ink",          role: "Background", psychology: "The dark before creation; absolute potential, the fertile nothing before form." },
      { hex: "#4a1f6e", name: "Witch's Plum",      role: "Primary",    psychology: "Power, mystery, and deliberate transgression; magic that costs something real." },
      { hex: "#8a3ca8", name: "Amethyst Spell",    role: "Accent",     psychology: "Psychic sensitivity and hidden wisdom; the color of things seen between worlds." },
      { hex: "#c4a0d8", name: "Moonstone Pale",    role: "Highlight",  psychology: "Reflected light in darkness; what is beautiful because it refuses to hide." },
      { hex: "#1e0a2e", name: "Crypt Shadow",      role: "Surface",    psychology: "The density of old stone, of things that persist underground, patient and cold." },
      { hex: "#6a3a8a", name: "Twilight Violet",   role: "Secondary",  psychology: "The thin hour between world states; liminality, thresholds, transformation." },
      { hex: "#3d1a54", name: "Bruised Dusk",      role: "Shadow",     psychology: "The pressure before something breaks open — intense, foreboding, electric." }
    ],
    designs: [
      "Dark fantasy novel cover or gothic fiction brand with ceremonial gravitas",
      "Independent witch-aesthetic shop or alternative cosmetics brand",
      "Horror or thriller podcast with deeply immersive, atmospheric branding"
    ],
    complementary: [
      "Typography: Cinzel Decorative (Roman display) + Crimson Text (body)",
      "Textures: Velvet, cracked wax seal, aged parchment, smoke and candle wax",
      "Elements: Celestial symbols, geometric pentagram motifs, ink-wash illustrations"
    ],
    followUp: "Should this be more **classically gothic and elegant** (deep purples, silver) or more **modern dark aesthetic** (matte blacks, electric purple neons)?",
    followUpOptions: ["Classical gothic — deep purples, silver", "Modern dark — matte, neon purple"]
  },

  
  {
    keywords: ["tech", "modern", "minimal", "startup", "saas", "digital", "clean", "professional", "innovation", "silicon", "app", "interface", "ux", "product"],