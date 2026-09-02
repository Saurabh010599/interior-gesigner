import { ServiceItem, PortfolioProject, Testimonial, ProcessStep, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: 'Magic Touch Design',
  subtitle: 'Architect & Interior Designer | Best Interior Designer in Chandrapur',
  tagline: 'Transforming Spaces Into Extraordinary Experiences',
  hindiTagline: 'आपके सपनों को खूबसूरत वास्तविकता में बदलते हैं',
  rating: 4.9,
  reviewsCount: 246,
  projectsCount: '500+',
  experienceYears: '10+',
  satisfactionRate: '100%',
  phone: '+91 83903 51213',
  phoneClean: '+918390351213',
  whatsapp: '918390351213',
  email: 'magictouchdesign.chp@gmail.com',
  address: {
    flat: 'Flat No. 103, Atharva Heights',
    landmark: 'Near ShriRam Chowk, Shriram Ward, Bhanapeth',
    city: 'Chandrapur',
    state: 'Maharashtra',
    pincode: '442402',
    full: 'Flat No. 103, Atharva Heights, Near ShriRam Chowk, Shriram Ward, Bhanapeth, Chandrapur, Maharashtra 442402'
  },
  openingHours: 'Mon - Sat: 9:30 AM – 8:30 PM | Sunday: By Prior Appointment',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.123456789!2d79.2961!3d19.9575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d5b5d1234567%3A0xabcdef1234567890!2sAtharva%20Heights%2C%20Chandrapur!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'architecture-design',
    title: 'Architecture Design',
    hindiTitle: 'वास्तुकला एवं संरचना डिज़ाइन',
    category: 'Architecture',
    shortDesc: 'Bespoke structural planning, 3D architectural elevations, and turnkey structural engineering designed for modern climate & lifestyle.',
    longDesc: 'From initial site topology analysis to sustainable luxury elevation design and municipal approvals, our architectural wing crafts enduring landmarks that harmonize functional efficiency with grand aesthetic beauty.',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['2D Working Drawings & Layouts', '3D Photorealistic Exterior Elevations', 'Structural Engineering & Column Layouts', 'Vaastu Compliant Space Alignment'],
    timeline: '3 - 6 Weeks',
    idealFor: 'Independent Bungalows, Commercial Hubs, Luxury Villas'
  },
  {
    id: 'residential-interiors',
    title: 'Residential Interior Design',
    hindiTitle: 'लक्जरी आवासीय इंटीरियर',
    category: 'Residential',
    shortDesc: 'Complete end-to-end luxury residence transformations crafted to reflect your personal prestige and comfort.',
    longDesc: 'We create bespoke residential spaces that balance warm familial intimacy with high-end international design standards. Every contour, textile, and lighting layer is tailored specifically for your lifestyle.',
    iconName: 'Home',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['Comprehensive Room-by-Room Spatial Planning', 'Custom False Ceiling & Acoustic Solutions', 'Exclusive Italian Marble & Wooden Floorings', 'Lighting Architecture & Smart Automation'],
    timeline: '4 - 8 Weeks',
    idealFor: '2BHK, 3BHK, 4BHK Apartments & Luxury Duplexes'
  },
  {
    id: 'commercial-interiors',
    title: 'Commercial Interior Design',
    hindiTitle: 'व्यावसायिक एवं शोरूम इंटीरियर',
    category: 'Commercial',
    shortDesc: 'High-impact retail showrooms, jewelry stores, boutique hotels, and restaurants engineered for brand dominance.',
    longDesc: 'Our commercial spaces are strategically mapped to maximize customer footfall, dwell time, and brand charisma, ensuring a commanding commercial presence in Chandrapur and beyond.',
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['Customer Flow Optimization Layouts', 'Commercial Grade Durable Fixtures', 'Brand Identity Integration & Facade', 'HVAC & Lighting Thermal Engineering'],
    timeline: '4 - 10 Weeks',
    idealFor: 'Showrooms, Luxury Salons, Clinics, Cafés'
  },
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen Design',
    hindiTitle: 'मॉड्यूलर किचन एवं पेंट्री',
    category: 'Kitchen',
    shortDesc: 'Ergonomic German & Austrian hardware fitted kitchens with acrylic, PU lacquer, and anti-scratch quartz countertops.',
    longDesc: 'Cooking transformed into an effortless art form. We install smart pull-outs, tandem boxes, corner carousels, chimney ducting, and island breakfast counters backed by 10-year hardware warranties.',
    iconName: 'UtensilsCrossed',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['Blum / Hettich Soft-Close Systems', 'Quartz / Granite Seamless Countertops', 'Built-in Microwave & Appliance Enclosures', 'Waterproof BWP Marine Ply Substrates'],
    timeline: '2 - 3 Weeks',
    idealFor: 'Modern Kitchens, Island Kitchens, Open Pantries'
  },
  {
    id: 'bedroom-interiors',
    title: 'Bedroom Interiors',
    hindiTitle: 'मास्टर बेडरूम एवं सुइट्स',
    category: 'Residential',
    shortDesc: 'Sanctuaries of deep relaxation featuring plush upholstered headboards, walk-in closets, and ambient mood lighting.',
    longDesc: 'Custom master suites with acoustic privacy, fluted panel detailing, integrated bedside automation, and floor-to-ceiling tinted glass wardrobes tailored to your wardrobe curation.',
    iconName: 'BedDouble',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['Floor-to-Ceiling Profile Glass Wardrobes', 'Luxury Headboard & Accent Wall Paneling', 'Ambient Dimmable Bedside Lighting Zones', 'Integrated Dressing & Vanity Consoles'],
    timeline: '2 - 4 Weeks',
    idealFor: 'Master Suites, Guest Bedrooms, Kids Thematic Rooms'
  },
  {
    id: 'living-room-interiors',
    title: 'Living Room Interiors',
    hindiTitle: 'भव्य लिविंग रूम एवं हॉल',
    category: 'Residential',
    shortDesc: 'Statement living rooms designed to impress guests with marble TV accent walls, custom sofas, and chandelier arrangements.',
    longDesc: 'The centerpiece of your home. We craft grand living lounges with brass inlay partitions, Italian bookmatched marble backdrops, cove lighting, and curated art curation.',
    iconName: 'Sofa',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['Bookmatched Italian Marble TV Feature Walls', 'Custom Modular Sectional Seating', 'Acoustic Fluted Wooden Louvers', 'Decorative Chandelier & Recessed Cove Lights'],
    timeline: '3 - 5 Weeks',
    idealFor: 'Living Rooms, Formal Lounges, Double-Height Foyers'
  },
  {
    id: 'office-interiors',
    title: 'Office Interiors & Studios',
    hindiTitle: 'कॉर्पोरेट ऑफिस एवं वर्कस्पेस',
    category: 'Commercial',
    shortDesc: 'Productivity-boosting executive cabins, conference suites, and collaborative workstations with ergonomic elegance.',
    longDesc: 'Elevate your firm’s prestige. We engineer acoustic conference rooms, executive director suites with veneer finishes, and ergonomic staff workstations designed for high focus.',
    iconName: 'Building',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['Executive Cabin Luxury Furniture', 'Conference Audio-Visual Concealment', 'Acoustic Fabric & Wooden Wall Cladding', 'Ergonomic Desk & Wire Management Systems'],
    timeline: '3 - 6 Weeks',
    idealFor: 'Corporate Offices, CA/Lawyer Suites, Tech Hubs'
  },
  {
    id: 'space-planning',
    title: 'Space Planning & Vaastu',
    hindiTitle: 'स्पेस प्लानिंग एवं वास्तु विन्यास',
    category: 'Architecture',
    shortDesc: 'Scientific layout optimization that unlocks up to 30% more usable carpet area while adhering to traditional Vaastu harmony.',
    longDesc: 'Eliminate dead zones and awkward corners. Our spatial architects calibrate movement corridors, daylight entry, natural ventilation, and energetic alignment for peace of mind.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['Zoning & Circulation Flow Maps', 'Vaastu Shastra Cardinal Grid Alignment', 'Storage Efficiency Maxima Analysis', '3D Volumetric Massing Models'],
    timeline: '1 - 2 Weeks',
    idealFor: 'New Constructions, Floorplan Refinements'
  },
  {
    id: 'furniture-design',
    title: 'Bespoke Furniture & Millwork',
    hindiTitle: 'कस्टम फर्नीचर एवं वुडवर्क',
    category: 'Craftsmanship',
    shortDesc: 'Handcrafted solid wood dining tables, console tables, luxury vanities, and custom upholstered seating.',
    longDesc: 'Every piece is crafted in our specialized carpentry workshop using seasoned teak, walnut veneer, high-density foams, premium velvet, and German PVD gold metal finishes.',
    iconName: 'Armchair',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['Factory-Finish Precision Joinery', 'PVD Titanium Gold Metal Trims', 'Imported Suede, Velvet & Leather Upholstery', 'Custom Dining Sets, Bar Units & Consoles'],
    timeline: '2 - 4 Weeks',
    idealFor: 'Luxury Dining, Custom Consoles, Accent Chairs'
  },
  {
    id: 'renovation-remodeling',
    title: 'Renovation & Remodeling',
    hindiTitle: 'पुनर्निर्माण एवं मॉडर्न मेकओवर',
    category: 'Renovation',
    shortDesc: 'Breathe new ultra-luxurious life into dated apartments, ancestral homes, and commercial properties.',
    longDesc: 'Complete structural rejuvenation including civil demolition, waterproofing, modern plumbing overhauls, rewiring, and brand-new contemporary finishes without stress.',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['Structural Safety & Civil Demolition', 'Complete Electrical & Plumbing Upgrades', 'Moisture-Barrier Waterproofing Guarantee', 'Modernized Open-Concept Layouts'],
    timeline: '4 - 10 Weeks',
    idealFor: 'Older Apartments, Heritage Bungalows, Commercial Units'
  },
  {
    id: 'turnkey-projects',
    title: 'Turnkey Interior Projects',
    hindiTitle: 'टर्नकी इंटीरियर - चाबी सौंपने तक का समाधान',
    category: 'Turnkey',
    shortDesc: 'Single-window peace of mind. We handle design, material procurement, civil work, carpentry, and final handover on fixed timelines.',
    longDesc: 'Experience zero-headache execution. From the first blueprint to the final decorative cushion placement, our site managers supervise 100+ quality checkpoints with weekly photo reports.',
    iconName: 'KeyRound',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['Dedicated On-Site Project Manager', 'Guaranteed Milestone-Based Delivery Schedule', 'Strict Material Quality & Brand Verification', 'Comprehensive Post-Handover Warranty'],
    timeline: '6 - 12 Weeks',
    idealFor: 'Busy Professionals, NRIs, Complete Homeowners'
  },
  {
    id: '3d-visualization',
    title: '3D Visualization & VR Walkthroughs',
    hindiTitle: '3D विज़ुअलाइज़ेशन एवं वर्चुअल वॉकथ्रू',
    category: 'Design Tech',
    shortDesc: 'Photorealistic 4K renders and immersive 360° virtual reality walkthroughs before a single nail is hammered.',
    longDesc: 'Experience your future home with pinpoint accuracy. Examine lighting reflections, marble grain textures, fabric sheens, and spatial scale in ultra-high fidelity prior to execution.',
    iconName: 'Eye',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['Photorealistic 4K Exterior & Interior Renders', '360° Interactive Virtual Reality Tour', 'Accurate Material Grain & Lighting Sim', 'Real-Time Color & Texture Iterations'],
    timeline: '1 - 2 Weeks',
    idealFor: 'All Homeowners, Real Estate Developers, Commercial Clients'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'atharva-heights-penthouse',
    title: 'The Atharva Luxe Penthouse',
    category: 'Luxury Homes',
    location: 'Bhanapeth, Chandrapur',
    area: '3,850 sq.ft',
    completionYear: '2025',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A grand duplex penthouse showcasing custom Statuario marble TV walls, double-height chandelier illumination, PVD gold metallic trims, and smart home automation.',
    features: ['Double-Height Living Lounge', 'Italian Statuario Marble Flooring', 'Walk-in Profile Wardrobes', 'Bespoke Bar Counter'],
    style: 'Modern Neo-Classical Luxury',
    materials: ['Statuario Marble', 'Smoked Oak Veneer', 'Brushed Titanium Gold', 'Fluted Charcoal Panels']
  },
  {
    id: 'grand-living-shriram-ward',
    title: 'The Golden Crest Living Suite',
    category: 'Living Rooms',
    location: 'Near ShriRam Chowk, Chandrapur',
    area: '720 sq.ft',
    completionYear: '2025',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A lavish formal entertaining living room framed by bookmatched marble accents, custom velvet couches, and ambient layered cove ceiling illumination.',
    features: ['Bookmatched Onyx Backlit Wall', 'Curved Velvet Sectional Sofa', 'Concealed Magnetic Track Lights', 'Custom Brass Partition Screen'],
    style: 'Contemporary Glamour',
    materials: ['Backlit Onyx', 'Champagne Brass', 'Custom Velvet', 'Acoustic Micro-Perforated Wood']
  },
  {
    id: 'emerald-modular-kitchen',
    title: 'The Royal Culinary Modular Suite',
    category: 'Modular Kitchens',
    location: 'Civil Lines, Chandrapur',
    area: '280 sq.ft',
    completionYear: '2024',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Ultra-modern handleless modular kitchen in matte sage and smoked gold with quartz waterfall island and motorized Blum servo-drive drawers.',
    features: ['Waterfall Quartz Island with Breakfast Bar', 'Concealed Pantry Larder Unit', 'Built-in Induction & Downdraft Chimney', 'Under-Cabinet Warm LED Glow'],
    style: 'Modern Minimalist German Style',
    materials: ['Anti-Fingerprint Acrylic', 'Calacatta Quartz Counter', 'Hettich Atira Hardware', 'BWP Marine Ply']
  },
  {
    id: 'velvet-master-bedroom',
    title: 'The Sovereign Master Bedroom',
    category: 'Bedrooms',
    location: 'Tukum, Chandrapur',
    area: '420 sq.ft',
    completionYear: '2025',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An oasis of peace featuring full-height acoustic headboard wall with bronze mirror fluting and a walk-in glass wardrobe equipped with motion sensors.',
    features: ['Acoustic Velvet Headboard Panel', 'Sensor-Activated Tinted Glass Closet', 'Floating Bed Platform with Base Glow', 'Integrated Study Nook'],
    style: 'Art Deco Modernism',
    materials: ['Bronze Mirror', 'Suede Upholstery', 'Smoked Walnut', 'Powder-coated Black Metal']
  },
  {
    id: 'apex-corporate-office',
    title: 'Apex Financial Corporate Headquarters',
    category: 'Office Interiors',
    location: 'Mul Road, Chandrapur',
    area: '2,400 sq.ft',
    completionYear: '2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Sleek executive boardroom, partner cabins, and biophilic open workspace with acoustic ceiling baffles and seamless glass partitions.',
    features: ['16-Seater Smart Boardroom Table', 'Frameless Double-Glazed Partitions', 'Acoustic Wood Ceiling Ribs', 'Biophilic Indoor Planter Walls'],
    style: 'Modern Executive Corporate',
    materials: ['Soundproof Glass', 'American Walnut Veneer', 'Brushed Aluminium', 'Engineered Hardwood']
  },
  {
    id: 'heritage-bungalow-renovation',
    title: 'The Ancestral Manor Rejuvenation',
    category: 'Renovation Projects',
    location: 'Ganj Ward, Chandrapur',
    area: '4,500 sq.ft',
    completionYear: '2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Complete revival of a 30-year-old family bungalow into a high-tech luxury haven while preserving traditional courtyard serenity.',
    features: ['Central Skylight Courtyard Redesign', 'Reinforced Structural Beam Remodeling', 'Custom Teakwood Main Entrance Door', 'Smart Solar Lighting Integration'],
    style: 'Indo-Modern Architectural Fusion',
    materials: ['Reclaimed Burma Teak', 'Jaisalmer Yellow Stone', 'Italian Bottochino Marble', 'Brass Hardware']
  },
  {
    id: 'aurora-jewel-boutique',
    title: 'Aurora Haute Jewelry Boutique',
    category: 'Commercial Spaces',
    location: 'Kasturba Road, Chandrapur',
    area: '1,650 sq.ft',
    completionYear: '2025',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'High-security boutique jewelry showroom featuring custom curved vitrines, high CRI 98+ diamond lighting, and private VIP consulting salon.',
    features: ['High-CRI 98+ Optical Jewelry Lighting', 'Bullet-Resistant Invisible Display Vitrines', 'Private VIP Customer Lounge', 'Luxury Gold Leaf Ceiling Accents'],
    style: 'Haute Horlogerie Luxury',
    materials: ['Gold Leaf Detailing', 'Ultra-Clear Low Iron Glass', 'Italian Nero Marquina Marble', 'Rich Burgundy Velvet']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Rajesh Deshmukh',
    role: 'Senior Consultant & Homeowner',
    location: 'Bhanapeth, Chandrapur',
    rating: 5,
    review: 'Amazing work, beautiful design, excellent quality, and outstanding service! Magic Touch Design transformed our 3BHK at Atharva Heights into a five-star luxury hotel feel. The false ceiling, Italian marble finishing, and custom modular kitchen are world-class.',
    projectType: 'Turnkey 3BHK Luxury Interior',
    date: 'February 2025',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Adv. Sneha Kulkarni',
    role: 'Corporate Legal Practitioner',
    location: 'Near ShriRam Chowk, Chandrapur',
    rating: 5,
    review: 'Thoughtful designs, quality execution, and excellent coordination throughout the project. Their 3D visualization matched the finished site 100%. The team was thoroughly transparent on costs and delivered before the Diwali deadline!',
    projectType: 'Bespoke Bungalow & Office Cabin',
    date: 'January 2025',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Er. Manoj Agrawal',
    role: 'Industrialist & Entrepreneur',
    location: 'Tukum, Chandrapur',
    rating: 5,
    review: 'We highly recommend Magic Touch Design for home interiors. From the very first design consultation to the final handover, their professionalism and attention to architectural craftsmanship exceeded our highest expectations.',
    projectType: '4BHK Villa & Modular Kitchen Suite',
    date: 'December 2024',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    verified: true
  },
  {
    id: 'test-4',
    name: 'Pooja & Amit Sharma',
    role: 'Retail Business Owners',
    location: 'Ganj Ward, Chandrapur',
    rating: 5,
    review: 'The best interior designer in Chandrapur without doubt! The modular kitchen hardware works like butter, the mood lighting is mesmerizing, and their on-site team maintained strict cleanliness and punctuality.',
    projectType: 'Residential Renovation & Living Suite',
    date: 'November 2024',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    verified: true
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Discovery & Consultation',
    hindiTitle: 'परामर्श एवं स्पेस एनालिसिस',
    subtitle: 'Understanding Your Lifestyle & Space Anatomy',
    description: 'We meet at our Atharva Heights studio or your project site in Chandrapur to understand your aesthetic aspirations, functional requirements, family habits, and investment plan.',
    deliverables: ['Detailed Site Measurement & 3D Scanning', 'Client Lifestyle Questionnaire', 'Preliminary Budget Feasibility Map'],
    duration: '2 - 3 Days',
    icon: 'MessageSquare'
  },
  {
    stepNumber: '02',
    title: 'Concept & Spatial Layout',
    hindiTitle: 'अवधारणा एवं लेआउट प्लानिंग',
    subtitle: 'Transforming Ideas Into 2D Blueprints',
    description: 'Our lead architects draft intelligent 2D floor plans, spatial zoning, circulation paths, furniture placements, and Vaastu alignments tailored to your architecture.',
    deliverables: ['2D Furniture Layout Plans', 'Material & Texture Moodboards', 'Vaastu-Aligned Spatial Matrix'],
    duration: '5 - 7 Days',
    icon: 'Layout'
  },
  {
    stepNumber: '03',
    title: '3D Photorealistic Visualization',
    hindiTitle: '3D रियलिस्टिक विज़ुअलाइज़ेशन',
    subtitle: 'See Your Space in Cinematic 4K Before Construction',
    description: 'Experience your future residence through ultra-realistic 3D renders with true-to-life lighting, marble grain patterns, fabric textures, and 360° virtual reality tours.',
    deliverables: ['4K Photorealistic Renderings', '360° Interactive VR Walkthrough', 'Lighting & False Ceiling Simulation'],
    duration: '7 - 10 Days',
    icon: 'Box'
  },
  {
    stepNumber: '04',
    title: 'Material Selection & Millwork',
    hindiTitle: 'मटीरियल चयन एवं प्रिसिजन मिलवर्क',
    subtitle: 'Touch, Feel & Select Premium Textures',
    description: 'Guided material selection at top studios: choose authentic Italian marbles, high-grade veneers, German hardware (Blum/Hettich), PU paints, and luxury upholstery fabrics.',
    deliverables: ['Physical Material Palette Board', 'Brand Authenticity Certificates', 'Final Bill of Quantities (BOQ) with Zero Hidden Fees'],
    duration: '3 - 5 Days',
    icon: 'Layers'
  },
  {
    stepNumber: '05',
    title: 'Precision On-Site Execution',
    hindiTitle: 'साइट निष्पादन एवं गुणवत्ता नियंत्रण',
    subtitle: 'Master Craftsmanship Under Expert Supervision',
    description: 'Our certified master craftsmen, carpenters, electricians, and civil engineers execute your project with rigorous daily supervisory checklists and live weekly photo updates.',
    deliverables: ['100+ Point Quality Assurance Check', 'Weekly Milestone Progress Reports', 'Dedicated On-Site Project Engineer'],
    duration: '3 - 8 Weeks',
    icon: 'Hammer'
  },
  {
    stepNumber: '06',
    title: 'Final Handover & Long-Term Warranty',
    hindiTitle: 'अंतिम हैंडओवर एवं वारंटी',
    subtitle: 'Welcome to Your Extraordinary New Living Sanctuary',
    description: 'Deep professional cleaning, snag rectification, final styling with curated accessories, and formal handover of your warranty folder with post-care guidance.',
    deliverables: ['Comprehensive Warranty Document Kit', 'Deep Sanitization & Final Detailing', 'Post-Handover Maintenance Support'],
    duration: '1 - 2 Days',
    icon: 'Sparkles'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Pricing',
    question: 'How much does interior design cost in Chandrapur with Magic Touch Design?',
    answer: 'Interior design costs depend on the property area, materials selected, and project scope. For basic luxury 2BHK/3BHK residential interiors, budgets generally start from ₹3.5 Lakhs up to ₹15 Lakhs+ for royal bespoke turnkey projects with imported Italian marble and motorized German hardware. We provide a transparent, line-by-line itemized Bill of Quantities (BOQ) with zero hidden charges.'
  },
  {
    id: 'faq-2',
    category: 'Timeline',
    question: 'What is the average project completion timeline?',
    answer: 'For modular kitchens and single room renovations, execution takes 2 to 3 weeks. For complete 2BHK/3BHK turnkey residential projects, delivery typically takes 4 to 8 weeks from 3D design approval. We commit to milestone dates in writing with compensation guarantees for unexcused delays.'
  },
  {
    id: 'faq-3',
    category: 'Turnkey',
    question: 'Do you offer complete Turnkey Solutions in Chandrapur?',
    answer: 'Yes! Over 80% of our clients choose our Turnkey Interior package. We take full responsibility from initial architectural layouts, 3D visualization, material procurement, civil modifications, electrical/plumbing, false ceiling, carpentry, painting, up to final deep-cleaning and key handover. You deal with a single point of contact.'
  },
  {
    id: 'faq-4',
    category: 'Process',
    question: 'Is 3D design and VR visualization included before starting work?',
    answer: 'Absolutely. We provide high-definition 4K 3D renders for every room, allowing you to visualize color palettes, furniture proportions, and lighting angles before execution. We offer unlimited revisions during the 3D phase until you are 100% satisfied.'
  },
  {
    id: 'faq-5',
    category: 'Renovation',
    question: 'Do you handle renovation and remodeling of older homes and bungalows?',
    answer: 'Yes, we specialize in complete structural transformations for older ancestral properties, apartments, and retail spaces in Chandrapur. We assess structural integrity, replace outdated wiring/plumbing, eliminate dampness/seepage, and craft open-concept modern aesthetics.'
  },
  {
    id: 'faq-6',
    category: 'Services',
    question: 'Is on-site supervision included, and what warranty do you provide?',
    answer: 'Every project is assigned a dedicated site supervisor who enforces strict quality standards daily. We provide up to a 10-Year Warranty on modular kitchen hardware, 5-Year Warranty on structural woodwork against termites/borers, and 1-Year complimentary on-site service support.'
  }
];

