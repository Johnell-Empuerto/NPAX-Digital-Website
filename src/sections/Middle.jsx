import React from 'react';
import { motion as Motion } from 'framer-motion';
import HR_Management from '../assets/video/HR_Management.mp4';
import Digital_Transformation from '../assets/video/Digital_Transformation.mp4';
import Accounting_Solution from '../assets/video/Accounting_Solution.mp4';
import Transforming_Data from '../assets/video/Transforming_Data.mp4';
import LazyVideo from '../components/LazyVideo'; // Adjust the path if needed

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
    <div className="middle bg-gradient-to-b from-[#f0f9ff] to-white overflow-hidden py-10">
      <div className="wrapper max-w-7xl mx-auto px-4">
        <h2 className="font-(family-name:--secondary-font) text-[45px] font-semibold text-center text-[#00bbff]">
          Our Solutions
        </h2>
        <p className="font-(family-name:--secondary-font) text-[16px] text-center pb-10">
          Amazing things made possible by Great People™
        </p>
        <div className="middle-con space-y-12">
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
              />
            </div>
            <div className="middle-box w-full md:w-1/2 text-center md:text-left p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[#2B3692] mb-4">
                Companion to HR Management
              </h3>
              <p className="text-[16px] font-(family-name:--secondary-font) text-gray-700">
                Streamline HR process using an end-to-end packaged solution. Fast and accurate payroll, customizable to business compliance, integratable with 100% support.
              </p>
              <div className="w-full mt-5 flex justify-center md:justify-start">
                <a
                  className="btn rounded-full hover:bg-transparent hover:border hover:border-sky-400 hover:text-sky-400 transition-all duration-200 ease-in-out cursor-pointer"
                  href=""
                >
                  See More
                </a>
              </div>
            </div>
          </Motion.div>

          {/* Row 2: Content - Video */}
          <Motion.div
            className="row flex items-center gap-8"
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="middle-box w-full md:w-1/2 text-center md:text-left p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[#2B3692] mb-4">
                Compact Global Accounting Solution
              </h3>
              <p className="text-[16px] font-(family-name:--secondary-font) text-gray-700">
                Effectively manage meticulous financial information with a comprehensive computerized accounting solution. Ensure statutory compliance, avoid penalty and charges. Inclusive with standard EPR solution.
              </p>
              <div className="w-full mt-5 flex justify-center md:justify-start">
                <a
                  className="btn rounded-full hover:bg-transparent hover:border hover:border-sky-400 hover:text-sky-400 transition-all duration-200 ease-in-out cursor-pointer"
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
                // poster="/path/to/accounting-thumbnail.jpg" // Add if you have one
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
                // poster="/path/to/data-thumbnail.jpg" // Add if you have one
              />
            </div>
            <div className="middle-box w-full md:w-1/2 text-center md:text-left p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[#2B3692] mb-4">
                Transforming Data into Amazing Insights
              </h3>
              <p className="text-[16px] font-(family-name:--secondary-font) text-gray-700">
                Aim to make predictions that will give you a field of vision for the future of your business beyond human capabilities. This is where innovation meets foresight.
              </p>
              <div className="w-full mt-5 flex justify-center md:justify-start">
                <a
                  className="btn rounded-full hover:bg-transparent hover:border hover:border-sky-400 hover:text-sky-400 transition-all duration-200 ease-in-out cursor-pointer"
                  href=""
                >
                  See More
                </a>
              </div>
            </div>
          </Motion.div>

          {/* Row 4: Content - Video */}
          <Motion.div
            className="row flex items-center gap-8"
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="middle-box w-full md:w-1/2 text-center md:text-left p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[#2B3692] mb-4">
                Digital Transformation
              </h3>
              <p className="text-[16px] font-(family-name:--secondary-font) text-gray-700">
                Elevating the business model and process through an innovative integrated approach driven by strategic industry experts. Together, we turn challenges into opportunities for growth.
              </p>
              <div className="w-full mt-5 flex justify-center md:justify-start">
                <a
                  className="btn rounded-full hover:bg-transparent hover:border hover:border-sky-400 hover:text-sky-400 transition-all duration-200 ease-in-out cursor-pointer"
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
                // poster="/path/to/digital-thumbnail.jpg" // Add if you have one
              />
            </div>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default Middle;