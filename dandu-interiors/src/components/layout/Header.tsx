import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems } from "../../content/siteContent";
import logo from "../../assets/logo_and_bg/Dandu_logo_1.svg";
import { FaInstagram, FaWhatsapp, FaPinterestP } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);


  return (
    <>
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="social-links-top">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://wa.me/919866166612" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            <FaPinterestP />
          </a>
        </div>
        <div className="container nav-wrap-vertical">
          {/* Row 1: Brand Logo */}
          <div className="brand-row">
            <Link to="/" className="brand-mark centered-brand">
              <img src={logo} alt="Dandu Interiors" className="brand-logo" />
            </Link>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <span style={{ transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}></span>
            <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
            <span style={{ transform: isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}></span>
          </button>

          {/* Row 2: Navigation Navigation */}
          <nav aria-label="Primary navigation" className="nav-menu nav-row">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                end={item.path === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <div
        className={`mobile-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div className={`mobile-sidebar ${isMenuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active-link" : "mobile-nav-link"
            }
            end={item.path === "/"}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Header;
