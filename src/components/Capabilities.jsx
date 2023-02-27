import React from 'react'
import contract from "../assets/contract.jpg"
import repacking from "../assets/repacking.jpg"
import datecoding from "../assets/date-coding.jpg"
import banding from "../assets/banding.jpg"
import sleeving from "../assets/sleeving.jpg"
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
                                                                  <h2>Manufacturing</h2>
                                                                  <p>We offer end to end manufacturing services giving you a one-stop shop for products such as sanitizers, toilet cleaners, liquid detergents, hand washing liquid soap, bleach etc.</p>

                                                                  <NavLink to={'/service/contract-manufacturing/'}>
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
                                                      <img src={repacking} alt="" />
                                               </div>
                                               <div className="capability-description-side">
                                                        <div className="capability-description-inner">
                                                                  <h2>Packing & Repacking</h2>

                                                                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque accusantium eius necessitatibus ipsum, labore nam perspiciatis repellat itaque eligendi dolorum odio fuga dolore voluptatum corrupti tempore nostrum harum placeat iusto.</p>

                                                                  <NavLink to={'/service/packing-and-repacking/'}>
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
                                                                  <h2>Date Coding</h2>
                                                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quod aliquid repellendus voluptatum esse eius, provident nisi. Nobis dolore aut eius molestiae tempora magnam rem, voluptatum sed dignissimos optio nisi.</p>

                                                                  <NavLink to={'/service/date-coding/'}>
                                                                       <span>
                                                                            <RxArrowRight  className='icon' />
                                                                       </span>
                                                                      <span>Learn more</span></NavLink>
                                                        </div>
                                               </div>
                                               <div className="capability-image-side">
                                                      <img src={datecoding} alt="" />
                                               </div>
                                     </div>
                                     <div className="capability-section-column">
                                               <div className="small-bubble shift"></div>
                                               <div className="capability-image-side">
                                                      <img src={banding} alt="" />
                                               </div>
                                               <div className="capability-description-side">
                                                        <div className="capability-description-inner">
                                                                  <h2>Promotional Banding</h2>

                                                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non? Praesentium, corporis. Ratione debitis quidem officia necessitatibus aspernatur eveniet maiores atque ipsam saepe, corrupti perferendis veritatis omnis cupiditate. Accusamus, id.</p>

                                                                  <NavLink to={'/service/promotional-banding/'}>
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
                                                                  <h2>Sleeving</h2>
                                                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam est officia id praesentium hic tempore inventore eaque facere a soluta reiciendis esse, quis illum repellendus. Aspernatur pariatur perspiciatis sequi quae?</p>

                                                                  <NavLink to={'/service/sleeving/'}>
                                                                       <span>
                                                                            <RxArrowRight  className='icon'/>
                                                                       </span>
                                                                      <span>Learn more</span></NavLink>
                                                        </div>
                                               </div>
                                               <div className="capability-image-side">
                                                      <img src={sleeving} alt="" />
                                               </div>
                                     </div>
                             </div>
                    </div>
            </div>
    </div>
  )
}

export default Capabilities