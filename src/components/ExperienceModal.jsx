import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ExperienceModal({ experience, isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      const randomDirection = Math.random() < 0.5 ? 1 : -1; // 1 for right, -1 for left
      const randomRotation = (Math.random() * 10 + 5) * randomDirection; // Random rotation between 5 and 15 degrees

      modalRef.current.animate(
        [
          { opacity: 0, y: 50, rotate: `${randomRotation}deg`, scale: 0.9 },
          { opacity: 1, y: 0, rotate: "0deg", scale: 1 },
        ],
        {
          duration: 0.2 * 1000, // milliseconds
          easing: "ease-out",
          fill: "forwards",
        }
      );
    }
  }, [isOpen]);

  const exitAnimation = () => {
    if (modalRef.current) {
      const randomDirection = Math.random() < 0.5 ? 1 : -1;
      const randomRotation = -(Math.random() * 10 + 5) * randomDirection; // Opposite rotation for exit

      modalRef.current.animate(
        [
          { opacity: 1, y: 0, rotate: "0deg", scale: 1 },
          { opacity: 0, y: 50, rotate: `${randomRotation}deg`, scale: 0.9 },
        ],
        {
          duration: 0.3 * 1000,
          easing: "ease-in",
          fill: "forwards",
        }
      ).onfinish = onClose;
    } else {
      onClose();
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence onExitComplete={() => {}}>
      {isOpen && (
        <>
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={exitAnimation}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
          <div
            ref={modalRef}
            className="fixed inset-0 m-auto w-[90%] max-w-2xl h-fit max-h-[80vh] bg-white rounded-xl shadow-2xl z-50 overflow-auto"
            style={{
              opacity: 0,
              transform: "translateY(50px) rotate(0deg) scale(0.9)",
            }}
          >
            <div className="p-8">
              <button
                onClick={exitAnimation}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <h2 className="text-3xl font-bold mb-4">{experience.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {experience.summary}
              </p>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ExperienceModal;
