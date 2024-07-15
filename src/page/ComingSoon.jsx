// src/components/ComingSoon.js
import React, { useEffect } from 'react';
import img from '../assets/comingSoonimgPhoto.png'
const ComingSoon = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
  }, [])
    return (
      <div className="flex items-center justify-center lg:min-h-screen bg-gray-100">
        <img 
          src={img}
          alt="Coming Soon" 
          className="max-w-full max-h-screen"
        />
      </div>
    );
  };

  
  export default ComingSoon;
