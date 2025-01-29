import React, { useState } from "react";
import { motion } from "framer-motion";

import Header from "./Header"
import CollabTitle from "./CollabTitle";
import ExperiencePage from "./Experiences";

import CollaborationMemberCards from "../../components/CollaborationMemberCards";
import ExperienceModal from "../../components/CollaborationModal";
import TriangleBackground from "../../components/TriangleBackground";
import Layout from "../../components/Layout/Layout";

function HomePage() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleCardClick = (experience) => {
    setSelectedExperience(experience);
  };

  const handleModalClose = () => {
    setSelectedExperience(null);
  };

  return (
    <Layout>
          <div className="flex-grow py-28 bg-gradient-to-br from-blue-100 to-bg-blue-300 bg-opacity-25">
            <Header />
          </div>
          <TriangleBackground />
          <div className="relative py-3 sm:max-w-full sm:px-6 lg:px-8">
            <div className="relative shadow-lg sm:rounded-3xl">
              <div className="flex flex-col items-center justify-center">
                <motion.div
                  variants={{
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
                  }}
                >
                  <div className="mt-28">
                    <CollabTitle />
                  </div>
                  <CollaborationMemberCards onCardClick={handleCardClick} />
                </motion.div>
              </div>
            </div>
          </div>
          <ExperiencePage/>
          {selectedExperience && (
            <ExperienceModal
              experience={selectedExperience}
              isOpen={!!selectedExperience}
              onClose={handleModalClose}
            />
          )}
    </Layout>
  );
}

export default HomePage;
