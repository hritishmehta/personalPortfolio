import React from 'react';

const Project = ({ title, description,technologies, link }) => {
  return (
    <div className="bg-teal-400 rounded-lg shadow-md p-6 mb-4 hover:scale-105 transition-transform">
      <h2 className="text-md md:text-xl lg:text-2xl text-white font-bold font-roboto mb-2">{title}</h2>
      <p className="text-xs md:text-lg lg:text-xl font-roboto text-white mb-4">{description}</p>
      <p className="text-xs md:text-lg lg:text-xl font-roboto text-white mb-4">{technologies}</p>
      <a
        href={link}
        className="text-xs md:text-lg lg:text-xl font-roboto text-white font-bold hover:underline hover:bg-grey hover:text-teal-200 transition-colors"
      >
        View Project
      </a>
    </div>
  );
};

export default Project;
