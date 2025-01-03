import React from "react";
import { motion } from "framer-motion";
import MotionHoverUp from "../components/MotionHoverUp";

function CollabTitle() {
  return (
    <MotionHoverUp className="text-4xl font-bold text-center text-gray-800 mb-16">
      <motion.h1
        className="text-inherit font-inherit text-center mb-0" // Inherit styles from MotionHoverUp
      >
        コラボセクション
      </motion.h1>
    </MotionHoverUp>
  );
}

export default CollabTitle;
