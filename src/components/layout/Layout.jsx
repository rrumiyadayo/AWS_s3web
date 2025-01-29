import React, { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import OpeningAnimation from "./OpeningAnimation";
import NavigationBar from "./NavigationBar";
import ScrollTopButton from "./ScrollTopButton";

function Layout({ children }) {
  const [isIntroDone, setIsIntroDone] = useState(false);
  return (
    <motion.div className="min-h-screen bg-white overflow-x-hidden relative flex flex-col">
      <OpeningAnimation onAnimationComplete={() => setIsIntroDone(true)} />
      <ScrollTopButton />
      <motion.div
        className="flex flex-col flex-1 sm:pt-16"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate={isIntroDone ? "visible" : "hidden"}
        style={{
          position: "relative",
          zIndex: 3,
        }}
      >
        { children }
        <NavigationBar />
        <div
          className="py-10 text-center text-black font-bold mt-auto"
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

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
