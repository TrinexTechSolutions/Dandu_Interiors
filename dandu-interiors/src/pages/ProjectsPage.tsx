import { motion } from "framer-motion";
import PageSeo from "../components/seo/PageSeo";
import { seoKeywords } from "../content/siteContent";

const projects = [
  {
    title: "Residential Masterpieces",
    description: "Elegant homes designed with personality and precision.",
    image: "/assets/modern_luxury_living_room.png"
  },
  {
    title: "Corporate Excellence",
    description: "Productive workspaces that inspire innovation and growth.",
    image: "/assets/executive_office_interior.png"
  },
  {
    title: "Hospitality & Retail",
    description: "Inviting spaces curated for premium customer experiences.",
    image: "/assets/modular_kitchen.png"
  }
];

function ProjectsPage() {
  return (
    <>
      <PageSeo
        title="Projects | Dandu Interiors"
        description="Explore our specialized design projects across residential, corporate, and hospitality sectors."
        keywords={seoKeywords}
        path="/projects"
      />
      
      <section className="page-banner" style={{ background: 'var(--color-beige)' }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-gradient">Projects</span>
          </motion.h1>
          <p className="lead-copy">Discover how we transform ambitions into architectural realities across diverse sectors.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="cards-grid three-column">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ overflow: 'hidden', padding: 0 }}
              >
                <div style={{ height: '250px', overflow: 'hidden' }}>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ color: 'var(--color-brown)' }}>{project.title}</h3>
                  <p style={{ color: 'var(--color-gray)', margin: 0 }}>{project.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
