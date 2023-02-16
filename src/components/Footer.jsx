import React from 'react'
import { FiPhoneCall } from "react-icons/fi"
import { GiPostOffice } from "react-icons/gi"
import  { BsSignpostSplit } from 'react-icons/bs'
import { RiCellphoneLine } from 'react-icons/ri'
import  {BsEnvelopeOpen } from "react-icons/bs"
import { HiOutlineArrowRight } from "react-icons/hi"
import { ImFacebook } from "react-icons/im"
import { ImTwitter } from "react-icons/im"
import { AiFillInstagram } from "react-icons/ai"
import { RiLinkedinFill } from "react-icons/ri"
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer-section'>
          <div className="inner-row">
                   <div className="footer-content">
                            <div className="footer-nudge">
                                     <h1>Request Manufacturing Support</h1>
                                     <a href="s">
                                            <span><FiPhoneCall /></span>
                                     </a>
                                     <h3><span> Call Us on : </span>+254 207 859 680</h3>
                            </div>

                            <div className="footer-specifics">
                                     <div className="footer-specific-column">
                                             <h2>Manufacturing Solutions</h2>
                                             <ul>
                                                  <li>
                                                         <span><HiOutlineArrowRight ></HiOutlineArrowRight></span>
                                                         <NavLink to={'/expertise/contract-manufacturing/'}>Product Manufacture</NavLink>
                                                   </li>
                                                   <li>
                                                         <span><HiOutlineArrowRight ></HiOutlineArrowRight></span>
                                                         <NavLink to={'/expertise/custom-manufacturing/'}> Packing & Repacking</NavLink>
                                                   </li>
                                                   <li>
                                                         <span><HiOutlineArrowRight ></HiOutlineArrowRight></span>
                                                         <NavLink to={'/expertise/custom-manufacturing/'}>Date Coding</NavLink>
                                                   </li>
                                                   <li>
                                                         <span><HiOutlineArrowRight ></HiOutlineArrowRight></span>
                                                         <NavLink to={'/expertise/custom-manufacturing/'}>Promotional Banding</NavLink>
                                                   </li>
                                                   <li>
                                                         <span><HiOutlineArrowRight ></HiOutlineArrowRight></span>
                                                         <NavLink to={'/expertise/custom-manufacturing/'}>Sleeving</NavLink>
                                                   </li>
                                             </ul>
                                     </div>
                                     <div className="footer-specific-column">
                                             <h2>Contact Us</h2>

                                             <ul>
                                                    <li>
                                                          <span><BsSignpostSplit /></span>
                                                          63 Enterprise road, Industrial Area, Unit No.1
                                                    </li>
                                                    <li>
                                                          <span><GiPostOffice /></span>
                                                          P. O Box 86089 - 00200 Nairobi
                                                    </li>
                                                    <li>
                                                          <span><RiCellphoneLine /></span>
                                                          Cell: +254 728319893
                                                    </li>
                                                    <li>
                                                          <span><BsEnvelopeOpen /></span>
                                                          manufacturing@mcdave.co.ke
                                                    </li>
                                             </ul>
                                     </div>
                            </div>
                   </div>
          </div>
          <div className="copyright">
                   <p>All Rights Reserved &copy; { new Date().getFullYear() } Mcdave Holdings Ltd</p>
                   <div className="social-links">
                          <ul>
                               <li><a href="s"><ImFacebook /></a></li>
                               <li><a href="s"><ImTwitter /></a></li>
                               <li><a href="s"><AiFillInstagram /></a></li>
                               <li><a href="s"><RiLinkedinFill /></a></li>
                          </ul>
                   </div>
          </div>
    </div>
  )
}

export default Footer