import AnimatedSection from "../components/animation/AnimatedSection";
import PageSeo from "../components/seo/PageSeo";
import { globalMetaDescription, seoKeywords } from "../content/siteContent";

const designServices = [
  "Architectural Designs",
  "Interior Designs",
  "3D Elevation Designs",
  "Modular Kitchens & Wardrobes",
  "False Ceiling Works",
  "Flooring Works",
  "Painting Works",
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

      <AnimatedSection className="page-banner">
        <div className="container">
          <h1>Interior Design Services in Hyderabad and Bapatla</h1>
          <p>
            We design modern, stylish and functional interior spaces for homes,
            apartments and offices.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section">
        <div className="container">
          <h2>Our Interior Design Services</h2>
          <div className="cards-grid three-column">
            {designServices.map((service) => (
              <article key={service} className="service-card">
                <h3>{service}</h3>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default InteriorDesignPage;
