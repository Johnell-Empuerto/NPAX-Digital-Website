import React from 'react';
import { motion as Motion } from 'framer-motion';
import HR_Management from '../assets/video/HR_Management.mp4';
import Digital_Transformation from '../assets/video/Digital_Transformation.mp4';
import Accounting_Solution from '../assets/video/Accounting_Solution.mp4';
import Transforming_Data from '../assets/video/Transforming_Data.mp4';
// Add poster imports
import HR_Poster from '../assets/images/hr_management_poster.png';
import Accounting_Poster from '../assets/images/accounting_solution_poster.png';
import Data_Poster from '../assets/images/transforming_data_poster.png';
import Digital_Poster from '../assets/images/digital_transformation_poster.png';
import LazyVideo from '../components/LazyVideo'; // Adjust the path if needed
import corner_upper_left_black from '../assets/images/corner_upper_left_black.webp';


const rowVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Middle = () => {
  return (
    <div className="middle overflow-hidden py-10 bg-[var(--color-bg-dark)]">
      <div className="wrapper max-w-7xl mx-auto px-4">
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] shadow-lg overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)]">


          
          {/* Featured Badge in Top Left - Reference Structure */}
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-text-light)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                Featured
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

          {/* Section Title */}
          <h2 className="font-(family-name:--secondary-font) text-[45px] font-semibold text-center text-[var(--color-primary)]">
            Our Solutions
          </h2>
          <p className="font-(family-name:--secondary-font) text-[16px] text-center pb-10 text-[var(--color-text-light)]">
            Amazing things made possible by Great People™
          </p>

          {/* Content Rows */}
          <div className="middle-con space-y-12 px-8 pb-10">

            {/* Row 1: Video - Content */}
            <Motion.div
              className="row flex flex-col md:flex-row items-center gap-8"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="video-con w-full md:w-1/2">
                <LazyVideo
                  src={HR_Management}
                  className="w-full h-auto rounded-2xl shadow-lg object-cover"
                  poster={HR_Poster}
                  preload="none"
                />
              </div>
              <div className="middle-box w-full md:w-1/2 text-center md:text-left p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-4">
                  Companion to HR Management
                </h3>
                <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">
                  Streamline HR process using an end-to-end packaged solution. Fast and accurate payroll, customizable to business compliance, integratable with 100% support.
                </p>
                <div className="w-full mt-5 flex justify-center md:justify-start">
                  <a
                    className="btn rounded-full hover:bg-transparent hover:border hover:border-[var(--color-sky)] hover:text-[var(--color-sky)] transition-all duration-200 ease-in-out cursor-pointer"
                    href=""
                  >
                    See More
                  </a>
                </div>
              </div>
            </Motion.div>

            {/* Row 2: Content - Video */}
            <Motion.div
              className="flex flex-col-reverse md:flex-row items-center gap-8"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="middle-box w-full md:w-1/2 text-center md:text-left p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-4">
                  Compact Global Accounting Solution
                </h3>
                <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">
                  Effectively manage meticulous financial information with a comprehensive computerized accounting solution. Ensure statutory compliance, avoid penalty and charges. Inclusive with standard EPR solution.
                </p>
                <div className="w-full mt-5 flex justify-center md:justify-start">
                  <a
                    className="btn rounded-full hover:bg-transparent hover:border hover:border-[var(--color-sky)] hover:text-[var(--color-sky)] transition-all duration-200 ease-in-out cursor-pointer"
                    href=""
                  >
                    See More
                  </a>
                </div>
              </div>
              <div className="video-con w-full md:w-1/2">
                <LazyVideo
                  src={Accounting_Solution}
                  className="w-full h-auto rounded-2xl shadow-lg object-cover"
                  poster={Accounting_Poster}
                  preload="none"
                />
              </div>
            </Motion.div>

            {/* Row 3: Video - Content */}
            <Motion.div
              className="row flex flex-col md:flex-row items-center gap-8"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="video-con w-full md:w-1/2">
                <LazyVideo
                  src={Transforming_Data}
                  className="w-full h-auto rounded-2xl shadow-lg object-cover"
                  poster={Data_Poster}
                  preload="none"
                />
              </div>
              <div className="middle-box w-full md:w-1/2 text-center md:text-left p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-4">
                  Transforming Data into Amazing Insights
                </h3>
                <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">
                  Aim to make predictions that will give you a field of vision for the future of your business beyond human capabilities. This is where innovation meets foresight.
                </p>
                <div className="w-full mt-5 flex justify-center md:justify-start">
                  <a
                    className="btn rounded-full hover:bg-transparent hover:border hover:border-[var(--color-sky)] hover:text-[var(--color-sky)] transition-all duration-200 ease-in-out cursor-pointer"
                    href=""
                  >
                    See More
                  </a>
                </div>
              </div>
            </Motion.div>

            {/* Row 4: Content - Video */}
            <Motion.div
              className="flex flex-col-reverse md:flex-row items-center gap-8"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="middle-box w-full md:w-1/2 text-center md:text-left p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-4">
                  Digital Transformation
                </h3>
                <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">
                  Elevating the business model and process through an innovative integrated approach driven by strategic industry experts. Together, we turn challenges into opportunities for growth.
                </p>
                <div className="w-full mt-5 flex justify-center md:justify-start">
                  <a
                    className="btn rounded-full hover:bg-transparent hover:border hover:border-[var(--color-sky)] hover:text-[var(--color-sky)] transition-all duration-200 ease-in-out cursor-pointer"
                    href=""
                  >
                    See More
                  </a>
                </div>
              </div>
              <div className="video-con w-full md:w-1/2">
                <LazyVideo
                  src={Digital_Transformation}
                  className="w-full h-auto rounded-2xl shadow-lg object-cover"
                  poster={Digital_Poster}
                  preload="none"
                />
              </div>
            </Motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;