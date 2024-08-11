import React from 'react'
import SpacemanCanvas from './Spaceman.jsx'

const Hero = ({ scrollContainer }) => {
  return (
    <div class="homepage">
      <h1>hello</h1>
      <div id="hero" class="parallax">
        <div className="background-container">
          <img src='src/assets/parallax/background.svg' alt='' />
        </div>
        <div className="forest_line-container">
          <img src='src/assets/parallax/treeline.svg' alt='' />
        </div>
        <div className='spaceman-container'>
          <SpacemanCanvas />
        </div>
        <div className="mountains-container">
          <img src='src/assets/parallax/mountains.svg' alt='' />
        </div>
        <div className="river-container">
          <img src='src/assets/parallax/river.svg' alt='' />
        </div>
        <div className="trees-container">
          <img src="src/assets/parallax/trees.svg" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Hero