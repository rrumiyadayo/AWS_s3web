import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const MotionHoverUp = ({
  children,
  hoverY = -5,
  hoverShadow = "0px 5px 20px rgba(0, 0, 0, 0)",
  hoverScale = 1,
  transitionDuration = 0.2,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0, ease: "easeOut" }}
      whileHover={{
        y: hoverY,
        boxShadow: hoverShadow,
        scale: hoverScale,
        transition: { duration: transitionDuration },
      }}
      //   style={{ cursor: "pointer" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
MotionHoverUp.propTypes = {
  children: PropTypes.node.isRequired,
  hoverY: PropTypes.number,
  hoverShadow: PropTypes.string,
  hoverScale: PropTypes.number,
  transitionDuration: PropTypes.number,
};

export default MotionHoverUp;