export const VIDEO_SHOWCASES = [
  {
    id: 'vid-1',
    title: 'The Atharva Heights Royal Penthouse Tour',
    category: 'Duplex Penthouse',
    duration: '1:45 Min',
    location: 'Bhanapeth, Chandrapur',
    thumbnail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-luxury-living-room-with-fireplace-42861-large.mp4',
    description: 'Experience the grandeur of custom Statuario marble walls, 14-ft acoustic false ceilings, and smart lighting in this luxury Chandrapur residence.'
  },
  {
    id: 'vid-2',
    title: 'Emerald Modular Island Kitchen Masterpiece',
    category: 'Modular Kitchen',
    duration: '1:15 Min',
    location: 'Civil Lines, Chandrapur',
    thumbnail: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-kitchen-with-marble-countertop-41399-large.mp4',
    description: 'Smooth motorized servo-drive drawers, quartz waterfall countertop, and seamless pantry pull-outs crafted for culinary excellence.'
  },
  {
    id: 'vid-3',
    title: 'Serene Luxury Master Bedroom Walkthrough',
    category: 'Master Suite',
    duration: '1:30 Min',
    location: 'Tukum, Chandrapur',
    thumbnail: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-bedroom-with-a-luxury-double-bed-41400-large.mp4',
    description: 'Immersive look at custom fluted wood panels, bronze mirror accents, and floor-to-ceiling tinted glass walk-in wardrobe.'
  }
];

