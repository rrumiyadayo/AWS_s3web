import React from 'react';
import { Link } from 'react-router-dom';

function Card({ experience }) {
  return (
    <Link
      to={`/experience/${experience.slug}`}
      className="block bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
      <p className="text-gray-700">{experience.summary}</p>
    </Link>
  );
}

export default Card;
