import React, { useState, useEffect } from "react";
import Header from "../pages/Header";
import MemberCards from "../components/MemberCards";
import ExperienceModal from "../components/ExperienceModal";
import CollabTitle from "../pages/CollabTitle";
import { motion } from "framer-motion";

function HomePage() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isOutroAnimating, setIsOutroAnimating] = useState(false);

  const handleCardClick = (experience) => {
    setSelectedExperience(experience);
  };

  const handleModalClose = () => {
    setSelectedExperience(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const slideInLeftYellow = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    transition: { duration: 0.2, ease: "linear" }, 
  };

  const slideInLeftBlue = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    transition: { duration: 0.3, ease: "linear"},
  };

  const slideOutRight = {
    animate: { x: "100%" },
    transition: { duration: 0.3, ease: "linear" },
  };

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setIsIntroComplete(true);
    }, 500); // total time for intro/white

    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    if (isIntroComplete) {
      setIsOutroAnimating(true);
    }
  }, [isIntroComplete]);

  return (
    <motion.div 
      className="min-h-screen bg-white"
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ zIndex: 10 }}
        animate={isOutroAnimating ? "animate" : ""}
        variants={slideOutRight}
        transition={{ delay: 0.3 }}
        style={{ pointerEvents: isOutroAnimating ? 'none' : 'auto' }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full bg-yellow-200"
          initial="initial"
          animate={isIntroComplete ? "animate" : ""}
          variants={slideInLeftYellow}
          transition={{ ...slideInLeftYellow.transition}}
        />
        <motion.div
          className="absolute inset-0 w-full h-full bg-blue-500"
          initial="initial"
          animate={isIntroComplete ? "animate" : ""}
          variants={slideInLeftBlue}
          transition={{ ...slideInLeftBlue.transition}}
        />
      </motion.div>

      <motion.div
        className="py-6 flex flex-col justify-center sm:py-12"
        variants={containerVariants}
        initial="hidden"
        animate={isIntroComplete ? "visible" : "hidden"}
        style={{
          position: "relative",
          zIndex: 3, // Ensure content is on top
        }}
      >
        <Header />
        <div className="relative py-3 sm:max-w-full sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-2 sm:rounded-3xl"></div>
          <div className="relative bg-white shadow-lg sm:rounded-3xl p-24">
            <div className="flex flex-col items-center justify-center min-h-[500px]">
              <motion.div variants={itemVariants}>
                <CollabTitle />
              </motion.div>
              <motion.div variants={itemVariants}>
                <MemberCards onCardClick={handleCardClick} />
              </motion.div>
            </div>
          </div>
        </div>

        {selectedExperience && (
          <ExperienceModal
            experience={selectedExperience}
            isOpen={!!selectedExperience}
            onClose={handleModalClose}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

export default HomePage;
