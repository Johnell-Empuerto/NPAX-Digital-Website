import React, { useState, useRef } from "react";
import { motion as Motion } from "framer-motion";
import HeroVideo from "../assets/video/hero-video.mp4";
import herothumbnail from "../assets/images/hero-thumbnail.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.8,
      ease: "easeOut",
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
      ease: "easeOut",
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
    <div className="hero relative h-[100dvh] overflow-hidden bg-black">
      {/* 🎥 Background video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover px-5 rounded-[20px] max-[1000px]:px-0 max-[1000px]:rounded-none"
        src={HeroVideo}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={handleVideoLoaded}
        poster={herothumbnail}
      />

      {/* 🖤 Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🧩 Hero Content */}
      <div className="relative z-10 h-full flex justify-center items-center text-center px-4">
        <Motion.div
          className="text-white flex flex-col items-center justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={videoLoaded ? "visible" : "hidden"}
        >
          {/* 🌟 Title */}
          <Motion.h2
            className="text-sky-400 font-bold font-(family-name:--secondary-font) text-[50px] md:text-[48px] sm:text-[38px] max-w-[730px] w-full max-[700px]:text-[38px] max-[400px]:text-[35px]"
            variants={childVariants}
          >
            Future-Proof Your Business with Our Amazing Solutions™
          </Motion.h2>

          {/* 💬 Subtitle */}
          <Motion.p
            className="text-[18px] sm:text-[16px] max-w-[600px] w-full font-extralight font-(family-name:--secondary-font) text-gray-200"
            variants={childVariants}
          >
            From strategy to execution, we deliver tailored IT solutions that drive growth,
            enhance efficiency, and ensure long-term success. With proven expertise and global trust,
            we help you achieve your next big milestone with confidence.
          </Motion.p>

          {/* 🔘 Buttons */}
          <Motion.div
            className="flex flex-wrap justify-center gap-4 font-(family-name:--secondary-font)"
            variants={childVariants}
          >
            <div className="btn rounded-full px-6 py-2 border border-sky-400 hover:bg-transparent hover:border-3 hover:border-sky-400 transition-all duration-200 ease-in-out cursor-pointer">
              Learn More
            </div>
            <div className="btn bg-transparent border-sky-400 border-3 rounded-full px-6 py-2 hover:bg-[#2B3692] hover:text-white hover:border-[#2B3692] transition-all duration-300 ease-in-out cursor-pointer">
              Get Started
            </div>
          </Motion.div>
        </Motion.div>
      </div>
    </div>
  );
};

export default Hero;
