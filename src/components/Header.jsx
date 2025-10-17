import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);

  useEffect(() => {
    // Google Translate Initialization
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en', // Default language
        includedLanguages: 'en,es,fr,de,ar,hi,zh-CN,ru,pt,ja', // Add more languages as needed
        layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL, // Changed to HORIZONTAL for flags and simpler look
        autoDisplay: false,
        multilanguagePage: true
      }, 'google_translate_element');
    };

    // Load Google Translate script
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    // Function to inject custom styles for a clean, Elfsight-like appearance
    const styleGoogleTranslate = () => {
      // Style the main container (button-like with current language and dropdown)
      const addContainerStyles = () => {
        const container = document.querySelector('#google_translate_element .goog-te-combo');
        if (container) {
          // Make it look like a simple rounded button
          container.style.backgroundColor = '#f0f9ff'; // Light sky-blue
          container.style.border = '1px solid #38bdf8'; // Sky-blue border
          container.style.borderRadius = '9999px'; // Pill-shaped
          container.style.padding = '6px 12px';
          container.style.fontFamily = 'var(--primary-font)';
          container.style.fontSize = '14px';
          container.style.color = '#2B3692'; // Dark blue text
          container.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)'; // Subtle shadow for depth
          container.style.transition = 'all 0.3s ease';
          container.style.cursor = 'pointer';

          // Hide unnecessary elements if any
          const gadget = document.querySelector('.goog-te-gadget');
          if (gadget) {
            gadget.style.fontSize = '0'; // Hide "Powered by" text
          }

          // Hover effect
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
      };

      // Style the dropdown menu (iframe)
      const addMenuStyles = () => {
        const iframe = document.querySelector('#goog-te-menu-frame') || document.querySelector('.goog-te-menu-frame');
        if (iframe) {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
          if (iframeDoc) {
            // Style the menu container
            const menu = iframeDoc.querySelector('body') || iframeDoc.querySelector('.goog-te-menu2');
            if (menu) {
              menu.style.backgroundColor = '#ffffff'; // White background
              menu.style.border = '1px solid #38bdf8'; // Sky-blue border
              menu.style.borderRadius = '12px'; // Softer rounded corners
              menu.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'; // Deeper shadow for popup feel
              menu.style.padding = '8px 0';
              menu.style.maxHeight = '300px';
              menu.style.overflowY = 'auto';
            }

            // Style individual menu items
            const menuItems = iframeDoc.querySelectorAll('.goog-te-menu2-item span.text');
            menuItems.forEach(item => {
              item.style.color = '#2B3692';
              item.style.padding = '8px 20px';
              item.style.display = 'block';
              item.style.transition = 'background-color 0.2s ease';
              item.style.fontFamily = 'var(--primary-font)';
              item.addEventListener('mouseover', () => {
                item.style.backgroundColor = '#f0f9ff'; // Light blue hover
              });
              item.addEventListener('mouseout', () => {
                item.style.backgroundColor = 'transparent';
              });
            });

            // Custom scrollbar
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
        }
      };

      // Replace "Pumili ng wika" with "Languages"
      const fixTranslateLabel = () => {
        const combo = document.querySelector('#google_translate_element .goog-te-combo');
        if (combo && combo.options[0]) {
          combo.options[0].text = 'Languages';  // Or whatever custom text you want
        }
      };

      // Apply styles and re-apply periodically
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

    // Run styling
    styleGoogleTranslate();

    // Cleanup
    return () => {
      if (document.getElementById('google-translate-script')) {
        // Optional cleanup
      }
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <header className="header sticky top-0 bg-black shadow-md z-20">
      <div className="wrapper max-w-7xl mx-auto px-4">
        <div className="header-con flex justify-between items-center h-[80px]">
          <div className="logo">
            <img className="w-[175px]" src={logo} alt="NPAX Logo" />
          </div>
          {/* Desktop Nav */}
          <nav className="nav hidden md:flex font-(family-name:--primary-font) text-white">
            <ul className="flex items-center gap-[35px] font-semibold text-[17px] uppercase text-white">
              <li><a href="/about" className="hover:text-sky-400 transition-colors duration-300">About Us</a></li>
              <li className="relative group">
                <a href="/products" className="hover:text-sky-400 transition-colors duration-300 flex items-center cursor-pointer">
                  Products and Services
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <div className="absolute left-0 top-full hidden group-hover:block bg-black rounded-lg shadow-lg border border-sky-400/30 w-64 z-30 py-2 px-4 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2">
                  <ul className="space-y-2 text-sm">
                    <li className="relative group/sub">
                      <a href="#" className="hover:text-sky-400 transition-colors duration-300 flex items-center justify-between">
                        Advanced Analytics Solutions
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      <div className="absolute left-full top-0 mt-0 hidden group-hover/sub:block bg-black rounded-lg shadow-lg border border-sky-400/30 w-64 z-30 py-2 px-4 transition-all duration-300 ease-in-out opacity-0 group-hover/sub:opacity-100 transform group-hover/sub:translate-x-0 -translate-x-2">
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
              <li className="relative group">
                <a href="/blogs" className="hover:text-sky-400 transition-colors duration-300 flex items-center cursor-pointer">
                  Blogs
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <div className="absolute left-0 top-full hidden group-hover:block bg-black rounded-lg shadow-lg border border-sky-400/30 w-64 z-30 py-2 px-4 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2">
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
          <div className="translator hidden md:block min-w-[120px] flex items-center justify-end">
            {/* Google Translate Widget */}
            <div id="google_translate_element"></div>
          </div>
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black px-4 py-4 shadow-md">
            <ul className="flex flex-col gap-4 font-semibold text-[17px] uppercase text-white">
              <li><a href="/about" className="hover:text-sky-400 transition-colors">About Us</a></li>
              <li>
                <button 
                  onClick={() => setIsProductsOpen(!isProductsOpen)} 
                  className="w-full text-left hover:text-sky-400 transition-colors flex items-center justify-between"
                >
                  Products and Services
                  <svg className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isProductsOpen && (
                  <ul className="mt-2 space-y-2 pl-4 text-sm normal-case border-l border-sky-400/50">
                    <li>
                      <button 
                        onClick={() => setIsAdvancedOpen(!isAdvancedOpen)} 
                        className="w-full text-left hover:text-sky-400 transition-colors flex items-center justify-between"
                      >
                        Advanced Analytics Solutions
                        <svg className={`w-4 h-4 transition-transform ${isAdvancedOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isAdvancedOpen && (
                        <ul className="mt-1 space-y-1 pl-4 text-xs">
                          <li><a href="#" className="hover:text-sky-400 transition-colors">BI and Dashboarding</a></li>
                        </ul>
                      )}
                    </li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">Digital Transformation Services</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">HRIS / Payroll System</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">ERP System</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">Accounting System</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">IoT System</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">Managed IT Services</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">Paxyroll Cloud Timekeeping</a></li>
                  </ul>
                )}
              </li>
              <li>
                <button 
                  onClick={() => setIsBlogsOpen(!isBlogsOpen)} 
                  className="w-full text-left hover:text-sky-400 transition-colors flex items-center justify-between"
                >
                  Blogs
                  <svg className={`w-4 h-4 transition-transform ${isBlogsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isBlogsOpen && (
                  <ul className="mt-2 space-y-2 pl-4 text-sm normal-case border-l border-sky-400/50">
                    <li className="text-[#00bbff] font-semibold mb-1">News and Insights</li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">Recent Blogs</a></li>
                    <li className="text-[#00bbff] font-semibold mt-3 mb-1">News & Events</li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">Advanced Analytics</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">Digital Transformation</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">Human Resource Information</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">Enterprise Resource Planning</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">Accounting</a></li>
                  </ul>
                )}
              </li>
              <li><a href="/careers" className="hover:text-sky-400 transition-colors">Careers</a></li>
              <li><a href="/contact" className="hover:text-sky-400 transition-colors">Contact Us</a></li>
            </ul>
            <div className="translator mt-4 min-w-[120px] flex items-center justify-start">
              {/* Google Translate for mobile */}
              <div id="google_translate_element_mobile"></div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;