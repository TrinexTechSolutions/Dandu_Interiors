import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLayerGroup, FaPaintBrush, FaTh, FaCouch, FaBolt, FaWrench } from "react-icons/fa";
import AnimatedSection from "../components/animation/AnimatedSection";
import PageSeo from "../components/seo/PageSeo";
import { globalMetaDescription, seoKeywords } from "../content/siteContent";

const interiorCategories = [
  {
    title: "Civil Works",
    icon: <FaLayerGroup />,
    items: ["Demolition Work", "Block Work, Plastering", "Tiles Flooring and Cladding", "Italian Marble Flooring and Cladding", "False Ceiling Works (Gypsum & Grid)"]
  },
  {
    title: "Painting Works",
    icon: <FaPaintBrush />,
    items: ["Internal Painting", "External Painting", "Texture Painting", "Wood polish (Melamine)", "Duco & PU finish"]
  },
  {
    title: "Carpenter Work",
    icon: <FaLayerGroup />,
    items: ["Wooden Partitions", "Modular Kitchen & Wardrobes", "TV, Crockery Units", "Doors and Door Frames"]
  },
  {
    title: "Electrical Works",
    icon: <FaBolt />,
    items: ["Point Wiring", "Switch and Sockets Installation", "Light Fixtures, Fan, Profile light Installation"]
  },
  {
    title: "Plumbing Works",
    icon: <FaWrench />,
    items: ["Plumbing Line extension", "CP fittings", "Kitchen sink and washbasin installation"]
  },
  {
    title: "Aluminium and Glass Works",
    icon: <FaTh />,
    items: ["Toughened glass partitions", "Shower Cubicle", "Glass Doors (Sliding & Swing)", "Aluminium Profile doors", "Mirrors"]
  },
  {
    title: "Furniture Works",
    icon: <FaCouch />,
    items: ["Wallpapers", "Sofa", "Window Cushions and Head Board Works"]
  }
];



