import React from 'react';
import Project from './Project';

const Projects = () => {
  const projects = [
    {
      title: 'Photos',
      description: 'An Android project simulating a photo album allowing users to create albums, add photos, delete photos, and search for photos',
      technologies: "Java, AndroidStudio, GIT Version Control",
      link: 'https://github.com/hritishmehta/Photos',
    },
    {
      title: 'Chess',
      description: 'A two-user implementation of the board game chess played using the terminal.',
      technologies: 'Java, GIT Version Control',
      link: 'https://github.com/hritishmehta/Chess',
    },
    {
      title: 'Two Level Cache Simulator',
      description: 'A project simulating a cache in which cache hits, cache misses, memory reads and memory writes are tracked based on user specified cache paramaters.',
      technologies: 'C, GIT Version Control',
      link: 'https://github.com/hritishmehta/CacheSimulator',
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A personal portfolio website creating using React and styled with TailwindCSS.',
      technologies: 'React, JavaScript, HTML, Tailwind CSS, EmailJS, GIT Version Control',
      link: 'https://hritishmehta.github.io/personalPortfolio/'
    }
  ];

  return (
    <section className="pt-20 pb-24 min-w-screen min-h-screen bg-black ">
      <h1 className="text-3xl font-bold font-roboto text-teal-200 mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 ml-4 mr-4">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;