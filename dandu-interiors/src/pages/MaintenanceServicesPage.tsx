import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";
import AnimatedSection from "../components/animation/AnimatedSection";
import PageSeo from "../components/seo/PageSeo";
import { globalMetaDescription, seoKeywords } from "../content/siteContent";

// Updated images for maintenance categories
import CivilImg from "../assets/images/civil_maintenance.png";
import PaintingImg from "../assets/images/painting_maintenance.png";
import CarpentryImg from "../assets/images/carpentry_maintenance.png";
import FooterPattern from "../assets/Designs/footer-1.png";

const maintenanceData = [
  {
    title: "Civil Maintenance Works",
    image: CivilImg,
    items: [
      "Floor tiles replacement",
      "Tiles Grouting works",
      "Granite and Quartz laying works",
      "Water Proofing works",
    ],
  },
  {
    title: "Painting & Polishing Works",
    image: PaintingImg,
    items: [
      "Repainting walls",
      "Exterior painting",
      "Wood polishing (Melamine Finish)",
      "Enamel painting for Window grills",
    ],
  },
  {
    title: "Carpentry Maintenance",
    image: CarpentryImg,
    items: [
      "Door’s alignment",
      "Locks replacement",
      "Hinge & Drawer channel replacement",
      "Wardrobe & Kitchen Cabinet repair/Replacement",
    ],
  },
];

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
          background: 'linear-gradient(135deg, var(--color-beige) 0%, var(--color-cream) 100%)',
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>Building Maintenance & Repair Works</h1>
            <p className="lead-copy">
              End-to-end maintenance support for civil, plumbing, electrical,
              carpentry, painting, and infrastructure works.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="maintenance-section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '6rem', padding: '4rem 2rem' }}>
          {maintenanceData.map((service, index) => (
            <div key={service.title}>
              <AnimatedSection
                className={`maintenance-item-wrapper ${index === 1 ? 'reverse' : ''}`}
              >
                <div className="maintenance-card-bg">
                  <div className="maintenance-card-number-shell" aria-hidden="true">
                    <span className="maintenance-card-number">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="maintenance-content-column">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                    <ul className="maintenance-item-list">
                      {service.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + (i * 0.1) }}
                        >
                          <div className="maintenance-indicator"></div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                <motion.div
                  className="burst-image-wrapper"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <img src={service.image} alt={service.title} />
                </motion.div>
              </AnimatedSection>
              {index < maintenanceData.length - 1 ? (
                <div className={`maintenance-divider ${index === 0 ? 'reverse' : ''}`} aria-hidden="true">
                  <img src={FooterPattern} alt="" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <AnimatedSection className="content-section muted-bg">
        <div className="container narrow" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
              <FaTools style={{ fontSize: '3rem', color: 'var(--color-brown)' }} />
            </div>
            <h2>One-Time Service & AMC Available</h2>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--color-gray)' }}>
              Whether you need a quick fix or ongoing maintenance support, we offer flexible service options
              including one-time repairs and Annual Maintenance Contracts (AMC) tailored to your needs.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default MaintenanceServicesPage;
