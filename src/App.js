import React, { useRef, useEffect, useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import NavBar from './components/NavBar';

function App() {


  return (
    <div id="root">
      <div>
        <NavBar className/>
      </div>
      <div>
            <div id='home' >
              <HomePage />
            </div>
            <div id='about' >
              <AboutMe />
            </div>
            <div id='projects'>
              <Projects />
            </div>
            <div id = 'contact' >
              <ContactMe/>
            </div>
      </div>
    </div>
  );
}

export default App;