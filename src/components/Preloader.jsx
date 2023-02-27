import React from 'react'
import { BallTriangle } from 'react-loader-spinner'
const Preloader = ({ load }) => {
  return (
    <div className={ load ? 'preloader-screen' : 'preloader-screen remove'}>
        <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#2e9747"
               ariaLabel="ball-triangle-loading"
              visible={true}
             />
       </div>
  )
}

export default Preloader