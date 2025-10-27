import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './css/style.css';
import Header from './components/Header';
import Hero from './sections/Hero';
import Middle from './sections/Middle';
import Bottom from './sections/Bottom';
import Introducing from './sections/Introducing';
import Testimonial from './sections/Testimonial';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeToggle, BackToTop } from './components/BackToTop';
import About from './pages/About';
import Analytics from './pages/Analytics';
import MotionBoard from './pages/MotionBoard';
import NotFound from './pages/NotFound';
import DigitalTransformation from './pages/DigitalTransformation';

const Layout = () => {
  const location = useLocation();
  
  // Hide layout only for 404 page
  const hideLayout = location.pathname === '/404' || location.pathname === '*';

  return (
    <div className="app-container">
      {/* Header visible on all except 404 */}
      {!hideLayout && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Middle />
              <Introducing />
              <Bottom />
              <Testimonial />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/motionboard" element={<MotionBoard />} />
        <Route path="/digital-transformation" element={<DigitalTransformation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Blog and Contact shown on all pages except 404 */}
      {!hideLayout && (
        <>
          <Blog />
          <Contact />
          <Footer />
        </>
      )}

      <BackToTop />
      <ThemeToggle />
    </div>
  );
};

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
