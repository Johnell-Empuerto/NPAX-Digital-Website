import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import Banner from '../components/Banner.jsx';
import corner_upper_left_black from '../assets/images/corner_upper_left_black.webp';
import corner_upper_left_white from '../assets/images/corner_upper_left_white.webp';
// Placeholder images (replace with actual paths)
import bi_logo from '../assets/images/BILOGO.png';
import motionboard4 from '../assets/images/motionboard4.png';
import link2 from '../assets/images/link2.png';
import combine3 from '../assets/images/combine3.png';
import reports3 from '../assets/images/reports3.png';
import wingarc from '../assets/images/wingarc.png';
import cua from '../assets/images/cua.webp';
import loading_speed from '../assets/images/LoadingSpeedComparison.png';

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

const MotionBoard = () => {
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
    <div className="motionboard overflow-hidden bg-[var(--color-bg-dark)]">
      <Banner />

      <div className="wrapper max-w-7xl mx-auto px-4 py-10">
        {/* Analytics Dashboard Section */}
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)]">
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                Analytics Dashboard
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
              <h2 className="font-(family-name:--secondary-font) text-[45px] max-[600px]:text-[38px] font-semibold text-[var(--color-primary)]">Business Intelligence and Dashboarding</h2>
              <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)]">We provide end-to-end data orchestration across on-premise, private, and cloud environments — from Excel files to big data — enabling real-time visualization and fast, efficient processing.</p>
            </Motion.div>

            {/* Two Images */}
            <Motion.div 
  className="grid grid-cols-1 place-items-center gap-8"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <Motion.div 
    className="text-center"
    variants={boxVariants}
  >
    <img src={bi_logo} alt="BI Logo" className="w-full max-w-[800px] h-auto rounded-2xl object-cover" />
  </Motion.div>
  <Motion.div 
    className="text-center"
    variants={boxVariants}
  >
    <img src={motionboard4} alt="MotionBoard" className="w-full max-w-[650px] h-auto rounded-2xl object-cover" />
  </Motion.div>
