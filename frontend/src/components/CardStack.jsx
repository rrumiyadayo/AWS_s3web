import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

function CardStack({ memberName, experiences, onCardClick }) {
  return (
    <div className="h-full w-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-center">{memberName}</h2>
      {experiences.map((experience) => (
        <motion.div
          key={experience.slug}
          className="bg-white rounded-lg shadow-md overflow-hidden mb-4 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onCardClick(experience)}
        >
          <div className="md:flex">
            <div className="md:w-1/3 p-4 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gray-200">
                {/* 写真 */}
              </div>
            </div>
            <div className="md:w-2/3 p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {experience.title}
              </h3>
              <p className="mt-2 text-gray-600">{experience.summary}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

CardStack.propTypes = {
  memberName: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default CardStack;
