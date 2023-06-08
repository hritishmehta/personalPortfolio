import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import NavBar from './components/NavBar';

function App() {

  const scrollRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  };

  const [navbarFixed, setNavbarFixed] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const headerHeight = headerRef.current.offsetHeight;

      if (scrollTop > headerHeight) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(scrollTop > 5);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToSection = (id) => {
    const element = scrollRefs[id].current;
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <div id="root">
      <div ref={headerRef}>
        <Header />
      </div>
      <div
        className={`fixed top-0 left-0 right-0 w-full z-50 ${
          navbarFixed ? 'transform translate-y-0' : 'transform translate-y-full'
        }`}
        style={{ transition: 'transform 0.5s ease' }}
      >
        <NavBar scrollToSection={scrollToSection}/>
      </div>
      <div
        className={`${navbarFixed ? 'pt-15' : 'mt-15'}`}
        style={{ transition: 'padding-top 0.05s ease' }}
      >
            <div id='home' ref={scrollRefs.home} >
              <HomePage />
            </div>
            <div id='about' ref={scrollRefs.about} >
              <AboutMe />
            </div>
            <div id='projects' ref={scrollRefs.projects} >
              <Projects />
            </div>
            <div id = 'contact' ref={scrollRefs.contact}>
              <ContactMe/>
            </div>
      </div>
    </div>
  );
}

export default App;