import React from 'react';
import Project from './Project';

const Projects = () => {
  const projects = [
    {
      title: 'Photos',
      description: 'An Android project simulating a photo album allowing users to create albums, add photos, delete photos, and search for photos',
      link: 'https://github.com/hritishmehta/Photos',
    },
    {
      title: 'Chess',
      description: 'A two-user implementation of the board game chess played using the terminal.',
      link: 'https://github.com/hritishmehta/Chess',
    },
    {
      title: 'Two Level Cache Simulator',
      description: 'A project simulating a cache in which cache hits, cache misses, memory reads and memory writes are tracked based on user specified cache paramaters.',
      link: 'https://github.com/hritishmehta/CacheSimulator',
    },
  ];

  return (
    <section className="pt-24 pb-24 min-w-screen ">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;