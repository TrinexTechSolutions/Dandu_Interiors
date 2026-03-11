import { Link } from "react-router-dom";
import { contactInfo, serviceLocations } from "../../content/siteContent";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>DANDU INTERIORS AND DEVELOPERS</h3>
          <p>Furnish Your Life With Style</p>
          <p>
            Interior design, home maintenance services, and infrastructure maintenance
            support in Hyderabad and Bapatla.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul className="footer-list">
            <li><Link to="/interior-design">Interior Design</Link></li>
            <li><Link to="/maintenance-services">Maintenance Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3>Service Locations</h3>
          <ul className="footer-list">
            {serviceLocations.map((location) => (
              <li key={location}>{location}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="footer-list">
            <li><a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>{contactInfo.phone}</a></li>
            <li><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DANDU INTERIORS AND DEVELOPERS. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