function InteriorDesignPage() {
  return (
    <>
      <PageSeo
        title="Interior Design Services in Hyderabad and Bapatla"
        description={globalMetaDescription}
        keywords={seoKeywords}
        path="/interior-design"
      />

      <motion.section 
        className="page-banner"
        style={{ background: 'linear-gradient(135deg, var(--color-beige) 0%, var(--color-cream) 100%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1>Interior Works for Residential Flats & Villas</motion.h1>
            <motion.p>
              Complete end-to-end interior solutions from civil work to final furniture styling.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <section className="perspective-container" style={{ padding: '8rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '6rem' }}
          >
            <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '1', fontWeight: 800, margin: 0 }}>
              WHAT WE <br />
              <span className="text-gradient">DO.</span>
            </h2>
          </motion.div>
        </div>
        {/* Hospitality Design */}
        <section style={{ position: 'relative', marginBottom: '5rem' }}>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-brown)' }}>HOSPITALITY Design</h3>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-gray)' }}>
                  With over 15 years of work experience as the best interior designer in Mumbai, we strive to create designs that have a positive impact on people and places. We stretch the boundaries of what is sustainable, equitable and relevant; understand space and how people interact with it; keep exploring materials and new ways to use them.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <Link to="/interior-design/hospitality-design" className="btn btn-outline" style={{ borderColor: 'var(--color-brown)', color: 'var(--color-brown)', padding: '0.8rem 2rem' }}>
                    Explore More
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="clip-diagonal-left"
                style={{ position: 'relative', height: '500px', overflow: 'hidden', borderRadius: '40px 40px 40px 0px' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img src="/assets/modern_luxury_living_room.png" alt="Hospitality" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.2), transparent)' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Design */}
        <section style={{ position: 'relative', background: 'var(--color-charcoal)', padding: '6rem 0', marginBottom: '5rem' }}>
          <div className="geometric-overlay" />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', direction: 'rtl' }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ direction: 'ltr' }}
              >
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fff' }}>OFFICE Design</h3>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.7)' }}>
                  Creating a better working environment for your people and business is our key motto while designing office interiors. We deliver innovative and inspiring office designs. At Kunal & Associates we provide a flexible office design solutions which innovates the workplace and encourage employee’s engagement driving talent, greater connectivity and productivity.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <Link to="/interior-design/office-design" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff', padding: '0.8rem 2rem' }}>
                    Explore More
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="clip-diagonal-right"
                style={{ position: 'relative', height: '500px', overflow: 'hidden', direction: 'ltr', borderRadius: '40px 0px 40px 40px' }}
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img src="/assets/executive_office_interior.png" alt="Office" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, rgba(0,0,0,0.4), transparent)' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Residential Design */}
        <section style={{ position: 'relative', marginBottom: '5rem' }}>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>Residential Design</h3>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-gray)' }}>
                  Being a residential interior designer in Mumbai, we take pride in delivering unique and timeless residential interior designs. Our aim is to create residential interiors that don’t just look good aesthetically, but which functions brilliantly on a day to day living. We offer complete design services from concept development to completion.
                </p>
                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                  <div style={{ padding: '1rem', border: '1px solid var(--color-beige)', borderRadius: '15px' }}>
                    <div style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '1.5rem' }}>Concept</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-gray)' }}>Bespoke Ideation</div>
                  </div>
                  <div style={{ padding: '1rem', border: '1px solid var(--color-beige)', borderRadius: '15px' }}>
                    <div style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '1.5rem' }}>Detail</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-gray)' }}>Fine Craftsmanship</div>
                  </div>
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <Link to="/interior-design/residential-design" className="btn btn-outline" style={{ borderColor: 'var(--color-charcoal)', color: 'var(--color-charcoal)', padding: '0.8rem 2rem' }}>
                    Explore More
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="clip-diagonal-left"
                style={{ position: 'relative', height: '500px', overflow: 'hidden', borderRadius: '40px 40px 40px 0px' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img src="/assets/premium_master_bedroom.png" alt="Residential" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Space Planning */}
        <section style={{ position: 'relative', background: 'var(--color-charcoal)', padding: '6rem 0', marginBottom: '5rem' }}>
          <div className="geometric-overlay" />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', direction: 'rtl' }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ direction: 'ltr' }}
              >
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fff' }}>Space Planning</h3>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.7)' }}>
                  Unlock the full potential of your floor plan. Our space planning expertise focuses on flow, functionality, and the strategic arrangement of elements to ensure Every square foot serves a purpose and enhances your lifestyle.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <Link to="/interior-design/space-planning" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff', padding: '0.8rem 2rem' }}>
                    Explore More
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="clip-diagonal-right"
                style={{ position: 'relative', height: '500px', overflow: 'hidden', direction: 'ltr', borderRadius: '40px 0px 40px 40px' }}
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img src="/assets/modern_luxury_living_room.png" alt="Space Planning" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Design Consultation */}
        <section style={{ position: 'relative', marginBottom: '5rem' }}>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>Design Consultation</h3>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-gray)' }}>
                  Collaborate with the best in the industry. Our design consultations are deep-dive sessions where we refine your vision, select material palettes, and establish a cohesive aesthetic direction for your project.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <Link to="/interior-design/design-consultation" className="btn btn-outline" style={{ borderColor: 'var(--color-charcoal)', color: 'var(--color-charcoal)', padding: '0.8rem 2rem' }}>
                    Explore More
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="clip-diagonal-left"
                style={{ position: 'relative', height: '500px', overflow: 'hidden', borderRadius: '40px 40px 40px 0px' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img src="/assets/executive_office_interior.png" alt="Consultation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lighting Design */}
        <section style={{ position: 'relative', background: 'var(--color-charcoal)', padding: '6rem 0', marginBottom: '5rem' }}>
          <div className="geometric-overlay" />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', direction: 'rtl' }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ direction: 'ltr' }}
              >
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fff' }}>Lighting Design</h3>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.7)' }}>
                  Sculpting space with light. We design sophisticated lighting layouts that balance ambient, task, and accent illumination, creating the perfect mood while emphasizing the architectural details of your interior.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <Link to="/interior-design/lighting-design" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff', padding: '0.8rem 2rem' }}>
                    Explore More
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="clip-diagonal-right"
                style={{ position: 'relative', height: '500px', overflow: 'hidden', direction: 'ltr', borderRadius: '40px 0px 40px 40px' }}
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img src="/assets/premium_master_bedroom.png" alt="Lighting" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Custom Furniture Design */}
        <section style={{ position: 'relative', marginBottom: '5rem' }}>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>Custom Furniture Design</h3>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-gray)' }}>
                  Bespoke pieces for unique homes. Our designers work with master craftsmen to create custom furniture that fits your space perfectly, combining functionality with high-end materials and impeccable finish.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <Link to="/interior-design/custom-furniture-design" className="btn btn-outline" style={{ borderColor: 'var(--color-charcoal)', color: 'var(--color-charcoal)', padding: '0.8rem 2rem' }}>
                    Explore More
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="clip-diagonal-left"
                style={{ position: 'relative', height: '500px', overflow: 'hidden', borderRadius: '40px 40px 40px 0px' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img src="/assets/minimalist_modular_kitchen.png" alt="Custom Furniture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Art and Accessory Procurement */}
        <section style={{ position: 'relative', background: 'var(--color-charcoal)', padding: '6rem 0', marginBottom: '5rem' }}>
          <div className="geometric-overlay" />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', direction: 'rtl' }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ direction: 'ltr' }}
              >
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fff' }}>Art & Accessory Procurement</h3>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.7)' }}>
                  The finishing touches that define a home. We curate art collections and sourcing unique accessories globally to reflect your personality and complete the narrative of your space.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <Link to="/interior-design/art-and-accessory-procurement" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff', padding: '0.8rem 2rem' }}>
                    Explore More
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="clip-diagonal-right"
                style={{ position: 'relative', height: '500px', overflow: 'hidden', direction: 'ltr', borderRadius: '40px 0px 40px 40px' }}
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img src="/assets/premium_italian_marble_flooring.png" alt="Art Procurement" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Color Consultation */}
        <section style={{ position: 'relative', marginBottom: '5rem' }}>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-brown)' }}>Color Consultation</h3>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-gray)' }}>
                  Mastering the psychology of color. We help you choose the perfect palette that harmonizes with your lighting and furniture, creating the desired emotional impact in every room.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <Link to="/interior-design/color-consultation" className="btn btn-outline" style={{ borderColor: 'var(--color-brown)', color: 'var(--color-brown)', padding: '0.8rem 2rem' }}>
                    Explore More
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="clip-diagonal-left"
                style={{ position: 'relative', height: '500px', overflow: 'hidden', borderRadius: '40px 40px 40px 0px' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img src="/assets/modern_luxury_living_room.png" alt="Color" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Renovation and Remodeling */}
        <section style={{ position: 'relative', background: 'var(--color-charcoal)', padding: '6rem 0', marginBottom: '5rem' }}>
          <div className="geometric-overlay" />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', direction: 'rtl' }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ direction: 'ltr' }}
              >
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fff' }}>Renovation & Remodeling</h3>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.7)' }}>
                  Breathing new life into old spaces. Our renovation services cover everything from structural changes to cosmetic upgrades, ensuring a seamless transition from old to extraordinary.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <Link to="/interior-design/renovation-and-remodeling" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff', padding: '0.8rem 2rem' }}>
                    Explore More
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="clip-diagonal-right"
                style={{ position: 'relative', height: '500px', overflow: 'hidden', direction: 'ltr', borderRadius: '40px 0px 40px 40px' }}
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img src="/assets/modern_luxury_living_room.png" alt="Renovation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Management */}
        <section style={{ position: 'relative', marginBottom: '5rem' }}>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>Project Management</h3>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-gray)' }}>
                  Hassle-free execution. We handle the entire project lifecycle, from vendor coordination and scheduling to quality control and final handover, ensuring your project is delivered on time.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <Link to="/interior-design/project-management" className="btn btn-outline" style={{ borderColor: 'var(--color-charcoal)', color: 'var(--color-charcoal)', padding: '0.8rem 2rem' }}>
                    Explore More
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="clip-diagonal-left"
                style={{ position: 'relative', height: '500px', overflow: 'hidden', borderRadius: '40px 40px 40px 0px' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img src="/assets/executive_office_interior.png" alt="Management" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Styling and Staging */}
        <section style={{ position: 'relative', background: 'var(--color-charcoal)', padding: '6rem 0', marginBottom: '5rem' }}>
          <div className="geometric-overlay" />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', direction: 'rtl' }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ direction: 'ltr' }}
              >
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fff' }}>Styling & Staging</h3>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.7)' }}>
                  Perfecting the art of presentation. Whether for a final Reveal or for real estate showcasing, our staging services transform spaces into high-end, aspirational environments.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <Link to="/interior-design/styling-and-staging" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff', padding: '0.8rem 2rem' }}>
                    Explore More
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="clip-diagonal-right"
                style={{ position: 'relative', height: '500px', overflow: 'hidden', direction: 'ltr', borderRadius: '40px 0px 40px 40px' }}
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img src="/assets/premium_master_bedroom.png" alt="Styling" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            </div>
          </div>
        </section>
      </section>

      <AnimatedSection className="content-section">
        <div className="container">
          <div className="cards-grid three-column" style={{ gap: '2rem' }}>
            {interiorCategories.map((category, index) => (
              <motion.article 
                key={category.title}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ padding: '2rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', color: 'var(--color-brown)' }}>{category.icon}</div>
                  <h3 style={{ margin: 0 }}>{category.title}</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {category.items.map((item, i) => (
                    <li key={i} style={{ 
                      padding: '0.4rem 0', 
                      borderBottom: i < category.items.length - 1 ? '1px solid #eee' : 'none',
                      fontSize: '0.95rem',
                      color: 'var(--color-charcoal)'
                    }}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default InteriorDesignPage;
