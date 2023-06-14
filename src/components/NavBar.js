import React from 'react';
import HritishResume from '../pdfs/HritishResume.pdf';
import { Link } from 'react-scroll';
import {useState} from 'react';

function Navbar() {
  const [isNavOpen,setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="fixed top-0 w-full flex bg-black text-teal-200">
     <div className="container mx-auto items-center justify-between">
            <h1 className="text-lg md:text-2xl font-bold font-roboto p-4">Hritish Mehta</h1>
     </div>
      <section className="flex lg:hidden">
        <div className="space-y-2 p-4" onClick={toggleNavbar}>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"/>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"/>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"/>
        </div>
        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"} onClick={() => setIsNavOpen(false)}>
            <div className="absolute top-2 right-2 px-8 py-8" onClick={toggleNavbar}>
                <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                 </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] ">
                 <Link
                    className="cursor-pointer hover:text-blue-300 font-roboto"
                    to="home"
                    smooth={true}
                    duration={500}
                    onClick={toggleNavbar}
                  >
                    Home
                  </Link>
                  <Link
                    className="cursor-pointer hover:text-blue-300 font-roboto"
                    to="about"
                    smooth={true}
                    duration={500}
                    onClick={toggleNavbar}
                  >
                    About
                  </Link>
                  <Link
                    className="cursor-pointer hover:text-blue-300 font-roboto"
                    to="projects"
                    smooth={true}
                    duration={500}
                    onClick={toggleNavbar}
                  >
                    Projects
                  </Link>
                  <a href={HritishResume} className="hover:text-blue-300 font-roboto">
                    Resume
                  </a>
                  <Link
                    className="cursor-pointer hover:text-blue-300 font-roboto"
                    to="contact"
                    smooth={true}
                    duration={500}
                    onClick={toggleNavbar}
                  >
                    Contact
                  </Link>
            </ul>
        </div>
      </section>
      <div className="hidden lg:flex mx-auto items-center justify-between p-4 space-x-4">
        <div className="flex space-x-6 text-sm">
          <Link
            className="cursor-pointer hover:text-blue-300 font-roboto"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer hover:text-blue-300 font-roboto"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            className="cursor-pointer hover:text-blue-300 font-roboto"
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
            className="cursor-pointer hover:text-blue-300 font-roboto"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex md:hidden">
      </div>
     <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: black;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
        `}</style>
    </nav>

  );
}

export default Navbar;
