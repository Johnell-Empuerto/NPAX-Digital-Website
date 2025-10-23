import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import contact from '../assets/images/contact-min.jpg';
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

const Contact = () => {
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

  useEffect(() => {
    // Load Google reCAPTCHA script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const recaptchaResponse = window.grecaptcha.getResponse();
    if (!recaptchaResponse) {
      alert('Please complete the reCAPTCHA.');
      return;
    }
    console.log('reCAPTCHA token:', recaptchaResponse);
    alert('Form submitted successfully! (Token: ' + recaptchaResponse + ')');
  };

  return (
    <div className='contact overflow-hidden py-10 bg-[var(--color-bg-dark)]'>
      <div className="wrapper max-w-7xl mx-auto px-4">
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] rounded-tl-[0] overflow-hidden bg-no-repeat bg-[var(--color-bg-glass)]">
          {/* Folder Tab Design */}
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[var(--color-bg-dark)] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-[var(--color-nav-white)]">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[var(--color-accent)] rounded-full mr-[1.25rem]"></span>
                Get in Touch
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

          {/* Section Title */}
          <h2 className="font-(family-name:--secondary-font) text-[45px] font-semibold text-center text-[var(--color-primary)]">
            How can we help?
          </h2>
          <p className="font-(family-name:--secondary-font) text-[16px] text-center pb-10 text-[var(--color-text-light)]">
            Tell us your needs and book a free consultation with our experts.
          </p>

          {/* Contact Grid */}
          <Motion.div 
            className="contact-con grid lg:grid-cols-2 grid-cols-1 gap-0 px-4 sm:px-8 pb-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Motion.div 
              className="img relative min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] overflow-hidden rounded-l-2xl max-[1023px]:rounded-none max-[1023px]:rounded-tl-[20px] max-[1023px]:rounded-tr-[20px]"
              variants={childVariants}
            >
              <img 
                src={contact}
                alt="Consultation" 
                className="absolute top-0 left-0 w-full h-full object-cover" 
              />
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 lg:p-8 z-10">
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                  <a href="tel:+1234567890" className="flex items-center mb-4 hover:opacity-80 transition-opacity">
                    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h5 className="text-[var(--color-secondary)] text-sm sm:text-base font-normal leading-6 ml-3 sm:ml-5">0995 564 7123</h5>
                  </a>
                  <a href="mailto:info@example.com" className="flex items-center mb-4 hover:opacity-80 transition-opacity">
                    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <h5 className="text-[var(--color-secondary)] text-sm sm:text-base font-normal leading-6 ml-3 sm:ml-5">npax@samplemail.com</h5>
                  </a>
                  <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
                    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z" stroke="var(--color-secondary)" strokeWidth="2"/>
                      <path d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z" stroke="var(--color-secondary)" strokeWidth="2"/>
                    </svg>
                    <h5 className="text-[var(--color-secondary)] text-sm sm:text-base font-normal leading-6 ml-3 sm:ml-5">Unit 1702, One global Place 5th Avenue, cor 25th BGC Taguig City, Philippines</h5>
                  </a>
                </div>
              </div>
            </Motion.div>
            <Motion.div 
              className="form bg-white p-4 sm:p-6 lg:p-8 rounded-r-2xl shadow-md hover:shadow-xl transition-shadow duration-300 max-[1023px]:rounded-none max-[1023px]:rounded-bl-[20px] max-[1023px]:rounded-br-[20px]"
              variants={childVariants}
            >
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input 
                    type="text" 
                    className="w-full h-12 text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] bg-transparent text-base sm:text-lg font-normal leading-7 rounded-full border border-[var(--color-border-light)] focus:outline-none focus:border-[var(--color-sky)] pl-4 transition-colors" 
                    placeholder="First Name" 
                    required
                  />
                  <input 
                    type="text" 
                    className="w-full h-12 text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] bg-transparent text-base sm:text-lg font-normal leading-7 rounded-full border border-[var(--color-border-light)] focus:outline-none focus:border-[var(--color-sky)] pl-4 transition-colors" 
                    placeholder="Last Name" 
                    required
                  />
                </div>
                <input 
                  type="text" 
                  className="w-full h-12 text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] bg-transparent text-base sm:text-lg font-normal leading-7 rounded-full border border-[var(--color-border-light)] focus:outline-none focus:border-[var(--color-sky)] pl-4 mb-4 transition-colors" 
                  placeholder="Company" 
                  required
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input 
                    type="email" 
                    className="w-full h-12 text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] bg-transparent text-base sm:text-lg font-normal leading-7 rounded-full border border-[var(--color-border-light)] focus:outline-none focus:border-[var(--color-sky)] pl-4 transition-colors" 
                    placeholder="Email Address" 
                    required
                  />
                  <input 
                    type="tel" 
                    className="w-full h-12 text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] bg-transparent text-base sm:text-lg font-normal leading-7 rounded-full border border-[var(--color-border-light)] focus:outline-none focus:border-[var(--color-sky)] pl-4 transition-colors" 
                    placeholder="Contact No." 
                    required
                  />
                </div>
                <textarea 
                  className="w-full h-32 text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] bg-transparent text-base sm:text-lg font-normal leading-7 rounded-2xl border border-[var(--color-border-light)] focus:outline-none focus:border-[var(--color-sky)] p-4 mb-4 transition-colors resize-none" 
                  placeholder="Message" 
                  required
                ></textarea>
                <div className="flex items-center mb-4 w-full overflow-hidden">
                  <div className="g-recaptcha transform scale-100 sm:scale-100 max-[500px]:scale-[0.77] origin-left" data-sitekey="6LdXRO0rAAAAAFaTiHifbgcvjoUnX3Cp3KQrUYqT"></div>
                </div>
                <button 
                  type="submit"
                  className="w-full h-12 text-[var(--color-text-light)] text-base font-semibold leading-6 rounded-full transition-all duration-300 hover:bg-[var(--color-sky)] bg-[var(--color-secondary)] shadow-sm"
                >
                  Submit
                </button>
              </form>
            </Motion.div>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;