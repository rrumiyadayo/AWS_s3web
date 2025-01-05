import React, { useState } from "react";
import Header from "../pages/Header";
import MemberCards from "../components/MemberCards";
import ExperienceModal from "../components/ExperienceModal";
import CollabTitle from "../pages/CollabTitle";
import NavigationBar from "../pages/NavigationBar";
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
        className="flex flex-col justify-center sm:pt-12"
        variants={containerVariants}
        initial="hidden"
        animate={isIntroDone ? "visible" : "hidden"}
        style={{
          position: "relative",
          zIndex: 3,
        }}
      >
        <div className="bg-gradient-to-br from-blue-100 to-bg-blue-300 bg-opacity-25 py-28">
          <Header />
        </div>
        <TriangleBackground />
        <NavigationBar />
        <div className="relative py-3 sm:max-w-full sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          ></motion.div>
          <div className="relative  shadow-lg sm:rounded-3xl">
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
        <div
          className="py-10 text-center text-black font-bold"
          style={{
            borderTop: "3px solid transparent",
            borderImage:
              "linear-gradient(to left, rgba(59, 130, 246, 1), rgba(59, 130, 246, 0.4)) 1",
            borderImageSlice: "1",
          }}
        >
          <footer>© Bluedit</footer>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HomePage;
