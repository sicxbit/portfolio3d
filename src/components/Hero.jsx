import React, { useContext } from 'react';
import SpacemanCanvas from './Spaceman.jsx';
import { ScrollContext } from './ScrollContext';
import background from '../assets/parallax/background.svg';
import mountains from '../assets/parallax/mountains.svg';
import trees from '../assets/parallax/trees.svg';
import treeline from '../assets/parallax/treeline.svg';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Hero = () => {
  const { scrollY } = useContext(ScrollContext);
  const showSpacemanAndTitle = scrollY <= 900;

  return (
    <div className="hero-container">
      <div className="background">
        {showSpacemanAndTitle && (
          <div className="title_section">
            <h1 className="title_header">Arunjith T S</h1>
            <span className="title_description">
              what is wrong with this borders man?
            </span>
          </div>
        )}
        <div className="background-container">
          <img src={background} alt="Background" />
        </div>
        {showSpacemanAndTitle && (
          <div className="spaceman-container">
            <SpacemanCanvas />
          </div>
        )}
        <Canvas>
          <Stars  className="stars"/>
        </Canvas>
        <div className="mountainsAndTrees-container">
          <div className="mountains-container">
            <img src={mountains} alt="Mountains" />
          </div>
          <div className="trees-container">
            <img src={trees} alt="Trees" />
          </div>
          <div className="forest_line-container">
            <img src={treeline} alt="Forest Line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
