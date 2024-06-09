import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

type AnimationType = "fromLeft" | "fromRight" | "fromTop" | "fromBottom" | "bounce";

const getAnimation = (type: AnimationType) => {
  switch (type) {
    case "fromLeft":
      return { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } };
    case "fromRight":
      return { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } };
    case "fromTop":
      return { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } };
    case "fromBottom":
      return { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } };
    case "bounce":
      return {
        initial: { opacity: 0, scale: 0.5 },
        animate: {
          opacity: 1,
          scale: [1, 1.2, 1],
          transition: { type: "spring", stiffness: 100 }
        }
      };
    default:
      return { initial: { opacity: 0 }, animate: { opacity: 1 } };
  }
};

const AnimatedDiv = ({ children, className, animationType = "fromBottom" }: { children: React.ReactNode, className?: string, animationType?: AnimationType }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.1 });

  const animation = getAnimation(animationType);

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={animation.initial}
          animate={inView ? animation.animate : {}}
          transition={{ delay: index * 0.2 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedDiv;