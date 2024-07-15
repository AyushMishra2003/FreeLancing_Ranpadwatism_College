// src/components/ComingSoon.js
import React from 'react';
import img from '../assets/ComingSoon.jpg'
const ComingSoon = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <img 
          src={img}
          alt="Coming Soon" 
          className="max-w-full max-h-screen"
        />
      </div>
    );
  };
  
  export default ComingSoon;
