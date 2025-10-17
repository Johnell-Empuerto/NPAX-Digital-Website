import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';

// Assuming you have an up arrow icon; you can replace with your asset or use SVG
import upArrowIcon from '../assets/images/up-arrow.png'; // Add this asset or use inline SVG for premium feel

const backToTopVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: 'easeOut',
      type: 'spring',
      stiffness: 120 
    } 
  },
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Show after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#000000] backdrop-blur-xl shadow-lg border border-[#00bbff]/30 hover:border-[#00bbff] hover:shadow-[#00bbff]/50 transition-all duration-300 ease-out group"
          variants={backToTopVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          whileHover={{ scale: 1.1, rotate: 5, background: "#2a3491"}} // Premium hover animation
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src={upArrowIcon} 
            alt="Back to Top" 
            className="w-6 h-6 invert group-hover:invert-0 transition-all duration-300" // Invert for white on black, hover to blue-ish if icon allows
          />
          {/* Alternative: Inline SVG for better control and premium vector quality */}
          {/* 
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/80 group-hover:text-[#00bbff] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          */}
          {/* Subtle yellow dot accent to tie into theme */}
          <span className="absolute -top-1 -left-1 w-3 h-3 bg-[#F9AF4B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Motion.button>
      )}
    </>
  );
};

export default BackToTop;