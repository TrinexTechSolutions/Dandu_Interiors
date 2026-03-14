import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems } from "../../content/siteContent";
import logo from "../../assets/logo_and_bg/Dandu_logo_1.svg";
import { FaInstagram, FaWhatsapp, FaPinterestP, FaChevronDown } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
        <div className="container nav-container">
          {/* Brand Logo - Left */}
          <Link to="/" className="brand-mark">
            <img src={logo} alt="Dandu Interiors" className="brand-logo" />
          </Link>

          {/* Navigation - Center */}
          <nav aria-label="Primary navigation" className="nav-menu">
            {navItems.map((item) => (
              <div 
                key={item.path} 
                className={`nav-item-container ${item.children ? "has-dropdown" : ""} ${openDropdown === item.path ? "dropdown-open" : ""}`}
                onMouseEnter={() => item.children && setOpenDropdown(item.path)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div 
                  className="nav-link-wrapper"
                  onClick={() => {
                    if (item.children) {
                      setOpenDropdown(openDropdown === item.path ? null : item.path);
                    }
                  }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link" : "nav-link"
                    }
                    end={item.path === "/"}
                    onClick={(e) => {
                      if (item.children) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {item.label}
                    {item.children && <FaChevronDown className="dropdown-arrow" />}
                  </NavLink>
                </div>
                {item.children && (
                  <div className="dropdown-menu">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className="dropdown-link"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Social Links - Right */}
          <div className="social-links-row">
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

          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <span style={{ transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}></span>
            <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
            <span style={{ transform: isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}></span>
          </button>
        </div>
      </header>

      <div
        className={`mobile-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div className={`mobile-sidebar ${isMenuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <div key={item.path} className="mobile-nav-group">
            <div 
              className="mobile-nav-link-wrapper"
              onClick={() => {
                if (item.children) {
                  setOpenDropdown(openDropdown === item.path ? null : item.path);
                }
              }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "mobile-nav-link active-link" : "mobile-nav-link"
                }
                end={item.path === "/"}
                onClick={(e) => {
                  if (item.children) {
                    e.preventDefault();
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
              >
                {item.label}
                {item.children && (
                  <FaChevronDown 
                    className={`mobile-dropdown-arrow ${openDropdown === item.path ? "rotated" : ""}`} 
                  />
                )}
              </NavLink>
            </div>
            {item.children && openDropdown === item.path && (
              <div className="mobile-submenu">
                {item.children.map((child) => (
                  <NavLink
                    key={child.path}
                    to={child.path}
                    className="mobile-sub-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {child.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Header;
