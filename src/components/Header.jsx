import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import logo from '../assets/images/logo.png';
import corner_upper_left_black from '../assets/images/corner_upper_left_black.webp';

// Animation variants for mobile menu
const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);

  useEffect(() => {
    // Google Translate Initialization
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,es,fr,de,ar,hi,zh-CN,ru,pt,ja',
        layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        autoDisplay: false,
        multilanguagePage: true
      }, 'google_translate_element');

      // Initialize mobile translate widget
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,es,fr,de,ar,hi,zh-CN,ru,pt,ja',
        layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        autoDisplay: false,
        multilanguagePage: true
      }, 'google_translate_element_mobile');
    };

    // Load Google Translate script
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    // Function to inject custom styles for Google Translate
    const styleGoogleTranslate = () => {
      const addContainerStyles = () => {
        const containers = [
          document.querySelector('#google_translate_element .goog-te-combo'),
          document.querySelector('#google_translate_element_mobile .goog-te-combo')
        ];
        containers.forEach(container => {
          if (container) {
            container.style.backgroundColor = '#f0f9ff';
            container.style.border = '1px solid #38bdf8';
            container.style.borderRadius = '9999px';
            container.style.padding = '6px 12px';
            container.style.fontFamily = 'var(--primary-font)';
            container.style.fontSize = '14px';
            container.style.color = '#2B3692';
            container.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
            container.style.transition = 'all 0.3s ease';
            container.style.cursor = 'pointer';

            container.addEventListener('mouseover', () => {
              container.style.backgroundColor = '#e0f2fe';
              container.style.borderColor = '#0ea5e9';
              container.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            });
            container.addEventListener('mouseout', () => {
              container.style.backgroundColor = '#f0f9ff';
              container.style.borderColor = '#38bdf8';
              container.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
            });
          }
        });

        const gadgets = [
          document.querySelector('#google_translate_element .goog-te-gadget'),
          document.querySelector('#google_translate_element_mobile .goog-te-gadget')
        ];
        gadgets.forEach(gadget => {
          if (gadget) gadget.style.fontSize = '0';
        });
      };

      const addMenuStyles = () => {
        const iframes = document.querySelectorAll('.goog-te-menu-frame');
        iframes.forEach(iframe => {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
          if (iframeDoc) {
            const menu = iframeDoc.querySelector('body') || iframeDoc.querySelector('.goog-te-menu2');
            if (menu) {
              menu.style.backgroundColor = '#ffffff';
              menu.style.border = '1px solid #38bdf8';
              menu.style.borderRadius = '12px';
              menu.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
              menu.style.padding = '8px 0';
              menu.style.maxHeight = '300px';
              menu.style.overflowY = 'auto';
            }

            const menuItems = iframeDoc.querySelectorAll('.goog-te-menu2-item span.text');
            menuItems.forEach(item => {
              item.style.color = '#2B3692';
              item.style.padding = '8px 20px';
              item.style.display = 'block';
              item.style.transition = 'background-color 0.2s ease';
              item.style.fontFamily = 'var(--primary-font)';
              item.addEventListener('mouseover', () => {
                item.style.backgroundColor = '#f0f9ff';
              });
              item.addEventListener('mouseout', () => {
                item.style.backgroundColor = 'transparent';
              });
            });

            const style = iframeDoc.createElement('style');
            style.textContent = `
              body { top: 0 !important; font-size: 13px !important; }
              .goog-te-banner-frame { display: none !important; }
              .goog-te-menu2 { scrollbar-width: thin; scrollbar-color: #38bdf8 #f0f9ff; }
              .goog-te-menu2::-webkit-scrollbar { width: 6px; }
              .goog-te-menu2::-webkit-scrollbar-track { background: #f0f9ff; border-radius: 10px; }
              .goog-te-menu2::-webkit-scrollbar-thumb { background-color: #38bdf8; border-radius: 10px; }
              .skiptranslate { display: none !important; }
              .a.VIpgJd-ZVi9od-l4eHX-hSRGPd { display: none !important; }
            `;
            iframeDoc.head.appendChild(style);
          }
        });
      };

      const fixTranslateLabel = () => {
        const combos = [
          document.querySelector('#google_translate_element .goog-te-combo'),
          document.querySelector('#google_translate_element_mobile .goog-te-combo')
        ];
        combos.forEach(combo => {
          if (combo && combo.options[0]) {
            combo.options[0].text = 'Languages';
          }
        });
      };

      addContainerStyles();
      addMenuStyles();
      fixTranslateLabel();
      const interval = setInterval(() => {
        addContainerStyles();
        addMenuStyles();
        fixTranslateLabel();
      }, 500);

      return () => clearInterval(interval);
    };

    styleGoogleTranslate();

    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header sticky top-0 bg-black shadow-md z-20 ">
      <div className="wrapper max-w-7xl mx-auto px-4">
        <div className="header-con flex justify-between items-center h-[80px]">
          <div className="logo">
            <img className="w-[175px] max-[1100px]:w-[140px]" src={logo} alt="NPAX Logo" />
          </div>
          {/* Desktop Nav */}
          <nav className="nav hidden min-[800px]:flex font-(family-name:--primary-font) text-white">
            <ul className="flex items-center gap-[35px] font-semibold text-[17px] uppercase text-white max-[1200px]:gap-[20px] max-[1100px]:gap-[15px] max-[1100px]:text-[16px] max-[1000px]:text-[14px] max-[1000px]:gap-[5px] max-[900px]:text-[13px]">
              <li><a href="/about" className="hover:text-sky-400 transition-colors duration-300">About Us</a></li>
              <li 
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <div className="flex items-center">
                  <a 
                    href="/products" 
                    className="hover:text-sky-400 transition-colors duration-300"
                    aria-expanded={isProductsOpen}
                  >
                    PRODUCTS AND SERVICES
                  </a>
                  <button 
                    onClick={() => setIsProductsOpen(!isProductsOpen)} 
                    className="ml-1 text-white hover:text-sky-400 transition-colors duration-300"
                    aria-expanded={isProductsOpen}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div 
                  className={`absolute left-0 top-full bg-black rounded-lg shadow-lg border border-sky-400/30 w-64 z-30 py-2 px-4 transition-all duration-300 ease-in-out ${isProductsOpen ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-2'}`}
                >
                  <ul className="space-y-2 text-sm">
                    <li 
                      className="relative"
                      onMouseEnter={() => setIsAdvancedOpen(true)}
                      onMouseLeave={() => setIsAdvancedOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <a 
                          href="#" 
                          className="hover:text-sky-400 transition-colors duration-300"
                          aria-expanded={isAdvancedOpen}
                        >
                          Advanced Analytics Solutions
                        </a>
                        <button 
                          onClick={() => setIsAdvancedOpen(!isAdvancedOpen)} 
                          className="text-white hover:text-sky-400 transition-colors duration-300"
                          aria-expanded={isAdvancedOpen}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                      <div 
                        className={`absolute left-full top-0 mt-0 bg-black rounded-lg shadow-lg border border-sky-400/30 w-64 z-30 py-2 px-4 transition-all duration-300 ease-in-out ${isAdvancedOpen ? 'block opacity-100 translate-x-0' : 'hidden opacity-0 -translate-x-2'}`}
                      >
                        <ul className="space-y-2 text-sm">
                          <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">BI and Dashboarding</a></li>
                        </ul>
                      </div>
                    </li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Digital Transformation Services</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">HRIS / Payroll System</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">ERP System</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Accounting System</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">IoT System</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Managed IT Services</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Paxyroll Cloud Timekeeping</a></li>
                  </ul>
                </div>
              </li>
              <li 
                className="relative"
                onMouseEnter={() => setIsBlogsOpen(true)}
                onMouseLeave={() => setIsBlogsOpen(false)}
              >
                <div className="flex items-center">
                  <a 
                    href="/blogs" 
                    className="hover:text-sky-400 transition-colors duration-300"
                    aria-expanded={isBlogsOpen}
                  >
                    Blogs
                  </a>
                  <button 
                    onClick={() => setIsBlogsOpen(!isBlogsOpen)} 
                    className="ml-1 text-white hover:text-sky-400 transition-colors duration-300"
                    aria-expanded={isBlogsOpen}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div 
                  className={`absolute left-0 top-full bg-black rounded-lg shadow-lg border border-sky-400/30 w-64 z-30 py-2 px-4 transition-all duration-300 ease-in-out ${isBlogsOpen ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-2'}`}
                >
                  <ul className="space-y-2 text-sm">
                    <li className="text-[#00bbff] font-semibold mb-1">News and Insights</li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Recent Blogs</a></li>
                    <li className="text-[#00bbff] font-semibold mt-3 mb-1">News & Events</li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Advanced Analytics</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Digital Transformation</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Human Resource Information</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Enterprise Resource Planning</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Accounting</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="/careers" className="hover:text-sky-400 transition-colors duration-300">Careers</a></li>
              <li><a href="/contact" className="hover:text-sky-400 transition-colors duration-300">Contact Us</a></li>
            </ul>
          </nav>
          <div className="translator hidden min-[800px]:block min-w-[120px] flex items-center justify-end">
            <div id="google_translate_element"></div>
          </div>
          {/* Mobile Menu Toggle with X Animation */}
          <button 
            className="min-[800px]:hidden text-white focus:outline-none relative w-8 h-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`absolute right-0 w-6 h-0.5 bg-white rounded transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 top-3.5' : 'top-2'}`}></span>
            <span className={`absolute right-0 w-6 h-0.5 bg-white rounded transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'top-3.5'}`}></span>
            <span className={`absolute right-0 w-6 h-0.5 bg-white rounded transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 top-3.5' : 'top-5'}`}></span>
          </button>
        </div>
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <Motion.div 
            className="min-[800px]:hidden relative bg-[#1a1a1a] rounded-[20px] shadow-lg border mx-4 my-2 px-6 py-4"
            style={{ backgroundImage: `url(${corner_upper_left_black})`, backgroundPosition: 'left top', backgroundRepeat: 'no-repeat' }}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            <ul className="flex flex-col gap-4 font-(family-name:--primary-font) font-semibold text-[17px] uppercase text-white">
              <li><a href="/about" className="hover:text-sky-400 transition-colors duration-300 block py-2">About Us</a></li>
              <li>
                <button 
                  onClick={() => setIsProductsOpen(!isProductsOpen)} 
                  className="w-full text-left hover:text-sky-400 transition-colors duration-300 flex items-center justify-between py-2"
                >
                  PRODUCTS AND SERVICES
                  <svg className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isProductsOpen && (
                  <ul className="mt-2 space-y-2 pl-4 text-sm normal-case border-l border-sky-400/50">
                    <li>
                      <button 
                        onClick={() => setIsAdvancedOpen(!isAdvancedOpen)} 
                        className="w-full text-left hover:text-sky-400 transition-colors duration-300 flex items-center justify-between py-1"
                      >
                        Advanced Analytics Solutions
                        <svg className={`w-4 h-4 transition-transform ${isAdvancedOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isAdvancedOpen && (
                        <ul className="mt-1 space-y-1 pl-4 text-xs">
                          <li><a href="#" className="hover:text-sky-400 transition-colors duration-300 block py-1">BI and Dashboarding</a></li>
                        </ul>
                      )}
                    </li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300 block py-1">Digital Transformation Services</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300 block py-1">HRIS / Payroll System</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300 block py-1">ERP System</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300 block py-1">Accounting System</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300 block py-1">IoT System</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300 block py-1">Managed IT Services</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300 block py-1">Paxyroll Cloud Timekeeping</a></li>
                  </ul>
                )}
              </li>
              <li>
                <button 
                  onClick={() => setIsBlogsOpen(!isBlogsOpen)} 
                  className="w-full text-left hover:text-sky-400 transition-colors duration-300 flex items-center justify-between py-2"
                >
                  BLOGS
                  <svg className={`w-4 h-4 transition-transform ${isBlogsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isBlogsOpen && (
                  <ul className="mt-2 space-y-2 pl-4 text-sm normal-case border-l border-sky-400/50">
                    <li className="text-[#00bbff] font-semibold mb-1">News and Insights</li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300 block py-1">Recent Blogs</a></li>
                    <li className="text-[#00bbff] font-semibold mt-3 mb-1">News & Events</li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300 block py-1">Advanced Analytics</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300 block py-1">Digital Transformation</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300 block py-1">Human Resource Information</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300 block py-1">Enterprise Resource Planning</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors duration-300 block py-1">Accounting</a></li>
                  </ul>
                )}
              </li>
              <li><a href="/careers" className="hover:text-sky-400 transition-colors duration-300 block py-2">Careers</a></li>
              <li><a href="/contact" className="hover:text-sky-400 transition-colors duration-300 block py-2">Contact Us</a></li>
            </ul>
            <div className="translator mt-4 min-w-[120px] flex items-center justify-start">
              <div id="google_translate_element_mobile"></div>
            </div>
          </Motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;