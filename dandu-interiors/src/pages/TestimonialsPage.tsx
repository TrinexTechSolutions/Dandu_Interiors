import AnimatedSection from "../components/animation/AnimatedSection";
import PageSeo from "../components/seo/PageSeo";
import { seoKeywords } from "../content/siteContent";

const testimonials = [
  {
    name: "Homeowner - Kukatpally",
    quote: "Excellent planning and execution for our modular kitchen and wardrobes. The team delivered on time.",
  },
  {
    name: "Apartment Owner - Nizampet",
    quote: "Quick response for plumbing and electrical maintenance with clear pricing and clean work.",
  },
  {
    name: "Property Manager - Hyderabad",
    quote: "Reliable support for recurring maintenance requirements and preventive checks.",
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

      <AnimatedSection className="page-banner">
        <div className="container">
          <h1>Testimonials</h1>
          <p>What our clients say about our service quality and responsiveness.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section">
        <div className="container">
          <div className="cards-grid three-column">
            {testimonials.map((item) => (
              <article key={item.name} className="service-card">
                <p>"{item.quote}"</p>
                <h3>{item.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default TestimonialsPage;
