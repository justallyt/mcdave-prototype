import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import SingleServiceBody from '../components/SingleServiceBody'
import { capabilities } from '../data/capabilities'
import Nudge from "../components/Nudge"
import Footer from "../components/Footer"
import Preloader from '../components/Preloader'
const SingleCapability = () => {
    const param = useParams()
    const wanted_data = capabilities.filter(item => item.url_param === param.id)
    const real_data = wanted_data[0]
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
          <div className="hero-intro single-service-section">
                   <Navigation />
                   <div className="hero-content">
                            <div className="hero-image-overlay">
                                    <img src={real_data.hero_image} alt="" />
                            </div>
                            <div className="darken_overlay"></div>
                            <div className="inner-row">
                                     <h1>{real_data.title}</h1>
                            </div>
                   </div>
           </div>
           <SingleServiceBody data={real_data} />
           <Nudge />
           <Footer />
     </>
          }
      </>
  )
}

export default SingleCapability