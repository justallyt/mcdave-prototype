import React from 'react'
import contract from "../assets/contract.jpg"
import custom from "../assets/custom.jpg"
import inhouse from "../assets/inhouse.jpg"
import { RxArrowRight } from "react-icons/rx"
import { NavLink } from 'react-router-dom'

const Capabilities = () => {
  return (
    <div className='capability-section'>
            <div className="inner-row">
                    <div className="capability-section-content">
                             <div className="capability-intro">
                                     <h3>What we do</h3>
                                     <p>We serve Local and International brands and Institutions looking for efficient and cost effective ways of manufacturing hygiene and personal care products.</p>
                             </div>
                             <div className="capability-section-row">
                                     <div className="capability-section-column">
                                              <div className="small-bubble normal"></div>
                                               <div className="capability-description-side">
                                                        <div className="capability-description-inner">
                                                                  <h2>Contract Manufacturing</h2>
                                                                  <p>We offer end to end manufacturing services giving you a one-stop shop for products such as sanitizers, toilet cleaners, liquid detergents, hand washing liquid soap, bleach etc.</p>

                                                                  <NavLink to={'/expertise/contract-manufacturing/'}>
                                                                       <span>
                                                                            <RxArrowRight  className='icon'/>
                                                                       </span>
                                                                      <span>Learn more</span></NavLink>
                                                        </div>
                                               </div>
                                               <div className="capability-image-side">
                                                      <img src={contract} alt="" />
                                               </div>
                                     </div>
                                     <div className="capability-section-column">
                                               <div className="small-bubble shift"></div>
                                               <div className="capability-image-side">
                                                      <img src={custom} alt="" />
                                               </div>
                                               <div className="capability-description-side">
                                                        <div className="capability-description-inner">
                                                                  <h2>Custom Manufacturing</h2>

                                                                  <p>We tailor our solutions to each client's specific individual need to provide date coding, promotional banding, sleeving, packing and repacking of powder and liquids etc.</p>

                                                                  <NavLink to={'/expertise/custom-manufacturing/'}>
                                                                       <span>
                                                                            <RxArrowRight  className='icon'/>
                                                                       </span>
                                                                      <span>Learn more</span></NavLink>
                                                        </div>
                                               </div>         
                                     </div>
                                     <div className="capability-section-column">
                                     <div className="small-bubble normal tweak"></div>
                                               <div className="capability-description-side">
                                                        <div className="capability-description-inner">
                                                                  <h2>In House Products</h2>
                                                                  <p>We are masters in manufacturing and therefore produce quality inhouse products into the market.</p>

                                                                  <NavLink to={'/expertise/in-house-products/'}>
                                                                       <span>
                                                                            <RxArrowRight  className='icon'/>
                                                                       </span>
                                                                      <span>Learn more</span></NavLink>
                                                        </div>
                                               </div>
                                               <div className="capability-image-side">
                                                      <img src={inhouse} alt="" />
                                               </div>
                                     </div>
                             </div>
                    </div>
            </div>
    </div>
  )
}

export default Capabilities