import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TriangleBackground = () => {
  const { scrollYProgress } = useScroll(); // Use scroll on the viewport

  const translateY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const getTriangleVariants = (duration) => ({
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      scale: [1, 1.05, 1],
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="fixed inset-0 -z-40 pointer-events-none"
    >
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <motion.div
          style={{ y: translateY, rotate: "30deg" }}
          className="absolute top-[26%] left-[4%] w-0 h-0 border-l-[50px] border-l-blue-400 border-b-[50px] border-b-transparent origin-bottom-left"
          variants={getTriangleVariants(1.5)}
          initial="initial"
          animate="animate"
        />
        <motion.div
          style={{ y: translateY, rotate: "80deg" }}
          className="absolute top-[5.3%] left-[15%] w-0 h-0 border-l-[50px] border-l-yellow-400 border-b-[60px] border-b-transparent origin-bottom-left"
          variants={getTriangleVariants(2)}
          initial="initial"
          animate="animate"
        />
        <motion.div
          style={{ y: translateY, rotate: "20deg" }}
          className="absolute top-[18%] left-[33.33%] w-0 h-0 border-l-[50px] border-l-blue-500 border-b-[45px] border-b-transparent origin-bottom-left"
          variants={getTriangleVariants(2.5)}
          initial="initial"
          animate="animate"
        />
        <motion.div
          style={{ y: translateY, rotate: "-160deg" }}
          className="absolute top-[10%] right-[4%] w-0 h-0 border-l-[40px] border-l-yellow-500 border-b-[65px] border-b-transparent origin-bottom-left"
          variants={getTriangleVariants(3)}
          initial="initial"
          animate="animate"
        />
        <motion.div
          style={{ y: translateY, rotate: "-18deg" }}
          className="absolute top-[28%] right-[20%] w-0 h-0 border-l-[28px] border-l-blue-300 border-b-[48px] border-b-transparent origin-bottom-left"
          variants={getTriangleVariants(3.5)}
          initial="initial"
          animate="animate"
        />
        <motion.div
          style={{ y: translateY, rotate: "110deg" }}
          className="absolute top-[7%] right-[33%] w-0 h-0 border-l-[30px] border-l-yellow-300 border-b-[40px] border-b-transparent origin-bottom-left"
          variants={getTriangleVariants(4)}
          initial="initial"
          animate="animate"
        />
      </div>
    </motion.div>
  );
};

export default TriangleBackground;