import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone } from "react-icons/fa";
import AnimatedSection from "../components/animation/AnimatedSection";
import PageSeo from "../components/seo/PageSeo";
import { contactInfo, seoKeywords } from "../content/siteContent";

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

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

      <motion.section 
        className="page-banner"
        style={{ 
          background: 'linear-gradient(135deg, var(--color-beige) 0%, var(--color-cream) 50%, var(--color-gold) 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            fontSize: '8rem',
            opacity: 0.05,
            color: 'var(--color-brown)'
          }}
          animate={floatAnimation}
        >
          <FaEnvelope />
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            bottom: '15%',
            right: '8%',
            fontSize: '6rem',
            opacity: 0.05,
            color: 'var(--color-brown)'
          }}
          animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
        >
          <FaPhone />
        </motion.div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ textAlign: 'center' }}
          >
            <h1>Contact Us</h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Reach us to book consultation, request maintenance services, or discuss infrastructure work.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <AnimatedSection className="content-section">
        <div className="container contact-grid">
          {/* Left Column: Contact Information */}
          <motion.div 
            className="contact-info-column"
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2>Get In</h2>
            <h1>Touch With Us</h1>
            <div className="contact-details">
              <motion.div 
                className="contact-detail-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="contact-detail-icon"
                  animate={pulseAnimation}
                >
                  <FaMapMarkerAlt />
                </motion.div>
                <div className="contact-detail-text">
                  <h3>Registered Office (Hyderabad)</h3>
                  <p>
                    <strong>DANDU INTERIORS AND DEVELOPERS</strong><br />
                    {contactInfo.hyderabadAddress.join(", ")}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="contact-detail-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="contact-detail-icon"
                  animate={{ ...pulseAnimation, transition: { ...pulseAnimation.transition, delay: 0.5 } }}
                >
                  <FaMapMarkerAlt />
                </motion.div>
                <div className="contact-detail-text">
                  <h3>Bapatla Address</h3>
                  <p>{contactInfo.bapatlaAddress.join(", ")}</p>
                </div>
              </motion.div>

              <motion.div 
                className="contact-detail-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="contact-detail-icon"
                  animate={{ ...pulseAnimation, transition: { ...pulseAnimation.transition, delay: 1 } }}
                >
                  <FaPhone />
                </motion.div>
                <div className="contact-detail-text">
                  <h3>Call Us</h3>
                  <p>{contactInfo.phone}</p>
                </div>
              </motion.div>

              <motion.div 
                className="contact-detail-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="contact-detail-icon"
                  animate={{ ...pulseAnimation, transition: { ...pulseAnimation.transition, delay: 1.5 } }}
                >
                  <FaEnvelope />
                </motion.div>
                <div className="contact-detail-text">
                  <h3>Send Us</h3>
                  <p>{contactInfo.email}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="contact-form-column"
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2>General</h2>
            <h1>Inquiry</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
              <motion.div 
                className="form-group-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                />
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                />
              </motion.div>
              <motion.div 
                className="form-group-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                />
                <motion.input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                />
              </motion.div>
              <motion.textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
              ></motion.textarea>

              {status.submitted && (
                <motion.div 
                  className={`status-message ${status.error ? "error" : "success"}`} 
                  style={{ color: status.error ? "red" : "green", fontWeight: 500 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button 
                type="submit" 
                className="btn-submit" 
                disabled={status.submitting}
                whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(139, 107, 76, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {status.submitting ? "Sending..." : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default ContactPage;