export const ROOM_STUDIO_MODELS = [
  {
    id: 'living',
    title: 'Living Room',
    subtitle: 'Grand Entertaining Lounge',
    tagline: 'Bookmatched Italian marble, acoustic paneling & statement lighting',
    styles: [
      {
        id: 'modern_luxe',
        name: 'Neo-Classical Luxury',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        palette: ['#c5a059', '#1e293b', '#f8fafc', '#71717a'],
        materials: ['Statuario Marble', 'Champagne Brass', 'Smoked Oak', 'Curved Velvet'],
        description: 'Lavish high-ceiling formal salon with bookmatched marble TV backdrops and cove profile lighting.',
        features: ['Statuario Marble Accent', 'Concealed LED Coves', 'Bespoke Velvet Seating', 'PVD Gold Accents']
      },
      {
        id: 'contemporary_warm',
        name: 'Warm Minimalist',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        palette: ['#d4af37', '#78350f', '#fef3c7', '#334155'],
        materials: ['Natural Walnut', 'Travertine Stone', 'Bouclé Fabric', 'Brushed Bronze'],
        description: 'Serene earth tones paired with organic curved geometries and natural ambient daylighting.',
        features: ['Travertine Wall Inlays', 'Fluted Wood Louvers', 'Motorized Drapes', 'Integrated Planters']
      }
    ]
  },
  {
    id: 'kitchen',
    title: 'Modular Kitchen',
    subtitle: 'Ergonomic Culinary Studio',
    tagline: 'German Blum hardware, quartz waterfall counter & smart pantry',
    styles: [
      {
        id: 'island_chic',
        name: 'Royal Emerald & Quartz',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
        palette: ['#c5a059', '#064e3b', '#f8fafc', '#475569'],
        materials: ['Matte Acrylic', 'Calacatta Quartz', 'Hettich Hardware', 'BWP Marine Ply'],
        description: 'German precision island kitchen with soft-close motorized pullouts and under-counter illumination.',
        features: ['Waterfall Quartz Island', 'Tandem Box Drawers', 'Concealed Tall Pantry', 'Built-in Appliances']
      },
      {
        id: 'sleek_monochrome',
        name: 'Monochrome Matte & Wood',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
        palette: ['#b38738', '#0f172a', '#e2e8f0', '#94a3b8'],
        materials: ['Anti-Fingerprint PU', 'Granite Slab', 'Blum Servo-Drive', 'Tinted Glass'],
        description: 'Sleek handleless minimalist layout with integrated task profiles and built-in dishwasher.',
        features: ['Handleless Profile Gola', 'Corner Magic Carousels', 'Quartz Backsplash', 'Smart Sensor Strip']
      }
    ]
  },
  {
    id: 'bedroom',
    title: 'Master Suite',
    subtitle: 'Private Sanctuary',
    tagline: 'Upholstered acoustic walls, tinted glass closet & warm dimming',
    styles: [
      {
        id: 'royal_suite',
        name: 'Sovereign Velvet Suite',
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
        palette: ['#c5a059', '#312e81', '#f1f5f9', '#64748b'],
        materials: ['Acoustic Velvet', 'Bronze Tinted Glass', 'Smoked Walnut', 'Ambient Strips'],
        description: 'Hotel-presidential suite atmosphere with full-height headboard paneling and walk-in wardrobe.',
        features: ['Full-Wall Acoustic Bedback', 'Sensor Profile Closet', 'Floating Bed Base Glow', 'Integrated Vanity']
      },
      {
        id: 'zen_retreat',
        name: 'Japandi Calm Haven',
        image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
        palette: ['#d4af37', '#451a03', '#fafaf9', '#78716c'],
        materials: ['Light Teak', 'Linen Texture', 'Clay Stucco', 'Rice Paper Light'],
        description: 'Organic textures, low platform bed, neutral tones and soothing acoustic balance for deep rest.',
        features: ['Low Platform Bedframe', 'Natural Linen Headboard', 'Concealed Reading Lights', 'Fluted Wood Paneling']
      }
    ]
  }
];

