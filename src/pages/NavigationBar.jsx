import React from "react";
import { motion } from "framer-motion";
import MotionHoverUp from "../components/MotionHoverUp";

function NavigationBar() {
  return (
    <motion.div
      className="text-center mb-8 mt-20"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
    >
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/">
            <MotionHoverUp hoverY={-2} className="flex items-center">
              <motion.img
                src="/bluedit.png"
                alt="Bluedit Logo"
                className="h-10 w-auto mr-1"
              />
              <motion.img
                src="/logow.png"
                alt="Bluedit Logo"
                className="h-8 w-auto"
              />
            </MotionHoverUp>


            </a>
            <div className="flex space-x-8">
              {["About", "コラボ", "メンバーの経験"].map(
                (item) => (
                  <MotionHoverUp
                    key={item}
                    hoverY={-2}
                    className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                    style={{ cursor: "pointer" }}
                  >
                    <a href={
                      item === "About" ? "#about" :
                      item === "コラボ" ? "#コラボ" :
                      item === "メンバーの経験" ? "#メンバーの経験" : ""
                    }>
                      {item}
                    </a>
                  </MotionHoverUp>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}

export default NavigationBar;
