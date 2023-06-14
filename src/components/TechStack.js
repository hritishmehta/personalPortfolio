import React from 'react';

const TechStack = ({ imageURL, title, profLevel }) => {
  return (
    <div className="max-w-auto max-h-auto mr-4 ml-4 bg-teal-400 rounded shadow-lg flex flex-col items-center pr-4 pl-4 pb-4 hover:scale-105 transition-transform">
      <img className="h-16 md:h-32 mt-2" src={imageURL} alt={title} />
      <p className="text-xs md:text-sm mt-2 text-white font-roboto">{title}</p>
      <div className="bg-white h-2 rounded-full mt-2 w-full">
        <div
          className="bg-blue-500 h-full rounded-full mb-4"
          style={{ width: `${profLevel}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TechStack;