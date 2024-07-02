// src/Typewriter.js
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterEffect = () => {
  return (
    <div className="typewriter text-center p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
        <Typewriter
          words={['Ayush, MERN STACK Web Developer']}
          loop={0}  // Setting loop to 0 makes it run infinitely
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default TypewriterEffect;
