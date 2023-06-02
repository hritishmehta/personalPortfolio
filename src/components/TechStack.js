import React from 'react';

const TechStack = ({ imageURL, title, profLevel }) => {
  return (
    <div className="bg-teal-400 rounded shadow-lg flex flex-col items-center p-4 pl-4">
      <img className="h-32" src={imageURL} alt={title} />
      <p className="mt-2 text-white">{title}</p>
      <div className="bg-white h-2 rounded-full mt-2 w-full">
        <div
          className="bg-blue-500 h-full rounded-full"
          style={{ width: `${profLevel}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TechStack;