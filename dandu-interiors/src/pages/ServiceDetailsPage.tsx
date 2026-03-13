import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { servicesContent } from "../content/servicesContent";
import { FaArrowLeft, FaPlus, FaMinus } from "react-icons/fa";
import PageSeo from "../components/seo/PageSeo";
import { useRef } from "react";

function ServiceDetailsPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesContent[serviceId] : null;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  if (!service) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h2>Service Not Found</h2>
        <Link to="/interior-design" style={{ color: 'var(--color-gold)' }}>Return to Services</Link>
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      <PageSeo
        title={`${service.title} | Dandu Interiors`}
        description={service.description}
        path={`/interior-design/${serviceId}`}
      />

      {/* Unique Architectural Hero */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', background: 'var(--color-charcoal)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <motion.div 
            style={{ 
              position: 'absolute', 
              right: '-10%', 
              top: '-10%', 
              width: '70%', 
              height: '120%', 
              clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
              overflow: 'hidden'
            }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img src={service.heroImage} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--color-charcoal), transparent)' }} />
          </motion.div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/interior-design" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', color: 'var(--color-gold)', marginBottom: '3rem', textDecoration: 'none', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
              <FaArrowLeft /> Back to Services
            </Link>
            <h1 style={{ fontSize: 'clamp(4rem, 15vw, 10rem)', color: '#fff', marginBottom: '2rem', fontWeight: 900, lineHeight: '0.9', maxWidth: '800px' }}>
              {service.title.split(' ').map((word, i) => (
                <span key={i} style={{ display: 'block' }}>{word}</span>
              ))}
            </h1>
            <div style={{ width: '100px', height: '4px', background: 'var(--color-gold)', marginBottom: '2rem' }} />
            <p style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.6)', maxWidth: '500px', lineHeight: '1.6' }}>
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Non-Card Benefit Section: Bold Typography & Architectural Reveal */}
      <section style={{ padding: '10rem 0', background: '#fff', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.05 }}
              viewport={{ once: true }}
              style={{ position: 'absolute', top: '5rem', left: '0', fontSize: '20rem', margin: 0, fontWeight: 900, pointerEvents: 'none' }}
            >
              EDGE
            </motion.h2>

            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '80px 1fr 1.5fr', 
                  alignItems: 'center', 
                  padding: '4rem 0', 
                  borderBottom: '1px solid #eee',
                  gap: '2rem'
                }}
              >
                <span style={{ fontSize: '2rem', color: 'var(--color-gold)', fontWeight: 800 }}>0{index + 1}</span>
                <h3 style={{ fontSize: '2.5rem', margin: 0, color: 'var(--color-charcoal)', fontWeight: 700 }}>{benefit.title}</h3>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-gray)', lineHeight: '1.8', margin: 0 }}>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Specification: What's Included */}
      <section style={{ padding: '7rem 0', background: 'var(--color-charcoal)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.03, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>
        
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 1.2fr', gap: '8rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <div style={{ position: 'relative', borderRadius: '40px 0 40px 0', overflow: 'hidden', boxShadow: '0 50px 100px rgba(0,0,0,0.5)' }}>
                <motion.img 
                  src={service.heroImage} 
                  alt="Inclusion Feature" 
                  style={{ width: '100%', height: '450px', objectFit: 'cover' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5 }}
                />
                <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.1)', pointerEvents: 'none' }} />
              </div>
              
              {/* Technical Annotations */}
              <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '60px', height: '60px', borderTop: '2px solid var(--color-gold)', borderLeft: '2px solid var(--color-gold)' }} />
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '60px', height: '60px', borderBottom: '2px solid var(--color-gold)', borderRight: '2px solid var(--color-gold)' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '1rem', letterSpacing: '6px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '3rem' }}>Specification / Inclusions</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {service.whatsIncluded.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    style={{ 
                      padding: '1.5rem 0', 
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '2.5rem',
                      position: 'relative'
                    }}
                  >
                    <span style={{ 
                      fontFamily: 'monospace', 
                      fontSize: '0.9rem', 
                      color: 'var(--color-gold)', 
                      opacity: 0.6,
                      marginTop: '0.5rem'
                    }}>
                      [{index + 1 < 10 ? `0${index + 1}` : index + 1}]
                    </span>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.8rem', color: '#fff', fontWeight: 600, margin: 0, letterSpacing: '1px' }}>{item}</h3>
                    </div>
                    <div style={{ 
                      width: '12px', 
                      height: '12px', 
                      borderRadius: '50%', 
                      background: 'var(--color-gold)', 
                      marginTop: '1rem',
                      boxShadow: '0 0 15px var(--color-gold)'
                    }} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Staggered Vertical Process Reveal */}
      <section style={{ padding: '7rem 0', background: 'var(--color-beige-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <h2 style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--color-charcoal)', margin: 0 }}>THE PROCESS</h2>
            <p style={{ color: 'var(--color-gray)', fontSize: '1.2rem', marginTop: '1rem' }}>A disciplined approach to world-class design.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: index % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr', 
                  gap: '8rem', 
                  alignItems: 'center' 
                }}
              >
                {index % 2 === 0 ? (
                  <>
                    <div style={{ position: 'relative' }}>
                      <span style={{ fontSize: '15rem', color: 'var(--color-gold)', opacity: 0.1, fontWeight: 900, position: 'absolute', top: '-5rem', right: '-2rem', zIndex: 0 }}>{step.step}</span>
                      <div style={{ position: 'relative', zIndex: 1 }}>
                        <h3 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--color-charcoal)' }}>{step.title}</h3>
                        <p style={{ fontSize: '1.3rem', color: 'var(--color-gray)', lineHeight: '1.7' }}>{step.description}</p>
                      </div>
                    </div>
                    <div style={{ height: '500px', borderRadius: '40px', overflow: 'hidden', clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)' }}>
                      <img src={service.heroImage} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ height: '500px', borderRadius: '40px', overflow: 'hidden', clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)' }}>
                      <img src="/assets/modern_luxury_living_room.png" alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ position: 'relative' }}>
                      <span style={{ fontSize: '15rem', color: 'var(--color-gold)', opacity: 0.1, fontWeight: 900, position: 'absolute', top: '-5rem', left: '-2rem', zIndex: 0 }}>{step.step}</span>
                      <div style={{ position: 'relative', zIndex: 1 }}>
                        <h3 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--color-charcoal)' }}>{step.title}</h3>
                        <p style={{ fontSize: '1.3rem', color: 'var(--color-gray)', lineHeight: '1.7' }}>{step.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Footer Experience: Other Services & CTA */}
      <section style={{ padding: '5rem 0', background: 'var(--color-charcoal)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div className="geometric-overlay" style={{ opacity: 0.1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'flex-start' }}>
            {/* Left: More Services */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '0.9rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '3rem' }}>More Services</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {Object.keys(servicesContent)
                  .filter(key => key !== serviceId)
                  .slice(0, 4)
                  .map((key, index, array) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        to={`/interior-design/${key}`}
                        className="group"
                        style={{ 
                          textDecoration: 'none', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'space-between',
                          padding: '1rem 0',
                          borderBottom: index === array.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)',
                          transition: 'all 0.4s ease'
                        }}
                      >
                        <h3 style={{ 
                          fontSize: '1.5rem', 
                          margin: 0, 
                          color: 'rgba(255,255,255,0.6)',
                          transition: 'all 0.4s ease'
                        }}
                        className="service-link-hover"
                        >
                          {servicesContent[key].title}
                        </h3>
                        <FaPlus style={{ fontSize: '0.8rem', color: 'var(--color-gold)' }} />
                      </Link>
                    </motion.div>
                  ))}
              </div>
            </motion.div>

            {/* Vertical Divider (Desktop Only) */}
            <div style={{ position: 'absolute', left: '50%', top: '15%', bottom: '35%', width: '1px', background: 'rgba(255,255,255,0.1)' }} className="hide-mobile" />

            {/* Right: Integrated CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: '0.9', marginBottom: '3rem' }}>
                READY FOR <br />
                <span className="text-gradient">TIMELESS?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '400px', marginInline: 'auto' }}>
                Let's collaborate to bring your vision to life with our expert design services.
              </p>
              <Link 
                to="/contact" 
                className="btn btn-primary" 
                style={{ 
                  padding: '1.5rem 4rem', 
                  fontSize: '1.2rem', 
                  borderRadius: '0', 
                  clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' 
                }}
              >
                Start Your Project
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Background Decorative Text */}
        <motion.div 
          style={{ 
            position: 'absolute', 
            bottom: '0', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            fontSize: '8rem', 
            fontWeight: 950, 
            color: 'rgba(255,255,255,0.02)', 
            whiteSpace: 'nowrap', 
            zIndex: 1,
            pointerEvents: 'none',
            lineHeight: '1'
          }}
        >
          DANDU INTERIORS
        </motion.div>

      </section>
    </div>
  );
}

export default ServiceDetailsPage;
