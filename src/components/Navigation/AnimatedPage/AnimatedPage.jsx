// components/AnimatedPage.jsx
import { motion, useAnimation } from "framer-motion";

function AnimatedPage({ content, scrollingDown }) {
  const controls = useAnimation();

  useEffect(() => {
    if (scrollingDown) {
      controls.start({ scale: 1, opacity: 1 });
    } else {
      controls.start({ scale: 0.5, opacity: 0 });
    }
  }, [scrollingDown]);

  return (
    <motion.div animate={controls} initial={{ scale: 0.5, opacity: 0 }}>
      {content}
    </motion.div>
  );
}

export default AnimatedPage;
