import React from 'react'
import { NavLink } from 'react-router-dom'
import video from "../assets/video.mp4"
import service from "../assets/customer-support.png"
import innovation from "../assets/innovation.png"
import quality from "../assets/checked.png"

const HeroSection = () => {
  return (
    <div className='hero-section'>
               <div className="media-background">
                        <video className='video' playsInline loop autoPlay muted preload='auto'>
                                 <source src={video} type='video/mp4'/>
                        </video>
                        <div className="overlay"></div>
               </div>
              <div className="hero-section-content">
                      <div className="hero-texts">
                               <h1>Manufacturing Excellence</h1>
                                <p>We take away the complexity and stress of manufacturing hygiene and personal care products for our clients whilst offering world class quality and value.</p>
                               <div className="hero-btn">
                                        <NavLink to={'/expertise/'}>Explore</NavLink>
                               </div>
                      </div>
              </div>
              <div className="service-variations">
                        <div className="service-variant-row">
                                 <div className="service-variant-moja">
                                         <div className="service-variant-inner">
                                                  <div className="icon-section">
                                                         <img src={service} alt="" />
                                                  </div>
                                                  <h3>Service</h3>
                                                  <p>We consistently achieve customer satisfaction by offering products and services on time and in full in the most efficient manner</p>
                                         </div>
                                 </div>
                                 <div className="service-variant-moja">
                                        <div className="service-variant-inner">
                                                  <div className="icon-section">
                                                         <img src={quality} alt="" />
                                                  </div>
                                                  <h3>Quality</h3>
                                                  <p>We consistently achieve customer satisfaction by offering products and services of the highest quality, to meet or exceed expectation.</p>
                                         </div>
                                 </div>
                                 <div className="service-variant-moja">
                                         <div className="service-variant-inner">
                                                  <div className="icon-section">
                                                         <img src={innovation} alt="" />
                                                  </div>
                                                  <h3>Sustainability</h3>
                                                  <p>We are keen on meeting the needs of the present without compromising the ability of future generations</p>
                                         </div>
                                 </div>
                        </div>
              </div>
    </div>
  )
}

export default HeroSection