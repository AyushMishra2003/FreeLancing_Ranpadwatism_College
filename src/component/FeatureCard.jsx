import React from 'react';
// import './FeatureCard.css';
import { Link } from 'react-router-dom';
const FeatureCard = ({ title, image,link }) => {
  console.log(link);
  return (
    <Link to={link} className='no-underline'>
    <div className='feature-card flex flex-col items-center justify-center cursor-pointer border border-red-500 bg-[#ee9494f8] p-4 shadow-[5px_10px_5px_#b6b7ba] rounded-full w-[12rem] h-[12rem] text-white ' >
      <img src={image} alt={title} className='mb-4'/>
      <p className='text-[1.5rem] text-center cursor-pointer'>{title}</p>
    </div>
    </Link>
  );
};

export default FeatureCard;
