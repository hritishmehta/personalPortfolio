import React from 'react';
import HritishResume from '../pdfs/HritishResume.pdf';
import { Link } from 'react-scroll';

function Navbar({ scrollToSection }) {
  const handleScroll = (id) => {
    scrollToSection(id);
  };

  return (
    <nav className="bg-black text-teal-200">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex space-x-4">
          <Link
            className="hover:text-blue-300 font-roboto"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="hover:text-blue-300 font-roboto"
            to="about"
            smooth={true}
            duration={500}
          >
            About Me
          </Link>
          <Link
            className="hover:text-blue-300 font-roboto"
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <a href={HritishResume} className="hover:text-blue-300 font-roboto">
            Resume
          </a>
          <Link
            className="hover:text-blue-300 font-roboto"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
