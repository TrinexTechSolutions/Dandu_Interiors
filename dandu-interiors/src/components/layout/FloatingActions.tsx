import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "../../content/siteContent";

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappLink = `https://wa.me/${contactInfo.phone.replace(/[\s+]/g, "")}`;

  return (
    <div className="floating-actions">
      {showScrollTop && (
        <button
          className="floating-btn scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <span className="scroll-dot"></span>
        </button>
      )}
      <a
        href={whatsappLink}
        className="floating-btn whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default FloatingActions;
