import { motion } from "framer-motion";
import PageSeo from "../components/seo/PageSeo";
import { seoKeywords } from "../content/siteContent";

function DesignThemePage() {
  return (
    <>
      <PageSeo
        title="Design Theme | Dandu Interiors"
        description="Understanding our design philosophy: Timeless, functional, and organic."
        keywords={seoKeywords}
        path="/design-theme"
      />
      
      <section className="page-banner" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Design <span className="text-gradient">Theme</span>
          </motion.h1>
          <p className="lead-copy">Our philosophy is rooted in the harmony between functionality and artistic expression.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container narrow">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '2.5rem' }}>Timeless <span className="text-gradient">Elegance</span></h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-gray)' }}>
                We believe that great design should transcend trends. Our themes focus on 
                neutral palettes, natural materials, and architectural lines that remain 
                beautiful for decades.
              </p>
            </motion.div>
            <div className="organic-blob" style={{ height: '400px', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}>
              <img src="/assets/modern_luxury_living_room.png" alt="Elegance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginTop: '8rem', direction: 'rtl' }}>
             <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ direction: 'ltr' }}
            >
              <h2 style={{ fontSize: '2.5rem' }}>Organic <span className="text-gradient">Modernism</span></h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-gray)' }}>
                Inspired by the curves of nature, we integrate organic shapes and 
                soft transitions to create spaces that feel alive and welcoming.
              </p>
            </motion.div>
            <div className="organic-blob-2" style={{ height: '400px', boxShadow: '0 40px 80px rgba(0,0,0,0.1)', direction: 'ltr' }}>
              <img src="/assets/premium_master_bedroom.png" alt="Modernism" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DesignThemePage;
