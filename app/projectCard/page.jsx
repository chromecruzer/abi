import React from 'react';

const ProjectCard = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-900">{description}</p>
    </div>
  );
};

export default ProjectCard;
