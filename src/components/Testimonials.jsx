import React from 'react'
import satisfaction1 from "../assets/satisfation1.jpg"
import satisfaction2 from "../assets/satisfation2.jpg"
import satisfaction3 from "../assets/satisfaction3.jpg"
import { testimonials } from '../data/testimonials'
import { useLocation } from 'react-router-dom'
const Testimonials = () => {
   const param = useLocation()
  return (
    <div className='testimonials-section'>
          <div className="inner-row">
                 <div className="testimonials-section-content">
                          <div className="testimonial-images">
                                  <div className="testimonial-image-moja">
                                           <img src={satisfaction1} alt="" />
                                  </div>
                                  <div className="testimonial-image-moja">
                                           <img src={satisfaction2} alt="" />
                                  </div>
                                  <div className="testimonial-image-moja">
                                           <img src={satisfaction3} alt="" />
                                  </div>
                          </div>
                          <div className="testimonial-wordings">
                                 { testimonials.map(item => 
                                     <div key={item.id} className="wording-moja">
                                             <p>{item.wording}</p>
                                             <div className="profile-part">
                                                     <div className="image-section">      
                                                             { param.pathname === '/company/' ?
                                                                     <img src={`../${item.image}`} alt="" />
                                                              :
                                                                  <img src={item.image} alt="" />
                                                              }
                                                     </div>
                                                     <div className="profile-texts">
                                                            <h3>{item.author}</h3>
                                                            <p>{item.position}</p>
                                                     </div>
                                             </div>
                                     </div>    
                                )}
                          </div>
                 </div>
          </div>
    </div>
  )
}

export default Testimonials