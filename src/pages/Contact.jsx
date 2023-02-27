import React , { useEffect, useState} from 'react'
import '../css/contact.css'
import Navigation from '../components/Navigation/Navigation'
import ContactBody from '../components/ContactBody'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Preloader from '../components/Preloader'
const Contact = () => {
  const [loading, setLoading] = useState(true)
  const timeBefore = new Date().getTime()
 
  useEffect(() =>{
    const timeAfter = new Date().getTime()
    const loadingTime = timeAfter - timeBefore
  
    setTimeout(() =>{
          setLoading(false)
    }, loadingTime + 2000)
  }, [timeBefore])
  return (
      <>
            { loading ? 
               <Preloader load={loading} />
            : 
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
            }
      </>
  )
}

export default Contact