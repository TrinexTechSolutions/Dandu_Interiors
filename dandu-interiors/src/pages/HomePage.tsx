import { motion } from "framer-motion";
import {
  FaFileSignature,
  FaIndustry,
  FaKey,
  FaTruck,
  FaUsers,
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

function HomePage() {
  const processSteps = [
    { icon: <FaUsers />, title: "Talk to our Interior Designer & Get an Estimate" },
    { icon: <FaFileSignature />, title: "Detailed Drawing and Approval" },
    { icon: <FaIndustry />, title: "Production at Own Factories" },
    { icon: <FaTruck />, title: "Material Delivery & Execution" },
    { icon: <FaKey />, title: "On Time Project Hand Over" },
  ];

  return (
    <>
      <PageSeo
        title="Interior Design & Home Maintenance Services in Hyderabad and Bapatla"
        description={globalMetaDescription}
        keywords={seoKeywords}
        path="/"
      />

      <AnimatedSection className="hero-section">
        <div className="container">
          <h1>Interior Design & Home Maintenance Services in Hyderabad and Bapatla</h1>
          <p className="lead-copy">{heroDescription}</p>
          <div className="button-row">
            <Link className="btn-primary" to="/contact">Book Interior Consultation</Link>
            <Link className="btn-secondary" to="/maintenance-services">Request Maintenance Service</Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section">
        <div className="container narrow">
          <h2>About DANDU INTERIORS AND DEVELOPERS</h2>
          <p>
            DANDU Interiors and Developers is a professional interior design and home
            maintenance company serving Hyderabad, Nizampet, Kukatpally, Hydernagar and
            Bapatla district.
          </p>
          <p><strong>Service Locations:</strong> {serviceLocations.join(", ")}</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section muted-bg">
        <div className="container">
          <h2>Services</h2>
          <div className="cards-grid two-column">
            <article className="service-card">
              <h3>Interior Design Services</h3>
              <ul>
                <li>Modular Kitchens</li>
                <li>Wardrobes</li>
                <li>False Ceiling</li>
                <li>Flooring Works</li>
                <li>Interior Painting</li>
              </ul>
            </article>
            <article className="service-card">
              <h3>Maintenance Services</h3>
              <ul>
                <li>Civil Maintenance</li>
                <li>Plumbing Repairs</li>
                <li>Electrical Works</li>
                <li>Carpentry</li>
                <li>Painting</li>
              </ul>
            </article>
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
          <h2>Why Choose Us</h2>
          <div className="cards-grid four-column">
            <article className="service-card"><h3>Experienced Team</h3></article>
            <article className="service-card"><h3>Quick Response</h3></article>
            <article className="service-card"><h3>Transparent Pricing</h3></article>
            <article className="service-card"><h3>One-Time Service & AMC</h3></article>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default HomePage;
