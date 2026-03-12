import { motion } from "framer-motion";
import { FaPencilRuler, FaCouch, FaCube, FaUtensils, FaLayerGroup, FaTh, FaPaintBrush } from "react-icons/fa";
import AnimatedSection from "../components/animation/AnimatedSection";
import PageSeo from "../components/seo/PageSeo";
import { globalMetaDescription, seoKeywords } from "../content/siteContent";

const designServices = [
  { name: "Architectural Designs", icon: <FaPencilRuler />, desc: "Complete architectural planning and structural design" },
  { name: "Interior Designs", icon: <FaCouch />, desc: "Customized interior concepts for every space" },
  { name: "3D Elevation Designs", icon: <FaCube />, desc: "Realistic 3D visualizations before execution" },
  { name: "Modular Kitchens & Wardrobes", icon: <FaUtensils />, desc: "Smart storage solutions with modern aesthetics" },
  { name: "False Ceiling Works", icon: <FaLayerGroup />, desc: "Elegant ceiling designs with lighting integration" },
  { name: "Flooring Works", icon: <FaTh />, desc: "Premium flooring options for all spaces" },
  { name: "Painting Works", icon: <FaPaintBrush />, desc: "Professional painting with quality finishes" },
];

const slideInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.03, 
    y: -8,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

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
            <motion.h1
              initial={{ letterSpacing: '0.05em' }}
              animate={{ letterSpacing: '0.02em' }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Interior Design Services in Hyderabad and Bapatla
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              We design modern, stylish and functional interior spaces for homes,
              apartments and offices.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <AnimatedSection className="content-section">
        <div className="container">
          <motion.h2
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Interior Design Services
          </motion.h2>
          <div className="cards-grid three-column" style={{ gap: '2rem' }}>
            {designServices.map((service, index) => (
              <motion.article 
                key={service.name}
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                style={{ 
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '2rem 1.5rem'
                }}
              >
                <motion.div
                  style={{
                    fontSize: '3rem',
                    color: 'var(--color-brown)',
                    marginBottom: '0.5rem'
                  }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                <h3 style={{ marginBottom: '0.5rem' }}>{service.name}</h3>
                <p style={{ color: 'var(--color-gray)', fontSize: '0.95rem', margin: 0 }}>
                  {service.desc}
                </p>
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
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2>Transform Your Space</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-gray)' }}>
              From concept to completion, we bring your vision to life with precision, creativity, and attention to detail. 
              Our team combines technical expertise with aesthetic sensibility to create spaces that inspire.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default InteriorDesignPage;
