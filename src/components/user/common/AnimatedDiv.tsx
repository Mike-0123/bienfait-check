import { motion } from "framer-motion"
import { divStyles } from "../../styles"

const AnimatedDiv = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      className={divStyles}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedDiv
