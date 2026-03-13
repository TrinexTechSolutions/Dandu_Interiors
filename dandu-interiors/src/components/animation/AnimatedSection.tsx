import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedSectionProps = {
  className?: string;
  children: ReactNode;
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function AnimatedSection({ className, children }: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;
