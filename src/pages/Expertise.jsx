import React from 'react'
import "../css/expertise.css"
import Navigation from '../components/Navigation/Navigation'
import ServiceBody from '../components/ServiceBody'
import Footer from '../components/Footer'
import Nudge from '../components/Nudge'
const Expertise = () => {
  return (
    <>
         <div className="hero-intro expertise">
                  <Navigation />
                  <div className="hero-content">
                           <div className="inner-row">
                                    <h1>Experts in Manufacturing</h1>
                           </div>
                  </div>
          </div>
          <ServiceBody />
          <Nudge />
          <Footer />
    </>
  )
}

export default Expertise