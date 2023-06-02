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
    <div className="text-black">
      <section className="flex items-center space-x-4 overflow-x-auto min-h-screen min-w-screen">
        <img
          src={professionalPortrait}
          alt="Picture of Me"
          className="object-contain max-h-96 pl-4 pt-8"
        />
        <div className="mr-4 pt-6">
          <div>
            <h2 className="text-2xl font-bold text-center pt-2 pb-4 font-combo">
              About Me
            </h2>
            <div className="border-2 border-teal-800 rounded-lg px-3 py-2 mr-4">
              <div className="flex justify-center">
                <img src={basketball} alt="Basketball" className="max-w-32 max-h-32 object-scale-down" />
                <img src={mountain} alt="Mountain" className="max-w-32 max-h-32 object-scale-down" 
                />
                <img src={naruto} alt="Naruto" className="max-w-32 max-h-32 object-scale-down"  />
              </div>
              <p className="pl-2 pr-0 pt-2 pb-2 text-center text-lg font-combo">
                Hello! Welcome to my first attempt at web development. I am currently a
                sophomore at <b>Rutgers University - New Brunswick</b> and am majoring in{' '}
                <b>Computer Science</b> and <b>Economics</b> with a minor in{' '}
                <b>Data Science</b>. I am a <b>passionate, competitive, and meticulous</b>{' '}
                individual and enjoy spending my free time playing basketball, admiring
                nature, and watching anime. As for career aspirations, I have an interest
                in <b>Machine Learning, Web Development, and Artificial Intelligence</b>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-center text-bold text-3xl pt-12">
          <b>Proficient Technologies</b>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
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