// components/AnimatedLines.jsx
import { motion } from "framer-motion";

const textVariant = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AnimatedLines = ({ lines, className = "" }) => {
  return (
    <div className="flex flex-col gap-[2px]">
      {lines.map((line, index) => (
        <div className="overflow-hidden" key={index}>
          <motion.p
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
          >
            {line}
          </motion.p>
        </div>
      ))}
    </div>
  );
};

export default AnimatedLines;
