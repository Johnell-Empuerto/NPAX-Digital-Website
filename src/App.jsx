import React from 'react'
import './css/style.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import Middle from './sections/Middle'
import Bottom from './sections/Bottom'
import Testimonial from './sections/Testimonial'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Hero />
      <Middle />
      <Bottom />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App