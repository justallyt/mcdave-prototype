import React from 'react'
import factory1 from "../assets/factory4.jpg"
import product from "../assets/product.jpg"
import Values from './Values'
const AboutBody = () => {
  return (
    <div className='about-body-section'>
           <div className="inner-row"> 
                  <div className="about-body-content">
                          <div className="about-body-images">
                                   <div className="about-body-image-moja">
                                          <img src={factory1} alt="" />
                                   </div>
                                   <div className="about-body-image-moja">
                                          <img src={product} alt="" />
                                   </div>
                          </div>
                          <div className="about-body-description">
                                  <div className="about-body-description-inner">
                                     <div className="top-body">
                                          <p>Mcdave Holdings Limited is a family owned business established in 2010. The business started with powder chemical mixing out of a realization of a gap in capacity for those manufacturing detergents and cleaning products.</p>
                                          <p>The company later invested in equipment and moved to full end to end manufacturing in 2016. Since then, the company has grown to establish itself as a reputable contract manufacturer, producing products for some of the most notable local and international brands and institutions.</p>
                                    </div>

                                    <div className="statements-body">
                                          <div className="statement-moja">
                                                  <h2>Our Vision</h2>
                                                  <p>To be a global icon of manufacturing excellence in hygiene and personal care products</p>
                                          </div>
                                          <div className="statement-moja">
                                                  <h2>Our Mission</h2>
                                                  <p>Our Mission is to take away the complexity and stress of manufacturing hygiene and personal care products for our clients whilst offering world class quality and value.</p>
                                          </div>
                                     </div>
                                  </div>
                          </div>
                  </div>

                  <Values />
           </div>
    </div>
  )
}

export default AboutBody