import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone } from "react-icons/fa";
import AnimatedSection from "../components/animation/AnimatedSection";
import PageSeo from "../components/seo/PageSeo";
import { contactInfo, seoKeywords } from "../content/siteContent";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: "" });

    // Simulate form submission
    setTimeout(() => {
      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <>
      <PageSeo
        title="Contact"
        description="Contact DANDU INTERIORS AND DEVELOPERS for interior design and maintenance services in Hyderabad and Bapatla."
        keywords={seoKeywords}
        path="/contact"
      />

      <AnimatedSection className="page-banner">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Reach us to book consultation, request maintenance services, or discuss infrastructure work.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section">
        <div className="container contact-grid">
          {/* Left Column: Contact Information */}
          <div className="contact-info-column">
            <h2>Get In</h2>
            <h1>Touch With Us</h1>
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-detail-text">
                  <h3>Registered Office (Hyderabad)</h3>
                  <p>
                    <strong>DANDU INTERIORS AND DEVELOPERS</strong><br />
                    {contactInfo.hyderabadAddress.join(", ")}
                  </p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-detail-text">
                  <h3>Bapatla Address</h3>
                  <p>{contactInfo.bapatlaAddress.join(", ")}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaPhone />
                </div>
                <div className="contact-detail-text">
                  <h3>Call Us</h3>
                  <p>{contactInfo.phone}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-detail-text">
                  <h3>Send Us</h3>
                  <p>{contactInfo.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            <h2>General</h2>
            <h1>Inquiry</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              {status.submitted && (
                <div className={`status-message ${status.error ? "error" : "success"}`} style={{ color: status.error ? "red" : "green", fontWeight: 500 }}>
                  {status.message}
                </div>
              )}

              <button type="submit" className="btn-submit" disabled={status.submitting}>
                {status.submitting ? "Sending..." : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default ContactPage;
