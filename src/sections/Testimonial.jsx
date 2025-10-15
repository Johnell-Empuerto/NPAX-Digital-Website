import React from 'react';
import { motion as Motion } from 'framer-motion';
import testimonialImg from '../assets/images/Philip_Alexander_Conde.png';
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
    <div className='testimonial bg-gradient-to-b from-[#f0f9ff] to-white overflow-hidden py-10'>
      <div className="wrapper max-w-7xl mx-auto px-4">
        <h2 className="font-(family-name:--secondary-font) text-[45px] font-semibold text-center text-[#00bbff]">
          What Our Clients Say
        </h2>
        <p className="font-(family-name:--secondary-font) text-[16px] text-center pb-10">
          Real stories of success from trusted partners worldwide.
        </p>
        <Motion.div 
          className="testimonial-con max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          variants={testimonialVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Carousel Template Structure - For a full carousel, integrate a library like react-slick or use Framer Motion for sliding */}
          {/* Here, we display the first one; expand with carousel logic as needed */}
          <div className="flex flex-col items-center gap-6">
            <img 
              src={testimonials[0].image} 
              alt={testimonials[0].name} 
              className="w-24 h-24 rounded-full object-cover shadow-md" 
            />
            <div className="text-center">
              <p className="text-[16px] font-(family-name:--secondary-font) text-gray-700 italic mb-4">
                "{testimonials[0].quote}"
              </p>
              <p className="text-[18px] font-(family-name:--secondary-font) font-bold text-[#2B3692]">
                {testimonials[0].name}
              </p>
              <p className="text-[14px] font-(family-name:--secondary-font) text-gray-500">
                {testimonials[0].title}
              </p>
            </div>
          </div>
          {/* To implement a carousel, you can wrap multiple items in a slider component */}
          {/* Example: Use Framer Motion for simple animation or add a carousel library */}
        </Motion.div>
      </div>
    </div>
  );
};

export default Testimonial;