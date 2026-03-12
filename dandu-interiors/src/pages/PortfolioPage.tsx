import { motion } from "framer-motion";
import { FaHome, FaBuilding, FaBriefcase, FaHandshake } from "react-icons/fa";
import AnimatedSection from "../components/animation/AnimatedSection";
import PageSeo from "../components/seo/PageSeo";
import { seoKeywords } from "../content/siteContent";

const projects = [
  {
    title: "Residential Interior Project",
    description: "Complete home interior setup including modular kitchen, wardrobes, and false ceiling work.",
    icon: <FaHome />,
    category: "Residential"
  },
  {
    title: "Apartment Renovation",
    description: "Flooring upgrade, repainting, and smart storage redesign for apartment living.",
    icon: <FaBuilding />,
    category: "Renovation"
  },
  {
    title: "Office Space Transformation",
    description: "Functional office layout with architectural planning and interior finishing.",
    icon: <FaBriefcase />,
    category: "Commercial"
  },
  {
    title: "Maintenance AMC Works",
    description: "Civil, plumbing, and electrical maintenance support under annual contracts.",
    icon: <FaHandshake />,
    category: "Maintenance"
  },
];

const flipIn = {
  hidden: { rotateY: 90, opacity: 0 },
  visible: { 
    rotateY: 0, 
    opacity: 1
  }
};

const expandWidth = {
  hidden: { width: 0, opacity: 0 },
  visible: { 
    width: "100%", 
    opacity: 1
  }
};

function PortfolioPage() {
  return (
    <>
      <PageSeo
        title="Portfolio"
        description="Explore our interior design, renovation, and maintenance works in Hyderabad and Bapatla."
        keywords={seoKeywords}
        path="/portfolio"
      />

      <motion.section 
        className="page-banner"
        style={{ 
          background: 'linear-gradient(to right, var(--color-cream) 0%, var(--color-beige) 50%, var(--color-gold) 100%)',
          position: 'relative'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>Portfolio</h1>
            <motion.div
              variants={expandWidth}
              initial="hidden"
              animate="visible"
              style={{
                height: '4px',
                background: 'var(--color-brown)',
                marginTop: '1rem',
                marginBottom: '1rem',
                borderRadius: '2px'
              }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Selected interior design and maintenance projects delivered by our team.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <AnimatedSection className="content-section">
        <div className="container">
          <div className="cards-grid two-column" style={{ gap: '3rem' }}>
            {projects.map((project, index) => (
              <motion.article 
                key={project.title}
                className="service-card"
                variants={flipIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 25px 50px rgba(139, 107, 76, 0.25)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '2.5rem',
                  background: index % 2 === 0 ? '#fff' : 'var(--color-cream)'
                }}
              >
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    fontSize: '4rem',
                    opacity: 0.08,
                    color: 'var(--color-brown)'
                  }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {project.icon}
                </motion.div>
                
                <motion.div
                  style={{
                    display: 'inline-block',
                    padding: '0.4rem 1rem',
                    background: 'var(--color-brown)',
                    color: '#fff',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    marginBottom: '1.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {project.category}
                </motion.div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                  <motion.div
                    style={{
                      fontSize: '3rem',
                      color: 'var(--color-brown)',
                      flexShrink: 0
                    }}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {project.icon}
                  </motion.div>
                  
                  <div>
                    <h2 style={{ marginBottom: '1rem', fontSize: '1.75rem' }}>{project.title}</h2>
                    <p style={{ color: 'var(--color-gray)', lineHeight: '1.7', margin: 0 }}>
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <motion.section 
        className="content-section muted-bg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container narrow" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-gray)', marginBottom: '2rem' }}>
              Let's bring your vision to life with our expertise in interior design and maintenance services.
            </p>
            <motion.a
              href="/contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'inline-block' }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default PortfolioPage;
