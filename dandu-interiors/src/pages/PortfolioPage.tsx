import AnimatedSection from "../components/animation/AnimatedSection";
import PageSeo from "../components/seo/PageSeo";
import { seoKeywords } from "../content/siteContent";

const projects = [
  {
    title: "Residential Interior Project",
    description: "Complete home interior setup including modular kitchen, wardrobes, and false ceiling work.",
  },
  {
    title: "Apartment Renovation",
    description: "Flooring upgrade, repainting, and smart storage redesign for apartment living.",
  },
  {
    title: "Office Space Transformation",
    description: "Functional office layout with architectural planning and interior finishing.",
  },
  {
    title: "Maintenance AMC Works",
    description: "Civil, plumbing, and electrical maintenance support under annual contracts.",
  },
];

function PortfolioPage() {
  return (
    <>
      <PageSeo
        title="Portfolio"
        description="Explore our interior design, renovation, and maintenance works in Hyderabad and Bapatla."
        keywords={seoKeywords}
        path="/portfolio"
      />

      <AnimatedSection className="page-banner">
        <div className="container">
          <h1>Portfolio</h1>
          <p>Selected interior design and maintenance projects delivered by our team.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section">
        <div className="container">
          <div className="cards-grid two-column">
            {projects.map((project) => (
              <article key={project.title} className="service-card">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default PortfolioPage;
