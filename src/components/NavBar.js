import React from 'react';
import HritishResume from '../pdfs/HritishResume.pdf';

function Navbar({ scrollToSection }) {
  const handleScroll = (id) => {
    scrollToSection(id);
  };

  return (
    <nav className="bg-black text-teal-200">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex space-x-4">
          <button className="hover:text-blue-300" onClick={() => handleScroll('home')}>
            Home
          </button>
          <button className="hover:text-blue-300" onClick={() => handleScroll('about')}>
            About Me
          </button>
          <button className="hover:text-blue-300" onClick={() => handleScroll('projects')}>
            Projects
          </button>
          <a href={HritishResume} className="hover:text-blue-300">Resume</a>
          <button className="hover:text-blue-300" onClick={() => handleScroll('contact')}>
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
