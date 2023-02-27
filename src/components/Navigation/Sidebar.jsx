import React, { useContext, useEffect, useRef } from 'react'
import logo from "../../assets/logo.png"
import {VscClose } from "react-icons/vsc"
import {sidebarContext} from "./sidebarcontext"
import { NavLink, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { FiPhoneCall } from "react-icons/fi"

const Sidebar = () => {
  const [status, setStatus] = useContext(sidebarContext)
  const sidebarContainer = useRef()
  const overlay = useRef()
  const sidebarBox = useRef()
 
  const removeMenu = () =>{
         setStatus(!status);
  }
  useEffect(() =>{
         if(status){
               sidebarContainer.current.classList.add('active')
               sidebarBox.current.classList.add('active')
               overlay.current.classList.add('active')

               gsap.to(overlay.current, {
                       duration: 1,
                       y: '100%',
                       ease: "power2", 
                  })
               gsap.to(sidebarBox.current, {
                      duration: 1,
                      x: '0',
                      ease: 'power2',
                      delay: 1
               })
         }

         if(!status && sidebarContainer.current.classList.contains('active')){
               gsap.to(sidebarBox.current, {
                       duration: 1,
                       x: '-100%',
                       ease: 'power2',
                })
                gsap.to(overlay.current, {
                       duration: 1,
                       y: '0',
                       ease: 'power2',
                       delay: 1
              })
              setTimeout(()=>{
                    sidebarBox.current.classList.remove("active")
                    overlay.current.classList.remove("active")
                    sidebarContainer.current.classList.remove('active')
              }, 2000)
         }
  }, [status])

  const location = useLocation()
  const locator = location.pathname.slice(1, 8)
  return (
    <div  ref={sidebarContainer} className='sidebar-container'>
           <div ref={overlay} className="sidebar-overlay"></div>
           <div ref={sidebarBox} className="sidebar-content">
                   <div className="inner-row">
                         <div className="logo">
                                 <a href="s">
                                        <img src={logo} alt="" />
                                 </a>
                                 <span onClick={removeMenu}>
                                        <VscClose />
                                 </span>
                          </div>
                          <nav>
                                 <ul>
                                          <li><NavLink to={'/'}>Home</NavLink></li>
                                           <li><NavLink to={'/about-us/'} activeclassname="active">About Us</NavLink></li>
                                           <li className='with__dropdown'><NavLink to={'/services/'} className={locator === 'service' ? 'active' : null} activeclassname="active" >Services</NavLink>
                                                 <div className="dropdown show">
                                                         <ul>
                                                                 <li onClick={removeMenu}><NavLink to={'/service/contract-manufacturing/'}>Contract Manufacturing</NavLink></li>
                                                                 <li onClick={removeMenu}><NavLink to={'/service/packing-and-repacking/'}>Packing & Repacking</NavLink></li>
                                                               <li onClick={removeMenu}><NavLink to={'/service/date-coding/'}>Date Coding</NavLink></li>
                                                              <li onClick={removeMenu}><NavLink to={'/service/promotional-banding/'}>Promotional Banding</NavLink></li>
                                                             <li onClick={removeMenu}><NavLink to={'/service/sleeving/'}>Sleeving</NavLink></li>
                                                                </ul>
                                                        </div>
                                                  </li>
                                                  <li><NavLink to={'/contact-us/'} activeclassname="active">Contact Us</NavLink></li> 
                                            </ul>
                          </nav>
                           <div className="sidebar-extra">
                                 <div className="header-btn">
                                      <button><span><FiPhoneCall /></span> +254 207859680</button>
                                 </div>
                           </div>
                   </div>
           </div>
    </div>
  )
}

export default Sidebar