import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaHome, FaBuilding, FaBriefcase, FaHandshake, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageSeo from "../components/seo/PageSeo";
import { seoKeywords } from "../content/siteContent";

// Import project images
import HeroLuxury from "../assets/images/hero_luxury.png";
import WardrobeDesign from "../assets/images/wardrobe_design.png";
import ModularKitchen from "../assets/images/modular_kitchen.png";
import CivilWork from "../assets/images/civil_maintenance.png";
import PaintingWork from "../assets/images/painting_maintenance.png";
import CarpentryWork from "../assets/images/carpentry_maintenance.png";

const projects = [
  {
    title: "Luxury Villa Interior",
    description: "A comprehensive design and execution project for a high-end villa, featuring bespoke furniture and premium finishes.",
    category: "Residential",
    image: HeroLuxury,
    icon: <FaHome />
  },
  {
    title: "Modern Wardrobe Solutions",
    description: "Custom-designed modular wardrobes with ergonomic layouts and premium hardware.",
    category: "Interior Design",
    image: WardrobeDesign,
    icon: <FaHome />
  },
  {
    title: "Italian Style Kitchen",
    description: "A state-of-the-art modular kitchen featuring Italian marble countertops and soft-close cabinetry.",
    category: "Residential",
    image: ModularKitchen,
    icon: <FaHome />
  },
  {
    title: "Corporate Hub Office",
    description: "An innovative workspace design focused on productivity, collaboration, and modern aesthetics.",
    category: "Commercial",
    image: "/assets/executive_office_interior.png",
    icon: <FaBriefcase />
  },
  {
    title: "Full Home Renovation",
    description: "Transforming an aging apartment into a contemporary masterpiece through civil and architectural upgrades.",
    category: "Renovation",
    image: CivilWork,
    icon: <FaBuilding />
  },
  {
    title: "Annual Maintenance",
    description: "Professional AMC services ensuring the longevity and upkeep of civil and electrical systems.",
    category: "Maintenance",
    image: PaintingWork,
    icon: <FaHandshake />
  },
  {
    title: "Bespoke Carpentry",
    description: "Handcrafted wooden fixtures, partitions, and decorative elements for luxury interiors.",
    category: "Interior Design",
    image: CarpentryWork,
    icon: <FaHome />
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0
  }
};


const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

function PortfolioPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <>
      <PageSeo
        title="Portfolio | Dandu Interiors"
        description="Explore our gallery of luxury residential interiors, commercial spaces, and professional maintenance work in Hyderabad and Bapatla."
        keywords={seoKeywords}
        path="/portfolio"
      />

      <section 
        className="hero-section"
        style={{ 
          background: 'var(--color-cream)',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              style={{ y: headerY, opacity: headerOpacity }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="eyebrow">Our Masterpieces</div>
              <h1 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: '1.1', fontWeight: 800 }}>
                Selected <br />
                <span className="text-gradient">Portfolio.</span>
              </h1>
              <p className="lead-copy" style={{ marginTop: '1.5rem', maxWidth: '500px' }}>
                A showcase of our dedication to craftsmanship, from luxury residence curation to large-scale infrastructure maintenance.
              </p>
            </motion.div>

            <motion.div 
              className="composition-grid"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="comp-item-1 organic-blob">
                <img src={HeroLuxury} alt="Hero Luxury" className="comp-img" />
              </div>
              <div className="comp-item-2 organic-blob-2">
                <img src={WardrobeDesign} alt="Wardrobe Design" className="comp-img" />
              </div>
              <div className="comp-item-3 glass-morphism" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-brown)' }}>50+</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Completed Projects</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative background */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '50%',
          aspectRatio: '1',
          background: 'var(--color-beige)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          opacity: 0.2,
          zIndex: 1
        }} />
      </section>

      <section className="perspective-container" style={{ padding: '10rem 0' }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mosaic-grid"
            style={{ height: 'auto', gridTemplateRows: 'auto' }}
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className={`mosaic-tile ${index === 0 ? 'tile-large' : index === 1 ? 'tile-tall' : index === 4 ? 'tile-wide' : ''}`}
                style={{ 
                  minHeight: index === 0 ? '600px' : '400px',
                  background: 'var(--color-charcoal)',
                  marginBottom: '1.5rem',
                  overflow: 'hidden',
                  position: 'relative'
                }}
                whileHover={{ y: -10 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    opacity: 0.5,
                    transition: 'opacity 0.5s ease'
                  }} 
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
                />
                
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                  pointerEvents: 'none'
                }}>
                  <div style={{
                    display: 'inline-block',
                    padding: '0.4rem 1rem',
                    background: 'var(--color-gold)',
                    color: 'var(--color-charcoal)',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    width: 'fit-content',
                    marginBottom: '1rem',
                    textTransform: 'uppercase'
                  }}>
                    {project.category}
                  </div>
                  <h3 style={{ color: '#fff', fontSize: index === 0 ? '2.5rem' : '1.8rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', margin: 0, maxWidth: '400px' }}>
                    {project.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="content-section" style={{ padding: '8rem 0', background: 'var(--color-charcoal)', position: 'relative', overflow: 'hidden' }}>
        <div className="geometric-overlay" />
        <div className="container narrow" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2.5rem' }}>
              Want to see <span className="text-gradient">more?</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '3rem' }}>
              We have a vast library of completed projects across Hyderabad and Bapatla. 
              Schedule a consultation to see physical samples and detailed project walkthroughs.
            </p>
            <div className="button-row" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn-primary" style={{ padding: '1.2rem 3rem' }}>
                Start Your Project Today <FaArrowRight style={{ marginLeft: '0.8rem' }} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default PortfolioPage;

