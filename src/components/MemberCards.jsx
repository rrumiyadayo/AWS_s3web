import React from "react";
import { motion } from "framer-motion";
import CardStack from "./CardStack";
import experiencesData from "../assets/experiencesData.json";

function MemberCards({ onCardClick }) {
  return (
    <div className="flex flex-row justify-center space-x-12">
      {["メンバー 1", "メンバー 2", "メンバー 3"].map((memberName, index) => (
        <motion.div
          key={memberName}
          className="w-[30rem]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.0 + index * 0.2,
            ease: "easeOut",
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

export default MemberCards;
