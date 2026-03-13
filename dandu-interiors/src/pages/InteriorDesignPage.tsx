import { motion } from "framer-motion";
import { FaLayerGroup, FaPaintBrush, FaTh, FaCouch, FaBolt, FaWrench } from "react-icons/fa";
import AnimatedSection from "../components/animation/AnimatedSection";
import PageSeo from "../components/seo/PageSeo";
import { globalMetaDescription, seoKeywords } from "../content/siteContent";

const interiorCategories = [
  {
    title: "Civil Works",
    icon: <FaLayerGroup />,
    items: ["Demolition Work", "Block Work, Plastering", "Tiles Flooring and Cladding", "Italian Marble Flooring and Cladding", "False Ceiling Works (Gypsum & Grid)"]
  },
  {
    title: "Painting Works",
    icon: <FaPaintBrush />,
    items: ["Internal Painting", "External Painting", "Texture Painting", "Wood polish (Melamine)", "Duco & PU finish"]
  },
  {
    title: "Carpenter Work",
    icon: <FaLayerGroup />,
    items: ["Wooden Partitions", "Modular Kitchen & Wardrobes", "TV, Crockery Units", "Doors and Door Frames"]
  },
  {
    title: "Electrical Works",
    icon: <FaBolt />,
    items: ["Point Wiring", "Switch and Sockets Installation", "Light Fixtures, Fan, Profile light Installation"]
  },
  {
    title: "Plumbing Works",
    icon: <FaWrench />,
    items: ["Plumbing Line extension", "CP fittings", "Kitchen sink and washbasin installation"]
  },
  {
    title: "Aluminium and Glass Works",
    icon: <FaTh />,
    items: ["Toughened glass partitions", "Shower Cubicle", "Glass Doors (Sliding & Swing)", "Aluminium Profile doors", "Mirrors"]
  },
  {
    title: "Furniture Works",
    icon: <FaCouch />,
    items: ["Wallpapers", "Sofa", "Window Cushions and Head Board Works"]
  }
];



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
            <motion.h1>Interior Works for Residential Flats & Villas</motion.h1>
            <motion.p>
              Complete end-to-end interior solutions from civil work to final furniture styling.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <AnimatedSection className="content-section">
        <div className="container">
          <div className="cards-grid three-column" style={{ gap: '2rem' }}>
            {interiorCategories.map((category, index) => (
              <motion.article 
                key={category.title}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ padding: '2rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', color: 'var(--color-brown)' }}>{category.icon}</div>
                  <h3 style={{ margin: 0 }}>{category.title}</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {category.items.map((item, i) => (
                    <li key={i} style={{ 
                      padding: '0.4rem 0', 
                      borderBottom: i < category.items.length - 1 ? '1px solid #eee' : 'none',
                      fontSize: '0.95rem',
                      color: 'var(--color-charcoal)'
                    }}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default InteriorDesignPage;
