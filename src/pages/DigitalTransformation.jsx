import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import corner_upper_left_black from '../assets/images/corner_upper_left_black.webp';
import corner_upper_left_white from '../assets/images/corner_upper_left_white.webp';
import Banner from '../components/Banner.jsx';
// Placeholder icons for services
import dx_consulting from '../assets/icons/dx_consulting.png';
import ai_chatbots from '../assets/icons/ai_chatbots.png';
import rpa from '../assets/icons/rpa.png';
import machine_learning from '../assets/icons/machine_learning.png';
import middleware from '../assets/icons/middleware.png';
import ar_vr from '../assets/icons/ar_vr.png';
import iot from '../assets/icons/iot.png';
import software_engineering from '../assets/icons/software_engineering.png';
// Placeholder images for team experience section
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/arvr2.gif';
import project4 from '../assets/images/cc.jpg';

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

const DigitalTransformation = () => {
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

  const [activeIndex, setActiveIndex] = useState(null);

  const handleTap = (index) => {
    // Toggle the overlay visibility on tap
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="digital-transformation overflow-hidden bg-[var(--color-bg-dark)]">
      <Banner />
      <div className="wrapper max-w-7xl mx-auto px-4 py-10">

        {/* Engagement Model Section */}
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)]">
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                Engagement Model
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
            <h2 className="font-(family-name:--secondary-font) text-[45px] max-[600px]:text-[30px] font-semibold text-center text-[var(--color-primary)]">DIGITAL TRANSFORMATION (DX)</h2>
            <p className="font-(family-name:--secondary-font) text-[16px] text-center pb-10 text-[var(--color-text-light)] max-[768px]:pb-5">Think Different, Accelerate Business Value through Innovation</p>
            <p className="font-(family-name:--secondary-font) text-[16px] text-center text-[var(--color-text-light)] mb-10">
              It is the integration of Digital Technology to encourage innovation and efficiency in the different aspect of an organization’s business processes. At N-PAX we don't just build software we help organization create more value for its customers by understanding the customer needs build system that respond to its market needs.
            </p>

            <Motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Motion.div 
                className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={boxVariants}
              >
                <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-2">PHASE 1</h3>
                <h4 className="text-[18px] font-(family-name:--secondary-font) font-semibold text-[var(--color-primary)] mb-4">Strategy Consulting</h4>
                <ul className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)] list-disc list-inside text-left">
                  <li>Defining and Establishing Business Goals</li>
                  <li>Site Visits and Strategy Planning</li>
                  <li>Gap Analysis</li>
                  <li>Customer Journey Mapping</li>
                  <li>Business Process Re-engineering</li>
                </ul>
              </Motion.div>

              <Motion.div 
                className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={boxVariants}
              >
                <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-2">PHASE 2</h3>
                <h4 className="text-[18px] font-(family-name:--secondary-font) font-semibold text-[var(--color-primary)] mb-4">Research and Development</h4>
                <ul className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)] list-disc list-inside text-left">
                  <li>Proof-of-concept Development</li>
                  <li>Technology Viability</li>
                  <li>Software Architectural Design</li>
                  <li>Software Testing and Production Design Modeling</li>
                  <li>Device Evaluation</li>
                  <li>Product Implementation Design</li>
                </ul>
              </Motion.div>

              <Motion.div 
                className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={boxVariants}
              >
                <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-2">PHASE 3</h3>
                <h4 className="text-[18px] font-(family-name:--secondary-font) font-semibold text-[var(--color-primary)] mb-4">System Development</h4>
                <ul className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)] list-disc list-inside text-left">
                  <li>Technology and Strategy Implementation</li>
                  <li>Software Development</li>
                  <li>System and Device Integration</li>
                  <li>Software Quality Testing</li>
                </ul>
              </Motion.div>
            </Motion.div>
          </Motion.div>
        </div>

        {/* Portfolio of Services and Solutions Section */}
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)] mt-10">
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                Our Offerings
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

          <h2 className="font-(family-name:--secondary-font) text-[45px] max-[600px]:text-[30px] font-semibold text-center text-[var(--color-primary)]">Portfolio of Services and Solutions</h2>
          <p className="font-(family-name:--secondary-font) text-[16px] text-center pb-10 text-[var(--color-text-light)] max-[768px]:pb-5">Empowering Your Digital Journey</p>

          <Motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { icon: dx_consulting, title: 'Digital Transformation Consulting', description: 'We help marketers set a transformation agenda, clear strategy and pragmatic roadmap.' },
              { icon: ai_chatbots, title: 'Artificial Intelligence', description: 'Artificial Intelligence as a Service (AIaaS) is the third party offering of artificial intelligence (AI) outsourcing.' },
              { icon: ai_chatbots, title: 'Artificial Intelligence', description: 'Artificial Intelligence as a Service (AIaaS) is the third party offering of artificial intelligence (AI) outsourcing.' },
              { icon: rpa, title: 'Robotics Process Automation', description: 'Our RPA developers automate your end-to-end business processes, improve operational efficiency to amplify business values with enterprise-grade' },
              { icon: machine_learning, title: 'Machine Learning', description: 'MLaaS providers offer services for data transformation, predictive analytics, data visualization, and advanced machine learning algorithms.' },
              { icon: middleware, title: 'Middleware Development', description: 'Provides common services and capabilities to applications outside of what\'s offered by the operating system.' },
              { icon: ar_vr, title: 'Augmented Reality', description: 'Our Augmented & Virtual Reality (AR/VR) Services & Solutions deliver immersive experiences that unfold new realities to users.' },
              { icon: iot, title: 'Internet of Things (IoT)', description: 'Our end-to-end IoT solutions empower smart industries, smart living and smart enterprises and deliver connected experiences by connecting assets, operations/logistics, and services.' },
              { icon: software_engineering, title: 'Software Product Engineering', description: 'Product engineering takes care of the entire product life cycle from the innovation phase, starting from the idea being conceived to the deployment and user acceptance testing phase.' },
            ].map((service, index) => (
              <Motion.div 
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={boxVariants}
              >
                <img src={service.icon} alt={service.title} className="img-icon w-16 h-16 mx-auto mb-4" />
                <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-secondary)] mb-2">{service.title}</h3>
                <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-muted)]">{service.description}</p>
              </Motion.div>
            ))}
          </Motion.div>
        </div>

        {/* DX TEAM PROJECT EXPERIENCE AND COMPETENCY Section */}
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)] mt-10">
          {/* Folder header */}
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                Team Expertise
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

          {/* Section title */}
          <h2 className="font-(family-name:--secondary-font) text-[45px] max-[600px]:text-[30px] font-semibold text-center text-[var(--color-primary)]">
            DX TEAM PROJECT EXPERIENCE AND COMPETENCY
          </h2>
          <p className="font-(family-name:--secondary-font) text-[16px] text-center pb-10 text-[var(--color-text-light)] max-[768px]:pb-5">
            Digital Technologies and Applications and Development
          </p>

          {/* Grid of equal-height boxes */}
          <Motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-8 pb-10 items-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                image: project1,
                title: "Robotic Process Automation / Chat Bots",
                description: "Invoicing, sales Automation, Customer Service and Inquiry",
              },
              {
                image: project2,
                title: "Machine Learning",
                description:
                  "Object Recognition, Video Surveillance, Object Count and Recognition, Parking Management System, Face Recognition.",
              },
              {
                image: project3,
                title: "Augmented Reality and Virtual Reality",
                description:
                  "Real State Property, Learning Management, AR Instructional Assembly, AR Collaboration, AR Visual for Education and Interactive E-Learning System",
              },
              {
                image: project4,
                title: "Infrastructure and Cloud Solutions",
                description:
                  "Mobile Application and Web Application System deployed in AWS and Microsoft Azure, Inventory Management System, Web Payroll and Attendance Management System.",
              },
            ].map((project, index) => (
              <Motion.div
                key={index}
                className="relative flex flex-col text-center rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group h-[400px] cursor-pointer"
                variants={boxVariants}
                onClick={() => handleTap(index)} // handle tap
              >
                {/* Image - full height and always visible */}
                <img
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    activeIndex === index ? 'blur-md' : 'sm:group-hover:blur-md'
                  }`}
                />

                {/* Overlay (text) */}
                <div
                  className={`absolute inset-0 flex flex-col justify-center items-center bg-[var(--color-bg-glass)] transition-all duration-500 p-6
                    ${
                      activeIndex === index
                        ? 'bg-opacity-70 opacity-100'
                        : 'bg-opacity-0 opacity-0 sm:group-hover:bg-opacity-70 sm:group-hover:opacity-100'
                    }`}
                >
                  <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-text-light)] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-light)] text-center">
                    {project.description}
                  </p>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>

      </div>
    </div>
  );
};

export default DigitalTransformation;