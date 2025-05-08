// components/AnimatedText.jsx
import { motion } from "framer-motion";

const textVariant = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const AnimatedText = ({ text, children, className = "" }) => (
  <motion.div
    className="overflow-hidden"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.9 }}
  >
    <motion.p variants={textVariant} className={className}>
      {text || children}
    </motion.p>
  </motion.div>
);

export default AnimatedText;
