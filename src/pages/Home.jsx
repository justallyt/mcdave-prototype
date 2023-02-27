import React, { useState, useEffect } from 'react'
import "../css/home.css"
import Preloader from '../components/Preloader'
import HeroSection from '../components/HeroSection'
import Navigation from '../components/Navigation/Navigation'
import AboutSection from '../components/AboutSection'
import Capabilities from '../components/Capabilities'
import Choose from '../components/Choose'
import Nudge from '../components/Nudge'
import Partners from '../components/Partners'
import Footer from '../components/Footer'

const Home = () => {
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
                  <div className="landing">
                           <Navigation />
                           <HeroSection />
                  </div>
                  <AboutSection />
                  <Capabilities />
                  <Choose />
                  <Nudge />
                  <Partners />
                  <Footer />
               </>
            }
      </>
  )
}

export default Home