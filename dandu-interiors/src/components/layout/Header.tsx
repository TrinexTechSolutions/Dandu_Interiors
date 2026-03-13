import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems } from "../../content/siteContent";
import logo from "../../assets/logo_and_bg/Dandu_logo_1.svg";

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

  const leftNavItems = navItems.filter((item) =>
    ["/", "/interior-design", "/maintenance-services"].includes(item.path),
  );
  const rightNavItems = navItems.filter((item) =>
    ["/portfolio", "/about-us", "/testimonials", "/contact"].includes(item.path),
  );

  return (
    <>
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container nav-wrap split-nav-wrap">
          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <span style={{ transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}></span>
            <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
            <span style={{ transform: isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}></span>
          </button>

          <nav aria-label="Primary navigation left" className="nav-menu nav-menu-left">
            {leftNavItems.map((item) => (
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

          <Link to="/" className="brand-mark centered-brand">
            <img src={logo} alt="Dandu Interiors" className="brand-logo" />
          </Link>

          <nav aria-label="Primary navigation right" className="nav-menu nav-menu-right">
            {rightNavItems.map((item) => (
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
