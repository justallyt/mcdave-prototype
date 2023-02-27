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
                                             <h2>Professional Contract manufacturing services</h2>
                                             <p>Mcdave Holdings Limited is an established Contract Manufacturer based in Nairobi Kenya. We manufacture quality hygiene and personal care products for local and international brands and institutions.</p>
                                     </div>
                                     <div className="about-section-right-column">
                                              <p>Several barriers to entry exist for businesses looking to venture into manufacturing. These barriers include lack of enough capital for required equipment, facilities and labour, and lack of technical expertise. Contract manufacturing makes it easier for a company to produce its products without having to take on considerable overheads. </p>
                                               <p>For more established brands with increasing demand, it typically becomes less cost-effective to handle all processes and the manufacturing of every individual piece internally. Contract manufacturing enables these brands to maintain a lean structure, keep overheads low and scale their operations.</p>
                                              <NavLink to={'/about-us/'}>Explore More <span><RxArrowRight /></span></NavLink>
                                     </div>
                            </div>
                  </div>
           </div>
    </div>
  )
}

export default AboutSection