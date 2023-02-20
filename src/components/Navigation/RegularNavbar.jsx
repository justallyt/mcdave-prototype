import React, { useContext } from 'react'
import logo from "../../assets/logo2.png"
import { CgMenuRightAlt } from "react-icons/cg"
import { sidebarContext } from './sidebarcontext'
import { NavLink, useLocation } from 'react-router-dom'
import { FiPhoneCall } from "react-icons/fi"
const RegularNavbar = () => {
        const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext)

        const toggleMenu = () =>{
                setSidebarStatus(!sidebarStatus)
        }

        const location = useLocation()
      const locator = location.pathname.slice(1, 8)
  return (
    <header>
             <div className="inner-row">
                     <div className="header-content">
                             <div className="header-content-left">
                                     <div className="logo">
                                              <NavLink to={'/'}>
                                                   <img src={logo} alt="" />
                                             </NavLink>
                                     </div>
                                     <nav>
                                            <ul>
                                                  <li><NavLink to={'/'}>Home</NavLink></li>
                                                  <li><NavLink to={'/about-us/'} activeclassname="active">About Us</NavLink></li>
                                                  <li><NavLink to={'/services/'} className={locator === 'service' ? 'active' : null} activeclassname="active" >Services</NavLink>
                                                        <div className="dropdown show">
                                                                <ul>
                                                                        <li><NavLink to={'/service/contract-manufacturing/'}>Contract Manufacturing</NavLink></li>
                                                                        <li><NavLink to={'/service/packing-and-repacking/'}>Packing & Repacking</NavLink></li>
                                                                        <li><NavLink to={'/service/date-coding/'}>Date Coding</NavLink></li>
                                                                        <li><NavLink to={'/service/promotional-banding/'}>Promotional Banding</NavLink></li>
                                                                        <li><NavLink to={'/service/sleeving/'}>Sleeving</NavLink></li>
                                                                </ul>
                                                        </div>
                                                  </li>
                                                  <li><NavLink to={'/contact-us/'} activeclassname="active">Contact Us</NavLink></li> 
                                            </ul>
                                     </nav>
                             </div>
                             <div className="header-content-right">
                                       {/* <div className="number">
                                               <h3>Call Us: +254 207859680</h3>
                                       </div> */}
                                       <div className="header-btn">
                                                 <button><span><FiPhoneCall /></span> +254 207859680</button>
                                       </div>
                             </div>

                             <div className="menu-btn">
                                       <span onClick={toggleMenu}><CgMenuRightAlt /></span>
                             </div>
                     </div>
             </div>
    </header>
  )
}

export default RegularNavbar