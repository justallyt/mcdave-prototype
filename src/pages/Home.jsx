import React from 'react'
import "../css/home.css"
import HeroSection from '../components/HeroSection'
import Navigation from '../components/Navigation/Navigation'
import AboutSection from '../components/AboutSection'
import Capabilities from '../components/Capabilities'
import Choose from '../components/Choose'
import Nudge from '../components/Nudge'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
          <div className="landing">
                   <Navigation />
                   <HeroSection />
          </div>
          <AboutSection />
          <Capabilities />
          <Choose />
          <Nudge />
          <Partners />
          <Footer />
    </>
  )
}

export default Home