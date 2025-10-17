import React from 'react';
import { motion as Motion } from 'framer-motion';
import facebookIcon from '../assets/icons/facebook.png';
import youtubeIcon from '../assets/icons/youtube.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import twitterIcon from '../assets/icons/twitter.png';
import logo from '../assets/images/logo.png';
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

const childVariants = {
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer overflow-hidden py-10 bg-[#000]">
      <div className="wrapper max-w-7xl mx-auto px-4">
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] shadow-lg overflow-hidden bg-no-repeat bg-white/10">
          
          {/* Folder Tab Design - Adapted for Footer */}
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[#000000] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-white">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[#F9AF4B] rounded-full mr-[1.25rem]"></span>
                Connect with Us
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

          {/* Footer Grid */}
          <Motion.div 
            className="footer-con grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 pb-10 pt-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Column 1: About */}
            <Motion.div className="first-col" variants={childVariants}>
              <img src={logo} alt="NPAX LOGO" className="mb-4 w-32" />
              <p className="text-white/80 text-sm mb-6">
                Empowering your growth with innovative, reliable, and scalable strategies tailored to your success.
              </p>
              <div className="footer-icon flex gap-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src={facebookIcon} alt="facebook" className="w-8 h-8" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src={youtubeIcon} alt="youtube" className="w-8 h-8" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src={linkedinIcon} alt="linkedin" className="w-8 h-8" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src={twitterIcon} alt="twitter" className="w-8 h-8" />
                </a>
              </div>
            </Motion.div>

            {/* Column 2: Company */}
            <Motion.div className="second-col" variants={childVariants}>
              <h3 className="text-[#00bbff] text-xl font-semibold mb-4 font-(family-name:--secondary-font)">Company</h3>
              <ul className="space-y-2">
                <li><a href="" className="text-white/80 hover:text-[#00bbff] transition-colors text-sm">About Us</a></li>
                <li><a href="" className="text-white/80 hover:text-[#00bbff] transition-colors text-sm">Career</a></li>
                <li><a href="" className="text-white/80 hover:text-[#00bbff] transition-colors text-sm">Blogs and Insights</a></li>
                <li><a href="" className="text-white/80 hover:text-[#00bbff] transition-colors text-sm">Services</a></li>
              </ul>
            </Motion.div>

            {/* Column 3: Services */}
            <Motion.div className="third-col" variants={childVariants}>
              <h3 className="text-[#00bbff] text-xl font-semibold mb-4 font-(family-name:--secondary-font)">Services</h3>
              <ul className="space-y-2">
                <li><a href="" className="text-white/80 hover:text-[#00bbff] transition-colors text-sm">Business Intelligence</a></li>
                <li><a href="" className="text-white/80 hover:text-[#00bbff] transition-colors text-sm">Business Analytics</a></li>
                <li><a href="" className="text-white/80 hover:text-[#00bbff] transition-colors text-sm">Data Dashboarding</a></li>
                <li><a href="" className="text-white/80 hover:text-[#00bbff] transition-colors text-sm">Software Development</a></li>
                <li><a href="" className="text-white/80 hover:text-[#00bbff] transition-colors text-sm">IT Maintenance and Management</a></li>
                <li><a href="" className="text-white/80 hover:text-[#00bbff] transition-colors text-sm">IOT</a></li>
              </ul>
            </Motion.div>

            {/* Column 4: Solutions */}
            <Motion.div className="fourth-col" variants={childVariants}>
              <h3 className="text-[#00bbff] text-xl font-semibold mb-4 font-(family-name:--secondary-font)">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="" className="text-white/80 hover:text-[#00bbff] transition-colors text-sm">Computerized Accounting System with Compact ERP Solution</a></li>
                <li><a href="" className="text-white/80 hover:text-[#00bbff] transition-colors text-sm">HRIS and Payroll Calculation System</a></li>
                <li><a href="" className="text-white/80 hover:text-[#00bbff] transition-colors text-sm">Manufacturing ERP System</a></li>
                <li><a href="" className="text-white/80 hover:text-[#00bbff] transition-colors text-sm">Free Timekeeping Tool</a></li>
              </ul>
            </Motion.div>
          </Motion.div>

          {/* Copyright */}
          <div className="copyright border-t border-white/10 pt-6 text-center text-white/60 text-[13px] px-8 pb-8">
            &copy; {currentYear} NPAX. All rights reserved. | <a href="#" className="hover:text-[#00bbff] transition-colors">Legal Notices</a> | <a href="#" className="hover:text-[#00bbff] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;