import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import PageSeo from "../components/seo/PageSeo";
import { contactInfo, seoKeywords } from "../content/siteContent";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyLocation: "",
    propertyType: "",
    requirement: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      setFormData({
        name: "",
        phone: "",
        propertyLocation: "",
        propertyType: "",
        requirement: ""
      });
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

      <div className="new-contact-page">
        {/* Header Section */}
        <section className="contact-header-section">

          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ marginBottom: '1rem' }}
            >
              <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '1', fontWeight: 800, margin: 0 }}>
                CONTACT <br />
                <span className="text-gradient">US.</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lead-copy"
            >
              Reach us to book consultation, request maintenance services, or discuss infrastructure work.
            </motion.p>
          </div>


        </section>

        {/* Contact Bar (Phone & Email) */}
        <section className="contact-bar-section">
          <div className="container">
            <div className="contact-bar-grid">
              <motion.div
                className="contact-bar-item left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="icon-box"><FaPhone /></div>
                <div>
                  <h3>Call Us</h3>
                  <p>{contactInfo.phone}</p>
                </div>
              </motion.div>
              <motion.div
                className="contact-bar-item right"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="icon-box"><FaEnvelope /></div>
                <div>
                  <h3>Send Us</h3>
                  <p>{contactInfo.email}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Addresses and Maps Section */}
        <section className="address-map-section">
          <div className="container">
            <motion.h2
              className="section-title center-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ marginBottom: "4rem" }}
            >
              Our Locations
            </motion.h2>

            <div className="location-rows">
              {/* Hyderabad Row */}
              <motion.div
                className="location-row"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="location-info">
                  <div className="icon-box">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="location-text-content">
                    <h3>Registered Office (Hyderabad)</h3>
                    <p>DANDU INTERIORS AND DEVELOPERS, D-603, Vertex Pristine, Nizampet Road, Hyderabad</p>
                  </div>
                </div>
                <div className="location-map">
                  <div className="map-wrapper">
                    <iframe
                      title="Hyderabad Office Map"
                      src={`https://maps.google.com/maps?q=${encodeURIComponent("Vertex Pristine, Nizampet Road, Hyderabad")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="250"
                      style={{ border: 0, borderRadius: "12px" }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </motion.div>

              <div className="row-divider"></div>

              {/* Bapatla Row */}
              <motion.div
                className="location-row"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="location-info">
                  <div className="icon-box">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="location-text-content">
                    <h3>Bapatla Address</h3>
                    <p>Dr No: 9-4-12/B, Kamaraju Vari Street, Bapatla, Andhra Pradesh 522101</p>
                  </div>
                </div>
                <div className="location-map">
                  <div className="map-wrapper">
                    <iframe
                      title="Bapatla Office Map"
                      src={`https://maps.google.com/maps?q=${encodeURIComponent("Kamaraju Vari Street, Bapatla, Andhra Pradesh 522101")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="250"
                      style={{ border: 0, borderRadius: "12px" }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section">
          <div className="container">
            <motion.div
              className="form-container-centered"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="center-text" style={{ marginBottom: "3rem" }}>
                <h2 style={{ marginBottom: "0.5rem" }}>Schedule a Free Design Consultation</h2>
                <p className="form-subtext">
                  Reach out to us immediately to arrange for a customised quotation from one of our assessors.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group-row">
                  <div className="form-field-wrap">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Jane Smith"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field-wrap">
                    <label>Whatsapp mobile number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(123) 456-7890"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-field-wrap">
                    <label>where's your property located?</label>
                    <select
                      name="propertyLocation"
                      className="form-input"
                      value={formData.propertyLocation}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select…</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Bapatla">Bapatla</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-field-wrap">
                    <label>Type of property</label>
                    <select
                      name="propertyType"
                      className="form-input"
                      value={formData.propertyType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select…</option>
                      <option value="Villa">Villa</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-field-wrap" style={{ marginBottom: "2rem" }}>
                  <label>Interior Design Requirement</label>
                  <select
                    name="requirement"
                    className="form-input"
                    value={formData.requirement}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select…</option>
                    <option value="Full Home Interior">Full Home Interior</option>
                    <option value="Kitchen Only">Kitchen Only</option>
                    <option value="Living Room Only">Living Room Only</option>
                    <option value="Wardrobes / Storage">Wardrobes / Storage</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {status.submitted && (
                  <div className={`status-message ${status.error ? "error" : "success"}`} style={{ textAlign: "center", marginBottom: "2rem" }}>
                    {status.message}
                  </div>
                )}

                <div className="center-text">
                  <button
                    type="submit"
                    className="btn-submit"
                    disabled={status.submitting}
                  >
                    {status.submitting ? "Processing..." : "Get Free Consultation"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
