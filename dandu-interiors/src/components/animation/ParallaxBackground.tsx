import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxBackgroundProps {
  src: string;
  overlayOpacity?: number;
}

const ParallaxBackground = ({ src, overlayOpacity = 0.6 }: ParallaxBackgroundProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={ref} className="parallax-container" style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
      <motion.div
        style={{
          y,
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "120%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <div
        className="parallax-overlay"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: `rgba(255, 255, 255, ${overlayOpacity})`,
          background: `linear-gradient(to right, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 100%)`
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
