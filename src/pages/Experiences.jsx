// Experiences.jsx
import React from 'react';
import { motion } from 'framer-motion';
import experiences from '../assets/experienceData.json';

const Experiences = () => {

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8 md:px-72">
        <h2 className="text-3xl font-bold text-left mb-12">クラブ活動の体験</h2>
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={`shadow-md rounded-lg overflow-hidden ${index % 2 === 1 ? 'md:order-last' : 'md:order-first'}`}>
              <img
                src={experience.image}
                alt={experience.imageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className={`${index % 2 === 1 ? 'md:order-first' : 'md:order-last'}`}>
              <h3 className="text-3xl font-bold text-black mb-8">{experience.topic}</h3>
              <p className="text-gray-800 leading-relaxed">{experience.description}</p>
              <p className="text-sm text-gray-500 mt-4">投稿者: {experience.member}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;