import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slideInLeftYellow = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  transition: { duration: 0.2, ease: "linear" },
};

const slideInLeftBlue = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  transition: { duration: 0.3, ease: "linear" },
};

const slideOutRight = {
  animate: { x: "100%" },
  transition: { duration: 0.3, ease: "linear" },
};

const OpeningAnimation = ({ onAnimationComplete }) => {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [isOutroAnimating, setIsOutroAnimating] = useState(false);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setIsIntroComplete(true);
      onAnimationComplete();
    }, 650); // total time for intro/white

    return () => clearTimeout(introTimer);
  }, [onAnimationComplete]);

  useEffect(() => {
    if (isIntroComplete) {
      setIsOutroAnimating(true);
    }
  }, [isIntroComplete]);

  return (
    <motion.div
      className="fixed inset-0 w-full h-full"
      initial={{ zIndex: 10 }}
      animate={isOutroAnimating ? "animate" : ""}
      variants={slideOutRight}
      transition={{ delay: 0.3 }}
      style={{ pointerEvents: isOutroAnimating ? "none" : "auto" }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full bg-yellow-200"
        initial="initial"
        animate={isIntroComplete ? "animate" : ""}
        variants={slideInLeftYellow}
        transition={{ ...slideInLeftYellow.transition }}
      />
      <motion.div
        className="absolute inset-0 w-full h-full bg-blue-500"
        initial="initial"
        animate={isIntroComplete ? "animate" : ""}
        variants={slideInLeftBlue}
        transition={{ ...slideInLeftBlue.transition }}
      />
    </motion.div>
  );
};

export default OpeningAnimation;
