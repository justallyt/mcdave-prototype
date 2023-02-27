import React, { useState, useEffect} from 'react'
import "../css/expertise.css"
import Navigation from '../components/Navigation/Navigation'
import ServiceBody from '../components/ServiceBody'
import Footer from '../components/Footer'
import Nudge from '../components/Nudge'
import Preloader from '../components/Preloader'
const Expertise = () => {
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
            <div className="hero-intro expertise">
                     <Navigation />
                     <div className="hero-content">
                              <div className="inner-row">
                                       <h1>Experts in Manufacturing</h1>
                              </div>
                     </div>
             </div>
             <ServiceBody />
             <Nudge />
             <Footer />
       </>
       }
      </>
  )
}

export default Expertise