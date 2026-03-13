import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "../components/animation/AnimatedSection";
import PageSeo from "../components/seo/PageSeo";
import { seoKeywords, serviceLocations } from "../content/siteContent";

function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const timeline = [
    {
      year: "2015",
      title: "Foundation",
      description: "DANDU INTERIORS AND DEVELOPERS was founded with a vision to provide high-quality, practical interior design solutions in Hyderabad.",
    },
    {
      year: "2017",
      title: "Service Diversification",
      description: "Expanded our expertise to include comprehensive home maintenance and infrastructure works, becoming a one-stop solution provider.",
    },
    {
      year: "2020",
      title: "Regional Expansion",
      description: "Extended our reach to Bapatla and surrounding districts, bringing premium interior services to a wider community.",
    },
    {
      year: "Today",
      title: "Engineering Excellence",
      description: "Executing complex interior projects with a team of skilled professionals, maintaining corporate integrity and technical depth.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageSeo
        title="About Us"
        description="Learn about DANDU INTERIORS AND DEVELOPERS and our interior, maintenance, and infrastructure service approach."
        keywords={seoKeywords}
        path="/about-us"
      />

      {/* Hero Section */}
      <AnimatedSection className="hero-section relative min-h-[65vh] flex items-center justify-center bg-beige">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center lg:text-left py-24">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-[40px] md:text-[70px] lg:text-[85px] text-muted leading-none serif-heading">
                About
              </h2>
              <h1 className="font-primary font-black tracking-[0.08em] uppercase text-charcoal text-[28px] md:text-[47px] lg:text-[65px] leading-none mt-2">
                Dandu Interiors
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-brown mt-6 max-w-2xl font-medium">
              Delivering Engineered Excellence & Creative Innovation Since 2015.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center relative mb-12">
              <h2 className="text-[40px] md:text-[65px] lg:text-[80px] text-muted leading-none serif-heading">
                Our
              </h2>
              <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#252525] text-[28px] md:text-[40px] lg:text-[47px] leading-none mt-2">
                Story
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Established in 2015, <span className="text-[#8B6B4C] font-bold">DANDU INTERIORS AND DEVELOPERS</span> began as a specialized interior design firm serving the growing residential and commercial needs of Hyderabad. Over the years, we have evolved into a full-scale turnkey engineering and maintenance partner.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Serving locations including {serviceLocations.join(", ")}, we stand as a trusted partner delivering excellence with accountability, technical depth, and unwavering corporate integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={ref} className="py-20 lg:py-28 relative overflow-hidden bg-muted-light">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center relative">
              <h2 className="text-[40px] md:text-[65px] lg:text-[80px] text-muted leading-none serif-heading">
                Our
              </h2>
              <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#252525] text-[28px] md:text-[40px] lg:text-[47px] leading-none mt-2">
                History
              </h1>
            </div>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto relative"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="timeline-line hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  variants={itemVariants}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      className="timeline-card"
                      whileHover={{ y: -5 }}
                    >
                      <span className="timeline-year">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>

                  <div className="timeline-dot-wrapper">
                    <motion.div
                      className="timeline-dot"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 0.2 * index, type: "spring", stiffness: 300 }}
                    ></motion.div>
                  </div>

                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative">
        <div className="relative h-[45vh] flex items-center justify-center bg-charcoal">
          <motion.div
            className="relative text-center text-white px-4 z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[35px] md:text-[60px] lg:text-[80px] text-white leading-none serif-heading translucent-text">
              Epitome of
            </h2>
            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[28px] md:text-[40px] lg:text-[47px] leading-none mt-2">
              EXCELLENCE
            </h1>
          </motion.div>
        </div>

        <div className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <h2 className="text-[35px] md:text-[55px] text-muted serif-heading">Our</h2>
                <h1 className="text-[24px] md:text-[35px] uppercase font-black mb-6">Vision</h1>
                <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                  We aspire to be a leading organization with unique attributes characterized by quality products and services in the interior industry.
                </p>
              </div>

              <div className="text-center">
                <h2 className="text-[35px] md:text-[55px] text-muted serif-heading">Our</h2>
                <h1 className="text-[24px] md:text-[35px] uppercase font-black mb-6">Mission</h1>
                <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                  To remain responsible, maintain business ethics, and stay aligned with our core values while delivering exceptional value to our customers.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[35px] md:text-[55px] text-muted serif-heading">Our</h2>
              <h1 className="text-[24px] md:text-[35px] uppercase font-black mb-6">Quality</h1>
              <p className="text-gray-600 leading-relaxed">
                We are committed to achieving and sustaining a position of consistent quality in all activities, meeting customer expectations with continual improvements on time and within budget.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
