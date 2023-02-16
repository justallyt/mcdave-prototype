import React from 'react'
import { team } from '../data/team'
import { ImFacebook } from "react-icons/im"
import { ImTwitter } from "react-icons/im"
import { RiLinkedinFill } from "react-icons/ri"
const Team = () => {
  return (
    <div className='team-section'>
           <div className="inner-row">
                 <div className="team-section-content">
                         <div className="team-intro">
                                <h3>Our Team</h3>
                                <h1>Explore McDave Team Members</h1>
                         </div>
                         <div className="team-section-row">
                                 { team.map(item => 
                                       <div key={item.id} className="team-moja">
                                                 <div className="image-section">
                                                         <img src={item.image} alt="" /> 
                                                 </div>
                                                 <div className="image-overlay"></div>
                                                 <div className="team-details">
                                                         <div className="team-details-inner">
                                                                   <h2>{item.name}</h2>
                                                                   <p>{item.title}</p>
                                                         </div>
                                                 </div>
                                                 <div className="team-socials">
                                                          <ul>
                                                                <li><a href="s"><ImFacebook /></a></li>
                                                                <li><a href="s"><RiLinkedinFill /></a></li>
                                                                <li><a href="s"><ImTwitter /></a></li>
                                                          </ul>
                                                 </div>
                                       </div>
                                    )}
                         </div>

                 </div>
           </div>
           
           <div className="team-photo">  </div>
    </div>
  )
}

export default Team