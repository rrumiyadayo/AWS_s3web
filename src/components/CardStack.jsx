import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

function CardStack({ memberName, experiences, onCardClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stackRef = useRef(null);

  const handleWheel = (event) => {
    event.preventDefault();
    const delta = Math.sign(event.deltaY);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + delta;
      if (newIndex < 0) return experiences.length - 1;
      if (newIndex >= experiences.length) return 0;
      return newIndex;
    });
  };

  useEffect(() => {
    if (stackRef.current) {
      stackRef.current.addEventListener("wheel", handleWheel, {
        passive: false,
      });
      return () => {
        stackRef.current.removeEventListener("wheel", handleWheel);
      };
    }
  }, [experiences]);

  return (
    <div
      ref={stackRef}
      className="relative h-[600px] w-[30rem] md:h-[400px] md:w-[30rem] group"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">{memberName}</h2>
      {experiences.map((experience, index) => (
        <motion.div
          key={experience.slug}
          className="absolute top-0 left-0 w-full"
          style={{
            zIndex:
              index === currentIndex ? 30 : 20 - Math.abs(index - currentIndex),
          }}
          animate={{
            y: (index - currentIndex) * 50,
            x: (index - currentIndex) * 20,
            scale: index === currentIndex ? 1 : 0.9,
            opacity: Math.max(1 - Math.abs(index - currentIndex) * 0.3, 0),
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Card
            experience={experience}
            onClick={() => onCardClick(experience)}
          />
        </motion.div>
      ))}
    </div>
  );
}
CardStack.propTypes = {
  memberName: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default CardStack;
