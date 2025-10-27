import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import management from '../assets/icons/management.png';
import world from '../assets/icons/world.png';
import manufacturing from '../assets/icons/manufacturing.png';
import logistics from '../assets/icons/logistics.png';
import government from '../assets/icons/government.png';
import enterprise from '../assets/icons/enterprise.png';
import corner_upper_left_black from '../assets/images/corner_upper_left_black.webp';
import corner_upper_left_white from '../assets/images/corner_upper_left_white.webp';

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
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    handleThemeChange();

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const cornerImage = isDark ? corner_upper_left_black : corner_upper_left_white;

  return (
    <div className='bottom overflow-hidden py-10 bg-[var(--color-bg-dark)]'>
      <div className="wrapper max-w-7xl mx-auto px-4">
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)]">
          
          {/* Featured Badge in Top Left - Adapted for "Who We Serve" */}
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                Our Reach
              </div>
            </div>
            <div 
              className="folder_right h-[68px] rounded-tr-[20px] flex-1 bg-no-repeat bg-left-top"
              style={{ backgroundImage: `url(${cornerImage})` }}
            ></div>
            <div 
              className="folder_bottom_left h-[68px] w-[68px] bg-left-bottom absolute top-[30px] left-0 flex-1 bg-no-repeat"
              style={{ backgroundImage: `url(${cornerImage})` }}
            ></div>
          </div>

          {/* Section Title - Aligned with Middle section styling */}
          <h2 className="font-(family-name:--secondary-font) text-[45px] max-[600px]:text-[30px] font-semibold text-center text-[var(--color-primary)]">
            Who We Serve
          </h2>
          <p className="font-(family-name:--secondary-font) text-[16px] text-center pb-10 text-[var(--color-text-light)]">
            Smart solutions built for every business growth.
          </p>

          {/* Content Grid - Using white cards for contrast like Middle, with hover effects */}
          <Motion.div 
            className="bottom-con grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-10"
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
              <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-2">Manufacturing or Production</h3>
              <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">Streamline processes, boost efficiency, and drive sustainable growth.</p>
            </Motion.div>
            
            <Motion.div 
              className="bottom-box text-center p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={boxVariants}
            >
              <img src={world} alt="World Icon" className="img-icon w-16 h-16 mx-auto mb-4" />
              <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-2">Local or International</h3>
              <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">Scale with confidence, wherever your business operates.</p>
            </Motion.div>

            <Motion.div 
              className="bottom-box text-center p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={boxVariants}
            >
              <img src={enterprise} alt="Enterprise Icon" className="img-icon w-16 h-16 mx-auto mb-4" />
              <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-2">SMB, SME or Large Enterprise</h3>
              <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">Custom strategies designed for businesses of every size.</p>
            </Motion.div>

            <Motion.div 
              className="bottom-box text-center p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={boxVariants}
            >
              <img src={management} alt="Management Icon" className="img-icon w-16 h-16 mx-auto mb-4" />
              <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-2">Product or Services Providers</h3>
              <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">Streamline processes, boost efficiency, and drive sustainable growth.</p>
            </Motion.div>

            <Motion.div 
              className="bottom-box text-center p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={boxVariants}
            >
              <img src={government} alt="Government Icon" className="img-icon w-16 h-16 mx-auto mb-4" />
              <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-2">Government or Public Sector</h3>
              <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">Empower your offerings with smarter, technology-driven solutions.</p>
            </Motion.div>

            <Motion.div 
              className="bottom-box text-center p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={boxVariants}
            >
              <img src={logistics} alt="Logistics Icon" className="img-icon w-16 h-16 mx-auto mb-4" />
              <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-2">Logistics or Distribution</h3>
              <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">Optimize supply chains and accelerate delivery performance.</p>
            </Motion.div>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;