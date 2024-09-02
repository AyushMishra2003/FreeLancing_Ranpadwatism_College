import React from 'react';
import image from '../assets/slider_1.jpg';

const MainSlider = () => {
  return (
    <div
      className="w-full bg-cover bg-center mt-[150px] h-[700px] lg:min-h-[475px] lg:h-[calc(100vw/1.714)] md:mt-[100px] sm:mt-[70px] sm:h-[calc(100vh-70px)] sm:min-h-auto"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full">
          <div className="w-3/5">
            <div className="pt-[19%]">
              <h6 className="font-medium uppercase mb-[29px] lg:mb-[23px] lg:pr-[15px] sm:mb-[15px] sm:text-[24px]">
                Spring / Summer Collection 2024
              </h6>
              <h1 className="font-normal leading-none sm:text-[24px]">Get up to 30% Off New Arrivals</h1>
              <div className="flex items-center justify-center w-[140px] h-[40px] bg-[#fe4c50] rounded-[3px] mt-[32px] lg:mt-[26px] md:mt-[23px] sm:mt-[15px] sm:w-[100px] sm:h-[35px] transition-all duration-300 ease-in-out hover:bg-[#FE7C7F]">
                <a href="#" className="block text-white uppercase text-[14px] sm:text-[10px] font-medium text-center leading-[40px] sm:leading-[35px] w-full">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
