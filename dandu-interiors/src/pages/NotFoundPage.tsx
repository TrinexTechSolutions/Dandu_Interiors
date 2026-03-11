import { Link } from "react-router-dom";
import AnimatedSection from "../components/animation/AnimatedSection";
import PageSeo from "../components/seo/PageSeo";

function NotFoundPage() {
  return (
    <>
      <PageSeo
        title="Page Not Found"
        description="The requested page does not exist."
        path="/404"
      />
      <AnimatedSection className="content-section">
        <div className="container narrow center-text">
          <h1>Page Not Found</h1>
          <p>The page you are looking for is unavailable.</p>
          <Link to="/" className="btn-primary">Go to Home</Link>
        </div>
      </AnimatedSection>
    </>
  );
}

export default NotFoundPage;
