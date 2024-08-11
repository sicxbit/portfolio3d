import React from 'react'
import SpacemanCanvas from './Spaceman.jsx'

const Hero = ({ scrollContainer }) => {
  return (
    <div class="homepage">
      <div id="hero" class="parallax">
        <div class="title_section">
          <h1 class="title_header">Arunjith T S</h1>
          <span class="title_description">
            I make websites
          </span>
        </div>
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