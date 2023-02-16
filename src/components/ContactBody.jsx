import React from 'react'
import { MdMapsHomeWork } from "react-icons/md"
import { BsEnvelope } from "react-icons/bs"
import { FiPhoneCall } from "react-icons/fi"

const ContactBody = () => {

  return (
    <div className='contactbody-section'>
           <div className="inner-row">
                  <div className="contact-body-content">
                          <div className="quick-details-row">
                                   <div className="column">
                                            <div className="icon-section">
                                                     <span><MdMapsHomeWork /></span>
                                            </div>
                                            <div className="column-text">
                                                    <p>63 Enterprise road, Industrial Area, Unit No.1</p>
                                            </div>
                                   </div>
                                   <div className="column">
                                            <div className="icon-section">
                                                    <span><BsEnvelope /></span>
                                            </div>
                                            <div className="column-text">
                                                   <p>production@mcdave.co.ke</p>
                                                    <p>support@mcdave.co.ke</p>
                                            </div>
                                   </div>
                                   <div className="column">
                                           <div className="icon-section">
                                                  <span><FiPhoneCall /></span>
                                           </div>
                                           <div className="column-text">
                                                    <p>+254 728319893</p>
                                                    <p>+254 20 7859680</p>
                                           </div>
                                   </div>
                          </div>

                          <div className="form-section">
                                 <div className="form-intro">
                                        <h1>Ready to get Started?</h1>
                                        <p>If you have a manufacturing inquiry, a general inquiry or you’re looking for a job you’ve come to the right place. Complete the form below, and somebody will get back to you right away.</p>
                                 </div>

                                 <div className="form-body">
                                        <form action="">
                                                 <div className="form-row">
                                                         <div className="form-column">
                                                                <label htmlFor="name">Full Name</label>
                                                                <input type="text" className='form-control' name=''  required placeholder=' '/>
                                                         </div>
                                                         <div className="form-column">
                                                                <label htmlFor="name">Email</label>
                                                                <input type="email" className='form-control' name='' placeholder=' ' required/>
                                                         </div>
                                                 </div>
                                                 <div className="form-row">
                                                         <div className="form-column">
                                                                <label htmlFor="phone number">Phone Number</label>
                                                                <input type="number" className='form-control' name=''  required placeholder=' '/>
                                                         </div>
                                                         <div className="form-column">
                                                                <label htmlFor="service">Choose Service</label>
                                                                <select name="" id="" className='form-control'>
                                                                       <option value="General Inquiry">General Inquiry</option>
                                                                       <option value="Contract Manufacturing">Contract Manufacturing</option>
                                                                       <option value="Custom Manufacturing">Custom Manufacturing</option>
                                                                       <option value="Sales">Sales</option>
                                                                </select>
                                                         </div>
                                                 </div>
                                                 <div className="form-row">
                                                         <div className="form-column">
                                                                <label htmlFor="company">Company Name</label>
                                                                <input type="text" className='form-control' name=''  required placeholder=' '/>
                                                         </div>
                                                 </div>
                                                 <div className="form-message">
                                                         <div className="form-column">
                                                                <label htmlFor="message">Message</label>
                                                                <textarea name="" className='form-control' id="" cols="30" rows="10" placeholder=' '></textarea>
                                                         </div>
                                                 </div>

                                                 <div className="form-btn">
                                                         <button type="submit" className='form-btn'>Send Message</button>
                                                 </div>
                                        </form>
                                 </div>
                          </div>

                          
                  </div>
           </div>
    </div>
  )
}

export default ContactBody