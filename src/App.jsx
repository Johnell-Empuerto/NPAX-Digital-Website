import React from 'react'
import './css/style.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import Middle from './sections/Middle'
import Bottom from './sections/Bottom'

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Hero />
      <Middle />
      <Bottom />
    </div>
  )
}

export default App