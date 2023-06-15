import React from 'react';
import TechStack from './TechStack';
import java from '../imgs/java.png';
import cLanguage from '../imgs/cLanguage.jpg';
import cssLogo from '../imgs/cssLogo.png';
import htmlLogo from '../imgs/htmlLogo.png';
import javaScriptLogo from '../imgs/javaScriptLogo.png';
import reactLogo from '../imgs/reactLogo.png';
import basketball from '../imgs/basketball.png';
import mountain from '../imgs/mountain.jpg';
import naruto from '../imgs/naruto.png';
import professionalPortrait from '../imgs/professionalPortrait.jpg';

function AboutMe() {
  const technologies = [
    {
      imageURL: java,
      title: 'Java',
      profLevel: 90
    },
    {
      imageURL: cLanguage,
      title: 'C',
      profLevel: 80
    },
    {
      imageURL: htmlLogo,
      title: 'HTML',
      profLevel: 65
    },
    {
      imageURL: cssLogo,
      title: 'CSS',
      profLevel: 65
    },
    {
      imageURL: javaScriptLogo,
      title: 'JavaScript',
      profLevel: 65
    },
    {
      imageURL: reactLogo,
      title: 'React',
      profLevel: 50
    },
  ];

  return (
    <div className="pb-20 min-h-screen min-w-screen">
      <h1 className="text-3xl fontSize-custom font-bold text-center pt-8 pb-4 ml-4 mr-4 font-roboto">
            About Me
     </h1>
      <section className="flex flex-col lg:flex-row max-w-full max-h-full items-center space-x-4 border-4 border-teal-400 rounded-lg shadow-lg mr-4 ml-4 p-4">
         <img
                src={professionalPortrait}
                alt="Picture of Me"
                className="object-cover w-40 md:w-64 rounded-lg shadow-lg hover:scale-105 transition-transform pt-6"
          />
        <div className="mr-4 pt-6">
          <div>
            <p className="text-md md:text-xl p-2 text-center font-roboto">
              Hello! Welcome to my first attempt at web development. My name is Hritish Mehta and I am currently a
              sophomore at <b>Rutgers University - New Brunswick</b> and am majoring in{' '}
              <b>Computer Science</b> and <b>Economics</b> with a minor in{' '}
              <b>Data Science</b>. I am a <b>passionate, competitive, and meticulous</b>{' '}
              individual and enjoy spending my free time playing basketball, admiring
              nature, and watching anime. As for career aspirations, I have an interest
              in <b>Machine Learning, Web Development, and Artificial Intelligence</b>
            </p>
            <div className="flex justify-center pr-5 pb-4">
              <img src={basketball} alt="Basketball" className="w-16 h-16 md:w-32 md:h-32 object-cover hover:scale-105 transition-transform" />
              <img src={mountain} alt="Mountain" className="w-16 h-16 md:w-32 md:h-32 object-cover hover:scale-105 transition-transform"
              />
              <img src={naruto} alt="Naruto" className="w-16 h-16 md:w-32 md:h-32 object-cover hover:scale-105 transition-transform"  />
            </div>
          </div>
        </div>
      </section>
      <section >
        <h1 className="text-center text-bold text-3xl pt-12 font-roboto">
          <b>Proficient Technologies</b>
        </h1>
        <div className="mr-4 ml-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 justify-center">
                {technologies.map((technology, index) => (
                  <TechStack
                    key={index}
                    imageURL={technology.imageURL}
                    title={technology.title}
                    profLevel={technology.profLevel}
                  />
                ))}
      </div>
      </section>
    </div>


  );
}

export default AboutMe;