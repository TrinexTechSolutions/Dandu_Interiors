export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  benefits: {
    title: string;
    description: string;
  }[];
  whatsIncluded: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  heroImage: string;
}

export const servicesContent: Record<string, ServiceDetail> = {
  "hospitality-design": {
    id: "hospitality-design",
    title: "Hospitality Design",
    description: "Our hospitality design services are focused on creating immersive environments that enhance guest experiences and drive brand loyalty. From boutique hotels to luxury resorts, we balance aesthetic grandeur with operational efficiency.",
    benefits: [
      { title: "Guest-Centric Focus", description: "Designing spaces that prioritize guest comfort and memorable interactions." },
      { title: "Operational Flow", description: "Optimizing staff movement and service areas for seamless hotel management." },
      { title: "Brand Storytelling", description: "Translating your brand values into a tangible physical experience." }
    ],
    whatsIncluded: [
      "Concept Moodboards",
      "Bespoke Furniture Design",
      "Technical Lighting Layouts",
      "Material and Fabric Sourcing",
      "Wayfinding and Signage Integration"
    ],
    process: [
      { step: "01", title: "Site Discovery", description: "Analyzing the location and understanding the target demographic." },
      { step: "02", title: "Scenario Mapping", description: "Defining how guests and staff will interact with the space." },
      { step: "03", title: "Execution Oversight", description: "Regular site visits to ensure design integrity." }
    ],
    heroImage: "/assets/modern_luxury_living_room.png"
  },
  "office-design": {
    id: "office-design",
    title: "Office Design",
    description: "We create workspaces that inspire productivity and encourage collaboration. Our designs adapt to modern work cultures, blending ergonomics with vibrant social zones.",
    benefits: [
      { title: "Talent Retention", description: "An inspiring office attracts and keeps the best employees." },
      { title: "Productivity Boost", description: "Ergonomic layouts that reduce fatigue and focus the mind." },
      { title: "Future-Proofing", description: "Flexible designs that grow with your business needs." }
    ],
    whatsIncluded: [
      "Acoustic Planning",
      "Ergonomic Station Design",
      "Collaborative Zone Layouts",
      "Biophilic Integration",
      "Smart Tech Connectivity"
    ],
    process: [
      { step: "01", title: "Workplace Audit", description: "Understanding your team's unique workflows." },
      { step: "02", title: "Zoning Strategy", description: "Balanced planning for focus and collaboration." },
      { step: "03", title: "Seamless Handover", description: "Final testing of all integrated systems." }
    ],
    heroImage: "/assets/executive_office_interior.png"
  },
  "residential-design": {
    id: "residential-design",
    title: "Residential Design",
    description: "Residential interior design at Dandu Interiors is dedicated to creating beautiful, functional, and personalized living spaces that reflect your unique style and needs. We focus on every detail, from layout planning and furniture selection to color schemes and decor.",
    benefits: [
      { title: "Personalized Design", description: "Tailoring the design to match your individual taste and lifestyle." },
      { title: "Enhanced Functionality", description: "Creating practical and efficient layouts that optimize space usage." },
      { title: "Property Value", description: "Improving the overall value and marketability of your home." }
    ],
    whatsIncluded: [
      "Space Planning & Layout",
      "Color Scheme Development",
      "Movable Furniture Selection",
      "Decor and Accessories",
      "Material and Finish Selection"
    ],
    process: [
      { step: "01", title: "Consultation", description: "Initial meeting to discuss your design goals and budget." },
      { step: "02", title: "Concept Development", description: "Creating mood boards and concept designs." },
      { step: "03", title: "Final Walkthrough", description: "Reviewing the completed design to ensure satisfaction." }
    ],
    heroImage: "/assets/premium_master_bedroom.png"
  },
  "space-planning": {
    id: "space-planning",
    title: "Space Planning",
    description: "Unlock the hidden potential of your property. Our experts analyze movement patterns and light distribution to create a floor plan that feels natural and maximizes every square foot.",
    benefits: [
      { title: "Improved Flow", description: "Eliminating bottlenecks and awkward layouts." },
      { title: "Usage Efficiency", description: "Making small spaces feel vast and large spaces feel cozy." },
      { title: "Natural Light", description: "Strategic placement to maximize daylight hours indoors." }
    ],
    whatsIncluded: [
      "Circulation Analysis",
      "Furniture Footprint Planning",
      "Natural Ventilation Strategy",
      "Compliance with Safety Codes"
    ],
    process: [
      { step: "01", title: "Dimension Audit", description: "Precise measurements of existing structural boundaries." },
      { step: "02", title: "Option Modeling", description: "Presenting multiple 2D/3D layout alternatives." },
      { step: "03", title: "Blueprint Finalization", description: "Detailed drawings for construction and installation." }
    ],
    heroImage: "/assets/modern_luxury_living_room.png"
  },
  "design-consultation": {
    id: "design-consultation",
    title: "Design Consultation",
    description: "Professional guidance to kickstart your project. We offer expert advice on materials, color palettes, and structural possibilities, saving you time and avoiding costly mistakes.",
    benefits: [
      { title: "Expert Insight", description: "Direct access to years of architectural experience." },
      { title: "Budget Alignment", description: "Feasibility checks before you commit to large expenses." },
      { title: "Confidence", description: "A clear, professional roadmap for your project." }
    ],
    whatsIncluded: [
      "Material Palette Sessions",
      "Budget Estimation",
      "Vendor Recommendations",
      "Style Identity Development"
    ],
    process: [
      { step: "01", title: "Briefing", description: "A deep dive into your vision and pain points." },
      { step: "02", title: "Analysis", description: "Reviewing your site photos or blueprints." },
      { step: "03", title: "Strategy Delivery", description: "A summarized report of professional recommendations." }
    ],
    heroImage: "/assets/executive_office_interior.png"
  },
  "lighting-design": {
    id: "lighting-design",
    title: "Lighting Design",
    description: "Transform your home with a layer of sophisticated lighting. We design systems that range from functional task lighting to dramatic ambient highlights.",
    benefits: [
      { title: "Mood Control", description: "Instantly change the atmosphere of a room with smart dimming." },
      { title: "Energy Efficiency", description: "Smart LED integration that reduces power consumption." },
      { title: "Artistic Impact", description: "Using light to highlight your home's best features." }
    ],
    whatsIncluded: [
      "Switching & Dimming Charts",
      "Fixture Specification",
      "Ambient/Task/Accent Plan",
      "Smart Home Integration"
    ],
    process: [
      { step: "01", title: "Intensity Audit", description: "Calculating the lux levels needed for each zone." },
      { step: "02", title: "Fixture Selection", description: "Choosing hardware that matches your aesthetic." },
      { step: "03", title: "Calibration", description: "On-site aiming of spotlights and cove lighting." }
    ],
    heroImage: "/assets/premium_master_bedroom.png"
  },
  "custom-furniture-design": {
    id: "custom-furniture-design",
    title: "Custom Furniture Design",
    description: "Standard furniture often leaves gaps; custom furniture closes them. We design pieces that are built to your exact measurements and aesthetic requirements.",
    benefits: [
      { title: "Perfect Fit", description: "Zero wasted space in corners and alcoves." },
      { title: "Material Quality", description: "Choosing durable woods and fabrics that last decades." },
      { title: "Uniqueness", description: "Pieces that exist nowhere else in the world." }
    ],
    whatsIncluded: [
      "Technical Carpentry Drawings",
      "Hardware Specification",
      "Upholstery Selection",
      "Installation Oversight"
    ],
    process: [
      { step: "01", title: "Space Audit", description: "Measuring the exact location for the new piece." },
      { step: "02", title: "Detailing", description: "Drawing every handle, hinge, and joinery point." },
      { step: "03", title: "Crafting", description: "Supervising our master carpenters during production." }
    ],
    heroImage: "/assets/minimalist_modular_kitchen.png"
  },
  "art-and-accessory-procurement": {
    id: "art-and-accessory-procurement",
    title: "Art & Accessory Procurement",
    description: "The soul of a home lies in the details. We curate and source exclusive art, rugs, and décor pieces from global vendors to complete your home's narrative.",
    benefits: [
      { title: "Exclusive Access", description: "Sourcing from galleries and artists not available to the public." },
      { title: "Curated Taste", description: "Ensuring every piece complements your overall design." },
      { title: "Investment Value", description: "Procuring art that holds or increases in value over time." }
    ],
    whatsIncluded: [
      "Art Gallery Tours",
      "Global Shipping Management",
      "Accessory Styling Sessions",
      "Professional Framing"
    ],
    process: [
      { step: "01", title: "Curation", description: "Shortlisting pieces that fit your style identity." },
      { step: "02", title: "Verification", description: "Checking the authenticity and condition of each item." },
      { step: "03", title: "Installation", description: "Professional mapping and mounting on your walls." }
    ],
    heroImage: "/assets/premium_italian_marble_flooring.png"
  },
  "color-consultation": {
    id: "color-consultation",
    title: "Color Consultation",
    description: "Mastering the psychology of color. We help you choose the perfect palette that harmonizes with your lighting and furniture, creating the desired emotional impact.",
    benefits: [
      { title: "Emotional Harmony", description: "Creating calm bedrooms and energetic living spaces." },
      { title: "Light Maximization", description: "Using reflective colors to brighten darker rooms." },
      { title: "Seamless Transitions", description: "Ensuring colors flow naturally from one room to the next." }
    ],
    whatsIncluded: [
      "Physical Sample Boards",
      "Digital Room Visualizations",
      "Paint Finish Specifications (Matte/Gloss)",
      "Texture Pairings"
    ],
    process: [
      { step: "01", title: "Vision Session", description: "Discussing the 'vibe' you want for each room." },
      { step: "02", title: "Sampling", description: "Testing large swatches on your actual walls in local light." },
      { step: "03", title: "Coding", description: "Providing exact paint brand and code reference." }
    ],
    heroImage: "/assets/modern_luxury_living_room.png"
  },
  "renovation-and-remodeling": {
    id: "renovation-and-remodeling",
    title: "Renovation & Remodeling",
    description: "Breathing new life into old spaces. Our renovation services cover everything from structural changes to cosmetic upgrades, ensuring a seamless transition.",
    benefits: [
      { title: "Structural Modernization", description: "Updating plumbing and electrical systems behind the walls." },
      { title: "Space Re-imagining", description: "Changing layouts to suit modern life (e.g., Open Plan)." },
      { title: "Quality Assurance", description: "Eliminating old leaks, cracks, and structural issues." }
    ],
    whatsIncluded: [
      "Structural Engineering Audit",
      "Material Demo and Rebuild",
      "Modern HVAC Integration",
      "Smart Home Upgrades"
    ],
    process: [
      { step: "01", title: "Structural Audit", description: "Assessing what can be safely removed or added." },
      { step: "02", title: "Demolition Plan", description: "Controlled removal of old elements." },
      { step: "03", title: "Reconstruction", description: "Rebuilding with premium modern materials." }
    ],
    heroImage: "/assets/modern_luxury_living_room.png"
  },
  "project-management": {
    id: "project-management",
    title: "Project Management",
    description: "Hassle-free execution. We handle the entire project lifecycle, from vendor coordination to final handover, ensuring your project is delivered on time.",
    benefits: [
      { title: "Stress Reduction", description: "We deal with the contractors so you don't have to." },
      { title: "Timeline Control", description: "Strict monitoring of deadlines and phase completions." },
      { title: "Budget Discipline", description: "Preventing 'hidden costs' and managing vendor payments." }
    ],
    whatsIncluded: [
      "Gantt Chart Scheduling",
      "Weekly Site Reports",
      "Quality Control Inspection",
      "Contractor Reconciliation"
    ],
    process: [
      { step: "01", title: "Onboarding", description: "Setting clear communication channels and schedules." },
      { step: "02", title: "Active Monitoring", description: "Daily site checks and problem-solving." },
      { step: "03", title: "Snagging & Handover", description: "Final list of fixes before client possession." }
    ],
    heroImage: "/assets/executive_office_interior.png"
  },
  "styling-and-staging": {
    id: "styling-and-staging",
    title: "Styling & Staging",
    description: "The art of presentation. Whether for a final 'Reveal' or for real estate showcasing, our staging services transform spaces into high-end, aspirational environments.",
    benefits: [
      { title: "Visual Wow-Factor", description: "Creating scenes that look like they belong in a magazine." },
      { title: "Marketability", description: "Faster sales and higher prices for developers." },
      { title: "Aspirational Living", description: "Showing how a space can truly be lived in." }
    ],
    whatsIncluded: [
      "Prop & Decor Rental",
      "Floral Arrangements",
      "Textile Styling (Cushions/Throws)",
      "Room Photography Setup"
    ],
    process: [
      { step: "01", title: "Scene Planning", description: "Defining the themes and 'vignettes' for each room." },
      { step: "02", title: "Dressing", description: "Placing all artifacts and decor for maximum impact." },
      { step: "03", title: "Reveal", description: "The final unveiling for the client or photographer." }
    ],
    heroImage: "/assets/premium_master_bedroom.png"
  }
};
