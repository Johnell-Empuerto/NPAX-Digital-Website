import React from 'react';
import { motion as Motion } from 'framer-motion';
import PhilippineHRCongress2019 from '../assets/images/PhilippineHRCongress2019.webp';
import MusicalDay from '../assets/images/MusicalDay.webp';
import bengpartnership from '../assets/images/bengpartnership.webp';
import corner_upper_left_black from '../assets/images/corner_upper_left_black.webp';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const boxVariants = {
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

const Blog = () => {
  return (
    <div className='blog overflow-hidden py-10 bg-[#000]'>
      <div className="wrapper max-w-7xl mx-auto px-4">
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] shadow-lg overflow-hidden bg-no-repeat bg-white/10">
          
          {/* Folder Tab Design - Adapted for Blog */}
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[#000000] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-white">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[#F9AF4B] rounded-full mr-[1.25rem]"></span>
                Blogs
              </div>
            </div>
            <div 
              className="folder_right h-[68px] rounded-tr-[20px] flex-1 bg-no-repeat bg-left-top"
              style={{ backgroundImage: `url(${corner_upper_left_black})` }}
            ></div>
            <div 
              className="folder_bottom_left h-[68px] w-[68px] bg-left-bottom absolute top-[30px] left-0 flex-1 bg-no-repeat"
              style={{ backgroundImage: `url(${corner_upper_left_black})` }}
            ></div>
          </div>

          {/* Section Title - Consistent styling */}
          <h2 className="font-(family-name:--secondary-font) text-[45px] font-semibold text-center text-[#00bbff]">
            Insights & Updates
          </h2>
          <p className="font-(family-name:--secondary-font) text-[16px] text-center pb-10 text-white">
            Stay informed with the latest trends, news, and expert articles.
          </p>

          {/* Blog Grid - White cards with images, padded for consistency */}
          <Motion.div 
            className="blog-con grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Motion.div 
              className="blog-box flex flex-col text-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              variants={boxVariants}
            >
              <img src={MusicalDay} alt="NPAX Musical Day" className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <p className="date text-[14px] text-gray-500 mb-2">October 04, 2022</p>
                <p className="title text-[20px] font-(family-name:--secondary-font) font-bold text-[#2B3692] mb-4">NPAX Musical Day</p>
                <div className="w-full mt-auto flex justify-center">
                  <a
                    className="btn rounded-full hover:bg-transparent hover:border hover:border-sky-400 hover:text-sky-400 transition-all duration-200 ease-in-out cursor-pointer"
                    href=""
                  >
                    Read More
                  </a>
                </div>
              </div>
            </Motion.div>
            <Motion.div 
              className="blog-box flex flex-col text-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              variants={boxVariants}
            >
              <img src={bengpartnership} alt="B-EN-G Partnership" className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <p className="date text-[14px] text-gray-500 mb-2">September 29, 2020</p>
                <p className="title text-[20px] font-(family-name:--secondary-font) font-bold text-[#2B3692] mb-4">B-EN-G Partnership</p>
                <div className="w-full mt-auto flex justify-center">
                  <a
                    className="btn rounded-full hover:bg-transparent hover:border hover:border-sky-400 hover:text-sky-400 transition-all duration-200 ease-in-out cursor-pointer"
                    href=""
                  >
                    Read More
                  </a>
                </div>
              </div>
            </Motion.div>
            <Motion.div 
              className="blog-box flex flex-col text-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              variants={boxVariants}
            >
              <img src={PhilippineHRCongress2019} alt="Philippine HR Congress 2019" className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <p className="date text-[14px] text-gray-500 mb-2">September 29, 2020</p>
                <p className="title text-[20px] font-(family-name:--secondary-font) font-bold text-[#2B3692] mb-4">Philippine HR Congress 2019</p>
                <div className="w-full mt-auto flex justify-center">
                  <a
                    className="btn rounded-full hover:bg-transparent hover:border hover:border-sky-400 hover:text-sky-400 transition-all duration-200 ease-in-out cursor-pointer"
                    href=""
                  >
                    Read More
                  </a>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blog;