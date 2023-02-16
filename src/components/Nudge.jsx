import React from 'react'
import { RxArrowRight } from "react-icons/rx"
import { NavLink } from 'react-router-dom'

const Nudge = () => {
  return (
    <div className='nudge-section'>
             <div className="inner-row">
                       <div className="nudge-section-content">
                            <div className="bg-circle"></div>
                            <div className="bg-small-circle"></div>
                                <h1>Do you want to Manufacture something? We can help you.</h1>
                                <p>We have deployed highly skilled quality personnel who run a rigorous monitoring measuring analysis and evaluation process to guarantee the quality of every product we release.
                                      </p>
                                <NavLink to={'/contact-us/'}>Get in Touch <span><RxArrowRight /></span></NavLink>
                       </div>
             </div>
    </div>
  )
}

export default Nudge