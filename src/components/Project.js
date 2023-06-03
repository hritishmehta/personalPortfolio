import React from 'react';

const Project = ({ title, description,technologies, link }) => {
  return (
    <div className="bg-teal-400 rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-2xl text-white font-bold font-roboto mb-2">{title}</h2>
      <p className=" font-roboto text-white mb-4">{description}</p>
      <p className="font-roboto text-white mb-4">{technologies}</p>      
      <a
        href={link}
        className="font-roboto text-white font-bold hover:underline hover:text-teal-200 transition-colors"
      >
        View Project
      </a>
    </div>
  );
};

export default Project;
