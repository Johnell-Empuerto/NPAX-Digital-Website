import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import Banner from '../components/Banner.jsx';
import corner_upper_left_black from '../assets/images/corner_upper_left_black.webp';
import corner_upper_left_white from '../assets/images/corner_upper_left_white.webp';
// Management team images (assuming placeholder paths; replace with actual if available)
import wilson_ng from '../assets/images/wilson_ng.png';
import takahiro_toda from '../assets/images/takahiro_toda.png';
import jimmy_flores from '../assets/images/jimmy_flores.png';
import mission_image from '../assets/images/mission.jpg';
import vision_image from '../assets/images/vision.jpg';
import overview_image from '../assets/images/overview.jpg';
// Placeholder icons for core values
import client_success from '../assets/icons/growth.png';
import trust_relationships from '../assets/icons/hand-shake.png';
import diversity from '../assets/icons/cultural-diversity.png';
import change_courage from '../assets/icons/empowerment.png';
import organization from '../assets/icons/networking.png';
import harmony_support from '../assets/icons/balance.png';
import balance_harmony from '../assets/icons/harmonious.png';
import npax_people from '../assets/icons/group.png';

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

const About = () => {
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
    <div className="about overflow-hidden bg-[var(--color-bg-dark)]">
      <Banner />

      <div className="wrapper max-w-7xl mx-auto px-4 py-10">
        {/* Mission and Vision Section */}
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)]">
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                Our Purpose
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
              className="flex flex-col md:flex-row items-center gap-8 pt-10"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={mission_image}
                  className="w-full h-auto rounded-2xl object-cover"
                  alt="Our Mission"
                />
              </div>
              <div className="w-full md:w-1/2 text-center">
                <h2 className="font-(family-name:--secondary-font) text-[45px] max-[600px]:text-[38px] font-semibold text-[var(--color-primary)]">Our Mission</h2>
                <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)]">We build trust and deliver value through the harmony of people and technology.</p>
                <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)]">We aim to be a lasting IT partner that empowers the growth of our clients and our teams.</p>
              </div>
            </Motion.div>

            <Motion.div
              className="flex flex-col md:flex-row-reverse items-center gap-8"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={vision_image}
                  className="w-full h-auto rounded-2xl object-cover"
                  alt="Our Vision"
                />
              </div>
              <div className="w-full md:w-1/2 text-center">
                <h2 className="font-(family-name:--secondary-font) text-[45px] max-[600px]:text-[38px] font-semibold text-[var(--color-primary)]">Our Vision</h2>
                <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)]">We combine diverse talents and technological strengths to deliver sustainable value to businesses around the world.</p>
                <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)]">We aim to be a trusted presence that continuously creates new possibilities through collaboration and harmony.</p>
              </div>
            </Motion.div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)] mt-10">
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                Guiding Principles
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

          <h2 className="font-(family-name:--secondary-font) text-[45px] font-semibold text-center text-[var(--color-primary)]">Our Core Values</h2>
          <p className="font-(family-name:--secondary-font) text-[16px] text-center pb-10 text-[var(--color-text-light)]">The foundation of our success.</p>

          <Motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { value: 'Sincere Contribution to Client Success', icon: client_success },
              { value: 'Long-Term Relationships Rooted in Trust', icon: trust_relationships },
              { value: 'Culture of Diversity and Co-Creation', icon: diversity },
              { value: 'Embracing Change with Courage', icon: change_courage },
              { value: 'Open and Healthy Organizational Management', icon: organization },
              { value: 'Harmony of Support and Autonomy', icon: harmony_support },
              { value: 'Practicing Balance and Harmony', icon: balance_harmony },
              { value: 'N-PAX People', icon: npax_people },
            ].map((item, index) => (
              <Motion.div 
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={boxVariants}
              >
                <img src={item.icon} alt={item.value} className="img-icon w-16 h-16 mx-auto mb-4" />
                <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-2">{item.value}</h3>
              </Motion.div>
            ))}
          </Motion.div>
        </div>

        {/* Company Overview Section */}
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)] mt-10">
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                Our Story
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
            className="px-8 pb-10"
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-(family-name:--secondary-font) text-[45px] font-semibold text-center text-[var(--color-primary)]">Company Overview</h2>
            <p className="font-(family-name:--secondary-font) text-[16px] text-center pb-10 text-[var(--color-text-light)] max-[768px]:pb-5">Building a Legacy of Excellence</p>
            <div className="flex flex-col md:flex-row items-start gap-8 mt-4">
              <div className="w-full md:w-1/2 text-left max-[768px]:text-center">
                <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)]">
                  At N-PAX, we integrate people and technology to create sustainable value for our clients and society. Founded in 2002 in Cebu City, Philippines, we have grown into a trusted IT partner serving clients across Asia and North America.
                </p>
                <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)] mt-4">
                  Our flagship solutions—N-XPERT (ERP) and HRC (HRIS)—have evolved with the market and are now widely used across various industries. With development and support teams based in the Philippines, and global consulting arms in Japan and the U.S., we help clients succeed through tailored system implementations, data analytics, and ongoing IT support.
                </p>
                <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)] mt-4">
                  Strategic partnerships with Nomura Research Institute Asia Pacific (2014) and Business Engineering Corporation (2019) have reinforced our foundation and accelerated global expansion.
                </p>
                <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)] mt-4">
                  In recent years, we have also achieved significant results in areas such as data empowerment solutions, implementation of the mcframe product suite and Talent Management Systems further expanding our ability to support operational excellence across supply chain and manufacturing domains.
                </p>
                <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)] mt-4">
                  We are committed to delivering high-quality, reliable services through our deep domain expertise, a culture of continuous improvement, and long-term client partnerships. N-PAX continues to be a dependable partner for organizations seeking robust, scalable, and future-ready IT solutions.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={overview_image}
                  className="w-full h-auto rounded-2xl object-cover"
                  alt="Company Overview"
                />
              </div>
            </div>
          </Motion.div>
        </div>

        {/* What Sets Us Apart Section */}
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)] mt-10">
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                Unique Strengths
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

          <h2 className="font-(family-name:--secondary-font) text-[45px] font-semibold text-center text-[var(--color-primary)]">What Sets Us Apart</h2>
          <p className="font-(family-name:--secondary-font) text-[16px] text-center pb-10 text-[var(--color-text-light)]">Discover our unique advantages.</p>

          <Motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Motion.div 
              className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={boxVariants}
            >
              <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-4">Full Lifecycle Services</h3>
              <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">From planning and development to deployment and support, N-PAX provides end-to-end IT solutions. Our integrated approach ensures efficiency, consistency, and cost-effectiveness.</p>
            </Motion.div>

            <Motion.div 
              className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={boxVariants}
            >
              <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-4">Philippine Engineering Excellence</h3>
              <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">We leverage top-tier Filipino engineers and project managers to deliver high-quality enterprise systems at globally competitive value.</p>
            </Motion.div>

            <Motion.div 
              className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={boxVariants}
            >
              <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-4">Global IT Expertise</h3>
              <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">With a proven track record in supporting multinational companies, we specialize in overseas rollout, ERP localization, and cross-border system integration.</p>
            </Motion.div>

            <Motion.div 
              className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={boxVariants}
            >
              <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-4">Innovation in Action</h3>
              <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">We apply the latest in AI, analytics, and digital transformation (DX) to create business value—faster, smarter, and more sustainably.</p>
            </Motion.div>

            <Motion.div 
              className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={boxVariants}
            >
              <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-4">Balance of Technology and Humanity</h3>
              <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">Rooted in our philosophy of “Balance and Harmony”, we build a culture where both clients and employees can thrive long term.</p>
            </Motion.div>
          </Motion.div>
        </div>

        {/* Management Team Section - Updated with alternating layout like Middle for better UI */}
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)] mt-10">
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                Leadership
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

          <h2 className="font-(family-name:--secondary-font) text-[45px] font-semibold text-center text-[var(--color-primary)]">The Management Team</h2>
          <p className="font-(family-name:--secondary-font) text-[16px] text-center pb-10 text-[var(--color-text-light)]">The strength of the team is each individual member. The strength of each member is the team.</p>

          {/* Content Rows - Alternating like Middle */}
          <div className="middle-con space-y-12 px-8 pb-10">

            {/* Row 1: Image - Content */}
            <Motion.div
              className="row flex flex-col md:flex-row items-center gap-8"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="video-con w-full md:w-2/5 flex justify-center">
                <img
                  src={wilson_ng}
                  className="w-full max-w-[350px] h-auto rounded-2xl  object-cover"
                  alt="Wilson Ng"
                />
              </div>
              <div className="middle-box w-full md:w-4/5 text-center md:text-left p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-2">WILSON NG</h3>
                <p className="text-[16px] font-(family-name:--secondary-font) font-semibold text-[var(--color-text-muted)] mb-4">Chairman of the Board</p>
                <p className="text-[14px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">Wilson Ng graduated Bachelor of Business Management, Cum Laude from University of the Philippines in 1986. He pursued his passion in technology and studied Computer Programming from Eber Institute of Technology. He started his career in software development by working in Taiwan as a Computer Programmer for two years before coming back to the Philippines. He combined his entrepreneurial spirit and love for technology to start his own technology company in his hometown in Cebu, Philippines. His business ventures have since grown with now over eight (8) companies employing over 700 associates.</p>
                <p className="text-[14px] font-(family-name:--secondary-font) text-[var(--color-text-muted)] mt-2">He pursued his studies and graduated with Master in Business Administration in the City University of Hongkong in 2004 and in that same year was awarded Ernst and Young Entrepreneur of the Year for Philippines Small business. He was also a Microsoft Most Valuable Professional from 2003 to 2009. To share his knowledge and expertise, Wilson Ng has been writing for Sunstar Daily as a Tech Columnist from 1994 to the present. He is currently pursuing his Doctorate of Business Administration in City University, Hongkong.</p>
              </div>
            </Motion.div>

            {/* Row 2: Content - Image */}
            <Motion.div
              className="flex flex-col-reverse md:flex-row items-center gap-8"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="middle-box w-full md:w-4/5 text-center md:text-left p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-2">TAKAHIRO TODA</h3>
                <p className="text-[16px] font-(family-name:--secondary-font) font-semibold text-[var(--color-text-muted)] mb-4">President & CEO</p>
                <p className="text-[14px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">Takahiro Toda developed a strong interest in computers from an early age. He began learning programming on his own while still in elementary school, and during his university years in Japan, he launched his first software development business. He later joined IT projects in the U.S. and Malaysia before moving to Cebu, Philippines at the age of 25, where he founded N-PAX CEBU CORPORATION in 2002.</p>
                <p className="text-[14px] font-(family-name:--secondary-font) text-[var(--color-text-muted)] mt-2">From the outset, Toda worked closely with local engineers to build a high-quality system development team. Under his leadership, N-PAX has delivered numerous medium to large-scale projects—including ERP, HRIS, and BI solutions—to clients across North America, Japan, and Southeast Asia. The company has steadily expanded its operations and accelerated its global reach through partnerships with both Japanese and international enterprises.</p>
                <p className="text-[14px] font-(family-name:--secondary-font) text-[var(--color-text-muted)] mt-2">In response to advancing technology, Toda remains actively involved in research and development, especially in the fields of artificial intelligence and data analytics. He also plays a key role in international marketing efforts.</p>
                <p className="text-[14px] font-(family-name:--secondary-font) text-[var(--color-text-muted)] mt-2">Toda's personal life philosophy—“Balance and Harmony” across four life domains: physical well-being, financial stability, human relationships, and the environment—is deeply embedded in the company’s Mission, Vision, and Values (MVV). With a vision of integrating technology and humanity, he is committed to cultivating a workplace culture where each employee can thrive with vitality and purpose.</p>
              </div>
              <div className="video-con w-full md:w-2/5 flex justify-center">
                <img
                  src={takahiro_toda}
                  className="w-full max-w-[350px] h-auto rounded-2xl  object-cover"
                  alt="Takahiro Toda"
                />
              </div>
            </Motion.div>

            {/* Row 3: Image - Content */}
            <Motion.div
              className="row flex flex-col md:flex-row items-center gap-8"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="video-con w-full md:w-2/5 flex justify-center">
                <img
                  src={jimmy_flores}
                  className="w-full max-w-[350px] h-auto rounded-2xl object-cover"
                  alt="Jimmy Flores"
                />
              </div>
              <div className="middle-box w-full md:w-4/5 text-center md:text-left p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-2">JIMMY FLORES</h3>
                <p className="text-[16px] font-(family-name:--secondary-font) font-semibold text-[var(--color-text-muted)] mb-4">Executive Vice President</p>
                <p className="text-[14px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">Jimmy Flores is the Executive Vice President of N-PAX and currently heads its ERP Division. He has joined N-PAX in 2006 and spearheaded the modernisation and upgrading of the HR/Payroll and Financial Systems to Microsoft Technology. He brought with him the Enterprise Resource Planning (ERP) system, which he now currently leads the product engineering and design as well as leading its sales and marketing initiatives. For more than 12 years, he is mainly responsible in bringing clients, mostly Japanese owned corporation to the company.</p>
                <p className="text-[14px] font-(family-name:--secondary-font) text-[var(--color-text-muted)] mt-2">Jimmy Flores came from modest beginnings, born in a family with five siblings to which the parents main source of income is through farming and house rental. Jimmy has always been a diligent student, graduating as the class Valedictorian at High School, and Cum Laude in college with a Bachelor’s Degree in Electronics and Communications Engineering. He passed the engineering board examination in 1989.</p>
                <p className="text-[14px] font-(family-name:--secondary-font) text-[var(--color-text-muted)] mt-2">He launched his career in the Electronics and Manufacturing Industry with a focus on Electronic Data Processing, Production Control, Process Engineering and Quality Assurance. He is also part of the Committee that established ISO 14000, OHSAS 18000 and TS 16949. He is also elected as a Quality Management Representative over QS 9000, ISO 9000 Committee.</p>
              </div>
            </Motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;