import React, { useContext, useState } from 'react'
import SpacemanCanvas from './Spaceman.jsx'
import { ScrollContext } from './ScrollContext';

const Hero = () => {
  const { scrollY } = useContext(ScrollContext);
  const showSpacemanAndTitle = scrollY <= 900
  
  return (
    <div class="homepage">
      <div id="hero" class="parallax">
        {showSpacemanAndTitle && (
          <div class="title_section">
            <h1 class="title_header">Arunjith T S</h1>
            <span class="title_description">
              I make websites
            </span>
          </div>
        )}
        <div className="background-container">
          <img src='src/assets/parallax/background.svg' alt='' />
        </div>
        <div className="forest_line-container">
          <img src='src/assets/parallax/treeline.svg' alt='' />
        </div>
        {showSpacemanAndTitle && (
          <div className='spaceman-container'>
            <SpacemanCanvas />
          </div>
        )}
        <div className="mountains-container">
          <img src='src/assets/parallax/mountains.svg' alt='' />
        </div>
        <div className="trees-container">
          <img src="src/assets/parallax/trees.svg" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Hero
