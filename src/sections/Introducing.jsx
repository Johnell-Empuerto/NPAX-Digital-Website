import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import corner_upper_left_black from '../assets/images/corner_upper_left_black.webp';
import corner_upper_left_white from '../assets/images/corner_upper_left_white.webp';
import overview_image from '../assets/images/overview.jpg';
import logo from '../assets/images/logo.png';

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

const Introducing = () => {
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
    <div className="introducing overflow-hidden py-10 bg-[var(--color-bg-dark)]">
      <div className="wrapper max-w-7xl mx-auto px-4">
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)]">
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                Introducing
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

          <Motion.div
            className="px-8 pb-10 pt-5"
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="sr-only">NPAX</h1>
            <div className='flex justify-center pb-5'><img src={logo} alt="NPAX" /></div>

            <p className="font-(family-name:--secondary-font) text-[20px] text-center pb-6 text-[var(--color-text-light)]">Technology with Heart, Harmony for Growth</p>
            
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/2">
                <img
                  src={overview_image}
                  className="w-full h-auto rounded-2xl object-cover"
                  alt="NPAX Overview"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left
              ">
                <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)] mb-4">
                  Founded in 2002 in Cebu City, Philippines, NPAX is a trusted global IT solutions provider serving clients in Asia and North America. Our mission builds trust through harmonious integration of people and technology, fostering growth for clients and teams alike.
                </p>
                <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)] mb-4">
                  We offer flagship solutions like N-XPERT (ERP) and HRC (HRIS), plus advanced analytics, digital transformation, and IT support. Partnerships with Nomura Research Institute and Business Engineering Corporation enhance our data, mcframe, and talent management capabilities.
                </p>
                <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)] mb-4">
                  NPAX stands out with full lifecycle services, Philippine engineering excellence, and innovative expertise. Our core values—client success, trust, diversity, and balance—drive long-term relationships in a dynamic digital world.
                </p>
                <div className="w-full mt-5 flex md:justify-start justify-center">
                  <a
                    className="btn rounded-full hover:bg-transparent hover:border hover:border-[var(--color-sky)] hover:text-[var(--color-sky)] transition-all duration-200 ease-in-out cursor-pointer"
                    href="/about"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default Introducing;