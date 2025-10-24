import React from 'react';
import about_banner from '../assets/images/about_banner.jpg';
import analytics_banner from '../assets/images/analytics_banner.jpg'; 
import motionboard_banner from '../assets/images/motionboard_banner.jpg'; 
import { useLocation } from 'react-router-dom';

const Banner = () => {

  const location = useLocation();
  const path = location.pathname; // e.g. '/about' or '/analytics'


  // Default values
  let bannerImage = about_banner;
  let bannerTitle = "ABOUT US";

  // Conditional setup
  if (path === '/analytics') {
    bannerImage = analytics_banner;
    bannerTitle = "ADVANCED ANALYTICS";
  } else if (path === '/about') {
    bannerImage = about_banner;
    bannerTitle = "ABOUT US";
  } else if (path === '/motionboard') {
    bannerImage = motionboard_banner;
    bannerTitle = "BI AND DASHBOARDING";
  } 
  // You can add more:
  // else if (path === '/contact') { ... }



  return (
    <div 
      className="banner relative overflow-hidden py-10 bg-[var(--color-bg-dark)] h-[600px]" 
      style={{ 
        backgroundImage: `url(${bannerImage})`, 
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
            {bannerTitle}

          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;