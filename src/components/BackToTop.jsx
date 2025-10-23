import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';

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
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-[#000000] backdrop-blur-xl shadow-lg border border-[#00bbff]/10 dark:border-[#00bbff]/30 hover:border-[#00bbff] hover:shadow-[#00bbff]/50 transition-all duration-300 ease-out group"
          variants={backToTopVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "#2a3491"}} // Premium hover animation
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800 dark:text-white/80 group-hover:text-[#00bbff] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          {/* Subtle yellow dot accent to tie into theme */}
          <span className="absolute -top-1 -left-1 w-3 h-3 bg-[#F9AF4B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Motion.button>
      )}
    </>
  );
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <Motion.button
      onClick={toggleTheme}
      className="fixed bottom-24 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-[#000000] backdrop-blur-xl shadow-lg border border-[#00bbff]/10 dark:border-[#00bbff]/30 hover:border-[#00bbff] hover:shadow-[#00bbff]/50 transition-all duration-300 ease-out group"
      variants={backToTopVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "#2a3491"}}
      whileTap={{ scale: 0.95 }}
    >
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800 dark:text-white/80 group-hover:text-[#00bbff] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800 dark:text-white/80 group-hover:text-[#00bbff] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
      {/* Subtle yellow dot accent to tie into theme */}
      <span className="absolute -top-1 -left-1 w-3 h-3 bg-[#F9AF4B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </Motion.button>
  );
};

export { BackToTop, ThemeToggle };