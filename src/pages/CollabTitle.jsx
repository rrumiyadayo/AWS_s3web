import React from 'react';
import { motion } from 'framer-motion';

function CollabTitle() {
    return (
        <motion.h1 
        className="text-4xl font-bold text-center text-gray-800 mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      >
        コラボセクション
      </motion.h1>
    );
  }

  export default CollabTitle;