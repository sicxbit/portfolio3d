import React from 'react'
import SpacemanCanvas from './Spaceman.jsx'

const Hero = ({ scrollContainer }) => {
  return (
    <div id="hero" class="parallax">
      <h1>Hero section</h1>
      <img class="background" src='src/assets/parallax/background.svg' alt='' />
      <img class="forest_line"src='src/assets/parallax/treeline.svg' alt='' />
      <img class="mountains" src='src/assets/parallax/mountains.svg' alt='' />
      <img class="northern_lights_1" src='src/assets/parallax/northernLights.svg' alt='' />
      <img class="river" src='src/assets/parallax/river.svg' alt='' />
      <img class="stars"src="src/assets/parallax/stars.svg" alt="" />
      <img class="trees"src="src/assets/parallax/trees.svg" alt="" />
      <SpacemanCanvas />
    </div>
  )
}

export default Hero