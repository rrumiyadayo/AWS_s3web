import React, { useState } from "react";
import Header from "../pages/Header";
import MemberCards from "../components/MemberCards";
import ExperienceModal from "../components/ExperienceModal";
import CollabTitle from "../pages/CollabTitle";
import { motion } from "framer-motion";

function HomePage() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleCardClick = (experience) => {
    setSelectedExperience(experience);
  };

  const handleModalClose = () => {
    setSelectedExperience(null);
  };

  return (
    <motion.div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Header />
      <div className="relative py-3 sm:max-w-full sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-2 sm:rounded-3xl"></div>
        <div className="relative bg-white shadow-lg sm:rounded-3xl p-24">
          <div className="flex flex-col items-center justify-center min-h-[500px]">
            <CollabTitle />
            <MemberCards onCardClick={handleCardClick} />
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
  );
}

export default HomePage;
