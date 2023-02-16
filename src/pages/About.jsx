import React from 'react'
import "../css/about.css"
import Navigation from "../components/Navigation/Navigation"
import AboutBody from '../components/AboutBody'
import Choose from "../components/Choose"
import Nudge from "../components/Nudge"
import Team from '../components/Team'
import Partners from "../components/Partners"
import Footer from "../components/Footer"

const About = () => {
  return (
    <>
          <div className="hero-intro">
                  <Navigation />
                  <div className="hero-content">
                           <div className="inner-row">
                                    <h1>About McDave</h1>
                           </div>
                  </div>
          </div>
          <AboutBody />
          <Choose />
          <Nudge />
          <Team />
          <Partners />
          <Footer />
    </>
  )
}

export default About