import React, { useEffect, useState} from 'react'
import "../css/about.css"
import Navigation from "../components/Navigation/Navigation"
import AboutBody from '../components/AboutBody'
import Choose from "../components/Choose"
import Nudge from "../components/Nudge"
import Team from '../components/Team'
import Partners from "../components/Partners"
import Footer from "../components/Footer"
import Preloader from '../components/Preloader'
const About = () => {
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
                    <div className="hero-intro">
                            <Navigation />
                            <div className="hero-content">
                                     <div className="inner-row">
                                              <h1>About McDave</h1>
                                     </div>
                            </div>
                    </div>
                    <AboutBody />
                    <Choose />
                    <Nudge />
                    <Team />
                    <Partners />
                    <Footer />
             </>  
        }
     </>
  )
}

export default About