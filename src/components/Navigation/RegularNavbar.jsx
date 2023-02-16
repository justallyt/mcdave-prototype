import React, { useContext } from 'react'
import logo from "../../assets/logo2.png"
import { CgMenuRightAlt } from "react-icons/cg"
import { sidebarContext } from './sidebarcontext'
import { NavLink } from 'react-router-dom'
const RegularNavbar = () => {
        const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext)

        const toggleMenu = () =>{
                setSidebarStatus(!sidebarStatus)
        }

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
                                                  <li><NavLink to={'/company/'} activeclassname="active">Company</NavLink></li>
                                                  <li><NavLink to={'/expertise/'} activeclassname="active" >Expertise</NavLink>
                                                        <div className="dropdown show">
                                                                <ul>
                                                                        <li><NavLink to={'/expertise/contract-manufacturing/'}>Contract Manufacturing</NavLink></li>
                                                                        <li><NavLink to={'/expertise/custom-manufacturing/'}>Custom Manufacturing</NavLink></li>
                                                                        <li><NavLink to={'/expertise/in-house-products/'}>Inhouse Products</NavLink></li>
                                                                </ul>
                                                        </div>
                                                  </li>
                                                  {/* <li><NavLink to={'/portfolio/'} activeclassname="active">Portfolio</NavLink></li>  */}
                                            </ul>
                                     </nav>
                             </div>
                             <div className="header-content-right">
                                       <div className="number">
                                               <h3>Call Us: +254 207859680</h3>
                                       </div>
                                       <div className="header-btn">
                                                 <NavLink to={'/contact-us/'}>Request a Quote</NavLink>
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