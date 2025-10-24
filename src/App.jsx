import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/style.css';
import Header from './components/Header';
import Hero from './sections/Hero';
import Middle from './sections/Middle';
import Bottom from './sections/Bottom';
import Testimonial from './sections/Testimonial';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeToggle, BackToTop } from './components/BackToTop';
import About from './pages/About';
import Analytics from './pages/Analytics';
import MotionBoard from './pages/MotionBoard';

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Middle />
                <Bottom />
                <Testimonial />
                <Blog />
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/motionboard" element={<MotionBoard />} />
          {/* You can add more pages here, e.g. */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Blog />
        <Contact />
        <Footer />
        <BackToTop />
        <ThemeToggle />
      </div>
    </Router>
  );
};

export default App;
