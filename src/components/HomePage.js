import React, { useState, useEffect } from 'react';

function HomePage() {
  const [text, setText] = useState('');
  const [fullText, setFullText] = useState('I am a Software Engineer');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeoutId = setTimeout(() => {
        setText((prevText) => prevText + fullText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [index, fullText]);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center ">
      <div className="text-center">
        <h1 className="text-xl lg:text-3xl font-bold font-roboto mb-4 text-teal-200">
          <i>Hi! My name is Hritish Mehta</i>
        </h1>
        <p className="text-md lg:text-3xl text-teal-200 font-roboto">{text}</p>
      </div>
    </div>
  );
}

export default HomePage;
