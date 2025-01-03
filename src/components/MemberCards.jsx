import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import CardStack from "./CardStack";
import experiencesData from "../assets/experiencesData.json";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function MemberCards({ onCardClick }) {
  const members = ["メンバー 1", "メンバー 2", "メンバー 3"];

  return (
    <div className="flex flex-row justify-center space-x-12">
      {members.map((memberName, index) => (
        <motion.div
          key={memberName}
          className="w-[30rem]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1.0 + index * 0.2,
          }}
        >
          <CardStack
            memberName={memberName}
            experiences={experiencesData[`member${index + 1}`]}
            onCardClick={onCardClick}
          />
        </motion.div>
      ))}
    </div>
  );
}
MemberCards.propTypes = {
  onCardClick: PropTypes.func.isRequired,
};

export default MemberCards;
