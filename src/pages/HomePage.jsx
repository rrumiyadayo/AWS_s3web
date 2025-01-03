import React, { useState } from "react";
import Header from "../pages/Header";
import MemberCards from "../components/MemberCards";
import ExperienceModal from "../components/ExperienceModal";
import CollabTitle from "../pages/CollabTitle";
import { motion } from "framer-motion";
import OpeningAnimation from "./OpeningAnimation";
import TriangleBackground from "../components/TriangleBackground";

function HomePage() {
  const [isIntroDone, setIsIntroDone] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

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

  return (
    <motion.div className="min-h-screen bg-white overflow-x-hidden relative">
      <OpeningAnimation onAnimationComplete={() => setIsIntroDone(true)} />

      <motion.div
        className="py-6 flex flex-col justify-center sm:py-12"
        variants={containerVariants}
        initial="hidden"
        animate={isIntroDone ? "visible" : "hidden"}
        style={{
          position: "relative",
          zIndex: 3,
        }}
      > 
        <TriangleBackground />
        <Header />
        
        <div className="relative py-3 sm:max-w-full sm:px-6 lg:px-8">
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-0 sm:rounded-3xl"></div>
          </motion.div>
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
