import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import Banner from '../components/Banner.jsx';
import corner_upper_left_black from '../assets/images/corner_upper_left_black.webp';
import corner_upper_left_white from '../assets/images/corner_upper_left_white.webp';
// Placeholder icons for sections (replace with actual paths)
import consulting_icon from '../assets/icons/consulting.png';
import strategic_solutions_icon from '../assets/icons/strategic_solutions.png';
import mentoring_icon from '../assets/icons/mentoring.png';
import analytics_consulting_icon from '../assets/icons/analytics_consulting.png';
import data_management_icon from '../assets/icons/data_management.png';
import data_science_icon from '../assets/icons/data_science.png';
import business_intelligence_icon from '../assets/icons/business_intelligence.png';
import training_icon from '../assets/icons/training.png';
import time_series_icon from '../assets/icons/time_series.png';
import text_mining_icon from '../assets/icons/text_mining.png';
import econometrics_icon from '../assets/icons/econometrics.png';
import forecasting_icon from '../assets/icons/forecasting.png';
import predictive_modeling_icon from '../assets/icons/predictive_modeling.png';
import customer_segmentation_icon from '../assets/icons/customer_segmentation.png';
import recommender_system_icon from '../assets/icons/recommender_system.png';
// Placeholder team image (replace with actual)
import team_image from '../assets/images/team_image.png';
// Placeholder logos for carousel (replace with actual)
import logo1 from '../assets/images/python2.png';
import logo2 from '../assets/images/sas3.png';
import logo3 from '../assets/images/spss2.png';
import logo4 from '../assets/images/tableau2.png';
import logo5 from '../assets/images/R.png';
import logo6 from '../assets/images/eviews.png';
import logo7 from '../assets/images/stata.png';
import logo8 from '../assets/images/matlab.png'; 
import logo9 from '../assets/images/motionboard.png'; 
import logo10 from '../assets/images/powerbi2.png';

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

