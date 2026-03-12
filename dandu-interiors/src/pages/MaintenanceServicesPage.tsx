import { motion } from "framer-motion";
import { FaHammer, FaWrench, FaBolt, FaTools, FaPaintRoller, FaRoad, FaCheckDouble } from "react-icons/fa";
import AnimatedSection from "../components/animation/AnimatedSection";
import PageSeo from "../components/seo/PageSeo";
import { globalMetaDescription, seoKeywords } from "../content/siteContent";

const maintenanceBlocks = [
  {
    title: "Civil Maintenance",
    icon: <FaHammer />,
    color: "#8b6b4c",
    items: [
      "Crack Filling",
      "Tile Replacement",
      "Bathroom Leakage Repair",
      "Terrace Waterproofing",
    ],
  },
  {
    title: "Plumbing Maintenance",
    icon: <FaWrench />,
    color: "#6d6d6d",
    items: [
      "Tap & Pipe Repairs",
      "Drainage Block Clearing",
      "Water Tank Cleaning",
    ],
  },
  {
    title: "Electrical & Carpentry",
    icon: <FaBolt />,
    color: "#c5a880",
    items: [
      "Switch & Socket Repairs",
      "Fan & MCB Checks",
      "Door & Lock Repairs",
    ],
  },
  {
    title: "Painting & Polishing",
    icon: <FaPaintRoller />,
    color: "#8b6b4c",
    items: ["Wall Repainting", "Wood Polishing", "Exterior Painting"],
  },
  {
    title: "Infrastructure Works",
    icon: <FaRoad />,
    color: "#6d6d6d",
    items: [
      "Pothole Closing",
      "Road Marking",
      "Speedbreaker Installation",
      "Kerb Painting",
    ],
  },
];

const bounceIn = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring" as const,
      stiffness: 200,
      damping: 15
    }
  }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4
    }
  })
};

function MaintenanceServicesPage() {
  return (
    <>
      <PageSeo
        title="Home Maintenance Services in Hyderabad and Bapatla"
        description={globalMetaDescription}
        keywords={seoKeywords}
        path="/maintenance-services"
      />

      <motion.section 
        className="page-banner"
        style={{ 
          background: 'radial-gradient(circle at bottom left, var(--color-gold) 0%, var(--color-beige) 50%, var(--color-cream) 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            fontSize: '15rem',
            opacity: 0.05,
            color: 'var(--color-brown)'
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <FaTools />
        </motion.div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>Home Maintenance Services in Hyderabad and Bapatla</h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              End-to-end maintenance support for civil, plumbing, electrical,
              carpentry, painting, and infrastructure works.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <AnimatedSection className="content-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            Maintenance Service Categories
          </motion.h2>
          <div className="cards-grid three-column" style={{ gap: '2.5rem' }}>
            {maintenanceBlocks.map((block, blockIndex) => (
              <motion.article 
                key={block.title}
                className="service-card"
                variants={bounceIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: blockIndex * 0.15 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(139, 107, 76, 0.2)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  borderTop: `4px solid ${block.color}`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    fontSize: '6rem',
                    opacity: 0.05,
                    color: block.color
                  }}
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {block.icon}
                </motion.div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <motion.div
                    style={{
                      fontSize: '2.5rem',
                      color: block.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    {block.icon}
                  </motion.div>
                  <h3 style={{ margin: 0, flex: 1 }}>{block.title}</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {block.items.map((item, itemIndex) => (
                    <motion.li 
                      key={item}
                      custom={itemIndex}
                      variants={listItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.5rem 0',
                        borderBottom: itemIndex < block.items.length - 1 ? '1px solid rgba(109, 109, 109, 0.1)' : 'none'
                      }}
                    >
                      <FaCheckDouble style={{ color: block.color, fontSize: '0.9rem', flexShrink: 0 }} />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>One-Time Service & AMC Available</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-gray)' }}>
              Whether you need a quick fix or ongoing maintenance support, we offer flexible service options 
              including one-time repairs and Annual Maintenance Contracts (AMC) tailored to your needs.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default MaintenanceServicesPage;
