import React from 'react'
import { RxArrowRight } from "react-icons/rx"
import { NavLink } from 'react-router-dom'
const AboutSection = () => {
  return (
    <div className='about-section'>
           <div className="inner-row">
                  <div className="about-section-content">
                            <div className="bg-circle"></div>
                            <div className="bg-small-circle"></div>
                            <div className="about-section-content-row">
                                     <div className="about-section-left-column">
                                             <h3>Who we are</h3>
                                             <h2>Professional manufacturing services</h2>
                                     </div>
                                     <div className="about-section-right-column">
                                              <p>Mcdave Holdings Limited is an established Contract Manufacturer and own brand manufacturer based in Nairobi Kenya. We manufacture quality hygiene and personal care products for local, international brands and institutions.</p>

                                              <NavLink to={'/about-us/'}>Explore More <span><RxArrowRight /></span></NavLink>
                                     </div>
                            </div>
                  </div>
           </div>
    </div>
  )
}

export default AboutSection