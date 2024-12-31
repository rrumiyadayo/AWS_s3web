import React from "react";
import { motion } from "framer-motion";

function Card({ experience, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="block bg-white rounded-lg shadow-md p-6 mb-4 last:mb-0 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
      <p className="text-gray-700">{experience.summary}</p>
    </motion.div>
  );
}

export default Card;
