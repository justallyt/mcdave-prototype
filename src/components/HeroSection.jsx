import React from 'react'
import { NavLink } from 'react-router-dom'
import video from "../assets/video.mp4"
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

                               <div className="hero-btn">
                                        <NavLink to={'/expertise/'}>Explore</NavLink>
                               </div>
                      </div>
              </div>
              <div className="service-variations">
                        <div className="service-variant-row">
                                 <div className="service-variant-moja">
                                         <NavLink to={'/expertise/contract-manufacturing/'}>
                                                Contract Manufacturing
                                         </NavLink>
                                 </div>
                                 <div className="service-variant-moja">
                                         <NavLink to={'/expertise/custom-manufacturing/'}>
                                               Custom Manufacturing
                                         </NavLink>
                                 </div>
                                 <div className="service-variant-moja">
                                         <NavLink to={'/expertise/in-house-products/'}>
                                               In-House Products
                                         </NavLink>
                                 </div>
                        </div>
              </div>
    </div>
  )
}

export default HeroSection