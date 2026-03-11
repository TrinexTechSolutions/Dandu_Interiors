import AnimatedSection from "../components/animation/AnimatedSection";
import PageSeo from "../components/seo/PageSeo";
import { globalMetaDescription, seoKeywords } from "../content/siteContent";

const maintenanceBlocks = [
  {
    title: "Civil Maintenance",
    items: [
      "Crack Filling",
      "Tile Replacement",
      "Bathroom Leakage Repair",
      "Terrace Waterproofing",
    ],
  },
  {
    title: "Plumbing Maintenance",
    items: [
      "Tap & Pipe Repairs",
      "Drainage Block Clearing",
      "Water Tank Cleaning",
    ],
  },
  {
    title: "Electrical & Carpentry",
    items: [
      "Switch & Socket Repairs",
      "Fan & MCB Checks",
      "Door & Lock Repairs",
    ],
  },
  {
    title: "Painting & Polishing",
    items: ["Wall Repainting", "Wood Polishing", "Exterior Painting"],
  },
  {
    title: "Infrastructure Works",
    items: [
      "Pothole Closing",
      "Road Marking",
      "Speedbreaker Installation",
      "Kerb Painting",
    ],
  },
];

function MaintenanceServicesPage() {
  return (
    <>
      <PageSeo
        title="Home Maintenance Services in Hyderabad and Bapatla"
        description={globalMetaDescription}
        keywords={seoKeywords}
        path="/maintenance-services"
      />

      <AnimatedSection className="page-banner">
        <div className="container">
          <h1>Home Maintenance Services in Hyderabad and Bapatla</h1>
          <p>
            End-to-end maintenance support for civil, plumbing, electrical,
            carpentry, painting, and infrastructure works.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section">
        <div className="container">
          <h2>Maintenance Service Categories</h2>
          <div className="cards-grid three-column">
            {maintenanceBlocks.map((block) => (
              <article key={block.title} className="service-card">
                <h3>{block.title}</h3>
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default MaintenanceServicesPage;