</Motion.div>


            {/* Lists */}
            <Motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Motion.div variants={boxVariants}>
                <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-primary)] mb-4">Database</h3>
                <ul className="list-disc pl-6 text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-light)] columns-2">
                  <li>HiRDB</li>
                  <li>IBM DB2</li>
                  <li>IBM DB2 for i</li>
                  <li>Microsoft Azure SQL Database</li>
                  <li>Microsoft SQL</li>
                  <li>My SQL</li>
                  <li>Oracle</li>
                  <li>Oracle RAC</li>
                  <li>Postgre SQL</li>
                </ul>
              </Motion.div>

              <Motion.div variants={boxVariants} className="lg:col-span-2">
                <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-primary)] mb-4">DWHs</h3>
                <ul className="list-disc pl-6 text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-light)] columns-2 md:columns-3">
                  <li>Dr. Sum / Dr. Sum EA</li>
                  <li>Amazon Aurora</li>
                  <li>Amazon Redshift</li>
                  <li>Enterprise DB</li>
                  <li>FUJITSU Symfoware Server</li>
                  <li>Treasure Data</li>
                  <li>IBM DB2 for i</li>
                  <li>Greenplum</li>
                  <li>HAWQ</li>
                  <li>HiRDB</li>
                  <li>HADB</li>
                  <li>HP Vertica</li>
                  <li>IBM PureData System</li>
                  <li>IBM Infomix Server</li>
                  <li>Maria DB</li>
                  <li>Oracle Exadata</li>
                  <li>SAP IQ</li>
                  <li>SAP SQL Anywhere</li>
                  <li>SAP HANA</li>
                  <li>Teradata</li>
                  <li>Tibero</li>
                  <li>FUJITSU Software Symfoware Analytics Server</li>
                </ul>
              </Motion.div>

              <Motion.div variants={boxVariants}>
                <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-primary)] mb-4">Services</h3>
                <ul className="list-disc pl-6 text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-light)]">
                  <li>Dr. Sum Datalizer / Dr. Sum EA Datalizer</li>
                  <li>Apache Spark</li>
                  <li>Google Analytics</li>
                  <li>Red Hot JBoss</li>
                </ul>
              </Motion.div>

              

              <Motion.div variants={boxVariants}>
                <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-primary)] mb-4">Cloud Storages</h3>
                <ul className="list-disc pl-6 text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-light)]">
                  <li>Amazon S3</li>
                  <li>Dropbox for Business</li>
                  <li>OneDrive for Business</li>
                  <li>Box Business / Enterprise</li>
                  <li>Google Drive for Work</li>
                </ul>
              </Motion.div>

                            <Motion.div variants={boxVariants}>
                <h3 className="text-[20px] font-(family-name:--secondary-font) font-bold text-[var(--color-primary)] mb-4">Files</h3>
                <ul className="list-disc pl-6 text-[16px] font-(family-name:--secondary-font) text-[var(--color-text-light)]">
                  <li>CSV</li>
                  <li>Excel</li>
                </ul>
              </Motion.div>

            </Motion.div>
          </div>
        </div>

        {/* Business Insights Section */}
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)] mt-10">
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                Business Insights
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
            {/* On-Premise & Cloud Integration */}
            <Motion.div
              className="flex flex-col md:flex-col items-center gap-8 pt-10"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-full ">
                <img
                  src={link2}
                  className="w-full h-auto rounded-2xl object-cover"
                  alt="On-Premise & Cloud Integration"
                />
              </div>
              <div className="w-full text-center">
                <h2 className="font-(family-name:--secondary-font) text-[45px] max-[600px]:text-[38px] font-semibold text-[var(--color-primary)]">On-Premise & Cloud Integration</h2>
                <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)]">Bridge Service lets you use data from various in-house databases without sending it to the cloud. It eliminates the need to build leased-line or VPN infrastructure and is easy to introduce without VPN technical expertise.</p>
              </div>
            </Motion.div>

            {/* Combine data from multiple sources */}
            <Motion.div
              className="flex flex-col md:flex-row-reverse items-center gap-8"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={combine3}
                  className="w-full h-auto rounded-2xl object-cover"
                  alt="Combine data from multiple sources"
                />
              </div>
              <div className="w-full md:w-1/2 text-center">
                <h2 className="font-(family-name:--secondary-font) text-[45px] max-[600px]:text-[38px] font-semibold text-[var(--color-primary)]">Combine Data from Multiple Sources</h2>
                <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)]">Data from multiple sources or systems can easily be combined for display in a single dashboard.</p>
              </div>
            </Motion.div>

            {/* Share reports across the entire company */}
            <Motion.div
              className="text-center"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="font-(family-name:--secondary-font) text-[45px] max-[600px]:text-[38px] font-semibold text-[var(--color-primary)]">Share Reports Across the Entire Company</h2>
              <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)]">Daily reports can be generated automatically from the dashboard as Excel and PowerPoint files. MotionBoard serves as an infrastructure for business reporting.</p>
            </Motion.div>

            <Motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Motion.div 
                className="text-center"
                variants={boxVariants}
              >
                <img src={reports3} alt="Reports" className="w-full h-auto rounded-2xl object-cover" />
              </Motion.div>
              <Motion.div 
                className="text-center"
                variants={boxVariants}
              >
                <img src={wingarc} alt="Wing Arc" className="w-full h-auto rounded-2xl object-cover" />
              </Motion.div>
            </Motion.div>
          </div>
        </div>

        {/* BI Tool Training Section */}
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)] mt-10">
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                BI Tool Training
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
              <h2 className="font-(family-name:--secondary-font) text-[45px] max-[600px]:text-[38px] font-semibold text-[var(--color-primary)]">Descriptive Analytics & BI Tool Online Training Course</h2>
              <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)]">This course aims to provide the necessary concepts and tools on how to properly handle, process, analyze and interpret data using N-PAX BI CLOUD powered by MotionBoard.This course will help the participants on how to appropriately analyze data and create effective dashboard reports. It will generally improve the analytical literacy and skills of participants.</p>
              {/* <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)]"></p> */}
              <div className="w-full mt-5 flex justify-center">
                <a
                  className="btn rounded-full hover:bg-transparent hover:border hover:border-[var(--color-sky)] hover:text-[var(--color-sky)] transition-all duration-200 ease-in-out cursor-pointer"
                  href="/update/category_news?category=23&id=des"
                >
                  Click here for Details
                </a>
              </div>
            </Motion.div>
          </div>
        </div>

        {/* Demo Dashboard Section */}
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)] mt-10">
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                Demo Dashboard
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
              <h2 className="font-(family-name:--secondary-font) text-[45px] max-[600px]:text-[38px] font-semibold text-[var(--color-primary)]">Motionboard Demo Dashboard</h2>
              <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)]">You can check the actual demo screen of MotionBoard from the following. Anyone can intuitively create a dashboard with easy operation.</p>
            </Motion.div>

            <Motion.div 
              className="text-center"
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={cua} alt="Customer Usage Analysis" className="w-full h-auto rounded-2xl object-cover" />
              <div className="w-full mt-5 flex justify-center">
                <a
                  className="btn rounded-full hover:bg-transparent hover:border hover:border-[var(--color-sky)] hover:text-[var(--color-sky)] transition-all duration-200 ease-in-out cursor-pointer"
                  href="https://bi.n-pax.com:8787/motionboard/main?mbid=fids3kqgeqiiza67d3gaaaabogngm&boardpath=%2FGuest%2FCustomer%20Usage%20Analysis%20Dashboard&mbtype=html5e&tenant=bidemo&id=Guest&pw=&extid=mbsso"
                >
                  Try the Demo
                </a>
              </div>
            </Motion.div>

            <Motion.div
              className="text-center"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="font-(family-name:--secondary-font) text-[45px] max-[600px]:text-[38px] font-semibold text-[var(--color-primary)]">Dr.Sum vs. SQL Server Loading Speed Comparison</h2>
              <p className="font-(family-name:--secondary-font) text-[16px] text-[var(--color-text-light)]">Compare the loading speeds between Dr.Sum and SQL Server to see the performance differences.</p>
            </Motion.div>

            <Motion.div 
              className="text-center"
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={loading_speed} alt="Loading Speed Comparison" className="w-full h-auto rounded-2xl object-cover" />
              <div className="w-full mt-5 flex justify-center">
                <a
                  className="btn rounded-full hover:bg-transparent hover:border hover:border-[var(--color-sky)] hover:text-[var(--color-sky)] transition-all duration-200 ease-in-out cursor-pointer"
                  href="#contact"
                >
                  Try the Demo
                </a>
              </div>
            </Motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotionBoard;