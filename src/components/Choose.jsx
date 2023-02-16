import React from 'react'
import capacity from "../assets/capacity.jpg"
import production from "../assets/production.jpg"
import systems from "../assets/systems.jpg"
import factory2 from "../assets/factory2.jpg"


const Choose = () => {
  return (
    <div className='choose-section'>
            <div className="inner-row">
                    <div className="choose-section-content">
                             <div className="choose-intro">
                                     <h3>Why Choose Us</h3>
                                     <h1>We create value through growth and profitability.</h1>
                             </div>

                             <div className="choose-section-row">
                                     <div className="images-side-column">
                                                <div className="choose-image-moja">
                                                       <img src={factory2} alt="" />
                                                </div>
                                                <div className="choose-image-moja">
                                                       <img src={production} alt="" />
                                                </div>
                                                <div className="tight-circle"></div>
                                                <div className="choose-image-moja">
                                                       <img src={systems} alt="" />
                                                </div>
                                                <div className="choose-image-moja">
                                                       <img src={capacity} alt="" />
                                                </div>
                                     </div>
                                     <div className="description-side-column">
                                             <div className="choose-moja">
                                                      <span>1</span>
                                                      <h2>R & D</h2>
                                                      <p>All Mcdave products must go through rigorous lab trails, analysis and consumer testing to guarantee best in class performance.</p>
                                             </div>
                                             <div className="choose-moja">
                                                      <span>2</span>
                                                      <h2>Systems & Processes</h2>
                                                      <p>We consistently maintain high standards in manufacturing and implement training programs to sustains the systems.</p>
                                             </div>
                                             <div className="choose-moja">
                                                      <span>3</span>
                                                      <h2>Facilities & Equipment</h2>
                                                      <p>We have invested in state of the art processing and packing plants to guarantee the best in class product quality.</p>
                                             </div>
                                             <div className="choose-moja">
                                                      <span>4</span>
                                                      <h2>Capacity</h2>
                                                      <p>We have been keen to invest heavily in production and storage capacity to ensure the highest GMP standards</p>
                                             </div>
                                             <div className="choose-moja">
                                                      <span>5</span>
                                                      <h2>Supplier Resistance</h2>
                                                      <p>We maintain a strict monitoring of performance for our suppliers as required by the QMS system to ensure we never run out of RM & PM.</p>
                                             </div>
                                             <div className="choose-moja">
                                                      <span>6</span>
                                                      <h2>Performance Track Record</h2>
                                                      <p>We have consistently achieved performance targets , the most critical being 98% fulfilled customer orders.</p>
                                             </div>
                                     </div>
                             </div>
                    </div>
            </div>
    </div>
  )
}

export default Choose