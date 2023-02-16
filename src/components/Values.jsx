import React from 'react'
import value1 from "../assets/vehicle.png"
import value2 from "../assets/passion.png"
import value3 from "../assets/meeting.png"
import value4 from "../assets/data-integration.png"

const Values = () => {
  return (
    <div className='values-section'>
           <div className="values-section-content">
                    <h1>Our Values</h1>
                   <div className="values-row">
                           <div className="value-moja">
                                    <div className="value-icon">
                                             <img src={value1} alt="" />
                                    </div>
                                    <h2>Service</h2>
                                    <p>We deliver what we commit</p>
                           </div>
                           <div className="value-moja">
                                    <div className="value-icon">
                                             <img src={value3} alt="" />
                                    </div>
                                    <h2>Humility</h2>
                                    <p>We are ready to listen and learn</p>
                           </div>
                           <div className="value-moja">
                                    <div className="value-icon">
                                             <img src={value4} alt="" />
                                    </div>
                                    <h2>Integrity</h2>
                                    <p>We do what we said we'll do</p>
                           </div>
                           <div className="value-moja">
                                    <div className="value-icon">
                                             <img src={value2} alt="" />
                                    </div>
                                    <h2>Passion</h2>
                                    <p>We put our hearts in what we do</p>
                           </div>
                   </div>
           </div>
    </div>
  )
}

export default Values