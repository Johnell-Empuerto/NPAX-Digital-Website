import React from 'react';
import { motion as Motion } from 'framer-motion';
import management from '../assets/icons/management.png';
import world from '../assets/icons/world.png';
import manufacturing from '../assets/icons/manufacturing.png';
import logistics from '../assets/icons/logistics.png';
import government from '../assets/icons/government.png';
import enterprise from '../assets/icons/enterprise.png';

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

const Bottom = () => {
  return (
    <div className='bottom bg-gradient-to-b from-[#f0f9ff] to-white overflow-hidden py-10'>
      <div className="wrapper max-w-7xl mx-auto px-4">
        <h2 className="font-(family-name:--secondary-font) text-[45px] font-semibold text-center text-[#00bbff]">
          Who We Serve
        </h2>
        <p className="font-(family-name:--secondary-font) text-[16px] text-center pb-10">
          Smart solutions built for every business growth.
        </p>
        <Motion.div 
          className="bottom-con grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Motion.div 
            className="bottom-box text-center p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            variants={boxVariants}
          >
            <img src={manufacturing} alt="Manufacturing Icon" className="img-icon w-16 h-16 mx-auto mb-4" />
            <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[#2B3692] mb-2">Manufacturing or Production</h3>
            <p className="text-[16px] font-(family-name:--secondary-font) text-gray-700">Streamline processes, boost efficiency, and drive sustainable growth.</p>
          </Motion.div>
          
          <Motion.div 
            className="bottom-box text-center p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            variants={boxVariants}
          >
            <img src={world} alt="World Icon" className="img-icon w-16 h-16 mx-auto mb-4" />
            <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[#2B3692] mb-2">Local or International</h3>
            <p className="text-[16px] font-(family-name:--secondary-font) text-gray-700">Scale with confidence, wherever your business operates.</p>
          </Motion.div>

          <Motion.div 
            className="bottom-box text-center p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            variants={boxVariants}
          >
            <img src={enterprise} alt="Enterprise Icon" className="img-icon w-16 h-16 mx-auto mb-4" />
            <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[#2B3692] mb-2">SMB, SME or Large Enterprise</h3>
            <p className="text-[16px] font-(family-name:--secondary-font) text-gray-700">Custom strategies designed for businesses of every size.</p>
          </Motion.div>

          <Motion.div 
            className="bottom-box text-center p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            variants={boxVariants}
          >
            <img src={management} alt="Management Icon" className="img-icon w-16 h-16 mx-auto mb-4" />
            <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[#2B3692] mb-2">Product or Services Providers</h3>
            <p className="text-[16px] font-(family-name:--secondary-font) text-gray-700">Streamline processes, boost efficiency, and drive sustainable growth.</p>
          </Motion.div>

          <Motion.div 
            className="bottom-box text-center p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            variants={boxVariants}
          >
            <img src={government} alt="Government Icon" className="img-icon w-16 h-16 mx-auto mb-4" />
            <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[#2B3692] mb-2">Government or Public Sector</h3>
            <p className="text-[16px] font-(family-name:--secondary-font) text-gray-700">Empower your offerings with smarter, technology-driven solutions.</p>
          </Motion.div>

          <Motion.div 
            className="bottom-box text-center p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            variants={boxVariants}
          >
            <img src={logistics} alt="Logistics Icon" className="img-icon w-16 h-16 mx-auto mb-4" />
            <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[#2B3692] mb-2">Logistics or Distribution</h3>
            <p className="text-[16px] font-(family-name:--secondary-font) text-gray-700">Optimize supply chains and accelerate delivery performance.</p>
          </Motion.div>
        </Motion.div>
      </div>
    </div>
  );
};

export default Bottom;