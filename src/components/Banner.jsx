import React from 'react';
import about_banner from '../assets/images/about_banner.jpg';

const Banner = () => {
  return (
    <div 
      className="banner relative overflow-hidden py-10 bg-[var(--color-bg-dark)] h-[600px]" 
      style={{ 
        backgroundImage: `url(${about_banner})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'top', 
        backgroundRepeat: 'no-repeat' 
      }}
    >
      {/* Overlay for contrast, matching Hero style */}
      <div className="absolute inset-0 bg-[var(--color-bg-dark-overlay)]/40"></div>
      
      <div className="wrapper relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
        <div className="banner-con text-center">
          <h1 
            className="text-[var(--color-primary)] font-bold font-(family-name:--secondary-font) text-[50px] md:text-[48px] sm:text-[38px] max-[700px]:text-[38px] max-[400px]:text-[35px]"
          >
            ABOUT US
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;