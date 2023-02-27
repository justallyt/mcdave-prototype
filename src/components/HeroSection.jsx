import React from 'react'
import { NavLink } from 'react-router-dom'
import video from "../assets/video.mp4"
import Countup from 'react-countup'

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
                                                  <h3><Countup end={25} duration={3} enableScrollSpy={true} scrollSpyOnce={true}/>+</h3>
                                                  <p>Manufacturing brands</p>
                                         </div>
                                 </div>
                                 <div className="service-variant-moja">
                                        <div className="service-variant-inner">
                                                  <h3><Countup end={400}  enableScrollSpy={true} scrollSpyOnce={true}/>+</h3>
                                                  <p>Tonnes of Manufactured Product.</p>
                                         </div>
                                 </div>
                                 <div className="service-variant-moja">
                                         <div className="service-variant-inner">
                                                  <h3><Countup end={16}  duration={3} enableScrollSpy={true} scrollSpyOnce={true}/>+</h3>
                                                  <p>Consistent Clients</p>
                                         </div>
                                 </div>
                                 <div className="service-variant-moja">
                                         <div className="service-variant-inner">
                                                  <h3><Countup end={13} duration={3} enableScrollSpy={true} scrollSpyOnce={true}/>+</h3>
                                                  <p></p>Years of Experience
                                         </div>
                                 </div>
                        </div>
              </div>
    </div>
  )
}

export default HeroSection