import React, { useContext, useEffect, useRef } from 'react'
import logo from "../../assets/logo.png"
import {VscClose } from "react-icons/vsc"
import {sidebarContext} from "./sidebarcontext"
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'
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
                                        <li><NavLink to={'/company/'} activeclassname="active">Company</NavLink></li>
                                        <li className='with__dropdown'><NavLink to={'/expertise/'} activeclassname="active">Expertise</NavLink>
                                                   <div className="dropdown show">
                                                                <ul>
                                                                        <li><NavLink>Contract Manufacturing</NavLink></li>
                                                                        <li><NavLink>Custom Manufacturing</NavLink></li>
                                                                        <li><NavLink>Inhouse Products</NavLink></li>
                                                                </ul>
                                                        </div>
                                        </li>
                                        {/* <li><NavLink to={'/portfolio/'} activeclassname="active">Portfolio</NavLink></li>  */}
                                 </ul>
                          </nav>
                           <div className="sidebar-extra">
                                   <div className="number">
                                          <h3>Call Us: : +254 207859680</h3>
                                   </div>
                                   <div className="header-btn">
                                              <NavLink to={'/contact-us/'}>Request a Quote</NavLink>
                                     </div>
                           </div>
                   </div>
           </div>
    </div>
  )
}

export default Sidebar