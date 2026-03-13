import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import AnimatedSection from "../components/animation/AnimatedSection";
import PageSeo from "../components/seo/PageSeo";
import { seoKeywords } from "../content/siteContent";

const testimonials = [
  {
    name: "Homeowner - Kukatpally",
    quote: "Excellent planning and execution for our modular kitchen and wardrobes. The team delivered on time.",
    rating: 5,
    location: "Kukatpally, Hyderabad"
  },
  {
    name: "Apartment Owner - Nizampet",
    quote: "Quick response for plumbing and electrical maintenance with clear pricing and clean work.",
    rating: 5,
    location: "Nizampet, Hyderabad"
  },
  {
    name: "Property Manager - Hyderabad",
    quote: "Reliable support for recurring maintenance requirements and preventive checks.",
    rating: 5,
    location: "Hyderabad"
  },
];

function TestimonialsPage() {
  return (
    <>
      <PageSeo
        title="Testimonials"
        description="Client feedback on our interior design and maintenance services in Hyderabad and Bapatla."
        keywords={seoKeywords}
        path="/testimonials"
      />

      <motion.section
        className="page-banner"
        style={{
          background: 'radial-gradient(circle at top right, var(--color-gold) 0%, var(--color-beige) 40%, var(--color-cream) 100%)',
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
            top: '15%',
            right: '10%',
            fontSize: '12rem',
            opacity: 0.04,
            color: 'var(--color-brown)'
          }}
          animate={{
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaQuoteLeft />
        </motion.div>
        <div className="container" style={{ textAlign: "center", padding: "80px 0" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              style={{ fontSize: "3rem", marginBottom: "15px", fontWeight: "700", color: "#2c3e50" }}
              initial={{ letterSpacing: '0.1em' }}
              animate={{ letterSpacing: '0.02em' }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Client Stories
            </motion.h1>
            <motion.p
              style={{ fontSize: "1.2rem", color: "#555", maxWidth: "800px", margin: "0 auto" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              We value our relationships. Here is what our clients have to say about working with us.
            </motion.p>
            <motion.div
              style={{ width: "60px", height: "4px", background: "#e67e22", margin: "25px auto 0", borderRadius: "2px" }}
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </motion.div>
        </div>
      </motion.section>

      <AnimatedSection className="content-section">
        <div className="container" style={{ maxWidth: "1400px", margin: "0 auto", background: "#f4f6f8", padding: "60px 20px" }}>
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px rgba(139, 107, 76, 0.15)",
                transition: { duration: 0.3 }
              }}
              style={{
                marginBottom: "50px",
                padding: "40px",
                background: "#fff",
                position: "relative",
                borderRadius: "16px",
                borderLeft: `6px solid ${index % 3 === 0 ? '#8b6b4c' : index % 3 === 1 ? '#c5a880' : '#6d6d6d'}`,
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "30px",
                  color: index % 3 === 0 ? '#8b6b4c' : index % 3 === 1 ? '#c5a880' : '#6d6d6d',
                  fontSize: '3rem',
                  opacity: 0.1
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              >
                <FaQuoteLeft />
              </motion.div>

              <motion.div
                style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {[...Array(item.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                  >
                    <FaStar style={{ color: '#f39c12', fontSize: '1.2rem' }} />
                  </motion.div>
                ))}
              </motion.div>

              <p style={{
                fontSize: "1.15rem",
                lineHeight: "1.8",
                color: "#444",
                fontStyle: "italic",
                marginBottom: "25px",
                fontWeight: "500"
              }}>
                "{item.quote}"
              </p>

              <motion.div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(109, 109, 109, 0.1)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: index % 3 === 0 ? '#8b6b4c' : index % 3 === 1 ? '#c5a880' : '#6d6d6d',
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.name.charAt(0)}
                </motion.div>

                <div>
                  <h4 style={{
                    margin: 0,
                    fontSize: "1.05rem",
                    fontWeight: "600",
                    color: "#2c3e50",
                    marginBottom: '0.25rem'
                  }}>
                    {item.name}
                  </h4>
                  <p style={{
                    margin: 0,
                    fontSize: "0.9rem",
                    color: "var(--color-gray)"
                  }}>
                    {item.location}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <motion.section
        className="content-section"
        style={{ background: 'var(--color-cream)' }}
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
            <h2>Join Our Happy Clients</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-gray)', marginBottom: '2rem' }}>
              Experience the same quality service and dedication that our clients appreciate.
            </p>
            <motion.a
              href="/contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'inline-block' }}
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default TestimonialsPage;
