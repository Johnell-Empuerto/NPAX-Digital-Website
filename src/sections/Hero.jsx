import React, { useState, useRef } from 'react';
import { motion as Motion } from 'framer-motion';
import HeroVideo from '../assets/video/hero-video.mp4';
import herothumbnail from '../assets/images/hero-thumbnail.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="hero relative h-[100dvh] overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={HeroVideo}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={handleVideoLoaded}
        poster={herothumbnail}
      />

      {/* 🖼️ Overlay (optional, for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 wrapper h-[100%]">
        <Motion.div
          className="hero-con text-white h-[100%] flex justify-center items-center flex-col gap-[20px] text-center"
          variants={containerVariants}
          initial="hidden"
          animate={videoLoaded ? "visible" : "hidden"}
        >
          <Motion.h2
            className="text-[50px] font-(family-name:--secondary-font) w-[730px] font-bold text-sky-400"
            variants={childVariants}
          >
            Future-Proof Your Business with Our Amazing Solutions™
          </Motion.h2>
          <Motion.p
            className="text-[18px] w-[600px] font-(family-name:--secondary-font) font-extralight"
            variants={childVariants}
          >
            From strategy to execution, we deliver tailored IT solutions that drive growth, enhance efficiency, and ensure long-term success. With proven expertise and global trust, we help you achieve your next big milestone with confidence.
          </Motion.p>
          <Motion.div
            className="btn-con flex gap-[18px] font-(family-name:--secondary-font)"
            variants={childVariants}
          >
            <div className="btn rounded-full hover:bg-transparent hover:border-3 hover:border-sky-400 transition-all duration-100 ease-in-out cursor-pointer">
              Learn More
            </div>
            <div className="btn bg-transparent border-sky-400 hover:bg-[#2B3692] hover:text-white border-3 rounded-full hover:border-[#2B3692] transition-all duration-300 ease-in-out cursor-pointer">
              Get Started
            </div>
          </Motion.div>
        </Motion.div>
      </div>
    </div>
  );
};

export default Hero;