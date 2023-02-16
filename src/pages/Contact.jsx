import React from 'react'
import '../css/contact.css'
import Navigation from '../components/Navigation/Navigation'
import ContactBody from '../components/ContactBody'
import Footer from '../components/Footer'
import Map from '../components/Map'
const Contact = () => {
  return (
    <>
       <div className="hero-intro contact">
                  <Navigation />
                  <div className="hero-content">
                           <div className="inner-row">
                                    <h1>Contact Us</h1>
                           </div>
                  </div>
          </div>
          <ContactBody />
          <Map />
          <Footer />
    </>
  )
}

export default Contact