const Analytics = () => {
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

  // Logos array for carousel
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];

  return (
    <div className="analytics overflow-hidden bg-[var(--color-bg-dark)]">
      <Banner />

      <div className="wrapper max-w-7xl mx-auto px-4 py-10">
        {/* Empowering Organizations Section */}
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)]">
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                Driven by Data
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

          <div className="space-y-12 px-8 pb-10">
            <Motion.div
              className="text-center pt-10"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="font-(family-name:--secondary-font) text-[45px] font-semibold text-[var(--color-primary)]">Empowering Organizations Through Data</h2>
              <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)]">Our mission is to help organizations transform into data-driven enterprises embracing data science & analytics as part of their culture and strategy. Our aim is to unlock the power of data and improve the analytical literacy and awareness of organizations in all levels.</p>
            </Motion.div>

            <Motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                { title: 'Consulting', icon: consulting_icon, desc: 'We help organizations in their journey to a data-driven enterprise. Along the way, we guide and assist them in identifying their needs for a smarter enterprise.' },
                { title: 'Strategic Solutions', icon: strategic_solutions_icon, desc: 'We provide solutions to organizations in realizing their goals and in creating effective strategies using data science and analytics.' },
                { title: 'Mentoring', icon: mentoring_icon, desc: 'We educate and empower all levels of the organization raising the analytical proficiency and embed the data-culture within.' },
              ].map((item, index) => (
                <Motion.div 
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                  variants={boxVariants}
                >
                  <img src={item.icon} alt={item.title} className="img-icon w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-2">{item.title}</h3>
                  <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">{item.desc}</p>
                </Motion.div>
              ))}
            </Motion.div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)] mt-10">
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                What We Offer
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

          <div className="space-y-12 px-8 pb-10">
            <Motion.div
              className="text-center pt-10"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="font-(family-name:--secondary-font) text-[45px] font-semibold text-[var(--color-primary)]">Data Science Services</h2>
              <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)]">N-PAX Advanced Analytics Division offers wide array of analytics services and products that give value and real impact to your business. Our services include data management, BI & dashboarding, advanced analytics & data science solutions and consulting. We also provide training services to improve your company's analytics awareness and proficiency which nourishes a data-driven culture in a company.</p>
            </Motion.div>

            <Motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                { title: 'Analytics Consulting', icon: analytics_consulting_icon, desc: 'Business needs identification, analytics directed strategy & roadmap, analytics project feasibility assessment.' },
                { title: 'Data Management Services', icon: data_management_icon, desc: 'Data processing and transformations, ETL, database design, mapping of data, data quality assessment and alignment.' },
                { title: 'Data Science & Advanced Analytics', icon: data_science_icon, desc: 'Drive business growth by extracting valuable insights and patterns from data using various machine learning.' },
                { title: 'Business Intelligence & Dashboarding', icon: business_intelligence_icon, desc: 'We educate and empower all levels of the organization raising the analytical proficiency and embed the data-culture.' },
                { title: 'Training & Seminars', icon: training_icon, desc: 'Analytics training to improve data proficiency and awareness in order to elevate data expertise in your company.' },
              ].map((item, index) => (
                <Motion.div 
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                  variants={boxVariants}
                >
                  <img src={item.icon} alt={item.title} className="img-icon w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-2">{item.title}</h3>
                  <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">{item.desc}</p>
                </Motion.div>
              ))}
            </Motion.div>
          </div>
        </div>

        {/* What We Can Do Section */}
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)] mt-10">
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                What We Can Do
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

          <div className="space-y-12 px-8 pb-10">
            <Motion.div
              className="text-center pt-10"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="font-(family-name:--secondary-font) text-[45px] font-semibold text-[var(--color-primary)]">Delivering Smart Solutions That Work</h2>
              <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)]">We provide end-to-end orchestration of data via on-premise, private, and managed cloud services.</p>
            </Motion.div>

            <Motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                { title: 'Time Series Analysis', icon: time_series_icon, desc: 'An analytics technique used to analyze and identify patterns and relationships from data points taken over time.' },
                { title: 'Text Mining Analysis', icon: text_mining_icon, desc: 'A process of analyzing, exploring and mining insights and other patterns from unstructured text data.' },
                { title: 'Advanced Econometrics', icon: econometrics_icon, desc: 'A quantitative approach analyzing economic relationships and testing various economic theories using different statistical methodologies.' },
                { title: 'Forecasting', icon: forecasting_icon, desc: 'A technique of making predictions of the future using historical and present data.' },
                { title: 'Predictive Modeling', icon: predictive_modeling_icon, desc: 'A process of predicting future outcomes or event using machine learning techniques and statistical methods.' },
                { title: 'Customer Segmentation & Profiling', icon: customer_segmentation_icon, desc: 'An approach or technique of dividing a broad customer base into groups that have similar characteristics.' },
                { title: 'Recommender System', icon: recommender_system_icon, desc: 'These are algorithms and techniques whose goal is to identify patterns and relationships from data in order to suggest relevant items to users.' },
              ].map((item, index) => (
                <Motion.div 
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                  variants={boxVariants}
                >
                  <img src={item.icon} alt={item.title} className="img-icon w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-2">{item.title}</h3>
                  <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">{item.desc}</p>
                </Motion.div>
              ))}
            </Motion.div>
          </div>
        </div>

        {/* Our Team of Experts Section */}
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)] mt-10">
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                Our Team of Experts
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

          <div className="space-y-12 px-8 pb-10">
            <Motion.div
              className="text-center pt-10"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="font-(family-name:--secondary-font) text-[45px] font-semibold text-[var(--color-primary)]">Our Team Works with Passion</h2>
              <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)]">Backed up by skills and experience in managing Data Analytics projects.</p>
            </Motion.div>

            {/* Team Image */}
            <Motion.div 
              className="grid grid-cols-1 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Motion.div 
                className="text-center"
                variants={boxVariants}
              >
                <img src={team_image} alt="Team" className="w-full h-auto rounded-2xl object-cover" />
              </Motion.div>
            </Motion.div>

            {/* Expertise Carousel */}
            <Motion.div
              className="text-center mt-10"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-[30px] font-(family-name:--secondary-font) font-bold text-[var(--color-primary)] mb-6">Expertise</h3>
              <div className="marquee overflow-hidden whitespace-nowrap">
                <div className="marquee-content flex animate-marquee">
                  {logos.concat(logos).map((logo, index) => (  // Duplicate for seamless loop
                    <img key={index} src={logo} alt="Logo" className="w-32 h-auto mx-4" />
                  ))}
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
      </div>

      {/* CSS for marquee (add to your global CSS or inline style */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Analytics;