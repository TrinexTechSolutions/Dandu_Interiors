import { motion } from "framer-motion";
import {
  FaFileSignature,
  FaIndustry,
  FaKey,
  FaTruck,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/animation/AnimatedSection";
import PageSeo from "../components/seo/PageSeo";
import {
  globalMetaDescription,
  heroDescription,
  seoKeywords,
  serviceLocations,
} from "../content/siteContent";

const iconVariants = {
  hidden: {
    backgroundColor: "#fff",
    color: "var(--color-brown)",
  },
  visible: (i: number) => ({
    backgroundColor: "var(--color-brown)",
    color: "#fff",
    transition: {
      delay: i * 0.8,
      duration: 0.6,
    },
  }),
};

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

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1
  }
};

function HomePage() {
  const processSteps = [
    { icon: <FaUsers />, title: "Talk to our Interior Designer & Get an Estimate" },
    { icon: <FaFileSignature />, title: "Detailed Drawing and Approval" },
    { icon: <FaIndustry />, title: "Production at Own Factories" },
    { icon: <FaTruck />, title: "Material Delivery & Execution" },
    { icon: <FaKey />, title: "On Time Project Hand Over" },
  ];

  const benefits = [
    "Experienced Team",
    "Quick Response",
    "Transparent Pricing",
    "One-Time Service & AMC"
  ];

  return (
    <>
      <PageSeo
        title="Interior Design & Home Maintenance Services in Hyderabad and Bapatla"
        description={globalMetaDescription}
        keywords={seoKeywords}
        path="/"
      />

      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>Interior Design & Home Maintenance Services in Hyderabad and Bapatla</h1>
            <p className="lead-copy">{heroDescription}</p>
            <motion.div 
              className="button-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link className="btn-primary" to="/contact">Book Interior Consultation</Link>
              <Link className="btn-secondary" to="/maintenance-services">Request Maintenance Service</Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <AnimatedSection className="content-section">
        <motion.div 
          className="container narrow"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>About DANDU INTERIORS AND DEVELOPERS</h2>
          <p>
            DANDU Interiors and Developers is a professional interior design and home
            maintenance company serving Hyderabad, Nizampet, Kukatpally, Hydernagar and
            Bapatla district.
          </p>
          <p><strong>Service Locations:</strong> {serviceLocations.join(", ")}</p>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection className="content-section muted-bg">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            Our Services
          </motion.h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '0',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Interior Design Services */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                background: 'linear-gradient(135deg, #8b6b4c 0%, #6d5a3d 100%)',
                padding: '3rem 2rem',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  fontSize: '12rem',
                  opacity: 0.1,
                  color: '#fff'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                🏠
              </motion.div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <motion.h3 
                  style={{ 
                    color: '#fff', 
                    fontSize: '2rem', 
                    marginBottom: '1.5rem',
                    fontFamily: 'var(--font-heading)'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  Interior Design Services
                </motion.h3>
                
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  color: '#f5f2ed'
                }}>
                  {['Modular Kitchens', 'Wardrobes', 'False Ceiling', 'Flooring Works', 'Interior Painting'].map((item, index) => (
                    <motion.li 
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      style={{
                        padding: '0.75rem 0',
                        borderBottom: '1px solid rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        fontSize: '1.05rem'
                      }}
                    >
                      <span style={{ 
                        width: '8px', 
                        height: '8px', 
                        background: '#c5a880',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  marginTop: '2rem',
                  padding: '0.75rem 1.5rem',
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '30px',
                  color: '#fff',
                  textAlign: 'center',
                  cursor: 'pointer',
                  fontWeight: '600',
                  border: '1px solid rgba(255,255,255,0.3)'
                }}
              >
                Explore Designs →
              </motion.div>
            </motion.div>

            {/* Maintenance Services */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                background: 'linear-gradient(135deg, #c5a880 0%, #a08860 100%)',
                padding: '3rem 2rem',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: '-50px',
                  left: '-50px',
                  fontSize: '12rem',
                  opacity: 0.1,
                  color: '#fff'
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                🔧
              </motion.div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <motion.h3 
                  style={{ 
                    color: '#fff', 
                    fontSize: '2rem', 
                    marginBottom: '1.5rem',
                    fontFamily: 'var(--font-heading)'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  Maintenance Services
                </motion.h3>
                
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  color: '#2f2f2f'
                }}>
                  {['Civil Maintenance', 'Plumbing Repairs', 'Electrical Works', 'Carpentry', 'Painting'].map((item, index) => (
                    <motion.li 
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      style={{
                        padding: '0.75rem 0',
                        borderBottom: '1px solid rgba(47,47,47,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        fontSize: '1.05rem',
                        fontWeight: '500'
                      }}
                    >
                      <span style={{ 
                        width: '8px', 
                        height: '8px', 
                        background: '#2f2f2f',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  marginTop: '2rem',
                  padding: '0.75rem 1.5rem',
                  background: 'rgba(47,47,47,0.3)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '30px',
                  color: '#fff',
                  textAlign: 'center',
                  cursor: 'pointer',
                  fontWeight: '600',
                  border: '1px solid rgba(47,47,47,0.3)'
                }}
              >
                View Services →
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section">
        <div className="container">
          <h2 className="center-text">Design, Production & Execution By Just One Company</h2>
          <div className="process-container">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <motion.div
                  className="process-icon-wrapper"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={iconVariants}
                >
                  {step.icon}
                </motion.div>
                <p className="process-title">{step.title}</p>
                {index < processSteps.length - 1 && <div className="process-arrow"></div>}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.div 
            className="cards-grid four-column"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {benefits.map((benefit) => (
              <motion.article 
                key={benefit}
                className="service-card"
                variants={scaleIn}
                whileHover={{ scale: 1.05, rotate: 1 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <FaCheckCircle style={{ color: 'var(--color-brown)', fontSize: '1.5rem', flexShrink: 0 }} />
                <h3 style={{ margin: 0 }}>{benefit}</h3>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default HomePage;
