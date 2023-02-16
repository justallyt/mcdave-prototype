import React from 'react'
import client1 from "../assets/client6-hover.png"
import client2 from "../assets/client-logo-4.png"
import client3 from "../assets/clientlogo-11.png"
import client4 from "../assets/clientlogo-5.png"
import client5 from "../assets/clientlogo-6.png"
import client6 from "../assets/clientlogo-8.png"
import client7 from "../assets/clientlogo-9.png"
import client8 from "../assets/clientlogo-12.png"
import Testimonials from './Testimonials'
const Partners = () => {
  return (
    <div className='partners-section'>
            <div className="inner-row">
                    <div className="partners-section-content">
                             <h1>Clients we have worked with</h1>

                             <div className="clientele-section-row">
                                     <div className="client-moja">
                                           <img src={client1} alt="" />
                                     </div>
                                     <div className="client-moja">
                                           <img src={client2} alt="" />
                                     </div>
                                     <div className="client-moja">
                                           <img src={client3} alt="" />
                                     </div>
                                     <div className="client-moja">
                                           <img src={client4} alt="" />
                                     </div>
                                     <div className="client-moja">
                                           <img src={client5} alt="" />
                                     </div>
                                     <div className="client-moja">
                                           <img src={client6} alt="" />
                                     </div>
                                     <div className="client-moja">
                                           <img src={client7} alt="" />
                                     </div>
                                     <div className="client-moja">
                                           <img src={client8} alt="" />
                                     </div>
                             </div>

                             <Testimonials />
                    </div>
            </div>
    </div>
  )
}

export default Partners