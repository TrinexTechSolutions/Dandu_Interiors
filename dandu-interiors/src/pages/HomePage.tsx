import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const processSteps = [
    { icon: <FaUsers />, title: "Talk to our Interior Designer & Get an Estimate" },
    { icon: <FaFileSignature />, title: "Detailed Drawing and Approval" },
    { icon: <FaIndustry />, title: "Production at Own Factories" },
    { icon: <FaTruck />, title: "Material Delivery & Execution" },
    { icon: <FaKey />, title: "On Time Project Hand Over" },
  ];

  const benefits = [
    {
      title: "Experienced Team",
      image: "/assets/modern_luxury_living_room.png",
      description: "Our designers bring over 15 years of expertise in luxury interiors."
    },
    {
      title: "Quick Response",
      image: "/assets/minimalist_modular_kitchen.png",
      description: "We value your time with structured timelines and fast turnarounds."
    },
    {
      title: "Transparent Pricing",
      image: "/assets/premium_master_bedroom.png",
      description: "Detailed quotations with no hidden costs - what you see is what you pay."
    },
    {
      title: "One-Time Service & AMC",
      image: "/assets/modern_false_ceiling_lighting.png",
      description: "Comprehensive maintenance to keep your space looking brand new."
    }
  ];

  return (
    <>
      <PageSeo
        title="Interior Design & Home Maintenance Services in Hyderabad and Bapatla"
        description={globalMetaDescription}
        keywords={seoKeywords}
        path="/"
      />

      <section
        ref={heroRef}
        className="hero-section"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'var(--color-cream)',
          position: 'relative',
          overflow: 'hidden',
          padding: '6rem 0'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <motion.div
              style={{ y: heroTextY, opacity: heroOpacity }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
                  lineHeight: '1.1',
                  marginBottom: '1.5rem',
                  fontWeight: 700
                }}
              >
                Where <span className="text-gradient">Design</span> Meets <br />
                Your Ambition.
              </h1>
              <p
                className="lead-copy"
                style={{
                  fontSize: '1.25rem',
                  marginBottom: '2.5rem',
                  color: 'var(--color-gray)',
                  maxWidth: '500px'
                }}
              >
                {heroDescription}
              </p>
              <div className="button-row">
                <Link className="btn-primary" to="/contact" style={{ padding: '1.1rem 2.2rem' }}>Book Consultation</Link>
                <Link className="btn-secondary" to="/portfolio" style={{ padding: '1.1rem 2.2rem' }}>View Gallery</Link>
              </div>
            </motion.div>

            <motion.div
              className="composition-grid"
              style={{
                y: useTransform(scrollYProgress, [0, 1], [0, -100])
              }}
            >
              <motion.div
                className="comp-item-1 organic-blob"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <img src="/assets/modern_luxury_living_room.png" alt="Luxury Living" className="comp-img" />
              </motion.div>
              <motion.div
                className="comp-item-2 organic-blob-2"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <img src="/assets/premium_master_bedroom.png" alt="Bedroom" className="comp-img" />
              </motion.div>
              <motion.div
                className="comp-item-3 glass-morphism"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '1.5rem',
                  color: 'var(--color-brown)',
                  zIndex: 5
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>15+</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years Exp.</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '40%',
          aspectRatio: '1',
          background: 'var(--color-beige)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.3,
          zIndex: 1
        }} />
      </section>
      <section className="content-section muted-bg" style={{ padding: '10rem 0', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', marginBottom: '2.5rem', lineHeight: '1.1' }}>
                Specialized <br />
                <span className="text-gradient">Design Solutions</span>
              </h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-gray)', marginBottom: '3rem', maxWidth: '500px' }}>
                We don't just design rooms; we curate experiences. Our approach combines 
                architectural precision with artistic flair to create spaces that breathe.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <Link to="/interior-design" className="glass-morphism" style={{
                  padding: '2.5rem',
                  borderRadius: '30px',
                  display: 'block',
                  transition: 'all 0.3s ease'
                }}>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-brown)' }}>Interior Architecture</h3>
                  <p style={{ margin: 0, color: 'var(--color-gray)' }}>Modular kitchens, bespoke wardrobes, and complete flooring solutions tailored to your lifestyle.</p>
                </Link>

                <Link to="/maintenance-services" className="glass-morphism" style={{
                  padding: '2.5rem',
                  borderRadius: '30px',
                  display: 'block',
                  transition: 'all 0.3s ease'
                }}>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-charcoal)' }}>Home Curation & Maintenance</h3>
                  <p style={{ margin: 0, color: 'var(--color-gray)' }}>From electrical precision to civil maintenance, we ensure your masterpiece stays timeless.</p>
                </Link>
              </div>
            </motion.div>

            <motion.div
              style={{ position: 'relative', height: '600px' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {/* Overlapping Organic Images */}
              <div className="organic-blob" style={{
                position: 'absolute',
                top: '0',
                left: '10%',
                width: '70%',
                height: '80%',
                zIndex: 1,
                boxShadow: '0 40px 80px rgba(0,0,0,0.15)'
              }}>
                <img src="/assets/modular_kitchen.png" alt="Modular Kitchen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div className="organic-blob-2" style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '65%',
                height: '70%',
                zIndex: 2,
                boxShadow: '0 40px 80px rgba(0,0,0,0.15)',
                border: '8px solid var(--color-cream)'
              }}>
                <img src="/assets/premium_italian_marble_flooring.png" alt="Premium Flooring" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Floating detail element */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: 'absolute',
                  top: '40%',
                  left: '-5%',
                  width: '120px',
                  height: '120px',
                  background: 'var(--color-gold)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '2rem',
                  zIndex: 3,
                  boxShadow: '0 20px 40px rgba(197, 168, 128, 0.3)'
                }}
              >
                ✨
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ padding: '10rem 0', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: '1.1', marginBottom: '2.5rem' }}>
                Expertise That <br />
                <span className="text-gradient">Transforms.</span>
              </h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-gray)', marginBottom: '3rem', maxWidth: '500px' }}>
                From luxury hospitality to visionary workspaces and bespoke residences, we craft environments that define excellence.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                <div>
                  <h4 style={{ color: 'var(--color-brown)', marginBottom: '0.5rem' }}>Hospitality</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-gray)', margin: 0 }}>Impactful & Relevant</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-brown)', marginBottom: '0.5rem' }}>Corporate</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-gray)', margin: 0 }}>Productive & Innovative</p>
                </div>
              </div>

              <Link to="/interior-design" className="btn-primary" style={{ padding: '1.2rem 2.8rem' }}>
                See What We Do →
              </Link>
            </motion.div>

            <motion.div
              style={{ position: 'relative', height: '500px' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="organic-blob" style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '80%',
                height: '80%',
                overflow: 'hidden',
                boxShadow: '0 40px 80px rgba(0,0,0,0.1)'
              }}>
                <img src="/assets/modern_luxury_living_room.png" alt="Showcase" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="glass-morphism" style={{
                position: 'absolute',
                bottom: '10%',
                left: '0',
                padding: '2rem',
                borderRadius: '30px',
                zIndex: 2,
                maxWidth: '240px'
              }}>
                <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-brown)' }}>
                  "We don't just design spaces; we curate timeless experiences."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ padding: '10rem 0' }}>
        <div className="container">
          <h2 className="center-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', marginBottom: '8rem', lineHeight: '1.1' }}>
            The <span className="text-gradient">Architectural</span> Path
          </h2>

          <div className="timeline-path">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div style={{ position: 'relative' }}>
                  <div className="timeline-number">0{index + 1}</div>
                  <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>{step.title}</h3>
                  <div style={{
                    width: '60px',
                    height: '2px',
                    background: 'var(--color-brown)',
                    marginBottom: '2rem'
                  }} />
                  <p style={{ fontSize: '1.1rem', color: 'var(--color-gray)', maxWidth: '400px' }}>
                    Every step in our process is handled with precision and care, ensuring 
                    that your vision is translated into a tangible reality.
                  </p>
                </div>
                <div style={{ position: 'relative' }}>
                  <div className="organic-blob" style={{
                    aspectRatio: '1.5',
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
                  }}>
                    <img 
                      src={[
                        "/assets/modern_luxury_living_room.png",
                        "/assets/executive_office_interior.png",
                        "/assets/modular_kitchen.png",
                        "/assets/premium_italian_marble_flooring.png",
                        "/assets/premium_master_bedroom.png"
                      ][index]} 
                      alt={step.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" style={{ padding: '10rem 0', background: 'var(--color-charcoal)', color: '#fff' }}>
        <div className="container">
          <div style={{ marginBottom: '6rem' }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1', margin: 0 }}>
              The <span className="text-gradient">Dandu</span> Edge
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', marginTop: '1.5rem', maxWidth: '600px' }}>
              We've redefined the standards of excellence. Our edge lies in the intersection
              of quality, transparency, and experience.
            </p>
          </div>

          <div className="mosaic-grid">
            <motion.div className="mosaic-tile tile-large" whileHover={{ scale: 1.02 }}>
              <img src="/assets/modern_luxury_living_room.png" alt="Excellence" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
              <div style={{ position: 'absolute', inset: 0, padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <h3 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>{benefits[0].title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>{benefits[0].description}</p>
              </div>
            </motion.div>

            <motion.div className="mosaic-tile tile-tall" style={{ background: 'var(--color-brown)' }}>
              <img src="/assets/minimalist_modular_kitchen.png" alt="Response" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
              <div style={{ position: 'absolute', inset: 0, padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <FaCheckCircle style={{ color: 'var(--color-gold)', fontSize: '3rem', marginBottom: '2rem' }} />
                <h3 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>{benefits[1].title}</h3>
                <p style={{ color: '#fff', margin: 0 }}>{benefits[1].description}</p>
              </div>
            </motion.div>

            <motion.div className="mosaic-tile tile-small-1" style={{ background: 'var(--color-gold)' }}>
              <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ color: 'var(--color-charcoal)', fontSize: '1.5rem', marginBottom: '1rem' }}>{benefits[2].title}</h3>
                <p style={{ color: 'var(--color-charcoal)', margin: 0, fontSize: '0.9rem' }}>{benefits[2].description}</p>
              </div>
            </motion.div>

            <motion.div className="mosaic-tile tile-small-2">
              <img src="/assets/premium_master_bedroom.png" alt="Service" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
              <div style={{ position: 'absolute', inset: 0, padding: '2rem', display: 'flex', alignItems: 'center' }}>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', textAlign: 'center' }}>{benefits[3].title}</h3>
              </div>
            </motion.div>

            <motion.div className="mosaic-tile tile-wide glass-morphism">
              <div style={{ padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Ready to start?</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>Book your free interior consultation today.</p>
                </div>
                <Link to="/contact" className="btn-primary">Get Started</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
