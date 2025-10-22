import React from 'react';
import { motion as Motion } from 'framer-motion';
import testimonialImg from '../assets/images/Philip_Alexander_Conde.png';
import corner_upper_left_black from '../assets/images/corner_upper_left_black.webp';
// Placeholder for additional images - add more as needed
// import testimonialImg2 from '../assets/images/another_person.png';
// import testimonialImg3 from '../assets/images/yet_another_person.png';

const testimonialVariants = {
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

// Sample testimonials data - expand this array for more slides
const testimonials = [
  {
    image: testimonialImg,
    quote: "N-PAX has been a great partner for us for over a decade. Their continued passion in delivering excellent quality personnel and services has been outstanding. Every individual that I have dealt with at Npax has proven to be highly skilled, creative. effective communicators, dedicated and professionalism that's unmatched in the market. Their low levels of attrition is a direct result of a great company culture that embraces communication and emphasis on employee work-life balance",
    name: "Philip Alexander Conde",
    title: "VP Technology, APAC",
  },
  // Add more testimonials here
  // {
  //   image: testimonialImg2,
  //   quote: "Another great testimonial quote here.",
  //   name: "Jane Doe",
  //   title: "CEO, Company XYZ",
  // },
  // {
  //   image: testimonialImg3,
  //   quote: "Yet another testimonial quote here.",
  //   name: "John Smith",
  //   title: "CTO, Company ABC",
  // },
];

const Testimonial = () => {
  return (
    <div className='testimonial overflow-hidden py-10 bg-[#000]'>
      <div className="wrapper max-w-7xl mx-auto px-4">
        <div className="curvebgdesign relative w-full backdrop-blur-10xl backdrop-brightness-10 rounded-[20px] shadow-lg overflow-hidden bg-no-repeat bg-white/10 pb-10">
          
          {/* Folder Tab Design - Adapted for Testimonials */}
          <div className="folder_head flex flex-row flex-nowrap">
            <div className="folder_label_left h-[68px] text-center">
              <div className="folder_label_left_inner w-full h-full flex items-center bg-[#000000] rounded-br-[20px] text-[1.25rem] font-semibold pr-[30px] pl-[30px] text-white">
                <span className="yellow_dot inline-block w-[10px] h-[10px] bg-[#F9AF4B] rounded-full mr-[1.25rem]"></span>
                Testimonials
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

          {/* Section Title - Consistent styling */}
          <h2 className="font-(family-name:--secondary-font) text-[45px] font-semibold text-center text-[#00bbff]">
            What Our Clients Say
          </h2>
          <p className="font-(family-name:--secondary-font) text-[16px] text-center pb-10 text-white">
            Real stories of success from trusted partners worldwide.
          </p>

          {/* Testimonial Card - White bg like content boxes, with enhanced styling */}
          <div className='mx-[20px]'>
            <Motion.div 
              className="testimonial-con max-w-4xl mx-auto p-8 px-[20px] pb-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={testimonialVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* For multiple testimonials, integrate a carousel (e.g., react-slick). Here, displaying the first; add slider for more. */}
              <div className="flex flex-col items-center gap-6">
                <img 
                  src={testimonials[0].image} 
                  alt={testimonials[0].name} 
                  className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-sky-400" 
                />
                <div className="text-center max-w-3xl">
                  <p className="text-[18px] font-(family-name:--secondary-font) text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonials[0].quote}"
                  </p>
                  <p className="text-[20px] font-(family-name:--secondary-font) font-bold text-[#2B3692]">
                    {testimonials[0].name}
                  </p>
                  <p className="text-[16px] font-(family-name:--secondary-font) text-gray-500">
                    {testimonials[0].title}
                  </p>
                </div>
              </div>
              {/* Carousel Note: To add sliding, wrap in a slider component. Example with Framer: Use drag="x" for simple swipe, or add library. */}
            </Motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;